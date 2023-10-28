import{r as $,s as C,$ as u,y as T}from"./lit-element-ac510585.js";import{e as g}from"./query-assigned-elements-bd4ea1f7.js";import{i as d}from"./query-839578ff.js";import{s as h}from"./transform-c376ec3f.js";import{i as S}from"./style-map-70149a85.js";function z(r,e,t){r=+r,e=+e,t=(o=arguments.length)<2?(e=r,r=0,1):o<3?1:+t;for(var a=-1,o=Math.max(0,Math.ceil((e-r)/t))|0,c=new Array(o);++a<o;)c[a]=r+a*t;return c}var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,l=(r,e,t,a)=>{for(var o=a>1?void 0:a?D(e,t):e,c=r.length-1,i;c>=0;c--)(i=r[c])&&(o=(a?i(e,t,o):i(o))||o);return a&&o&&A(e,t,o),o};function G(r){return r*Math.PI/180}function f(r){return r*180/Math.PI}function L(r,e,t){return Math.min(t,Math.max(r,e))}function n(r,e=!1){const t=G(-(r-90));return[e?-Math.cos(t):Math.cos(t),Math.sin(t)]}class s extends C{constructor(){super(...arguments),this.value=0,this.hideLabel=!1,this.precision=2,this.counterClockwise=!1,this.fromRadians=!1}setLabels(){const e=this.getGyroRadius();h(this._labels).selectAll("text").data([0,45,90,135,180,-135,-90,-45]).join(t=>t.append("text").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("font-size",15).attr("fill","var(--frc-gyro-color, #000)").text(a=>`${a}°`)).attr("x",t=>n(t,this.counterClockwise)[0]*(e+30)).attr("y",t=>-n(t,this.counterClockwise)[1]*(e+30))}setDialAngle(){const e=this.getGyroRadius(),t=this.fromRadians?f(this.value):this.value;h(this._dial).attr("x2",n(t,this.counterClockwise)[0]*(e-7)).attr("y2",-n(t,this.counterClockwise)[1]*(e-7))}addTicks(e,t,a,o){const c=this.getGyroRadius();h(e).selectAll("line").data(z(0,360,a)).join(i=>i.append("line").attr("stroke","var(--frc-gyro-color, #000)").attr("stroke-width",o)).attr("x1",i=>n(i)[0]*c).attr("y1",i=>-n(i)[1]*c).attr("x2",i=>n(i)[0]*(c+t)).attr("y2",i=>-n(i)[1]*(c+t))}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),this.resized()}resized(){const e=this.getSize();h(this._svg).attr("width",e).attr("height",e),h(this._gyro).attr("transform",`translate(${e/2},${e/2})`);const t=this.getGyroRadius();h(this._gyroEdge).attr("r",t),this.addTicks(this._minorTicks,5,5,1),this.addTicks(this._majorTicks,10,45,2),this.setLabels(),this.setDialAngle()}getSize(){const{width:e}=this.getBoundingClientRect();return e}getGyroRadius(){return this.getSize()/2-53}updated(e){(e.has("value")||e.has("fromRadians")||e.has("counterClockwise"))&&this.setDialAngle(),e.has("counterClockwise")&&this.setLabels()}render(){const t=`${(this.fromRadians?f(this.value):this.value).toFixed(L(this.precision,0,100))}`;return u`
      <div>
        ${T`
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
        `} ${this.hideLabel?null:u`<label>${t}&deg</label> `}
      </div>
    `}}s.styles=$`
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
  `;l([g({type:Number})],s.prototype,"value",2);l([g({type:Boolean,attribute:"hide-label"})],s.prototype,"hideLabel",2);l([g({type:Number})],s.prototype,"precision",2);l([g({type:Boolean,attribute:"counter-clockwise"})],s.prototype,"counterClockwise",2);l([g({type:Boolean,attribute:"from-radians"})],s.prototype,"fromRadians",2);l([d("svg")],s.prototype,"_svg",2);l([d(".dial")],s.prototype,"_dial",2);l([d(".gyro")],s.prototype,"_gyro",2);l([d(".gyro-edge")],s.prototype,"_gyroEdge",2);l([d(".minor-ticks")],s.prototype,"_minorTicks",2);l([d(".major-ticks")],s.prototype,"_majorTicks",2);l([d(".labels")],s.prototype,"_labels",2);customElements.get("frc-gyro")||customElements.define("frc-gyro",s);const _={value:0,hideLabel:!1,precision:2,counterClockwise:!1,fromRadians:!1,theme:"light","background-color":"#fff","--frc-gyro-color":"black","--frc-gyro-dial-color":"blue"},E={title:"FRC/Gyro",tags:["autodocs"],component:"frc-gyro",args:_,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},hideLabel:{table:{category:"Properties",defaultValue:{summary:!1}}},precision:{table:{category:"Properties",defaultValue:{summary:2}},control:{type:"number",min:0,step:1}},counterClockwise:{table:{category:"Properties",defaultValue:{summary:!1}}},fromRadians:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-gyro-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-gyro-dial-color":{table:{category:"Styles",defaultValue:{summary:"blue"}}}},decorators:[(r,e)=>{const a=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=e.args["background-color"];return u` <div
        style=${S({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?o:a})}
      >
        ${r()}
      </div>`}]};function M(r){return r.theme==="custom"?u`
      <style>
        .custom {
          --frc-gyro-color: ${r["--frc-gyro-color"]};
          --frc-gyro-dial-color: ${r["--frc-gyro-dial-color"]};
        }
      </style>
    `:r.theme==="dark"?u`
      <style>
        .dark {
          --frc-gyro-color: white;
          --frc-gyro-dial-color: blue;
        }
      </style>
    `:u`
    <style>
      .light {
        --frc-gyro-color: black;
        --frc-gyro-dial-color: blue;
      }
    </style>
  `}function R(r={}){return{args:{..._,...r},render:t=>u`
      ${M(t)}
      <frc-gyro
        class=${t.theme}
        value=${t.value}
        ?hide-label=${t.hideLabel}
        precision=${t.precision}
        ?counter-clockwise=${t.counterClockwise}
        ?from-radians=${t.fromRadians}
      ></frc-gyro>
    `}}const y=R({theme:"light"}),m=R({theme:"dark"});var p,b,k;y.parameters={...y.parameters,docs:{...(p=y.parameters)==null?void 0:p.docs,source:{originalSource:`createGyroStory({
  theme: 'light'
})`,...(k=(b=y.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,w,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`createGyroStory({
  theme: 'dark'
})`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const F=["LightTheme","DarkTheme"];export{m as DarkTheme,y as LightTheme,F as __namedExportsOrder,E as default};
//# sourceMappingURL=Gyro.stories-3959dc00.js.map
