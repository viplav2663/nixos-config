import{n as e,u as t,e as i}from"./icon-alert--q0yLTMi.js";function s(){const e=document.querySelector(".region.full");return{width:(null==e?void 0:e.clientWidth)||0,height:(null==e?void 0:e.clientHeight)||0}}const n=e({name:"MaskedOverlay",props:{maskDimensions:{type:Array,required:!0},maskActive:{type:Boolean,default:!0}},setup:()=>({uuid:t.uuidv4()}),data:()=>({overlayDimensions:s()}),created(){i.$on("devPanelToggled",this.onDevPanelToggle),i.$on("globalEvent:window:resize",this.onResize)},destroyed(){i.$off("devPanelToggled",this.onDevPanelToggle),i.$off("globalEvent:window:resize",this.onResize)},methods:{onResize(){this.overlayDimensions=s()},onDevPanelToggle(){this.$nextTick(this.onResize)}}},(function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${e.overlayDimensions.width} ${e.overlayDimensions.height}`,fill:"rgba(0,0,0,0.5)"}},[e.maskActive?t("mask",{attrs:{id:"mask"+e.uuid}},[t("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}}),e._l(e.maskDimensions,(function(e){return t("transition",{key:e.x,attrs:{name:"mask-fade",mode:"out-in"}},[t("rect",{staticClass:"cutout",attrs:{x:e.x,y:e.y,rx:e.borderRadius,ry:e.borderRadius,height:e.height,width:e.width,fill:"black"}})])}))],2):e._e(),t("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#mask"+e.uuid+")"}})])}),[],!1,null,"9c425be2").exports;export{n as M};