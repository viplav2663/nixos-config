import{n as t,Q as e,A as a}from"./icon-alert--q0yLTMi.js";import"./localStorage-4iHdj-SC.js";import"./preload-helper-DmNsytk6.js";import"./string-GDe0WbEj.js";const n=new a({feature:"login"});const o=t({name:"Login",provide:()=>({capture:n.capture}),props:{activeSubStep:{type:Object,required:!0}},setup:()=>({transitionDuration:500}),data(){const{name:t="",email:a=""}=localStorage.getObject(e)||{};return{name:t,email:a,loading:!1,shouldDisplayNewsletterOptIn:!1}},computed:{loginDataString(){return`${this.name}${this.email}`},activeSubStepComponent(){return this.activeSubStep.component}},watch:{loginDataString(){localStorage.setObject(e,{name:this.name,email:this.email})}},methods:{async completeLogin(){this.$emit("stepComplete")}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login",style:{"--transition-duration":t.transitionDuration+"ms"},attrs:{"data-test":"login"}},[e("transition",{attrs:{name:"fade-login",mode:"out-in",duration:t.transitionDuration}},[e(t.activeSubStepComponent,t._b({key:t.activeSubStep.id,tag:"component",staticClass:"login",on:{goToSubStep:function(e){return t.$emit("goToSubStep",e)},complete:t.completeLogin}},"component",t.$data,!1,!0))],1)],1)}),[],!1,null,null).exports;export{o as default};