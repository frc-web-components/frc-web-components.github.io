import{r as O,s as z,$ as f}from"./lit-element-ac510585.js";import{e as _}from"./query-assigned-elements-bd4ea1f7.js";import{c as E,a as B,b as R}from"./curved-arrow-e7ee6ba9.js";import"./index-84aad64d.js";import"./index-0665b33f.js";import{i as j}from"./style-map-70149a85.js";import"./state-54413a7c.js";import"./query-839578ff.js";import"./transform-c376ec3f.js";var I=Object.defineProperty,X=Object.getOwnPropertyDescriptor,q=(a,e,r,o)=>{for(var t=o>1?void 0:o?X(e,r):e,i=a.length-1,s;i>=0;i--)(s=a[i])&&(t=(o?s(e,r,t):s(t))||t);return o&&t&&I(e,r,t),t};function $(a,e,r){return Math.min(r,Math.max(a,e))}function G(a,e,r,o,t){return(a-e)*(t-o)/(r-e)+o}function U(a){const e=a/2,r=`
    <line 
      x1="${-e}"
      y1="${-e}"
      x2="${e}"
      y2="${e}"
    />
  `,o=`
    <line 
      x1="${-e}"
      y1="${e}"
      x2="${e}"
      y2="${-e}"
    />
  `;return`<g class="x">${r} ${o}</g>`}class x extends z{constructor(){super(),this.leftMotorSpeed=0,this.rightMotorSpeed=0,new ResizeObserver(()=>{this.resized()}).observe(this)}get clampedLeftMotorSpeed(){return $(this.leftMotorSpeed,-1,1)}get clampedRightMotorSpeed(){return $(this.rightMotorSpeed,-1,1)}drawMotionVector(e,r){const t=this.renderRoot.querySelector("#svg").getBoundingClientRect(),i=t.width*.13,s=20,y=20,S=t.width-(i+s)*2,M=t.height-y*2;if(Math.abs(e)<=.05&&Math.abs(r)<=.05)return U(t.width*.2);const n=Math.min(S,M)/2-8,l=8;if(Math.abs(e-r)<=.001)return`<g class="arrow">${E(Math.abs(e*n),-Math.sign(e)*Math.PI/2,0,l)}</g>`;const u=Math.PI,w=(r-e)/2,k=(e+r)/2,c=k/w;let p;if(Math.abs(c)>=1){const d=-Math.sign(c),h=(d+1)*u/2,g=Math.abs(c*n);p=B(h,g,d*k*n,d*g,l)}else{const d=Math.sign(e-r);if(c===0){const h=Math.max(e,r)*n,g=d*u,m=w<0?u:0;p=R(m,h,g,0,l)}else{const h=c<0?e:r,g=c<0?r:e,m=Math.abs(h)*n,W=-c*m,A=G(g/h,0,-1,.5,u),C=c<0?u:0;p=R(C,m,d*A,W,l)}}return`<g class="arrow">${p}</g>`}drawDrivetrain(){const r=this.renderRoot.querySelector("#svg").getBoundingClientRect(),o=r.width*.13,t=Math.min(r.width*.13,r.height*.15),i=20,s=20,y=`
      <rect 
        width="calc(100% - ${(o+i)*2}px)" 
        height="calc(100% - ${s*2}px)"
        x="${o+i}" 
        y="20px" 
      />
    `,S=`
      <rect 
        width="${o}px" 
        height="${t*2}" 
        x="${i}px" 
        y="${s}px" 
      />
    `,M=`
      <rect 
        width="${o}px" 
        height="${t*2}" 
        x="calc(100% - ${o+i}px)" 
        y="${s}px" 
      />
    `,n=`
      <rect 
        width="${o}px" 
        height="${t*2}" 
        x="${i}px"
        y="calc(100% - ${t*2+s}px)"
      />
    `,l=`
      <rect 
        width="${o}px" 
        height="${t*2}" 
        x="calc(100% - ${o+i}px)" 
        y="calc(100% - ${t*2+s}px)"
      />
    `;return y+S+M+n+l}getLeftForegroundStyle(){return this.getForegroundStyle(this.clampedLeftMotorSpeed)}getRightForegroundStyle(){return this.getForegroundStyle(this.clampedRightMotorSpeed)}getForegroundStyle(e){const t=$(e,-1,1);return t>0?`
        height: ${Math.abs(t)/(1- -1)*100}%;
        top: auto;
        bottom: 50%;
      `:`
        height: ${Math.abs(t)/(1- -1)*100}%;
        top: 50%;
        bottom: auto;
      `}firstUpdated(){const e=this.drawMotionVector(0,0);this.renderRoot.querySelector("#drivetrain").innerHTML=this.drawDrivetrain(),this.renderRoot.querySelector("#forceVector").innerHTML=e}resized(){const e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.renderRoot.querySelector("#forceVector").innerHTML=e;const o=this.renderRoot.querySelector("#svg").getBoundingClientRect();this.renderRoot.querySelector("#forceVector").style.transform=`translate(${o.width*.5}px, ${o.height*.5}px)`,this.renderRoot.querySelector("#drivetrain").innerHTML=this.drawDrivetrain()}updated(){const e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.renderRoot.querySelector("#forceVector").innerHTML=e}render(){return f`
      <div class="diff-drive-container">
        <div class="speed">
          <frc-axis ticks="5" vertical min="1" max="-1"></frc-axis>
          <div class="bar">
            <div
              class="foreground"
              style="${this.getLeftForegroundStyle()}"
            ></div>
          </div>
        </div>
        <svg id="svg">
          <g id="forceVector"></g>
          <g id="drivetrain" class="drivetrain"></g>
        </svg>
        <div class="speed">
          <frc-axis ticks="5" vertical min="1" max="-1"></frc-axis>
          <div class="bar">
            <div
              class="foreground"
              style="${this.getRightForegroundStyle()}"
            ></div>
          </div>
        </div>
      </div>
    `}}x.styles=O`
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
      stroke: var(--frc-differential-drivebase-drivetrain-color, #000);
    }

    .bar {
      position: relative;
      height: calc(100% - 30px);
      width: 20px;
      border-radius: 3px;
      margin: 15px 0;
      background: var(--frc-bar-background, #ddd);
    }

    .speed {
      display: flex;
      height: 100%;
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
  `;q([_({type:Number,attribute:"left-motor-speed"})],x.prototype,"leftMotorSpeed",2);q([_({type:Number,attribute:"right-motor-speed"})],x.prototype,"rightMotorSpeed",2);customElements.get("frc-differential-drivebase")||customElements.define("frc-differential-drivebase",x);const H={leftMotorSpeed:0,rightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-differential-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-axis-text-color":"black"},ie={title:"FRC/Differential Drivebase",tags:["autodocs"],component:"frc-differential-drivebase",args:H,argTypes:{leftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-differential-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(a,e)=>{const o=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",t=e.args["background-color"];return f` <div
        style=${j({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?t:o})}
      >
        ${a()}
      </div>`}]};function J(a){return a.theme==="custom"?f`
      <style>
        .custom {
          --frc-differential-drivebase-drivetrain-color: ${a["--frc-differential-drivebase-drivetrain-color"]};
          --frc-bar-background: ${a["--frc-bar-background"]};
          --frc-bar-foreground: ${a["--frc-bar-foreground"]};
          --frc-axis-text-color: ${a["--frc-axis-text-color"]};
        }
      </style>
    `:a.theme==="dark"?f`
      <style>
        .dark {
          --frc-differential-drivebase-drivetrain-color: #aaa;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-axis-text-color: white;
        }
      </style>
    `:f`
    <style>
      .light {
        --frc-differential-drivebase-drivetrain-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-axis-text-color: black;
      }
    </style>
  `}function N(a={}){return{args:{...H,...a},render:r=>f`
      ${J(r)}
      <frc-differential-drivebase
        class=${r.theme}
        left-motor-speed=${r.leftMotorSpeed}
        right-motor-speed=${r.rightMotorSpeed}
      ></frc-differential-drivebase>
    `}}const b=N({theme:"light"}),v=N({theme:"dark"});var D,V,T;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(T=(V=b.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var L,P,F;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(F=(P=v.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const se=["LightTheme","DarkTheme"];export{v as DarkTheme,b as LightTheme,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=DifferentialDrivebase.stories-041e397a.js.map
