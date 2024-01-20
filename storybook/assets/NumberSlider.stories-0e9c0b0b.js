import{s as $,i as m,k as w,X as T}from"./property-7226fcdb-ca5eacb2.js";import{x as s}from"./lit-element-fe64f99e.js";import{o as N}from"./style-map-cd083d51.js";var C=Object.defineProperty,j=Object.getOwnPropertyDescriptor,l=(r,e,t,n)=>{for(var o=n>1?void 0:n?j(e,t):e,u=r.length-1,d;u>=0;u--)(d=r[u])&&(o=(n?d(e,t,o):d(o))||o);return n&&o&&C(e,t,o),o},E=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},V=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},I=(r,e,t)=>(E(r,e,"access private method"),t),h,k;class a extends w{constructor(){super(...arguments),V(this,h),this.value=0,this.min=-1,this.max=1,this.blockIncrement=.05}onChange(e){this.value=parseFloat(e.target.value),I(this,h,k).call(this)}firstUpdated(){setTimeout(()=>{const e=this.renderRoot.querySelector("#slider");e&&(e.value=this.value)})}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max),n=Math.max(e,Math.min(this.value,t));return T`
      <div class="slider-container">
        <input
          id="slider"
          type="range"
          .value="${n.toString()}"
          min="${e}"
          max="${t}"
          step="${this.blockIncrement}"
          @change="${this.onChange}"
        />

        <frc-axis ticks="5" min=${e} max=${t}></frc-axis>
      </div>
    `}}h=new WeakSet;k=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))};a.styles=$`
    :host {
      display: inline-block;
      height: 50px;
      width: 300px;
    }

    .slider-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
    }

    input {
      width: 100%;
    }

    table-axis {
      width: calc(85% - 14px);
      max-width: calc(100% - 74px);
      display: block;
    }
  `;l([m({type:Number})],a.prototype,"value",2);l([m({type:Number})],a.prototype,"min",2);l([m({type:Number})],a.prototype,"max",2);l([m({type:Number,attribute:"block-increment"})],a.prototype,"blockIncrement",2);customElements.get("frc-number-slider")||customElements.define("frc-number-slider",a);const v={value:0,min:-1,max:1,blockIncrement:.05,theme:"light","background-color":"#fff","--frc-axis-text-color":"black"},M={title:"FRC/Number Slider",tags:["autodocs"],component:"frc-number-slider",args:v,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},blockIncrement:{table:{category:"Properties",defaultValue:{summary:.05}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,e)=>{const n=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=e.args["background-color"];return s` <div
        style=${N({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?o:n})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/number-slider";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-number-slider value="0" min="-1" max="1"></frc-number-slider>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { NumberSlider } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<NumberSlider value={0} min={-1} max={1} />\r
\`\`\``}}}};function P(r){return r.theme==="custom"?s`
      <style>
        .custom {
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?s`
      <style>
        .dark {
          --frc-axis-text-color: white;
        }
      </style>
    `:s`
    <style>
      .light {
        --frc-axis-text-color: black;
      }
    </style>
  `}function S(r={}){return{args:{...v,...r},render:t=>s`
      ${P(t)}
      <frc-number-slider
        class=${t.theme}
        value=${t.value}
        min=${t.min}
        max=${t.max}
        block-increment=${t.blockIncrement}
      ></frc-number-slider>
    `}}const c=S({theme:"light"}),i=S({theme:"dark"});var p,f,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`createNumberSliderStory({
  theme: 'light'
})`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`createNumberSliderStory({
  theme: 'dark'
})`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const R=["LightTheme","DarkTheme"];export{i as DarkTheme,c as LightTheme,R as __namedExportsOrder,M as default};
