import"./VueBase-W7f1OYgs.js";import{i as e,b as t,m as o}from"./itemModelMixin-B7XBtNZL.js";import{V as i,a1 as a,u as s,M as c,A as d,T as n}from"./icon-alert--q0yLTMi.js";import{a as l}from"./reactiveCustomization-DqGARD3C.js";import{loadTodoAddin as u}from"./addin-d8CNU_f0.js";import"./index-DQvfDEB6.js";import"./preload-helper-DmNsytk6.js";import"./localStorage-4iHdj-SC.js";import"./migrateLegacyUserMessageHandler-DMvEmYM4.js";import"./main-FH8FpKq2.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-SV1wohGy.js";import"./namesMixin-DfNb5KMg.js";import"./string-GDe0WbEj.js";import"./style-TaIEnhS-.js";import"./ViewState-_YxhE_TX.js";import"./handlebarLoader-xbtIzd6B.js";const r=i.extend({name:"FocusModel",mixins:[e],data:()=>({id:null,archived:!1,completed:!1,createdDate:m.now(),focus:null,forDate:null,todoId:null,props:["focus","completed","archived","forDate","createdDate","todoId"]}),methods:{updateData(t){e.methods.updateData.call(this,t),this.completed=!!t.completed}}}),h=new(i.extend({name:"AutoFocusManager",data:()=>({activeFocus:null,loaded:!1,loading:!1}),computed:{autoFocusEnabled:()=>l.autoFocus&&m.conditionalFeatures.featureEnabled("pinfocus")},watch:{autoFocusEnabled:{async handler(e){e?(this.loaded||this.loading||await this.getInitialLoadedState(),this.getTopTodo().then((e=>this.activeFocus=this.createFocusFromTodo(e)))):this.activeFocus=null},immediate:!0},"activeFocus.focus"(e){this.activeFocus&&m.trigger("todo:set:title",this.activeFocus.todoId,e)}},created(){m.on("todo:globalChange",this.onTodoChange),m.on("todo:loadingStateChange",this.onLoadingStateChange),m.on("todo:activeListLoaded",this.setLoaded)},destroyed(){m.off("todo:globalChange",this.onTodoChange),m.off("todo:loadingStateChange",this.onLoadingStateChange),m.off("todo:activeListLoaded",this.setLoaded)},methods:{async getInitialLoadedState(){var e,t;this.loading=!0,await u(),"Done"===(null==(t=null==(e=m.views.todoPane.manager.activeProvider.selectedList())?void 0:e.itemCollection)?void 0:t.listStatus)&&this.setLoaded()},setLoaded(){this.loading=!1,this.loaded=!0},toggleComplete(){this.activeFocus&&(this.activeFocus.completed=!this.activeFocus.completed,m.trigger("todo:set:done",this.activeFocus.todoId,this.activeFocus.completed))},onLoadingStateChange(){this.autoFocusEnabled&&this.getTopTodo().then((e=>{var t;!e||this.activeFocus&&(e.get("id")||e.id)===this.activeFocus.todoId?e||(null==(t=this.activeFocus)?void 0:t.completed)||(this.activeFocus=null):this.activeFocus=this.createFocusFromTodo(e)}))},getTopTodo:async()=>(await u(),m.views.todoPane.getTopTodo()),onTodoChange(...e){var t,o,i,a,s;const c=e[0];if(e.find((e=>e&&(e.ignoreRender||e.silent)))||!this.autoFocusEnabled||!(null==c?void 0:c.changed)||!Object.keys(c.changed).length||!1===(null==(t=c.changed)?void 0:t.isLoading))return;const d=(null==(o=c.changed)?void 0:o.completedDate)||(null==(i=c.changed)?void 0:i.modifiedServer)||(null==(s=null==(a=null==c?void 0:c.changed)?void 0:a.changed_props)?void 0:s.includes("completedDate"));this.getTopTodo().then((e=>{var t,o;e?this.activeFocus=this.createFocusFromTodo(e):(null==(t=this.activeFocus)?void 0:t.todoId)&&(c.get("id")||c.id).includes(null==(o=this.activeFocus)?void 0:o.todoId)&&(this.activeFocus.completed=c.get("done"),d||(this.activeFocus=null))}))},createFocusFromTodo(e){if(!e)return null;let t=new r;return t.updateData({focus:e.get("title"),archived:!1,completed:e.get("done"),createdDate:m.now(),id:m.utils.uuidv4(),todoId:e.get("id")||e.id,forDate:m.utils.getDateString()}),t}}}));class v{constructor(e){this.dataService=e}get(e){this.dataService.get(e)}add(e,t){return this.dataService.create(e,t)}update(e,t){return this.dataService.update(e,t)}delete(e){return this.dataService.delete(e)}refresh(){return this.dataService.refresh()}}const p=new(i.extend({name:"FocusCollection",mixins:[t,o],setup:()=>({completeCounter:0,resetCompleteDebounce:null,type:"focus",Model:r,dataService:new v(new a("focus",{mode:s.userIsLegacyUnregistered()?c.Cache:c.Timestamp})),newModel:null,analytics:new d({feature:"focus"})}),computed:{emptyFocus(){return!this.activeFocus.focus},activeFocusInCollection(){const e=s.getDateString(),t=Object.values(this.data.items).filter((t=>!t.archived&&t.forDate===e)).sort(((e,t)=>t.createdDate-e.createdDate));return t.length?t[0]:null},activeFocus(){return h.activeFocus||this.activeFocusInCollection||this.newModel},loaded(){return(!h.autoFocusEnabled||h.loaded)&&this.data.loaded}},created(){this.instantiateNewModel(),m.on("focus:pin",this.onFocusPin),m.on("todo:globalChange",this.onTodoChange),m.on("newDay",this.archiveAll)},destroyed(){m.off("focus:pin",this.onFocusPin),m.off("todo:globalChange",this.onTodoChange),m.off("newDay",this.archiveAll)},methods:{instantiateNewModel(){this.newModel=new this.Model,this.newModel.copyProperties()},async save(){const e=this.emptyFocus;h.activeFocus||this.activeFocus.editProps.focus&&await this[this.emptyFocus?"add":"update"](this.activeFocus),e&&this.instantiateNewModel(),(this.activeFocus.focus||this.activeFocus.editProps.focus)&&this.analytics.capture("focus "+(e?"add":"edit"),{position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"}),this.activeFocus.commitChanges(),this.activeFocus.todoId&&m.trigger("todo:set:title",this.activeFocus.todoId,this.activeFocus.focus)},archive(){this.analytics.capture("focus clear",{completed:this.activeFocus.completed}),h.activeFocus?l.autoFocus=!1:this.activeFocus.id&&t.methods.archive.call(this,this.activeFocus)},archiveAll(){Object.values(this.data.items).forEach((e=>this.archive(e)))},toggleComplete(){const e=this.activeFocus.completed;if(this.completeCounter++,clearTimeout(this.resetCompleteDebounce),this.resetCompleteDebounce=setTimeout((()=>{this.completeCounter=0}),100),10===this.completeCounter){new n("tab.focus.complete").warn(new Error("Focus complete/uncomplete loop detected"))}else if(this.completeCounter>10)return void console.warn("Many focu complet");this.analytics.capture("focus "+(e?"uncomplete":"complete"),Object.assign({position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"},e?{}:{autofocus:h.autoFocusEnabled})),!h.activeFocus&&this.activeFocus.id?(this.activeFocus.completed=!e,this.dataService.update(this.activeFocus.id,{completed:!e}).then((()=>{this.activeFocus.todoId&&m.trigger("todo:set:done",this.activeFocus.todoId,!e)})).catch((t=>{throw this.activeFocus.completed=e,t}))):h.toggleComplete()},onFocusPin(e){l.autoFocus=!1;let t=h.createFocusFromTodo(e);t&&t.focus&&(t.copyProperties(),this.add(t))},onTodoChange(...e){var t,o;const i=e[0];if(e.find((e=>e&&(e.ignoreRender||e.silent)))||!this.activeFocus||!Object.keys(this.data.items).length||!(null==i?void 0:i.changed))return;let a=Object.values(this.data.items).find((e=>{var t;return e.todoId&&e.todoId===((null==(t=i.get)?void 0:t.call(i,"id"))||(null==i?void 0:i.id))}));if(!a)return;if(null==(o=null==(t=e[0])?void 0:t.changed)?void 0:o.deleted)return void this.archive();const s=i.get("done"),c=i.get("title");a.completed===s&&a.focus===c||(a.completed=s,a.focus=c,this.dataService.update(a.id,{completed:s,focus:c}))}}}));export{p as default};