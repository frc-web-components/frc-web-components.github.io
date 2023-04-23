import{r as w,s as M,$ as P}from"./lit-element-ac510585.js";import{e as l}from"./query-assigned-elements-bd4ea1f7.js";import{i as _}from"./query-99a7b366.js";import{s as O}from"./transform-e88a9a97.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(a){return l({...a,state:!0})}var D=Object.defineProperty,E=Object.getOwnPropertyDescriptor,f=(a,t,r,e)=>{for(var s=e>1?void 0:e?E(t,r):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(e?o(t,r,s):o(s))||s);return e&&s&&D(t,r,s),s};function b(a,t,r){return Math.min(r,Math.max(a,t))}class g extends M{constructor(){super(...arguments),this._min=-1,this._max=1,this.value=0,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(t){const r=this._min;this._min=t,this.requestUpdate("min",r)}get max(){return Math.max(this._min,this._max)}set max(t){const r=this._max;this._max=t,this.requestUpdate("max",r)}updateForeground(){const{min:t,max:r,center:e,value:s,foreground:i}=this,o=b(s,t,r);r<e?(i.style.setProperty("--foreground-width",`${Math.abs(o-r)/(r-t)*100}%`),i.style.setProperty("--foreground-left","auto"),i.style.setProperty("--foreground-right","0")):t>e?(i.style.setProperty("--foreground-width",`${Math.abs(o-t)/(r-t)*100}%`),i.style.setProperty("--foreground-left","0"),i.style.setProperty("--foreground-right","auto")):o>e?(i.style.setProperty("--foreground-width",`${Math.abs(o-e)/(r-t)*100}%`),i.style.setProperty("--foreground-left",`${Math.abs(t-e)/(r-t)*100}%`),i.style.setProperty("--foreground-right","auto")):(i.style.setProperty("--foreground-width",`${Math.abs(o-e)/(r-t)*100}%`),i.style.setProperty("--foreground-left","auto"),i.style.setProperty("--foreground-right",`${Math.abs(r-e)/(r-t)*100}%`))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(t){const{left:r,width:e}=this.getBoundingClientRect(),s=t.clientX-r,i=b(s/e,0,1),o=this.min+(this.max-this.min)*i,u=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:o}});this.dispatchEvent(u)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",t=>{this.dragging&&this.setDragPosition(t)}),window.addEventListener("mouseup",()=>{this.dragging=!1})}onMouseDown(t){this.dragging=!0,this.setDragPosition(t)}render(){return P`
      <div part="foreground" draggble="false"></div>
      <div class="content" draggable="false">
        <slot></slot>
      </div>
      <div part="dragger" @mousedown="${this.onMouseDown}"></div>
    `}}g.styles=w`
    :host {
      display: inline-block;
      position: relative;
      width: 300px;
      height: 20px;
      background: var(--frc-bar-background, #ddd);
      color: var(--frc-bar-color, black);
      font-size: 15px;
      line-height: 18px;
      text-align: center;
    }

    [part='dragger'] {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    }

    [part='foreground'] {
      position: absolute;
      top: 0;
      height: 100%;
      background: var(--frc-bar-foreground, lightblue);
      border-radius: 3px;
      width: var(--foreground-width);
      left: var(--foreground-left);
      right: var(--foreground-right);
      pointer-events: none;
    }

    .content {
      position: relative;
    }
  `;f([l({type:Number})],g.prototype,"value",2);f([l({type:Number})],g.prototype,"center",2);f([v()],g.prototype,"dragging",2);f([l({type:Number})],g.prototype,"min",1);f([l({type:Number})],g.prototype,"max",1);f([_("[part=foreground]")],g.prototype,"foreground",2);customElements.get("frc-bar")||customElements.define("frc-bar",g);var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,d=(a,t,r,e)=>{for(var s=e>1?void 0:e?B(t,r):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(e?o(t,r,s):o(s))||s);return e&&s&&T(t,r,s),s};class h extends M{constructor(){super(...arguments),this.vertical=!1,this.ticks=0,this.range=[],this.unit="",this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null}setAxis(t){var y;const r=this.vertical?this.clientHeight:this.clientWidth,e=r/Math.max(1,this.ticks-1),s=this.range?30:10,i=this.range&&this.range.length===2,o=i?this.range[0]:0,u=i?this.range[1]:0;let m=-1/0,x=-1/0;if(this.prevSize===r&&this.prevTicks===this.ticks&&this.prevMin===o&&this.prevMax===u&&!t.has("unit"))return;this.prevSize=r,this.prevTicks=this.ticks,this.prevMin=o,this.prevMax=u,this.svg.innerHTML="";const c=O(this.svg).attr("width",this.vertical?s:r).attr("height",this.vertical?r:s);for(let n=0;n<this.ticks;n+=1){if(this.vertical?c.append("line").attr("x1",0).attr("y1",n*e).attr("x2",8).attr("y2",n*e):c.append("line").attr("x1",n*e).attr("y1",0).attr("x2",n*e).attr("y2",8),i)if(this.vertical){const p=o+n*(u-o)/Math.max(this.ticks-1,1);c.append("text").attr("x",-3).attr("y",n*e+4).attr("text-anchor","end").text(p.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{const p=(n-m)*e,k=m*e+p*.4;if(x<0||k>x){const $=o+n*(u-o)/Math.max(this.ticks-1,1),z=c.append("text").attr("x",n*e).attr("y",25).attr("text-anchor","middle").text($.toFixed(2)+(this.unit?` ${this.unit}`:""));x=n*e+(((y=z.node())==null?void 0:y.getBBox().width)??0)/2,m=n}}if(n<this.ticks-1)for(let p=1;p<4;p+=1)this.vertical?c.append("line").attr("x1",4).attr("y1",n*e+p*e/4).attr("x2",8).attr("y2",n*e+p*e/4):c.append("line").attr("x1",n*e+p*e/4).attr("y1",0).attr("x2",n*e+p*e/4).attr("y2",4)}}firstUpdated(){new ResizeObserver(()=>{this.requestUpdate()}).observe(this)}updated(t){this.setAxis(t)}render(){return P` <svg id="svg"></svg> `}}h.styles=w`
    :host {
      display: block;
    }

    :host([vertical]) {
      height: 100%;
    }

    :host(:not([vertical])) {
      width: 100%;
    }

    svg {
      overflow: visible;
    }

    line {
      stroke: rgb(150, 150, 150);
      stroke-width: 2;
    }

    text {
      font-weight: normal;
      font-size: 13px;
      fill: var(--frc-tab-axis-text-color, #000);
    }
  `;d([l({type:Boolean})],h.prototype,"vertical",2);d([l({type:Number})],h.prototype,"ticks",2);d([l({type:Array})],h.prototype,"range",2);d([l({type:String})],h.prototype,"unit",2);d([v()],h.prototype,"prevSize",2);d([v()],h.prototype,"prevTicks",2);d([v()],h.prototype,"prevMin",2);d([v()],h.prototype,"prevMax",2);d([_("#svg")],h.prototype,"svg",2);customElements.get("frc-table-axis")||customElements.define("frc-table-axis",h);
//# sourceMappingURL=table-axis-856d24ca.js.map
