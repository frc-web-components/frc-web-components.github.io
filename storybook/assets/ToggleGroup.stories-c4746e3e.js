import"./toggle-group.es-3727b421.js";import{x as r}from"./lit-element-37c36932.js";import{o as p}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";const d={options:["On","Off"],value:"",direction:"vertical",theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},O={title:"FRC/Toggle Group",tags:["autodocs"],component:"frc-toggle-group",args:d,argTypes:{options:{control:"object",table:{category:"Properties",defaultValue:{summary:["On","Off"]}}},value:{table:{category:"Properties",defaultValue:{summary:""}}},direction:{table:{category:"Properties",defaultValue:"vertical"},options:["vertical","horizontal"],control:"select"},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(t,e)=>{const i=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",b=e.args["background-color"];return r` <div
        style=${p({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?b:i})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/toggle-group";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-toggle-group options='["On", "Off"]' value="Off"></frc-toggle-group>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { ToggleGroup } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<ToggleGroup options={["On", "Off"]} value="Off" />\r
\`\`\``}}}};function h(t){return t.theme==="custom"?r`
      <style>
        .custom {
          --frc-button-background-color: ${t["--frc-button-background-color"]};
          --frc-button-text-color: ${t["--frc-button-text-color"]};
          --frc-button-toggled-background-color: ${t["--frc-button-toggled-background-color"]};
          --frc-button-toggled-text-color: ${t["--frc-button-toggled-text-color"]};
        }
      </style>
    `:t.theme==="dark"?r`
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
  `}function f(t={}){return{args:{...d,...t},render:o=>r`
      ${h(o)}
      <frc-toggle-group
        class=${o.theme}
        options=${JSON.stringify(o.options)}
        value=${o.value}
        direction=${o.direction}
      ></frc-toggle-group>
    `}}const c=f({theme:"light"}),n=f({theme:"dark"});var l,a,u;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`createToggleGroupStory({
  theme: 'light'
})`,...(u=(a=c.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var g,s,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`createToggleGroupStory({
  theme: 'dark'
})`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const S=["LightTheme","DarkTheme"];export{n as DarkTheme,c as LightTheme,S as __namedExportsOrder,O as default};
