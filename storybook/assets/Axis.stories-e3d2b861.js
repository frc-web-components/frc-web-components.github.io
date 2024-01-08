import"./axis.es-3fc5795b.js";import{x as o}from"./lit-element-37c36932.js";import{o as y}from"./if-defined-04ae3851.js";import{o as n}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";import"./transform-bc2573b1-2dde8094.js";const f={vertical:!1,ticks:5,min:-1,max:1,unit:"",theme:"light","background-color":"#fff","--frc-axis-text-color":"black"},V={title:"FRC/Axis",tags:["autodocs"],component:"frc-axis",args:f,argTypes:{vertical:{table:{category:"Properties",defaultValue:{summary:!1}}},ticks:{table:{category:"Properties",defaultValue:{summary:5}},control:{type:"number",min:0}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,r)=>{const h=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",x=r.args["background-color"];return o`
        <div
          style=${n({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:r.args.theme==="custom"?x:h})}
        >
          <div
            style=${n({[r.args.vertical?"height":"width"]:"200px",padding:"20px 20px",marginBottom:"20px"})}
          >
            ${e()}
          </div>
        </div>
      `}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/axis";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-axis ticks="5" min="-1" max="1"></frc-axis>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Axis } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Axis ticks={5} min={-1} max={1} />\r
\`\`\``}}}};function g(e){return e.theme==="custom"?o`
      <style>
        .custom {
          --frc-axis-text-color: ${e["--frc-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?o`
      <style>
        .dark {
          --frc-axis-text-color: white;
        }
      </style>
    `:o`
    <style>
      .light {
        --frc-axis-text-color: black;
      }
    </style>
  `}function p(e={}){return{args:{...f,...e},render:t=>o`
      ${g(t)}
      <frc-axis
        class=${t.theme}
        ?vertical=${t.vertical}
        ticks=${t.ticks}
        min=${t.min}
        max=${t.max}
        unit=${y(t.unit||void 0)}
      ></frc-axis>
    `}}const a=p({theme:"light"}),s=p({theme:"dark"});var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`createAxisStory({
  theme: 'light'
})`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`createAxisStory({
  theme: 'dark'
})`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const j=["LightTheme","DarkTheme"];export{s as DarkTheme,a as LightTheme,j as __namedExportsOrder,V as default};
