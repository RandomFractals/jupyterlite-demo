(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8809],{38809:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Drag:()=>i});var o,n=r(98669),i=function(){function e(e){var t=this;this._onScrollFrame=function(){if(t._scrollTarget){var e=t._scrollTarget,r=e.element,n=e.edge,i=e.distance,s=o.SCROLL_EDGE_SIZE-i,a=Math.pow(s/o.SCROLL_EDGE_SIZE,2),c=Math.max(1,Math.round(a*o.SCROLL_EDGE_SIZE));switch(n){case"top":r.scrollTop-=c;break;case"left":r.scrollLeft-=c;break;case"right":r.scrollLeft+=c;break;case"bottom":r.scrollTop+=c}requestAnimationFrame(t._onScrollFrame)}},this._disposed=!1,this._dropAction="none",this._override=null,this._currentTarget=null,this._currentElement=null,this._promise=null,this._scrollTarget=null,this._resolve=null,this.mimeData=e.mimeData,this.dragImage=e.dragImage||null,this.proposedAction=e.proposedAction||"copy",this.supportedActions=e.supportedActions||"all",this.source=e.source||null}return e.prototype.dispose=function(){if(!this._disposed){if(this._disposed=!0,this._currentTarget){var e=o.createMouseEvent("mouseup",-1,-1);o.dispatchDragLeave(this,this._currentTarget,null,e)}this._finalize("none")}},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this._disposed},enumerable:!0,configurable:!0}),e.prototype.start=function(e,t){var r=this;if(this._disposed)return Promise.resolve("none");if(this._promise)return this._promise;this._addListeners(),this._attachDragImage(e,t),this._promise=new Promise((function(e,t){r._resolve=e}));var n=o.createMouseEvent("mousemove",e,t);return document.dispatchEvent(n),this._promise},e.prototype.handleEvent=function(e){switch(e.type){case"mousemove":this._evtMouseMove(e);break;case"mouseup":this._evtMouseUp(e);break;case"keydown":this._evtKeyDown(e);break;default:e.preventDefault(),e.stopPropagation()}},e.prototype.moveDragImage=function(e,t){if(this.dragImage){var r=this.dragImage.style;r.top=t+"px",r.left=e+"px"}},e.prototype._evtMouseMove=function(e){e.preventDefault(),e.stopPropagation(),this._updateCurrentTarget(e),this._updateDragScroll(e),this.moveDragImage(e.clientX,e.clientY)},e.prototype._evtMouseUp=function(e){if(e.preventDefault(),e.stopPropagation(),0===e.button)if(this._updateCurrentTarget(e),this._currentTarget){if("none"===this._dropAction)return o.dispatchDragLeave(this,this._currentTarget,null,e),void this._finalize("none");var t=o.dispatchDrop(this,this._currentTarget,e);this._finalize(t)}else this._finalize("none")},e.prototype._evtKeyDown=function(e){e.preventDefault(),e.stopPropagation(),27===e.keyCode&&this.dispose()},e.prototype._addListeners=function(){document.addEventListener("mousedown",this,!0),document.addEventListener("mousemove",this,!0),document.addEventListener("mouseup",this,!0),document.addEventListener("mouseenter",this,!0),document.addEventListener("mouseleave",this,!0),document.addEventListener("mouseover",this,!0),document.addEventListener("mouseout",this,!0),document.addEventListener("keydown",this,!0),document.addEventListener("keyup",this,!0),document.addEventListener("keypress",this,!0),document.addEventListener("contextmenu",this,!0)},e.prototype._removeListeners=function(){document.removeEventListener("mousedown",this,!0),document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!0),document.removeEventListener("mouseenter",this,!0),document.removeEventListener("mouseleave",this,!0),document.removeEventListener("mouseover",this,!0),document.removeEventListener("mouseout",this,!0),document.removeEventListener("keydown",this,!0),document.removeEventListener("keyup",this,!0),document.removeEventListener("keypress",this,!0),document.removeEventListener("contextmenu",this,!0)},e.prototype._updateDragScroll=function(e){var t=o.findScrollTarget(e);(this._scrollTarget||t)&&(this._scrollTarget||setTimeout(this._onScrollFrame,500),this._scrollTarget=t)},e.prototype._updateCurrentTarget=function(e){var t=this._currentTarget,r=this._currentTarget,n=this._currentElement,i=document.elementFromPoint(e.clientX,e.clientY);this._currentElement=i,i!==n&&i!==r&&o.dispatchDragExit(this,r,i,e),i!==n&&i!==r&&(r=o.dispatchDragEnter(this,i,r,e)),r!==t&&(this._currentTarget=r,o.dispatchDragLeave(this,t,r,e));var s=o.dispatchDragOver(this,r,e);this._setDropAction(s)},e.prototype._attachDragImage=function(e,t){if(this.dragImage){this.dragImage.classList.add("lm-mod-drag-image"),this.dragImage.classList.add("p-mod-drag-image");var r=this.dragImage.style;r.pointerEvents="none",r.position="fixed",r.top=t+"px",r.left=e+"px",document.body.appendChild(this.dragImage)}},e.prototype._detachDragImage=function(){if(this.dragImage){var e=this.dragImage.parentNode;e&&e.removeChild(this.dragImage)}},e.prototype._setDropAction=function(t){if(t=o.validateAction(t,this.supportedActions),!this._override||this._dropAction!==t)switch(t){case"none":this._dropAction=t,this._override=e.overrideCursor("no-drop");break;case"copy":this._dropAction=t,this._override=e.overrideCursor("copy");break;case"link":this._dropAction=t,this._override=e.overrideCursor("alias");break;case"move":this._dropAction=t,this._override=e.overrideCursor("move")}},e.prototype._finalize=function(e){var t=this._resolve;this._removeListeners(),this._detachDragImage(),this._override&&(this._override.dispose(),this._override=null),this.mimeData.clear(),this._disposed=!0,this._dropAction="none",this._currentTarget=null,this._currentElement=null,this._scrollTarget=null,this._promise=null,this._resolve=null,t&&t(e)},e}();!function(e){e.overrideCursor=function(e){var r=++t;return document.body.style.cursor=e,document.body.classList.add("lm-mod-override-cursor"),document.body.classList.add("p-mod-override-cursor"),new n.DisposableDelegate((function(){r===t&&(document.body.style.cursor="",document.body.classList.remove("lm-mod-override-cursor"),document.body.classList.remove("p-mod-override-cursor"))}))};var t=0}(i||(i={})),function(e){e.SCROLL_EDGE_SIZE=20,e.validateAction=function(e,o){return t[e]&r[o]?e:"none"},e.createMouseEvent=function(e,t,r){var o=document.createEvent("MouseEvent");return o.initMouseEvent(e,!0,!0,window,0,0,0,t,r,!1,!1,!1,!1,0,null),o},e.findScrollTarget=function(t){for(var r=t.clientX,o=t.clientY,n=document.elementFromPoint(r,o);n;n=n.parentElement){var i=n.hasAttribute("data-lm-dragscroll");if(i=i||n.hasAttribute("data-p-dragscroll")){var s=0,a=0;n===document.body&&(s=window.pageXOffset,a=window.pageYOffset);var c=n.getBoundingClientRect(),d=c.top+a,u=c.left+s,l=u+c.width,p=d+c.height;if(!(r<u||r>=l||o<d||o>=p)){var h=r-u+1,m=o-d+1,v=l-r,g=p-o,_=Math.min(h,m,v,g);if(!(_>e.SCROLL_EDGE_SIZE)){var f=void 0;switch(_){case g:f="bottom";break;case m:f="top";break;case v:f="right";break;case h:f="left";break;default:throw"unreachable"}var E=n.scrollWidth-n.clientWidth,y=n.scrollHeight-n.clientHeight,L=void 0;switch(f){case"top":L=y>0&&n.scrollTop>0;break;case"left":L=E>0&&n.scrollLeft>0;break;case"right":L=E>0&&n.scrollLeft<E;break;case"bottom":L=y>0&&n.scrollTop<y;break;default:throw"unreachable"}if(L)return{element:n,edge:f,distance:_}}}}}return null},e.dispatchDragEnter=function(e,t,r,n){if(!t)return null;var i=o("lm-dragenter",e,n,r),s=!t.dispatchEvent(i);return s?t:(i=o("p-dragenter",e,n,r),(s=!t.dispatchEvent(i))?t:t===document.body?r:(i=o("lm-dragenter",e,n,r),document.body.dispatchEvent(i),i=o("p-dragenter",e,n,r),document.body.dispatchEvent(i),document.body))},e.dispatchDragExit=function(e,t,r,n){if(t){var i=o("lm-dragexit",e,n,r);t.dispatchEvent(i),i=o("p-dragexit",e,n,r),t.dispatchEvent(i)}},e.dispatchDragLeave=function(e,t,r,n){if(t){var i=o("lm-dragleave",e,n,r);t.dispatchEvent(i),i=o("p-dragleave",e,n,r),t.dispatchEvent(i)}},e.dispatchDragOver=function(e,t,r){if(!t)return"none";var n=o("lm-dragover",e,r,null),i=!t.dispatchEvent(n);return i?n.dropAction:(n=o("p-dragover",e,r,null),(i=!t.dispatchEvent(n))?n.dropAction:"none")},e.dispatchDrop=function(e,t,r){if(!t)return"none";var n=o("lm-drop",e,r,null),i=!t.dispatchEvent(n);return i?n.dropAction:(n=o("p-drop",e,r,null),(i=!t.dispatchEvent(n))?n.dropAction:"none")};var t={none:0,copy:1,link:2,move:4},r={none:t.none,copy:t.copy,link:t.link,move:t.move,"copy-link":t.copy|t.link,"copy-move":t.copy|t.move,"link-move":t.link|t.move,all:t.copy|t.link|t.move};function o(e,t,r,o){var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,!0,!0,window,0,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,o),n.dropAction="none",n.mimeData=t.mimeData,n.proposedAction=t.proposedAction,n.supportedActions=t.supportedActions,n.source=t.source,n}}(o||(o={}))}}]);
//# sourceMappingURL=8809.3ccbac931a8783623281.js.map