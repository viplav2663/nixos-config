import{E as t,a as i}from"./EmittersPlugin-DufyQ1vU.js";import{k as s,n as e,o,q as n,r as a,t as r,v as h,V as l,w as p,x as c}from"./FlashMessage-DPJrdJ6u.js";import"./preload-helper-DmNsytk6.js";import"./AnimatableColor-CtL-DVK4.js";import"./AnimationOptions-Bi5HrRx1.js";import"./OptionsColor-mSykQ8m0.js";import"./icon-alert--q0yLTMi.js";import"./localStorage-4iHdj-SC.js";import"./string-GDe0WbEj.js";import"./globalKeyEventManager-Bi-yHy9P.js";import"./icon-close-BUGl_M7j.js";function _(t,i){t.color?t.color.value=i:t.color={value:i}}class d{constructor(i,h,l,p,c){var _,d;this.emitters=h,this.container=l,this._destroy=()=>{var t,i;null==(t=this._mutationObserver)||t.disconnect(),this._mutationObserver=void 0,null==(i=this._resizeObserver)||i.disconnect(),this._resizeObserver=void 0,this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._prepareToDie=()=>{var t;if(this._paused)return;const i=void 0!==(null==(t=this.options.life)?void 0:t.duration)?s(this.options.life.duration):void 0;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&void 0!==i&&i>0&&(this._duration=i*e)},this._setColorAnimation=(t,i,n,a=1)=>{const r=this.container;if(!t.enable)return i;const h=o(t.offset),l=s(this.options.rate.delay)*e/r.retina.reduceFactor;return(i+s(t.speed??0)*r.fpsLimit/l+h*a)%n},this._engine=i,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=c,p instanceof t?this.options=p:(this.options=new t,this.options.load(p)),this._spawnDelay=s(this.options.life.delay??0)*e/this.container.retina.reduceFactor,this.position=this._initialPosition??this._calcPosition(),this.name=this.options.name,this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let u=n({},this.options.particles);if(u??(u={}),u.move??(u.move={}),(_=u.move).direction??(_.direction=this.options.direction),this.options.spawnColor&&(this.spawnColor=a(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=u,this._size=this._calcSize(),this.size=r(this._size,this.container.canvas.size),this._lifeCount=this.options.life.count??-1,this._immortal=this._lifeCount<=0,this.options.domId){const t=document.getElementById(this.options.domId);t&&(this._mutationObserver=new MutationObserver((()=>{this.resize()})),this._resizeObserver=new ResizeObserver((()=>{this.resize()})),this._mutationObserver.observe(t,{attributes:!0,attributeFilter:["style","width","height"]}),this._resizeObserver.observe(t))}const m=this.options.shape,y=null==(d=this._engine.emitterShapeManager)?void 0:d.getShapeGenerator(m.type);y&&(this._shape=y.generate(this.position,this.size,this.fill,m.options)),this._engine.dispatchEvent("emitterCreated",{container:l,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}async init(){var t;await(null==(t=this._shape)?void 0:t.init())}pause(){this._paused||delete this._emitDelay}play(){if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(this._spawnDelay??0))){if(void 0===this._emitDelay){const t=s(this.options.rate.delay);this._emitDelay=t*e/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){var t;const i=this._initialPosition;this.position=i&&h(i,this.container.canvas.size,l.origin)?i:this._calcPosition(),this._size=this._calcSize(),this.size=r(this._size,this.container.canvas.size),null==(t=this._shape)||t.resize(this.position,this.size)}update(t){var i;this._paused||(this._firstSpawn&&(this._firstSpawn=!1,this._currentSpawnDelay=this._spawnDelay??0,this._currentEmitDelay=this._emitDelay??0),this._startParticlesAdded||(this._startParticlesAdded=!0,this._emitParticles(this.options.startCount)),void 0!==this._duration&&(this._currentDuration+=t.value,this._currentDuration>=this._duration&&(this.pause(),void 0!==this._spawnDelay&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal?(this.position=this._calcPosition(),null==(i=this._shape)||i.resize(this.position,this.size),this._spawnDelay=s(this.options.life.delay??0)*e/this.container.retina.reduceFactor):this._destroy(),this._currentDuration-=this._duration,delete this._duration)),void 0!==this._spawnDelay&&(this._currentSpawnDelay+=t.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),void 0!==this._emitDelay&&(this._currentEmitDelay+=t.value,this._currentEmitDelay>=this._emitDelay&&(this._emit(),this._currentEmitDelay-=this._emitDelay)))}_calcPosition(){if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const i=t.getBoundingClientRect(),s=this.container.retina.pixelRatio;return{x:(i.x+.5*i.width)*s,y:(i.y+.5*i.height)*s}}}return p({size:this.container.canvas.size,position:this.options.position})}_calcSize(){const t=this.container;if(this.options.domId){const i=document.getElementById(this.options.domId);if(i){const s=i.getBoundingClientRect();return{width:s.width*t.retina.pixelRatio,height:s.height*t.retina.pixelRatio,mode:"precise"}}}return this.options.size??(()=>{const t=new i;return t.load({height:0,mode:"percent",width:0}),t})()}_emit(){if(this._paused)return;const t=s(this.options.rate.quantity);this._emitParticles(t)}_emitParticles(t){var i;const s=c(this._particlesOptions);for(let e=0;e<t;e++){const t=n({},s);if(this.spawnColor){const s=null==(i=this.options.spawnColor)?void 0:i.animation;if(s){const t={h:360,s:100,l:100},i=3.6;this.spawnColor.h=this._setColorAnimation(s.h,this.spawnColor.h,t.h,i),this.spawnColor.s=this._setColorAnimation(s.s,this.spawnColor.s,t.s),this.spawnColor.l=this._setColorAnimation(s.l,this.spawnColor.l,t.l)}_(t,this.spawnColor)}const e=this.options.shape;let o=this.position;if(this._shape){const i=this._shape.randomPosition();if(i){o=i.position;const s=e.replace;s.color&&i.color&&_(t,i.color),s.opacity&&(t.opacity?t.opacity.value=i.opacity:t.opacity={value:i.opacity})}else o=null}o&&this.container.particles.addParticle(o,t)}}}export{d as EmitterInstance};