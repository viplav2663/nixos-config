import{A as e}from"./AppPopup-CAECMUMV.js";import{A as t}from"./AppViewSwitchDynamic-CG-8EiMD.js";import{n as o,X as s,A as i}from"./icon-alert--q0yLTMi.js";import{A as n}from"./AppView-DvfYjlXn.js";import{a as r}from"./AppHeader-DgK-F-wR.js";import{B as a}from"./BaseDropdown-DBvV1Fy2.js";import{B as c}from"./BaseDropdownOption-umPWLVqy.js";import{m as p}from"./customization-fX3KDebH.js";import{c as l,h as u,i as d}from"./BaseIcon-B5UifJH3.js";import{S as j}from"./Slider-CrF6GS0V.js";import h from"./Tracks-DwJ4Ann8.js";import f from"./PlayButton-Cr5xhRZ5.js";import v from"./soundscapesState-BbS4i45E.js";import{g}from"./globalKeyEventManager-Bi-yHy9P.js";import{scenes as k}from"./scenes-D8jpYIdj.js";import"./SmoothReflow-Du5fECCq.js";import"./allComponentsMounted-C3UsG_cA.js";import"./localStorage-4iHdj-SC.js";import"./preload-helper-DmNsytk6.js";import"./string-GDe0WbEj.js";import"./AppHeaderControl-FZTURLhY.js";import"./icon-hide-NFfBhfBx.js";import"./BaseDropdownContent-BSCj37As.js";import"./constants-CALDQiUE.js";import"./index-D7SyL4qE.js";import"./portal-vue.esm-SV1wohGy.js";import"./icon-ellipsis-D3jS4u3x.js";import"./reactiveCustomization-DqGARD3C.js";import"./VueBase-W7f1OYgs.js";import"./index-DQvfDEB6.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./main-FH8FpKq2.js";import"./index-CJJH83pl.js";import"./arrow-Be8MuPJi.js";import"./icon-weather-reset-C06kxk3l.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-close-BUGl_M7j.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-edit-CixeXNYx.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./search-DCqlmJx6.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./ocean-bubbles-GcKjBI5B.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DhCq-Fsi.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-happy-place-D1z6CJgM.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";import"./main-CYmRensV.js";import"./AppDash-CAm0VyUo.js";import"./AppContainer-DnRychOY.js";import"./showAnyway-d_ZUKj8O.js";import"./appToggleMixin-IV4cErk-.js";import"./ViewState-_YxhE_TX.js";const w=new i({feature:"soundscapes",is_paid_event:!0});const y=o({name:"Scenes",components:{AppView:n,AppHeader:r,BaseDropdown:a,BaseDropdownOption:c},props:{scenes:{type:Array,required:!0}},data:()=>({dropdownActive:!1}),methods:{getIconClass:e=>`icon-${e.toLowerCase()}`,setScene(e){p("focusModeSettings",(t=>t.apps.soundscapes.preset=e.name)),this.$emit("set-scene",e)},random:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),toggleDropdown(e=!this.dropdownActive){this.dropdownActive=e},openHelp(){w.capture("help click"),s("https://get.momentumdash.help/hc/en-us/articles/4405655736215")},openFeedback(){w.capture("feedback click");const e={type:"Soundscapes",email:localStorage.getItem("email")||"",name:m.models.customization.get("displayname")};let t=encodeURIComponent(e.email);s(`https://momentumdash.com/contact?type=${e.type}&name=${e.name}&email=${t}`)}}},(function(){var e=this,t=e._self._c;return t("app-view",{scopedSlots:e._u([{key:"header",fn:function(){return[t("app-header",{scopedSlots:e._u([{key:"left",fn:function(){return[t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:l}}),t("span",{staticClass:"app-header-name"},[e._v("Soundscapes")])]},proxy:!0},{key:"right",fn:function(){return[t("BaseDropdown",[t("BaseDropdownOption",{on:{click:e.openHelp}},[t("span",{staticClass:"text"},[e._v("What is this?")])]),t("BaseDropdownOption",{on:{click:e.openFeedback}},[t("span",{staticClass:"text"},[e._v("Feedback")])])],1)]},proxy:!0}])})]},proxy:!0},{key:"body",fn:function(){return[t("section",{staticClass:"view home"},[t("div",{staticClass:"tile-list scenes"},e._l(e.scenes,(function(o){return t("div",{key:o.name,staticClass:"tile scene",on:{click:function(t){return e.setScene(o)}}},[t("inline-svg",{staticClass:"tile-icon",class:e.getIconClass(o.name),attrs:{src:o.icon}}),t("span",{staticClass:"tile-title"},[e._v(e._s(o.name))])],1)})),0)])]},proxy:!0}])})}),[],!1,null,"1e30fce4").exports,S=new i({feature:"soundscapes",is_paid_event:!0});const C=o({name:"SoundscapesApp",components:{AppPopup:e,Scene:o({name:"Scene",components:{Slider:j,Tracks:h,PlayButton:f},props:{scene:{type:Object,required:!0}},computed:{isCustomScene(){return"Custom"===this.scene.name},random:()=>v.random,showNextButton(){return this.isCustomScene||this.random},globalVolume:{get:function(){return v.globalVolume},set:function(e){v.globalVolume=e,clearTimeout(this.globalVolumeInstrumentationTimeout),this.globalVolumeInstrumentationTimeout=setTimeout((()=>{S.capture("global volume change",{scene:this.scene.name.toLowerCase()})}),1e3)}}},created(){g.registerEventListener("closeSoundscapesScene","keyup",27,this.back),this.globalVolumeInstrumentationTimeout=null},destroyed(){g.removeEventListener("closeSoundscapesScene","keyup",27,this.back)},methods:{back(e){e.stopPropagation(),this.$emit("reset-scene",null)}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"view scene"},[t("div",{staticClass:"player"},[t("div",{staticClass:"player-wrapper"},[t("div",{staticClass:"back control icon-wrapper",attrs:{title:"Back to Soundscapes"},on:{click:e.back}},[t("inline-svg",{staticClass:"icon icon-back",attrs:{src:u}})],1),t("inline-svg",{staticClass:"icon player-icon",attrs:{src:e.scene.icon}}),t("div",{staticClass:"player-title",class:[e.scene.name.toLowerCase(),{random:e.random}]},[e._v(e._s(e.scene.name))]),t("play-button",{attrs:{location:"app"}}),e.showNextButton?t("span",{staticClass:"next control icon-wrapper",attrs:{title:"Next"},on:{click:function(t){return e.$emit("next-random-scene")}}},[t("inline-svg",{staticClass:"icon icon-next",attrs:{src:d}})],1):e._e(),t("div",{staticClass:"volume",attrs:{title:"Volume: "+e.globalVolume}},[t("slider",{model:{value:e.globalVolume,callback:function(t){e.globalVolume=t},expression:"globalVolume"}})],1)],1)]),t("tracks",{staticClass:"tracks",attrs:{tracks:e.scene.tracks,"single-track-active":e.scene.singleTrackActive}})],1)}),[],!1,null,"142645e9").exports,Scenes:y,AppViewSwitchDynamic:t},inject:["viewStateStore"],props:{activeScene:{type:[Object,void 0],default:()=>{}}},unreactive:()=>({scenes:k}),mounted(){g.registerEventListener("closeSoundscapes","keyup",27,(()=>this.$emit("close"))),m.trigger("notification:hide")},destroyed(){g.removeEventListener("closeSoundscapes","keyup",27)}},(function(){var e=this,t=e._self._c;return t("app-popup",{attrs:{width:340,region:"top-left",position:"bottom-right",focused:e.viewStateStore.focused},nativeOn:{click:function(t){return e.viewStateStore.focus()}}},[t("app-view-switch-dynamic",{attrs:{"order-key":e.activeScene?2:1}},[e.activeScene?t("scene",{attrs:{scene:e.activeScene},on:{"reset-scene":function(t){return e.$emit("resetScene",!0)},"next-random-scene":function(t){return e.$emit("nextRandomScene")}}}):t("scenes",{attrs:{scenes:e.scenes},on:{"set-scene":t=>e.$emit("setScene",t),close:function(t){return e.$emit("close")}}})],1)],1)}),[],!1,null,"6ce07463").exports;export{C as default};