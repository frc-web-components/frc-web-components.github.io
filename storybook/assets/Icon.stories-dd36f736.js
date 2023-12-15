import{i as a}from"./index-1610cb93.js";import{x as n}from"./lit-element-336289fd.js";import{o as v}from"./style-map-1987af2b.js";import{o as s}from"./if-defined-83631f70.js";import"./property-a00a2a3e.js";const g={color:"black",customIcon:!1,icon:Object.keys(a)[0],svgPath:"",viewBox:"0 0 24 24",theme:"light","background-color":"#fff",width:24,height:24},V={title:"FRC/Icon",tags:["autodocs"],component:"frc-icon",args:g,argTypes:{color:{table:{category:"Properties",defaultValue:{summary:"black"}}},customIcon:{table:{category:"Properties",defaultValue:{summary:!1}}},icon:{table:{category:"Properties",defaultValue:{summary:Object.keys(a)[0]}},options:Object.keys(a),control:{type:"select"}},svgPath:{table:{category:"Properties",defaultValue:{summary:""}},description:"Custom svg path. SVGs icons can be downloaded from here: https://fonts.google.com/icons"},viewBox:{table:{category:"Properties",defaultValue:{summary:"0 0 24 24"}},description:"ViewBox for custom svg. SVG icons can be downloaded from here: https://fonts.google.com/icons"},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},width:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}},height:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}}},decorators:[(e,t)=>{const p=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",y=t.args["background-color"];return n` <div
        style=${v({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?y:p})}
      >
        ${e()}
      </div>`}]};function b(e){return n`
    <style>
      frc-icon {
        width: ${e.width}px;
        height: ${e.height}px;
      }
    </style>
  `}function f(e={}){return{args:{...g,...e},render:o=>n`
      ${b(o)}
      <frc-icon
        class=${o.theme}
        color=${o.color}
        icon=${s(o.customIcon?void 0:o.icon)}
        svg-path=${s(o.customIcon?o.svgPath:void 0)}
        view-box=${s(o.customIcon?o.viewBox:void 0)}
      ></frc-icon>
    `}}const r=f(),c=f({customIcon:!0,svgPath:"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z",viewBox:"0 -960 960 960"});var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"createIconStory()",...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`createIconStory({
  customIcon: true,
  svgPath: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z',
  viewBox: '0 -960 960 960'
})`,...(h=(d=c.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const T=["Icon","CustomIcon"];export{c as CustomIcon,r as Icon,T as __namedExportsOrder,V as default};
