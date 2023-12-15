import"./index-3e8c2208.js";import{x as t}from"./lit-element-336289fd.js";import{o as y}from"./if-defined-83631f70.js";import{o as p}from"./style-map-1987af2b.js";import"./property-a00a2a3e.js";import"./index-02becddb.js";import"./index-4ab9e818.js";import"./state-0f1c18cb.js";import"./query-5f0bf39c.js";import"./index-7c70066a.js";import"./transform-c376ec3f.js";const d={value:0,min:0,max:5,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"V",theme:"light","background-color":"#fff","--frc-voltage-view-foreground-color":"#ffbd2f","--frc-bar-background":"#ddd","--frc-bar-color":"black","--frc-axis-text-color":"black"},C={title:"FRC/Voltage View",tags:["autodocs"],component:"frc-voltage-view",args:d,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:"g"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-voltage-view-foreground-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#ffbd2f"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,o)=>{const g=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",b=o.args["background-color"];return t` <div
        style=${p({minHeight:"50px",padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?b:g})}
      >
        ${r()}
      </div>`}]};function h(r){return r.theme==="custom"?t`
      <style>
        .custom {
          --frc-voltage-view-foreground-color: ${r["--frc-voltage-view-foreground-color"]};
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?t`
      <style>
        .dark {
          --frc-voltage-view-foreground-color: #dd9b0d;
          --frc-bar-background: #444;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
        }
      </style>
    `:t`
    <style>
      .light {
        --frc-voltage-view-foreground-color: #ffbd2f;
        --frc-bar-background: #ddd;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
      }
    </style>
  `}function n(r={}){return{args:{...d,...r},render:e=>t`
      ${h(e)}
      <frc-voltage-view
        class=${e.theme}
        value=${e.value}
        min=${e.min}
        max=${e.max}
        center=${e.center}
        precision=${e.precision}
        ?hide-text=${e.hideText}
        num-tick-marks=${e.numTickMarks}
        unit=${y(e.unit||void 0)}
      ></frc-voltage-view>
    `}}const a=n({theme:"light"}),c=n({theme:"dark"});var l,i,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`createVoltageViewStory({
  theme: 'light'
})`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,m,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`createVoltageViewStory({
  theme: 'dark'
})`,...(f=(m=c.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const M=["LightTheme","DarkTheme"];export{c as DarkTheme,a as LightTheme,M as __namedExportsOrder,C as default};
