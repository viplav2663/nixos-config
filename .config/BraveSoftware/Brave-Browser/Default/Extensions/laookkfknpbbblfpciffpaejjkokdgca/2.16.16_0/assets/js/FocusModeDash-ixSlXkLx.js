import{useFocusModeViewStateStore as o}from"./focusModeViewState-BpbRF0A0.js";import{F as s,m as i,q as t}from"./index-DQvfDEB6.js";import{o as e,n as r,u as c}from"./icon-alert--q0yLTMi.js";import{B as n}from"./BaseIcon-B5UifJH3.js";import{g as a}from"./globalKeyEventManager-Bi-yHy9P.js";import"./ViewState-_YxhE_TX.js";import"./main-FH8FpKq2.js";import"./focusModeHelpers-CiIJnkuY.js";import"./reactiveCustomization-DqGARD3C.js";import"./VueBase-W7f1OYgs.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-SV1wohGy.js";import"./preload-helper-DmNsytk6.js";import"./scenes-D8jpYIdj.js";import"./ocean-bubbles-GcKjBI5B.js";import"./PomodoroTimers-BWkB-14p.js";import"./localStorage-4iHdj-SC.js";import"./string-GDe0WbEj.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./arrow-Be8MuPJi.js";import"./icon-weather-reset-C06kxk3l.js";import"./icon-settings-Bycjf8-G.js";import"./icon-back-arrow-CiRQJ6G-.js";import"./icon-back-D_TFrgyJ.js";import"./icon-trash-BQ1O-AfY.js";import"./icon-close-BUGl_M7j.js";import"./icon-cog-BFr_Pva7.js";import"./icon-skip-BOkC5L0N.js";import"./icon-down-BiHbKN-t.js";import"./icon-edit-CixeXNYx.js";import"./icon-ellipsis-D3jS4u3x.js";import"./icon-error-state-BKQhfBCj.js";import"./icon-heart-v5O7C6eS.js";import"./icon-hide-NFfBhfBx.js";import"./icon-key-BPNRipb3.js";import"./icon-next-B4hjdiAA.js";import"./icon-photo-BrwqV1T0.js";import"./icon-pin-BHeOuzvO.js";import"./icon-plus-D4YOesIc.js";import"./icon-profile-B_XWyuTb.js";import"./icon-x-qUCmf2CW.js";import"./icon-skip-intro-BUi8b3Ak.js";import"./icon-tooltip-CN09iXOB.js";import"./icon-visible-on-CM3kpcFN.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./tasks-completed-Dg2z75km.js";import"./add-COIuonao.js";import"./google-DKPAcOmk.js";import"./arrow-up-1QPpu78M.js";import"./square-check-DwLT60gj.js";import"./clocks-DjzskNOU.js";import"./close-Bj_A2br_.js";import"./search-DCqlmJx6.js";import"./folder-CwWTWsnJ.js";import"./switch-EuBTQVVE.js";import"./focus-mode-09pIyYAW.js";import"./storage-YYEO5TB5.js";import"./icon-confetti-Dz2LojDe.js";import"./sparks-CAw9b6ob.js";import"./secure-B8YP-AML.js";import"./icon-asana-Csd73e1k.js";import"./icon-percent-schedule-CA5EI9b7.js";import"./icon-trello-DhCq-Fsi.js";import"./icon-clean-rFsPxTtp.js";import"./icon-more-lists-Cl9oRGK2.js";import"./icon-more-fonts-CcfOY0t4.js";import"./icon-focus-stats-keERwXFt.js";import"./icon-top-of-mind-B6EhbCcK.js";import"./icon-flow-5QqmGIWX.js";import"./icon-integrations-D9o58ob4.js";import"./icon-weather-extra-ufLpT_SX.js";import"./icon-spiral-gh4hwZDD.js";import"./icon-happy-place-D1z6CJgM.js";import"./icon-time-sensitive-CP2L3maw.js";import"./icon-hourly-CdMmiQZT.js";import"./icon-infinity-D4yMRoAd.js";import"./icon-personalize-photos-D2M4lLlt.js";import"./icon-skip-2bGCAGKt.js";import"./icon-photo-match-C2EChNEK.js";import"./icon-random-375DbcwF.js";import"./icon-timezones-DGZoTtaT.js";import"./icon-simplify-BRUtLJYp.js";import"./icon-sync-DIH26Y9h.js";const p=r({name:"FocusModeDash",components:{FocusModeDashCancelButton:r(e({name:"FocusModeDashCancelButton",components:{BaseIcon:n},setup:()=>({focusModeViewStateStore:o()}),mounted(){a.registerEventListener("focusMode:close","keyup",27,this.cancelFocusMode)},destroyed(){a.removeEventListener("focusMode:close","keyup",27)},methods:{async cancelFocusMode(){this.focusModeViewStateStore.cancelButtonVisible&&m.trigger("focusMode:cancel")}}}),(function(){var o=this,s=o._self._c;return o._self._setupProxy,s("div",{staticClass:"focus-mode-dash-cancel-button icon-wrapper u--mobile-show-bg",attrs:{"data-test":"cancel-focus-mode"},on:{click:o.cancelFocusMode}},[s("base-icon",{attrs:{src:"icon/close",size:"16px"}})],1)}),[],!1,null,"e7d48aad").exports},setup:()=>({FocusModeView:s,transitionMessage:c.getRandomItem(i),celebrationMessage:c.getRandomItem(t),focusModeViewStateStore:o()}),computed:{activeView(){return this.focusModeViewStateStore.currentFocusModeView}}},(function(){var o=this,s=o._self._c;return s("div",{staticClass:"focus-mode-dash",attrs:{"data-show-anyway":"focus-mode-dash"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[o.activeView===o.FocusModeView.Idle?s("div",{key:"idle"}):o.activeView===o.FocusModeView.Transition?s("div",{key:"transition"},[s("transition",{attrs:{name:"fade-fast"}},[o.focusModeViewStateStore.cancelButtonVisible?s("focus-mode-dash-cancel-button"):o._e()],1),s("div",{staticClass:"transition-message"},[o._v(o._s(o.transitionMessage))])],1):o.activeView===o.FocusModeView.Focusing?s("div",{key:"focusing"}):o.activeView===o.FocusModeView.Celebration?s("div",{key:"celebration"},[s("div",{staticClass:"transition-message",attrs:{"data-test":"congrats-message"}},[o._v(o._s(o.celebrationMessage))])]):o._e()])],1)}),[],!1,null,"0ff5c12b").exports;export{p as default};