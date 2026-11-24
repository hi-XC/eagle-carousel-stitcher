"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// Plugin/i18n.js
var require_i18n = __commonJS({
  "Plugin/i18n.js"(exports2, module2) {
    "use strict";
    var language = "zh";
    var translations = {
      "\u6B63\u5728\u52A0\u8F7D\u7D20\u6750": "Loading media",
      "\u5728 Eagle \u4E2D\u9009\u4E2D\u56FE\u7247\u6216\u89C6\u9891\uFF0C\u6216\u5C06\u7D20\u6750\u62D6\u5230\u8FD9\u91CC\u3002": "Select images or videos in Eagle, or drop them here.",
      "\u8FFD\u52A0 Eagle \u5F53\u524D\u9009\u4E2D\u7D20\u6750": "Add selected Eagle items",
      "\u8BF7\u5148\u5728 Eagle \u4E2D\u9009\u4E2D\u7D20\u6750\uFF0C\u518D\u8BFB\u53D6\u6216\u62D6\u5165\u3002": "Select items in Eagle before loading or dropping them.",
      "\u6240\u9009\u7D20\u6750\u5DF2\u5728\u5217\u8868\u4E2D\uFF0C\u6CA1\u6709\u65B0\u589E\u7D20\u6750\u3002": "The selected items are already in the list.",
      "\u89C6\u9891": "Video",
      "\u58F0\u97F3": "Audio",
      "\u9759\u97F3": "Mute",
      "\u89C6\u9891\u9884\u89C8\u663E\u793A\u9996\u5E27": "Video preview shows the first frame",
      "\u89C6\u9891\u62FC\u63A5\u9700\u8981 Eagle \u5B98\u65B9 FFmpeg \u4F9D\u8D56\uFF0C\u8BF7\u5148\u5728 Eagle \u4E2D\u5B89\u88C5\u3002": "Video stitching requires Eagle\u2019s official FFmpeg dependency. Install it in Eagle first.",
      "\u627E\u4E0D\u5230 Eagle \u5B98\u65B9 FFmpeg \u4F9D\u8D56\uFF0C\u8BF7\u68C0\u67E5\u5B89\u88C5\u3002": "Eagle\u2019s official FFmpeg dependency could not be found. Check its installation.",
      "\u65E0\u6CD5\u8BFB\u53D6\u89C6\u9891\u9884\u89C8\u3002": "Unable to read the video preview.",
      "\u65E0\u6CD5\u8BFB\u53D6\u89C6\u9891\u65F6\u957F\u6216\u753B\u9762\u3002": "Unable to read the video duration or picture.",
      "\u89C6\u9891\u5904\u7406\u8D85\u65F6\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002": "Video processing timed out. The source items were not moved.",
      "\u89C6\u9891\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u548C FFmpeg \u4F9D\u8D56\u3002": "Video processing failed. Check the files and FFmpeg dependency.",
      "\u751F\u6210\u7684\u89C6\u9891\u672A\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002": "The output video failed verification. The source items were not moved.",
      "\u4E0D\u652F\u6301\u8FD9\u4E9B\u6587\u4EF6\u683C\u5F0F\uFF1A{}": "Unsupported file types: {}",
      "\u7A97\u53E3\u7F6E\u9876": "Always on top",
      "\u8BBE\u7F6E": "Settings",
      "\u754C\u9762\u8BED\u8A00\u8DDF\u968F Eagle \u8BBE\u7F6E\u3002": "The interface language follows Eagle.",
      "\u7248\u672C 0.2.0": "Version 0.2.0",
      "\u62FC\u63A5\u65B9\u5411": "Stitch direction",
      "\u5728 Eagle \u4E2D\u9009\u4E2D\u56FE\u7247\uFF0C\u6216\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC\u3002": "Select images in Eagle, or drop them here.",
      "\u8BFB\u53D6 Eagle \u9009\u533A": "Load Eagle selection",
      "\u53D6\u6D88\u7A97\u53E3\u7F6E\u9876": "Turn off always on top",
      "\u5173\u95ED\u63D0\u793A": "Dismiss notification",
      "\u6B63\u5728\u52A0\u8F7D\u56FE\u7247": "Loading images",
      "\u6E05\u7A7A\u5F53\u524D\u9009\u62E9\uFF1F": "Clear current selection?",
      "\u6E05\u7A7A\u63D2\u4EF6\u4E2D\u7684\u7D20\u6750\u548C\u7F16\u8F91\u4FE1\u606F\uFF0CEagle \u4E2D\u7684\u539F\u7D20\u6750\u4E0D\u4F1A\u88AB\u5220\u9664\u3002": "Clear the items and edits from the plugin. Source items in Eagle will not be deleted.",
      "\u53D6\u6D88": "Cancel",
      "\u6E05\u7A7A\u9009\u62E9": "Clear selection",
      "\u6E05\u7A7A\u5F53\u524D\u9009\u62E9": "Clear current selection",
      "\u6E05\u7A7A\u63D2\u4EF6\u4E2D\u7684\u7D20\u6750\u548C\u7F16\u8F91\u4FE1\u606F\uFF1FEagle \u4E2D\u7684\u539F\u7D20\u6750\u4E0D\u4F1A\u88AB\u5220\u9664\u3002": "Clear the items and edits from the plugin? This will not delete the source items in Eagle.",
      "\u5F53\u524D\u62FC\u63A5\u5DF2\u5B8C\u6210\uFF0C\u8BF7\u6E05\u7A7A\u5F53\u524D\u9009\u62E9\u540E\u5F00\u59CB\u65B0\u7684\u62FC\u63A5\u3002": "This stitch is complete. Clear the current selection to start a new one.",
      "\u7248\u672C 0.2.1": "Version 0.2.1",
      "\u66FF\u6362\u56FE\u7247\u4F1A\u4E22\u5931\u5F53\u524D\u6392\u5E8F\u548C\u7F16\u8F91\u4FE1\u606F\uFF0C\u7EE7\u7EED\u5417\uFF1F": "Replacing images discards the current order and edits. Continue?",
      "\u53D6\u6D88\u5168\u9009": "Deselect all",
      "\u663E\u793A\u66F4\u591A": "Show more",
      "\u5BFC\u5165\u6210\u529F\u540E\uFF0C\u539F\u7D20\u6750\u4F1A\u79FB\u5165 Eagle \u56DE\u6536\u7AD9\u3002": "Original images move to Eagle Trash after import.",
      "\u62D6\u52A8\u6392\u5E8F": "Drag to reorder",
      "\u7B2C {} \u9879\u524D\u7684\u91CD\u53E0": "Overlap before item {}",
      "\u91CD\u53E0\u50CF\u7D20": "Overlap in pixels",
      "\u7D20\u6750\u987A\u5E8F\u5DF2\u66F4\u6539\uFF0C\u91CD\u53E0\u503C\u5DF2\u91CD\u7F6E\u3002": "Item order changed; overlap values were reset.",
      "\u62FC\u63A5\u65B9\u5411\u5DF2\u66F4\u6539\uFF0C\u91CD\u53E0\u503C\u5DF2\u91CD\u7F6E\u3002": "Direction changed; overlap values were reset.",
      "\u65B0\u7D20\u6750 {} \u7684\u4FE1\u606F\u672A\u80FD\u9A8C\u8BC1\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002\u8BF7\u5728 Eagle \u4E2D\u68C0\u67E5\u3002": "The metadata for item {} could not be verified. Originals were not moved; check Eagle.",
      "\u62FC\u63A5\u56FE\u7247": "Stitched image",
      "\u65E0\u6CD5\u8BFB\u53D6\u56FE\u7247\uFF1A{}": "Unable to read image: {}",
      "\u79FB\u9664 {}": "Remove {}",
      "\u5171\u6709": "Shared",
      "\u672A\u9009\u62E9": "None selected",
      "\u539F\u7D20\u6750\u5171\u6709 {} \u4E2A\u6807\u7B7E\uFF1B\u9ED8\u8BA4\u5E26\u5165\u5168\u90E8\u539F\u7D20\u6750\u6807\u7B7E": "{} shared tags; all source tags are included by default",
      "\u539F\u7D20\u6750\u5171\u6709 {} \u4E2A\u6587\u4EF6\u5939": "{} shared folders",
      "\u9009\u62E9\u6807\u7B7E": "Choose tags",
      "\u9009\u62E9\u6587\u4EF6\u5939": "Choose folders",
      "\u641C\u7D22\u5DF2\u6709\u6807\u7B7E\uFF0C\u52FE\u9009\u540E\u7ACB\u5373\u4FDD\u5B58": "Search existing tags. Changes are applied immediately.",
      "\u641C\u7D22\u6587\u4EF6\u5939\u540D\u79F0\u6216\u5B8C\u6574\u8DEF\u5F84\uFF0C\u52FE\u9009\u540E\u7ACB\u5373\u4FDD\u5B58": "Search folder names or paths. Changes are applied immediately.",
      "\u5DF2\u9009\u62E9 {} \u9879": "{} selected",
      "\u627E\u5230 {} \u9879\uFF0C\u663E\u793A\u524D 200 \u9879\uFF1B\u8F93\u5165\u5173\u952E\u8BCD\u7F29\u5C0F\u8303\u56F4": "{} results; showing the first 200. Search to narrow the list.",
      "\u627E\u5230 {} \u9879": "{} results",
      "\u67E5\u770B\u5168\u90E8": "Show all",
      "\u53EA\u770B\u5DF2\u9009": "Selected only",
      "\u4E0A\u79FB": "Move up",
      "\u4E0B\u79FB": "Move down",
      "\u91CD\u53E0": "Overlap",
      "{} \u7684\u91CD\u53E0\u50CF\u7D20": "Overlap in pixels for {}",
      "\u7EE7\u7EED\u62D6\u5165\u56FE\u7247\u4EE5\u8FFD\u52A0": "Drop more images to add them",
      "\u62D6\u5165 Eagle \u4E2D\u9009\u4E2D\u7684\u56FE\u7247": "Drop selected Eagle images here",
      "\u65B0\u56FE\u7247\u4F1A\u8FFD\u52A0\u5230\u5F53\u524D\u5217\u8868\uFF1B\u91CD\u590D\u56FE\u7247\u4E0D\u4F1A\u91CD\u590D\u6DFB\u52A0": "Images are added to the current list; duplicates are skipped.",
      "\u6216\u5148\u5728 Eagle \u9009\u62E9\u56FE\u7247\uFF0C\u518D\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE": "Or select images in Eagle and click below.",
      "\u8FFD\u52A0 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247": "Add selected Eagle images",
      "\u8BFB\u53D6\u5F53\u524D\u9009\u4E2D\u56FE\u7247": "Load selected images",
      "\u518D\u6DFB\u52A0\u81F3\u5C11\u4E00\u5F20\u56FE\u7247\u4EE5\u5F00\u59CB\u62FC\u63A5": "Add at least one more image to stitch.",
      "\u5728 Eagle \u4E2D\u9009\u62E9\u56FE\u7247\uFF0C\u6216\u5C06\u9009\u4E2D\u7684\u56FE\u7247\u62D6\u5165\u4E0B\u65B9\u533A\u57DF": "Select images in Eagle, or drop them below.",
      "\u5F53\u524D\u62FC\u63A5\u5DF2\u5B8C\u6210\uFF0C\u8BF7\u4F7F\u7528\u201C\u66FF\u6362\u4E3A Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u5F00\u59CB\u65B0\u7684\u62FC\u63A5\u3002": "This stitch is complete. Replace the selection to start a new one.",
      "\u6B63\u5728\u8BFB\u53D6\u9009\u4E2D\u7D20\u6750\u2026": "Loading selected images\u2026",
      "\u8BF7\u5148\u5728 Eagle \u4E2D\u9009\u4E2D\u56FE\u7247\uFF0C\u518D\u8BFB\u53D6\u6216\u62D6\u5165\u3002": "Select images in Eagle before loading or dropping them.",
      "\u6240\u9009\u56FE\u7247\u5DF2\u5728\u5217\u8868\u4E2D\uFF0C\u6CA1\u6709\u65B0\u589E\u56FE\u7247\u3002": "The selected images are already in the list.",
      "\u6682\u4E0D\u652F\u6301\u89C6\u9891\u6216\u5176\u4ED6\u6587\u4EF6\uFF0C\u8BF7\u53EA\u9009\u62E9\u9759\u6001\u56FE\u7247\uFF1A{}": "Videos and other file types are not supported. Select static images only: {}",
      "\u6682\u4E0D\u652F\u6301\u52A8\u56FE\uFF1A{}": "Animated images are not supported: {}",
      "{} - \u62FC\u63A5": "{} - Stitched",
      "\u4F7F\u7528\u539F\u7D20\u6750\u5907\u6CE8 {}\uFF1A{}": "Use source note {}: {}",
      "\u5DF2\u8FFD\u52A0 {} \u5F20\u56FE\u7247\u3002\u8BF7\u68C0\u67E5\u6807\u7B7E\u3001\u76EE\u6807\u6587\u4EF6\u5939{}\u3002": "Added {} images. Check the tags, destination folders{}.",
      "\u548C\u8BC4\u5206": " and rating",
      "\u539F\u7D20\u6750\u8BC4\u5206\u4E0D\u540C\uFF08{}\uFF09\uFF0C\u8BF7\u4E3A\u65B0\u7D20\u6750\u9009\u62E9\u8BC4\u5206\u3002": "Source ratings differ ({}). Choose a rating for the new image.",
      "\u8BF7\u786E\u8BA4\u76EE\u6807\u6587\u4EF6\u5939\uFF1B\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0D\u653E\u5165\u6587\u4EF6\u5939\u3002": "Confirm the destination folders, or choose none.",
      "\u539F\u7D20\u6750\u8BC4\u5206\u4E0D\u540C\uFF0C\u8BF7\u9009\u62E9\u65B0\u7D20\u6750\u7684\u8BC4\u5206\u3002": "Source ratings differ. Choose a rating for the new image.",
      "\u8BF7\u8F93\u5165\u7D20\u6750\u540D\u79F0\u3002": "Enter a name.",
      "\u56FE\u7247\u5C3A\u5BF8\u8D85\u8FC7\u5F53\u524D\u5904\u7406\u4E0A\u9650\uFF08\u5355\u8FB9 32767 \u50CF\u7D20\uFF0C\u603B\u8BA1 1 \u4EBF\u50CF\u7D20\uFF09\uFF1B\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002": "The image exceeds the processing limit (32,767 pixels per side and 100 million pixels total). Originals were not moved.",
      "\u6B63\u5728\u751F\u6210\u7D20\u6750\u2026": "Creating output\u2026",
      "\u65E0\u6CD5\u521B\u5EFA\u62FC\u63A5\u753B\u5E03\u3002": "Unable to create the stitching canvas.",
      "\u56FE\u7247\u7F16\u7801\u5931\u8D25\u3002": "Unable to encode the image.",
      "\u6B63\u5728\u5BFC\u5165 Eagle\u2026": "Importing into Eagle\u2026",
      "\u64CD\u4F5C\u957F\u65F6\u95F4\u6CA1\u6709\u54CD\u5E94\uFF0C\u53EF\u80FD\u4ECD\u5728\u540E\u53F0\u7EE7\u7EED\u3002\u8BF7\u68C0\u67E5 Eagle \u4E2D\u65B0\u7D20\u6750\u548C\u539F\u7D20\u6750\u7684\u72B6\u6001\uFF0C\u786E\u8BA4\u64CD\u4F5C\u5DF2\u7ED3\u675F\u540E\u518D\u91CD\u8BD5\u3002": "The operation is taking too long and may still be running. Check the new image and originals in Eagle, and wait for it to finish before trying again.",
      "\u65B0\u7D20\u6750\u5DF2\u5BFC\u5165\uFF0C\u4F46\u4EE5\u4E0B\u539F\u7D20\u6750\u672A\u80FD\u79FB\u5165\u56DE\u6536\u7AD9\uFF1A{}\u3002\u8BF7\u5728 Eagle \u4E2D\u68C0\u67E5\u3002": "The new image was imported, but these originals could not be moved to Trash: {}. Check Eagle.",
      "\u65B0\u7D20\u6750\u5DF2\u5BFC\u5165\uFF0C\u4F46\u65E0\u6CD5\u786E\u8BA4\u4EE5\u4E0B\u539F\u7D20\u6750\u662F\u5426\u79FB\u5165\u56DE\u6536\u7AD9\uFF1A{}\u3002\u8BF7\u5728 Eagle \u4E2D\u68C0\u67E5\u3002": "The new image was imported, but the Trash status of these originals could not be confirmed: {}. Check Eagle.",
      "\u62FC\u63A5\u5B8C\u6210\uFF0C\u65B0\u7D20\u6750\u5DF2\u5BFC\u5165\uFF0C\u539F\u7D20\u6750\u5DF2\u79FB\u5165\u56DE\u6536\u7AD9\u3002": "Stitch complete. The new image was imported and the originals were moved to Trash.",
      "\n\u65B0\u7D20\u6750\u53EF\u80FD\u5DF2\u5BFC\u5165\uFF0C\u8BF7\u5148\u68C0\u67E5 Eagle\uFF0C\u907F\u514D\u91CD\u590D\u5BFC\u5165\u3002": "\nThe new image may have been imported. Check Eagle before retrying.",
      "\u6CA1\u6709\u6536\u5230\u56FE\u7247\u6587\u4EF6\u3002\u8BF7\u5728 Eagle \u9009\u4E2D\u56FE\u7247\u540E\u62D6\u5165\uFF0C\u6216\u70B9\u51FB\u201C\u8BFB\u53D6 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u3002": "No image files were received. Select images in Eagle and drop them here, or use the load button.",
      "\u6B63\u5728\u6838\u5BF9\u62D6\u5165\u7684 Eagle \u7D20\u6750\u2026": "Checking dropped Eagle images\u2026",
      "\u7B2C {} \u9879\u7D20\u6750\u7684\u91CD\u53E0\u503C\u65E0\u6548": "Invalid overlap for item {}.",
      "PNG \u6587\u4EF6\u4E0D\u5B8C\u6574": "The PNG file is incomplete.",
      "\u8BF7\u4ECE Eagle \u62D6\u5165\u5DF2\u9009\u4E2D\u7684\u56FE\u7247\u3002": "Drop selected images from Eagle.",
      "\u8BF7\u5148\u5728 Eagle \u4E2D\u9009\u4E2D\u8981\u62D6\u5165\u7684\u56FE\u7247\u3002": "Select images in Eagle before dropping them.",
      "\u62D6\u5165\u7684\u6587\u4EF6\u65E0\u6CD5\u4E0E\u5F53\u524D Eagle \u9009\u4E2D\u7D20\u6750\u5BF9\u5E94\u3002\u8BF7\u91CD\u65B0\u9009\u62E9\u540E\u62D6\u5165\u3002": "The dropped files do not match the current Eagle selection. Select them again and retry.",
      "\u65E0\u6CD5\u552F\u4E00\u786E\u8BA4\u62D6\u5165\u6587\u4EF6\u5BF9\u5E94\u7684 Eagle \u7D20\u6750\uFF0C\u8BF7\u4F7F\u7528\u201C\u8BFB\u53D6 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u3002": "Could not uniquely match the dropped files. Use the load selected images button.",
      "\u5BFC\u5165\u672A\u8FD4\u56DE\u7D20\u6750 ID\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002\u8BF7\u68C0\u67E5 Eagle \u4E2D\u662F\u5426\u5DF2\u751F\u6210\u65B0\u7D20\u6750\u3002": "No item ID was returned. Originals were not moved. Check Eagle for the new image.",
      "\u65B0\u7D20\u6750 {} \u672A\u80FD\u9A8C\u8BC1\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002\u8BF7\u5728 Eagle \u4E2D\u68C0\u67E5\u540E\u518D\u8BD5\u3002": "Could not verify new item {}. Originals were not moved. Check Eagle before retrying.",
      "\u65B0\u7D20\u6750 {} \u5DF2\u5BFC\u5165\uFF0C\u4F46\u8BC4\u5206\u4FDD\u5B58\u5931\u8D25\uFF1B\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002": "Item {} was imported, but its rating could not be saved. Originals were not moved.",
      "\u8F6E\u64AD\u62FC\u63A5": "Carousel Stitcher",
      "\u56FE\u7247\u62FC\u63A5": "Image stitching",
      "\u62FC\u63A5\u9884\u89C8": "Stitch preview",
      "\u62D6\u52A8\u56FE\u7247\u8C03\u6574\u987A\u5E8F\uFF0C\u68C0\u67E5\u753B\u9762\u4E0E\u63A5\u7F1D\u3002": "Drag images to reorder them and check the seams.",
      "\u6A2A\u5411": "Horizontal",
      "\u7EB5\u5411": "Vertical",
      "\u5728 Eagle \u4E2D\u9009\u4E2D\u81F3\u5C11\u4E24\u5F20\u56FE\u7247\uFF0C\u7136\u540E\u6253\u5F00\u63D2\u4EF6": "Select at least two images in Eagle, then open the plugin.",
      "\u9884\u89C8\u7F29\u653E": "Preview zoom",
      "\u9002\u5408\u7A97\u53E3": "Fit to window",
      "\u56FE\u7247\u987A\u5E8F": "Image order",
      "\u91CD\u53E0\u503C\u4F1A\u4ECE\u8BE5\u56FE\u7247\u7684\u5DE6\u4FA7\u6216\u9876\u90E8\u88C1\u5207\u3002": "Overlap is cropped from the left or top of each image.",
      "\u66FF\u6362\u4E3A Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247": "Replace with Eagle selection",
      "\u4FDD\u5B58\u5230 Eagle": "Save to Eagle",
      "\u751F\u6210\u65B0\u7D20\u6750\u540E\uFF0C\u539F\u7D20\u6750\u4F1A\u79FB\u5165 Eagle \u56DE\u6536\u7AD9\u3002": "After the new image is created, originals move to Eagle Trash.",
      "\u540D\u79F0": "Name",
      "\u6807\u7B7E": "Tags",
      "\u6587\u4EF6\u5939": "Folders",
      "\u539F\u7D20\u6750\u6587\u4EF6\u5939\u4E0D\u540C\uFF0C\u5DF2\u786E\u8BA4\u76EE\u6807\u4F4D\u7F6E": "Source folders differ; I have confirmed the destination.",
      "\u6765\u6E90\u94FE\u63A5": "Source URL",
      "\u6DFB\u52A0\u6765\u6E90\u94FE\u63A5": "Add a source URL",
      "\u5907\u6CE8": "Notes",
      "\u6DFB\u52A0\u5907\u6CE8": "Add notes",
      "\u8BC4\u5206": "Rating",
      "\u8BF7\u9009\u62E9\u8BC4\u5206": "Choose a rating",
      "\u65E0\u8BC4\u5206": "No rating",
      "\u62FC\u63A5\u5E76\u5BFC\u5165": "Stitch and import",
      "\u5173\u95ED": "Close",
      "\u641C\u7D22": "Search",
      "\u5B8C\u6210": "Done",
      "\u63D2\u4EF6\u542F\u52A8\u5931\u8D25\uFF1A": "Plugin failed to start: ",
      "\u672A\u77E5\u9519\u8BEF": "Unknown error",
      "\u3002\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005\u3002": ". Please contact the developer."
    };
    function setLocale2(locale) {
      language = /^zh(?:[-_]cn)?$/i.test(String(locale || "")) ? "zh" : "en";
    }
    function tr2(value, ...values) {
      if (Array.isArray(value) && Object.prototype.hasOwnProperty.call(value, "raw")) {
        const key = value.join("{}");
        const template = language === "en" ? translations[key] || key : key;
        let index = 0;
        return template.replace(/\{\}/g, () => String(values[index++]));
      }
      return language === "en" ? translations[value] || value : value;
    }
    function translatePage2(document2) {
      document2.documentElement.lang = language === "zh" ? "zh-CN" : "en";
      const walker = document2.createTreeWalker(document2.body, 4);
      let node;
      while (node = walker.nextNode()) {
        if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName))
          continue;
        const value = node.nodeValue.trim();
        if (value && translations[value])
          node.nodeValue = node.nodeValue.replace(value, tr2(value));
      }
      for (const element of document2.querySelectorAll("[placeholder],[aria-label],[title]"))
        for (const name of ["placeholder", "aria-label", "title"]) {
          const value = element.getAttribute(name);
          if (value && translations[value])
            element.setAttribute(name, tr2(value));
        }
      document2.title = tr2("\u8F6E\u64AD\u62FC\u63A5");
    }
    module2.exports = { setLocale: setLocale2, tr: tr2, translatePage: translatePage2, translations };
  }
});

