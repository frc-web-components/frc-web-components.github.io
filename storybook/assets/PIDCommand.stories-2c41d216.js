import"./pid.es-2f4f9e8f.js";import{x as e}from"./lit-element-37c36932.js";import{o as h}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";const p={p:0,i:0,d:0,setpoint:0,running:!1,theme:"light","background-color":"#fff","--frc-pid-controller-text-color":"black","--frc-pid-controller-input-background-color":"white","--frc-pid-controller-input-border-color":"#e0e0e0"},$={title:"PID Controller/PID Command",tags:["autodocs"],component:"frc-pid-command",args:p,argTypes:{p:{table:{category:"Properties",defaultValue:{summary:0}}},i:{table:{category:"Properties",defaultValue:{summary:0}}},d:{table:{category:"Properties",defaultValue:{summary:0}}},setpoint:{table:{category:"Properties",defaultValue:{summary:0}}},running:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-pid-controller-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-pid-controller-input-background-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"white"}}},"--frc-pid-controller-input-border-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#e0e0e0"}}}},decorators:[(r,t)=>{const f=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",g=t.args["background-color"];return e` <div
        style=${h({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?g:f})}
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
<frc-pid-command p="0" i="0" d="0" setpoint="0" running></frc-pid-command>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { PidCommand } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<PidCommand p={0} i={0} d={0} setpoint={0} running />\r
\`\`\``}}}};function y(r){return r.theme==="custom"?e`
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
  `}function u(r={}){return{args:{...p,...r},render:o=>e`
      ${y(o)}
      <frc-pid-command
        class=${o.theme}
        p=${o.p}
        i=${o.i}
        d=${o.d}
        setpoint=${o.setpoint}
        ?running=${o.running}
      ></frc-pid-command>
    `}}const n=u({theme:"light"}),c=u({theme:"dark"});var l,a,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`createPidCommandStory({
  theme: 'light'
})`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,m,s;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`createPidCommandStory({
  theme: 'dark'
})`,...(s=(m=c.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const S=["LightTheme","DarkTheme"];export{c as DarkTheme,n as LightTheme,S as __namedExportsOrder,$ as default};
