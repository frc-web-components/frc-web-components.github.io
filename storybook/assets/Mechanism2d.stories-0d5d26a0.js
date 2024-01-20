import{s as x,i as a,k as M,Y as u,X as S}from"./property-7226fcdb-ca5eacb2.js";import{n as $}from"./state-504849b6-2441cf81.js";import{h as j}from"./query-b33b5ea2-b51c1579.js";import{x as w}from"./lit-element-fe64f99e.js";import{o as O}from"./style-map-cd083d51.js";var A=Object.defineProperty,V=Object.getOwnPropertyDescriptor,h=(o,e,t,r)=>{for(var n=r>1?void 0:r?V(e,t):e,s=o.length-1,i;s>=0;s--)(i=o[s])&&(n=(r?i(e,t,n):i(n))||n);return r&&n&&A(e,t,n),n};function v(o){const e=(o==null?void 0:o.getChildren())??{};return Object.values(e).filter(t=>{var r;return t.hasChildren()&&((r=t.getChildren()[".type"])==null?void 0:r.getSourceValue())==="line"}).map(t=>{const r=t.getChildren();return{angle:r.angle.getSourceValue()??0,color:r.color.getSourceValue()??"#ffffff",length:r.length.getSourceValue()??1,weight:r.weight.getSourceValue()??1,children:v(t)}})}function P(o){const e=(o==null?void 0:o.getChildren())??{};return Object.values(e).filter(t=>t.hasChildren()).map(t=>({x:t.getChildren().x.getSourceValue()??0,y:t.getChildren().y.getSourceValue()??0,children:v(t)}))}class c extends M{constructor(){super(...arguments),this.backgroundColor="#000020",this.dims=[3,3],this.roots=[],this.mechanism2d=this.getMechanism2d()}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMech2dSize(){const{width:e,height:t}=this.getBoundingClientRect(),[r,n]=this.dims;return n/r*e<t?[e,n/r*e]:[r/n*t,t]}resized(){this.requestUpdate()}getSize(){const{width:e}=this.getBoundingClientRect();return e}updated(e){e.has("backgroundColor")&&this._svg.style.setProperty("background-color",this.backgroundColor),e.has("dims")&&this.requestUpdate()}updateMechanism2d(){this.mechanism2d=this.getMechanism2d(),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMechanism2d(){return{backgroundColor:this.backgroundColor,dims:this.dims,roots:this.roots}}render(){const[e,t]=this.getMech2dSize();return u`
      <svg
        style="width: ${e}px; height: ${t}px; background: ${this.mechanism2d.backgroundColor}"
      >
        ${this.mechanism2d.roots.map(r=>this.renderMechanism2dRoot(r))}
      </svg>
    `}renderMechanism2dRoot(e){const[t,r]=this.dims,[n,s]=this.getMech2dSize(),i=e.x/t*n,m=e.y/r*s;return u`
      <g style="transform: translate(${i}px, ${s-m}px)">
        ${e.children.map(g=>this.renderMechanism2dLine(g))}
      </g>
    `}renderMechanism2dLine(e){const[t]=this.dims,[r]=this.getMech2dSize(),n=r/t*e.length,s=e.angle*Math.PI/180,i=Math.cos(s)*n,m=-Math.sin(s)*n,g=Math.max(1,e.weight*2/3);return u`
      <line stroke=${e.color} stroke-width=${g} x1="0" y1="0" x2="${i}px" y2="${m}px"  />
      <g style="transform: translate(${i}px, ${m}px) rotate(${-e.angle}deg)">
        ${e.children.map(k=>this.renderMechanism2dLine(k))}
      </g>
    `}}c.styles=x`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 300px;
      height: 300px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;h([a({type:String,attribute:"background-color"})],c.prototype,"backgroundColor",2);h([a({type:Array})],c.prototype,"dims",2);h([a({type:Array})],c.prototype,"roots",2);h([j("svg")],c.prototype,"_svg",2);h([$()],c.prototype,"mechanism2d",2);customElements.get("frc-mechanism2d")||customElements.define("frc-mechanism2d",c);var z=Object.defineProperty,F=Object.getOwnPropertyDescriptor,p=(o,e,t,r)=>{for(var n=r>1?void 0:r?F(e,t):e,s=o.length-1,i;s>=0;s--)(i=o[s])&&(n=(r?i(e,t,n):i(n))||n);return r&&n&&z(e,t,n),n};class d extends M{constructor(){super(...arguments),this.backgroundColor="#000020",this.dims=[3,3],this.roots=[]}updateMechanism2d(){this.roots=this.source?P(this.source):[],requestAnimationFrame(()=>{this.updateMechanism2d()})}firstUpdated(){this.updateMechanism2d()}render(){return S`
      <frc-mechanism2d
        .roots=${this.roots}
        .backgroundColor=${this.backgroundColor}
        .dims=${this.dims}
      ></frc-mechanism2d>
    `}}d.styles=x`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 300px;
      height: 300px;
    }

    frc-mechanism2d {
      width: 100%;
      height: 100%;
    }
  `;p([a({type:String,attribute:"background-color"})],d.prototype,"backgroundColor",2);p([a({type:Array})],d.prototype,"dims",2);p([a({type:Object})],d.prototype,"source",2);p([$()],d.prototype,"roots",2);customElements.get("frc-mechanism2d-wrapper")||customElements.define("frc-mechanism2d-wrapper",d);const C={backgroundColor:"#000020",dims:[3,3],roots:[]},L={title:"FRC/Mechanism2d",tags:["autodocs"],component:"frc-mechanism2d",args:C,argTypes:{backgroundColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#000020"}}},dims:{control:"object",table:{category:"Properties",defaultValue:{summary:[3,3]}}},roots:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}}},decorators:[o=>w` <div
      style=${O({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${o()}
    </div>`],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/mechanism2d";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-mechanism2d></frc-mechanism2d>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Mechanism2d } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Mechanism2d />\r
\`\`\``}}}};function R(o={}){return{args:{...C,...o},render:t=>w`
      <frc-mechanism2d
        class=${t.theme}
        background-color=${t.backgroundColor}
        dims=${JSON.stringify(t.dims)}
        roots=${JSON.stringify(t.roots)}
      ></frc-mechanism2d>
    `}}const l=R({roots:[{x:1.5,y:.5,children:[{angle:90,color:"#00FF00",length:.5334,weight:10,children:[{angle:0,color:"#008000",length:.5,weight:6,children:[]}]}]}]});var y,f,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`createMechanism2dStory({
  roots: [{
    x: 1.5,
    y: 0.5,
    children: [{
      angle: 90,
      color: '#00FF00',
      length: 0.5334,
      weight: 10,
      children: [{
        angle: 0,
        color: '#008000',
        length: 0.5,
        weight: 6,
        children: []
      }]
    }]
  }]
})`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const D=["Mechanism2d"];export{l as Mechanism2d,D as __namedExportsOrder,L as default};
