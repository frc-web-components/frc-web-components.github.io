import"./command-based.es-75ca4809.js";import{x as r}from"./lit-element-37c36932.js";import{o as i}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./toggle-button.es-e0b9a3fa.js";const f={default:"",command:"",hasCommand:!1,hasDefault:!1,label:"",name:"",hideName:!1,theme:"light","background-color":"#fff","--frc-label-text-color":"black","--frc-robot-subsystem-header-color":"purple"},V={title:"Command Based/Robot Subsystem",tags:["autodocs"],component:"frc-robot-subsystem",args:f,argTypes:{default:{table:{category:"Properties",defaultValue:{summary:""}}},command:{table:{category:"Properties",defaultValue:{summary:""}}},hasCommand:{table:{category:"Properties",defaultValue:{summary:!1}}},hasDefault:{table:{category:"Properties",defaultValue:{summary:!1}}},label:{table:{category:"Properties",defaultValue:{summary:""}}},name:{table:{category:"Properties",defaultValue:{summary:""}}},hideName:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-label-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-robot-subsystem-header-color":{table:{category:"Styles",defaultValue:{summary:"purple"}}}},decorators:[(t,o)=>{const y=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",h=o.args["background-color"];return r` <div
        style=${i({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?h:y})}
      >
        ${t()}
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
<frc-robot-subsystem></frc-robot-subsystem>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { RobotSubsystem } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<RobotSubsystem /> \r
\`\`\``}}}};function p(t){return t.theme==="custom"?r`
      <style>
        .custom {
          --frc-label-text-color: ${t["--frc-label-text-color"]};
          --frc-robot-subsystem-header-color: ${t["--frc-robot-subsystem-header-color"]};
        }
      </style>
    `:t.theme==="dark"?r`
      <style>
        .dark {
          --frc-label-text-color: white;
          --frc-robot-subsystem-header-color: #a020f0;
        }
      </style>
    `:r`
    <style>
      .light {
        --frc-label-text-color: black;
        --frc-robot-subsystem-header-color: purple;
      }
    </style>
  `}function b(t={}){return{args:{...f,...t},render:e=>r`
      ${p(e)}
      <frc-robot-subsystem
        class=${e.theme}
        default=${e.default}
        command=${e.command}
        ?has-command=${e.hasCommand}
        ?has-default=${e.hasDefault}
        label=${e.label}
        name=${e.name}
        ?hide-name=${e.hideName}
      ></frc-robot-subsystem>
    `}}const a=b({theme:"light"}),s=b({theme:"dark"});var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`createSubsystemStory({
  theme: 'light'
})`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var n,u,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`createSubsystemStory({
  theme: 'dark'
})`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const T=["LightTheme","DarkTheme"];export{s as DarkTheme,a as LightTheme,T as __namedExportsOrder,V as default};
