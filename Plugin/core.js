'use strict';
const { tr } = require('./i18n');

function initialMetadata(items) {
  const distinct = key => [...new Set(items.map(item => item[key] || '').filter(Boolean))];
  const tags = items.map(item => (item.tags || []).map(tag => typeof tag === 'string' ? tag : tag.name).filter(Boolean));
  const folders = items.map(item => (item.folders || []).map(folder => typeof folder === 'string' ? folder : folder.id).filter(Boolean));
  const commonFolders = folders[0].filter(id => folders.every(group => group.includes(id)));
  const folderSets = folders.map(group => [...group].sort().join('\0'));
  const ratings = [...new Set(items.map(item => Number(item.star) || 0))];
  return {
    tags: [...new Set(tags.flat())],
    commonTags: tags[0].filter(tag => tags.every(group => group.includes(tag))),
    folders: commonFolders,
    foldersDiffer: folderSets.some(group => group !== folderSets[0]),
    urls: distinct('url'), annotations: distinct('annotation'), ratings,
    urlShared: items.every(item => (item.url || '') === (items[0].url || '')),
    annotationShared: items.every(item => (item.annotation || '') === (items[0].annotation || '')),
  };
}
function dimensions(items, direction) {
  let width = 0, height = 0;
  for (let i = 0; i < items.length; i++) {
    const { width: w, height: h } = items[i];
    const overlap = i ? Number(items[i].overlap) || 0 : 0;
    if (!Number.isInteger(overlap) || overlap < 0 || overlap >= (direction === 'horizontal' ? w : h)) throw new Error(tr`第 ${i + 1} 项素材的重叠值无效`);
    if (direction === 'horizontal') { width += w - overlap; height = Math.max(height, h); }
    else { height += h - overlap; width = Math.max(width, w); }
  }
  return { width, height };
}
async function isAnimated(filePath, ext) {
  if (!['png', 'webp'].includes(ext)) return false;
  const file = await require('fs').promises.open(filePath, 'r');
  try {
    const header = Buffer.alloc(32); const {bytesRead} = await file.read(header, 0, header.length, 0);
    if (ext === 'webp') return bytesRead >= 21 && header.toString('ascii', 12, 16) === 'VP8X' && !!(header[20] & 2);
    if (bytesRead < 8 || !header.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return false;
    let position = 8;
    while (true) {
      const chunk = Buffer.alloc(8); const result = await file.read(chunk, 0, 8, position);
      if (result.bytesRead < 8) throw new Error(tr('PNG 文件不完整'));
      const length = chunk.readUInt32BE(0), type = chunk.toString('ascii',4,8);
      if (type === 'acTL') return true;
      if (type === 'IDAT' || type === 'IEND') return false;
      position += length + 12;
    }
  } finally { await file.close(); }
}
async function matchDroppedFiles(files, items) {
  if (!files.length) throw new Error(tr('请从 Eagle 拖入已选中的图片。'));
  if (!items.length) throw new Error(tr('请先在 Eagle 中选中要拖入的图片。'));
  const fs = require('fs'), crypto = require('crypto');
  const hashPath = path => new Promise((resolve, reject) => {
    const hash=crypto.createHash('sha256'), stream=fs.createReadStream(path);
    stream.on('data', data => hash.update(data)); stream.on('error', reject); stream.on('end', () => resolve(hash.digest('hex')));
  });
  const candidates = [];
  for (const item of items) {
    const stat=await fs.promises.stat(item.filePath);
    candidates.push({item, size:stat.size, hash:null});
  }
  const matched=[];
  for (const file of files) {
    const sameSize=candidates.filter(candidate => candidate.size===file.size);
    if (!sameSize.length) throw new Error(tr('拖入的文件无法与当前 Eagle 选中素材对应。请重新选择后拖入。'));
    const hash = file.path ? await hashPath(file.path) : crypto.createHash('sha256').update(Buffer.from(await file.arrayBuffer())).digest('hex');
    for (const candidate of sameSize) if (!candidate.hash) candidate.hash=await hashPath(candidate.item.filePath);
    const matching=sameSize.filter(candidate => candidate.hash===hash);
    if (matching.length!==1) throw new Error(tr('无法唯一确认拖入文件对应的 Eagle 素材，请使用“读取 Eagle 当前选中图片”。'));
    matched.push(matching[0].item); candidates.splice(candidates.indexOf(matching[0]),1);
  }
  return matched;
}
function withTimeout(promise, milliseconds=30000) {
  let timer;
  const pending=Promise.resolve(promise);
  const timeout=new Promise((_,reject)=>{timer=setTimeout(()=>{const error=new Error(tr('操作长时间没有响应，可能仍在后台继续。请检查 Eagle 中新素材和原素材的状态，确认操作已结束后再重试。'));error.pending=pending;reject(error);},milliseconds);});
  return Promise.race([pending,timeout]).finally(()=>clearTimeout(timer));
}
async function importThenTrash(api, path, options, rating, originals, timeoutMs=30000) {
  const id = await withTimeout(api.item.addFromPath(path, options),timeoutMs);
  if (!id) throw new Error(tr('导入未返回素材 ID，原素材未移动。请检查 Eagle 中是否已生成新素材。'));
  const result = await withTimeout(api.item.getById(id),timeoutMs);
  if (!result || !result.filePath || !require('fs').existsSync(result.filePath)) throw new Error(tr`新素材 ${id} 未能验证，原素材未移动。请在 Eagle 中检查后再试。`);
  if (result.star !== rating) {
    result.star = rating;
    if (await withTimeout(result.save(),timeoutMs) !== true) throw new Error(tr`新素材 ${id} 已导入，但评分保存失败；原素材未移动。`);
  }
  const saved=await withTimeout(api.item.getById(id),timeoutMs);
  const includesAll=(actual,expected)=>Array.isArray(actual) && expected.every(value=>actual.includes(value));
  if(!saved || (Number(saved.star)||0)!==rating || (options.name && saved.name!==options.name) ||
    (options.website && saved.url!==options.website) || (options.annotation && saved.annotation!==options.annotation) ||
    (options.tags && options.tags.length && !includesAll(saved.tags,options.tags)) ||
    (options.folders && options.folders.length && !includesAll(saved.folders,options.folders))) {
    throw new Error(tr`新素材 ${id} 的信息未能验证，原素材未移动。请在 Eagle 中检查。`);
  }
  const failed = [], uncertain = [];
  for (const item of originals) {
    let outcome, threw=false;
    try { outcome = await withTimeout(item.moveToTrash(),timeoutMs); } catch (error) { if(error && error.pending) throw error; threw=true; }
    if (!threw && (outcome === true || outcome === undefined)) continue;
    let current;
    try { current = await withTimeout(api.item.getById(item.id),timeoutMs); } catch (error) { if(error && error.pending) throw error; }
    if (current && current.isDeleted === true) continue;
    if (current && current.isDeleted === false) failed.push(item.name);
    else uncertain.push(item.name);
  }
  return { id, failed, uncertain };
}
module.exports = { initialMetadata, dimensions, isAnimated, matchDroppedFiles, importThenTrash, withTimeout };
