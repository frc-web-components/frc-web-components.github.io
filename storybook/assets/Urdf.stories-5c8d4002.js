import{x as c}from"./lit-element-fe64f99e.js";import{o as m}from"./style-map-cd083d51.js";import{O as s,z as t}from"./field3d.es-6891dbae.js";import"./property-7226fcdb-ca5eacb2.js";import"./query-b33b5ea2-b51c1579.js";import"./units-a299d414-de746bd8.js";import"./state-504849b6-2441cf81.js";const i={game:"Evergreen",origin:"red",urdfName:t[0].name,pose:[10,5,0]},x={title:"Field 3D/URDF",tags:["autodocs"],component:"frc-field3d",args:i,argTypes:{game:{table:{category:"Field",defaultValue:{summary:"Evergreen"}},options:s.map(({game:e})=>e),control:"select"},origin:{control:"radio",options:["red","blue"],table:{category:"Field",defaultValue:"red"}},urdfName:{table:{category:"Object",defaultValue:{summary:t[0].name}},options:t.map(({name:e})=>e),control:"select"},pose:{control:"object",table:{category:"Object",defaultValue:{summary:[0,0,0]}}}},decorators:[e=>c` <div
      style=${m({padding:"20px 10px",marginBottom:"5px"})}
    >
      <style>
        frc-field3d {
          width: 100%;
          height: 500px;
        }
      </style>
      ${e()}
    </div>`],parameters:{docs:{description:{component:`To use this component import the module:\r

\`\`\`javascript\r
import "@frc-web-components/fwc/components/field3d";\r

// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r

And then add the component to your html:\r

\`\`\`html\r
<frc-field3d game="Charged Up">\r
  <frc-field3d-urdf name="R2D2" pose="[0,0,0]"></frc-field3d-urdf>\r
</frc-field3d>\r
\`\`\`\r

Or use the component in React:\r

\`\`\`jsx\r
import { Field3d, Field3dUrdf } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<Field3d game="Charged Up">\r
 <Field3dUrdf name="R2D2" pose={[0,0,0]} />\r
</Field3d>\r
\`\`\``}}}};function l(e={}){return{args:{...i,...e},parameters:{canvas:{sourceState:"shown"}},render:r=>c`
      <frc-field3d
        game=${r.game}
        origin=${r.origin}
        background-color=${r.backgroundColor}
        ?enable-vr=${r.enableVR}
      >
        <frc-field3d-urdf
          name="R2D2"
          .angles=${{rArmShx:.5,lArmShx:.5}}
          pose=${JSON.stringify(r.pose)}
        ></frc-field3d-urdf>
      </frc-field3d>
    `}}const o=l();var n,d,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"createFieldStory()",...(a=(d=o.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const $=["Field"];export{o as Field,$ as __namedExportsOrder,x as default};
