import{r as s}from"./icon-70228e82-483a2944.js";import"./property-293dc01c-d6840d48.js";import{x as a}from"./lit-element-37c36932.js";import{o as v}from"./style-map-4c049cd0.js";import{o as n}from"./if-defined-04ae3851.js";const h={color:"black",customIcon:!1,icon:Object.keys(s)[0],svgPath:"",viewBox:"0 0 24 24",theme:"light","background-color":"#fff",width:24,height:24},T={title:"FRC/Icon",tags:["autodocs"],component:"frc-icon",args:h,argTypes:{color:{table:{category:"Properties",defaultValue:{summary:"black"}}},customIcon:{table:{category:"Properties",defaultValue:{summary:!1}}},icon:{table:{category:"Properties",defaultValue:{summary:Object.keys(s)[0]}},options:Object.keys(s),control:{type:"select"}},svgPath:{table:{category:"Properties",defaultValue:{summary:""}},description:"Custom svg path. SVGs icons can be downloaded from here: https://fonts.google.com/icons"},viewBox:{table:{category:"Properties",defaultValue:{summary:"0 0 24 24"}},description:"ViewBox for custom svg. SVG icons can be downloaded from here: https://fonts.google.com/icons"},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},width:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}},height:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}}},decorators:[(e,t)=>{const g=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",y=t.args["background-color"];return a` <div
        style=${v({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?y:g})}
      >
        ${e()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/icon";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-icon color="green" icon="check"></frc-icon>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Icon } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Icon color="green" icon="check" />\r
\`\`\``}}}};function b(e){return a`
    <style>
      frc-icon {
        width: ${e.width}px;
        height: ${e.height}px;
      }
    </style>
  `}function f(e={}){return{args:{...h,...e},render:o=>a`
      ${b(o)}
      <frc-icon
        class=${o.theme}
        color=${o.color}
        icon=${n(o.customIcon?void 0:o.icon)}
        svg-path=${n(o.customIcon?o.svgPath:void 0)}
        view-box=${n(o.customIcon?o.viewBox:void 0)}
      ></frc-icon>
    `}}const r=f(),c=f({customIcon:!0,svgPath:"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z",viewBox:"0 -960 960 960"});var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"createIconStory()",...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,d,p;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`createIconStory({
  customIcon: true,
  svgPath: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z',
  viewBox: '0 -960 960 960'
})`,...(p=(d=c.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["Icon","CustomIcon"];export{c as CustomIcon,r as Icon,V as __namedExportsOrder,T as default};
