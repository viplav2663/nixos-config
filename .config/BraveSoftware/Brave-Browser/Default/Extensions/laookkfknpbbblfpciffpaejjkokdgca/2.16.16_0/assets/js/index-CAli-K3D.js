const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/SpadeDrawer-Cpp83S73.js","assets/js/Utils-CEAqaCTL.js","assets/js/HeartDrawer-BEPAWx57.js","assets/js/DiamondDrawer-Bm52sDgO.js","assets/js/ClubDrawer-Dfp1JXAR.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-DmNsytk6.js";async function r(r,e=!0){const{SpadeDrawer:t}=await a((async()=>{const{SpadeDrawer:a}=await import("./SpadeDrawer-Cpp83S73.js");return{SpadeDrawer:a}}),__vite__mapDeps([0,1])),{HeartDrawer:w}=await a((async()=>{const{HeartDrawer:a}=await import("./HeartDrawer-BEPAWx57.js");return{HeartDrawer:a}}),__vite__mapDeps([2,1])),{DiamondDrawer:n}=await a((async()=>{const{DiamondDrawer:a}=await import("./DiamondDrawer-Bm52sDgO.js");return{DiamondDrawer:a}}),__vite__mapDeps([3,1])),{ClubDrawer:i}=await a((async()=>{const{ClubDrawer:a}=await import("./ClubDrawer-Dfp1JXAR.js");return{ClubDrawer:a}}),__vite__mapDeps([4,1]));await r.addShape(["spade","spades"],new t,e),await r.addShape(["heart","hearts"],new w,e),await r.addShape(["diamond","diamonds"],new n,e),await r.addShape(["club","clubs"],new i,e)}export{r as loadCardsShape};