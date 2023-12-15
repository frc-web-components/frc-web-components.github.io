import{i as h,s as p,x as f}from"./lit-element-336289fd.js";import{n as u}from"./property-a00a2a3e.js";import{r as m}from"./state-0f1c18cb.js";import{e as c}from"./query-5f0bf39c.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(d,t,e,o)=>{for(var s=o>1?void 0:o?b(t,e):t,r=d.length-1,i;r>=0;r--)(i=d[r])&&(s=(o?i(t,e,s):i(s))||s);return o&&s&&y(t,e,s),s};function g(d,t,e){return Math.min(e,Math.max(d,t))}class n extends p{constructor(){super(...arguments),this._min=-1,this._max=1,this.value=0,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(t){const e=this._min;this._min=t,this.requestUpdate("min",e)}get max(){return Math.max(this._min,this._max)}set max(t){const e=this._max;this._max=t,this.requestUpdate("max",e)}updateForeground(){const{min:t,max:e,center:o,value:s,foreground:r}=this,i=g(s,t,e);e<o?(r.style.setProperty("--foreground-width",`${Math.abs(i-e)/(e-t)*100}%`),r.style.setProperty("--foreground-left","auto"),r.style.setProperty("--foreground-right","0")):t>o?(r.style.setProperty("--foreground-width",`${Math.abs(i-t)/(e-t)*100}%`),r.style.setProperty("--foreground-left","0"),r.style.setProperty("--foreground-right","auto")):i>o?(r.style.setProperty("--foreground-width",`${Math.abs(i-o)/(e-t)*100}%`),r.style.setProperty("--foreground-left",`${Math.abs(t-o)/(e-t)*100}%`),r.style.setProperty("--foreground-right","auto")):(r.style.setProperty("--foreground-width",`${Math.abs(i-o)/(e-t)*100}%`),r.style.setProperty("--foreground-left","auto"),r.style.setProperty("--foreground-right",`${Math.abs(e-o)/(e-t)*100}%`))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(t){const{left:e,width:o}=this.getBoundingClientRect(),s=t.clientX-e,r=g(s/o,0,1),i=this.min+(this.max-this.min)*r,l=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:i}});this.dispatchEvent(l)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",t=>{this.dragging&&this.setDragPosition(t)}),window.addEventListener("mouseup",()=>{this.dragging=!1})}onMouseDown(t){this.dragging=!0,this.setDragPosition(t)}render(){return f`
      <div part="foreground" draggble="false"></div>
      <div class="content" draggable="false">
        <slot></slot>
      </div>
      <div part="dragger" @mousedown="${this.onMouseDown}"></div>
    `}}n.styles=h`
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
  `;a([u({type:Number})],n.prototype,"value",2);a([u({type:Number})],n.prototype,"center",2);a([m()],n.prototype,"dragging",2);a([u({type:Number})],n.prototype,"min",1);a([u({type:Number})],n.prototype,"max",1);a([c("[part=foreground]")],n.prototype,"foreground",2);customElements.get("frc-bar")||customElements.define("frc-bar",n);
