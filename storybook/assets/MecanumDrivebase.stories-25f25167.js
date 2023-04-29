import{r as H,s as O,$ as c}from"./lit-element-ac510585.js";import{e as p}from"./query-assigned-elements-bd4ea1f7.js";import{b as L,c as W}from"./curved-arrow-e7ee6ba9.js";import"./axis-84ece74a.js";import{i as C}from"./style-map-fc25a154.js";import"./query-99a7b366.js";import"./transform-e88a9a97.js";var E=Object.defineProperty,z=Object.getOwnPropertyDescriptor,m=(o,e,t,r)=>{for(var a=r>1?void 0:r?z(e,t):e,s=o.length-1,i;s>=0;s--)(i=o[s])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&E(e,t,a),a};function B(o){const e=o/2,t=`
    <line 
      x1="${-e}"
      y1="${-e}"
      x2="${e}"
      y2="${e}"
    />
  `,r=`
    <line 
      x1="${-e}"
      y1="${e}"
      x2="${e}"
      y2="${-e}"
    />
  `;return`<g class="x">${t} ${r}</g>`}function n(o){return Math.min(1,Math.max(o,-1))}function g(o){const r=n(o);return r>0?`
      height: ${Math.abs(r)/(1- -1)*100}%;
      top: auto;
      bottom: 50%;
    `:`
    height: ${Math.abs(r)/(1- -1)*100}%;
    top: 50%;
    bottom: auto;
  `}class d extends O{constructor(){super(),this.frontLeftMotorSpeed=0,this.frontRightMotorSpeed=0,this.rearLeftMotorSpeed=0,this.rearRightMotorSpeed=0,new ResizeObserver(()=>{this.resized()}).observe(this)}drawMotionVector(e,t,r,a){const i=this.renderRoot.querySelector("#svg").getBoundingClientRect(),b=i.width*.13,v=20,y=20,x=i.width-(b+v)*2,S=i.height-y*2,M=Math.min(x,S)/2-16,l={x:(e-t-r+a)/4,y:(e+t+r+a)/4},h=(-e+t-r+a)/4,$=Math.hypot(l.x,l.y),q=Math.atan2(l.y,l.x);if(Math.abs(h)<=.01&&$<=.01)return B(i.width*.2);let w="",R="",k="";return Math.abs(h)>.01&&(w=L(0,M,-h*Math.PI,0,8),R=L(Math.PI,M,-h*Math.PI,0,8)),$>.01&&(k=W($*M,-q,0,8)),`<g class="arrow">${w} ${R} ${k}</g>`}drawDrivetrain(){const t=this.renderRoot.querySelector("#svg").getBoundingClientRect(),r=t.width*.13,a=Math.min(t.width*.13,t.height*.15),s=20,i=20,b=`
      <rect 
        width="calc(100% - ${(r+s)*2}px)" 
        height="calc(100% - ${i*2}px)"
        x="${r+s}" 
        y="20px" 
      />
    `,v=`
      <rect 
        width="${r}px" 
        height="${a*2}" 
        x="${s}px" 
        y="${i}px" 
      />
    `,y=`
      <rect 
        width="${r}px" 
        height="${a*2}" 
        x="calc(100% - ${r+s}px)" 
        y="${i}px" 
      />
    `,x=`
      <rect 
        width="${r}px" 
        height="${a*2}" 
        x="${s}px"
        y="calc(100% - ${a*2+i}px)"
      />
    `,S=`
      <rect 
        width="${r}px" 
        height="${a*2}" 
        x="calc(100% - ${r+s}px)" 
        y="calc(100% - ${a*2+i}px)"
      />
    `;return b+v+y+x+S}getFlForegroundStyle(){return g(this.frontLeftMotorSpeed)}getFrForegroundStyle(){return g(this.frontRightMotorSpeed)}getRlForegroundStyle(){return g(this.rearLeftMotorSpeed)}getRrForegroundStyle(){return g(this.rearRightMotorSpeed)}firstUpdated(){const e=this.drawMotionVector(0,0,0,0);this.renderRoot.querySelector("#drivetrain").innerHTML=this.drawDrivetrain(),this.renderRoot.querySelector("#forceVector").innerHTML=e}resized(){const e=this.drawMotionVector(n(this.frontLeftMotorSpeed),n(this.frontRightMotorSpeed),n(this.rearLeftMotorSpeed),n(this.rearRightMotorSpeed));this.renderRoot.querySelector("#forceVector").innerHTML=e;const r=this.renderRoot.querySelector("#svg").getBoundingClientRect();this.renderRoot.querySelector("#forceVector").style.transform=`translate(${r.width*.5}px, ${r.height*.5}px)`,this.renderRoot.querySelector("#drivetrain").innerHTML=this.drawDrivetrain()}updated(e){super.updated(e);const t=this.drawMotionVector(n(this.frontLeftMotorSpeed),n(this.frontRightMotorSpeed),n(this.rearLeftMotorSpeed),n(this.rearRightMotorSpeed));this.renderRoot.querySelector("#forceVector").innerHTML=t}render(){return c`
      <div class="diff-drive-container">
        <div class="speed-pair">
          <div class="speed">
            <frc-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getFlForegroundStyle()}"
              ></div>
            </div>
          </div>
          <div class="speed">
            <frc-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getRlForegroundStyle()}"
              ></div>
            </div>
          </div>
        </div>
        <svg id="svg">
          <g id="forceVector"></g>
          <g id="drivetrain" class="drivetrain"></g>
        </svg>
        <div class="speed-pair">
          <div class="speed">
            <frc-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getFrForegroundStyle()}"
              ></div>
            </div>
          </div>
          <div class="speed">
            <frc-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getRrForegroundStyle()}"
              ></div>
            </div>
          </div>
        </div>
      </div>
    `}}d.styles=H`
    :host {
      display: inline-block;
      width: 400px;
      height: 300px;
      padding: 0 10px;
      font-family: sans-serif;
    }

    .diff-drive-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    svg {
      overflow: overlay;
      flex: 1;
      height: 100%;
    }

    svg .x {
      stroke: rgb(50, 50, 255);
      stroke-width: 2;
    }

    svg .arrow line,
    svg .arrow path {
      stroke: rgb(50, 50, 255);
      stroke-width: 2;
      fill: none;
    }

    svg .arrow polygon {
      stroke: rgb(50, 50, 255);
      fill: rgb(50, 50, 255);
    }

    svg .drivetrain {
      fill: none;
      stroke: var(--frc-mecanum-drivebase-drivetrain-color, #000);
    }

    .bar {
      position: relative;
      height: calc(100% - 30px);
      width: 20px;
      border-radius: 3px;
      margin: 15px 0;
      background: var(--frc-bar-background, #ddd);
    }

    .speed-pair {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .speed {
      display: flex;
      height: 48%;
      flex-direction: row;
      align-items: center;
      margin-left: 30px;
    }

    frc-axis {
      width: 10px;
      height: calc(100% - 35px);
    }

    .foreground {
      position: absolute;
      top: 0;
      width: 20px;
      background: var(--frc-bar-foreground, lightblue);
      border-radius: 3px;
    }
  `;m([p({type:Number,attribute:"front-left-motor-speed"})],d.prototype,"frontLeftMotorSpeed",2);m([p({type:Number,attribute:"front-right-motor-speed"})],d.prototype,"frontRightMotorSpeed",2);m([p({type:Number,attribute:"rear-left-motor-speed"})],d.prototype,"rearLeftMotorSpeed",2);m([p({type:Number,attribute:"rear-right-motor-speed"})],d.prototype,"rearRightMotorSpeed",2);customElements.get("frc-mecanum-drivebase")||customElements.define("frc-mecanum-drivebase",d);const N={frontLeftMotorSpeed:0,frontRightMotorSpeed:0,rearLeftMotorSpeed:0,rearRightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-mecanum-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-tab-axis-text-color":"black"},Y={title:"FRC/Mecanum Drivebase",tags:["autodocs"],component:"frc-mecanum-drivebase",args:N,argTypes:{frontLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},frontRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-mecanum-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-tab-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(o,e)=>{const r=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=e.args["background-color"];return c` <div
        style=${C({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?a:r})}
      >
        ${o()}
      </div>`}]};function I(o){return o.theme==="custom"?c`
      <style>
        .custom {
          --frc-mecanum-drivebase-drivetrain-color: ${o["--frc-mecanum-drivebase-drivetrain-color"]};
          --frc-bar-background: ${o["--frc-bar-background"]};
          --frc-bar-foreground: ${o["--frc-bar-foreground"]};
          --frc-tab-axis-text-color: ${o["--frc-tab-axis-text-color"]};
        }
      </style>
    `:o.theme==="dark"?c`
      <style>
        .dark {
          --frc-mecanum-drivebase-drivetrain-color: #aaa;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-tab-axis-text-color: white;
        }
      </style>
    `:c`
    <style>
      .light {
        --frc-mecanum-drivebase-drivetrain-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-tab-axis-text-color: black;
      }
    </style>
  `}function _(o={}){return{args:{...N,...o},render:t=>c`
      ${I(t)}
      <frc-mecanum-drivebase
        class=${t.theme}
        front-left-motor-speed=${t.frontLeftMotorSpeed}
        front-right-motor-speed=${t.frontRightMotorSpeed}
        rear-left-motor-speed=${t.rearLeftMotorSpeed}
        rear-right-motor-speed=${t.rearRightMotorSpeed}
      ></frc-mecanum-drivebase>
    `}}const f=_({theme:"light"}),u=_({theme:"dark"});var V,F,D;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(D=(F=f.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var P,T,A;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Z=["LightTheme","DarkTheme"];export{u as DarkTheme,f as LightTheme,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=MecanumDrivebase.stories-25f25167.js.map
