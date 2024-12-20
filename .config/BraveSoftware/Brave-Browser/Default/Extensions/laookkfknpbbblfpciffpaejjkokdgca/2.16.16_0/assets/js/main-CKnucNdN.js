const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/TasksApp-piE7xvTu.js","assets/js/icon-alert--q0yLTMi.js","assets/js/localStorage-4iHdj-SC.js","assets/js/preload-helper-DmNsytk6.js","assets/js/string-GDe0WbEj.js","assets/js/AppPopup-CAECMUMV.js","assets/js/globalKeyEventManager-Bi-yHy9P.js","assets/css/AppPopup-GUOHU7lV.css","assets/js/style-TaIEnhS-.js","assets/js/ViewState-_YxhE_TX.js","assets/js/main-FH8FpKq2.js","assets/css/style-CebYLhf0.css","assets/js/addin-d8CNU_f0.js","assets/js/handlebarLoader-xbtIzd6B.js","assets/css/TasksApp-D3kIvRuK.css"])))=>i.map(i=>d[i]);
import"./VueBase-W7f1OYgs.js";import{_ as o}from"./preload-helper-DmNsytk6.js";import{o as t,A as i,n as s,V as r}from"./icon-alert--q0yLTMi.js";import p from"./AppContainer-DnRychOY.js";import{A as e}from"./AppDash-CAm0VyUo.js";import{a as n}from"./appToggleMixin-IV4cErk-.js";import{u as a}from"./style-TaIEnhS-.js";import{a as c}from"./reactiveCustomization-DqGARD3C.js";import"./index-DQvfDEB6.js";import"./localStorage-4iHdj-SC.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./main-FH8FpKq2.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-SV1wohGy.js";import"./string-GDe0WbEj.js";import"./showAnyway-d_ZUKj8O.js";import"./allComponentsMounted-C3UsG_cA.js";import"./BaseIcon-B5UifJH3.js";import"./arrow-Be8MuPJi.js";import"./icon-weather-reset-C06kxk3l.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-close-BUGl_M7j.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-edit-CixeXNYx.js";import"./icon-ellipsis-D3jS4u3x.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-hide-NFfBhfBx.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./search-DCqlmJx6.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./ocean-bubbles-GcKjBI5B.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DhCq-Fsi.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-happy-place-D1z6CJgM.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";import"./ViewState-_YxhE_TX.js";const j="showTodoList";const l=s(t({name:"Tasks",components:{TasksApp:()=>o((()=>import("./TasksApp-piE7xvTu.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),AppDash:e,AppContainer:p},mixins:[n({useViewStateStore:a,analytics:new i({feature:"todo"})})],watch:{popupActive(o){localStorage.setItem(j,o)}},mounted(){c.keepTodoState&&!this.$touch&&"true"===localStorage.getItem(j)?this.togglePopup(!0):m.widgetManager.appReady("tasks")}}),(function(){var o=this,t=o._self._c;return o._self._setupProxy,t("app-container",{attrs:{"visible-setting":"todoVisible","app-name":"todo",hotkey:"T","data-test":"todo",overlay:o.popupActive},on:{toggle:o.togglePopupAndCaptureIfOpen}},[t("app-dash",{attrs:{label:"Tasks"},on:{click:function(t){return o.togglePopupAndCaptureIfOpen({source:"click"})}}}),t("transition",{attrs:{name:"slide-up-fade"}},[o.popupActive?t("tasks-app"):o._e()],1)],1)}),[],!1,null,"aab54523").exports,d=document.createElement("div"),u=document.querySelector(".region.bottom-right");u&&u.appendChild(d),new r({render:o=>o(l)}).$mount(d);