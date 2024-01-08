import"./voltage-view.es-8269db32.js";import{x as t}from"./lit-element-37c36932.js";import{o as b}from"./if-defined-04ae3851.js";import{o as y}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./number-bar.es-a2a54ad5.js";import"./bar.es-bc2a923d.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";import"./axis.es-3fc5795b.js";import"./transform-bc2573b1-2dde8094.js";const f={value:0,min:0,max:5,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"V",theme:"light","background-color":"#fff","--frc-voltage-view-foreground-color":"#ffbd2f","--frc-bar-background":"#ddd","--frc-bar-color":"black","--frc-axis-text-color":"black"},D={title:"FRC/Voltage View",tags:["autodocs"],component:"frc-voltage-view",args:f,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:"g"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-voltage-view-foreground-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#ffbd2f"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,o)=>{const g=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",p=o.args["background-color"];return t` <div
        style=${y({minHeight:"50px",padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?p:g})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/voltage-view";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-voltage-view value="0"></frc-voltage-view>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { VoltageView } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<VoltageView value={0} />\r
\`\`\``}}}};function h(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-voltage-view-foreground-color: ${r["--frc-voltage-view-foreground-color"]};
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-voltage-view-foreground-color: #dd9b0d;
          --frc-bar-background: #444;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-voltage-view-foreground-color: #ffbd2f;
        --frc-bar-background: #ddd;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
      }
    </style>
  `}function d(r={}){return{args:{...f,...r},render:e=>t`
      ${h(e)}
      <frc-voltage-view
        class=${e.theme}
        value=${e.value}
        min=${e.min}
        max=${e.max}
        center=${e.center}
        precision=${e.precision}
        ?hide-text=${e.hideText}
        num-tick-marks=${e.numTickMarks}
        unit=${b(e.unit||void 0)}
      ></frc-voltage-view>
    `}}const a=d({theme:"light"}),c=d({theme:"dark"});var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`createVoltageViewStory({
  theme: 'light'
})`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,s,u;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`createVoltageViewStory({
  theme: 'dark'
})`,...(u=(s=c.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const C=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,C as __namedExportsOrder,D as default};
