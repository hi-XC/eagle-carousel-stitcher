'use strict';
const {test}=require('node:test'), assert=require('node:assert/strict'), fs=require('node:fs'), vm=require('node:vm'), path=require('node:path');
test('bundled script initializes and lets user read the current Eagle selection', async () => {
  const elements=new Map();
  function element(id) {
    if (!elements.has(id)) elements.set(id,{value:'',textContent:'',className:'',disabled:false,checked:false,children:[],classList:{add(){},remove(){},toggle(){}},addEventListener(){},replaceChildren(...a){this.children=a},append(...a){this.children.push(...a)},setAttribute(){},contains(){return false}});
    return elements.get(id);
  }
  const callbacks={}; let selections=0;
  const document={getElementById:element,createElement:()=>element(Symbol()),createTextNode:s=>s,addEventListener(){},documentElement:{setAttribute(){}},createTreeWalker:()=>({nextNode:()=>null}),querySelectorAll:()=>[],querySelector:element};
  const eagle={app:{theme:'DARK',locale:'zh_CN'},item:{getSelected:async()=>{selections++;return []}},onPluginCreate:fn=>callbacks.create=fn,onPluginRun:fn=>callbacks.run=fn};
  const context={require,document,eagle,window:{addEventListener(){}},Image:function(){},Buffer,console,Date,Set,Promise,setTimeout,clearTimeout};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../Plugin/dist/app.js'),'utf8'),context);
  assert.equal(typeof callbacks.create,'function'); assert.equal(typeof callbacks.run,'function');
  await callbacks.create(); assert.equal(selections,1); assert.equal(element('status').textContent,'');
  element('readSelection').onclick(); await new Promise(resolve=>setImmediate(resolve)); assert.equal(selections,2);assert.match(element('status').textContent,/选中素材/);
});

test('shows inherited selections and appends one selected image without replacing the list', async () => {
  const elements=new Map(), events=new Map(); let finishBlob, blobCalls=0;
  function element(id) {
    if (!elements.has(id)) {
    const classes=new Set();
    elements.set(id,{
      value:'',textContent:'',className:'',disabled:false,checked:false,children:[],style:{},
      classList:{add(name){classes.add(name)},remove(name){classes.delete(name)},toggle(name,force){if(force===undefined)force=!classes.has(name);force?classes.add(name):classes.delete(name)},contains(name){return classes.has(name)}},addEventListener(name,fn){events.set(String(id)+':'+name,fn)},
      replaceChildren(...a){this.children=a},append(...a){this.children.push(...a)},setAttribute(){},contains(){return false},
      getContext(){return {drawImage(){}}},toBlob(callback){blobCalls++;finishBlob=callback;},focus(){}
    });
    }
    return elements.get(id);
  }
  const callbacks={};
  const items=[
    {id:'a',name:'01',ext:'jpg',filePath:'/tmp/a.jpg',tags:['common','first'],folders:['folder']},
    {id:'b',name:'02',ext:'jpg',filePath:'/tmp/b.jpg',tags:['common'],folders:['folder']},
    {id:'c',name:'03',ext:'jpg',filePath:'/tmp/c.jpg',tags:['common','new'],folders:['folder']}
  ];
  let selected=items.slice(0,2), releaseSelection;
  const document={getElementById:element,createElement:()=>element(Symbol()),createTextNode:s=>s,addEventListener(){},documentElement:{setAttribute(){}},createTreeWalker:()=>({nextNode:()=>null}),querySelectorAll:()=>[],querySelector:element};
  const eagle={app:{theme:'DARK',locale:'zh_CN'},item:{getSelected:async()=>releaseSelection?await new Promise(resolve=>{releaseSelection=()=>resolve(selected)}):selected},folder:{getAll:async()=>[{id:'folder',name:'Design'}]},tag:{get:async()=>[]},onPluginCreate:fn=>callbacks.create=fn,onPluginRun:fn=>callbacks.run=fn};
  class Image { constructor(){this.naturalWidth=100;this.naturalHeight=100;} set src(v){this._src=v;queueMicrotask(()=>this.onload());} get src(){return this._src;} }
  let now=1000;const clock={now:()=>now};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../Plugin/dist/app.js'),'utf8'),{require,document,eagle,window:{addEventListener(){}},requestAnimationFrame:fn=>queueMicrotask(fn),Image,Buffer,console,Date:clock,Set,Promise,setTimeout,clearTimeout});
  await callbacks.create();
  assert.equal(element('items').children.length,2);
  assert.equal(element('tags').children.length,2);
  assert.equal(element('folders').children[0].children[0].textContent,'Design');
  assert.equal(element('openTags').classList.contains('compact'),true);
  assert.equal(element('openFolders').classList.contains('compact'),true);
  element('tags').children[1].children[1].onclick();
  assert.equal(element('tags').children.length,1);
  selected=[items[2]];now+=2000;await callbacks.run();assert.equal(element('items').children.length,2);
  selected=[items[2]]; releaseSelection=()=>{}; element('addSelection').onclick();
  assert.equal(element('imageLoading').classList.contains('hidden'),false);
  assert.equal(element('save').disabled,true); releaseSelection(); releaseSelection=null;
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(element('imageLoading').classList.contains('hidden'),true);
  assert.equal(element('items').children.length,3);
  assert.equal(element('tags').children.length,2);
  assert.equal(element('status').textContent,'');
  element('addSelection').onclick(); await new Promise(resolve=>setImmediate(resolve));
  assert.equal(element('items').children.length,3);
  assert.match(element('status').textContent,/没有新增素材/);
  assert.equal(element('statusToast').classList.contains('hidden'),false);
  element('dismissStatus').onclick();
  assert.equal(element('statusToast').classList.contains('hidden'),true);
  element('save').onclick(); await new Promise(resolve=>setTimeout(resolve,20));
  assert.equal(element('save').classList.contains('is-loading'),true);
  assert.equal(element('save').disabled,true); assert.equal(blobCalls,1);
  element('save').onclick(); assert.equal(blobCalls,1);
  finishBlob(null); await new Promise(resolve=>setImmediate(resolve));
  assert.equal(element('save').classList.contains('is-loading'),false);
  assert.match(element('status').textContent,/编码失败/);
  const last=element('items').children[2];last.children[0].children[1].onclick({stopPropagation(){}});
  assert.equal(element('items').children.length,2);
  assert.deepEqual(element('tags').children.map(chip=>chip.children[0].textContent),['common']);
  element('clearSelection').onclick();
  assert.equal(element('items').children.length,2);
  element('cancelClear').onclick(); assert.equal(element('items').children.length,2);
  element('clearSelection').onclick(); element('confirmClear').onclick();
  assert.equal(element('items').children.length,0);
  assert.equal(element('name').value,'');
  assert.equal(element('openTags').classList.contains('compact'),false);
  assert.equal(element('openFolders').classList.contains('compact'),false);
  assert.equal(element('save').disabled,true);
});
