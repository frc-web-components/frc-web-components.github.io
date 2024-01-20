import"./canvas.es-0459512e.js";import{x as m}from"./lit-element-fe64f99e.js";import{o as u}from"./style-map-cd083d51.js";import"./property-7226fcdb-ca5eacb2.js";import"./query-b33b5ea2-b51c1579.js";import"./state-504849b6-2441cf81.js";import"./index-a785ab48-dd43b269.js";import"./_commonjsHelpers-10dfc225-be18f180.js";import"./directive-daf4e9b6-78860a76.js";import"./directive-helpers-a8ea4a4f-014876a0.js";function l(){const n=[],a=["top","center","bottom"],r=["left","center","right"];return a.forEach(t=>{r.forEach(o=>{n.push({name:`${t} ${o}`,value:[o,t]})})}),n}const p={points:[100,100,300,100],opacity:1,color:"gray",lineWidth:2,transform:[0,0,0],transformOrigin:[0,0],drawOrigin:0,zIndex:0},w={title:"FRC Canvas/Canvas Line",tags:["autodocs"],component:"frc-canvas-line",args:p,argTypes:{points:{table:{category:"Line Properties",defaultValue:{summary:[]}}},opacity:{table:{category:"Line Properties",defaultValue:{summary:1}},control:{type:"number",min:0,max:1}},color:{control:"color",table:{category:"Line Properties",defaultValue:{summary:"gray"}}},lineWidth:{table:{category:"Line Properties",defaultValue:{summary:1}},control:{type:"number",min:0}},transform:{table:{category:"Line Properties",defaultValue:{summary:[0,0,0]}}},transformOrigin:{table:{category:"Line Properties",defaultValue:{summary:[0,0]}}},drawOrigin:{table:{category:"Line Properties",defaultValue:{summary:0}},options:[0,1,2,3,4,5,6,7,8],control:{type:"select",labels:l().map(({name:n})=>n)}},zIndex:{table:{category:"Line Properties",defaultValue:{summary:0}},control:{type:"number",min:0}},backgroundColor:{control:"color",table:{category:"Canvas Properties",defaultValue:{summary:"black"}}}},decorators:[n=>m` <div
      style=${u({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${n()}
    </div>`],parameters:{docs:{description:{component:`To use this component import the module:\r

\`\`\`javascript\r
import "@frc-web-components/fwc/components/canvas";\r

// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r

And then add the component to your html:\r

\`\`\`html\r
<frc-canvas>\r
  <frc-canvas-line points="[100,100,300,100]" color="gray" line-width="2"></frc-canvas-line>\r
</frc-canvas>\r
\`\`\`\r

Or use the component in React:\r

\`\`\`jsx\r
import { CanvasLine, Canvas } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<Canvas>\r
  <CanvasLine points={[100,100,300,100]} color="gray" lineWidth={2} />\r
</Canvas>\r
\`\`\``}}}};function d(n={}){return{args:{...p,...n},render:r=>{const[t,o]=l()[r.drawOrigin].value;return m`
        <frc-canvas background-color=${r.backgroundColor}>
          <frc-canvas-line
            points=${JSON.stringify(r.points)}
            opacity=${r.opacity}
            color=${r.color}
            line-width=${r.lineWidth}
            transform=${JSON.stringify(r.transform)}
            transform-origin=${JSON.stringify(r.transformOrigin)}
            .drawOrigin=${[t,o]}
            z-index=${JSON.stringify(r.zIndex)}
          ></frc-canvas-line>
        </frc-canvas>
      `}}}const e=d();var i,s,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"createCanvasLineStory()",...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const $=["CanvasLine"];export{e as CanvasLine,$ as __namedExportsOrder,w as default};
