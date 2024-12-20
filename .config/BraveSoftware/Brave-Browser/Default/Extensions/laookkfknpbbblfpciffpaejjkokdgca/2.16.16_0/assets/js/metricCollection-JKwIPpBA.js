const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/RoundingSelect-BVeEan0-.js","assets/js/CollapsibleInput-griVwMPn.js","assets/js/SmoothReflow-Du5fECCq.js","assets/js/icon-alert--q0yLTMi.js","assets/js/localStorage-4iHdj-SC.js","assets/js/preload-helper-DmNsytk6.js","assets/js/string-GDe0WbEj.js","assets/js/allComponentsMounted-C3UsG_cA.js","assets/css/SmoothReflow-DiGQ1RDg.css","assets/js/icon-x-caret-half-CZtcH_PM.js","assets/css/CollapsibleInput-fGIemUpW.css","assets/js/EditField-D1Ugb_hY.js","assets/js/icon-tooltip-CN09iXOB.js","assets/js/SoftFocus-BUhesXB-.js","assets/js/FormToggle-CPdB9uoc.js","assets/js/ToggleSwitch-DUGISQcW.js","assets/css/ToggleSwitch-oT7iqKNg.css","assets/css/FormToggle-Su4QbVrb.css","assets/css/EditField-Do8-Tx7R.css","assets/css/MantrasUpsell-B_SY1GJM.css","assets/js/MetricTypes-FSzC7BjX.js","assets/js/viewTransitionHooksMixin-CPPAEiBl.js","assets/css/MetricTypes-B169GmSD.css","assets/js/MetricPath-CI3g9cXA.js","assets/js/VueBase-W7f1OYgs.js","assets/js/index-DQvfDEB6.js","assets/js/migrateLegacyUserMessageHandler-DMvEmYM4.js","assets/js/main-FH8FpKq2.js","assets/css/index-C0DDMXTO.css","assets/js/index-CJJH83pl.js","assets/js/portal-vue.esm-SV1wohGy.js","assets/js/itemDataServiceMixins-DPsPiv13.js","assets/js/itemModelMixin-B7XBtNZL.js","assets/js/reactiveCustomization-DqGARD3C.js","assets/js/namesMixin-DfNb5KMg.js","assets/js/metricMetadata-D4pZaGht.js","assets/js/clocks-DjzskNOU.js","assets/js/captureMixin-D0enqjOF.js","assets/css/MetricPath-DLthKbeI.css","assets/js/MetricIntegration-sR9gNWxq.js","assets/css/MetricIntegration-B4V68FcC.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./preload-helper-DmNsytk6.js";import"./VueBase-W7f1OYgs.js";import{d as t}from"./itemDataServiceMixins-DPsPiv13.js";import{V as i,a4 as r,a5 as s,Z as a}from"./icon-alert--q0yLTMi.js";import{i as d,l as o,b as l,p as n,r as u,s as h,m as p,C as c}from"./itemModelMixin-B7XBtNZL.js";import{m as v}from"./metricMetadata-D4pZaGht.js";import{c as y}from"./captureMixin-D0enqjOF.js";const f=new(i.extend({mixins:[t],unreactive:()=>({type:"metrics",queryParams:{get:{round:!1}}}),methods:{getProviders(){return this.$xhr.get("settings/metrics")},connectProvider(e){return this.$xhr.put("settings/metrics/providers/",{provider_id:e})},getProviderDataPoints(e){return this.$xhr.get(`settings/metrics/providers/${e}/dataPoints`)},getPathOptions(e){return this.$xhr.post("metrics/preview",{url:e})}}})),I=i.extend({mixins:[d,o],data:()=>({id:null,label:"",value:null,type:null,pinned:!1,archived:!1,rounding:null,random:!1,cycle:"none",createdServer:null,modifiedServer:null,modified:null,isTeam:null,path:"",providerDataPointId:"",externalUrl:"",providerId:null,url:"",readOnly:!1,props:["pinned","label","value","type","cycle","rounding","path","providerDataPointId","providerId","url"]}),computed:{name(){return this.label},authNeeded(){return this.type===r.INTEGRATION&&"Authorization needed."===this.value},tooltip(){return this.authNeeded?"Authorization Needed":this.externalUrl||""},refreshAfterSave(){return this.editProps.type===r.INTEGRATION},displayValue(){return this.type===r.URL&&m.utils.isNumber(this.rounding)&&m.utils.isNumber(this.value)?new Number(this.value).toFixed(this.rounding):this.authNeeded||""===this.value||null===this.value||void 0===this.value?"-":this.value},disableSave(){let e=!1;return this.editProps.type===r.INTEGRATION&&(this.editProps.providerId&&this.editProps.providerDataPointId||(e=!0)),null===this.editProps.type||e},shouldDisplayQuickAdjust(){return this.type===r.MANUAL&&!this.isTeam&&!this.readOnly&&m.utils.isNumber(this.value)}},watch:{value(e,t){null!==t&&(this.modified=Date.now())}},methods:{updateData:function(e){this.type=this.getMetricType(e),this.label=e.label,this.value=e.value,this.pinned=e.pinned,this.id=e.id,this.archived=e.archived,this.rounding=e.rounding,this.cycle=e.cycle,this.path=e.path,this.isTeam=e.isTeam||!1,this.createdServer=e.createdServer,this.modified=this.getLatestDate([this.modified,e.modified,e.modifiedServer]),this.providerDataPointId=e.providerDataPointId,this.providerId=e.providerId,this.externalUrl=e.externalUrl,this.url=e.url,this.readOnly=e.readOnly,this.resetValueIfCycleElapsed()},getLatestDate:e=>e.filter((e=>e)).map((e=>new Date(e))).reduce(((e,t)=>e>t?e:t),0),getChanges(){let e=[];return this.editProps&&this.props.forEach((t=>{if("type"!==t)if("object"==typeof this.editProps[t]&&null!==this.editProps[t])for(let i in this.editProps[t]){let r,s=this[t][i],a=this.editProps[t][i];r=s&&s.getTime&&a&&a.getTime?s.getTime()!==a.getTime():s!==a,r&&(e.push(i),this.editProps[i]=a)}else this[t]!==this.editProps[t]&&e.push(t)})),e},getMetricType:e=>e.url?r.URL:e.providerId?r.INTEGRATION:r.MANUAL,resetValueIfCycleElapsed(){this.type===r.MANUAL&&this.cycle&&this.cycle!==s.NONE&&this.getStartOfCycle()>this.getModifiedDate()&&(isNaN(1*this.value)?this.value="":this.value=0)},getStartOfCycle:function(){return this[this.cycle+"Start"]&&this[this.cycle+"Start"]()},dailyStart:function(){const e=m.utils.getDateString().split(/\D/),t=new Date(e[0],e[1]-1,e[2]);return t.setHours(m.constants.dateRolloverHour),t.getTime()},weeklyStart:function(){let e=new Date(this.dailyStart());return e.setDate(e.getDate()-(e.getDay()+6)%7),this.getMomoDate(e)},monthlyStart:function(){let e=new Date(this.dailyStart());return e.setDate(1),this.getMomoDate(e)},yearlyStart:function(){let e=new Date(this.dailyStart());return e.setDate(1),e.setMonth(0),this.getMomoDate(e)},getMomoDate:function(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.setHours(m.constants.dateRolloverHour),t.getTime()},getModifiedDate:function(){if(this.modified)return new Date(this.modified).getTime()}}}),g=i.extend({data:function(){return{id:1,title:"",beta:!1,largeIconUrl:"",status:"",statusId:null,umpId:null,smallIconUrl:"",shortDescription:"",dataPoints:[]}},computed:{connected(){return"Connected"===this.status}},methods:{updateData(e){this.beta=e.beta,this.id=e.id,this.umpId=e.ump_id,this.status=e.status,this.statusId=e.status_id,this.umpId=e.ump_id,this.largeIconUrl=e.large_icon_url,this.smallIconUrl=e.small_icon_url,this.title=e.provider_title,this.shortDescription=e.short_description}}}),P=()=>e((()=>import("./RoundingSelect-BVeEan0-.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])),b=()=>e((()=>import("./MetricTypes-FSzC7BjX.js")),__vite__mapDeps([20,3,4,5,6,21,22])),T=()=>e((()=>import("./MetricPath-CI3g9cXA.js")),__vite__mapDeps([23,2,3,4,5,6,7,8,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38])),D=()=>e((()=>import("./MetricIntegration-sR9gNWxq.js")),__vite__mapDeps([39,2,3,4,5,6,7,8,40])),w=new(i.extend({mixins:[l,n,u,h,p,y((({item:e})=>{var t;const i={is_paid_event:!0};return e&&(i.type=null==(t=a.find((t=>[e.type,e.editProps.type].includes(t.id))))?void 0:t.title.toLowerCase()),i}))],unreactive(){return{refreshTimeout:null,...v.metrics,Model:I,dataService:f,providerCollection:new c,visibleSetting:"metricVisible",sort:(e,t)=>this.sortPinned(e,t),dashSort:(e,t)=>e.shouldDisplayQuickAdjust&&!t.shouldDisplayQuickAdjust?1:t.shouldDisplayQuickAdjust&&!e.shouldDisplayQuickAdjust?-1:e.id-t.id,fields:[{property:"label",class:"item-body",type:"input",label:"Name",required:!0,hiddenInForm:e=>e.type===r.INTEGRATION&&(null===e.providerId||void 0===e.providerId),dataTest:"name",autoCapitalize:!0},{type:D,hiddenInForm:e=>e.type!==r.INTEGRATION},{property:"value",class:"item-body",type:"input",label:"Value",placeholder:0,required:e=>e.type===r.MANUAL,hiddenInForm:e=>e.type!==r.MANUAL,dataTest:"value"},{property:"cycle",type:"select",label:"Reset",class:"reset",options:[{value:s.NONE,label:"Never"},{value:s.DAILY,label:"Daily"},{value:s.WEEKLY,label:"Weekly"},{value:s.MONTHLY,label:"Monthly"},{value:s.YEARLY,label:"Yearly"}],hiddenInForm:e=>e.type!==r.MANUAL,dataTest:"cycle"},{property:"url",placeholder:"https://",class:"url",type:"input",label:"URL",required:e=>e.type===r.URL,hiddenInForm:e=>e.type!==r.URL,subText:'Enter an API address <a href="https://get.momentumdash.help/hc/en-us/articles/360038089754#h_b3d82248-1a7f-40c1-9304-01b0421dacca" target="_blank">More</a>',dataTest:"url",autoCorrect:!1,validate:"validUrl"},{property:"path",class:"path",type:T,label:"Value",required:e=>e.type===r.URL,hiddenInForm:e=>e.type!==r.URL,requiredComponentFields:e=>{if(e.url&&!e.path)return["path"]}},{property:"rounding",type:P,options:[{selected:!0,disabled:!0,label:"Select decimal places"},{value:0,label:0},{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4}],class:"rounding",label:"Rounding",dataTest:"rounding",hiddenInForm:e=>e.type!==r.URL||!m.utils.isNumber(e.value)},{property:"pinned",type:"toggle",label:"Pin to dashboard",dataTest:"pinned",hiddenInForm:e=>e.type===r.INTEGRATION&&(null===e.providerId||void 0===e.providerId)}]}},computed:{providers(){return this.providerCollection.loaded||this.refreshMetricProviders(),this.providerCollection}},methods:{startMetricUpdateInterval(){const e=3e5,t=async()=>{const i=Number(localStorage.getItem("metrics:lastRefreshed")),r=(new Date).getTime();if(isNaN(i)||r-i>=e){localStorage.setItem("metrics:lastRefreshed",r);try{await this.refresh({retry:!1,notifyUserOnFailure:!1}),clearTimeout(this.refreshTimeout),this.refreshTimeout=setTimeout(t,e)}catch(s){this.refreshTimeout=null,console.error(s)}}};clearTimeout(this.refreshTimeout),this.refreshTimeout=setTimeout(t,e)},clearMetricInterval(){clearTimeout(this.refreshTimeout)},adjust(e,t){const i=e.value;return e.value=Number(Number(e.value).toPrecision(12))+t,e.modified=Date.now(),this.dataService.update(e.id,{value:e.value,modified:e.modified}).catch((()=>e.value=i))},getAddRequestBody(e){let t={label:m.utils.capitalizeFirstLetter(e.editProps.label),pinned:e.editProps.pinned};switch(e.editProps.type){case r.MANUAL:t.value=m.utils.capitalizeFirstLetter(e.editProps.value),t.cycle=e.editProps.cycle;break;case r.URL:t.value=e.editProps.value,t.url=m.utils.ensureUrlScheme(e.editProps.url),t.path=e.editProps.path,t.rounding=e.editProps.rounding;break;case r.INTEGRATION:t.value="",t.providerId=e.editProps.providerId,t.providerDataPointId=e.editProps.providerDataPointId}return t},getUpdateRequestBody(e){const t={modified:Date.now()};return e.getChanges().forEach((i=>{t[i]="url"===i?m.utils.ensureUrlScheme(e.editProps[i]):e.editProps[i]})),t},refreshMetricProviders(){return this.dataService.getProviders().then((e=>{const t=e.data.available_providers,i=e.data.connected_providers;let r;t&&i?r=t.concat(i):t?r=t:i&&(r=i),r.forEach((e=>{const t=e.id;let i=null;Object.prototype.hasOwnProperty.call(this.providers,t)?i=this.providers[t]:(i=new g,i.teamUuid=this.teamUuid,this.$set(this.providers.items,t,i)),i.updateData(e)})),this.$set(this.providers,"loaded",!0)}))},modifyViewsObject(e,t){const i=()=>{const e=t.adding;t.showView(e?"type":"list",{afterLeave:()=>{const i=t.activeItem;i&&(i.revertChanges(),e&&i.copyProperties())}})},r=()=>{const e=t.activeItem,i=e.providerId??e.editProps.providerId;if(i&&this.providers.loaded)return this.providers.items[i]};return e.type={addView:!0,order:3,onEsc:"list",header:{title:"Add metric",centerTitle:!0,buttonsLeft:{back:"list"}},body:{component:b},afterLeave:()=>{"edit"!==t.activeViewId&&t.clearItem()}},e.edit.header.title=()=>{const e=t.activeItem,i=r();if(i)return i.title;let s=e.type??t.editProps.type;return a[s].title},e.edit.header.icon=()=>{const e=r();return e?e.smallIconUrl:""},e.edit.header.buttonsLeft.back=i,e.edit.onEsc=i,delete e.edit.addView,e.edit.afterLeave=()=>{"type"!==t.activeViewId&&t.clearItem()},e},async connectProvider(e){let t;"object"==typeof e?t=e:(this.providers.loaded||await this.refreshMetricProviders(),t=this.providers.items[e]);const{data:i}=await this.dataService.connectProvider(t.id);"authRequired"===i.status&&this.launchConnectWindow(t,i.authorizationUrl,i.winHeight,i.winWidth,i.windowFeatures)},launchConnectWindow(e,t,i=510,r=600,s="titlebar, resizable, status"){const a=window.screen.width/2-r/2,d=window.screen.height/2-i/2,o=window.open(t,"MomentumAuthWindow",`${s}, left=${a}, top=${d}, width=${r}, height=${i}`);let l=setInterval((()=>{o.closed&&(clearInterval(l),this.refreshMetricProviders().then((()=>this.fetchDataPoints(e))))}),1e3)},fetchDataPoints(e){this.dataService.getProviderDataPoints(e.id).then((t=>{let i=t&&t.data&&t.data.dataPoints;i&&i.sort(((e,t)=>{if(!e.name||!t.name)return 0;const i=e.name.toUpperCase(),r=t.name.toUpperCase();return i<r?-1:i>r?1:0})),this.$set(this.providers.items[e.id],"dataPoints",i)})).catch(console.error)}}})),N=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{w as a,N as b,f as m};