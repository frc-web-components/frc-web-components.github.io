import{s as v,i as b,k as w,X as S}from"./property-7226fcdb-ca5eacb2.js";import{x as n}from"./lit-element-fe64f99e.js";import{o as $}from"./style-map-cd083d51.js";var E=Object.defineProperty,T=Object.getOwnPropertyDescriptor,y=(e,r,o,c)=>{for(var t=c>1?void 0:c?T(r,o):r,d=e.length-1,i;d>=0;d--)(i=e[d])&&(t=(c?i(r,o,t):i(t))||t);return c&&t&&E(r,o,t),t};class l extends w{constructor(){super(...arguments),this.distance=0,this.speed=0}render(){return S`
      <label class="distance-label">Distance</label>
      <span>${this.distance}</span>
      <label class="speed-label">Speed</label>
      <span>${this.speed}</span>
    `}}l.styles=v`
    :host {
      display: inline-grid;
      grid-template-columns: min-content auto;
      grid-template-rows: 50% 50%;
      column-gap: 15px;
      row-gap: 5px;
      align-items: center;
      width: 250px;
      font-family: sans-serif;
    }

    label {
      font-weight: bold;
      text-align: right;
      color: var(--frc-encoder-label-color, #000);
    }

    span {
      width: 100%;
      min-width: 50px;
      display: inline-block;
      padding: 5px;
      border: 1px dashed;
      border-color: var(--frc-encoder-value-color, #666);
      color: var(--frc-encoder-value-color, #666);
      border-radius: 3px;
      box-sizing: border-box;
    }
  `;y([b({type:Number})],l.prototype,"distance",2);y([b({type:Number})],l.prototype,"speed",2);customElements.get("frc-encoder")||customElements.define("frc-encoder",l);const x={distance:0,speed:0,theme:"light","background-color":"#fff","--frc-encoder-label-color":"#000","--frc-encoder-value-color":"#666"},O={title:"FRC/Encoder",tags:["autodocs"],component:"frc-encoder",args:x,argTypes:{distance:{table:{category:"Properties",defaultValue:{summary:0}}},speed:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-encoder-label-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-encoder-value-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#666"}}}},decorators:[(e,r)=>{const c=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",t=r.args["background-color"];return n` <div
        style=${$({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?t:c})}
      >
        ${e()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/encoder";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-encoder distance="0" speed="0"></frc-encoder>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Encoder } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Encoder distance={0} speed={0} />\r
\`\`\``}}}};function j(e){return e.theme==="custom"?n`
      <style>
        .custom {
          --frc-encoder-label-color: ${e["--frc-encoder-label-color"]};
          --frc-encoder-value-color: ${e["--frc-encoder-value-color"]};
        }
      </style>
    `:e.theme==="dark"?n`
      <style>
        .dark {
          --frc-encoder-label-color: white;
          --frc-encoder-value-color: #aaa;
        }
      </style>
    `:n`
    <style>
      .light {
        --frc-encoder-label-color: black;
        --frc-encoder-value-color: #666;
      }
    </style>
  `}function k(e={}){return{args:{...x,...e},render:o=>n`
      ${j(o)}
      <frc-encoder
        class=${o.theme}
        distance=${o.distance}
        speed=${o.speed}
      ></frc-encoder>
    `}}const a=k({theme:"light"}),s=k({theme:"dark"});var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`createEncoderStory({
  theme: 'light'
})`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`createEncoderStory({
  theme: 'dark'
})`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const P=["LightTheme","DarkTheme"];export{s as DarkTheme,a as LightTheme,P as __namedExportsOrder,O as default};
