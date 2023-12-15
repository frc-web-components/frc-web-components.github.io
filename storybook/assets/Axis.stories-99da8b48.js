import"./index-7c70066a.js";import{x as a}from"./lit-element-336289fd.js";import{o as g}from"./if-defined-83631f70.js";import{o as c}from"./style-map-1987af2b.js";import"./property-a00a2a3e.js";import"./state-0f1c18cb.js";import"./query-5f0bf39c.js";import"./transform-c376ec3f.js";const f={vertical:!1,ticks:5,min:-1,max:1,unit:"",theme:"light","background-color":"#fff","--frc-axis-text-color":"black"},P={title:"FRC/Axis",tags:["autodocs"],component:"frc-axis",args:f,argTypes:{vertical:{table:{category:"Properties",defaultValue:{summary:!1}}},ticks:{table:{category:"Properties",defaultValue:{summary:5}},control:{type:"number",min:0}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(t,r)=>{const h=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",x=r.args["background-color"];return a`
        <div
          style=${c({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:r.args.theme==="custom"?x:h})}
        >
          <div
            style=${c({[r.args.vertical?"height":"width"]:"200px",padding:"20px 20px",marginBottom:"20px"})}
          >
            ${t()}
          </div>
        </div>
      `}]};function p(t){return t.theme==="custom"?a`
      <style>
        .custom {
          --frc-axis-text-color: ${t["--frc-axis-text-color"]};
        }
      </style>
    `:t.theme==="dark"?a`
      <style>
        .dark {
          --frc-axis-text-color: white;
        }
      </style>
    `:a`
    <style>
      .light {
        --frc-axis-text-color: black;
      }
    </style>
  `}function y(t={}){return{args:{...f,...t},render:e=>a`
      ${p(e)}
      <frc-axis
        class=${e.theme}
        ?vertical=${e.vertical}
        ticks=${e.ticks}
        min=${e.min}
        max=${e.max}
        unit=${g(e.unit||void 0)}
      ></frc-axis>
    `}}const o=y({theme:"light"}),s=y({theme:"dark"});var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`createAxisStory({
  theme: 'light'
})`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,u,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`createAxisStory({
  theme: 'dark'
})`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const C=["LightTheme","DarkTheme"];export{s as DarkTheme,o as LightTheme,C as __namedExportsOrder,P as default};
