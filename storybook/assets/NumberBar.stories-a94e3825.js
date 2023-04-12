import{r as w,s as B,$ as s}from"./lit-element-ac510585.js";import{e as i,n as _}from"./query-assigned-elements-a1ee9091.js";import"./table-axis-4d38348b.js";import{l as D}from"./if-defined-a8bd05d9.js";import{i as A}from"./style-map-fc25a154.js";import"./transform-e88a9a97.js";var O=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(e,t,r,u)=>{for(var o=u>1?void 0:u?C(t,r):t,p=e.length-1,f;p>=0;p--)(f=e[p])&&(o=(u?f(t,r,o):f(o))||o);return u&&o&&O(t,r,o),o};function j(e,t,r){return Math.min(r,Math.max(e,t))}let a=class extends B{constructor(){super(...arguments),this.value=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit=""}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max);return s`
      <frc-bar
        value="${this.value}"
        min="${e}"
        max="${t}"
        center="${this.center}"
        part="bar"
      >
        ${this.hideText?"":s`
              ${this.value.toFixed(j(this.precision,0,100))} ${this.unit}
            `}
      </frc-bar>
      ${this.numTickMarks>0?s`
            <frc-table-axis
              part="axis"
              ticks="${this.numTickMarks}"
              .range="${[e,t]}"
              unit="${this.unit}"
            ></frc-table-axis>
          `:""}
    `}};a.styles=[w`
      :host {
        display: inline-block;
        width: 300px;
        height: auto;
        font-family: sans-serif;
      }

      :host([num-tick-marks='0']) [part='bar'] {
        width: 100%;
        margin: 0;
      }

      [part='bar'] {
        position: relative;
        width: calc(100% - 40px);
        height: 20px;
        margin: 0 20px;
        border-radius: 3px;
      }

      [part='axis'] {
        width: calc(100% - 45px);
        margin: 2px auto 0;
        display: block;
      }
    `];c([i({type:Number})],a.prototype,"value",2);c([i({type:Number})],a.prototype,"min",2);c([i({type:Number})],a.prototype,"max",2);c([i({type:Number})],a.prototype,"center",2);c([i({type:Number})],a.prototype,"precision",2);c([i({type:Boolean,attribute:"hide-text"})],a.prototype,"hideText",2);c([i({type:Number,attribute:"num-tick-marks"})],a.prototype,"numTickMarks",2);c([i({type:String})],a.prototype,"unit",2);a=c([_("frc-number-bar")],a);const M={value:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"",theme:"light","background-color":"#fff","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-tab-axis-text-color":"black"},H={title:"FRC/Number Bar",tags:["autodocs"],component:"frc-number-bar",args:M,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-tab-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,t)=>{const u=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=t.args["background-color"];return s` <div
        style=${A({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?o:u})}
      >
        ${e()}
      </div>`}]};function F(e){return e.theme==="custom"?s`
      <style>
        .custom {
          --frc-bar-background: ${e["--frc-bar-background"]};
          --frc-bar-foreground: ${e["--frc-bar-foreground"]};
          --frc-bar-color: ${e["--frc-bar-color"]};
          --frc-tab-axis-text-color: ${e["--frc-tab-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?s`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-tab-axis-text-color: white;
        }
      </style>
    `:s`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-tab-axis-text-color: black;
      }
    </style>
  `}function d(e={}){return{args:{...M,...e},render:r=>s`
      ${F(r)}
      <frc-number-bar
        class=${r.theme}
        value=${r.value}
        min=${r.min}
        max=${r.max}
        center=${r.center}
        precision=${r.precision}
        ?hide-text=${r.hideText}
        num-tick-marks=${r.numTickMarks}
        unit=${D(r.unit||void 0)}
      ></frc-number-bar>
    `}}const l=d({theme:"light"}),m=d({theme:"dark"}),n=d({theme:"custom","--frc-bar-foreground":"#dd9b0d",value:3.5,min:0,max:5,unit:"V"}),b=d({unit:"g",value:-.5});var h,y,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`createNumberBarStory({
  theme: 'light'
})`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,k,$;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`createNumberBarStory({
  theme: 'dark'
})`,...($=(k=m.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var v,T,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`createNumberBarStory({
  theme: 'custom',
  '--frc-bar-foreground': '#dd9b0d',
  value: 3.5,
  min: 0,
  max: 5,
  unit: 'V'
})`,...(V=(T=n.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var S,N,P;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`createNumberBarStory({
  unit: 'g',
  value: -0.5
})`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const I=["LightTheme","DarkTheme","VoltageView","Accelerometer"];export{b as Accelerometer,m as DarkTheme,l as LightTheme,n as VoltageView,I as __namedExportsOrder,H as default};
//# sourceMappingURL=NumberBar.stories-a94e3825.js.map
