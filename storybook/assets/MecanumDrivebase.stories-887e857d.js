import"./drivebases.es-5a726760.js";import{x as t}from"./lit-element-fe64f99e.js";import{o as g}from"./style-map-cd083d51.js";import"./property-7226fcdb-ca5eacb2.js";import"./bar.es-60d50a7c.js";import"./state-504849b6-2441cf81.js";import"./query-b33b5ea2-b51c1579.js";import"./axis.es-ac91c8c7.js";import"./transform-bc2573b1-2dde8094.js";const u={frontLeftMotorSpeed:0,frontRightMotorSpeed:0,rearLeftMotorSpeed:0,rearRightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-mecanum-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-axis-text-color":"black"},R={title:"FRC/Mecanum Drivebase",tags:["autodocs"],component:"frc-mecanum-drivebase",args:u,argTypes:{frontLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},frontRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-mecanum-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,o)=>{const p=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",b=o.args["background-color"];return t` <div
        style=${g({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?b:p})}
      >
        ${e()}
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
<frc-mecanum-drivebase front-right-motor-speed="1" rear-left-motor-speed=".5"></frc-mecanum-drivebase>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Mecanum } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Mecanum frontRightMotorSpeed={1} rearLeftMotorSpeed={.5} />\r
\`\`\``}}}};function h(e){return e.theme==="custom"?t`
      <style>
        .custom {
          --frc-mecanum-drivebase-drivetrain-color: ${e["--frc-mecanum-drivebase-drivetrain-color"]};
          --frc-bar-background: ${e["--frc-bar-background"]};
          --frc-bar-foreground: ${e["--frc-bar-foreground"]};
          --frc-axis-text-color: ${e["--frc-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?t`
      <style>
        .dark {
          --frc-mecanum-drivebase-drivetrain-color: #aaa;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-mecanum-drivebase-drivetrain-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-axis-text-color: black;
      }
    </style>
  `}function f(e={}){return{args:{...u,...e},render:r=>t`
      ${h(r)}
      <frc-mecanum-drivebase
        class=${r.theme}
        front-left-motor-speed=${r.frontLeftMotorSpeed}
        front-right-motor-speed=${r.frontRightMotorSpeed}
        rear-left-motor-speed=${r.rearLeftMotorSpeed}
        rear-right-motor-speed=${r.rearRightMotorSpeed}
      ></frc-mecanum-drivebase>
    `}}const a=f({theme:"light"}),c=f({theme:"dark"});var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var d,l,i;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(i=(l=c.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const D=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,D as __namedExportsOrder,R as default};
