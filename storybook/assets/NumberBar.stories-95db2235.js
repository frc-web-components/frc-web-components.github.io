import"./number-bar-ba00cafa.js";import{$ as t}from"./lit-element-ac510585.js";import{l as T}from"./if-defined-a8bd05d9.js";import{i as v}from"./style-map-fc25a154.js";import"./query-assigned-elements-bd4ea1f7.js";import"./axis-84ece74a.js";import"./query-99a7b366.js";import"./transform-e88a9a97.js";const V={value:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"",theme:"light","background-color":"#fff","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-tab-axis-text-color":"black"},_={title:"FRC/Number Bar",tags:["autodocs"],component:"frc-number-bar",args:V,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-tab-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,a)=>{const $=a.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",S=a.args["background-color"];return t` <div
        style=${v({padding:"20px 10px",marginBottom:"5px",background:a.args.theme==="custom"?S:$})}
      >
        ${r()}
      </div>`}]};function P(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-tab-axis-text-color: ${r["--frc-tab-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-tab-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-tab-axis-text-color: black;
      }
    </style>
  `}function m(r={}){return{args:{...V,...r},render:e=>t`
      ${P(e)}
      <frc-number-bar
        class=${e.theme}
        value=${e.value}
        min=${e.min}
        max=${e.max}
        center=${e.center}
        precision=${e.precision}
        ?hide-text=${e.hideText}
        num-tick-marks=${e.numTickMarks}
        unit=${T(e.unit||void 0)}
      ></frc-number-bar>
    `}}const o=m({theme:"light"}),c=m({theme:"dark"}),l=m({theme:"custom","--frc-bar-foreground":"#dd9b0d",value:3.5,min:0,max:5,unit:"V"}),u=m({unit:"g",value:-.5});var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`createNumberBarStory({
  theme: 'light'
})`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,b,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`createNumberBarStory({
  theme: 'dark'
})`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,p;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`createNumberBarStory({
  theme: 'custom',
  '--frc-bar-foreground': '#dd9b0d',
  value: 3.5,
  min: 0,
  max: 5,
  unit: 'V'
})`,...(p=(y=l.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var h,k,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`createNumberBarStory({
  unit: 'g',
  value: -0.5
})`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const E=["LightTheme","DarkTheme","VoltageView","Accelerometer"];export{u as Accelerometer,c as DarkTheme,o as LightTheme,l as VoltageView,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=NumberBar.stories-95db2235.js.map