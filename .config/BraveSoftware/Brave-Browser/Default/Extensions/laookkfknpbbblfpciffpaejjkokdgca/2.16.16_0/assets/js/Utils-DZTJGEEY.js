const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index-CKsl0Wzi.js","assets/js/preload-helper-DmNsytk6.js","assets/js/FlashMessage-DPJrdJ6u.js","assets/js/icon-alert--q0yLTMi.js","assets/js/localStorage-4iHdj-SC.js","assets/js/string-GDe0WbEj.js","assets/js/globalKeyEventManager-Bi-yHy9P.js","assets/js/icon-close-BUGl_M7j.js","assets/css/FlashMessage-nc7yvAAd.css"])))=>i.map(i=>d[i]);
import{_ as t}from"./preload-helper-DmNsytk6.js";const e=[0,4,2,1],a=[8,8,4,2];class o{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t)}getString(t){const e=this.data.slice(this.pos,this.pos+t);return this.pos+=e.length,e.reduce(((t,e)=>t+String.fromCharCode(e)),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let t="",e=0;do{e=this.data[this.pos++];for(let a=e;--a>=0;t+=String.fromCharCode(this.data[this.pos++]));}while(0!==e);return t}readSubBlocksBin(){let t=this.data[this.pos],e=0;for(let o=0;0!==t;o+=t+1,t=this.data[this.pos+o])e+=t;const a=new Uint8Array(e);t=this.data[this.pos++];for(let o=0;0!==t;t=this.data[this.pos++])for(let e=t;--e>=0;a[o++]=this.data[this.pos++]);return a}skipSubBlocks(){for(const t=1,e=0;this.data[this.pos]!==e;this.pos+=this.data[this.pos]+t);this.pos++}}const i=0,r=0;function s(t,e){const a=[];for(let o=0;o<e;o++)a.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return a}async function n(t,o,i,r,n,l){switch(t.nextByte()){case 59:return!0;case 44:await async function(t,o,i,r,n,l){const c=o.frames[r(!0)];c.left=t.nextTwoBytes(),c.top=t.nextTwoBytes(),c.width=t.nextTwoBytes(),c.height=t.nextTwoBytes();const h=t.nextByte(),g=!(128&~h),f=!(64&~h);c.sortFlag=!(32&~h),c.reserved=(24&h)>>>3;const d=1<<1+(7&h);g&&(c.localColorTable=s(t,d));const p=t=>{const{r:e,g:a,b:r}=(g?c.localColorTable:o.globalColorTable)[t];return t!==n(null)?{r:e,g:a,b:r,a:255}:{r:e,g:a,b:r,a:i?~~((e+a+r)/3):0}},u=(()=>{try{return new ImageData(c.width,c.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==u)throw new EvalError("GIF frame size is to large");const w=t.nextByte(),m=t.readSubBlocksBin(),b=1<<w,y=(t,e)=>{const a=t>>>3,o=7&t;return(m[a]+(m[a+1]<<8)+(m[a+2]<<16)&(1<<e)-1<<o)>>>o};if(f){for(let t=0,o=w+1,i=0,r=[[0]],s=0;s<4;s++)if(e[s]<c.height){let n=0,l=0,h=!1;for(;!h;){const g=t;if(t=y(i,o),i+=o+1,t===b){o=w+1,r.length=b+2;for(let t=0;t<r.length;t++)r[t]=t<b?[t]:[]}else{t>=r.length?r.push(r[g].concat(r[g][0])):g!==b&&r.push(r[g].concat(r[t][0]));for(const o of r[t]){const{r:t,g:i,b:r,a:h}=p(o);u.data.set([t,i,r,h],e[s]*c.width+a[s]*l+n%(4*c.width)),n+=4}r.length===1<<o&&o<12&&o++}n===4*c.width*(l+1)&&(l++,e[s]+a[s]*l>=c.height&&(h=!0))}}c.image=u,c.bitmap=await createImageBitmap(u)}else{let t=0,e=w+1,a=0,o=-4,i=!1;const r=[[0]];for(;!i;){const s=t;if(t=y(a,e),a+=e,t===b){e=w+1,r.length=b+2;for(let t=0;t<r.length;t++)r[t]=t<b?[t]:[]}else{if(t===b+1){i=!0;break}t>=r.length?r.push(r[s].concat(r[s][0])):s!==b&&r.push(r[s].concat(r[t][0]));for(const e of r[t]){const{r:t,g:a,b:i,a:r}=p(e);u.data.set([t,a,i,r],o+=4)}r.length>=1<<e&&e<12&&e++}}c.image=u,c.bitmap=await createImageBitmap(u)}}(t,o,i,r,n);break;case 33:!function(t,e,a,o){switch(t.nextByte()){case 249:{const i=e.frames[a(!1)];t.pos++;const r=t.nextByte();i.GCreserved=(224&r)>>>5,i.disposalMethod=(28&r)>>>2,i.userInputDelayFlag=!(2&~r);const s=!(1&~r);i.delayTime=10*t.nextTwoBytes();const n=t.nextByte();s&&o(n),t.pos++;break}case 255:{t.pos++;const a={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(a);break}case 254:e.comments.push([a(!1),t.readSubBlocks()]);break;case 1:if(0===e.globalColorTable.length)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[a(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break;default:t.skipSubBlocks()}}(t,o,r,n);break;default:throw new EvalError("undefined block found")}return!1}function l(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}async function c(t,e,a){a||(a=!1);const i=await fetch(t);if(!i.ok&&404===i.status)throw new EvalError("file not found");const r=await i.arrayBuffer(),l={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},c=new o(new Uint8ClampedArray(r));if("GIF89a"!==c.getString(6))throw new Error("not a supported GIF file");l.width=c.nextTwoBytes(),l.height=c.nextTwoBytes();const h=c.nextByte(),g=!(128&~h);l.colorRes=(112&h)>>>4,l.sortFlag=!(8&~h);const f=1<<1+(7&h),d=c.nextByte();l.pixelAspectRatio=c.nextByte(),0!==l.pixelAspectRatio&&(l.pixelAspectRatio=(l.pixelAspectRatio+15)/64),g&&(l.globalColorTable=s(c,f));const p=(()=>{try{return new ImageData(l.width,l.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==p)throw new Error("GIF frame size is to large");const{r:u,g:w,b:m}=l.globalColorTable[d];p.data.set(g?[u,w,m,255]:[0,0,0,0]);for(let o=4;o<p.data.length;o*=2)p.data.copyWithin(o,0,o);l.backgroundImage=p;let b=-1,y=!0,x=-1;const T=t=>(t&&(y=!0),b),B=t=>(null!=t&&(x=t),x);try{do{y&&(l.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),b++,x=-1,y=!1)}while(!(await n(c,l,a,T,B)));l.frames.length--;for(const t of l.frames){if(t.userInputDelayFlag&&0===t.delayTime){l.totalTime=1/0;break}l.totalTime+=t.delayTime}return l}catch(I){if(I instanceof EvalError)throw new Error(`error while parsing frame ${b} "${I.message}"`);throw I}}function h(t){const{context:e,radius:a,particle:o,delta:s}=t,n=o.image;if(!(null==n?void 0:n.gifData)||!n.gif)return;const l=new OffscreenCanvas(n.gifData.width,n.gifData.height),c=l.getContext("2d");if(!c)throw new Error("could not create offscreen canvas context");c.imageSmoothingQuality="low",c.imageSmoothingEnabled=!1,c.clearRect(i,r,l.width,l.height),void 0===o.gifLoopCount&&(o.gifLoopCount=n.gifLoopCount??0);let h=o.gifFrame??0;const g={x:.5*-n.gifData.width,y:.5*-n.gifData.height},f=n.gifData.frames[h];if(void 0===o.gifTime&&(o.gifTime=0),f.bitmap){switch(e.scale(a/n.gifData.width,a/n.gifData.height),f.disposalMethod){case 4:case 5:case 6:case 7:case 0:c.drawImage(f.bitmap,f.left,f.top),e.drawImage(l,g.x,g.y),c.clearRect(i,r,l.width,l.height);break;case 1:c.drawImage(f.bitmap,f.left,f.top),e.drawImage(l,g.x,g.y);break;case 2:c.drawImage(f.bitmap,f.left,f.top),e.drawImage(l,g.x,g.y),c.clearRect(i,r,l.width,l.height),n.gifData.globalColorTable.length?c.putImageData(n.gifData.backgroundImage,g.x,g.y):c.putImageData(n.gifData.frames[0].image,g.x+f.left,g.y+f.top);break;case 3:{const t=c.getImageData(i,r,l.width,l.height);c.drawImage(f.bitmap,f.left,f.top),e.drawImage(l,g.x,g.y),c.clearRect(i,r,l.width,l.height),c.putImageData(t,i,r)}}if(o.gifTime+=s.value,o.gifTime>f.delayTime){if(o.gifTime-=f.delayTime,++h>=n.gifData.frames.length){if(--o.gifLoopCount<=0)return;h=0,c.clearRect(i,r,l.width,l.height)}o.gifFrame=h}e.scale(n.gifData.width/a,n.gifData.height/a)}}async function g(e){if("gif"===e.type){e.loading=!0;try{e.gifData=await c(e.source),e.gifLoopCount=l(e.gifData)??0,e.gifLoopCount||(e.gifLoopCount=1/0)}catch{e.error=!0}e.loading=!1}else{const{loadImage:a}=await t((async()=>{const{loadImage:t}=await import("./index-CKsl0Wzi.js").then((t=>t.U));return{loadImage:t}}),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await a(e)}}export{c as decodeGIF,h as drawGif,l as getGIFLoopAmount,g as loadGifImage};