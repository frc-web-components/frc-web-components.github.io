import"./toggle-button.es-0fefd6ee.js";import{x as e}from"./lit-element-fe64f99e.js";import{o as h}from"./style-map-cd083d51.js";import"./property-7226fcdb-ca5eacb2.js";const b={toggled:!1,label:"Button",disabled:!1,theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},S={title:"FRC/Toggle Button",tags:["autodocs"],component:"frc-toggle-button",args:b,argTypes:{toggled:{table:{category:"Properties",defaultValue:{summary:!1}}},label:{table:{category:"Properties",defaultValue:{summary:"Button"}}},disabled:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(t,r)=>{const f=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",i=r.args["background-color"];return e` <div
        style=${h({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?i:f})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/toggle-button";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-toggle-button label="Button" toggled></frc-toggle-button>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { ToggleButton } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<ToggleButton label="Button" toggled />\r
\`\`\``}}}};function p(t){return t.theme==="custom"?e`
      <style>
        .custom {
          --frc-button-background-color: ${t["--frc-button-background-color"]};
          --frc-button-text-color: ${t["--frc-button-text-color"]};
          --frc-button-toggled-background-color: ${t["--frc-button-toggled-background-color"]};
          --frc-button-toggled-text-color: ${t["--frc-button-toggled-text-color"]};
        }
      </style>
    `:t.theme==="dark"?e`
      <style>
        .dark {
          --frc-button-background-color: rgba(255, 255, 255, 0.1);
          --frc-button-text-color: white;
          --frc-button-toggled-background-color: rgba(240, 240, 240);
          --frc-button-toggled-text-color: black;
        }
      </style>
    `:e`
    <style>
      .light {
        --frc-button-background-color: rgb(230, 230, 230);
        --frc-button-text-color: black;
        --frc-button-toggled-background-color: black;
        --frc-button-toggled-text-color: white;
      }
    </style>
  `}function m(t={}){return{args:{...b,...t},render:o=>e`
      ${p(o)}
      <frc-toggle-button
        class=${o.theme}
        ?toggled=${o.toggled}
        label=${o.label}
        ?disabled=${o.disabled}
      ></frc-toggle-button>
    `}}const l=m({theme:"light"}),c=m({theme:"dark"});var n,a,u;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`createToggleButtonStory({
  theme: 'light'
})`,...(u=(a=l.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var g,s,d;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`createToggleButtonStory({
  theme: 'dark'
})`,...(d=(s=c.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const B=["LightTheme","DarkTheme"];export{c as DarkTheme,l as LightTheme,B as __namedExportsOrder,S as default};
