import{s as k,i as l,k as M,X as b}from"./property-7226fcdb-ca5eacb2.js";import{n as x}from"./state-504849b6-2441cf81.js";import{h as w}from"./query-b33b5ea2-b51c1579.js";import{E as z}from"./transform-bc2573b1-2dde8094.js";var T=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(d,n,p,r)=>{for(var t=r>1?void 0:r?S(n,p):n,h=d.length-1,s;h>=0;h--)(s=d[h])&&(t=(r?s(n,p,t):s(t))||t);return r&&t&&T(n,p,t),t};class e extends M{constructor(){super(...arguments),this.vertical=!1,this.ticks=5,this.min=-1,this.max=1,this.unit="",this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null}setAxis(n){var p;const r=this.vertical?this.clientHeight:this.clientWidth,t=r/Math.max(1,this.ticks-1),h=30,{min:s,max:v}=this;let y=-1/0,m=-1/0;if(this.prevSize===r&&this.prevTicks===this.ticks&&this.prevMin===s&&this.prevMax===v&&!n.has("unit")&&!n.has("vertical"))return;this.prevSize=r,this.prevTicks=this.ticks,this.prevMin=s,this.prevMax=v,this.svg.innerHTML="";const c=z(this.svg).attr("width",this.vertical?h:r).attr("height",this.vertical?r:h);for(let i=0;i<this.ticks;i+=1){if(this.vertical?c.append("line").attr("x1",0).attr("y1",i*t).attr("x2",8).attr("y2",i*t):c.append("line").attr("x1",i*t).attr("y1",0).attr("x2",i*t).attr("y2",8),this.vertical){const a=s+i*(v-s)/Math.max(this.ticks-1,1);c.append("text").attr("x",-3).attr("y",i*t+4).attr("text-anchor","end").text(a.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{const a=(i-y)*t,u=y*t+a*.4;if(m<0||u>m){const f=s+i*(v-s)/Math.max(this.ticks-1,1),g=c.append("text").attr("x",i*t).attr("y",25).attr("text-anchor","middle").text(f.toFixed(2)+(this.unit?` ${this.unit}`:""));m=i*t+(((p=g.node())==null?void 0:p.getBBox().width)??0)/2,y=i}}if(i<this.ticks-1)for(let a=1;a<4;a+=1)this.vertical?c.append("line").attr("x1",4).attr("y1",i*t+a*t/4).attr("x2",8).attr("y2",i*t+a*t/4):c.append("line").attr("x1",i*t+a*t/4).attr("y1",0).attr("x2",i*t+a*t/4).attr("y2",4)}}firstUpdated(){new ResizeObserver(()=>{this.requestUpdate()}).observe(this)}updated(n){this.setAxis(n)}render(){return b` <svg id="svg"></svg> `}}e.styles=k`
    :host {
      display: inline-block;
      position: relative;
    }

    :host([vertical]) {
      height: 100%;
    }

    :host(:not([vertical])) {
      width: 100%;
    }

    svg {
      overflow: visible;
      position: absolute;
      top: 0;
      left: 0;
    }

    line {
      stroke: rgb(150, 150, 150);
      stroke-width: 2;
    }

    text {
      font-weight: normal;
      font-size: 13px;
      fill: var(--frc-axis-text-color, #000);
    }
  `;o([l({type:Boolean})],e.prototype,"vertical",2);o([l({type:Number})],e.prototype,"ticks",2);o([l({type:Number})],e.prototype,"min",2);o([l({type:Number})],e.prototype,"max",2);o([l({type:String})],e.prototype,"unit",2);o([x()],e.prototype,"prevSize",2);o([x()],e.prototype,"prevTicks",2);o([x()],e.prototype,"prevMin",2);o([x()],e.prototype,"prevMax",2);o([w("#svg")],e.prototype,"svg",2);customElements.get("frc-axis")||customElements.define("frc-axis",e);
