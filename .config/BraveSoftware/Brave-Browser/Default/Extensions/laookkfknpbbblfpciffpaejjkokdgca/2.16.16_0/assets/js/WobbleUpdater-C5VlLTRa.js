import{s as e,b as o,n as s,l as n,k as a}from"./FlashMessage-DPJrdJ6u.js";import"./icon-alert--q0yLTMi.js";import"./localStorage-4iHdj-SC.js";import"./preload-helper-DmNsytk6.js";import"./string-GDe0WbEj.js";import"./globalKeyEventManager-Bi-yHy9P.js";import"./icon-close-BUGl_M7j.js";class t{constructor(){this.angle=50,this.move=10}load(o){o&&(void 0!==o.angle&&(this.angle=e(o.angle)),void 0!==o.move&&(this.move=e(o.move)))}}class l{constructor(){this.distance=5,this.enable=!1,this.speed=new t}load(s){if(s&&(void 0!==s.distance&&(this.distance=e(s.distance)),void 0!==s.enable&&(this.enable=s.enable),void 0!==s.speed))if(o(s.speed))this.speed.load({angle:s.speed});else{const e=s.speed;void 0!==e.min?this.speed.load({angle:e}):this.speed.load(s.speed)}}}const i=2*Math.PI;const d=2*Math.PI;class b{constructor(e){this.container=e}init(e){const o=e.options.wobble;(null==o?void 0:o.enable)?e.wobble={angle:n()*d,angleSpeed:a(o.speed.angle)/360,moveSpeed:a(o.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=a((null==o?void 0:o.distance)??0)*this.container.retina.pixelRatio}isEnabled(e){var o;return!e.destroyed&&!e.spawning&&!!(null==(o=e.options.wobble)?void 0:o.enable)}loadOptions(e,...o){e.wobble||(e.wobble=new l);for(const s of o)e.wobble.load(null==s?void 0:s.wobble)}update(e,o){this.isEnabled(e)&&function(e,o){const{wobble:n}=e.options,{wobble:a}=e;if(!(null==n?void 0:n.enable)||!a)return;const t=a.angleSpeed*o.factor,l=a.moveSpeed*o.factor*((e.retina.wobbleDistance??0)*o.factor)/(s/60),d=i,{position:b}=e;a.angle+=t,a.angle>d&&(a.angle-=d),b.x+=l*Math.cos(a.angle),b.y+=l*Math.abs(Math.sin(a.angle))}(e,o)}}export{b as WobbleUpdater};