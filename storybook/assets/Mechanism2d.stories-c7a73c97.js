import{s as x,i as d,k as M,Y as u,X as S}from"./property-293dc01c-d6840d48.js";import{n as $}from"./state-6b86eede-5fd1e84e.js";import{h as j}from"./query-b33b5ea2-b51c1579.js";import{x as w}from"./lit-element-37c36932.js";import{o as O}from"./style-map-4c049cd0.js";var A=Object.defineProperty,P=Object.getOwnPropertyDescriptor,h=(n,e,t,r)=>{for(var o=r>1?void 0:r?P(e,t):e,s=n.length-1,i;s>=0;s--)(i=n[s])&&(o=(r?i(e,t,o):i(o))||o);return r&&o&&A(e,t,o),o};function C(n){const e=(n==null?void 0:n.getChildren())??{};return Object.values(e).filter(t=>{var r;return t.hasChildren()&&((r=t.getChildren()[".type"])==null?void 0:r.getSourceValue())==="line"}).map(t=>{const r=t.getChildren();return{angle:r.angle.getSourceValue()??0,color:r.color.getSourceValue()??"#ffffff",length:r.length.getSourceValue()??1,weight:r.weight.getSourceValue()??1,children:C(t)}})}function V(n){const e=(n==null?void 0:n.getChildren())??{};return Object.values(e).filter(t=>t.hasChildren()).map(t=>({x:t.getChildren().x.getSourceValue()??0,y:t.getChildren().y.getSourceValue()??0,children:C(t)}))}class c extends M{constructor(){super(...arguments),this.backgroundColor="#000020",this.dims=[3,3],this.roots=[],this.mechanism2d=this.getMechanism2d()}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMech2dSize(){const{width:e,height:t}=this.getBoundingClientRect(),[r,o]=this.dims;return o/r*e<t?[e,o/r*e]:[r/o*t,t]}resized(){this.requestUpdate()}getSize(){const{width:e}=this.getBoundingClientRect();return e}updated(e){e.has("backgroundColor")&&this._svg.style.setProperty("background-color",this.backgroundColor),e.has("dims")&&this.requestUpdate()}updateMechanism2d(){this.mechanism2d=this.getMechanism2d(),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMechanism2d(){return{backgroundColor:this.backgroundColor,dims:this.dims,roots:this.roots}}render(){const[e,t]=this.getMech2dSize();return u`
      <svg
        style="width: ${e}px; height: ${t}px; background: ${this.mechanism2d.backgroundColor}"
      >
        ${this.mechanism2d.roots.map(r=>this.renderMechanism2dRoot(r))}
      </svg>
    `}renderMechanism2dRoot(e){const[t,r]=this.dims,[o,s]=this.getMech2dSize(),i=e.x/t*o,m=e.y/r*s;return u`
      <g style="transform: translate(${i}px, ${s-m}px)">
        ${e.children.map(p=>this.renderMechanism2dLine(p))}
      </g>
    `}renderMechanism2dLine(e){const[t]=this.dims,[r]=this.getMech2dSize(),o=r/t*e.length,s=e.angle*Math.PI/180,i=Math.cos(s)*o,m=-Math.sin(s)*o,p=Math.max(1,e.weight*2/3);return u`
      <line stroke=${e.color} stroke-width=${p} x1="0" y1="0" x2="${i}px" y2="${m}px"  />
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
  `;h([d({type:String,attribute:"background-color"})],c.prototype,"backgroundColor",2);h([d({type:Array})],c.prototype,"dims",2);h([d({type:Array})],c.prototype,"roots",2);h([j("svg")],c.prototype,"_svg",2);h([$()],c.prototype,"mechanism2d",2);customElements.get("frc-mechanism2d")||customElements.define("frc-mechanism2d",c);var R=Object.defineProperty,z=Object.getOwnPropertyDescriptor,g=(n,e,t,r)=>{for(var o=r>1?void 0:r?z(e,t):e,s=n.length-1,i;s>=0;s--)(i=n[s])&&(o=(r?i(e,t,o):i(o))||o);return r&&o&&R(e,t,o),o};class a extends M{constructor(){super(...arguments),this.backgroundColor="#000020",this.dims=[3,3],this.roots=[]}updateMechanism2d(){this.roots=this.source?V(this.source):[],requestAnimationFrame(()=>{this.updateMechanism2d()})}firstUpdated(){this.updateMechanism2d()}render(){return S`
      <frc-mechanism2d
        .roots=${this.roots}
        .backgroundColor=${this.backgroundColor}
        .dims=${this.dims}
      ></frc-mechanism2d>
    `}}a.styles=x`
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
  `;g([d({type:String,attribute:"background-color"})],a.prototype,"backgroundColor",2);g([d({type:Array})],a.prototype,"dims",2);g([d({type:Object})],a.prototype,"source",2);g([$()],a.prototype,"roots",2);console.log("MECHANISM WRAPPER",a);customElements.get("frc-mechanism2d-wrapper")||customElements.define("frc-mechanism2d-wrapper",a);const v={backgroundColor:"#000020",dims:[3,3],roots:[]},L={title:"FRC/Mechanism2d",tags:["autodocs"],component:"frc-mechanism2d",args:v,argTypes:{backgroundColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#000020"}}},dims:{control:"object",table:{category:"Properties",defaultValue:{summary:[3,3]}}},roots:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}}},decorators:[n=>w` <div
      style=${O({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${n()}
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
\`\`\``}}}};function F(n={}){return{args:{...v,...n},render:t=>w`
      <frc-mechanism2d
        class=${t.theme}
        background-color=${t.backgroundColor}
        dims=${JSON.stringify(t.dims)}
        roots=${JSON.stringify(t.roots)}
      ></frc-mechanism2d>
    `}}const l=F({roots:[{x:1.5,y:.5,children:[{angle:90,color:"#00FF00",length:.5334,weight:10,children:[{angle:0,color:"#008000",length:.5,weight:6,children:[]}]}]}]});var y,f,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`createMechanism2dStory({
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
})`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const N=["Mechanism2d"];export{l as Mechanism2d,N as __namedExportsOrder,L as default};
