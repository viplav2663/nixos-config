import{P as e}from"./main-CdnYxh7d.js";import{d as t,w as i,s}from"./icon-alert--q0yLTMi.js";import{useLinksViewStateStore as a}from"./linksViewState-M45gi0JR.js";import{u as c}from"./links-hR2TwzXn.js";import{u as d}from"./notesViewState-BRr9-GZ3.js";import{u as n}from"./notes-CabcPby9.js";import{u as o,F as p}from"./focusModeInsightsViewState-Cglfh_kk.js";const l=async e=>{if(!e.loaded)return e.loading?new Promise((t=>{e.$subscribe(((e,i)=>i.loaded&&t()))})):e.refresh()},r=(e,t)=>({resetBeforeViewChange:()=>t.resetBeforeViewChange(),isOpen:()=>t.popupActive,open:async()=>t.popupActive||await t.togglePopup(!0),close:async()=>!t.popupActive||await t.togglePopup(!1),refresh:()=>e.refresh(),loaded:()=>e.loaded}),v=a(),m=c(),w={...r(m,v),views:{links:{setActive:()=>v.setActiveView("list"),isActive:()=>v.popupActive&&"list"===v.activeViewId},add:{setActive:()=>(m.addItem(),v.setActiveView("form")),isActive:()=>v.popupActive&&"form"===v.activeViewId&&!m.activeItemId},edit:{async setActive(e){await l(m),m.editItem(e),await v.setActiveView("form")},isActive:()=>v.popupActive&&"form"===v.activeViewId&&m.activeItemId,selectableItems:()=>m.getUnPinnedItems.map((({id:e,title:t})=>({id:e,name:t})))}}},I=d(),u=n(),A={...r(u,I),refresh:()=>u.refresh(!0),views:{notes:{async setActive(e){e&&await l(u),u.activeItemId=e,await I.setActiveView("list")},isActive:()=>I.popupActive&&"list"===I.activeViewId,selectableItems:()=>Object.values({...u.getUnpinnedItems,...u.getPinnedItems}).map((({id:e,preview:t})=>({id:e,name:t})))},deleted:{setActive:()=>I.setActiveView("deleted"),isActive:()=>I.popupActive&&"deleted"===I.activeViewId,selectableItems:()=>Object.values(u.getDeletedItems).map((({id:e,preview:t})=>({id:e,name:t})))}}},f=o(),g={links:w,notes:A,focusModeInsights:{...r({refresh:()=>{},loaded:!0},f),views:{[p.Overview]:{setActive:()=>f.setActiveView(p.Overview),isActive:()=>f.popupActive&&f.activeViewId===p.Overview},[p.Settings]:{setActive:()=>f.setActiveView(p.Settings),isActive:()=>f.popupActive&&f.activeViewId===p.Settings}}}},h=t("devApps",{state(){return{pinned:localStorage.getObject(e)||{appId:null,viewId:null,itemId:null},selectedItems:(t=g,Object.entries(t).reduce(((e,[t,i])=>{const s=Object.entries(i.views).reduce(((e,[t,i])=>(i.selectableItems&&(e[t]=null),e)),{});return Object.keys(s).length&&(e[t]=s),e}),{}))};var t},getters:{loaded:()=>Object.values(g).every((e=>e.loaded()))},actions:{async openView(e,t,i){await g[e].open(),g[e].resetBeforeViewChange(),g[e].views[t].setActive(i)},closeApp:e=>g[e].close(),pinApp(t,i,s){this.pinned.appId=t,this.pinned.viewId=i,localStorage.setObject(e,{appId:t,viewId:i,itemId:s})},clearPinned(){this.pinned={appId:null,viewId:null,itemId:null},localStorage.removeItem(e)},setActiveSelectedItems(){Object.entries(this.selectedItems).forEach((([e,t])=>{Object.keys(t).forEach((i=>{const s=g[e].views[i].selectableItems();this.pinned.appId===e&&this.pinned.viewId===i&&((e,t)=>t.find((t=>t.id===e)))(this.pinned.itemId,s)?t[i]=this.pinned.itemId:s.length&&(t[i]=s[0].id)}))}))}}}),V=h();i(s(V).loaded,(e=>e&&V.setActiveSelectedItems()));const b=Object.freeze(Object.defineProperty({__proto__:null,useDevAppsStore:h},Symbol.toStringTag,{value:"Module"}));export{g as a,b as d,h as u};