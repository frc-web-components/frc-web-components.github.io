import"./index-db942aae.js";import{$ as e}from"./lit-element-ac510585.js";import{i as y}from"./style-map-70149a85.js";import"./query-assigned-elements-bd4ea1f7.js";const b={options:["On","Off"],value:"",direction:"vertical",theme:"light","background-color":"#fff","--frc-button-background-color":"rgb(230, 230, 230)","--frc-button-text-color":"black","--frc-button-toggled-background-color":"black","--frc-button-toggled-text-color":"white"},$={title:"FRC/Toggle Group",tags:["autodocs"],component:"frc-toggle-group",args:b,argTypes:{options:{control:"object",table:{category:"Properties",defaultValue:{summary:["On","Off"]}}},value:{table:{category:"Properties",defaultValue:{summary:""}}},direction:{table:{category:"Properties",defaultValue:"vertical"},options:["vertical","horizontal"],control:"select"},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-button-background-color":{table:{category:"Styles",defaultValue:{summary:"rgb(230, 230, 230)"}}},"--frc-button-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-background-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-button-toggled-text-color":{table:{category:"Styles",defaultValue:{summary:"white"}}}},decorators:[(t,r)=>{const i=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",m=r.args["background-color"];return e` <div
        style=${y({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?m:i})}
      >
        ${t()}
      </div>`}]};function k(t){return t.theme==="custom"?e`
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
  `}function f(t={}){return{args:{...b,...t},render:o=>e`
      ${k(o)}
      <frc-toggle-group
        class=${o.theme}
        options=${JSON.stringify(o.options)}
        value=${o.value}
        direction=${o.direction}
      ></frc-toggle-group>
    `}}const c=f({theme:"light"}),l=f({theme:"dark"});var a,u,n;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`createToggleGroupStory({
  theme: 'light'
})`,...(n=(u=c.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var g,s,d;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`createToggleGroupStory({
  theme: 'dark'
})`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const T=["LightTheme","DarkTheme"];export{l as DarkTheme,c as LightTheme,T as __namedExportsOrder,$ as default};
//# sourceMappingURL=ToggleGroup.stories-24a59dfc.js.map
