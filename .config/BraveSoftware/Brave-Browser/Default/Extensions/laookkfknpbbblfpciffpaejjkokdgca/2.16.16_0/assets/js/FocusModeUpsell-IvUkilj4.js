import{n as t,u as s,K as e}from"./icon-alert--q0yLTMi.js";import{C as i}from"./index-DQvfDEB6.js";import{u as a}from"./focusModeHelpers-CiIJnkuY.js";import{U as o}from"./UpsellModal-BPTVcSQq.js";import{_ as r}from"./focus-mode-09pIyYAW.js";import{_ as c,a as l}from"./icon-spiral-gh4hwZDD.js";import"./localStorage-4iHdj-SC.js";import"./preload-helper-DmNsytk6.js";import"./string-GDe0WbEj.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./main-FH8FpKq2.js";import"./reactiveCustomization-DqGARD3C.js";import"./VueBase-W7f1OYgs.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-SV1wohGy.js";import"./scenes-D8jpYIdj.js";import"./ocean-bubbles-GcKjBI5B.js";import"./PomodoroTimers-BWkB-14p.js";import"./icon-back-D_TFrgyJ.js";import"./icon-close-BUGl_M7j.js";import"./index-D7SyL4qE.js";import"./icon-clean-rFsPxTtp.js";const n={name:"FocusModeUpsell",components:{Upsell:o},props:{eventSource:{type:String,default:""},plans:{type:Object,default:()=>({})},sales:{type:Object,default:()=>({})}},setup:()=>({focusModeSessionStore:a()}),computed:{timeUsedCapacityLimitString(){return s.getFriendlyTimeElapsedSmall(this.totalTime-this.timeLeftCapacityLimit)},timeLeftCapacityLimit(){return Math.max(this.focusModeSessionStore.msUntilOverCapacityLimit,0)},totalTime:()=>i,capacityLimitTranslatePercent(){return this.timeLeftCapacityLimit/this.totalTime*100+"%"}}},m=()=>{e(((t,s)=>({"52aac3c6":t.capacityLimitTranslatePercent})))},p=n.setup;n.setup=p?(t,s)=>(m(),p(t,s)):m;const d=t(n,(function(){var t=this,s=t._self._c;return s("upsell",t._b({attrs:{type:"focus-mode"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Focus Mode")]},proxy:!0},{key:"description",fn:function(){return[t._v("Upgrade to Momentum Plus to keep up your focus streak.")]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"content row"},[s("div",{staticClass:"demo"},[s("img",{attrs:{src:"https://az814671.vo.msecnd.net/blogimages/cddd33a6-d151-4b11-bc6f-f790be41e0cc"}}),t.focusModeSessionStore.loaded?s("div",{staticClass:"upsell-capacity-limit"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"progress"})]),s("div",{staticClass:"right"},[t._v(" "+t._s(t.timeUsedCapacityLimitString)+" of 1h used today ")])]),s("div",{staticClass:"light-card"},[t._v(" Your free focus hour resets daily."),s("br"),t._v(" Upgrade to Plus for unlimited time. ")])]):t._e()]),s("ul",{staticClass:"features"},[s("li",[s("inline-svg",{staticClass:"feature-icon",attrs:{src:r}}),s("div",{staticClass:"feature-title"},[t._v("Focus on what matters")]),s("div",{staticClass:"feature-desc"},[t._v("Focus Mode combines tools to help you get into focus and stay concentrated.")])],1),s("li",[s("inline-svg",{staticClass:"feature-icon",attrs:{src:c}}),s("div",{staticClass:"feature-title"},[t._v("Make it a habit")]),s("div",{staticClass:"feature-desc"},[t._v("Focusing is a skill you can master with the help of Momentum.")])],1),s("li",[s("inline-svg",{staticClass:"feature-icon",attrs:{src:l}}),s("div",{staticClass:"feature-title"},[t._v("Eliminate distractions")]),s("div",{staticClass:"feature-desc"},[t._v("Feel more balanced and achieve your goals faster by avoiding being distracted.")])],1)])])]},proxy:!0}])},"upsell",t.$props,!1))}),[],!1,null,"ac0d2aee").exports;export{d as default};