import{u as t,p as e,m as s,ap as i,aq as a,a1 as o,d as n,V as r}from"./icon-alert--q0yLTMi.js";import{u as d}from"./preload-helper-DmNsytk6.js";class w{constructor({key:t,title:e,url:s,pinned:i,index:a}){this.type=c.Tab,this.key=t,this.title=e,this.url=s,this.pinned=i,this.index=a}}class l{constructor({key:t,tabs:e,index:s,color:i="grey",title:a="",collapsed:o=!1,manifestVersion:n}){this.type=c.Group,this.key=t,this.index=s,this.tabs=e.map((t=>new w(t))).sort(((t,e)=>t.index-e.index)),this.color=i,this.title=a,this.collapsed=o,this.manifestVersion=n||2}}var c=(t=>(t.Tab="Tab",t.Group="Group",t))(c||{});const u=["app","devtools"];class p{constructor({key:t,activeTabKey:e,state:s,type:i,left:a,top:o,width:n,height:r,browserSessionKey:d,tabsAndGroups:c}){this.tabsAndGroups=[],this.key=t,this.activeTabKey=e,this.state=s,this.type=i,this.left=a,this.top=o,this.width=n,this.height=r,d&&(this.browserSessionKey=d),this.tabsAndGroups=c.map((t=>"tabs"in t?new l(t):new w(t))).sort(((t,e)=>t.index-e.index))}get tabCount(){let t=0;return this.tabsAndGroups.forEach((e=>{t+=e instanceof w?1:e.tabs.length})),t}}const h=t=>{if(void 0!==t.id&&void 0!==t.state&&void 0!==t.type&&"app"!==t.type&&"devtools"!==t.type)return{key:t.id,state:t.state,type:t.type,left:t.left||0,top:t.top||0,width:t.width||window.outerWidth,height:t.height||window.outerHeight}};class b{constructor({id:t,name:e,windows:s,activeWindowKey:i,browser:a,dateCreated:o}){this.windows=[],this.id=t,this.name=e,this.windows=s.map((t=>new p(t))),this.activeWindowKey=i,this.browser=a,this.dateCreated=o}get totalTabCount(){return this.windows.map((t=>t.tabCount)).reduce(((t,e)=>t+e))}get displayName(){return this.name||t.getFriendlyDateTime(new Date(this.dateCreated))}get sessionDescriptionTabs(){const t=this.totalTabCount;return`${t} tab${t>1?"s":""}`}get sessionDescriptionWindows(){return`${this.windows.length} window${this.windows.length>1?"s":""}`}}var f=(t=>(t.List="list",t.Detail="detail",t))(f||{});const y={permissions:["tabs","sessions","tabGroups"]},g={permissions:["tabs","sessions"]},v={permissions:["tabs"],origins:["*://*/*"]},S={ERROR_STASH:"Oops, we couldn't save that session at this time.",ERROR_RESTORE:"Oops, we couldn't restore that session at this time.",ERROR_NO_OTHER_TABS:"No tabs to stash.",ERROR_DELETE:"Oops, there was a problem deleting that session.",ERROR_ALL_DELETE:"Oops, there was a problem deleting all sessions.",ERROR_PERMISSIONS:"Oops, we don't have permissions to do that.",SUCCESSFUL_STASH_PARTIAL:" saved to a new session.",SUCCESSFUL_RESTORE_PARTIAL:" session restored.",SUCCESSFUL_ALL_DELETE:"All session deleted.",DELETE_PARTIAL:" session deleted."},T="chrome://newtab/",W="https://get.momentumdash.help/hc/en-us/articles/14474141114391";var E=(t=>(t.All="all",t.Window="window",t))(E||{});const I=()=>{switch(m.globals.platform){case"Firefox":return g;case"Safari":return v;default:return y}};class A{constructor(t){this.dataService=t}get(t){this.dataService.get(t)}create(t){return this.dataService.create(t.id,t)}update(t,e,s={}){return this.dataService.update(t,e,s)}delete(t){return this.dataService.delete(t)}async ensurePermissions(t=!1){const i=I();return!!(await e.permissions.contains(i))||new Promise((e=>{m.cmd("modal.open","PERMISSION_REQUEST",{source:"Tab Stash",reason:"To save your tabs for later",permissions:i,requestImmediately:t,resolve:e,extraInstructions:s()?' Please select "Always allow on every website..."':"",watchPermissionCheck:!0})}))}async closeWindowsAndSetSessionIds(t){var i;for(const o of t.windows)if(s()){const t=o.tabsAndGroups.flatMap((t=>t.type===c.Tab?[t]:t.tabs)).map((t=>t.key));await e.tabs.remove(t)}else try{if(1===o.tabsAndGroups.length&&(null==(i=o.tabsAndGroups[0])?void 0:i.type)===c.Tab&&o.tabsAndGroups[0].url===T)await e.windows.remove(o.key);else{await e.windows.removeAndWaitForSessionChange(o.key);const t=await e.sessions.getLastClosedSessionId();t&&(o.browserSessionKey=t)}}catch(a){console.warn(a)}return t}async restoreSession(t){const i=t.windows.filter((e=>e.key!==t.activeWindowKey)),a=t.windows.filter((e=>e.key===t.activeWindowKey)),o=await e.permissions.contains(I()),n=await e.tabs.getCurrent();if(!n||!n.id)throw new Error("Could not find active tab id from current window");let r=n.windowId;for(const d of[...i,...a]){const i=d.key===t.activeWindowKey&&o&&1===(await e.tabs.query({currentWindow:!0})).length;if(s()&&i){for(const t of d.tabsAndGroups)await this.openPartialSession(t);r=n.windowId}else if(i){const s=await this.restoreWindow(d,t.browser);if(!s.id)continue;r=s.id,n.pinned&&await e.tabs.update(n.id,{pinned:!1}),await e.tabs.moveToWindow(n.id,s.id),n.pinned&&await e.tabs.update(n.id,{pinned:!0})}else await this.restoreWindow(d,t.browser)}await this.focusTabAndWindow(n.id,r)}async getSessionFromWindows(t){const a=await e.tabs.query({currentWindow:!0}),o=await e.tabs.getCurrent();if(!o||!o.id)throw new Error("could not find active tab id in current window");let n=-1;o&&1!==a.length&&o.id&&(s()||await this.pullTabInNewWindow(o),n=o.windowId);const r={id:d(),name:"",windows:[],activeWindowKey:n,browser:i(),dateCreated:(new Date).toISOString()},w=await e.windows.getAll({windowTypes:["normal"]});for(const e of w){if("window"===t&&e.id!==n)continue;const s=h(e);if(!s)throw new Error(`window returned by browser (${r.browser}) does not satisfy IWindow type`);const i=await this.setTabsDataForWindow(s,r.browser,o.id);i.tabsAndGroups.length&&r.windows.push(i)}return new b(r)}async openPartialSession(t){t instanceof p?await this.fallbackRestoreWindow(t,i()):t instanceof l?await this.createGroup(t):t instanceof w&&await e.tabs.create({url:t.url,pinned:t.pinned})}async createGroup(t){const s=[];for(const i of t.tabs){const t=await e.tabs.create({url:i.url,pinned:i.pinned});t.id&&s.push(t.id)}if(void 0!==chrome.tabs.group){const i=await e.tabs.group({tabIds:s});if(chrome.tabGroups&&3===t.manifestVersion){const{color:e,collapsed:s,title:a}=t;await chrome.tabGroups.update(i,{color:e,collapsed:s,title:a})}}}async pullTabInNewWindow(t){const s=t.id;if(!s)throw new Error("Could not read tab id when pulling out tab from window");const i=await e.windows.get(t.windowId),a=await e.windows.create({tabId:s});if(!a||!a.id)throw new Error("Could not create window when pulling out tab from window");await this.updateWindowSize(a.id,i),t.pinned&&await e.tabs.update(s,{pinned:!0})}async setTabsDataForWindow(t,i,a){var o;const n=await e.tabs.query({windowId:t.key}),r=n.map((t=>{const e=(t=>{if(void 0!==t.id&&void 0!==t.url)return{key:t.id,title:t.title||"",url:t.url,pinned:t.pinned,index:t.index,type:c.Tab}})(t);if(!e)throw new Error(`tab returned by browser (${i})could not be converted to ITab`);return e})).sort(((t,e)=>t.index-e.index)).filter((t=>t.key!==a)).filter((t=>!s()||!t.pinned)),d=[];for(let e=0;e<r.length;e++){const t=r[e],s=n[e];if(t&&s)if(~s.groupId&&void 0!==s.groupId){const t=n.filter((t=>t.groupId===s.groupId)).length;let i={};if(chrome&&chrome.tabGroups){const t=await chrome.tabGroups.get(s.groupId),{color:e,collapsed:a,title:o=""}=t;i={color:e,collapsed:a,title:o,manifestVersion:3}}const a={key:s.groupId,index:e,type:c.Group,tabs:r.slice(e,e+t),...i};e+=t-1,d.push(a)}else d.push(t)}return{...t,activeTabKey:(null==(o=n.find((t=>t.active)))?void 0:o.id)||-1,tabsAndGroups:d}}async restoreWindow(t,i){const a=t.browserSessionKey;let o;return a&&!s()&&(o=await e.sessions.restoreWindow(a)),o||(o=await this.fallbackRestoreWindow(t,i)),o}async fallbackRestoreWindow(t,s){var i,a,o,n,r;const{tabsAndGroups:d,activeTabKey:c,state:p,type:h}=t,b={state:p,type:h},f=d.flatMap((t=>t instanceof w?[t]:t.tabs));b.type&&u.includes(b.type)&&(b.type="normal"),b.url=this.getUrlArrayForWindowCreateFromTabs(f,s);const y=await e.windows.create(b);if(!y||!y.id)throw new Error("Could not create window");if(await this.updateWindowSize(y.id,t),void 0!==chrome.tabs.group)for(const w of d){if(!(w instanceof l))continue;const t=w.index,s=t+w.tabs.length,a={tabIds:((null==(i=y.tabs)?void 0:i.slice(t,s))||[]).flatMap((t=>void 0===t.id?[]:[t.id])),createProperties:{windowId:y.id}},o=await e.tabs.group(a);if(chrome.tabGroups&&3===w.manifestVersion){const{color:t,collapsed:e,title:s}=w;await chrome.tabGroups.update(o,{color:t,collapsed:e,title:s})}}for(let w=0;w<f.length;w++){const t=f[w];if(null==t?void 0:t.pinned){const t=null==(o=null==(a=y.tabs)?void 0:a[w])?void 0:o.id;if(!t)continue;await e.tabs.update(t,{pinned:!0})}}const m=f.find((t=>t.key===c));if(m){const t=f.indexOf(m),s=null==(r=null==(n=y.tabs)?void 0:n[t])?void 0:r.id;s&&await e.tabs.update(s,{active:!0})}return y}async updateWindowSize(t,i){"normal"===i.state&&i.left&&i.width&&i.top&&i.height&&(await e.windows.update(t,{width:i.width,height:i.height}).catch((t=>console.error(t))),(!s()||window.screen.availWidth>i.left+i.width)&&await e.windows.update(t,{left:i.left,top:i.top}).catch((t=>console.error(t))))}getUrlArrayForWindowCreateFromTabs(t,e){const o=t=>t.startsWith(e+"-extension://")||t.startsWith(e+"://"),n=t.map((t=>t.url===T&&(a()||s())?"/index.html":o(t.url)?t.url.replace(e,i()):t.url)).filter((t=>!(o(t)&&a()||t.startsWith("about:"))));return 0===n.length&&n.push("/index.html"),s()&&n.unshift("/index.html"),n}async focusTabAndWindow(t,s){t&&await e.tabs.update(t,{active:!0}),s&&await e.windows.update(s,{focused:!0})}}const R=()=>({tabStashService:new A(new o("tabs"))}),C=(t=R().tabStashService)=>n("tabs",{state:()=>({data:{},loading:!1,loaded:!1,activeItemId:""}),getters:{getItems:t=>Object.values(t.data).map((t=>new b(t))).sort(((t,e)=>Date.parse(e.dateCreated)-Date.parse(t.dateCreated))),getItemById:t=>e=>{const s=t.data[e];return s?new b(s):null}},actions:{refresh(){this.loading=!0,t.get({success:t=>{t.forEach((t=>r.set(this.data,t.id,t))),this.loaded=!0,this.loading=!1}})},async stashSession(e){if(!(await t.ensurePermissions()))return!1;const i=await t.getSessionFromWindows(e);return 0===i.windows.length||(await this.create(i),await t.closeWindowsAndSetSessionIds(i),s()||await this.update(i.id,{windows:i.windows})),i},async restoreSession(e){return!(!s()&&!(await t.ensurePermissions()))&&(await t.restoreSession(e),await this.delete(e.id),!0)},async create(e){r.set(this.data,e.id,e),await t.create(e)},async delete(e){r.delete(this.data,e),await t.delete(e)},async update(e,s){const i=this.data[e];if(!i)throw new Error(`No data found for ${e}`);const a={...i,...s};r.set(this.data,e,a);const o=Object.keys(s).join(",");return await t.update(e,a,{queryParams:{update_mask:o}}),a},ensurePermissions:e=>t.ensurePermissions(e)}}),G=C(),k=Object.freeze(Object.defineProperty({__proto__:null,default:G,makeTabsStore:C,useTabsStore:G},Symbol.toStringTag,{value:"Module"}));export{l as G,W as H,T as N,b as S,f as T,p as W,w as a,c as b,E as c,S as m,R as p,k as t,G as u};