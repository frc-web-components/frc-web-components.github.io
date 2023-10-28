import{r as k,s as S,$ as a}from"./lit-element-ac510585.js";import{e as b}from"./query-assigned-elements-bd4ea1f7.js";import{i as $}from"./style-map-70149a85.js";var w=Object.defineProperty,E=Object.getOwnPropertyDescriptor,y=(e,r,o,c)=>{for(var t=c>1?void 0:c?E(r,o):r,d=e.length-1,i;d>=0;d--)(i=e[d])&&(t=(c?i(r,o,t):i(t))||t);return c&&t&&w(r,o,t),t};class n extends S{constructor(){super(...arguments),this.distance=0,this.speed=0}render(){return a`
      <label class="distance-label">Distance</label>
      <span>${this.distance}</span>
      <label class="speed-label">Speed</label>
      <span>${this.speed}</span>
    `}}n.styles=k`
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
  `;y([b({type:Number})],n.prototype,"distance",2);y([b({type:Number})],n.prototype,"speed",2);customElements.get("frc-encoder")||customElements.define("frc-encoder",n);const v={distance:0,speed:0,theme:"light","background-color":"#fff","--frc-encoder-label-color":"#000","--frc-encoder-value-color":"#666"},V={title:"FRC/Encoder",tags:["autodocs"],component:"frc-encoder",args:v,argTypes:{distance:{table:{category:"Properties",defaultValue:{summary:0}}},speed:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-encoder-label-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-encoder-value-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#666"}}}},decorators:[(e,r)=>{const c=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",t=r.args["background-color"];return a` <div
        style=${$({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?t:c})}
      >
        ${e()}
      </div>`}]};function _(e){return e.theme==="custom"?a`
      <style>
        .custom {
          --frc-encoder-label-color: ${e["--frc-encoder-label-color"]};
          --frc-encoder-value-color: ${e["--frc-encoder-value-color"]};
        }
      </style>
    `:e.theme==="dark"?a`
      <style>
        .dark {
          --frc-encoder-label-color: white;
          --frc-encoder-value-color: #aaa;
        }
      </style>
    `:a`
    <style>
      .light {
        --frc-encoder-label-color: black;
        --frc-encoder-value-color: #666;
      }
    </style>
  `}function x(e={}){return{args:{...v,...e},render:o=>a`
      ${_(o)}
      <frc-encoder
        class=${o.theme}
        distance=${o.distance}
        speed=${o.speed}
      ></frc-encoder>
    `}}const l=x({theme:"light"}),s=x({theme:"dark"});var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`createEncoderStory({
  theme: 'light'
})`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`createEncoderStory({
  theme: 'dark'
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const O=["LightTheme","DarkTheme"];export{s as DarkTheme,l as LightTheme,O as __namedExportsOrder,V as default};
//# sourceMappingURL=Encoder.stories-551e483b.js.map
