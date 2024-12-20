import{n as t}from"./icon-alert--q0yLTMi.js";const e=t({name:"Slider",props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1}},data:()=>({mouseButtonIsDown:!1}),computed:{valuePercent(){return this.value/this.max*100+"%"}},methods:{touchstart(t){this.mouseButtonIsDown=!0,window.addEventListener("touchmove",this.update),window.addEventListener("touchend",this.touchend),this.update(t)},touchend(){this.mouseButtonIsDown=!1,window.removeEventListener("touchmove",this.update),window.removeEventListener("touchend",this.touchend)},mousedown(t){0===t.button?(this.mouseButtonIsDown=!0,window.addEventListener("mousemove",this.update),window.addEventListener("mouseup",this.mouseup),this.update(t)):this.mouseup(t)},mouseup(){this.mouseButtonIsDown=!1,window.removeEventListener("mousemove",this.update),window.removeEventListener("mouseup",this.mouseup)},update(t){var e;if(this.mouseButtonIsDown){const s=this.$refs.slider.getBoundingClientRect();let o=((t.pageX||t.changedTouches[0].pageX)-s.left)/this.$refs.slider.clientWidth*this.max;o<this.min&&(o=this.min),o>this.max&&(o=this.max);const i=null==(e=String(this.interval).split(".")[1])?void 0:e.length,n=Math.round(o/this.interval)*this.interval;o=Number(n.toFixed(i)),this.$emit("input",o)}}}},(function(){var t=this,e=t._self._c;return e("div",{ref:"slider",staticClass:"slider",class:{down:t.mouseButtonIsDown},on:{mousedown:t.mousedown,touchstart:t.touchstart,click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"bar off"}),e("div",{staticClass:"bar on",style:{width:t.valuePercent}}),e("div",{staticClass:"dial",style:{left:t.valuePercent}})])}),[],!1,null,"d27488a7").exports;export{e as S};