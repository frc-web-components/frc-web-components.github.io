import{i as v,s as S,x as c}from"./lit-element-336289fd.js";import{n as y}from"./property-a00a2a3e.js";import{o as $}from"./style-map-1987af2b.js";var T=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(t,o,e,l)=>{for(var r=l>1?void 0:l?w(o,e):o,u=t.length-1,s;u>=0;u--)(s=t[u])&&(r=(l?s(o,e,r):s(r))||r);return l&&r&&T(o,e,r),r};class n extends S{constructor(){super(...arguments),this.toggled=!1,this.label="Button"}onClick(){this.toggled=!this.toggled,this.dispatchEvent(new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0}))}render(){return c`
      <button class="${this.toggled?"toggled":""}" @click="${this.onClick}">
        ${this.label}
      </button>
    `}}n.styles=v`
    :host {
      display: inline-block;
      width: 100px;
      height: 50px;
      font-family: sans-serif;
      font-size: 16px;
      letter-spacing: 0.5px;
    }

    button {
      width: 100%;
      height: 100%;
      margin: 0;
      border: none;
      border-radius: 4px;
      font-size: inherit;
      font-family: inherit;
      letter-spacing: inherit;
      background: var(--frc-button-background-color, rgb(230, 230, 230));
      color: var(--frc-button-text-color, black);
    }

    .toggled {
      background: var(--frc-button-toggled-background-color, black);
      color: var(--frc-button-toggled-text-color, white);
      font-weight: bold;
    }
  `;p([y({type:Boolean})],n.prototype,"toggled",2);p([y({type:String})],n.prototype,"label",2);customElements.get("frc-toggle-button")||customElements.define("frc-toggle-button",n);const k={toggled:!1,label:"Button",theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},D={title:"FRC/Toggle Button",tags:["autodocs"],component:"frc-toggle-button",args:k,argTypes:{toggled:{table:{category:"Properties",defaultValue:{summary:!1}}},label:{table:{category:"Properties",defaultValue:{summary:"Button"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(t,o)=>{const l=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",r=o.args["background-color"];return c` <div
        style=${$({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?r:l})}
      >
        ${t()}
      </div>`}]};function B(t){return t.theme==="custom"?c`
      <style>
        .custom {
          --frc-button-background-color: ${t["--frc-button-background-color"]};
          --frc-button-text-color: ${t["--frc-button-text-color"]};
          --frc-button-toggled-background-color: ${t["--frc-button-toggled-background-color"]};
          --frc-button-toggled-text-color: ${t["--frc-button-toggled-text-color"]};
        }
      </style>
    `:t.theme==="dark"?c`
      <style>
        .dark {
          --frc-button-background-color: rgba(255, 255, 255, 0.1);
          --frc-button-text-color: white;
          --frc-button-toggled-background-color: rgba(240, 240, 240);
          --frc-button-toggled-text-color: black;
        }
      </style>
    `:c`
    <style>
      .light {
        --frc-button-background-color: rgb(230, 230, 230);
        --frc-button-text-color: black;
        --frc-button-toggled-background-color: black;
        --frc-button-toggled-text-color: white;
      }
    </style>
  `}function x(t={}){return{args:{...k,...t},render:e=>c`
      ${B(e)}
      <frc-toggle-button
        class=${e.theme}
        ?toggled=${e.toggled}
        label=${e.label}
      ></frc-toggle-button>
    `}}const a=x({theme:"light"}),g=x({theme:"dark"});var b,d,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`createToggleButtonStory({
  theme: 'light'
})`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var i,m,h;g.parameters={...g.parameters,docs:{...(i=g.parameters)==null?void 0:i.docs,source:{originalSource:`createToggleButtonStory({
  theme: 'dark'
})`,...(h=(m=g.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["LightTheme","DarkTheme"];export{g as DarkTheme,a as LightTheme,P as __namedExportsOrder,D as default};
