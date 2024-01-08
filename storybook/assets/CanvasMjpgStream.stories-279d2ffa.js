import"./canvas.es-b13e3260.js";import{x as i}from"./lit-element-37c36932.js";import{o as t}from"./if-defined-04ae3851.js";import{o as c}from"./style-map-4c049cd0.js";import"./property-293dc01c-d6840d48.js";import"./query-b33b5ea2-b51c1579.js";import"./state-6b86eede-5fd1e84e.js";import"./index-a785ab48-dd43b269.js";import"./_commonjsHelpers-10dfc225-be18f180.js";import"./directive-daf4e9b6-78860a76.js";import"./directive-helpers-6b2c92c9-aa4f1afd.js";const m={srcs:[],waitImage:"",origin:[0,0],width:void 0,height:void 0,hideCrosshair:!1,crosshairColor:"white"},P={title:"FRC Canvas/Canvas MJPG Strem",tags:["autodocs"],component:"frc-canvas-mjpg-stream",args:m,argTypes:{srcs:{table:{category:"MJPG Stream Properties",defaultValue:{summary:[]}}},waitImage:{table:{category:"MJPG Stream Properties",defaultValue:{summary:""}}},origin:{table:{category:"MJPG Stream Properties",defaultValue:{summary:[0,0]}}},width:{table:{category:"MJPG Stream Properties",defaultValue:{summary:void 0}},control:{type:"number",min:0}},height:{table:{category:"MJPG Stream Properties",defaultValue:{summary:void 0}},control:{type:"number",min:0}},hideCrosshair:{table:{category:"MJPG Stream Properties",defaultValue:{summary:!1}}},crosshairColor:{control:"color",table:{category:"MJPG Stream Properties",defaultValue:{summary:"gray"}}},backgroundColor:{control:"color",table:{category:"Canvas Properties",defaultValue:{summary:"black"}}}},decorators:[o=>i` <div
      style=${c({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${o()}
    </div>`],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/canvas";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-canvas>\r
  <frc-canvas-mjpg-stream origin="[0,0]" crosshair-color="white"></frc-canvas-mjpg-stream>\r
</frc-canvas>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { CanvasMjpgStream, Canvas } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<Canvas>\r
  <CanvasMjpgStream origin={[0,0]} crosshairColor="white" />\r
</Canvas>\r
\`\`\``}}}};function p(o={}){return{args:{...m,...o},render:r=>i`
      <frc-canvas background-color=${r.backgroundColor}>
        <frc-canvas-mjpg-stream
          .srcs=${r.srcs}
          wait-image=${r.waitImage}
          origin=${JSON.stringify(r.origin)}
          width=${t(r.width?r.width:void 0)}
          height=${t(r.height?r.height:void 0)}
          ?hide-crosshair=${r.hideCrosshair}
          crosshair-color=${r.crosshairColor}
        ></frc-canvas-mjpg-stream>
      </frc-canvas>
    `}}const a=p();var e,n,s;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:"createCanvasMjpgStreamStory()",...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const j=["CanvasMjpgStream"];export{a as CanvasMjpgStream,j as __namedExportsOrder,P as default};
