import{s as S,i as y,k as O,X as $}from"./property-7226fcdb-ca5eacb2.js";import"./toggle-group.es-2465d5c8.js";import{x as n}from"./lit-element-fe64f99e.js";import{o as R}from"./style-map-cd083d51.js";var T=Object.defineProperty,V=Object.getOwnPropertyDescriptor,k=(t,e,r,c)=>{for(var o=c>1?void 0:c?V(e,r):e,u=t.length-1,i;u>=0;u--)(i=t[u])&&(o=(c?i(e,r,o):i(o))||o);return c&&o&&T(e,r,o),o},j=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},A=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},C=(t,e,r)=>(j(t,e,"access private method"),r),d,v;const D=["Off","On","Forward","Reverse"];class s extends O{constructor(){super(...arguments),A(this,d),this.value="Off",this.direction="vertical"}render(){return $`
      <frc-toggle-group
        @change=${C(this,d,v)}
        .options=${D}
        value=${this.value}
        direction=${this.direction}
      ></frc-toggle-group>
    `}}d=new WeakSet;v=function(t){this.value=t.detail.value};s.styles=S`
    :host {
      display: inline-block;
      width: 150px;
      height: 300px;
    }

    frc-toggle-group {
      width: 100%;
      height: 100%;
    }
  `;k([y({type:String})],s.prototype,"value",2);k([y({type:String})],s.prototype,"direction",2);customElements.get("frc-relay")||customElements.define("frc-relay",s);const x={value:"Off",direction:"vertical",theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},W={title:"FRC/Relay",tags:["autodocs"],component:"frc-relay",args:x,argTypes:{value:{table:{category:"Properties",defaultValue:"Off"},options:["Off","On","Forward","Reverse"],control:"select"},direction:{table:{category:"Properties",defaultValue:"vertical"},options:["vertical","horizontal"],control:"select"},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(t,e)=>{const c=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=e.args["background-color"];return n` <div
        style=${R({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?o:c})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/relay";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-relay value="Off" direction="vertical"></frc-relay>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Relay } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Relay value="Off" direction="vertical" />\r
\`\`\``}}}};function E(t){return t.theme==="custom"?n`
      <style>
        .custom {
          --frc-button-background-color: ${t["--frc-button-background-color"]};
          --frc-button-text-color: ${t["--frc-button-text-color"]};
          --frc-button-toggled-background-color: ${t["--frc-button-toggled-background-color"]};
          --frc-button-toggled-text-color: ${t["--frc-button-toggled-text-color"]};
        }
      </style>
    `:t.theme==="dark"?n`
      <style>
        .dark {
          --frc-button-background-color: rgba(255, 255, 255, 0.1);
          --frc-button-text-color: white;
          --frc-button-toggled-background-color: rgba(240, 240, 240);
          --frc-button-toggled-text-color: black;
        }
      </style>
    `:n`
    <style>
      .light {
        --frc-button-background-color: rgb(230, 230, 230);
        --frc-button-text-color: black;
        --frc-button-toggled-background-color: black;
        --frc-button-toggled-text-color: white;
      }
    </style>
  `}function w(t={}){return{args:{...x,...t},render:r=>n`
      ${E(r)}
      <frc-relay
        class=${r.theme}
        value=${r.value}
        direction=${r.direction}
      ></frc-relay>
    `}}const a=w({theme:"light"}),l=w({theme:"dark"});var f,g,m;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`createRelayStory({
  theme: 'light'
})`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,h,p;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`createRelayStory({
  theme: 'dark'
})`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const X=["LightTheme","DarkTheme"];export{l as DarkTheme,a as LightTheme,X as __namedExportsOrder,W as default};
