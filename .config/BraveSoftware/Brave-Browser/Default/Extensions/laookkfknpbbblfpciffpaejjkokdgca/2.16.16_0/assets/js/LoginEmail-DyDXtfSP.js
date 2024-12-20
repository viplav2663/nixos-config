import{L as t,l as e}from"./loginStepMixin-f6cg7b8L.js";import{L as o}from"./LoginInput-5L9OAP0g.js";import{g as i}from"./index-DQvfDEB6.js";import{a as s}from"./authService-CGVTYYkM.js";import{n as a,m as n}from"./icon-alert--q0yLTMi.js";import{_ as r}from"./icon-back-D_TFrgyJ.js";import{_ as m}from"./icon-next-B4hjdiAA.js";import"./SmoothReflow-Du5fECCq.js";import"./allComponentsMounted-C3UsG_cA.js";import"./SoftFocus-BUhesXB-.js";import"./MobileBlur-B2s9dLKD.js";import"./preload-helper-DmNsytk6.js";import"./localStorage-4iHdj-SC.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./main-FH8FpKq2.js";import"./reactiveCustomization-DqGARD3C.js";import"./VueBase-W7f1OYgs.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-SV1wohGy.js";import"./string-GDe0WbEj.js";const l=a({name:"LoginEmail",components:{LoginLayout:t,LoginInput:o},mixins:[e],inject:["capture"],props:{shouldDisplayNewsletterOptIn:{type:Boolean,required:!0}},data:()=>({message:"Enter your email to create a Momentum account or log in."}),computed:{showStayLoggedOut:()=>!n()},mounted(){this.capture("email-step show")},methods:{onEnter(){this.checkEmail()},onEscape(){this.goToName("hotkey")},goToName(t="click"){this.capture("change name click",{method:t}),this.$emit("goToSubStep",i.NAME)},stayLoggedOut(){return this.capture("email-step dismiss",{method:"click"}),this.setLoadingWithErrorHandling((async()=>{await s.stayUnregistered(this.name),this.$emit("complete")}))},checkEmail(){return this.setLoadingWithErrorHandling((async t=>{const{emailExists:e,newsletterOptIn:o}=await s.checkEmail(this.email);this.$emit("update:shouldDisplayNewsletterOptIn",o),this.$emit("goToSubStep",e?i.ENTER_PASSWORD:i.CHOOSE_PASSWORD),t()}))}}},(function(){var t=this,e=t._self._c;return e("login-layout",{attrs:{loading:t.loading,"data-test":"email-step"},on:{submit:t.checkEmail},scopedSlots:t._u([{key:"actions-top-left",fn:function(){return[e("div",{staticClass:"dash-button",attrs:{"data-test":"name-button"},on:{click:t.goToName}},[e("inline-svg",{staticClass:"icon icon-back",attrs:{src:r}}),e("span",[t._v("Name")])],1)]},proxy:!0},{key:"actions-top-right",fn:function(){return[t.showStayLoggedOut?e("div",{staticClass:"dash-button",attrs:{"data-test":"stay-logged-out-button"},on:{click:t.stayLoggedOut}},[t.$mobile?e("span",[t._v("Skip")]):e("span",[t._v("Stay logged out")]),e("inline-svg",{staticClass:"icon icon-next",attrs:{src:m}})],1):t._e()]},proxy:!0},{key:"title",fn:function(){return[t._v(" Momentum account ")]},proxy:!0},{key:"question",fn:function(){return[t._v(" What's your email, "+t._s(t.name)+"? ")]},proxy:!0},{key:"input",fn:function(){return[e("login-input",{ref:"login-input",attrs:{value:t.email,disabled:t.loading,type:"email"},on:{input:function(e){return t.$emit("update:email",e)},submit:t.checkEmail}})]},proxy:!0},{key:"message",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.computedMessage)}})]},proxy:!0}])})}),[],!1,null,null).exports;export{l as default};