'use strict';
const {spawn}=require('child_process');
const {dimensions}=require('./core');
const {tr}=require('./i18n');
function run(binary,args,limit=8*1024*1024,timeoutMs=30000) {
  return new Promise((resolve,reject)=>{
    const proc=spawn(binary,args,{windowsHide:true});let output=[],size=0,errors='',timedOut=false;
    const timer=setTimeout(()=>{timedOut=true;proc.kill();},timeoutMs);
    proc.stdout.on('data',chunk=>{size+=chunk.length;if(size>limit)proc.kill();else output.push(chunk);});
    proc.stderr.on('data',chunk=>{errors=(errors+chunk.toString()).slice(-4000);});
    proc.on('error',error=>{clearTimeout(timer);reject(error);});proc.on('close',code=>{clearTimeout(timer);if(timedOut)reject(new Error(tr('视频处理超时，原素材未移动。')));else if(code!==0||size>limit)reject(new Error(tr('视频处理失败，请检查文件和 FFmpeg 依赖。')+(errors?'\n'+errors.slice(-800):'')));else resolve(Buffer.concat(output));});
  });
}
async function probe(binary,file) {
  const raw=await run(binary,['-v','error','-show_entries','format=duration:stream=codec_type,duration,width,height','-of','json',file]);
  const data=JSON.parse(raw.toString()),streams=data.streams||[],video=streams.find(s=>s.codec_type==='video');
  const duration=Number(video?.duration)||Number(data.format?.duration);
  if(!video||!Number.isFinite(duration)||duration<=0)throw new Error(tr('无法读取视频时长或画面。'));
  return {duration,hasAudio:streams.some(s=>s.codec_type==='audio'),width:video.width,height:video.height};
}
function thumbnail(binary,file) {return run(binary,['-v','error','-i',file,'-frames:v','1','-f','image2pipe','-vcodec','png','pipe:1'],32*1024*1024);}
function makeVideoArgs(entries,direction,audioId,output) {
  const {width,height}=dimensions(entries,direction),w=width+width%2,h=height+height%2;
  const duration=Math.max(...entries.filter(e=>e.kind==='video').map(e=>e.duration));
  if(!Number.isFinite(duration)||duration<=0)throw new Error(tr('无法读取视频时长或画面。'));
  const args=['-hide_banner','-loglevel','error','-y'];
  for(const e of entries) {if(e.kind!=='video')args.push('-loop','1','-framerate','30');args.push('-i',e.item.filePath);}
  let graph=[`color=c=black:s=${w}x${h}:r=30:d=${duration},format=yuv444p[base]`],x=0,y=0;
  entries.forEach((e,i)=>{
    const overlap=i?Number(e.overlap)||0:0,cw=e.width-(direction==='horizontal'?overlap:0),ch=e.height-(direction==='vertical'?overlap:0);
    const cx=direction==='horizontal'?overlap:0,cy=direction==='vertical'?overlap:0;
    const freeze=e.kind==='video'?`,tpad=stop_mode=clone:stop_duration=${duration}`:'';
    graph.push(`[${i}:v]setpts=PTS-STARTPTS,fps=30${freeze},trim=duration=${duration},crop=${cw}:${ch}:${cx}:${cy}:exact=1,setsar=1[part${i}]`);
    graph.push(`[${i?'out'+(i-1):'base'}][part${i}]overlay=${x}:${y}:format=yuv444:eof_action=pass:shortest=0[out${i}]`);
    if(direction==='horizontal')x+=cw;else y+=ch;
  });
  args.push('-filter_complex',graph.join(';'),'-map',`[out${entries.length-1}]`);
  const audioIndex=entries.findIndex(e=>e.kind==='video'&&e.hasAudio&&e.item.id===audioId);
  if(audioIndex>=0)args.push('-map',`${audioIndex}:a:0`,'-af','asetpts=PTS-STARTPTS,apad','-c:a','aac');else args.push('-an');
  args.push('-t',String(duration),'-c:v','libx264','-pix_fmt','yuv420p','-movflags','+faststart',output);
  return {args,width:w,height:h,duration};
}
async function exportVideo(ffmpeg,ffprobe,entries,direction,audioId,output) {
  const info=makeVideoArgs(entries,direction,audioId,output);
  await run(ffmpeg,info.args,8*1024*1024,Math.max(120000,info.duration*20000));
  const actual=await probe(ffprobe,output);
  if(actual.duration+0.15<info.duration || actual.width!==info.width || actual.height!==info.height)throw new Error(tr('生成的视频未通过验证，原素材未移动。'));
}
module.exports={probe,thumbnail,makeVideoArgs,exportVideo};
