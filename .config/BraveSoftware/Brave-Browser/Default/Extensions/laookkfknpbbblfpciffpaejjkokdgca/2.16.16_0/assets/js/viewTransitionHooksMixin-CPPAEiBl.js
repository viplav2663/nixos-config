const e={props:{viewManager:{type:Object,required:!0}},created(){var e,i,t;this.viewManager.setActiveBodyComponentInstance(this),this._viewId=this.viewManager.activeViewId,this.viewManager.$on(`viewOpened:${this._viewId}`,this._afterEnterWrapper),this.viewManager.$on(`viewClosed:${this._viewId}`,this._afterLeaveWrapper),null==(t=null==(i=null==(e=this.viewManager)?void 0:e.views[this._viewId])?void 0:i.beforeEnter)||t.call(i),this.beforeEnter()},destroyed(){this.viewManager.$emit("resolveShowView:"+this._viewId)},methods:{beforeEnter(){},afterEnter(){},beforeLeave(){},afterLeave(){},_afterLeaveWrapper(){var e,i;null==(i=null==(e=this.viewManager.views[this._viewId])?void 0:e.afterLeave)||i.call(e),this.afterLeave(),this._removeListeners()},_afterEnterWrapper(){var e,i;null==(i=null==(e=this.viewManager.views[this._viewId])?void 0:e.afterEnter)||i.call(e),this.afterEnter()},_removeListeners(){this.viewManager.$off(`viewClosed:${this._viewId}`,this._afterLeaveWrapper),this.viewManager.$off(`viewOpened:${this._viewId}`,this._afterEnterWrapper)}}};export{e as v};