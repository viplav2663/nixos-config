import"./VueBase-W7f1OYgs.js";import{V as t}from"./icon-alert--q0yLTMi.js";const e=new t.observable({}),s=new Proxy(e,{get:(e,s)=>(Object.prototype.hasOwnProperty.call(e,s)||t.set(e,s,m.models.customization.getComputedSetting(s)),e[s]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),o=new Proxy(e,{get:(t,e)=>({...JSON.parse(m.models.customization.persistentSettings.defaultIfNotSet[e+"Str"]),...JSON.parse(s[e+"Str"])}),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),n=new t.observable({}),i=new Proxy(n,{get:(e,s)=>(Object.prototype.hasOwnProperty.call(e,s)||t.set(e,s,m.models.customization.get(s)),e[s]),set:(e,s,o)=>(m.models.customization.save(s,o),t.set(e,s,o),!0)}),a=new Proxy(n,{get:(t,e)=>({...JSON.parse(m.models.customization.persistentSettings.defaultIfNotSet[e+"Str"]),...JSON.parse(i[e+"Str"])}),set:(t,e,s)=>(i[e+"Str"]=JSON.stringify(s),!0)});function r(e={}){Object.entries(e).forEach((([e,s])=>t.set(n,e,s))),m.models.customization.save(e)}m.models.customization.on("change",(s=>{s&&("balanceModeStr"in s.changed&&Object.entries(m.models.customization.attributes).forEach((([s,o])=>t.set(e,s,o))),Object.entries(s.changed).forEach((([s,o])=>{t.set(e,s,m.models.customization.getComputedSetting(s)),t.set(n,s,o)})))})),m.on("customization:update",(s=>{s.forEach((s=>{t.set(e,s,m.models.customization.getComputedSetting(s)),t.set(n,s,m.models.customization.get(s))}))}));export{i as a,o as b,s as c,a as p,r as s};