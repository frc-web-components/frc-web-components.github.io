var M=Object.defineProperty;var P=(n,t,e)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>(P(n,typeof t!="symbol"?t+"":t,e),e);import{s as m,r as x,$ as y}from"./lit-element-ac510585.js";import{s as N}from"./transform-e88a9a97.js";const z="frc-bar",E={dashboard:{topLevel:!1,displayName:"Bar"},properties:{value:{type:Number},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},center:{type:Number}}};function v(n,t,e){return Math.min(e,Math.max(n,t))}class c extends m{constructor(){super(),this.value=0,this.min=-1,this.max=1,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(t){const e=this._min;this._min=t,this.requestUpdate("min",e)}get max(){return Math.max(this._min,this._max)}set max(t){const e=this._max;this._max=t,this.requestUpdate("max",e)}updateForeground(){const{min:t,max:e,center:i,value:h}=this,a=v(h,t,e),s=this.shadowRoot.querySelector("[part=foreground]");e<i?(s.style.setProperty("--foreground-width",Math.abs(a-e)/(e-t)*100+"%"),s.style.setProperty("--foreground-left","auto"),s.style.setProperty("--foreground-right","0")):t>i?(s.style.setProperty("--foreground-width",Math.abs(a-t)/(e-t)*100+"%"),s.style.setProperty("--foreground-left","0"),s.style.setProperty("--foreground-right","auto")):a>i?(s.style.setProperty("--foreground-width",Math.abs(a-i)/(e-t)*100+"%"),s.style.setProperty("--foreground-left",Math.abs(t-i)/(e-t)*100+"%"),s.style.setProperty("--foreground-right","auto")):(s.style.setProperty("--foreground-width",Math.abs(a-i)/(e-t)*100+"%"),s.style.setProperty("--foreground-left","auto"),s.style.setProperty("--foreground-right",Math.abs(e-i)/(e-t)*100+"%"))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(t){const{left:e,width:i}=this.getBoundingClientRect(),h=t.clientX-e,a=v(h/i,0,1),s=this.min+(this.max-this.min)*a,l=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:s}});this.dispatchEvent(l)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",t=>{this.dragging&&this.setDragPosition(t)}),window.addEventListener("mouseup",t=>{this.dragging=!1})}onMouseDown(t){this.dragging=!0,this.setDragPosition(t)}render(){return y`
      <div part="foreground" draggble="false"></div>
      <div class="content" draggable="false">
        <slot></slot>
      </div>
      <div part="dragger" @mousedown="${this.onMouseDown}"></div>
    `}}p(c,"properties",E.properties),p(c,"styles",x`
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
  `);customElements.define(z,c);const B="frc-table-axis",T={dashboard:{topLevel:!1,displayName:"Table Axis"},properties:{vertical:{type:Boolean},ticks:{type:Number},range:{type:Array},unit:{type:String}}};class f extends m{constructor(){super(),this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null,this.vertical=!1,this.ticks=0,this.range=[],this.unit=""}setAxis(t){let e=this.vertical?this.clientHeight:this.clientWidth,i=e/Math.max(1,this.ticks-1);const h=this.range?30:10,a=this.range&&this.range.length===2,s=a?this.range[0]:0,l=a?this.range[1]:0;let g=-1/0,u=-1/0;if(this.prevSize===e&&this.prevTicks===this.ticks&&this.prevMin===s&&this.prevMax===l&&!t.has("unit"))return;this.prevSize=e,this.prevTicks=this.ticks,this.prevMin=s,this.prevMax=l,this.shadowRoot.getElementById("svg").innerHTML="";let d=N(this.shadowRoot.getElementById("svg")).attr("width",this.vertical?h:e).attr("height",this.vertical?e:h);for(let r=0;r<this.ticks;r++){if(this.vertical?d.append("line").attr("x1",0).attr("y1",r*i).attr("x2",8).attr("y2",r*i):d.append("line").attr("x1",r*i).attr("y1",0).attr("x2",r*i).attr("y2",8),a)if(this.vertical){const o=s+r*(l-s)/Math.max(this.ticks-1,1);d.append("text").attr("x",-3).attr("y",r*i+4).attr("text-anchor","end").text(o.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{let o=(r-g)*i,b=g*i+o*.4;if(u<0||b>u){const w=s+r*(l-s)/Math.max(this.ticks-1,1);let k=d.append("text").attr("x",r*i).attr("y",25).attr("text-anchor","middle").text(w.toFixed(2)+(this.unit?` ${this.unit}`:""));u=r*i+k.node().getBBox().width/2,g=r}}if(r<this.ticks-1)for(let o=1;o<4;o++)this.vertical?d.append("line").attr("x1",4).attr("y1",r*i+o*i/4).attr("x2",8).attr("y2",r*i+o*i/4):d.append("line").attr("x1",r*i+o*i/4).attr("y1",0).attr("x2",r*i+o*i/4).attr("y2",4)}}firstUpdated(){new ResizeObserver(()=>{this.requestUpdate()}).observe(this)}updated(t){this.setAxis(t)}render(){return y` <svg id="svg"></svg> `}}p(f,"styles",x`
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
  `),p(f,"properties",T.properties);customElements.define(B,f);
//# sourceMappingURL=table-axis-4d38348b.js.map