// Plugin/core.js
var require_core = __commonJS({
  "Plugin/core.js"(exports2, module2) {
    "use strict";
    var { tr: tr2 } = require_i18n();
    function initialMetadata2(items) {
      const distinct = (key) => [...new Set(items.map((item) => item[key] || "").filter(Boolean))];
      const tags = items.map((item) => (item.tags || []).map((tag) => typeof tag === "string" ? tag : tag.name).filter(Boolean));
      const folders = items.map((item) => (item.folders || []).map((folder) => typeof folder === "string" ? folder : folder.id).filter(Boolean));
      const commonFolders = folders[0].filter((id) => folders.every((group) => group.includes(id)));
      const folderSets = folders.map((group) => [...group].sort().join("\0"));
      const ratings = [...new Set(items.map((item) => Number(item.star) || 0))];
      return {
        tags: [...new Set(tags.flat())],
        commonTags: tags[0].filter((tag) => tags.every((group) => group.includes(tag))),
        folders: commonFolders,
        foldersDiffer: folderSets.some((group) => group !== folderSets[0]),
        urls: distinct("url"),
        annotations: distinct("annotation"),
        ratings,
        urlShared: items.every((item) => (item.url || "") === (items[0].url || "")),
        annotationShared: items.every((item) => (item.annotation || "") === (items[0].annotation || ""))
      };
    }
    function dimensions2(items, direction2) {
      let width = 0, height = 0;
      for (let i = 0; i < items.length; i++) {
        const { width: w, height: h } = items[i];
        const overlap = i ? Number(items[i].overlap) || 0 : 0;
        if (!Number.isInteger(overlap) || overlap < 0 || overlap >= (direction2 === "horizontal" ? w : h))
          throw new Error(tr2`第 ${i + 1} 项素材的重叠值无效`);
        if (direction2 === "horizontal") {
          width += w - overlap;
          height = Math.max(height, h);
        } else {
          height += h - overlap;
          width = Math.max(width, w);
        }
      }
      return { width, height };
    }
    async function isAnimated2(filePath, ext) {
      if (!["png", "webp"].includes(ext))
        return false;
      const file = await require("fs").promises.open(filePath, "r");
      try {
        const header = Buffer.alloc(32);
        const { bytesRead } = await file.read(header, 0, header.length, 0);
        if (ext === "webp")
          return bytesRead >= 21 && header.toString("ascii", 12, 16) === "VP8X" && !!(header[20] & 2);
        if (bytesRead < 8 || !header.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])))
          return false;
        let position = 8;
        while (true) {
          const chunk = Buffer.alloc(8);
          const result = await file.read(chunk, 0, 8, position);
          if (result.bytesRead < 8)
            throw new Error(tr2("PNG \u6587\u4EF6\u4E0D\u5B8C\u6574"));
          const length = chunk.readUInt32BE(0), type = chunk.toString("ascii", 4, 8);
          if (type === "acTL")
            return true;
          if (type === "IDAT" || type === "IEND")
            return false;
          position += length + 12;
        }
      } finally {
        await file.close();
      }
    }
    async function matchDroppedFiles2(files, items) {
      if (!files.length)
        throw new Error(tr2("\u8BF7\u4ECE Eagle \u62D6\u5165\u5DF2\u9009\u4E2D\u7684\u56FE\u7247\u3002"));
      if (!items.length)
        throw new Error(tr2("\u8BF7\u5148\u5728 Eagle \u4E2D\u9009\u4E2D\u8981\u62D6\u5165\u7684\u56FE\u7247\u3002"));
      const fs2 = require("fs"), crypto = require("crypto");
      const hashPath = (path2) => new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256"), stream = fs2.createReadStream(path2);
        stream.on("data", (data) => hash.update(data));
        stream.on("error", reject);
        stream.on("end", () => resolve(hash.digest("hex")));
      });
      const candidates = [];
      for (const item of items) {
        const stat = await fs2.promises.stat(item.filePath);
        candidates.push({ item, size: stat.size, hash: null });
      }
      const matched = [];
      for (const file of files) {
        const sameSize = candidates.filter((candidate) => candidate.size === file.size);
        if (!sameSize.length)
          throw new Error(tr2("\u62D6\u5165\u7684\u6587\u4EF6\u65E0\u6CD5\u4E0E\u5F53\u524D Eagle \u9009\u4E2D\u7D20\u6750\u5BF9\u5E94\u3002\u8BF7\u91CD\u65B0\u9009\u62E9\u540E\u62D6\u5165\u3002"));
        const hash = file.path ? await hashPath(file.path) : crypto.createHash("sha256").update(Buffer.from(await file.arrayBuffer())).digest("hex");
        for (const candidate of sameSize)
          if (!candidate.hash)
            candidate.hash = await hashPath(candidate.item.filePath);
        const matching = sameSize.filter((candidate) => candidate.hash === hash);
        if (matching.length !== 1)
          throw new Error(tr2("\u65E0\u6CD5\u552F\u4E00\u786E\u8BA4\u62D6\u5165\u6587\u4EF6\u5BF9\u5E94\u7684 Eagle \u7D20\u6750\uFF0C\u8BF7\u4F7F\u7528\u201C\u8BFB\u53D6 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u3002"));
        matched.push(matching[0].item);
        candidates.splice(candidates.indexOf(matching[0]), 1);
      }
      return matched;
    }
    function withTimeout2(promise, milliseconds = 3e4) {
      let timer;
      const pending = Promise.resolve(promise);
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => {
          const error = new Error(tr2("\u64CD\u4F5C\u957F\u65F6\u95F4\u6CA1\u6709\u54CD\u5E94\uFF0C\u53EF\u80FD\u4ECD\u5728\u540E\u53F0\u7EE7\u7EED\u3002\u8BF7\u68C0\u67E5 Eagle \u4E2D\u65B0\u7D20\u6750\u548C\u539F\u7D20\u6750\u7684\u72B6\u6001\uFF0C\u786E\u8BA4\u64CD\u4F5C\u5DF2\u7ED3\u675F\u540E\u518D\u91CD\u8BD5\u3002"));
          error.pending = pending;
          reject(error);
        }, milliseconds);
      });
      return Promise.race([pending, timeout]).finally(() => clearTimeout(timer));
    }
    async function importThenTrash2(api, path2, options, rating, originals, timeoutMs = 3e4) {
      const id = await withTimeout2(api.item.addFromPath(path2, options), timeoutMs);
      if (!id)
        throw new Error(tr2("\u5BFC\u5165\u672A\u8FD4\u56DE\u7D20\u6750 ID\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002\u8BF7\u68C0\u67E5 Eagle \u4E2D\u662F\u5426\u5DF2\u751F\u6210\u65B0\u7D20\u6750\u3002"));
      const result = await withTimeout2(api.item.getById(id), timeoutMs);
      if (!result || !result.filePath || !require("fs").existsSync(result.filePath))
        throw new Error(tr2`新素材 ${id} 未能验证，原素材未移动。请在 Eagle 中检查后再试。`);
      if (result.star !== rating) {
        result.star = rating;
        if (await withTimeout2(result.save(), timeoutMs) !== true)
          throw new Error(tr2`新素材 ${id} 已导入，但评分保存失败；原素材未移动。`);
      }
      const saved = await withTimeout2(api.item.getById(id), timeoutMs);
      const includesAll = (actual, expected) => Array.isArray(actual) && expected.every((value) => actual.includes(value));
      if (!saved || (Number(saved.star) || 0) !== rating || options.name && saved.name !== options.name || options.website && saved.url !== options.website || options.annotation && saved.annotation !== options.annotation || options.tags && options.tags.length && !includesAll(saved.tags, options.tags) || options.folders && options.folders.length && !includesAll(saved.folders, options.folders)) {
        throw new Error(tr2`新素材 ${id} 的信息未能验证，原素材未移动。请在 Eagle 中检查。`);
      }
      const failed = [], uncertain = [];
      for (const item of originals) {
        let outcome, threw = false;
        try {
          outcome = await withTimeout2(item.moveToTrash(), timeoutMs);
        } catch (error) {
          if (error && error.pending)
            throw error;
          threw = true;
        }
        if (!threw && (outcome === true || outcome === void 0))
          continue;
        let current;
        try {
          current = await withTimeout2(api.item.getById(item.id), timeoutMs);
        } catch (error) {
          if (error && error.pending)
            throw error;
        }
        if (current && current.isDeleted === true)
          continue;
        if (current && current.isDeleted === false)
          failed.push(item.name);
        else
          uncertain.push(item.name);
      }
      return { id, failed, uncertain };
    }
    module2.exports = { initialMetadata: initialMetadata2, dimensions: dimensions2, isAnimated: isAnimated2, matchDroppedFiles: matchDroppedFiles2, importThenTrash: importThenTrash2, withTimeout: withTimeout2 };
  }
});

