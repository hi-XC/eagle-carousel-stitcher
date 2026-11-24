'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {setLocale,tr,translatePage,translations}=require('../Plugin/i18n');
const {dimensions}=require('../Plugin/core');
test('follows Eagle locale and localizes dynamic messages and core errors',()=>{
  setLocale('en_US');
  assert.equal(tr('选择标签'),'Choose tags');
  assert.equal(tr`已选择 ${3} 项`,'3 selected');
  assert.throws(()=>dimensions([{width:2,height:2},{width:2,height:2,overlap:2}],'horizontal'),/Invalid overlap/);
  setLocale('zh_CN');
  assert.equal(tr('选择标签'),'选择标签');
  assert.equal(tr`已选择 ${3} 项`,'已选择 3 项');
  setLocale('ja_JP');
  assert.equal(tr('选择标签'),'Choose tags');
  assert.equal(typeof translations['选择标签'],'string');
});
test('translates static text, placeholders and accessibility labels',()=>{
  const text={nodeValue:' 拼接预览 ',parentElement:{tagName:'H1'}};
  const attributes={placeholder:'搜索','aria-label':'关闭'};
  const element={getAttribute:name=>attributes[name]||null,setAttribute:(name,value)=>attributes[name]=value};
  let next=true;const document={body:{},documentElement:{},createTreeWalker:()=>({nextNode:()=>{if(next){next=false;return text}return null}}),querySelectorAll:()=>[element]};
  setLocale('en');translatePage(document);
  assert.equal(text.nodeValue,' Stitch preview ');
  assert.equal(attributes.placeholder,'Search');assert.equal(attributes['aria-label'],'Close');
  assert.equal(document.title,'Carousel Stitcher');assert.equal(document.documentElement.lang,'en');
});
