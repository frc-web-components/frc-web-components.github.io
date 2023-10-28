import{r as U,s as F,y as m,$ as g}from"./lit-element-ac510585.js";import{e as u}from"./query-assigned-elements-bd4ea1f7.js";import{i as v}from"./query-839578ff.js";import{s as b}from"./transform-c376ec3f.js";import{i as I}from"./style-map-70149a85.js";var A=Object.defineProperty,N=Object.getOwnPropertyDescriptor,c=(i,t,e,s)=>{for(var r=s>1?void 0:s?N(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&A(t,e,r),r};function $(i,...t){return t.some(e=>i.has(e))}function D(i){return i*Math.PI/180}function k(i){return i*180/Math.PI}function T(i,t,e){return Math.max(Math.min(i,e),t)}function R(i,t=!1){const e=D(-(i-90));return[t?-Math.cos(e):Math.cos(e),Math.sin(e)]}class n extends F{constructor(){super(...arguments),this.moduleCount=4,this.wheelLocations=[2.5,2,2.5,-2,-2.5,2,-2.5,-2],this.measuredStates=[0,0,0,0,0,0,0,0],this.desiredStates=[0,0,0,0,0,0,0,0],this.robotRotation=0,this.maxSpeed=1,this.rotationUnit="radians",this.sizeLeftRight=4,this.sizeFrontBack=5,this.normalizedRotation=0}drawBase(){const[t,e]=this.getBaseSize();b(this._base).attr("width",t).attr("height",e).attr("stroke-width",5).attr("fill","none")}setSwerveRotation(){b(this._swerve).attr("transform",`rotate(${-this.normalizedRotation})`)}setSwerveOrigin(){const[t,e]=this.getBaseSize();b(this._swerve).attr("transform-origin",`${t/2} ${e/2}`)}getRobotRotationRad(){const t=this.robotRotation;return this.rotationUnit==="radians"?t:D(t)}getSvgSize(){const{width:t}=this.getBoundingClientRect();return[t,t*this.sizeFrontBack/this.sizeLeftRight]}getBaseSize(){const[t]=this.getSvgSize();return[t,t*this.sizeFrontBack/this.sizeLeftRight]}updated(t){if(t.has("robotRotation")){const e=this.robotRotation??0,r=(t.get("robotRotation")??e)-e,a=this.rotationUnit==="degrees"?r:k(r),o=[a-720,a-360,a,a+360,a+720];let d=0,h=Math.abs(o[0]);for(let l=1;l<o.length;l+=1){const f=Math.abs(o[l]);f<h&&(d=l,h=f)}this.normalizedRotation-=o[d]}$(t,"sizeLeftRight","sizeFrontBack","robotRotation","rotationUnit")&&this.drawBase(),$(t,"robotRotation","rotationUnit")&&this.setSwerveRotation(),$(t,"sizeLeftRight","sizeFrontBack")&&this.setSwerveOrigin()}resized(){const[t,e]=this.getSvgSize();b(this._svg).attr("width",t).attr("height",e),this.drawBase(),this.setSwerveOrigin(),this.requestUpdate()}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),this.resized()}getSwerveModules(){const t=[];for(let e=0;e<this.moduleCount;e+=1){const r={location:[this.wheelLocations[e*2],this.wheelLocations[e*2+1]],desiredRotation:this.desiredStates[e*2],desiredVelocity:this.desiredStates[e*2+1],measuredRotation:this.measuredStates[e*2],measuredVelocity:this.measuredStates[e*2+1]};t.push(r)}return t}renderModuleDirectionIndicator(t,e,s){const r=this.rotationUnit==="degrees"?e:k(e),[a,o]=R(r-15,!0),[d,h]=R(r+15,!0),l=`M ${-a*60},${o*60} L 0,0 ${-d*60},${h*60}`;return m`
      <defs>
        <clipPath id=${t}>
          <path d=${l} fill="white" stroke="5" stroke="white" />
        </clipPath>
      </defs>
      <circle r="47.5" fill=${s} stroke-width="0" clip-path=${`url(#${t})`}></circle>
    `}renderModuleVelocityIndicator(t,e,s,r){const a=this.rotationUnit==="degrees"?e:k(e);let o=T(100*s/this.maxSpeed,-100,100);o+=50*Math.sign(o),o*=-1;const d=Math.abs(o)-20,h=Math.abs(o),l=`M -17.5,${d} L 2.5,${h} L 22.5,${d}`,f=`rotate(${-a+(o<0?180:0)})`,p=`${t}-velocity`;return m`
     <defs>
        <mask id=${p}>
          <circle r="300" fill="white" ></circle>
          <circle r="52.5" fill="black" ></circle>
        </mask>
      </defs>
      <g class="velocity-indicator" transform=${f} mask="url(#${p})">
        <rect width="5" height=${Math.abs(o)} fill=${r}></rect>
        <path d=${l} stroke=${r} stroke-width="5" fill="none" />
      </g>
    `}renderModules(){const t=this.getSwerveModules(),[e,s]=this.getBaseSize();return m`
      <g class="modules">
        ${t.map((r,a)=>{const{desiredRotation:o,measuredRotation:d,location:h,measuredVelocity:l,desiredVelocity:f}=r,p=s/2-s*h[0]/this.sizeFrontBack,O=e/2-e*h[1]/this.sizeLeftRight,S=`module-${a}-measured-clip`,z=`module-${a}-desired-clip`;return m`
            <g transform=${`translate(${O}, ${p})`}>
              <circle class="module-circle" r="50" stroke-width="5" fill="none"></circle>
              ${this.renderModuleDirectionIndicator(S,d,"blue")}
              ${this.renderModuleDirectionIndicator(z,o,"red")}
              ${this.renderModuleVelocityIndicator(S,d,l,"blue")}
              ${this.renderModuleVelocityIndicator(z,o,f,"red")}
            </g>
          `})} 
      </g>
    `}renderWheelMask(){const t=this.getSwerveModules(),[e,s]=this.getBaseSize();return m`
      <defs>
        <mask id="wheel-mask">
          <rect fill="white" width=${e} height=${s} stroke-width="5" stroke="white"></rect>
          ${t.map(r=>{const a=s/2-s*r.location[0]/this.sizeFrontBack,o=e/2-e*r.location[1]/this.sizeLeftRight;return m`
              <circle r="50" fill="black" transform=${`translate(${o}, ${a})`}></circle>
            `})}
        </mask>
      </defs>
    `}renderArrow(){const[t,e]=this.getBaseSize(),s=`M ${t/2-30},60 L ${t/2},30 L ${t/2+30},60`;return m`
      <line class="arrow" x1=${t/2} y1=${30} x2=${t/2} y2=${e-30} stroke-width="5" />
      <path class="arrow" d=${s} stroke-width="5" fill="none" />
      
    `}render(){return g`
      <div>
        ${m`
          <svg>
            ${this.renderWheelMask()}
            <g class="swerve">
              <rect class="base" mask="url(#wheel-mask)"></rect>
              ${this.renderModules()}
              ${this.renderArrow()}
            </g>
          </svg>
      `}
      </div>
    `}}n.styles=U`
    :host {
      display: inline-block;
      width: 300px;
      height: auto;
      overflow: visible;
    }

    svg {
      width: 100%;
      overflow: visible;
    }

    .base {
      stroke: var(--frc-swerve-drive-color, black);
    }

    .arrow {
      stroke: var(--frc-swerve-drive-color, black);
    }

    .module-circle {
      stroke: var(--frc-swerve-drive-color, black);
    }
  `;c([u({type:Number,attribute:"module-count"})],n.prototype,"moduleCount",2);c([u({type:Array,attribute:"wheel-locations"})],n.prototype,"wheelLocations",2);c([u({type:Array,attribute:"measured-states"})],n.prototype,"measuredStates",2);c([u({type:Array,attribute:"desired-states"})],n.prototype,"desiredStates",2);c([u({type:Number,attribute:"robot-rotation"})],n.prototype,"robotRotation",2);c([u({type:Number,attribute:"max-speed"})],n.prototype,"maxSpeed",2);c([u({type:String,attribute:"rotation-unit"})],n.prototype,"rotationUnit",2);c([u({type:Number,attribute:"size-left-right"})],n.prototype,"sizeLeftRight",2);c([u({type:Number,attribute:"size-front-back"})],n.prototype,"sizeFrontBack",2);c([v("svg")],n.prototype,"_svg",2);c([v(".swerve")],n.prototype,"_swerve",2);c([v(".base")],n.prototype,"_base",2);c([v(".modules")],n.prototype,"_modules",2);customElements.get("frc-swerve-drivebase")||customElements.define("frc-swerve-drivebase",n);const P={moduleCount:4,wheelLocations:[2.5,2,2.5,-2,-2.5,2,-2.5,-2],measuredStates:[0,0,0,0,0,0,0,0],desiredStates:[0,0,0,0,0,0,0,0],robotRotation:0,maxSpeed:1,rotationUnit:"radians",sizeLeftRight:4,sizeFrontBack:5,theme:"light","background-color":"#fff","--frc-swerve-drive-color":"black"},G={title:"FRC/Swerve Drivebase",tags:["autodocs"],component:"frc-swerve-drivebase",args:P,argTypes:{moduleCount:{table:{category:"Properties",defaultValue:{summary:4}},control:{type:"number",min:2,step:1}},wheelLocations:{table:{category:"Properties",defaultValue:{summary:[2.5,2,2.5,-2,-2.5,2,-2.5,-2]}}},desiredStates:{table:{category:"Properties",defaultValue:{summary:[0,0,0,0,0,0,0,0]}}},measuredStates:{table:{category:"Properties",defaultValue:{summary:[0,0,0,0,0,0,0,0]}}},robotRotation:{table:{category:"Properties",defaultValue:{summary:0}}},maxSpeed:{table:{category:"Properties",defaultValue:{summary:1}}},rotationUnit:{control:"radio",options:["radians","degrees"],table:{category:"Properties",defaultValue:{summary:"radians"}}},sizeLeftRight:{table:{category:"Properties",defaultValue:{summary:4}}},sizeFrontBack:{table:{category:"Properties",defaultValue:{summary:5}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-swerve-drive-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(i,t)=>{const s=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",r=t.args["background-color"];return g` <div
        style=${I({padding:"80px 60px",marginBottom:"5px",background:t.args.theme==="custom"?r:s,display:"flex",justifyContent:"center"})}
      >
        ${i()}
      </div>`}]};function H(i){return i.theme==="custom"?g`
      <style>
        .custom {
          --frc-swerve-drive-color: ${i["--frc-swerve-drive-color"]};
          width: 250px;
        }
      </style>
    `:i.theme==="dark"?g`
      <style>
        .dark {
          --frc-swerve-drive-color: white;
          width: 250px;
        }
      </style>
    `:g`
    <style>
      .light {
        --frc-swerve-drive-color: black;
        width: 250px;
      }
    </style>
  `}function _(i={}){return{args:{...P,...i},render:e=>g`
      ${H(e)}
      <frc-swerve-drivebase
        class=${e.theme}
        module-count=${e.moduleCount}
        wheel-locations=${JSON.stringify(e.wheelLocations)}
        measured-states=${JSON.stringify(e.measuredStates)}
        desired-states=${JSON.stringify(e.desiredStates)}
        robot-rotation=${e.robotRotation}
        max-speed=${e.maxSpeed}
        rotation-unit=${e.rotationUnit}
        size-left-right=${e.sizeLeftRight}
        size-front-back=${e.sizeFrontBack}
      ></frc-swerve-drivebase>
    `}}const y=_({theme:"light"}),w=_({theme:"dark"});var M,x,L;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(L=(x=y.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var B,C,V;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(V=(C=w.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const K=["LightTheme","DarkTheme"];export{w as DarkTheme,y as LightTheme,K as __namedExportsOrder,G as default};
//# sourceMappingURL=SwerveDrivebase.stories-034f538e.js.map
