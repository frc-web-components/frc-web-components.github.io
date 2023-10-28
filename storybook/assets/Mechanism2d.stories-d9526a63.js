import{r as M,s as $,y as g,$ as f}from"./lit-element-ac510585.js";import{e as l}from"./query-assigned-elements-bd4ea1f7.js";import{t as v}from"./state-54413a7c.js";import{i as w}from"./query-839578ff.js";import{i as C}from"./style-map-70149a85.js";var k=Object.defineProperty,S=Object.getOwnPropertyDescriptor,a=(n,e,t,s)=>{for(var r=s>1?void 0:s?S(e,t):e,o=n.length-1,i;o>=0;o--)(i=n[o])&&(r=(s?i(e,t,r):i(r))||r);return s&&r&&k(e,t,r),r};class c extends ${constructor(){super(...arguments),this.backgroundColor="#000020",this.dims=[3,3],this.roots=[],this.mechanism2d=this.getMechanism2d()}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMech2dSize(){const{width:e,height:t}=this.getBoundingClientRect(),[s,r]=this.dims;return r/s*e<t?[e,r/s*e]:[s/r*t,t]}resized(){this.requestUpdate()}getSize(){const{width:e}=this.getBoundingClientRect();return e}updated(e){e.has("backgroundColor")&&this._svg.style.setProperty("background-color",this.backgroundColor),e.has("dims")&&this.requestUpdate()}updateMechanism2d(){this.mechanism2d=this.getMechanism2d(),requestAnimationFrame(()=>{this.updateMechanism2d()})}getMechanism2d(){return{backgroundColor:this.backgroundColor,dims:this.dims,roots:this.roots}}render(){const[e,t]=this.getMech2dSize();return g`
      <svg
        style="width: ${e}px; height: ${t}px; background: ${this.mechanism2d.backgroundColor}"
      >
        ${this.mechanism2d.roots.map(s=>this.renderMechanism2dRoot(s))}
      </svg>
    `}renderMechanism2dRoot(e){const[t,s]=this.dims,[r,o]=this.getMech2dSize(),i=e.x/t*r,h=e.y/s*o;return g`
      <g style="transform: translate(${i}px, ${o-h}px)">
        ${e.children.map(m=>this.renderMechanism2dLine(m))}
      </g>
    `}renderMechanism2dLine(e){const[t]=this.dims,[s]=this.getMech2dSize(),r=s/t*e.length,o=e.angle*Math.PI/180,i=Math.cos(o)*r,h=-Math.sin(o)*r,m=Math.max(1,e.weight*2/3);return g`
      <line stroke=${e.color} stroke-width=${m} x1="0" y1="0" x2="${i}px" y2="${h}px"  />
      <g style="transform: translate(${i}px, ${h}px) rotate(${-e.angle}deg)">
        ${e.children.map(x=>this.renderMechanism2dLine(x))}
      </g>
    `}}c.styles=M`
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
  `;a([l({type:String,attribute:"background-color"})],c.prototype,"backgroundColor",2);a([l({type:Array})],c.prototype,"dims",2);a([l({type:Array})],c.prototype,"roots",2);a([w("svg")],c.prototype,"_svg",2);a([v()],c.prototype,"mechanism2d",2);customElements.get("frc-mechanism2d")||customElements.define("frc-mechanism2d",c);const b={backgroundColor:"#000020",dims:[3,3],roots:[]},R={title:"FRC/Mechanism2d",tags:["autodocs"],component:"frc-mechanism2d",args:b,argTypes:{backgroundColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#000020"}}},dims:{control:"object",table:{category:"Properties",defaultValue:{summary:[3,3]}}},roots:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}}},decorators:[n=>f` <div
      style=${C({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${n()}
    </div>`]};function z(n={}){return{args:{...b,...n},render:t=>f`
      <frc-mechanism2d
        class=${t.theme}
        background-color=${t.backgroundColor}
        dims=${JSON.stringify(t.dims)}
        roots=${JSON.stringify(t.roots)}
      ></frc-mechanism2d>
    `}}const d=z({roots:[{x:1.5,y:.5,children:[{angle:90,color:"#00FF00",length:.5334,weight:10,children:[{angle:0,color:"#008000",length:.5,weight:6,children:[]}]}]}]});var p,u,y;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`createMechanism2dStory({
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
})`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const j=["Mechanism2d"];export{d as Mechanism2d,j as __namedExportsOrder,R as default};
//# sourceMappingURL=Mechanism2d.stories-d9526a63.js.map
