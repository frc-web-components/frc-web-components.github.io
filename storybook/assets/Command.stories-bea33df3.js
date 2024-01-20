import"./command-based.es-6f02cc25.js";import{x as r}from"./lit-element-fe64f99e.js";import{o as p}from"./style-map-cd083d51.js";import"./property-7226fcdb-ca5eacb2.js";import"./toggle-button.es-0fefd6ee.js";const b={name:"Command",running:!1,controllable:!1,label:"",theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},$={title:"Command Based/Robot Command",tags:["autodocs"],component:"frc-robot-command",args:b,argTypes:{name:{table:{category:"Properties",defaultValue:{summary:"Command"}}},running:{table:{category:"Properties",defaultValue:{summary:!1}}},controllable:{table:{category:"Properties",defaultValue:{summary:!1}}},label:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(o,e)=>{const f=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",i=e.args["background-color"];return r` <div
        style=${p({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?i:f})}
      >
        ${o()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/command-based";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-robot-command name="Command"></frc-robot-command>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { RobotCommand } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<RobotCommand name="Command" />\r
\`\`\``}}}};function h(o){return o.theme==="custom"?r`
      <style>
        .custom {
          --frc-button-background-color: ${o["--frc-button-background-color"]};
          --frc-button-text-color: ${o["--frc-button-text-color"]};
          --frc-button-toggled-background-color: ${o["--frc-button-toggled-background-color"]};
          --frc-button-toggled-text-color: ${o["--frc-button-toggled-text-color"]};
        }
      </style>
    `:o.theme==="dark"?r`
      <style>
        .dark {
          --frc-button-background-color: rgba(255, 255, 255, 0.1);
          --frc-button-text-color: white;
          --frc-button-toggled-background-color: rgba(240, 240, 240);
          --frc-button-toggled-text-color: black;
        }
      </style>
    `:r`
    <style>
      .light {
        --frc-button-background-color: rgb(230, 230, 230);
        --frc-button-text-color: black;
        --frc-button-toggled-background-color: black;
        --frc-button-toggled-text-color: white;
      }
    </style>
  `}function g(o={}){return{args:{...b,...o},render:t=>r`
      ${h(t)}
      <frc-robot-command
        class=${t.theme}
        name=${t.name}
        ?running=${t.running}
        ?controllable=${t.controllable}
        label=${t.label}
      ></frc-robot-command>
    `}}const n=g({theme:"light"}),a=g({theme:"dark"});var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`createCommandStory({
  theme: 'light'
})`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,s;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`createCommandStory({
  theme: 'dark'
})`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const V=["LightTheme","DarkTheme"];export{a as DarkTheme,n as LightTheme,V as __namedExportsOrder,$ as default};
