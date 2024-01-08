import"./drivebases.es-411fb7ae.js";import{x as t}from"./lit-element-37c36932.js";import{o as g}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./bar.es-bc2a923d.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";import"./axis.es-3fc5795b.js";import"./transform-bc2573b1-2dde8094.js";const m={leftMotorSpeed:0,rightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-differential-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-axis-text-color":"black"},V={title:"FRC/Differential Drivebase",tags:["autodocs"],component:"frc-differential-drivebase",args:m,argTypes:{leftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-differential-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,o)=>{const b=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",p=o.args["background-color"];return t` <div
        style=${g({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?p:b})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/drivebases";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-differential-drivebase left-motor-speed="0" right-motor-speed="0">></frc-differential-drivebase>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Differential } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Differential leftMotorSpeed={0} rightMotorSpeed={0} />\r
\`\`\``}}}};function h(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-differential-drivebase-drivetrain-color: ${r["--frc-differential-drivebase-drivetrain-color"]};
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-differential-drivebase-drivetrain-color: #aaa;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-differential-drivebase-drivetrain-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-axis-text-color: black;
      }
    </style>
  `}function u(r={}){return{args:{...m,...r},render:e=>t`
      ${h(e)}
      <frc-differential-drivebase
        class=${e.theme}
        left-motor-speed=${e.leftMotorSpeed}
        right-motor-speed=${e.rightMotorSpeed}
      ></frc-differential-drivebase>
    `}}const a=u({theme:"light"}),c=u({theme:"dark"});var n,i,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,d,f;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(f=(d=c.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,w as __namedExportsOrder,V as default};
