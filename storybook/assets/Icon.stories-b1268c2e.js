import{i as a}from"./index-f092f562.js";import{$ as s}from"./lit-element-ac510585.js";import{i as y}from"./style-map-fc25a154.js";import{l as c}from"./if-defined-a8bd05d9.js";import"./query-assigned-elements-bd4ea1f7.js";const m={color:"black",customIcon:!1,icon:Object.keys(a)[0],svgPath:"",viewBox:"0 0 24 24",theme:"light","background-color":"#fff",width:24,height:24},x={title:"FRC/Icon",tags:["autodocs"],component:"frc-icon",args:m,argTypes:{color:{table:{category:"Properties",defaultValue:{summary:"black"}}},customIcon:{table:{category:"Properties",defaultValue:{summary:!1}}},icon:{table:{category:"Properties",defaultValue:{summary:Object.keys(a)[0]}},options:Object.keys(a),control:{type:"select"}},svgPath:{table:{category:"Properties",defaultValue:{summary:""}}},viewBox:{table:{category:"Properties",defaultValue:{summary:"0 0 24 24"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},width:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}},height:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}}},decorators:[(t,o)=>{const u=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",d=o.args["background-color"];return s` <div
        style=${y({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?d:u})}
      >
        ${t()}
      </div>`}]};function f(t){return s`
    <style>
      frc-icon {
        width: ${t.width}px;
        height: ${t.height}px;
      }
    </style>
  `}function g(t={}){return{args:{...m,...t},render:e=>s`
      ${f(e)}
      <frc-icon
        class=${e.theme}
        color=${e.color}
        icon=${c(e.customIcon?void 0:e.icon)}
        svg-path=${c(e.customIcon?e.svgPath:void 0)}
        view-box=${c(e.customIcon?e.viewBox:void 0)}
      ></frc-icon>
    `}}const r=g();var l,i,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"createIconStory()",...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const $=["Icon"];export{r as Icon,$ as __namedExportsOrder,x as default};
//# sourceMappingURL=Icon.stories-b1268c2e.js.map
