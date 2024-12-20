import{useFocusModeViewStateStore as e}from"./focusModeViewState-BpbRF0A0.js";import{o as a}from"./oneTimeLoginService-ebAeDnd9.js";import{K as o,n as t}from"./icon-alert--q0yLTMi.js";const i={name:"Background",setup:()=>({focusModeViewStateStore:e()}),data:()=>({imageUrl:"",transitionSpeed:"fade",loadingImage:!1}),computed:{imagePseudoElementContent(){return this.focusModeViewStateStore.backgroundBlurLayerVisible?'""':void 0},transitionDuration(){return null!==this.focusModeViewStateStore.backgroundTransitionDuration?this.focusModeViewStateStore.backgroundTransitionDuration+"ms":"var(--a-show-full-duration)"}},created(){m.models.activeBackground.on("background:activeChanged",this.setBackground),m.on("image:loaded",this.imageLoaded),m.on("image:error",this.imageError),m.on("image:timeout",this.imageTimeout),m.on("topics:open",this.addOverlay),m.on("topics:closed",this.removeOverlay),m.models.backgroundManager.backgroundItem?this.setBackground(m.models.backgroundManager.backgroundItem):m.models.activeBackground.backgroundItem&&this.setBackground(m.models.activeBackground.backgroundItem)},destroyed(){m.models.activeBackground.off("background:activeChanged",this.setBackground),m.off("image:loaded",this.imageLoaded),m.off("image:error",this.imageError),m.off("image:timeout",this.imageTimeout),m.off("topics:open",this.addOverlay),m.off("topics:closed",this.removeOverlay)},methods:{setBackground(e){this.loadingImage=!0,this.imageUrl&&(this.transitionSpeed="fade-slow");const a=e.get("isBuiltIn"),o=e.backgroundUuid(),t=e.get("filename");"true"==localStorage.getItem("failed:"+t)&&m.models.activeBackground.trigger("background:fallback");const i={uuid:o,url:t,height:e.get("height"),width:e.get("width"),skip_check:e.get("skip_check")};m.models.imageManager.loadImage(i,a||this.isBackgroundLoaded?null:4e3,!1)||(this.isBackgroundLoaded?m.trigger("background:error",o):m.models.activeBackground.trigger("background:fallback"))},imageLoaded(e,o,t,i){i||(m.models.activeBackground.successfullyLoaded(e),this.isBackgroundLoaded=!0,this.loadingImage=!1,this.imageUrl=o,m.widgetManager.appReady("background",a.oneTimeLoginInProgress),a.oneTimeLoginInProgress||setTimeout(m.widgetManager.checkWidgetTimeout.bind(m.widgetManager),500),m.trigger("background:loadSuccessful",e))},imageError(e){this.loadingImage?m.models.activeBackground.trigger("background:fallback"):m.trigger("background:error",e)},imageTimeout(){this.loadingImage&&m.models.activeBackground.trigger("background:fallback")},addOverlay(){m.utils.addClass(document.body,"show-full-overlay"),this.$nextTick((()=>{m.utils.addClass(document.body,"show-full-overlay-active")}))},removeOverlay(){m.utils.removeClass(document.body,"show-full-overlay-active"),this.$nextTick((()=>{m.utils.removeClass(document.body,"show-full-overlay")}))}}},r=()=>{o(((e,a)=>({f818449c:e.transitionDuration,"3317f995":e.focusModeViewStateStore.backgroundScale,"6c2ffd26":e.imagePseudoElementContent,"712ff256":e.focusModeViewStateStore.backgroundBlurLayerOpacity})))},d=i.setup;i.setup=d?(e,a)=>(r(),d(e,a)):r;const s=t(i,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"backgrounds"},[a("div",{staticClass:"background"},[a("transition",{attrs:{name:e.transitionSpeed,mode:"in-out"}},[a("div",{key:e.imageUrl,staticClass:"background-item",style:{"background-image":"url("+e.imageUrl+")"},attrs:{"data-test":"background-item"}})])],1),a("div",{staticClass:"background-overlay"})])}),[],!1,null,"08a7dcc9").exports;export{s as B};