// Plugin/video.js
var require_video = __commonJS({
  "Plugin/video.js"(exports2, module2) {
    "use strict";
    var { spawn } = require("child_process");
    var { dimensions: dimensions2 } = require_core();
    var { tr: tr2 } = require_i18n();
    function run(binary, args, limit = 8 * 1024 * 1024, timeoutMs = 3e4) {
      return new Promise((resolve, reject) => {
        const proc = spawn(binary, args, { windowsHide: true });
        let output = [], size = 0, errors = "", timedOut = false;
        const timer = setTimeout(() => {
          timedOut = true;
          proc.kill();
        }, timeoutMs);
        proc.stdout.on("data", (chunk) => {
          size += chunk.length;
          if (size > limit)
            proc.kill();
          else
            output.push(chunk);
        });
        proc.stderr.on("data", (chunk) => {
          errors = (errors + chunk.toString()).slice(-4e3);
        });
        proc.on("error", (error) => {
          clearTimeout(timer);
          reject(error);
        });
        proc.on("close", (code) => {
          clearTimeout(timer);
          if (timedOut)
            reject(new Error(tr2("\u89C6\u9891\u5904\u7406\u8D85\u65F6\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002")));
          else if (code !== 0 || size > limit)
            reject(new Error(tr2("\u89C6\u9891\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u548C FFmpeg \u4F9D\u8D56\u3002") + (errors ? "\n" + errors.slice(-800) : "")));
          else
            resolve(Buffer.concat(output));
        });
      });
    }
    async function probe2(binary, file) {
      var _a;
      const raw = await run(binary, ["-v", "error", "-show_entries", "format=duration:stream=codec_type,duration,width,height", "-of", "json", file]);
      const data = JSON.parse(raw.toString()), streams = data.streams || [], video = streams.find((s) => s.codec_type === "video");
      const duration = Number(video == null ? void 0 : video.duration) || Number((_a = data.format) == null ? void 0 : _a.duration);
      if (!video || !Number.isFinite(duration) || duration <= 0)
        throw new Error(tr2("\u65E0\u6CD5\u8BFB\u53D6\u89C6\u9891\u65F6\u957F\u6216\u753B\u9762\u3002"));
      return { duration, hasAudio: streams.some((s) => s.codec_type === "audio"), width: video.width, height: video.height };
    }
    function thumbnail2(binary, file) {
      return run(binary, ["-v", "error", "-i", file, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "pipe:1"], 32 * 1024 * 1024);
    }
    function makeVideoArgs(entries2, direction2, audioId, output) {
      const { width, height } = dimensions2(entries2, direction2), w = width + width % 2, h = height + height % 2;
      const duration = Math.max(...entries2.filter((e) => e.kind === "video").map((e) => e.duration));
      if (!Number.isFinite(duration) || duration <= 0)
        throw new Error(tr2("\u65E0\u6CD5\u8BFB\u53D6\u89C6\u9891\u65F6\u957F\u6216\u753B\u9762\u3002"));
      const args = ["-hide_banner", "-loglevel", "error", "-y"];
      for (const e of entries2) {
        if (e.kind !== "video")
          args.push("-loop", "1", "-framerate", "30");
        args.push("-i", e.item.filePath);
      }
      let graph = [`color=c=black:s=${w}x${h}:r=30:d=${duration},format=yuv444p[base]`], x = 0, y = 0;
      entries2.forEach((e, i) => {
        const overlap = i ? Number(e.overlap) || 0 : 0, cw = e.width - (direction2 === "horizontal" ? overlap : 0), ch = e.height - (direction2 === "vertical" ? overlap : 0);
        const cx = direction2 === "horizontal" ? overlap : 0, cy = direction2 === "vertical" ? overlap : 0;
        const freeze = e.kind === "video" ? `,tpad=stop_mode=clone:stop_duration=${duration}` : "";
        graph.push(`[${i}:v]setpts=PTS-STARTPTS,fps=30${freeze},trim=duration=${duration},crop=${cw}:${ch}:${cx}:${cy}:exact=1,setsar=1[part${i}]`);
        graph.push(`[${i ? "out" + (i - 1) : "base"}][part${i}]overlay=${x}:${y}:format=yuv444:eof_action=pass:shortest=0[out${i}]`);
        if (direction2 === "horizontal")
          x += cw;
        else
          y += ch;
      });
      args.push("-filter_complex", graph.join(";"), "-map", `[out${entries2.length - 1}]`);
      const audioIndex = entries2.findIndex((e) => e.kind === "video" && e.hasAudio && e.item.id === audioId);
      if (audioIndex >= 0)
        args.push("-map", `${audioIndex}:a:0`, "-af", "asetpts=PTS-STARTPTS,apad", "-c:a", "aac");
      else
        args.push("-an");
      args.push("-t", String(duration), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart", output);
      return { args, width: w, height: h, duration };
    }
    async function exportVideo2(ffmpeg, ffprobe, entries2, direction2, audioId, output) {
      const info = makeVideoArgs(entries2, direction2, audioId, output);
      await run(ffmpeg, info.args, 8 * 1024 * 1024, Math.max(12e4, info.duration * 2e4));
      const actual = await probe2(ffprobe, output);
      if (actual.duration + 0.15 < info.duration || actual.width !== info.width || actual.height !== info.height)
        throw new Error(tr2("\u751F\u6210\u7684\u89C6\u9891\u672A\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002"));
    }
    module2.exports = { probe: probe2, thumbnail: thumbnail2, makeVideoArgs, exportVideo: exportVideo2 };
  }
});

// Plugin/app.js
var { tr, setLocale, translatePage } = require_i18n();
var fs = require("fs");
var os = require("os");
var path = require("path");
var { pathToFileURL } = require("url");
var { initialMetadata, dimensions, isAnimated, importThenTrash, matchDroppedFiles, withTimeout } = require_core();
var { probe, thumbnail, exportVideo } = require_video();
var $ = (id) => document.getElementById(id);
var imageTypes = /* @__PURE__ */ new Set(["jpg", "jpeg", "png", "webp", "bmp", "tif", "tiff"]);
var videoTypes = /* @__PURE__ */ new Set(["mp4", "mov", "m4v", "webm", "mkv", "avi", "mpg", "mpeg", "flv", "ts"]);
var entries = [];
var direction = "horizontal";
var zoom = "fit";
var folderList = [];
var tagList = [];
var metadata;
var busy = false;
var loading = false;
var imported = false;
var selectedId = null;
var selectedTags = /* @__PURE__ */ new Set();
var selectedFolders = /* @__PURE__ */ new Set();
var tagOverrides = /* @__PURE__ */ new Map();
var folderOverrides = /* @__PURE__ */ new Map();
var editedFields = /* @__PURE__ */ new Set();
var pickerType = "tags";
var pickerLimit = 200;
var pickerTrigger = null;
function updateChoice(type, value, checked) {
  const selected = type === "tags" ? selectedTags : selectedFolders, overrides = type === "tags" ? tagOverrides : folderOverrides;
  checked ? selected.add(value) : selected.delete(value);
  overrides.set(value, checked);
}
function refreshInheritedChoices() {
  for (const [selected, overrides, defaults] of [[selectedTags, tagOverrides, metadata.tags], [selectedFolders, folderOverrides, metadata.folders]]) {
    selected.clear();
    defaults.forEach((value) => selected.add(value));
    for (const [value, checked] of overrides)
      checked ? selected.add(value) : selected.delete(value);
  }
}
function status(message, kind = "") {
  $("status").textContent = message;
  $("status").className = kind;
  $("statusToast").classList.toggle("hidden", !message);
}
function setLoading(value) {
  loading = value;
  $("imageLoading").classList.toggle("hidden", !value);
  $("progressAnnouncement").textContent = value ? tr("\u6B63\u5728\u52A0\u8F7D\u7D20\u6750") : "";
  $("save").disabled = value || busy || imported || entries.length < 2;
  document.querySelector("main").inert = value || busy;
}
function setSaving(value) {
  busy = value;
  $("save").classList.toggle("is-loading", value);
  $("save").setAttribute("aria-busy", String(value));
  $("save").setAttribute("aria-label", tr(value ? "\u6B63\u5728\u751F\u6210\u7D20\u6750\u2026" : "\u62FC\u63A5\u5E76\u5BFC\u5165"));
  $("progressAnnouncement").textContent = value ? tr("\u6B63\u5728\u751F\u6210\u7D20\u6750\u2026") : "";
  $("save").disabled = value || loading || imported || entries.length < 2;
  $("clearSelection").disabled = value;
  document.querySelector("main").inert = value || loading;
}
function cleanName(name) {
  return (name || "").replace(/\s*[-_ ]?\d+\s*$/, "").trim() || tr("\u62FC\u63A5\u56FE\u7247");
}
function loadImage(item) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(tr`无法读取图片：${item.name}`));
    img.src = pathToFileURL(item.filePath).href;
  });
}
async function ffmpegPaths() {
  var _a;
  const module2 = (_a = eagle.extraModule) == null ? void 0 : _a.ffmpeg;
  if (!module2 || !await module2.isInstalled())
    throw new Error(tr("\u89C6\u9891\u62FC\u63A5\u9700\u8981 Eagle \u5B98\u65B9 FFmpeg \u4F9D\u8D56\uFF0C\u8BF7\u5148\u5728 Eagle \u4E2D\u5B89\u88C5\u3002"));
  const paths = await module2.getPaths();
  if (!(paths == null ? void 0 : paths.ffmpeg) || !(paths == null ? void 0 : paths.ffprobe) || !fs.existsSync(paths.ffmpeg) || !fs.existsSync(paths.ffprobe))
    throw new Error(tr("\u627E\u4E0D\u5230 Eagle \u5B98\u65B9 FFmpeg \u4F9D\u8D56\uFF0C\u8BF7\u68C0\u67E5\u5B89\u88C5\u3002"));
  return paths;
}
function imageFromSource(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(tr("\u65E0\u6CD5\u8BFB\u53D6\u89C6\u9891\u9884\u89C8\u3002")));
    img.src = src;
  });
}
async function loadVideo(item, paths) {
  const [info, bytes] = await Promise.all([probe(paths.ffprobe, item.filePath), thumbnail(paths.ffmpeg, item.filePath)]);
  const image = await imageFromSource("data:image/png;base64," + bytes.toString("base64"));
  return { item, image, ...info, width: image.naturalWidth, height: image.naturalHeight, kind: "video", overlap: 0 };
}
function updateAudioOptions() {
  const videos = entries.filter((entry) => entry.kind === "video");
  const previous = $("audioSource").value;
  $("audioSection").classList.toggle("hidden", !videos.length);
  $("videoPreviewHint").classList.toggle("hidden", !videos.length);
  const muted = document.createElement("option");
  muted.value = "";
  muted.textContent = tr("\u9759\u97F3");
  $("audioSource").replaceChildren(muted);
  for (const entry of videos.filter((entry2) => entry2.hasAudio)) {
    const option = document.createElement("option");
    option.value = entry.item.id;
    option.textContent = entry.item.name;
    $("audioSource").append(option);
  }
  $("audioSource").value = videos.some((entry) => entry.hasAudio && entry.item.id === previous) ? previous : "";
}
function updateMetadataFields() {
  if (!metadata || !entries.length)
    return;
  if (!editedFields.has("name"))
    $("name").value = tr`${cleanName(entries[0].item.name)} - 拼接`;
  if (!editedFields.has("url"))
    $("url").value = metadata.urlShared ? metadata.urls[0] || "" : "";
  if (!editedFields.has("annotation"))
    $("annotation").value = metadata.annotationShared ? metadata.annotations[0] || "" : "";
  if (!editedFields.has("rating"))
    $("rating").value = metadata.ratings.length === 1 ? String(metadata.ratings[0]) : "";
  $("urlOptions").replaceChildren(...metadata.urls.map((value) => {
    const o = document.createElement("option");
    o.value = value;
    return o;
  }));
  $("annotations").replaceChildren();
  if (!metadata.annotationShared)
    metadata.annotations.forEach((text, index) => {
      const button = document.createElement("button");
      button.textContent = tr`使用原素材备注 ${index + 1}：${text}`;
      button.title = text;
      button.onclick = () => {
        $("annotation").value = text;
        editedFields.add("annotation");
      };
      $("annotations").append(button);
    });
}
function flattenFolders(nodes, prefix = "", out = []) {
  for (const node of nodes || []) {
    if (!node || !node.id)
      continue;
    const label = prefix ? `${prefix} / ${node.name}` : node.name;
    if (!out.some((x) => x.id === node.id))
      out.push({ id: node.id, name: label });
    if (node.children)
      flattenFolders(node.children, label, out);
  }
  return out;
}
function renderChoices() {
  $("openTags").disabled = entries.length === 0;
  $("openFolders").disabled = entries.length === 0;
  $("openTags").classList.toggle("compact", selectedTags.size > 0);
  $("openFolders").classList.toggle("compact", selectedFolders.size > 0);
  for (const [id, selected, list, key] of [["tags", selectedTags, tagList, "name"], ["folders", selectedFolders, folderList, "id"]]) {
    const container = $(id);
    container.replaceChildren();
    for (const value of selected) {
      const chip = document.createElement("span");
      chip.className = "selected-chip";
      const name = (list.find((item) => item[key] === value) || {}).name || value;
      const label = document.createElement("span");
      label.textContent = name;
      const remove = document.createElement("button");
      remove.textContent = "\xD7";
      remove.setAttribute("aria-label", tr`移除 ${name}`);
      remove.onclick = () => {
        updateChoice(id, value, false);
        renderChoices();
      };
      chip.append(label, remove);
      container.append(chip);
    }
  }
}
function openPicker(type) {
  pickerType = type;
  pickerLimit = 200;
  pickerTrigger = document.activeElement;
  $("pickerSearch").value = "";
  document.querySelector(".app").inert = true;
  $("picker").classList.remove("hidden");
  $("pickerTitle").textContent = type === "tags" ? tr("\u9009\u62E9\u6807\u7B7E") : tr("\u9009\u62E9\u6587\u4EF6\u5939");
  renderPicker();
  $("pickerSearch").focus();
}
function renderPicker() {
  const data = pickerType === "tags" ? tagList : folderList, selected = pickerType === "tags" ? selectedTags : selectedFolders, key = pickerType === "tags" ? "name" : "id";
  const query = $("pickerSearch").value.trim().toLocaleLowerCase();
  const filtered = data.filter((item) => item.name.toLocaleLowerCase().includes(query));
  filtered.sort((a, b) => Number(selected.has(b[key])) - Number(selected.has(a[key])) || a.name.localeCompare(b.name, void 0, { numeric: true }));
  $("pickerList").replaceChildren();
  for (const entry of filtered.slice(0, pickerLimit)) {
    const label = document.createElement("label"), input = document.createElement("input"), name = document.createElement("span");
    label.className = "picker-row";
    input.type = "checkbox";
    input.checked = selected.has(entry[key]);
    name.textContent = entry.name;
    input.onchange = () => {
      updateChoice(pickerType, entry[key], input.checked);
      renderChoices();
      $("pickerSelectedOnly").disabled = !selected.size;
      $("pickerSelectionCount").textContent = tr`已选择 ${selected.size} 项`;
    };
    label.append(input, name);
    $("pickerList").append(label);
  }
  $("pickerCount").textContent = tr`找到 ${filtered.length} 项`;
  $("pickerMore").classList.toggle("hidden", filtered.length <= pickerLimit);
  $("pickerSelectedOnly").disabled = !selected.size;
  $("pickerSelectionCount").textContent = tr`已选择 ${selected.size} 项`;
}
function renderItems() {
  $("items").replaceChildren();
  $("strip").classList.toggle("hidden", entries.length === 0);
  entries.forEach((entry, index) => {
    const row = document.createElement("div");
    row.className = "item";
    row.draggable = !busy;
    row.classList.toggle("selected", entry.item.id === selectedId);
    row.ondragstart = (event) => {
      event.dataTransfer.setData("text/plain", String(index));
      row.classList.add("dragging");
    };
    row.ondragend = () => row.classList.remove("dragging");
    row.ondragover = (event) => {
      if (event.dataTransfer.types.includes("text/plain"))
        event.preventDefault();
    };
    row.ondrop = (event) => {
      if (!event.dataTransfer.types.includes("text/plain") || event.dataTransfer.files.length)
        return;
      event.preventDefault();
      event.stopPropagation();
      const from = Number(event.dataTransfer.getData("text/plain"));
      if (Number.isInteger(from))
        move(from, index);
    };
    const thumb = document.createElement("div");
    thumb.className = "thumb-button";
    thumb.title = entry.item.name;
    const selectButton = document.createElement("button");
    selectButton.className = "select-image";
    selectButton.setAttribute("aria-label", entry.item.name);
    selectButton.setAttribute("aria-pressed", String(entry.item.id === selectedId));
    const pic = document.createElement("img");
    pic.src = entry.image.src;
    pic.alt = "";
    selectButton.append(pic);
    thumb.append(selectButton);
    selectButton.onclick = () => {
      var _a, _b, _c;
      selectedId = entry.item.id;
      renderItems();
      renderPreview();
      (_c = (_b = (_a = $("items").children[index]) == null ? void 0 : _a.querySelector) == null ? void 0 : _b.call(_a, ".select-image")) == null ? void 0 : _c.focus();
    };
    if (entry.kind === "video") {
      const badge = document.createElement("span");
      badge.className = "video-badge";
      badge.textContent = tr("\u89C6\u9891");
      thumb.append(badge);
    }
    const remove = document.createElement("button");
    remove.className = "remove-image";
    remove.setAttribute("aria-label", tr`移除 ${entry.item.name}`);
    remove.title = tr`移除 ${entry.item.name}`;
    const close = document.createElement("img");
    close.src = "assets/close.svg";
    close.alt = "";
    remove.append(close);
    remove.onclick = (event) => {
      event.stopPropagation();
      removeEntry(index);
    };
    thumb.append(remove);
    const controls = document.createElement("div");
    controls.className = "tile-actions";
    const makeButton = (asset, label, fn, disabled) => {
      const button = document.createElement("button");
      button.className = "tile-button";
      button.disabled = disabled;
      button.title = label;
      button.setAttribute("aria-label", label);
      const icon = document.createElement("img");
      icon.src = asset;
      icon.alt = "";
      button.append(icon);
      button.onclick = fn;
      return button;
    };
    const prev = makeButton("assets/left.svg", tr("\u4E0A\u79FB"), () => move(index, index - 1), index === 0);
    const handle = document.createElement("span");
    handle.className = "handle";
    handle.title = tr("\u62D6\u52A8\u6392\u5E8F");
    const grip = document.createElement("img");
    grip.src = "assets/grip.svg";
    grip.alt = "";
    handle.append(grip);
    const next = makeButton("assets/right.svg", tr("\u4E0B\u79FB"), () => move(index, index + 1), index === entries.length - 1);
    controls.append(prev, handle, next);
    row.append(thumb, controls);
    $("items").append(row);
  });
}
function move(from, to) {
  var _a, _b, _c;
  if (busy || loading || from === to || from < 0 || to < 0 || from >= entries.length || to >= entries.length)
    return;
  const hadOverlap = entries.some((e) => e.overlap);
  entries.splice(to, 0, entries.splice(from, 1)[0]);
  entries.forEach((e) => e.overlap = 0);
  updateMetadataFields();
  renderItems();
  renderPreview();
  (_c = (_b = (_a = $("items").children[to]) == null ? void 0 : _a.querySelector) == null ? void 0 : _b.call(_a, ".select-image")) == null ? void 0 : _c.focus();
  if (hadOverlap)
    status(tr("\u7D20\u6750\u987A\u5E8F\u5DF2\u66F4\u6539\uFF0C\u91CD\u53E0\u503C\u5DF2\u91CD\u7F6E\u3002"));
}
function resetSelection() {
  entries = [];
  selectedId = null;
  metadata = null;
  imported = false;
  selectedTags.clear();
  selectedFolders.clear();
  tagOverrides.clear();
  folderOverrides.clear();
  editedFields.clear();
  $("folderConfirmLabel").classList.add("hidden");
  $("folderConfirm").checked = false;
  updateAudioOptions();
  $("name").value = "";
  $("url").value = "";
  $("annotation").value = "";
  $("rating").value = "0";
  $("urlOptions").replaceChildren();
  $("annotations").replaceChildren();
  status("");
  renderChoices();
  renderItems();
  renderPreview();
}
function removeEntry(index) {
  var _a, _b, _c;
  if (busy || loading)
    return;
  const hadOverlap = entries.some((e) => e.overlap);
  entries.splice(index, 1);
  entries.forEach((e) => e.overlap = 0);
  selectedId = entries.length ? entries[Math.min(index, entries.length - 1)].item.id : null;
  if (!entries.length) {
    resetSelection();
    return;
  }
  metadata = initialMetadata(entries.map((e) => e.item));
  refreshInheritedChoices();
  updateMetadataFields();
  $("folderConfirmLabel").classList.toggle("hidden", !metadata.foldersDiffer);
  $("folderConfirm").checked = false;
  updateAudioOptions();
  renderChoices();
  renderItems();
  renderPreview();
  if (entries.length)
    (_c = (_b = (_a = $("items").children[Math.min(index, entries.length - 1)]) == null ? void 0 : _a.querySelector) == null ? void 0 : _b.call(_a, ".select-image")) == null ? void 0 : _c.focus();
  if (hadOverlap)
    status(tr("\u7D20\u6750\u987A\u5E8F\u5DF2\u66F4\u6539\uFF0C\u91CD\u53E0\u503C\u5DF2\u91CD\u7F6E\u3002"));
}
function draw(ctx, scale) {
  let x = 0, y = 0;
  entries.forEach((entry, i) => {
    const overlap = i ? entry.overlap : 0;
    if (direction === "horizontal") {
      ctx.drawImage(entry.image, overlap, 0, entry.width - overlap, entry.height, x * scale, 0, (entry.width - overlap) * scale, entry.height * scale);
      x += entry.width - overlap;
    } else {
      ctx.drawImage(entry.image, 0, overlap, entry.width, entry.height - overlap, 0, y * scale, entry.width * scale, (entry.height - overlap) * scale);
      y += entry.height - overlap;
    }
  });
}
function renderPreview() {
  const box = $("preview");
  box.replaceChildren();
  $("previewControls").classList.toggle("hidden", entries.length === 0);
  if (!entries.length) {
    box.classList.remove("zoomed");
    const empty = document.createElement("div");
    empty.className = "empty";
    const message = document.createElement("span");
    message.textContent = tr("\u5728 Eagle \u4E2D\u9009\u4E2D\u56FE\u7247\u6216\u89C6\u9891\uFF0C\u6216\u5C06\u7D20\u6750\u62D6\u5230\u8FD9\u91CC\u3002");
    const button = document.createElement("button");
    button.className = "secondary";
    button.textContent = tr("\u8BFB\u53D6 Eagle \u9009\u533A");
    button.onclick = () => loadSelection();
    empty.append(message, button);
    box.append(empty);
    $("size").textContent = "\u2014";
    $("save").disabled = true;
    return;
  }
  try {
    const { width, height } = dimensions(entries, direction);
    $("size").textContent = `${width} \xD7 ${height} px`;
    const scale = Math.min(1, 4096 / width, 4096 / height, Math.sqrt(16e6 / (width * height)));
    const display = zoom === "fit" ? Math.min(1, (box.clientWidth || 500) / width, (box.clientHeight || 350) / height) : Number(zoom);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    draw(canvas.getContext("2d"), scale);
    canvas.style.width = `${width * display}px`;
    canvas.style.height = `${height * display}px`;
    box.classList.toggle("zoomed", zoom !== "fit");
    box.append(canvas);
    const index = entries.findIndex((e) => e.item.id === selectedId);
    $("overlapLabel").classList.toggle("hidden", index < 1);
    if (index > 0) {
      $("overlapText").textContent = tr`第 ${index + 1} 项前的重叠`;
      $("overlap").value = entries[index].overlap;
      $("overlap").max = (direction === "horizontal" ? entries[index].width : entries[index].height) - 1;
    }
    $("save").disabled = busy || loading || imported || entries.length < 2;
  } catch (error) {
    box.textContent = error.message;
    $("save").disabled = true;
  }
}
function updateDirection(value) {
  if (busy || loading || direction === value)
    return;
  const hadOverlap = entries.some((e) => e.overlap);
  direction = value;
  entries.forEach((e) => e.overlap = 0);
  $("horizontal").classList.toggle("active", value === "horizontal");
  $("vertical").classList.toggle("active", value === "vertical");
  $("horizontal").setAttribute("aria-pressed", String(value === "horizontal"));
  $("vertical").setAttribute("aria-pressed", String(value === "vertical"));
  renderItems();
  renderPreview();
  if (hadOverlap)
    status(tr("\u62FC\u63A5\u65B9\u5411\u5DF2\u66F4\u6539\uFF0C\u91CD\u53E0\u503C\u5DF2\u91CD\u7F6E\u3002"));
}
async function loadSelection(providedItems, append = false, silentEmpty = false) {
  if (busy || loading)
    return;
  if (append && imported) {
    status(tr("\u5F53\u524D\u62FC\u63A5\u5DF2\u5B8C\u6210\uFF0C\u8BF7\u6E05\u7A7A\u5F53\u524D\u9009\u62E9\u540E\u5F00\u59CB\u65B0\u7684\u62FC\u63A5\u3002"), "error");
    return;
  }
  setLoading(true);
  status("");
  try {
    let items = typeof providedItems === "function" ? await providedItems() : providedItems || await eagle.item.getSelected();
    if (!items.length && silentEmpty) {
      status("");
      return;
    }
    if (!items.length)
      throw new Error(tr("\u8BF7\u5148\u5728 Eagle \u4E2D\u9009\u4E2D\u7D20\u6750\uFF0C\u518D\u8BFB\u53D6\u6216\u62D6\u5165\u3002"));
    if (append) {
      const existing = new Set(entries.map((entry) => entry.item.id));
      items = items.filter((item) => !existing.has(item.id));
      if (!items.length)
        throw new Error(tr("\u6240\u9009\u7D20\u6750\u5DF2\u5728\u5217\u8868\u4E2D\uFF0C\u6CA1\u6709\u65B0\u589E\u7D20\u6750\u3002"));
    }
    const invalid = items.filter((item) => !imageTypes.has(String(item.ext || "").toLowerCase()) && !videoTypes.has(String(item.ext || "").toLowerCase()));
    if (invalid.length)
      throw new Error(tr`不支持这些文件格式：${invalid.map((item) => item.name).join("\u3001")}`);
    for (const item of items)
      if (imageTypes.has(String(item.ext).toLowerCase()) && await isAnimated(item.filePath, String(item.ext).toLowerCase()))
        throw new Error(tr`暂不支持动图：${item.name}`);
    items.sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
    const paths = items.some((item) => videoTypes.has(String(item.ext).toLowerCase())) ? await ffmpegPaths() : null;
    const loaded = [];
    for (const item of items) {
      if (videoTypes.has(String(item.ext).toLowerCase()))
        loaded.push(await loadVideo(item, paths));
      else {
        const image = await loadImage(item);
        loaded.push({ item, image, width: image.naturalWidth, height: image.naturalHeight, kind: "image", overlap: 0 });
      }
    }
    const allItems = append ? [...entries.map((entry) => entry.item), ...items] : items;
    const info = initialMetadata(allItems);
    const [folders, tags] = await Promise.all([eagle.folder.getAll(), eagle.tag.get()]);
    entries = append ? [...entries, ...loaded] : loaded;
    imported = false;
    metadata = info;
    selectedId = loaded[loaded.length - 1].item.id;
    if (!append) {
      tagOverrides.clear();
      folderOverrides.clear();
      editedFields.clear();
    }
    refreshInheritedChoices();
    folderList = flattenFolders(folders);
    tagList = [.../* @__PURE__ */ new Set([...metadata.tags, ...tags.map((t) => typeof t === "string" ? t : t.name).filter(Boolean)])].sort((a, b) => a.localeCompare(b)).map((name) => ({ name }));
    updateMetadataFields();
    $("folderConfirmLabel").classList.toggle("hidden", !metadata.foldersDiffer);
    $("folderConfirm").checked = false;
    updateAudioOptions();
    renderChoices();
    renderItems();
    renderPreview();
    if (metadata.ratings.length > 1)
      status(tr`原素材评分不同（${metadata.ratings.join("\u3001")}），请为新素材选择评分。`);
    else
      status("");
  } catch (error) {
    renderItems();
    renderPreview();
    status(error.message, "error");
  } finally {
    setLoading(false);
    renderChoices();
    renderItems();
    renderPreview();
  }
}
async function save() {
  if (busy || imported || entries.length < 2)
    return;
  if (metadata.foldersDiffer && !$("folderConfirm").checked) {
    status(tr("\u8BF7\u786E\u8BA4\u76EE\u6807\u6587\u4EF6\u5939\uFF1B\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0D\u653E\u5165\u6587\u4EF6\u5939\u3002"), "error");
    return;
  }
  if ($("rating").value === "") {
    status(tr("\u539F\u7D20\u6750\u8BC4\u5206\u4E0D\u540C\uFF0C\u8BF7\u9009\u62E9\u65B0\u7D20\u6750\u7684\u8BC4\u5206\u3002"), "error");
    return;
  }
  if (!$("name").value.trim()) {
    status(tr("\u8BF7\u8F93\u5165\u7D20\u6750\u540D\u79F0\u3002"), "error");
    return;
  }
  let tmp;
  try {
    const { width, height } = dimensions(entries, direction);
    if (width > 32767 || height > 32767 || width * height > 1e8)
      throw new Error(tr("\u56FE\u7247\u5C3A\u5BF8\u8D85\u8FC7\u5F53\u524D\u5904\u7406\u4E0A\u9650\uFF08\u5355\u8FB9 32767 \u50CF\u7D20\uFF0C\u603B\u8BA1 1 \u4EBF\u50CF\u7D20\uFF09\uFF1B\u539F\u7D20\u6750\u672A\u79FB\u52A8\u3002"));
    setSaving(true);
    status("");
    await new Promise((resolve) => setTimeout(resolve, 0));
    const hasVideo = entries.some((entry) => entry.kind === "video");
    tmp = await fs.promises.mkdtemp(path.join(os.tmpdir(), "eagle-stitch-"));
    const file = path.join(tmp, hasVideo ? "stitched.mp4" : "stitched.png");
    if (hasVideo) {
      const paths = await ffmpegPaths();
      await exportVideo(paths.ffmpeg, paths.ffprobe, entries, direction, $("audioSource").value, file);
    } else {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx)
        throw new Error(tr("\u65E0\u6CD5\u521B\u5EFA\u62FC\u63A5\u753B\u5E03\u3002"));
      draw(ctx, 1);
      const blob = await withTimeout(new Promise((resolve) => canvas.toBlob(resolve, "image/png")), 6e4);
      if (!blob)
        throw new Error(tr("\u56FE\u7247\u7F16\u7801\u5931\u8D25\u3002"));
      await fs.promises.writeFile(file, Buffer.from(await blob.arrayBuffer()));
    }
    $("progressAnnouncement").textContent = tr("\u6B63\u5728\u5BFC\u5165 Eagle\u2026");
    $("save").setAttribute("aria-label", tr("\u6B63\u5728\u5BFC\u5165 Eagle\u2026"));
    const api = { item: { addFromPath: async (...args) => {
      imported = true;
      return await eagle.item.addFromPath(...args);
    }, getById: (id) => eagle.item.getById(id) } };
    const result = await importThenTrash(api, file, { name: $("name").value.trim(), website: $("url").value.trim(), annotation: $("annotation").value, tags: [...selectedTags], folders: [...selectedFolders] }, Number($("rating").value), entries.map((e) => e.item));
    const messages = [];
    if (result.failed.length)
      messages.push(tr`新素材已导入，但以下原素材未能移入回收站：${result.failed.join("\u3001")}。请在 Eagle 中检查。`);
    if (result.uncertain.length)
      messages.push(tr`新素材已导入，但无法确认以下原素材是否移入回收站：${result.uncertain.join("\u3001")}。请在 Eagle 中检查。`);
    if (messages.length)
      status(messages.join("\n"), "error");
    else
      status(tr("\u62FC\u63A5\u5B8C\u6210\uFF0C\u65B0\u7D20\u6750\u5DF2\u5BFC\u5165\uFF0C\u539F\u7D20\u6750\u5DF2\u79FB\u5165\u56DE\u6536\u7AD9\u3002"), "success");
  } catch (error) {
    if (error.pending && tmp) {
      const dir = tmp;
      tmp = null;
      error.pending.then(() => fs.promises.rm(dir, { recursive: true, force: true }), () => fs.promises.rm(dir, { recursive: true, force: true })).catch(() => {
      });
    }
    status(tr`${error.message}${imported && !error.pending ? tr("\n\u65B0\u7D20\u6750\u53EF\u80FD\u5DF2\u5BFC\u5165\uFF0C\u8BF7\u5148\u68C0\u67E5 Eagle\uFF0C\u907F\u514D\u91CD\u590D\u5BFC\u5165\u3002") : ""}`, "error");
  } finally {
    setSaving(false);
    if (tmp)
      fs.promises.rm(tmp, { recursive: true, force: true }).catch(() => {
      });
  }
}
var dropTarget = document.querySelector(".workspace");
dropTarget.addEventListener("dragover", (event) => {
  if (!Array.from(event.dataTransfer.types).includes("Files"))
    return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  $("dropZone").classList.add("drag-over");
});
dropTarget.addEventListener("dragleave", (event) => {
  if (!dropTarget.contains(event.relatedTarget))
    $("dropZone").classList.remove("drag-over");
});
dropTarget.addEventListener("drop", async (event) => {
  if (!event.dataTransfer.files.length) {
    $("dropZone").classList.remove("drag-over");
    if (!Array.from(event.dataTransfer.types).includes("text/plain"))
      status(tr("\u6CA1\u6709\u6536\u5230\u56FE\u7247\u6587\u4EF6\u3002\u8BF7\u5728 Eagle \u9009\u4E2D\u56FE\u7247\u540E\u62D6\u5165\uFF0C\u6216\u70B9\u51FB\u201C\u8BFB\u53D6 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u3002"), "error");
    return;
  }
  event.preventDefault();
  $("dropZone").classList.remove("drag-over");
  if (busy)
    return;
  const files = Array.from(event.dataTransfer.files || []);
  if (!files.length) {
    status(tr("\u6CA1\u6709\u6536\u5230\u56FE\u7247\u6587\u4EF6\u3002\u8BF7\u5728 Eagle \u9009\u4E2D\u56FE\u7247\u540E\u62D6\u5165\uFF0C\u6216\u70B9\u51FB\u201C\u8BFB\u53D6 Eagle \u5F53\u524D\u9009\u4E2D\u56FE\u7247\u201D\u3002"), "error");
    return;
  }
  await loadSelection(async () => {
    const items = await eagle.item.getSelected();
    return await matchDroppedFiles(files, items);
  }, true);
});
document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", (event) => event.preventDefault());
$("readSelection").onclick = () => loadSelection();
$("addSelection").onclick = () => loadSelection(void 0, true);
$("openTags").onclick = () => openPicker("tags");
$("openFolders").onclick = () => openPicker("folders");
$("pickerClose").onclick = $("pickerDone").onclick = () => {
  $("picker").classList.add("hidden");
  document.querySelector(".app").inert = false;
  renderChoices();
  if (pickerTrigger && pickerTrigger.focus)
    pickerTrigger.focus();
};
$("pickerSearch").oninput = () => {
  pickerLimit = 200;
  renderPicker();
};
$("pickerSelectedOnly").onclick = () => {
  const selected = pickerType === "tags" ? selectedTags : selectedFolders;
  for (const value of [...selected])
    updateChoice(pickerType, value, false);
  renderChoices();
  renderPicker();
};
$("pickerMore").onclick = () => {
  pickerLimit += 200;
  renderPicker();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("clearDialog").classList.contains("hidden"))
    closeClearDialog(false);
  else if (event.key === "Escape" && !$("picker").classList.contains("hidden"))
    $("pickerDone").click();
  else if (event.key === "Tab" && !$("clearDialog").classList.contains("hidden")) {
    if (event.shiftKey && document.activeElement === $("cancelClear")) {
      event.preventDefault();
      $("confirmClear").focus();
    } else if (!event.shiftKey && document.activeElement === $("confirmClear")) {
      event.preventDefault();
      $("cancelClear").focus();
    }
  }
});
$("zoom").onchange = () => {
  zoom = $("zoom").value;
  renderPreview();
};
$("horizontal").onclick = () => updateDirection("horizontal");
$("vertical").onclick = () => updateDirection("vertical");
function closeClearDialog(confirmed) {
  var _a, _b, _c;
  $("clearDialog").classList.add("hidden");
  document.querySelector(".app").inert = false;
  if (confirmed) {
    resetSelection();
    (_c = (_b = (_a = $("preview")).querySelector) == null ? void 0 : _b.call(_a, ".secondary")) == null ? void 0 : _c.focus();
  } else
    $("clearSelection").focus();
}
$("clearSelection").onclick = () => {
  if (busy || loading || !entries.length)
    return;
  document.querySelector(".app").inert = true;
  $("clearDialog").classList.remove("hidden");
  $("cancelClear").focus();
};
$("cancelClear").onclick = () => closeClearDialog(false);
$("confirmClear").onclick = () => closeClearDialog(true);
$("save").onclick = save;
$("overlap").oninput = () => {
  const entry = entries.find((e) => e.item.id === selectedId);
  if (entry) {
    entry.overlap = $("overlap").value === "" ? 0 : Number($("overlap").value);
    renderPreview();
  }
};
$("close").onclick = () => window.close();
$("dismissStatus").onclick = () => status("");
$("pin").onclick = async () => {
  try {
    const next = $("pin").getAttribute("aria-pressed") !== "true";
    await eagle.window.setAlwaysOnTop(next);
    $("pin").setAttribute("aria-pressed", String(next));
    $("pin").title = tr(next ? "\u53D6\u6D88\u7A97\u53E3\u7F6E\u9876" : "\u7A97\u53E3\u7F6E\u9876");
    $("pin").setAttribute("aria-label", tr(next ? "\u53D6\u6D88\u7A97\u53E3\u7F6E\u9876" : "\u7A97\u53E3\u7F6E\u9876"));
  } catch (error) {
    status(error.message, "error");
  }
};
for (const id of ["name", "url", "annotation", "rating"])
  $(id).addEventListener(id === "rating" ? "change" : "input", () => editedFields.add(id));
window.addEventListener("resize", () => {
  if (entries.length)
    renderPreview();
});
var lastRun = 0;
eagle.onPluginCreate(async () => {
  setLocale(eagle.app.locale || new URLSearchParams(window.location.search).get("locale"));
  translatePage(document);
  const theme = String(eagle.app.theme || "").toLowerCase();
  if (["light", "lightgray"].includes(theme))
    document.documentElement.setAttribute("theme", theme);
  lastRun = Date.now();
  await loadSelection(void 0, false, true);
});
eagle.onPluginRun(async () => {
  if (Date.now() - lastRun < 1e3)
    return;
  lastRun = Date.now();
  if (!busy && !entries.length)
    await loadSelection(void 0, false, true);
});
