'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { initialMetadata, dimensions, importThenTrash } = require('../Plugin/core');

test('metadata uses union of tags and intersection of folders', () => {
  const data=initialMetadata([{tags:['a','b'],folders:['x','y'],url:'a',star:2},{tags:['b','c'],folders:['y','z'],url:'b',star:4}]);
  assert.deepEqual(data.tags,['a','b','c']); assert.deepEqual(data.commonTags,['b']); assert.deepEqual(data.folders,['y']); assert.equal(data.foldersDiffer,true); assert.deepEqual(data.urls,['a','b']); assert.deepEqual(data.ratings,[2,4]);
});
test('dimensions preserve pixels and remove only the specified overlap', () => {
  const items=[{width:1080,height:1440,overlap:0},{width:1080,height:1440,overlap:20}];
  assert.deepEqual(dimensions(items,'horizontal'),{width:2140,height:1440});
  assert.deepEqual(dimensions(items,'vertical'),{width:1080,height:2860});
  assert.throws(()=>dimensions([{width:1,height:1},{width:3,height:3,overlap:3}],'horizontal'));
});
test('never moves originals if import or result verification or metadata save fails', async () => {
  let trashed=0; const original={moveToTrash:async()=>{trashed++;return true;}};
  for(const api of [
    {item:{addFromPath:async()=>{throw Error('failed');}}},
    {item:{addFromPath:async()=>null}},
    {item:{addFromPath:async()=> 'id',getById:async()=>null}},
    {item:{addFromPath:async()=> 'id',getById:async()=>({filePath:__filename,save:async()=>false})}},
  ]) await assert.rejects(importThenTrash(api,'file',{},0,[original]));
  assert.equal(trashed,0);
});
test('reports partial trash failure after a verified import', async () => {
  const order=[]; const saved={filePath:__filename,save:async()=>{order.push('save');return true;}}; const api={item:{addFromPath:async()=>{order.push('import');return 'id';},getById:async id=>id==='id'?saved:{isDeleted:false}}};
  const originals=[{id:'a',name:'a',moveToTrash:async()=>{order.push('a');return true;}},{id:'b',name:'b',moveToTrash:async()=>false}];
  assert.deepEqual(await importThenTrash(api,'file',{},3,originals),{id:'id',failed:['b'],uncertain:[]}); assert.deepEqual(order,['import','save','a']);
});
test('does not save the rating again when the imported image already has it', async () => {
  let saves=0;const saved={filePath:__filename,star:0,save:async()=>{saves++;return true;}};
  const api={item:{addFromPath:async()=> 'new',getById:async()=>saved}};
  assert.deepEqual(await importThenTrash(api,'file',{},0,[]),{id:'new',failed:[],uncertain:[]});
  assert.equal(saves,0);
});
test('checks trash state when the deletion result is not true or throws', async () => {
  const saved={filePath:__filename,save:async()=>true};
  const api={item:{addFromPath:async()=> 'new',getById:async id=>id==='new'?saved:id==='moved'||id==='threw'?{isDeleted:true}:id==='remaining'?{isDeleted:false}:null}};
  const originals=[{id:'moved',name:'moved',moveToTrash:async()=>undefined},{id:'threw',name:'threw',moveToTrash:async()=>{throw Error('error')}},{id:'remaining',name:'remaining',moveToTrash:async()=>false},{id:'unknown',name:'unknown',moveToTrash:async()=>false}];
  assert.deepEqual(await importThenTrash(api,'file',{},0,originals),{id:'new',failed:['remaining'],uncertain:['unknown']});
});
test('stops before moving originals when Eagle import times out, even if it later completes', async () => {
  let resolveImport, trashed=0, reads=0;
  const api={item:{addFromPath:()=>new Promise(resolve=>{resolveImport=resolve}),getById:async()=>{reads++;}}};
  await assert.rejects(importThenTrash(api,'file',{},0,[{moveToTrash:async()=>{trashed++}}],10),error=>!!error.pending);
  resolveImport('new'); await new Promise(resolve=>setImmediate(resolve));
  assert.equal(reads,0); assert.equal(trashed,0);
});
test('stops moving remaining originals after a trash operation times out', async () => {
  let resolveTrash, second=0;const saved={filePath:__filename,save:async()=>true};
  const api={item:{addFromPath:async()=> 'new',getById:async()=>saved}};
  const originals=[{moveToTrash:()=>new Promise(resolve=>{resolveTrash=resolve})},{moveToTrash:async()=>{second++}}];
  await assert.rejects(importThenTrash(api,'file',{},0,originals,10),error=>!!error.pending);
  resolveTrash(); await new Promise(resolve=>setImmediate(resolve)); assert.equal(second,0);
});
test('does not move originals when imported metadata differs', async () => {
  let trashed=false;const saved={filePath:__filename,name:'image',tags:['a'],folders:['x'],url:'',annotation:'',save:async()=>true};
  const api={item:{addFromPath:async()=> 'id',getById:async()=>saved}};
  await assert.rejects(importThenTrash(api,'file',{name:'image',tags:['a','missing'],folders:['x']},2,[{moveToTrash:async()=>{trashed=true;return true;}}]));
  assert.equal(trashed,false);
});
test('does not infer a shared source when one original lacks it',()=>{
  const data=initialMetadata([{url:'https://example.com',annotation:'Note'},{url:'',annotation:''}]);
  assert.equal(data.urlShared,false);assert.equal(data.annotationShared,false);
});

