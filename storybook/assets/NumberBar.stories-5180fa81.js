import"./number-bar.es-a2a54ad5.js";import{x as t}from"./lit-element-37c36932.js";import{o as v}from"./if-defined-04ae3851.js";import{o as T}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./bar.es-bc2a923d.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";import"./axis.es-3fc5795b.js";import"./transform-bc2573b1-2dde8094.js";const V={value:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"",theme:"light","background-color":"#fff","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-axis-text-color":"black"},R={title:"FRC/Number Bar",tags:["autodocs"],component:"frc-number-bar",args:V,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,o)=>{const $=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",S=o.args["background-color"];return t` <div
        style=${T({minHeight:"50px",padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?S:$})}
      >
        ${e()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/number-bar";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-number-bar value="0"></frc-number-bar>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { NumberBar } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<NumberBar value={0} />\r
\`\`\``}}}};function w(e){return e.theme==="custom"?t`
      <style>
        .custom {
          --frc-bar-background: ${e["--frc-bar-background"]};
          --frc-bar-foreground: ${e["--frc-bar-foreground"]};
          --frc-bar-color: ${e["--frc-bar-color"]};
          --frc-axis-text-color: ${e["--frc-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?t`
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
  `}function u(e={}){return{args:{...V,...e},render:r=>t`
      ${w(r)}
      <frc-number-bar
        class=${r.theme}
        value=${r.value}
        min=${r.min}
        max=${r.max}
        center=${r.center}
        precision=${r.precision}
        ?hide-text=${r.hideText}
        num-tick-marks=${r.numTickMarks}
        unit=${v(r.unit||void 0)}
      ></frc-number-bar>
    `}}const a=u({theme:"light"}),c=u({theme:"dark"}),n=u({theme:"custom","--frc-bar-foreground":"#dd9b0d",value:3.5,min:0,max:5,unit:"V"}),m=u({unit:"g",value:-.5});var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`createNumberBarStory({
  theme: 'light'
})`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,b,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`createNumberBarStory({
  theme: 'dark'
})`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var p,g,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`createNumberBarStory({
  theme: 'custom',
  '--frc-bar-foreground': '#dd9b0d',
  value: 3.5,
  min: 0,
  max: 5,
  unit: 'V'
})`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,k,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`createNumberBarStory({
  unit: 'g',
  value: -0.5
})`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const _=["LightTheme","DarkTheme","VoltageView","Accelerometer"];export{m as Accelerometer,c as DarkTheme,a as LightTheme,n as VoltageView,_ as __namedExportsOrder,R as default};
