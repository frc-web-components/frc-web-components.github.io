import{i as k,s as b,x as w}from"./lit-element-336289fd.js";import{n as c}from"./property-a00a2a3e.js";import{r as v}from"./state-0f1c18cb.js";import{e as M}from"./query-5f0bf39c.js";import{s as z}from"./transform-c376ec3f.js";var T=Object.defineProperty,O=Object.getOwnPropertyDescriptor,n=(x,s,p,t)=>{for(var r=t>1?void 0:t?O(s,p):s,o=x.length-1,h;o>=0;o--)(h=x[o])&&(r=(t?h(s,p,r):h(r))||r);return t&&r&&T(s,p,r),r};class i extends b{constructor(){super(...arguments),this.vertical=!1,this.ticks=5,this.min=-1,this.max=1,this.unit="",this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null}setAxis(s){var y;const p=this.vertical?this.clientHeight:this.clientWidth,t=p/Math.max(1,this.ticks-1),r=30,{min:o,max:h}=this;let f=-1/0,m=-1/0;if(this.prevSize===p&&this.prevTicks===this.ticks&&this.prevMin===o&&this.prevMax===h&&!s.has("unit")&&!s.has("vertical"))return;this.prevSize=p,this.prevTicks=this.ticks,this.prevMin=o,this.prevMax=h,this.svg.innerHTML="";const l=z(this.svg).attr("width",this.vertical?r:p).attr("height",this.vertical?p:r);for(let e=0;e<this.ticks;e+=1){if(this.vertical?l.append("line").attr("x1",0).attr("y1",e*t).attr("x2",8).attr("y2",e*t):l.append("line").attr("x1",e*t).attr("y1",0).attr("x2",e*t).attr("y2",8),this.vertical){const a=o+e*(h-o)/Math.max(this.ticks-1,1);l.append("text").attr("x",-3).attr("y",e*t+4).attr("text-anchor","end").text(a.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{const a=(e-f)*t,d=f*t+a*.4;if(m<0||d>m){const u=o+e*(h-o)/Math.max(this.ticks-1,1),g=l.append("text").attr("x",e*t).attr("y",25).attr("text-anchor","middle").text(u.toFixed(2)+(this.unit?` ${this.unit}`:""));m=e*t+(((y=g.node())==null?void 0:y.getBBox().width)??0)/2,f=e}}if(e<this.ticks-1)for(let a=1;a<4;a+=1)this.vertical?l.append("line").attr("x1",4).attr("y1",e*t+a*t/4).attr("x2",8).attr("y2",e*t+a*t/4):l.append("line").attr("x1",e*t+a*t/4).attr("y1",0).attr("x2",e*t+a*t/4).attr("y2",4)}}firstUpdated(){new ResizeObserver(()=>{this.requestUpdate()}).observe(this)}updated(s){console.log("changedProps:",s),this.setAxis(s)}render(){return w` <svg id="svg"></svg> `}}i.styles=k`
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
  `;n([c({type:Boolean})],i.prototype,"vertical",2);n([c({type:Number})],i.prototype,"ticks",2);n([c({type:Number})],i.prototype,"min",2);n([c({type:Number})],i.prototype,"max",2);n([c({type:String})],i.prototype,"unit",2);n([v()],i.prototype,"prevSize",2);n([v()],i.prototype,"prevTicks",2);n([v()],i.prototype,"prevMin",2);n([v()],i.prototype,"prevMax",2);n([M("#svg")],i.prototype,"svg",2);customElements.get("frc-axis")||customElements.define("frc-axis",i);
