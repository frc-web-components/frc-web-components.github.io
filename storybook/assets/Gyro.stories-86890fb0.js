import{s as C,i as h,k as T,X as f,Y as S}from"./property-293dc01c-d6840d48.js";import{h as d}from"./query-b33b5ea2-b51c1579.js";import{E as u}from"./transform-bc2573b1-2dde8094.js";import{x as m}from"./lit-element-37c36932.js";import{o as j}from"./style-map-4c049cd0.js";function A(r,e,t){r=+r,e=+e,t=(o=arguments.length)<2?(e=r,r=0,1):o<3?1:+t;for(var s=-1,o=Math.max(0,Math.ceil((e-r)/t))|0,c=new Array(o);++s<o;)c[s]=r+s*t;return c}var G=Object.defineProperty,L=Object.getOwnPropertyDescriptor,l=(r,e,t,s)=>{for(var o=s>1?void 0:s?L(e,t):e,c=r.length-1,i;c>=0;c--)(i=r[c])&&(o=(s?i(e,t,o):i(o))||o);return s&&o&&G(e,t,o),o};function z(r){return r*Math.PI/180}function p(r){return r*180/Math.PI}function M(r,e,t){return Math.min(t,Math.max(r,e))}function n(r,e=!1){const t=z(-(r-90));return[e?-Math.cos(t):Math.cos(t),Math.sin(t)]}class a extends T{constructor(){super(...arguments),this.value=0,this.hideLabel=!1,this.precision=2,this.counterClockwise=!1,this.fromRadians=!1}setLabels(){const e=this.getGyroRadius();u(this._labels).selectAll("text").data([0,45,90,135,180,-135,-90,-45]).join(t=>t.append("text").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("font-size",15).attr("fill","var(--frc-gyro-color, #000)").text(s=>`${s}°`)).attr("x",t=>n(t,this.counterClockwise)[0]*(e+30)).attr("y",t=>-n(t,this.counterClockwise)[1]*(e+30))}setDialAngle(){const e=this.getGyroRadius(),t=this.fromRadians?p(this.value):this.value;u(this._dial).attr("x2",n(t,this.counterClockwise)[0]*(e-7)).attr("y2",-n(t,this.counterClockwise)[1]*(e-7))}addTicks(e,t,s,o){const c=this.getGyroRadius();u(e).selectAll("line").data(A(0,360,s)).join(i=>i.append("line").attr("stroke","var(--frc-gyro-color, #000)").attr("stroke-width",o)).attr("x1",i=>n(i)[0]*c).attr("y1",i=>-n(i)[1]*c).attr("x2",i=>n(i)[0]*(c+t)).attr("y2",i=>-n(i)[1]*(c+t))}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),this.resized()}resized(){const e=this.getSize();u(this._svg).attr("width",e).attr("height",e),u(this._gyro).attr("transform",`translate(${e/2},${e/2})`);const t=this.getGyroRadius();u(this._gyroEdge).attr("r",t),this.addTicks(this._minorTicks,5,5,1),this.addTicks(this._majorTicks,10,45,2),this.setLabels(),this.setDialAngle()}getSize(){const{width:e}=this.getBoundingClientRect();return e}getGyroRadius(){return this.getSize()/2-53}updated(e){(e.has("value")||e.has("fromRadians")||e.has("counterClockwise"))&&this.setDialAngle(),e.has("counterClockwise")&&this.setLabels()}render(){const e=`${(this.fromRadians?p(this.value):this.value).toFixed(M(this.precision,0,100))}`;return f`
      <div>
        ${S`
          <svg>
            <g class="gyro">
              <circle class="gyro-edge" stroke-width="2" stroke="var(--frc-gyro-color, #000)" style="fill: none"></circle>
              <g class="minor-ticks"></g>
              <g class="major-ticks"></g>
              <g class="labels"></g>
              <circle class="dial-circle" r="9"></circle>
              <line class="dial" x1="0" x2="0"></line>
            </g>
          </svg>
        `} ${this.hideLabel?null:f`<label>${e}&deg</label> `}
      </div>
    `}}a.styles=C`
    :host {
      font-family: sans-serif;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 300px;
      height: auto;
    }

    svg {
      width: 100%;
    }

    label {
      color: var(--frc-gyro-color, #000);
      text-align: center;
      display: block;
      font-size: 16px;
    }

    .dial-circle {
      fill: var(--frc-gyro-dial-color, blue);
    }

    .dial {
      stroke: var(--frc-gyro-dial-color, blue);
      stroke-width: 3;
    }
  `;l([h({type:Number})],a.prototype,"value",2);l([h({type:Boolean,attribute:"hide-label"})],a.prototype,"hideLabel",2);l([h({type:Number})],a.prototype,"precision",2);l([h({type:Boolean,attribute:"counter-clockwise"})],a.prototype,"counterClockwise",2);l([h({type:Boolean,attribute:"from-radians"})],a.prototype,"fromRadians",2);l([d("svg")],a.prototype,"_svg",2);l([d(".dial")],a.prototype,"_dial",2);l([d(".gyro")],a.prototype,"_gyro",2);l([d(".gyro-edge")],a.prototype,"_gyroEdge",2);l([d(".minor-ticks")],a.prototype,"_minorTicks",2);l([d(".major-ticks")],a.prototype,"_majorTicks",2);l([d(".labels")],a.prototype,"_labels",2);customElements.get("frc-gyro")||customElements.define("frc-gyro",a);const R={value:0,hideLabel:!1,precision:2,counterClockwise:!1,fromRadians:!1,theme:"light","background-color":"#fff","--frc-gyro-color":"black","--frc-gyro-dial-color":"blue"},F={title:"FRC/Gyro",tags:["autodocs"],component:"frc-gyro",args:R,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},hideLabel:{table:{category:"Properties",defaultValue:{summary:!1}}},precision:{table:{category:"Properties",defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},counterClockwise:{table:{category:"Properties",defaultValue:{summary:!1}}},fromRadians:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-gyro-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-gyro-dial-color":{table:{category:"Styles",defaultValue:{summary:"blue"}}}},decorators:[(r,e)=>{const s=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=e.args["background-color"];return m` <div
        style=${j({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?o:s})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/gyro";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-gyro value="90"></frc-gyro>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Gyro } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Gyro value={90} />\r
\`\`\``}}}};function P(r){return r.theme==="custom"?m`
      <style>
        .custom {
          --frc-gyro-color: ${r["--frc-gyro-color"]};
          --frc-gyro-dial-color: ${r["--frc-gyro-dial-color"]};
        }
      </style>
    `:r.theme==="dark"?m`
      <style>
        .dark {
          --frc-gyro-color: white;
          --frc-gyro-dial-color: blue;
        }
      </style>
    `:m`
    <style>
      .light {
        --frc-gyro-color: black;
        --frc-gyro-dial-color: blue;
      }
    </style>
  `}function _(r={}){return{args:{...R,...r},render:t=>m`
      ${P(t)}
      <frc-gyro
        class=${t.theme}
        value=${t.value}
        ?hide-label=${t.hideLabel}
        precision=${t.precision}
        ?counter-clockwise=${t.counterClockwise}
        ?from-radians=${t.fromRadians}
      ></frc-gyro>
    `}}const y=_({theme:"light"}),g=_({theme:"dark"});var b,k,v;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`createGyroStory({
  theme: 'light'
})`,...(v=(k=y.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,x,$;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`createGyroStory({
  theme: 'dark'
})`,...($=(x=g.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const I=["LightTheme","DarkTheme"];export{g as DarkTheme,y as LightTheme,I as __namedExportsOrder,F as default};
