import"./accelerometer.es-66f3a0e9.js";import{x as t}from"./lit-element-37c36932.js";import{o as y}from"./if-defined-04ae3851.js";import{o as h}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./number-bar.es-a2a54ad5.js";import"./bar.es-bc2a923d.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";import"./axis.es-3fc5795b.js";import"./transform-bc2573b1-2dde8094.js";const d={value:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"g",theme:"light","background-color":"#fff","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-axis-text-color":"black"},D={title:"FRC/Accelerometer",tags:["autodocs"],component:"frc-accelerometer",args:d,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:"g"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,o)=>{const p=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",b=o.args["background-color"];return t` <div
        style=${h({minHeight:"50px",padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?b:p})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/accelerometer";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-accelerometer value=".5"></frc-accelerometer>\r
\`\`\`\r

Or use the component in React:\r
\r
\`\`\`jsx\r
import { Accelerometer } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Accelerometer value={.5} />\r
\`\`\``}}}};function g(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
      }
    </style>
  `}function f(r={}){return{args:{...d,...r},render:e=>t`
      ${g(e)}
      <frc-accelerometer
        class=${e.theme}
        value=${e.value}
        min=${e.min}
        max=${e.max}
        center=${e.center}
        precision=${e.precision}
        ?hide-text=${e.hideText}
        num-tick-marks=${e.numTickMarks}
        unit=${y(e.unit||void 0)}
      ></frc-accelerometer>
    `}}const a=f({theme:"light"}),c=f({theme:"dark"});var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'light'
})`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,u,i;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'dark'
})`,...(i=(u=c.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const C=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,C as __namedExportsOrder,D as default};
