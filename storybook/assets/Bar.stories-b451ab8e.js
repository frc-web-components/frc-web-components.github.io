import"./bar.es-bc2a923d.js";import{x as t}from"./lit-element-37c36932.js";import{o as p}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./state-6b86eede-5fd1e84e.js";import"./query-b33b5ea2-b51c1579.js";const f={value:0,min:-1,max:1,center:0,theme:"light","background-color":"#fff","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black"},T={title:"FRC/Bar",tags:["autodocs"],component:"frc-bar",args:f,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,o)=>{const b=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",g=o.args["background-color"];return t` <div
        style=${p({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?g:b})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/bar";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-bar min="-1" max="1"></frc-bar>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Bar } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Bar min={-1} max={1} />\r
\`\`\``}}}};function h(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
      }
    </style>
  `}function i(r={}){return{args:{...f,...r},render:e=>t`
      ${h(e)}
      <frc-bar
        class=${e.theme}
        value=${e.value}
        min=${e.min}
        max=${e.max}
        center=${e.center}
      ></frc-bar>
    `}}const a=i({theme:"light"}),c=i({theme:"dark"});var n,m,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`createBarStory({
  theme: 'light'
})`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var s,u,d;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`createBarStory({
  theme: 'dark'
})`,...(d=(u=c.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const v=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,v as __namedExportsOrder,T as default};
