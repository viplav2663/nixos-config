let e={};const t={bind:function(t,l){m.utils.isTouchDevice()&&(t.dataset.justBoundMobileBlurHandler=!0,setTimeout((()=>{t.dataset.justBoundMobileBlurHandler=!1}),100),t.dataset.mobileBlurHandlerId=Math.random().toString(36).substring(7),e[t.dataset.mobileBlurHandlerId]=l.value,t.addEventListener("focusout",l.value))},unbind:function(t){m.utils.isTouchDevice()&&(t.removeEventListener("click",e[t.dataset.mobileBlurHandlerId]),delete e[t.dataset.mobileBlurHandlerId],delete t.dataset.mobileBlurHandlerId,delete t.dataset.justBoundMobileBlurHandler)}};export{t as M};