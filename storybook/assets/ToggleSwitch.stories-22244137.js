import{s as b,i as k,k as x,X as v}from"./property-293dc01c-d6840d48.js";import{x as s}from"./lit-element-37c36932.js";import{o as S}from"./style-map-4c049cd0.js";var T=Object.defineProperty,$=Object.getOwnPropertyDescriptor,P=(c,e,r,o)=>{for(var t=o>1?void 0:o?$(e,r):e,l=c.length-1,a;l>=0;l--)(a=c[l])&&(t=(o?a(e,r,t):a(t))||t);return o&&t&&T(e,r,t),t};class g extends x{constructor(){super(...arguments),this.toggled=!1}firstUpdated(){new ResizeObserver(()=>this.resized()).observe(this)}resized(){const e=this.getBoundingClientRect(),{width:r,height:o}=e,t=this.renderRoot.querySelector("[part=switch]");t&&(t.style.borderRadius=`${r}px`,t.style.setProperty("--circle-width",`${o*.8}px`),t.style.setProperty("--circle-height",`${o*.8}px`),t.style.setProperty("--circle-left",`${r/2-o*.8}px`),t.style.setProperty("--circle-top",`${o*.1}px`),t.style.setProperty("--circle-translate-x",`${r-o}px`))}onClick(){this.toggled=!this.toggled;const e=new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return v`
      <label class="switch" @click="${this.onClick}">
        <input type="checkbox" .checked="${this.toggled}" disabled />
        <span part="switch">
          <span part="knob"></span>
        </span>
      </label>
    `}}g.styles=b`
    :host {
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      margin-bottom: 0;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    [part='switch'] {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--frc-toggle-switch-color, #ccc);
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    [part='knob'] {
      position: absolute;
      display: inline-block;
      content: '';
      height: var(--circle-height);
      width: var(--circle-width);
      left: var(--circle-top);
      top: var(--circle-top);
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
    input:checked + [part='switch'] {
      background-color: #2196f3;
    }
    input:focus + [part='switch'] {
      box-shadow: 0 0 1px #2196f3;
    }
    input:checked + [part='switch'] [part='knob'] {
      transform: translateX(var(--circle-translate-x));
    }
  `;P([k({type:Boolean})],g.prototype,"toggled",2);customElements.get("frc-toggle-switch")||customElements.define("frc-toggle-switch",g);const w={toggled:!1,theme:"light","background-color":"#fff","--frc-toggle-switch-color":"#ccc"},A={title:"FRC/Toggle Switch",tags:["autodocs"],component:"frc-toggle-switch",args:w,argTypes:{toggled:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-toggle-switch-color":{table:{category:"Styles",defaultValue:{summary:"#ccc"}}}},decorators:[(c,e)=>{const o=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",t=e.args["background-color"];return s` <div
        style=${S({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?t:o})}
      >
        ${c()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/toggle-switch";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-toggle-switch toggled></frc-toggle-switch>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { ToggleSwitch } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<ToggleSwitch toggled />\r
\`\`\``}}}};function C(c){return c.theme==="custom"?s`
      <style>
        .custom {
          --frc-toggle-switch-color: ${c["--frc-toggle-switch-color"]};
        }
      </style>
    `:c.theme==="dark"?s`
      <style>
        .dark {
          --frc-toggle-switch-color: #999;
        }
      </style>
    `:s`
    <style>
      .light {
        --frc-toggle-switch-color: #ccc;
      }
    </style>
  `}function y(c={}){return{args:{...w,...c},render:r=>s`
      ${C(r)}
      <frc-toggle-switch
        class=${r.theme}
        ?toggled=${r.toggled}
      ></frc-toggle-switch>
    `}}const i=y({theme:"light"}),n=y({theme:"dark"});var h,d,p;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`createToggleSwitchStory({
  theme: 'light'
})`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`createToggleSwitchStory({
  theme: 'dark'
})`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const D=["LightTheme","DarkTheme"];export{n as DarkTheme,i as LightTheme,D as __namedExportsOrder,A as default};
