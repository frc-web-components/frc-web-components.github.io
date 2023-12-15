import{i as $,s as T,x as i}from"./lit-element-336289fd.js";import{n as a}from"./property-a00a2a3e.js";import"./index-105a0caf.js";import"./index-4ab9e818.js";import"./index-7c70066a.js";import{o as V}from"./style-map-1987af2b.js";import"./index-02becddb.js";import"./state-0f1c18cb.js";import"./query-5f0bf39c.js";import"./transform-c376ec3f.js";var w=Object.defineProperty,A=Object.getOwnPropertyDescriptor,c=(r,t,e,s)=>{for(var l=s>1?void 0:s?A(t,e):t,n=r.length-1,d;n>=0;n--)(d=r[n])&&(l=(s?d(t,e,l):d(l))||l);return s&&l&&w(t,e,l),l};class o extends T{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}renderAccelerometer(t,e){return i`
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
    `}render(){return i`
      ${this.renderAccelerometer("x",0)} ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}o.styles=$`
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
  `;c([a({type:Number})],o.prototype,"x",2);c([a({type:Number})],o.prototype,"y",2);c([a({type:Number})],o.prototype,"z",2);c([a({type:Number})],o.prototype,"min",2);c([a({type:Number})],o.prototype,"max",2);c([a({type:Number})],o.prototype,"center",2);c([a({type:Number})],o.prototype,"precision",2);c([a({type:Boolean,attribute:"hide-text"})],o.prototype,"hideText",2);c([a({type:Number,attribute:"num-tick-marks"})],o.prototype,"numTickMarks",2);c([a({type:String})],o.prototype,"unit",2);customElements.get("frc-3-axis-accelerometer")||customElements.define("frc-3-axis-accelerometer",o);const g={x:0,y:0,z:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"g",theme:"light","background-color":"white","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-axis-text-color":"black","--frc-3-axis-accelerometer-label-color":"black"},j={title:"FRC/3-Axis Accelerometer",tags:["autodocs"],component:"frc-3-axis-accelerometer",args:g,argTypes:{x:{table:{category:"Properties",defaultValue:{summary:0}}},y:{table:{category:"Properties",defaultValue:{summary:0}}},z:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"white"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-3-axis-accelerometer-label-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,t)=>{const s=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",l=t.args["background-color"];return i` <div
        style=${V({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?l:s})}
      >
        ${r()}
      </div>`}]};function P(r){return r.theme==="custom"?i`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
          --frc-3-axis-accelerometer-label-color: ${r["--frc-3-axis-accelerometer-label-color"]};
        }
      </style>
    `:r.theme==="dark"?i`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
          --frc-3-axis-accelerometer-label-color: white;
        }
      </style>
    `:i`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
        --frc-3-axis-accelerometer-label-color: black;
      }
    </style>
  `}function k(r={}){return{args:{...g,...r},render:e=>i`
      ${P(e)}
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
    `}}const m=k({theme:"light"}),u=k({theme:"dark"});var f,p,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'light'
})`,...(b=(p=m.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,h,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'dark'
})`,...(x=(h=u.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const B=["LightTheme","DarkTheme"];export{u as DarkTheme,m as LightTheme,B as __namedExportsOrder,j as default};
