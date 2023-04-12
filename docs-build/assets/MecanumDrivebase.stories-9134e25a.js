import{r as A,s as N,$ as c}from"./lit-element-ac510585.js";import{e as m,n as _}from"./query-assigned-elements-a1ee9091.js";import{b as k,c as H}from"./curved-arrow-e7ee6ba9.js";import"./table-axis-4d38348b.js";import{i as O}from"./style-map-fc25a154.js";import"./transform-e88a9a97.js";var W=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(e,t,r,o)=>{for(var a=o>1?void 0:o?C(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&W(t,r,a),a};function z(e){const t=e/2,r=`
    <line 
      x1="${-t}"
      y1="${-t}"
      x2="${t}"
      y2="${t}"
    />
  `,o=`
    <line 
      x1="${-t}"
      y1="${t}"
      x2="${t}"
      y2="${-t}"
    />
  `;return`<g class="x">${r} ${o}</g>`}function s(e){return Math.min(1,Math.max(e,-1))}function f(e){const o=s(e);return o>0?`
      height: ${Math.abs(o)/(1- -1)*100}%;
      top: auto;
      bottom: 50%;
    `:`
    height: ${Math.abs(o)/(1- -1)*100}%;
    top: 50%;
    bottom: auto;
  `}let d=class extends N{constructor(){super(),this.frontLeftMotorSpeed=0,this.frontRightMotorSpeed=0,this.rearLeftMotorSpeed=0,this.rearRightMotorSpeed=0,new ResizeObserver(()=>{this.resized()}).observe(this)}drawMotionVector(e,t,r,o){const i=this.shadowRoot.getElementById("svg").getBoundingClientRect(),n=i.width*.13,b=20,v=20,y=i.width-(n+b)*2,x=i.height-v*2,M=Math.min(y,x)/2-16,h={x:(e-t-r+o)/4,y:(e+t+r+o)/4},g=(-e+t-r+o)/4,$=Math.hypot(h.x,h.y),E=Math.atan2(h.y,h.x);if(Math.abs(g)<=.01&&$<=.01)return z(i.width*.2);let w="",S="",R="";return Math.abs(g)>.01&&(w=k(0,M,-g*Math.PI,0,8),S=k(Math.PI,M,-g*Math.PI,0,8)),$>.01&&(R=H($*M,-E,0,8)),`<g class="arrow">${w} ${S} ${R}</g>`}drawDrivetrain(){const t=this.shadowRoot.getElementById("svg").getBoundingClientRect(),r=t.width*.13,o=Math.min(t.width*.13,t.height*.15),a=20,i=20,n=`
      <rect 
        width="calc(100% - ${(r+a)*2}px)" 
        height="calc(100% - ${i*2}px)"
        x="${r+a}" 
        y="20px" 
      />
    `,b=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="${a}px" 
        y="${i}px" 
      />
    `,v=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="calc(100% - ${r+a}px)" 
        y="${i}px" 
      />
    `,y=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="${a}px"
        y="calc(100% - ${o*2+i}px)"
      />
    `,x=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="calc(100% - ${r+a}px)" 
        y="calc(100% - ${o*2+i}px)"
      />
    `;return n+b+v+y+x}getFlForegroundStyle(){return f(this.frontLeftMotorSpeed)}getFrForegroundStyle(){return f(this.frontRightMotorSpeed)}getRlForegroundStyle(){return f(this.rearLeftMotorSpeed)}getRrForegroundStyle(){return f(this.rearRightMotorSpeed)}firstUpdated(){const e=this.drawMotionVector(0,0,0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){const e=this.drawMotionVector(s(this.frontLeftMotorSpeed),s(this.frontRightMotorSpeed),s(this.rearLeftMotorSpeed),s(this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=e;const r=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${r.width*.5}px, ${r.height*.5}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(e){super.updated(e);const t=this.drawMotionVector(s(this.frontLeftMotorSpeed),s(this.frontRightMotorSpeed),s(this.rearLeftMotorSpeed),s(this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=t}render(){return c`
      <div class="diff-drive-container">
        <div class="speed-pair">
          <div class="speed">
            <frc-table-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-table-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getFlForegroundStyle()}"
              ></div>
            </div>
          </div>
          <div class="speed">
            <frc-table-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-table-axis>
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
            <frc-table-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-table-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getFrForegroundStyle()}"
              ></div>
            </div>
          </div>
          <div class="speed">
            <frc-table-axis
              ticks="5"
              vertical
              .range="${[1,-1]}"
            ></frc-table-axis>
            <div class="bar">
              <div
                class="foreground"
                style="${this.getRrForegroundStyle()}"
              ></div>
            </div>
          </div>
        </div>
      </div>
    `}};d.styles=A`
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

    frc-table-axis {
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
  `;l([m({type:Number,attribute:"front-left-motor-speed"})],d.prototype,"frontLeftMotorSpeed",2);l([m({type:Number,attribute:"front-right-motor-speed"})],d.prototype,"frontRightMotorSpeed",2);l([m({type:Number,attribute:"rear-left-motor-speed"})],d.prototype,"rearLeftMotorSpeed",2);l([m({type:Number,attribute:"rear-right-motor-speed"})],d.prototype,"rearRightMotorSpeed",2);d=l([_("frc-mecanum-drivebase")],d);const P={frontLeftMotorSpeed:0,frontRightMotorSpeed:0,rearLeftMotorSpeed:0,rearRightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-mecanum-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-tab-axis-text-color":"black"},Q={title:"FRC/Mecanum Drivebase",tags:["autodocs"],component:"frc-mecanum-drivebase",args:P,argTypes:{frontLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},frontRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearLeftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rearRightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-mecanum-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-tab-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,t)=>{const o=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=t.args["background-color"];return c` <div
        style=${O({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?a:o})}
      >
        ${e()}
      </div>`}]};function j(e){return e.theme==="custom"?c`
      <style>
        .custom {
          --frc-mecanum-drivebase-drivetrain-color: ${e["--frc-mecanum-drivebase-drivetrain-color"]};
          --frc-bar-background: ${e["--frc-bar-background"]};
          --frc-bar-foreground: ${e["--frc-bar-foreground"]};
          --frc-tab-axis-text-color: ${e["--frc-tab-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?c`
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
  `}function T(e={}){return{args:{...P,...e},render:r=>c`
      ${j(r)}
      <frc-mecanum-drivebase
        class=${r.theme}
        front-left-motor-speed=${r.frontLeftMotorSpeed}
        front-right-motor-speed=${r.frontRightMotorSpeed}
        rear-left-motor-speed=${r.rearLeftMotorSpeed}
        rear-right-motor-speed=${r.rearRightMotorSpeed}
      ></frc-mecanum-drivebase>
    `}}const u=T({theme:"light"}),p=T({theme:"dark"});var L,V,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var D,B,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const Y=["LightTheme","DarkTheme"];export{p as DarkTheme,u as LightTheme,Y as __namedExportsOrder,Q as default};
//# sourceMappingURL=MecanumDrivebase.stories-9134e25a.js.map
