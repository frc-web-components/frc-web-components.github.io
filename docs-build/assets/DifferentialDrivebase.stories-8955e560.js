import{r as W,s as A,$ as f}from"./lit-element-ac510585.js";import{e as I,n as C}from"./query-assigned-elements-a1ee9091.js";import{c as O,a as z,b as R}from"./curved-arrow-e7ee6ba9.js";import"./table-axis-4d38348b.js";import{i as j}from"./style-map-fc25a154.js";import"./transform-e88a9a97.js";var X=Object.defineProperty,G=Object.getOwnPropertyDescriptor,$=(e,t,r,o)=>{for(var a=o>1?void 0:o?G(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&X(t,r,a),a};function M(e,t,r){return Math.min(r,Math.max(e,t))}function U(e,t,r,o,a){return(e-t)*(a-o)/(r-t)+o}function q(e){const t=e/2,r=`
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
  `;return`<g class="x">${r} ${o}</g>`}let p=class extends A{constructor(){super(),this.leftMotorSpeed=0,this.rightMotorSpeed=0,new ResizeObserver(()=>{this.resized()}).observe(this)}get clampedLeftMotorSpeed(){return M(this.leftMotorSpeed,-1,1)}get clampedRightMotorSpeed(){return M(this.rightMotorSpeed,-1,1)}drawMotionVector(e,t){const o=this.shadowRoot.getElementById("svg").getBoundingClientRect(),a=o.width*.13,i=20,n=20,y=o.width-(a+i)*2,w=o.height-n*2;if(Math.abs(e)<=.05&&Math.abs(t)<=.05)return q(o.width*.2);const c=Math.min(y,w)/2-8,l=8;if(Math.abs(e-t)<=.001)return`<g class="arrow">${O(Math.abs(e*c),-Math.sign(e)*Math.PI/2,0,l)}</g>`;const u=Math.PI,S=(t-e)/2,k=(e+t)/2,s=k/S;let m;if(Math.abs(s)>=1){const d=-Math.sign(s),g=(d+1)*u/2,h=Math.abs(s*c);m=z(g,h,d*k*c,d*h,l)}else{const d=Math.sign(e-t);if(s===0){const g=Math.max(e,t)*c,h=d*u,b=S<0?u:0;m=R(b,g,h,0,l)}else{const g=s<0?e:t,h=s<0?t:e,b=Math.abs(g)*c,_=-s*b,H=U(h/g,0,-1,.5,u),N=s<0?u:0;m=R(N,b,d*H,_,l)}}return`<g class="arrow">${m}</g>`}drawDrivetrain(){const t=this.shadowRoot.getElementById("svg").getBoundingClientRect(),r=t.width*.13,o=Math.min(t.width*.13,t.height*.15),a=20,i=20,n=`
      <rect 
        width="calc(100% - ${(r+a)*2}px)" 
        height="calc(100% - ${i*2}px)"
        x="${r+a}" 
        y="20px" 
      />
    `,y=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="${a}px" 
        y="${i}px" 
      />
    `,w=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="calc(100% - ${r+a}px)" 
        y="${i}px" 
      />
    `,c=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="${a}px"
        y="calc(100% - ${o*2+i}px)"
      />
    `,l=`
      <rect 
        width="${r}px" 
        height="${o*2}" 
        x="calc(100% - ${r+a}px)" 
        y="calc(100% - ${o*2+i}px)"
      />
    `;return n+y+w+c+l}getLeftForegroundStyle(){return this.getForegroundStyle(this.clampedLeftMotorSpeed)}getRightForegroundStyle(){return this.getForegroundStyle(this.clampedRightMotorSpeed)}getForegroundStyle(e){const o=M(e,-1,1);return o>0?`
        height: ${Math.abs(o)/(1- -1)*100}%;
        top: auto;
        bottom: 50%;
      `:`
        height: ${Math.abs(o)/(1- -1)*100}%;
        top: 50%;
        bottom: auto;
      `}firstUpdated(){const e=this.drawMotionVector(0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){const e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e;const r=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${r.width*.5}px, ${r.height*.5}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(){const e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e}render(){return f`
      <div class="diff-drive-container">
        <div class="speed">
          <frc-table-axis
            ticks="5"
            vertical
            .range="${[1,-1]}"
          ></frc-table-axis>
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
          <frc-table-axis
            ticks="5"
            vertical
            .range="${[1,-1]}"
          ></frc-table-axis>
          <div class="bar">
            <div
              class="foreground"
              style="${this.getRightForegroundStyle()}"
            ></div>
          </div>
        </div>
      </div>
    `}};p.styles=W`
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
  `;$([I({type:Number,attribute:"left-motor-speed"})],p.prototype,"leftMotorSpeed",2);$([I({type:Number,attribute:"right-motor-speed"})],p.prototype,"rightMotorSpeed",2);p=$([C("frc-differential-drivebase")],p);const P={leftMotorSpeed:0,rightMotorSpeed:0,theme:"light","background-color":"#fff","--frc-differential-drivebase-drivetrain-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-tab-axis-text-color":"black"},re={title:"FRC/Differential Drivebase",tags:["autodocs"],component:"frc-differential-drivebase",args:P,argTypes:{leftMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},rightMotorSpeed:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:-1,max:1}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-differential-drivebase-drivetrain-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-tab-axis-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,t)=>{const o=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=t.args["background-color"];return f` <div
        style=${j({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?a:o})}
      >
        ${e()}
      </div>`}]};function J(e){return e.theme==="custom"?f`
      <style>
        .custom {
          --frc-differential-drivebase-drivetrain-color: ${e["--frc-differential-drivebase-drivetrain-color"]};
          --frc-bar-background: ${e["--frc-bar-background"]};
          --frc-bar-foreground: ${e["--frc-bar-foreground"]};
          --frc-tab-axis-text-color: ${e["--frc-tab-axis-text-color"]};
        }
      </style>
    `:e.theme==="dark"?f`
      <style>
        .dark {
          --frc-differential-drivebase-drivetrain-color: #aaa;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-tab-axis-text-color: white;
        }
      </style>
    `:f`
    <style>
      .light {
        --frc-differential-drivebase-drivetrain-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-tab-axis-text-color: black;
      }
    </style>
  `}function F(e={}){return{args:{...P,...e},render:r=>f`
      ${J(r)}
      <frc-differential-drivebase
        class=${r.theme}
        left-motor-speed=${r.leftMotorSpeed}
        right-motor-speed=${r.rightMotorSpeed}
      ></frc-differential-drivebase>
    `}}const v=F({theme:"light"}),x=F({theme:"dark"});var D,V,B;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(B=(V=v.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var T,E,L;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(L=(E=x.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const oe=["LightTheme","DarkTheme"];export{x as DarkTheme,v as LightTheme,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=DifferentialDrivebase.stories-8955e560.js.map
