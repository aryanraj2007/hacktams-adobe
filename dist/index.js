import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

// export function enableDragOnElement(){
//     const element = $("qr-code").children("img")[0];
//     const elementBlob = dataURLtoBlob(element.src);
//     AddOnStore.ready.then(() => {
//         AddOnStore.app.enableDragToDocument(element,
//             { previewCallback: (element) =>
//                 {return new URL(element.src)}, completionCallback: (element) =>
//                 { return Promise.resolve([{blob: elementBlob}]) } });
//             });
// }