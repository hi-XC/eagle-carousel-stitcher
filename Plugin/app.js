'use strict';
const { tr, setLocale, translatePage } = require('./i18n');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { pathToFileURL } = require('url');
const { initialMetadata, dimensions, isAnimated, importThenTrash, matchDroppedFiles, withTimeout } = require('./core');
const {probe,thumbnail,exportVideo}=require('./video');
const $ = id => document.getElementById(id);
const imageTypes = new Set(['jpg','jpeg','png','webp','bmp','tif','tiff']);
const videoTypes = new Set(['mp4','mov','m4v','webm','mkv','avi','mpg','mpeg','flv','ts']);
let entries = [], direction = 'horizontal', zoom = 'fit', folderList = [], tagList = [], metadata, busy = false, loading = false, imported = false, selectedId = null;
const selectedTags = new Set(), selectedFolders = new Set();
const tagOverrides = new Map(), folderOverrides = new Map();
const editedFields = new Set();
let pickerType = 'tags', pickerLimit = 200, pickerTrigger = null;
function updateChoice(type,value,checked) {
  const selected=type==='tags'?selectedTags:selectedFolders, overrides=type==='tags'?tagOverrides:folderOverrides;
  checked?selected.add(value):selected.delete(value);overrides.set(value,checked);
}
function refreshInheritedChoices() {
  for(const [selected,overrides,defaults] of [[selectedTags,tagOverrides,metadata.tags],[selectedFolders,folderOverrides,metadata.folders]]) {
    selected.clear();defaults.forEach(value=>selected.add(value));
    for(const [value,checked] of overrides) checked?selected.add(value):selected.delete(value);
  }
}
function status(message, kind = '') { $('status').textContent = message; $('status').className = kind; $('statusToast').classList.toggle('hidden',!message); }
function setLoading(value) { loading=value; $('imageLoading').classList.toggle('hidden',!value); $('progressAnnouncement').textContent=value?tr('正在加载素材'):''; $('save').disabled=value || busy || imported || entries.length<2; document.querySelector('main').inert=value || busy; }
function setSaving(value) { busy=value; $('save').classList.toggle('is-loading',value); $('save').setAttribute('aria-busy',String(value)); $('save').setAttribute('aria-label',tr(value?'正在生成素材…':'拼接并导入')); $('progressAnnouncement').textContent=value?tr('正在生成素材…'):''; $('save').disabled=value || loading || imported || entries.length<2; $('clearSelection').disabled=value; document.querySelector('main').inert=value || loading; }
function cleanName(name) { return (name || '').replace(/\s*[-_ ]?\d+\s*$/, '').trim() || tr('拼接图片'); }
function loadImage(item) { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => reject(new Error(tr`无法读取图片：${item.name}`)); img.src = pathToFileURL(item.filePath).href; }); }
async function ffmpegPaths() { const module=eagle.extraModule?.ffmpeg; if(!module || !await module.isInstalled()) throw new Error(tr('视频拼接需要 Eagle 官方 FFmpeg 依赖，请先在 Eagle 中安装。')); const paths=await module.getPaths(); if(!paths?.ffmpeg || !paths?.ffprobe || !fs.existsSync(paths.ffmpeg) || !fs.existsSync(paths.ffprobe)) throw new Error(tr('找不到 Eagle 官方 FFmpeg 依赖，请检查安装。')); return paths; }
function imageFromSource(src) { return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(new Error(tr('无法读取视频预览。')));img.src=src;}); }
async function loadVideo(item,paths) { const [info,bytes]=await Promise.all([probe(paths.ffprobe,item.filePath),thumbnail(paths.ffmpeg,item.filePath)]); const image=await imageFromSource('data:image/png;base64,'+bytes.toString('base64')); return {item,image,...info,width:image.naturalWidth,height:image.naturalHeight,kind:'video',overlap:0}; }
function updateAudioOptions() { const videos=entries.filter(entry=>entry.kind==='video'); const previous=$('audioSource').value; $('audioSection').classList.toggle('hidden',!videos.length); $('videoPreviewHint').classList.toggle('hidden',!videos.length); const muted=document.createElement('option'); muted.value=''; muted.textContent=tr('静音'); $('audioSource').replaceChildren(muted); for(const entry of videos.filter(entry=>entry.hasAudio)){const option=document.createElement('option');option.value=entry.item.id;option.textContent=entry.item.name;$('audioSource').append(option);} $('audioSource').value=videos.some(entry=>entry.hasAudio && entry.item.id===previous)?previous:''; }
function updateMetadataFields() {
  if(!metadata || !entries.length)return;
  if(!editedFields.has('name')) $('name').value=tr`${cleanName(entries[0].item.name)} - 拼接`;
  if(!editedFields.has('url')) $('url').value=metadata.urlShared?(metadata.urls[0]||''):'';
  if(!editedFields.has('annotation')) $('annotation').value=metadata.annotationShared?(metadata.annotations[0]||''):'';
  if(!editedFields.has('rating')) $('rating').value=metadata.ratings.length===1?String(metadata.ratings[0]):'';
  $('urlOptions').replaceChildren(...metadata.urls.map(value=>{const o=document.createElement('option');o.value=value;return o;}));
  $('annotations').replaceChildren();
  if(!metadata.annotationShared) metadata.annotations.forEach((text,index)=>{const button=document.createElement('button');button.textContent=tr`使用原素材备注 ${index+1}：${text}`;button.title=text;button.onclick=()=>{$('annotation').value=text;editedFields.add('annotation');};$('annotations').append(button);});
}
function flattenFolders(nodes, prefix = '', out = []) { for (const node of nodes || []) { if (!node || !node.id) continue; const label = prefix ? `${prefix} / ${node.name}` : node.name; if (!out.some(x => x.id === node.id)) out.push({id: node.id, name: label}); if (node.children) flattenFolders(node.children, label, out); } return out; }
function renderChoices() {
  $('openTags').disabled=entries.length===0;$('openFolders').disabled=entries.length===0;
  $('openTags').classList.toggle('compact',selectedTags.size>0);
  $('openFolders').classList.toggle('compact',selectedFolders.size>0);
  for (const [id, selected, list, key] of [['tags',selectedTags,tagList,'name'],['folders',selectedFolders,folderList,'id']]) {
    const container=$(id); container.replaceChildren();
    for (const value of selected) {
      const chip=document.createElement('span'); chip.className='selected-chip';
      const name=(list.find(item=>item[key]===value) || {}).name || value;
      const label=document.createElement('span'); label.textContent=name;
      const remove=document.createElement('button'); remove.textContent='×'; remove.setAttribute('aria-label',tr`移除 ${name}`);
      remove.onclick=()=>{updateChoice(id,value,false); renderChoices();};
      chip.append(label,remove); container.append(chip);
    }
  }
}
function openPicker(type) {
  pickerType=type; pickerLimit=200; pickerTrigger=document.activeElement; $('pickerSearch').value='';
  document.querySelector('.app').inert=true;
  $('picker').classList.remove('hidden'); $('pickerTitle').textContent=type==='tags'?tr('选择标签'):tr('选择文件夹');
  renderPicker(); $('pickerSearch').focus();
}
function renderPicker() {
  const data=pickerType==='tags'?tagList:folderList, selected=pickerType==='tags'?selectedTags:selectedFolders, key=pickerType==='tags'?'name':'id';
  const query=$('pickerSearch').value.trim().toLocaleLowerCase();
  const filtered=data.filter(item=>item.name.toLocaleLowerCase().includes(query));
  filtered.sort((a,b)=>Number(selected.has(b[key]))-Number(selected.has(a[key])) || a.name.localeCompare(b.name,undefined,{numeric:true}));
  $('pickerList').replaceChildren();
  for (const entry of filtered.slice(0,pickerLimit)) {
    const label=document.createElement('label'), input=document.createElement('input'), name=document.createElement('span');
    label.className='picker-row'; input.type='checkbox'; input.checked=selected.has(entry[key]); name.textContent=entry.name;
    input.onchange=()=>{updateChoice(pickerType,entry[key],input.checked); renderChoices(); $('pickerSelectedOnly').disabled=!selected.size; $('pickerSelectionCount').textContent=tr`已选择 ${selected.size} 项`;};
    label.append(input,name); $('pickerList').append(label);
  }
  $('pickerCount').textContent=tr`找到 ${filtered.length} 项`;
  $('pickerMore').classList.toggle('hidden',filtered.length<=pickerLimit);
  $('pickerSelectedOnly').disabled=!selected.size;
  $('pickerSelectionCount').textContent=tr`已选择 ${selected.size} 项`;
}
function renderItems() {
  $('items').replaceChildren();
  $('strip').classList.toggle('hidden',entries.length===0);
  entries.forEach((entry, index) => {
    const row = document.createElement('div'); row.className = 'item'; row.draggable = !busy;
    row.classList.toggle('selected',entry.item.id===selectedId);
    row.ondragstart = event => { event.dataTransfer.setData('text/plain', String(index)); row.classList.add('dragging'); };
    row.ondragend = () => row.classList.remove('dragging');
    row.ondragover = event => { if (event.dataTransfer.types.includes('text/plain')) event.preventDefault(); };
    row.ondrop = event => { if (!event.dataTransfer.types.includes('text/plain') || event.dataTransfer.files.length) return; event.preventDefault(); event.stopPropagation(); const from=Number(event.dataTransfer.getData('text/plain')); if(Number.isInteger(from)) move(from,index); };
    const thumb=document.createElement('div'); thumb.className='thumb-button';thumb.title=entry.item.name;
    const selectButton=document.createElement('button');selectButton.className='select-image';selectButton.setAttribute('aria-label',entry.item.name);selectButton.setAttribute('aria-pressed',String(entry.item.id===selectedId));
    const pic=document.createElement('img'); pic.src=entry.image.src; pic.alt=''; selectButton.append(pic);thumb.append(selectButton);
    selectButton.onclick=()=>{selectedId=entry.item.id;renderItems();renderPreview();$('items').children[index]?.querySelector?.('.select-image')?.focus();};
    if(entry.kind==='video'){const badge=document.createElement('span');badge.className='video-badge';badge.textContent=tr('视频');thumb.append(badge);}
    const remove=document.createElement('button'); remove.className='remove-image'; remove.setAttribute('aria-label',tr`移除 ${entry.item.name}`); remove.title=tr`移除 ${entry.item.name}`; const close=document.createElement('img');close.src='assets/close.svg';close.alt='';remove.append(close);remove.onclick=event=>{event.stopPropagation();removeEntry(index);};thumb.append(remove);
    const controls=document.createElement('div');controls.className='tile-actions';
    const makeButton=(asset,label,fn,disabled)=>{const button=document.createElement('button');button.className='tile-button';button.disabled=disabled;button.title=label;button.setAttribute('aria-label',label);const icon=document.createElement('img');icon.src=asset;icon.alt='';button.append(icon);button.onclick=fn;return button;};
    const prev=makeButton('assets/left.svg',tr('上移'),()=>move(index,index-1),index===0);
    const handle=document.createElement('span');handle.className='handle';handle.title=tr('拖动排序');const grip=document.createElement('img');grip.src='assets/grip.svg';grip.alt='';handle.append(grip);
    const next=makeButton('assets/right.svg',tr('下移'),()=>move(index,index+1),index===entries.length-1);
    controls.append(prev,handle,next);row.append(thumb,controls);
    $('items').append(row);
  });
}
function move(from,to) { if (busy || loading || from===to || from<0 || to<0 || from>=entries.length || to>=entries.length) return; const hadOverlap=entries.some(e=>e.overlap); entries.splice(to,0,entries.splice(from,1)[0]); entries.forEach(e => e.overlap=0); updateMetadataFields();renderItems(); renderPreview();$('items').children[to]?.querySelector?.('.select-image')?.focus(); if(hadOverlap) status(tr('素材顺序已更改，重叠值已重置。')); }
function resetSelection() {
  entries=[];selectedId=null;metadata=null;imported=false;selectedTags.clear();selectedFolders.clear();tagOverrides.clear();folderOverrides.clear();editedFields.clear();
  $('folderConfirmLabel').classList.add('hidden');$('folderConfirm').checked=false;updateAudioOptions();$('name').value='';$('url').value='';$('annotation').value='';$('rating').value='0';$('urlOptions').replaceChildren();$('annotations').replaceChildren();
  status('');renderChoices();renderItems();renderPreview();
}
function removeEntry(index) {
  if(busy || loading)return;const hadOverlap=entries.some(e=>e.overlap);entries.splice(index,1);entries.forEach(e=>e.overlap=0);selectedId=entries.length?entries[Math.min(index,entries.length-1)].item.id:null;
  if(!entries.length){resetSelection();return;}
  metadata=initialMetadata(entries.map(e=>e.item));refreshInheritedChoices();updateMetadataFields();$('folderConfirmLabel').classList.toggle('hidden',!metadata.foldersDiffer);$('folderConfirm').checked=false;
  updateAudioOptions();renderChoices();renderItems();renderPreview();if(entries.length)$('items').children[Math.min(index,entries.length-1)]?.querySelector?.('.select-image')?.focus();if(hadOverlap)status(tr('素材顺序已更改，重叠值已重置。'));
}
function draw(ctx, scale) {
  let x=0,y=0;
  entries.forEach((entry,i) => {
    const overlap=i ? entry.overlap : 0;
    if(direction==='horizontal') { ctx.drawImage(entry.image, overlap,0,entry.width-overlap,entry.height,x*scale,0,(entry.width-overlap)*scale,entry.height*scale); x+=entry.width-overlap; }
    else { ctx.drawImage(entry.image,0,overlap,entry.width,entry.height-overlap,0,y*scale,entry.width*scale,(entry.height-overlap)*scale); y+=entry.height-overlap; }
  });
}
function renderPreview() {
  const box=$('preview'); box.replaceChildren();
  $('previewControls').classList.toggle('hidden',entries.length===0);
  if(!entries.length) {
    box.classList.remove('zoomed');
    const empty=document.createElement('div');empty.className='empty';const message=document.createElement('span');message.textContent=tr('在 Eagle 中选中图片或视频，或将素材拖到这里。');const button=document.createElement('button');button.className='secondary';button.textContent=tr('读取 Eagle 选区');button.onclick=()=>loadSelection();empty.append(message,button);box.append(empty);$('size').textContent='—';$('save').disabled=true;return;
  }
  try {
    const {width,height}=dimensions(entries,direction); $('size').textContent=`${width} × ${height} px`;
    const scale=Math.min(1,4096/width,4096/height,Math.sqrt(16000000/(width*height)));
    const display=zoom==='fit'?Math.min(1,(box.clientWidth||500)/width,(box.clientHeight||350)/height):Number(zoom);
    const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(width*scale));canvas.height=Math.max(1,Math.round(height*scale));draw(canvas.getContext('2d'),scale);
    canvas.style.width=`${width*display}px`;canvas.style.height=`${height*display}px`;box.classList.toggle('zoomed',zoom!=='fit');box.append(canvas);
    const index=entries.findIndex(e=>e.item.id===selectedId);$('overlapLabel').classList.toggle('hidden',index<1);if(index>0){$('overlapText').textContent=tr`第 ${index+1} 项前的重叠`;$('overlap').value=entries[index].overlap;$('overlap').max=(direction==='horizontal'?entries[index].width:entries[index].height)-1;}
    $('save').disabled=busy || loading || imported || entries.length<2;
  } catch(error) { box.textContent=error.message; $('save').disabled=true; }
}
function updateDirection(value) { if (busy || loading || direction===value) return; const hadOverlap=entries.some(e=>e.overlap); direction=value; entries.forEach(e=>e.overlap=0); $('horizontal').classList.toggle('active',value==='horizontal'); $('vertical').classList.toggle('active',value==='vertical'); $('horizontal').setAttribute('aria-pressed',String(value==='horizontal'));$('vertical').setAttribute('aria-pressed',String(value==='vertical')); renderItems(); renderPreview(); if(hadOverlap)status(tr('拼接方向已更改，重叠值已重置。')); }
async function loadSelection(providedItems, append=false, silentEmpty=false) {
  if(busy || loading) return;
  if (append && imported) { status(tr('当前拼接已完成，请清空当前选择后开始新的拼接。'),'error'); return; }
  setLoading(true); status('');
  try {
    let items=typeof providedItems==='function'?await providedItems():(providedItems || await eagle.item.getSelected());
    if (!items.length && silentEmpty) { status(''); return; }
    if (!items.length) throw new Error(tr('请先在 Eagle 中选中素材，再读取或拖入。'));
    if (append) {
      const existing=new Set(entries.map(entry=>entry.item.id));
      items=items.filter(item=>!existing.has(item.id));
      if (!items.length) throw new Error(tr('所选素材已在列表中，没有新增素材。'));
    }
    const invalid=items.filter(item=>!imageTypes.has(String(item.ext || '').toLowerCase()) && !videoTypes.has(String(item.ext || '').toLowerCase()));
    if(invalid.length) throw new Error(tr`不支持这些文件格式：${invalid.map(item=>item.name).join('、')}`);
    for (const item of items) if (imageTypes.has(String(item.ext).toLowerCase()) && await isAnimated(item.filePath, String(item.ext).toLowerCase())) throw new Error(tr`暂不支持动图：${item.name}`);
    items.sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true,sensitivity:'base'}));
    const paths=items.some(item=>videoTypes.has(String(item.ext).toLowerCase()))?await ffmpegPaths():null;
    const loaded=[]; for(const item of items) { if(videoTypes.has(String(item.ext).toLowerCase())) loaded.push(await loadVideo(item,paths)); else {const image=await loadImage(item);loaded.push({item,image,width:image.naturalWidth,height:image.naturalHeight,kind:'image',overlap:0});} }
    const allItems=append?[...entries.map(entry=>entry.item),...items]:items;
    const info=initialMetadata(allItems);
    const [folders,tags]=await Promise.all([eagle.folder.getAll(),eagle.tag.get()]);
    entries=append?[...entries,...loaded]:loaded; imported=false; metadata=info;
    selectedId=loaded[loaded.length-1].item.id;
    if (!append) { tagOverrides.clear(); folderOverrides.clear(); editedFields.clear(); }
    refreshInheritedChoices();
    folderList=flattenFolders(folders); tagList=[...new Set([...metadata.tags,...tags.map(t=>typeof t==='string'?t:t.name).filter(Boolean)])].sort((a,b)=>a.localeCompare(b)).map(name=>({name}));
    updateMetadataFields();
    $('folderConfirmLabel').classList.toggle('hidden',!metadata.foldersDiffer); $('folderConfirm').checked=false;
    updateAudioOptions();renderChoices(); renderItems(); renderPreview();
    if(metadata.ratings.length>1) status(tr`原素材评分不同（${metadata.ratings.join('、')}），请为新素材选择评分。`);
    else status('');
  } catch(error) { renderItems(); renderPreview(); status(error.message,'error'); }
  finally { setLoading(false); renderChoices();renderItems();renderPreview(); }
}
async function save() {
  if(busy || imported || entries.length<2) return;
  if(metadata.foldersDiffer && !$('folderConfirm').checked) { status(tr('请确认目标文件夹；也可以选择不放入文件夹。'),'error'); return; }
  if ($('rating').value === '') { status(tr('原素材评分不同，请选择新素材的评分。'),'error'); return; }
  if(!$('name').value.trim()) { status(tr('请输入素材名称。'),'error'); return; }
  let tmp;
  try {
    const {width,height}=dimensions(entries,direction);
    if(width>32767 || height>32767 || width*height>100000000) throw new Error(tr('图片尺寸超过当前处理上限（单边 32767 像素，总计 1 亿像素）；原素材未移动。'));
    setSaving(true); status('');
    await new Promise(resolve=>setTimeout(resolve,0));
    const hasVideo=entries.some(entry=>entry.kind==='video');
    tmp=await fs.promises.mkdtemp(path.join(os.tmpdir(),'eagle-stitch-')); const file=path.join(tmp,hasVideo?'stitched.mp4':'stitched.png');
    if(hasVideo) {const paths=await ffmpegPaths(); await exportVideo(paths.ffmpeg,paths.ffprobe,entries,direction,$('audioSource').value,file);}
    else {const canvas=document.createElement('canvas'); canvas.width=width; canvas.height=height; const ctx=canvas.getContext('2d'); if(!ctx) throw new Error(tr('无法创建拼接画布。')); draw(ctx,1); const blob=await withTimeout(new Promise(resolve=>canvas.toBlob(resolve,'image/png')),60000); if(!blob) throw new Error(tr('图片编码失败。')); await fs.promises.writeFile(file,Buffer.from(await blob.arrayBuffer()));}
    $('progressAnnouncement').textContent=tr('正在导入 Eagle…'); $('save').setAttribute('aria-label',tr('正在导入 Eagle…'));
    const api={item:{addFromPath:async (...args)=>{imported=true; return await eagle.item.addFromPath(...args);},getById:id=>eagle.item.getById(id)}};
    const result=await importThenTrash(api,file,{name:$('name').value.trim(),website:$('url').value.trim(),annotation:$('annotation').value,tags:[...selectedTags],folders:[...selectedFolders]},Number($('rating').value),entries.map(e=>e.item));
    const messages=[];
    if(result.failed.length) messages.push(tr`新素材已导入，但以下原素材未能移入回收站：${result.failed.join('、')}。请在 Eagle 中检查。`);
    if(result.uncertain.length) messages.push(tr`新素材已导入，但无法确认以下原素材是否移入回收站：${result.uncertain.join('、')}。请在 Eagle 中检查。`);
    if(messages.length) status(messages.join('\n'),'error');
    else status(tr('拼接完成，新素材已导入，原素材已移入回收站。'),'success');
  } catch(error) {
    if(error.pending && tmp) { const dir=tmp;tmp=null;error.pending.then(()=>fs.promises.rm(dir,{recursive:true,force:true}),()=>fs.promises.rm(dir,{recursive:true,force:true})).catch(()=>{}); }
    status(tr`${error.message}${imported && !error.pending?tr('\n新素材可能已导入，请先检查 Eagle，避免重复导入。'):''}`,'error');
  }
  finally { setSaving(false); if(tmp) fs.promises.rm(tmp,{recursive:true,force:true}).catch(()=>{}); }
}
const dropTarget=document.querySelector('.workspace');
dropTarget.addEventListener('dragover', event => { if(!Array.from(event.dataTransfer.types).includes('Files'))return;event.preventDefault();event.dataTransfer.dropEffect='copy'; $('dropZone').classList.add('drag-over'); });
dropTarget.addEventListener('dragleave', event => { if (!dropTarget.contains(event.relatedTarget)) $('dropZone').classList.remove('drag-over'); });
dropTarget.addEventListener('drop', async event => {
  if(!event.dataTransfer.files.length){$('dropZone').classList.remove('drag-over');if(!Array.from(event.dataTransfer.types).includes('text/plain'))status(tr('没有收到图片文件。请在 Eagle 选中图片后拖入，或点击“读取 Eagle 当前选中图片”。'),'error');return;}event.preventDefault(); $('dropZone').classList.remove('drag-over');
  if (busy) return;
  const files=Array.from(event.dataTransfer.files || []);
  if (!files.length) { status(tr('没有收到图片文件。请在 Eagle 选中图片后拖入，或点击“读取 Eagle 当前选中图片”。'),'error'); return; }
  await loadSelection(async()=>{ const items=await eagle.item.getSelected(); return await matchDroppedFiles(files,items); },true);
});
document.addEventListener('dragover', event=>event.preventDefault());
document.addEventListener('drop', event=>event.preventDefault());
$('readSelection').onclick=()=>loadSelection();
$('addSelection').onclick=()=>loadSelection(undefined,true);
$('openTags').onclick=()=>openPicker('tags'); $('openFolders').onclick=()=>openPicker('folders');
$('pickerClose').onclick=$('pickerDone').onclick=()=>{ $('picker').classList.add('hidden'); document.querySelector('.app').inert=false; renderChoices(); if(pickerTrigger&&pickerTrigger.focus)pickerTrigger.focus(); };
$('pickerSearch').oninput=()=>{pickerLimit=200;renderPicker();}; $('pickerSelectedOnly').onclick=()=>{const selected=pickerType==='tags'?selectedTags:selectedFolders;for(const value of [...selected])updateChoice(pickerType,value,false);renderChoices();renderPicker();};
$('pickerMore').onclick=()=>{pickerLimit+=200;renderPicker();};
document.addEventListener('keydown',event=>{if(event.key==='Escape' && !$('clearDialog').classList.contains('hidden')) closeClearDialog(false); else if(event.key==='Escape' && !$('picker').classList.contains('hidden')) $('pickerDone').click(); else if(event.key==='Tab' && !$('clearDialog').classList.contains('hidden')) { if(event.shiftKey && document.activeElement===$('cancelClear')){event.preventDefault();$('confirmClear').focus();} else if(!event.shiftKey && document.activeElement===$('confirmClear')){event.preventDefault();$('cancelClear').focus();} }});
$('zoom').onchange=()=>{zoom=$('zoom').value; renderPreview();}; $('horizontal').onclick=()=>updateDirection('horizontal'); $('vertical').onclick=()=>updateDirection('vertical');
function closeClearDialog(confirmed) { $('clearDialog').classList.add('hidden'); document.querySelector('.app').inert=false; if(confirmed){resetSelection();$('preview').querySelector?.('.secondary')?.focus();} else $('clearSelection').focus(); }
$('clearSelection').onclick=()=>{if(busy || loading || !entries.length)return; document.querySelector('.app').inert=true; $('clearDialog').classList.remove('hidden'); $('cancelClear').focus();};
$('cancelClear').onclick=()=>closeClearDialog(false); $('confirmClear').onclick=()=>closeClearDialog(true); $('save').onclick=save;
$('overlap').oninput=()=>{const entry=entries.find(e=>e.item.id===selectedId);if(entry){entry.overlap=$('overlap').value===''?0:Number($('overlap').value);renderPreview();}};
$('close').onclick=()=>window.close();
$('dismissStatus').onclick=()=>status('');
$('pin').onclick=async()=>{try{const next=$('pin').getAttribute('aria-pressed')!=='true';await eagle.window.setAlwaysOnTop(next);$('pin').setAttribute('aria-pressed',String(next));$('pin').title=tr(next?'取消窗口置顶':'窗口置顶');$('pin').setAttribute('aria-label',tr(next?'取消窗口置顶':'窗口置顶'));}catch(error){status(error.message,'error');}};
for(const id of ['name','url','annotation','rating']) $(id).addEventListener(id==='rating'?'change':'input',()=>editedFields.add(id));
window.addEventListener('resize',()=>{if(entries.length)renderPreview();});
let lastRun=0;
eagle.onPluginCreate(async () => { setLocale(eagle.app.locale || new URLSearchParams(window.location.search).get('locale')); translatePage(document); const theme=String(eagle.app.theme || '').toLowerCase(); if(['light','lightgray'].includes(theme)) document.documentElement.setAttribute('theme',theme); lastRun=Date.now(); await loadSelection(undefined,false,true); });
eagle.onPluginRun(async () => { if(Date.now()-lastRun<1000) return; lastRun=Date.now(); if(!busy && !entries.length) await loadSelection(undefined,false,true); });
