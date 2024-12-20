import{F as e}from"./FormMessage-D_iGngUy.js";import{n as t,E as s,q as i}from"./icon-alert--q0yLTMi.js";import{S as r}from"./SmoothReflow-Du5fECCq.js";class o{constructor(e,t,s,i){this.fields={},this.submit=e,this.getFieldOrder=t,this.getFieldIsFocused=s,this.submitOnBlur=i}addField(e,t,s){if(this.fields[e])throw new Error(`A field with name: ${e} already exists on this form`);const i={};t&&(i.focus=t),s&&(i.pulse=s),this.fields[e]=i}removeField(e){delete this.fields[e]}getFieldMethod(e,t,s){const i=this.fields[e];if(!i)return console.warn(`"${t}" called on "${e}" but no field with that name was registered.`);const r=i[t];if(!r)return console.warn(`"${t}" called on "${e}" but no "${t}" method was registered for "${e}".`);r(s)}focusInput(e,t){this.getFieldMethod(e,"focus",t)}pulseField(e,t){this.getFieldMethod(e,"pulse",t)}focusNextInputOrSubmitIfLast(e){var t,s;const i=this.getFieldOrder(Object.keys(this.fields)),r=i.indexOf(e);if(-1!==r)if(r===i.length-1)this.submit();else{const e=i[r+1];e&&(null==(s=null==(t=this.fields[e])?void 0:t.focus)||s.call(t))}}submitOnBlurAndNoneFocused(){setTimeout((()=>{const e=this.getFieldIsFocused(Object.keys(this.fields));this.submitOnBlur&&e||this.submit()}))}}const n=t({name:"BaseForm",components:{SmoothReflow:r,FormMessage:e},provide(){return{formFields:new o(this.submitForm,this.getFieldOrder,this.getFieldIsFocused,this.submitOnBlur)}},props:{submit:{type:Function,required:!0},validate:{type:Function,default:()=>{}},submitButton:{type:Boolean,default:!0},submitOnBlur:{type:Boolean,default:!1},adding:{type:Boolean,default:null}},data:()=>({error:null,processing:!1}),computed:{submitButtonText(){return this.processing?this.adding?"Adding…":"Saving…":!0===this.adding?"Add":!1===this.adding?"Save":"Submit"}},watch:{error(e){if(null==e?void 0:e.input){const[t,s]=e.input.split(".");this.pulseField(t,s)}}},mounted(){window.addEventListener("keydown",this.submitOnMetaEnter)},destroyed(){window.removeEventListener("keydown",this.submitOnMetaEnter)},methods:{async submitForm(){try{this.processing=!0,await this.validate(),this.resetError(),await this.submit()}catch(e){e instanceof s?this.error=e:(console.error(e),this.error=new s({message:i.SERVER_ERROR_BASIC,contact:!0}))}finally{this.processing=!1}},submitOnMetaEnter(e){"Enter"===e.key&&e.metaKey&&this.submitForm()},getNamedFieldElements(e){const t=e.map((e=>`[name=${e}]`)).join(", ");return""===t?[]:Array.from(this.$el.querySelectorAll(t))},getFieldOrder(e){return this.getNamedFieldElements(e).map((e=>e.getAttribute("name")))},getFieldIsFocused(e){return this.getNamedFieldElements(e).some((e=>e===document.activeElement||e.contains(document.activeElement)))},resetError(){this.error=null},pulseField(e,t){this._provided.formFields.pulseField(e,void 0===t?void 0:Number(t))}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-form"},[e._t("default"),t("smooth-reflow",{staticClass:"form-message-smooth-reflow",attrs:{nested:!0}},[e.error&&e.error.message?t("form-message",e._b({attrs:{error:!0}},"form-message",e.error,!1)):e._e()],1),e.submitButton?t("button",{staticClass:"button",attrs:{"data-test":"submit-form"},on:{click:e.submitForm}},[e._v(" "+e._s(e.submitButtonText)+" ")]):e._e()],2)}),[],!1,null,"c423920e").exports;export{n as B};