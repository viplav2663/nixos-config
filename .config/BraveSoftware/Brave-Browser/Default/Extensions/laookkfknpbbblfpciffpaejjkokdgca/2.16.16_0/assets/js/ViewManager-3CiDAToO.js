import{V as e}from"./icon-alert--q0yLTMi.js";import{g as t}from"./globalKeyEventManager-Bi-yHy9P.js";const i=e.extend({name:"ViewData",unreactive:()=>({$_handlerKeyCodes:{keyup:{onEnter:13,onEsc:27}},collection:null,views:null}),data:()=>({activeViewId:"",activeItem:null,adding:!1,confirmationOverlayProps:null,forcedAppBodyHeight:null,$_activeBodyComponentInstance:null}),computed:{activeItemId(){return this.activeItem&&this.activeItem.id||""},activeView(){return this.views[this.activeViewId]},editProps(){return this.activeItem&&this.activeItem.editProps},confirmationOverlayActive(){return!!this.confirmationOverlayProps},loaded(){return!this.collection||this.collection.data.loaded}},watch:{loaded:{handler:"$_fallbackToDefaultView",immediate:!0}},created(){this.$on("container:created",this.$_fallbackToDefaultView)},methods:{async showView(e,{doNotBlock:t,afterLeave:i}={}){var o,s,a,n;"default"===e?e=this.$_getViewByProperty("defaultView"):"add"===e&&(this.createItem(),e=this.$_getViewByProperty("addView"));const r=this.activeViewId;r&&(t?(null==(s=null==(o=null==this?void 0:this.$_activeBodyComponentInstance)?void 0:o.beforeLeave)||s.call(o,!0),null==(n=null==(a=this.views[r])?void 0:a.beforeLeave)||n.call(a,!0)):(await this.awaitCloseConfirmationIfNeeded(),this.$_removeGlobalEventListeners(r),this.setActiveBodyComponentInstance(null))),this.$emit("viewClosing:"+this.activeViewId),this.$_addGlobalEventListeners(e),this.activeViewId=e,r&&i&&this.$once("resolveShowView:"+r,i)},closeApp(){this.awaitCloseConfirmationIfNeeded().then((()=>this.$emit("close")))},resetView(){this.activeViewId="",this.clearConfirmationOverlay(),this.clearItem(),this.forcedAppBodyHeight={},this.$_activeBodyComponentInstance=null},setItem(e){if("string"==typeof e)this.activeItem=this.collection.data.items[e];else{if("object"!=typeof e)throw"setItem must be called with an item model or item id";this.activeItem=e}},createItem(){this.activeItem=new this.collection.Model,this.activeItem.copyProperties(),this.adding=!0},clearItem(){this.activeItem&&this.activeItem.revertChanges(),this.adding=!1,this.activeItem=null},showDeleteConf(){this.$emit("showDeleteConf")},showConfirmationOverlay(e){this.confirmationOverlayProps=e},clearConfirmationOverlay(){this.confirmationOverlayProps=null},setForcedAppBodyHeight(e){this.forcedAppBodyHeight=e},resetForcedAppBodyHeight(){this.forcedAppBodyHeight=null},awaitCloseConfirmationIfNeeded(){var e,t,i;return this.activeViewId?Promise.all([null==(e=null==this?void 0:this.$_activeBodyComponentInstance)?void 0:e.beforeLeave(),null==(i=null==(t=this.views[this.activeViewId])?void 0:t.beforeLeave)?void 0:i.call(t)]).then((e=>{if(e.some((e=>!1===e)))return new Promise((function(){}))})):Promise.resolve()},setActiveBodyComponentInstance(e){this.$_activeBodyComponentInstance=e},$_getViewByProperty(e){const t=Object.keys(this.views).find((t=>this.views[t][e]));if(t)return t;throw`No view with property: "${e}" was found. Please define a "${e}" property if you wish to access a view this way`},$_addGlobalEventListeners(e){const i=this.views[e];Object.entries(this.$_handlerKeyCodes).forEach((([o,s])=>{Object.entries(s).forEach((([s,a])=>{const n=i[s];n&&t.registerEventListener(`${e}:${s}`,o,a,(()=>{"string"==typeof n?this.showView(n):"function"==typeof n&&n()}))}))}))},$_removeGlobalEventListeners(e){const i=this.views[e];Object.entries(this.$_handlerKeyCodes).forEach((([o,s])=>{Object.entries(s).forEach((([s,a])=>{i[s]&&t.removeEventListener(`${e}:${s}`,o,a)}))}))},$_fallbackToDefaultView(){this.loaded&&!this.activeViewId&&this.showView("default")}}});export{i as V};