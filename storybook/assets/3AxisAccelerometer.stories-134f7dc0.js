import{r as v,s as P,$ as p}from"./lit-element-ac510585.js";import{e as o}from"./query-assigned-elements-bd4ea1f7.js";import{N as V}from"./number-bar-ba00cafa.js";import"./axis-84ece74a.js";import{i as w}from"./style-map-fc25a154.js";import"./query-99a7b366.js";import"./transform-e88a9a97.js";var N=Object.defineProperty,A=Object.getOwnPropertyDescriptor,m=(r,t,e,l)=>{for(var a=l>1?void 0:l?A(t,e):t,u=r.length-1,n;u>=0;u--)(n=r[u])&&(a=(l?n(t,e,a):n(a))||a);return l&&a&&N(t,e,a),a};class s extends V{constructor(){super(...arguments),this.value=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}}m([o({type:Number})],s.prototype,"value",2);m([o({type:Number})],s.prototype,"min",2);m([o({type:Number})],s.prototype,"max",2);m([o({type:Number})],s.prototype,"center",2);m([o({type:Number})],s.prototype,"precision",2);m([o({type:Boolean,attribute:"hide-text"})],s.prototype,"hideText",2);m([o({type:Number,attribute:"num-tick-marks"})],s.prototype,"numTickMarks",2);m([o({type:String})],s.prototype,"unit",2);customElements.get("frc-accelerometer")||customElements.define("frc-accelerometer",s);var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,i=(r,t,e,l)=>{for(var a=l>1?void 0:l?_(t,e):t,u=r.length-1,n;u>=0;u--)(n=r[u])&&(a=(l?n(t,e,a):n(a))||a);return l&&a&&S(t,e,a),a};class c extends P{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}renderAccelerometer(t,e){return p`
      <div part="accelerometer">
        <label part="label">${t}</label>
        <frc-accelerometer
          part="${t}"
          value="${this[t]||0}"
          min="${this.min}"
          max="${this.max}"
          center="${this.center}"
          precision="${this.precision}"
          ?hide-text="${this.hideText}"
          num-tick-marks="${e}"
          unit="${this.unit}"
        ></frc-accelerometer>
      </div>
    `}render(){return p`
      ${this.renderAccelerometer("x",0)} ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}c.styles=v`
    :host {
      display: inline-flex;
      flex-direction: column;
      height: auto;
      font-family: sans-serif;
      width: 300px;
    }

    [part='accelerometer'] {
      width: 100%;
      display: flex;
      margin-bottom: 10px;
    }

    [part='accelerometer']:last-child {
      margin-bottom: 0;
    }

    [part='accelerometer'] label {
      width: 10px;
      padding-top: 2px;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--frc-3-axis-accelerometer-label-color, #000);
    }

    frc-accelerometer {
      width: 100%;
      flex: 1;
    }

    :host(:not([num-tick-marks='0'])) frc-accelerometer::part(bar) {
      width: calc(100% - 40px);
      margin: 0 20px;
    }

    :host([num-tick-marks='0']) frc-accelerometer::part(bar) {
      width: 100%;
      margin: 0;
    }
  `;i([o({type:Number})],c.prototype,"x",2);i([o({type:Number})],c.prototype,"y",2);i([o({type:Number})],c.prototype,"z",2);i([o({type:Number})],c.prototype,"min",2);i([o({type:Number})],c.prototype,"max",2);i([o({type:Number})],c.prototype,"center",2);i([o({type:Number})],c.prototype,"precision",2);i([o({type:Boolean,attribute:"hide-text"})],c.prototype,"hideText",2);i([o({type:Number,attribute:"num-tick-marks"})],c.prototype,"numTickMarks",2);i([o({type:String})],c.prototype,"unit",2);customElements.get("frc-3-axis-accelerometer")||customElements.define("frc-3-axis-accelerometer",c);const $={x:0,y:0,z:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"g",theme:"light","background-color":"white","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-tab-axis-text-color":"black","--frc-3-axis-accelerometer-label-color":"black"},L={title:"FRC/3-Axis Accelerometer",tags:["autodocs"],component:"frc-3-axis-accelerometer",args:$,argTypes:{x:{table:{category:"Properties",defaultValue:{summary:0}}},y:{table:{category:"Properties",defaultValue:{summary:0}}},z:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"white"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-tab-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-3-axis-accelerometer-label-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,t)=>{const l=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=t.args["background-color"];return p` <div
        style=${w({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?a:l})}
      >
        ${r()}
      </div>`}]};function O(r){return r.theme==="custom"?p`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-tab-axis-text-color: ${r["--frc-tab-axis-text-color"]};
          --frc-3-axis-accelerometer-label-color: ${r["--frc-3-axis-accelerometer-label-color"]};
        }
      </style>
    `:r.theme==="dark"?p`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-tab-axis-text-color: white;
          --frc-3-axis-accelerometer-label-color: white;
        }
      </style>
    `:p`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-tab-axis-text-color: black;
        --frc-3-axis-accelerometer-label-color: black;
      }
    </style>
  `}function T(r={}){return{args:{...$,...r},render:e=>p`
      ${O(e)}
      <frc-3-axis-accelerometer
        class=${e.theme}
        x=${e.x}
        y=${e.y}
        z=${e.z}
        min=${e.min}
        max=${e.max}
        center=${e.center}
        precision=${e.precision}
        ?hide-text=${e.hideText}
        num-tick-marks=${e.numTickMarks}
        unit=${e.unit}
      ></frc-3-axis-accelerometer>
    `}}const f=T({theme:"light"}),b=T({theme:"dark"});var y,d,h;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'light'
})`,...(h=(d=f.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var x,g,k;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'dark'
})`,...(k=(g=b.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const F=["LightTheme","DarkTheme"];export{b as DarkTheme,f as LightTheme,F as __namedExportsOrder,L as default};
//# sourceMappingURL=3AxisAccelerometer.stories-134f7dc0.js.map
