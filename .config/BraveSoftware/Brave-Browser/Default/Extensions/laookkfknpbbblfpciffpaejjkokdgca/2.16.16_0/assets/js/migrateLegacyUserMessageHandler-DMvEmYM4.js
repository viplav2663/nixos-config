const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/apiUrl-B_vjvWmP.js","assets/js/localStorage-4iHdj-SC.js"])))=>i.map(i=>d[i]);
import{_ as e,g as a}from"./preload-helper-DmNsytk6.js";import{r as t,e as s,i as o,L as r}from"./localStorage-4iHdj-SC.js";const n="user:migration:",i={TIME:n+"time",FOCUS:n+"focus",ONBOARDING:n+"onboarding"},c=6e4,m=100,u={REGISTER:"register",FOCUS:"focus",ONBOARDING:"onboarding"},l="tab.legacyUserMigration",g="syncedData:migration:lastAttempted",d="syncedData:migration:successful";async function I({context:n,tabId:i,loggerName:c},m){try{const r=await async function(r){const n=localStorage.getObject("momentum-customization-1").displayname,i=(await e((async()=>{const{default:e}=await import("./apiUrl-B_vjvWmP.js");return{default:e}}),__vite__mapDeps([0,1]))).default(),c=await t({method:"post",url:i+"user:migrateLegacy?canceled=true",data:{name:n},headers:{"X-Momentum-Version":s.version,"X-Momentum-ClientDate":a(),"X-Momentum-ClientId":localStorage.getItem("client_uuid"),"X-Momentum-TabId":r}});if(o(null==c?void 0:c.status)&&c.data)return localStorage.setItem("token",c.data.token),localStorage.setItem("token_uuid",c.data.token_uuid),localStorage.setItem("unregistered",!0),c.data.settings;throw new Error("Legacy Migration Request Failed",c)}(i);m({success:!0,settings:r})}catch(l){if(console.error(l),c){new r(c).error(n+" migration error",{errorMessage:l.message,stack:l.stack,phase:u.REGISTER})}m({success:!1,error:l})}}export{i as L,g as M,l as a,c as b,m as c,u as d,d as e,I as m};