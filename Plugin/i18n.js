'use strict';
let language = 'zh';
const translations = {
'正在加载素材':'Loading media','在 Eagle 中选中图片或视频，或将素材拖到这里。':'Select images or videos in Eagle, or drop them here.','追加 Eagle 当前选中素材':'Add selected Eagle items','请先在 Eagle 中选中素材，再读取或拖入。':'Select items in Eagle before loading or dropping them.','所选素材已在列表中，没有新增素材。':'The selected items are already in the list.',
'视频':'Video','声音':'Audio','静音':'Mute','视频预览显示首帧':'Video preview shows the first frame','视频拼接需要 Eagle 官方 FFmpeg 依赖，请先在 Eagle 中安装。':'Video stitching requires Eagle’s official FFmpeg dependency. Install it in Eagle first.','找不到 Eagle 官方 FFmpeg 依赖，请检查安装。':'Eagle’s official FFmpeg dependency could not be found. Check its installation.','无法读取视频预览。':'Unable to read the video preview.','无法读取视频时长或画面。':'Unable to read the video duration or picture.','视频处理超时，原素材未移动。':'Video processing timed out. The source items were not moved.','视频处理失败，请检查文件和 FFmpeg 依赖。':'Video processing failed. Check the files and FFmpeg dependency.','生成的视频未通过验证，原素材未移动。':'The output video failed verification. The source items were not moved.','不支持这些文件格式：{}':'Unsupported file types: {}',
'窗口置顶':'Always on top','设置':'Settings','界面语言跟随 Eagle 设置。':'The interface language follows Eagle.','版本 0.2.0':'Version 0.2.0','拼接方向':'Stitch direction','在 Eagle 中选中图片，或将图片拖到这里。':'Select images in Eagle, or drop them here.','读取 Eagle 选区':'Load Eagle selection',
'取消窗口置顶':'Turn off always on top',
'关闭提示':'Dismiss notification','正在加载图片':'Loading images','清空当前选择？':'Clear current selection?','清空插件中的素材和编辑信息，Eagle 中的原素材不会被删除。':'Clear the items and edits from the plugin. Source items in Eagle will not be deleted.','取消':'Cancel','清空选择':'Clear selection',
  '清空当前选择':'Clear current selection','清空插件中的素材和编辑信息？Eagle 中的原素材不会被删除。':'Clear the items and edits from the plugin? This will not delete the source items in Eagle.','当前拼接已完成，请清空当前选择后开始新的拼接。':'This stitch is complete. Clear the current selection to start a new one.','版本 0.2.1':'Version 0.2.1',
'替换图片会丢失当前排序和编辑信息，继续吗？':'Replacing images discards the current order and edits. Continue?',
'取消全选':'Deselect all','显示更多':'Show more','导入成功后，原素材会移入 Eagle 回收站。':'Original images move to Eagle Trash after import.','拖动排序':'Drag to reorder','第 {} 项前的重叠':'Overlap before item {}','重叠像素':'Overlap in pixels',
'素材顺序已更改，重叠值已重置。':'Item order changed; overlap values were reset.','拼接方向已更改，重叠值已重置。':'Direction changed; overlap values were reset.','新素材 {} 的信息未能验证，原素材未移动。请在 Eagle 中检查。':'The metadata for item {} could not be verified. Originals were not moved; check Eagle.',
'拼接图片':'Stitched image','无法读取图片：{}':'Unable to read image: {}','移除 {}':'Remove {}','共有':'Shared','未选择':'None selected',
'原素材共有 {} 个标签；默认带入全部原素材标签':'{} shared tags; all source tags are included by default','原素材共有 {} 个文件夹':'{} shared folders',
'选择标签':'Choose tags','选择文件夹':'Choose folders','搜索已有标签，勾选后立即保存':'Search existing tags. Changes are applied immediately.','搜索文件夹名称或完整路径，勾选后立即保存':'Search folder names or paths. Changes are applied immediately.',
'已选择 {} 项':'{} selected','找到 {} 项，显示前 200 项；输入关键词缩小范围':'{} results; showing the first 200. Search to narrow the list.','找到 {} 项':'{} results','查看全部':'Show all','只看已选':'Selected only',
'上移':'Move up','下移':'Move down','重叠':'Overlap','{} 的重叠像素':'Overlap in pixels for {}','继续拖入图片以追加':'Drop more images to add them','拖入 Eagle 中选中的图片':'Drop selected Eagle images here',
'新图片会追加到当前列表；重复图片不会重复添加':'Images are added to the current list; duplicates are skipped.','或先在 Eagle 选择图片，再点击下方按钮':'Or select images in Eagle and click below.','追加 Eagle 当前选中图片':'Add selected Eagle images','读取当前选中图片':'Load selected images',
'再添加至少一张图片以开始拼接':'Add at least one more image to stitch.','在 Eagle 中选择图片，或将选中的图片拖入下方区域':'Select images in Eagle, or drop them below.',
'当前拼接已完成，请使用“替换为 Eagle 当前选中图片”开始新的拼接。':'This stitch is complete. Replace the selection to start a new one.','正在读取选中素材…':'Loading selected images…','请先在 Eagle 中选中图片，再读取或拖入。':'Select images in Eagle before loading or dropping them.','所选图片已在列表中，没有新增图片。':'The selected images are already in the list.',
'暂不支持视频或其他文件，请只选择静态图片：{}':'Videos and other file types are not supported. Select static images only: {}','暂不支持动图：{}':'Animated images are not supported: {}','{} - 拼接':'{} - Stitched',
'使用原素材备注 {}：{}':'Use source note {}: {}','已追加 {} 张图片。请检查标签、目标文件夹{}。':'Added {} images. Check the tags, destination folders{}.', '和评分':' and rating',
'原素材评分不同（{}），请为新素材选择评分。':'Source ratings differ ({}). Choose a rating for the new image.','请确认目标文件夹；也可以选择不放入文件夹。':'Confirm the destination folders, or choose none.','原素材评分不同，请选择新素材的评分。':'Source ratings differ. Choose a rating for the new image.','请输入素材名称。':'Enter a name.',
'图片尺寸超过当前处理上限（单边 32767 像素，总计 1 亿像素）；原素材未移动。':'The image exceeds the processing limit (32,767 pixels per side and 100 million pixels total). Originals were not moved.',
'正在生成素材…':'Creating output…','无法创建拼接画布。':'Unable to create the stitching canvas.','图片编码失败。':'Unable to encode the image.','正在导入 Eagle…':'Importing into Eagle…',
'操作长时间没有响应，可能仍在后台继续。请检查 Eagle 中新素材和原素材的状态，确认操作已结束后再重试。':'The operation is taking too long and may still be running. Check the new image and originals in Eagle, and wait for it to finish before trying again.',
'新素材已导入，但以下原素材未能移入回收站：{}。请在 Eagle 中检查。':'The new image was imported, but these originals could not be moved to Trash: {}. Check Eagle.','新素材已导入，但无法确认以下原素材是否移入回收站：{}。请在 Eagle 中检查。':'The new image was imported, but the Trash status of these originals could not be confirmed: {}. Check Eagle.','拼接完成，新素材已导入，原素材已移入回收站。':'Stitch complete. The new image was imported and the originals were moved to Trash.',
'\n新素材可能已导入，请先检查 Eagle，避免重复导入。':'\nThe new image may have been imported. Check Eagle before retrying.','没有收到图片文件。请在 Eagle 选中图片后拖入，或点击“读取 Eagle 当前选中图片”。':'No image files were received. Select images in Eagle and drop them here, or use the load button.','正在核对拖入的 Eagle 素材…':'Checking dropped Eagle images…',
'第 {} 项素材的重叠值无效':'Invalid overlap for item {}.','PNG 文件不完整':'The PNG file is incomplete.','请从 Eagle 拖入已选中的图片。':'Drop selected images from Eagle.','请先在 Eagle 中选中要拖入的图片。':'Select images in Eagle before dropping them.','拖入的文件无法与当前 Eagle 选中素材对应。请重新选择后拖入。':'The dropped files do not match the current Eagle selection. Select them again and retry.','无法唯一确认拖入文件对应的 Eagle 素材，请使用“读取 Eagle 当前选中图片”。':'Could not uniquely match the dropped files. Use the load selected images button.',
'导入未返回素材 ID，原素材未移动。请检查 Eagle 中是否已生成新素材。':'No item ID was returned. Originals were not moved. Check Eagle for the new image.','新素材 {} 未能验证，原素材未移动。请在 Eagle 中检查后再试。':'Could not verify new item {}. Originals were not moved. Check Eagle before retrying.','新素材 {} 已导入，但评分保存失败；原素材未移动。':'Item {} was imported, but its rating could not be saved. Originals were not moved.',
'轮播拼接':'Carousel Stitcher','图片拼接':'Image stitching','拼接预览':'Stitch preview','拖动图片调整顺序，检查画面与接缝。':'Drag images to reorder them and check the seams.','横向':'Horizontal','纵向':'Vertical','在 Eagle 中选中至少两张图片，然后打开插件':'Select at least two images in Eagle, then open the plugin.',
'预览缩放':'Preview zoom','适合窗口':'Fit to window','图片顺序':'Image order','重叠值会从该图片的左侧或顶部裁切。':'Overlap is cropped from the left or top of each image.','替换为 Eagle 当前选中图片':'Replace with Eagle selection','保存到 Eagle':'Save to Eagle','生成新素材后，原素材会移入 Eagle 回收站。':'After the new image is created, originals move to Eagle Trash.',
'名称':'Name','标签':'Tags','文件夹':'Folders','原素材文件夹不同，已确认目标位置':'Source folders differ; I have confirmed the destination.','来源链接':'Source URL','添加来源链接':'Add a source URL','备注':'Notes','添加备注':'Add notes','评分':'Rating','请选择评分':'Choose a rating','无评分':'No rating','拼接并导入':'Stitch and import','关闭':'Close','搜索':'Search','完成':'Done','插件启动失败：':'Plugin failed to start: ','未知错误':'Unknown error','。请联系开发者。':'. Please contact the developer.'
};
function setLocale(locale) { language = /^zh(?:[-_]cn)?$/i.test(String(locale || '')) ? 'zh' : 'en'; }
function tr(value, ...values) {
  if (Array.isArray(value) && Object.prototype.hasOwnProperty.call(value, 'raw')) {
    const key=value.join('{}'); const template=language==='en' ? (translations[key] || key) : key;
    let index=0; return template.replace(/\{\}/g,()=>String(values[index++]));
  }
  return language==='en' ? (translations[value] || value) : value;
}
function translatePage(document) {
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  const walker=document.createTreeWalker(document.body,4); let node;
  while((node=walker.nextNode())) { if(node.parentElement && ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) continue; const value=node.nodeValue.trim(); if(value && translations[value]) node.nodeValue=node.nodeValue.replace(value,tr(value)); }
  for(const element of document.querySelectorAll('[placeholder],[aria-label],[title]')) for(const name of ['placeholder','aria-label','title']) { const value=element.getAttribute(name); if(value && translations[value]) element.setAttribute(name,tr(value)); }
  document.title=tr('轮播拼接');
}
module.exports={setLocale,tr,translatePage,translations};
