import{x as p}from"./lit-element-fe64f99e.js";import{o as g}from"./style-map-cd083d51.js";import{O as n,F as a}from"./field3d.es-6891dbae.js";import"./property-7226fcdb-ca5eacb2.js";import"./query-b33b5ea2-b51c1579.js";import"./units-a299d414-de746bd8.js";import"./state-504849b6-2441cf81.js";const f={game:n[0].game,origin:"red",backgroundColor:"black",enableVR:!1,objectName:a[0].name,pose:[0,0,0]},w={title:"Field 3D/Field3d",tags:["autodocs"],component:"frc-field3d",args:f,argTypes:{game:{table:{category:"Field",defaultValue:{summary:n[0].game}},options:n.map(({game:e})=>e),control:"select"},origin:{control:"radio",options:["red","blue"],table:{category:"Field",defaultValue:"red"}},backgroundColor:{control:"color",table:{category:"Field",defaultValue:{summary:"black"}}},enableVR:{description:"VR field can be viewed by visiting this page in the browser of a VR enabled device",table:{category:"Field",defaultValue:{summary:!1}}},objectName:{table:{category:"Object",defaultValue:{summary:a[0].name}},options:a.map(({name:e})=>e),control:"select"},pose:{control:"object",table:{category:"Object",defaultValue:{summary:[0,0,0]}}}},decorators:[e=>p` <div
      style=${g({padding:"20px 10px",marginBottom:"5px"})}
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
  <frc-field3d-object name="KitBot" pose="[0,0,0]"></frc-field3d-object>\r
</frc-field3d>\r
\`\`\`\r

Or use the component in React:\r

\`\`\`jsx\r
import { Field3d, Field3dObject } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<Field3d game="Charged Up">\r
 <Field3dObject name="KitBot" pose={[0,0,0]} />\r
</Field3d>\r
\`\`\``}}}};function u(e={}){return{args:{...f,...e},parameters:{canvas:{sourceState:"shown"}},render:r=>p`
      <frc-field3d
        game=${r.game}
        origin=${r.origin}
        background-color=${r.backgroundColor}
        ?enable-vr=${r.enableVR}
      >
        <frc-field3d-object
          name=${r.objectName}
          pose=${JSON.stringify(r.pose)}
        ></frc-field3d-object>
        <frc-field3d-urdf
          name="R2D2"
          .angles=${{rArmShx:.5,lArmShx:.5}}
        ></frc-field3d-urdf>
      </frc-field3d>
    `}}const o=u(),t=u({game:"Infinite Recharge",enableVR:!0,pose:[4,3,0]});var c,d,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"createFieldStory()",...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,s,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`createFieldStory({
  game: "Infinite Recharge",
  enableVR: true,
  pose: [4, 3, 0]
})`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const O=["Field","VRField"];export{o as Field,t as VRField,O as __namedExportsOrder,w as default};
