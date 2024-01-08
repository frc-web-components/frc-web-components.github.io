import"./pid.es-2f4f9e8f.js";import{x as e}from"./lit-element-37c36932.js";import{o as y}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";const m={p:0,i:0,d:0,setpoint:0,theme:"light","background-color":"#fff","--frc-pid-controller-text-color":"black","--frc-pid-controller-input-background-color":"white","--frc-pid-controller-input-border-color":"#e0e0e0"},S={title:"PID Controller/PID Controller",tags:["autodocs"],component:"frc-pid-controller",args:m,argTypes:{p:{table:{category:"Properties",defaultValue:{summary:0}}},i:{table:{category:"Properties",defaultValue:{summary:0}}},d:{table:{category:"Properties",defaultValue:{summary:0}}},setpoint:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-pid-controller-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-pid-controller-input-background-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"white"}}},"--frc-pid-controller-input-border-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#e0e0e0"}}}},decorators:[(r,t)=>{const f=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",h=t.args["background-color"];return e` <div
        style=${y({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?h:f})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/pid";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-pid-controller p="0" i="0" d="0" setpoint="0"></frc-pid-controller>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { PidController } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<PidController p={0} i={0} d={0} setpoint={0} />\r
\`\`\``}}}};function g(r){return r.theme==="custom"?e`
      <style>
        .custom {
          --frc-pid-controller-text-color: ${r["--frc-pid-controller-text-color"]};
          --frc-pid-controller-input-background-color: ${r["--frc-pid-controller-input-background-color"]};
          --frc-pid-controller-input-border-color: ${r["--frc-pid-controller-input-border-color"]};
        }
      </style>
    `:r.theme==="dark"?e`
      <style>
        .dark {
          --frc-pid-controller-text-color: white;
          --frc-pid-controller-input-background-color: rgba(255, 255, 255, 0.2);
          --frc-pid-controller-input-border-color: rgba(255, 255, 255, 0.5);
        }
      </style>
    `:e`
    <style>
      .light {
        --frc-pid-controller-text-color: black;
        --frc-pid-controller-input-background-color: white;
        --frc-pid-controller-input-border-color: #e0e0e0;
      }
    </style>
  `}function u(r={}){return{args:{...m,...r},render:o=>e`
      ${g(o)}
      <frc-pid-controller
        class=${o.theme}
        p=${o.p}
        i=${o.i}
        d=${o.d}
        setpoint=${o.setpoint}
      ></frc-pid-controller>
    `}}const c=u({theme:"light"}),l=u({theme:"dark"});var n,a,i;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`createPidControllerStory({
  theme: 'light'
})`,...(i=(a=c.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,s,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`createPidControllerStory({
  theme: 'dark'
})`,...(p=(s=l.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const $=["LightTheme","DarkTheme"];export{l as DarkTheme,c as LightTheme,$ as __namedExportsOrder,S as default};
