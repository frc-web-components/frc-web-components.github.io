import"./pid.es-50e352ce.js";import{x as e}from"./lit-element-fe64f99e.js";import{o as h}from"./style-map-cd083d51.js";import"./property-7226fcdb-ca5eacb2.js";const m={p:0,i:0,d:0,goal:0,theme:"light","background-color":"#fff","--frc-pid-controller-text-color":"black","--frc-pid-controller-input-background-color":"white","--frc-pid-controller-input-border-color":"#e0e0e0"},S={title:"PID Controller/Profiled PID Controller",tags:["autodocs"],component:"frc-profiled-pid-controller",args:m,argTypes:{p:{table:{category:"Properties",defaultValue:{summary:0}}},i:{table:{category:"Properties",defaultValue:{summary:0}}},d:{table:{category:"Properties",defaultValue:{summary:0}}},goal:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-pid-controller-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-pid-controller-input-background-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"white"}}},"--frc-pid-controller-input-border-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#e0e0e0"}}}},decorators:[(r,t)=>{const f=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",g=t.args["background-color"];return e` <div
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
<frc-profiled-pid-controller p="0" i="0" d="0" goal="0"></frc-profiled-pid-controller>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { ProfiledPidController } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<ProfiledPidController p={0} i={0} d={0} goal={0} />\r
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
  `}function u(r={}){return{args:{...m,...r},render:o=>e`
      ${y(o)}
      <frc-profiled-pid-controller
        class=${o.theme}
        p=${o.p}
        i=${o.i}
        d=${o.d}
        goal=${o.goal}
      ></frc-profiled-pid-controller>
    `}}const l=u({theme:"light"}),c=u({theme:"dark"});var n,a,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`createPidControllerStory({
  theme: 'light'
})`,...(i=(a=l.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,p,s;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`createPidControllerStory({
  theme: 'dark'
})`,...(s=(p=c.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const $=["LightTheme","DarkTheme"];export{c as DarkTheme,l as LightTheme,$ as __namedExportsOrder,S as default};
