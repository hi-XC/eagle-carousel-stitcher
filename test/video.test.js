'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{execFileSync}=require('node:child_process');
const {makeVideoArgs,exportVideo,probe}=require('../Plugin/video');
const binDir=process.env.EAGLE_FFMPEG_DIR||path.join(os.homedir(),'Library/Application Support/Eagle/Plugins/ffmpeg-mac-arm64');
const ffmpeg=path.join(binDir,'ffmpeg'),ffprobe=path.join(binDir,'ffprobe');
test('video arguments preserve order, overlap, selected audio and longest duration',()=>{
 const entries=[{kind:'video',duration:2,width:40,height:20,item:{id:'a',filePath:'/a.mp4'},hasAudio:true},{kind:'image',width:20,height:20,overlap:5,item:{id:'b',filePath:'/b.png'}},{kind:'video',duration:1,width:30,height:20,item:{id:'c',filePath:'/c.mp4'}}];
 const r=makeVideoArgs(entries,'horizontal','a','/out.mp4');assert.equal(r.width,86);assert.equal(r.duration,2);assert.ok(r.args.includes('0:a:0'));assert.ok(r.args.join(' ').includes('overlay=40:0'));assert.ok(makeVideoArgs(entries,'vertical','','/out.mp4').args.includes('-an'));
});
test('encodes mixed media and freezes shorter videos at their last frame',{skip:!fs.existsSync(ffmpeg)||!fs.existsSync(ffprobe)},async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'carousel-video-test-'));
 try {
  const v1=path.join(dir,'short.mp4'),v2=path.join(dir,'long.mp4'),img=path.join(dir,'still.ppm'),out=path.join(dir,'result.mp4');
  execFileSync(ffmpeg,['-loglevel','error','-f','lavfi','-i','color=red:s=40x20:r=30:d=0.5','-f','lavfi','-i','sine=frequency=440:duration=0.5','-c:v','libx264','-pix_fmt','yuv420p','-c:a','aac','-shortest','-y',v1]);
  execFileSync(ffmpeg,['-loglevel','error','-f','lavfi','-i','color=blue:s=40x20:r=30:d=1.5','-c:v','libx264','-pix_fmt','yuv420p','-y',v2]);
  fs.writeFileSync(img,Buffer.concat([Buffer.from('P6\n20 20\n255\n'),Buffer.from(Array(20*20).fill([0,255,0]).flat())]));
  const entries=[{kind:'video',item:{id:'a',filePath:v1},width:40,height:20,duration:.5,hasAudio:true},{kind:'image',item:{id:'i',filePath:img},width:20,height:20,overlap:0},{kind:'video',item:{id:'b',filePath:v2},width:40,height:20,duration:1.5}];
  await exportVideo(ffmpeg,ffprobe,entries,'horizontal','a',out);
  const data=await probe(ffprobe,out);assert.ok(data.duration>=1.45);assert.equal(data.hasAudio,true);
  const raw=execFileSync(ffmpeg,['-loglevel','error','-ss','1.2','-i',out,'-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','pipe:1']);
  const pixel=(x,y)=>[...raw.subarray((y*100+x)*3,(y*100+x)*3+3)];
  assert.ok(pixel(15,10)[0]>180,'short video keeps its red final frame');assert.ok(pixel(50,10)[1]>180,'still image remains green');assert.ok(pixel(80,10)[2]>180,'long video remains blue');
  const vertical=path.join(dir,'vertical.mp4');
  await exportVideo(ffmpeg,ffprobe,[entries[0],{...entries[2],overlap:5}],'vertical','',vertical);
  const verticalInfo=await probe(ffprobe,vertical);assert.equal(verticalInfo.width,40);assert.equal(verticalInfo.height,36);assert.equal(verticalInfo.hasAudio,false);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
