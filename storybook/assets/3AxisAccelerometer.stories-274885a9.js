import{s as T,i as c,k as w,X as d}from"./property-7226fcdb-ca5eacb2.js";import"./accelerometer.es-a18ef7e0.js";import"./bar.es-60d50a7c.js";import"./axis.es-ac91c8c7.js";import"./number-bar.es-e5c3174f.js";import"./transform-bc2573b1-2dde8094.js";import{x as m}from"./lit-element-fe64f99e.js";import{o as A}from"./style-map-cd083d51.js";import"./state-504849b6-2441cf81.js";import"./query-b33b5ea2-b51c1579.js";var V=Object.defineProperty,S=Object.getOwnPropertyDescriptor,a=(r,t,e,i)=>{for(var l=i>1?void 0:i?S(t,e):t,u=r.length-1,p;u>=0;u--)(p=r[u])&&(l=(i?p(t,e,l):p(l))||l);return i&&l&&V(t,e,l),l};class o extends w{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}renderAccelerometer(t,e){return d`
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
    `}render(){return d`
      ${this.renderAccelerometer("x",0)} ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}o.styles=T`
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
  `;a([c({type:Number})],o.prototype,"x",2);a([c({type:Number})],o.prototype,"y",2);a([c({type:Number})],o.prototype,"z",2);a([c({type:Number})],o.prototype,"min",2);a([c({type:Number})],o.prototype,"max",2);a([c({type:Number})],o.prototype,"center",2);a([c({type:Number})],o.prototype,"precision",2);a([c({type:Boolean,attribute:"hide-text"})],o.prototype,"hideText",2);a([c({type:Number,attribute:"num-tick-marks"})],o.prototype,"numTickMarks",2);a([c({type:String})],o.prototype,"unit",2);customElements.get("frc-3-axis-accelerometer")||customElements.define("frc-3-axis-accelerometer",o);const k={x:0,y:0,z:0,min:-1,max:1,center:0,precision:2,hideText:!1,numTickMarks:3,unit:"g",theme:"light","background-color":"white","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-axis-text-color":"black","--frc-3-axis-accelerometer-label-color":"black"},L={title:"FRC/3-Axis Accelerometer",tags:["autodocs"],component:"frc-3-axis-accelerometer",args:k,argTypes:{x:{table:{category:"Properties",defaultValue:{summary:0}}},y:{table:{category:"Properties",defaultValue:{summary:0}}},z:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},center:{table:{category:"Properties",defaultValue:{summary:0}}},precision:{table:{category:"Properties",defaultValue:{summary:2}}},hideText:{table:{category:"Properties",defaultValue:{summary:!1}}},numTickMarks:{table:{category:"Properties",defaultValue:{summary:3}}},unit:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"white"}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-3-axis-accelerometer-label-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,t)=>{const i=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",l=t.args["background-color"];return m` <div
        style=${A({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?l:i})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/3-axis-accelerometer";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-3-axis-accelerometer x="0" y=".5" z="-1"></frc-3-axis-accelerometer>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { ThreeAxisAccelerometer } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<ThreeAxisAccelerometer x={0} y={.5} z={-1} />\r
\`\`\``}}}};function P(r){return r.theme==="custom"?m`
      <style>
        .custom {
          --frc-bar-background: ${r["--frc-bar-background"]};
          --frc-bar-foreground: ${r["--frc-bar-foreground"]};
          --frc-bar-color: ${r["--frc-bar-color"]};
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
          --frc-3-axis-accelerometer-label-color: ${r["--frc-3-axis-accelerometer-label-color"]};
        }
      </style>
    `:r.theme==="dark"?m`
      <style>
        .dark {
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
          --frc-3-axis-accelerometer-label-color: white;
        }
      </style>
    `:m`
    <style>
      .light {
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
        --frc-3-axis-accelerometer-label-color: black;
      }
    </style>
  `}function $(r={}){return{args:{...k,...r},render:e=>m`
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
    `}}const s=$({theme:"light"}),n=$({theme:"dark"});var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'light'
})`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,x,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`createAccelerometerStory({
  theme: 'dark'
})`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const R=["LightTheme","DarkTheme"];export{n as DarkTheme,s as LightTheme,R as __namedExportsOrder,L as default};
