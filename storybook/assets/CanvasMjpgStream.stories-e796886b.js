import"./canvas-6208d990.js";import{$ as m}from"./lit-element-ac510585.js";import{l as t}from"./if-defined-a8bd05d9.js";import{i as l}from"./style-map-70149a85.js";import"./query-assigned-elements-bd4ea1f7.js";import"./query-839578ff.js";import"./state-54413a7c.js";import"./get-poses-54352fcb.js";import"./directive-helpers-5324feae.js";import"./_commonjsHelpers-725317a4.js";const c={srcs:[],waitImage:"",origin:[0,0],width:void 0,height:void 0,hideCrosshair:!1,crosshairColor:"white"},b={title:"FRC Canvas/Canvas MJPG Strem",tags:["autodocs"],component:"frc-canvas-mjpg-stream",args:c,argTypes:{srcs:{table:{category:"MJPG Stream Properties",defaultValue:{summary:[]}}},waitImage:{table:{category:"MJPG Stream Properties",defaultValue:{summary:""}}},origin:{table:{category:"MJPG Stream Properties",defaultValue:{summary:[0,0]}}},width:{table:{category:"MJPG Stream Properties",defaultValue:{summary:void 0}},control:{type:"number",min:0}},height:{table:{category:"MJPG Stream Properties",defaultValue:{summary:void 0}},control:{type:"number",min:0}},hideCrosshair:{table:{category:"MJPG Stream Properties",defaultValue:{summary:!1}}},crosshairColor:{control:"color",table:{category:"MJPG Stream Properties",defaultValue:{summary:"gray"}}},backgroundColor:{control:"color",table:{category:"Canvas Properties",defaultValue:{summary:"black"}}}},decorators:[e=>m` <div
      style=${l({padding:"20px 10px",marginBottom:"5px"})}
    >
      ${e()}
    </div>`]};function n(e={}){return{args:{...c,...e},render:r=>m`
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
    `}}const a=n();var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"createCanvasMjpgStreamStory()",...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const M=["CanvasMjpgStream"];export{a as CanvasMjpgStream,M as __namedExportsOrder,b as default};
//# sourceMappingURL=CanvasMjpgStream.stories-e796886b.js.map