test('detects animated PNG and WebP without mistaking static headers', async () => {
  const os=require('node:os'), path=require('node:path'); const {isAnimated}=require('../Plugin/core');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'stitch-test-'));
  try {
    const png=path.join(dir,'test.png'); const sig=Buffer.from([137,80,78,71,13,10,26,10]);
    const chunk=type=>Buffer.concat([Buffer.alloc(4),Buffer.from(type),Buffer.alloc(4)]);
    fs.writeFileSync(png,Buffer.concat([sig,chunk('IHDR'),chunk('acTL'),chunk('IDAT')])); assert.equal(await isAnimated(png,'png'),true);
    fs.writeFileSync(png,Buffer.concat([sig,chunk('IHDR'),chunk('IDAT')])); assert.equal(await isAnimated(png,'png'),false);
    const webp=path.join(dir,'test.webp'), header=Buffer.alloc(32); header.write('RIFF',0); header.write('WEBP',8); header.write('VP8X',12); header[20]=2;
    fs.writeFileSync(webp,header); assert.equal(await isAnimated(webp,'webp'),true); header[20]=0; fs.writeFileSync(webp,header); assert.equal(await isAnimated(webp,'webp'),false);
  } finally {fs.rmSync(dir,{recursive:true,force:true});}
});

test('dragged files are matched to selected Eagle items by content, never by name alone', async () => {
  const os=require('node:os'), path=require('node:path'); const {matchDroppedFiles}=require('../Plugin/core');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'stitch-drop-'));
  try {
    const paths=['a','b','copy','other'].map(name=>path.join(dir,name));
    fs.writeFileSync(paths[0],'abc');fs.writeFileSync(paths[1],'def');fs.writeFileSync(paths[2],'abc');fs.writeFileSync(paths[3],'xyz');
    const items=[{id:'A',filePath:paths[0]},{id:'B',filePath:paths[1]}];
    const file=p=>({path:p,size:fs.statSync(p).size});
    assert.deepEqual((await matchDroppedFiles([file(paths[1]),file(paths[2])],items)).map(x=>x.id),['B','A']);
    await assert.rejects(matchDroppedFiles([file(paths[3]),file(paths[2])],items));
    assert.deepEqual((await matchDroppedFiles([file(paths[0])],items)).map(x=>x.id),['A']);
    await assert.rejects(matchDroppedFiles([file(paths[0])],[]));
  } finally { fs.rmSync(dir,{recursive:true,force:true}); }
});
