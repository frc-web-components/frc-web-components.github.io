import{r as O,s as U,y as u,$ as f}from"./lit-element-ac510585.js";import{e as h,n as F}from"./query-assigned-elements-a1ee9091.js";import{s as p}from"./transform-e88a9a97.js";import{i as I}from"./style-map-fc25a154.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=({finisher:e,descriptor:t})=>(r,i)=>{var s;if(i===void 0){const o=(s=r.originalKey)!==null&&s!==void 0?s:r.key,a=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return e!=null&&(a.finisher=function(d){e(d,o)}),a}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e,t){return A({descriptor:r=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const s=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,a;return this[s]===void 0&&(this[s]=(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&a!==void 0?a:null),this[s]}}return i}})}var N=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,t,r,i)=>{for(var s=i>1?void 0:i?T(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&N(t,r,s),s};function w(e,...t){return t.some(r=>e.has(r))}function V(e){return e*Math.PI/180}function $(e){return e*180/Math.PI}function H(e,t,r){return Math.max(Math.min(e,r),t)}function z(e,t=!1){const r=V(-(e-90));return[t?-Math.cos(r):Math.cos(r),Math.sin(r)]}let n=class extends U{constructor(){super(...arguments),this.moduleCount=4,this.wheelLocations=[2.5,2,2.5,-2,-2.5,2,-2.5,-2],this.measuredStates=[0,0,0,0,0,0,0,0],this.desiredStates=[0,0,0,0,0,0,0,0],this.robotRotation=0,this.maxSpeed=1,this.rotationUnit="radians",this.sizeLeftRight=4,this.sizeFrontBack=5,this.normalizedRotation=0}drawBase(){const[e,t]=this.getBaseSize();p(this._base).attr("width",e).attr("height",t).attr("stroke-width",5).attr("fill","none")}setSwerveRotation(){p(this._swerve).attr("transform",`rotate(${-this.normalizedRotation})`)}setSwerveOrigin(){const[e,t]=this.getBaseSize();p(this._swerve).attr("transform-origin",`${e/2} ${t/2}`)}getRobotRotationRad(){const e=this.robotRotation;return this.rotationUnit==="radians"?e:V(e)}getSvgSize(){const{width:e}=this.getBoundingClientRect();return[e,e*this.sizeFrontBack/this.sizeLeftRight]}getBaseSize(){const[e]=this.getSvgSize();return[e,e*this.sizeFrontBack/this.sizeLeftRight]}updated(e){if(e.has("robotRotation")){const t=this.robotRotation??0,i=(e.get("robotRotation")??t)-t,s=this.rotationUnit==="degrees"?i:$(i),o=[s-720,s-360,s,s+360,s+720];let a=0,d=Math.abs(o[0]);for(let c=1;c<o.length;c+=1){const m=Math.abs(o[c]);m<d&&(a=c,d=m)}this.normalizedRotation-=o[a]}w(e,"sizeLeftRight","sizeFrontBack","robotRotation","rotationUnit")&&this.drawBase(),w(e,"robotRotation","rotationUnit")&&this.setSwerveRotation(),w(e,"sizeLeftRight","sizeFrontBack")&&this.setSwerveOrigin()}resized(){const[e,t]=this.getSvgSize();p(this._svg).attr("width",e).attr("height",t),this.drawBase(),this.setSwerveOrigin(),this.requestUpdate()}firstUpdated(){new ResizeObserver(()=>{this.resized()}).observe(this),this.resized()}getSwerveModules(){const e=[];for(let t=0;t<this.moduleCount;t+=1){const i={location:[this.wheelLocations[t*2],this.wheelLocations[t*2+1]],desiredRotation:this.desiredStates[t*2],desiredVelocity:this.desiredStates[t*2+1],measuredRotation:this.measuredStates[t*2],measuredVelocity:this.measuredStates[t*2+1]};e.push(i)}return e}renderModuleDirectionIndicator(e,t,r){const i=this.rotationUnit==="degrees"?t:$(t),[s,o]=z(i-15,!0),[a,d]=z(i+15,!0),c=`M ${-s*60},${o*60} L 0,0 ${-a*60},${d*60}`;return u`
      <defs>
        <clipPath id=${e}>
          <path d=${c} fill="white" stroke="5" stroke="white" />
        </clipPath>
      </defs>
      <circle r="47.5" fill=${r} stroke-width="0" clip-path=${`url(#${e})`}></circle>
    `}renderModuleVelocityIndicator(e,t,r,i){const s=this.rotationUnit==="degrees"?t:$(t);let o=H(100*r/this.maxSpeed,-100,100);o+=50*Math.sign(o),o*=-1;const a=Math.abs(o)-20,d=Math.abs(o),c=`M -17.5,${a} L 2.5,${d} L 22.5,${a}`,m=`rotate(${-s+(o<0?180:0)})`,g=`${e}-velocity`;return u`
     <defs>
        <mask id=${g}>
          <circle r="300" fill="white" ></circle>
          <circle r="52.5" fill="black" ></circle>
        </mask>
      </defs>
      <g class="velocity-indicator" transform=${m} mask="url(#${g})">
        <rect width="5" height=${Math.abs(o)} fill=${i}></rect>
        <path d=${c} stroke=${i} stroke-width="5" fill="none" />
      </g>
    `}renderModules(){const e=this.getSwerveModules(),[t,r]=this.getBaseSize();return u`
      <g class="modules">
        ${e.map((i,s)=>{const{desiredRotation:o,measuredRotation:a,location:d,measuredVelocity:c,desiredVelocity:m}=i,g=r/2-r*d[0]/this.sizeFrontBack,P=t/2-t*d[1]/this.sizeLeftRight,k=`module-${s}-measured-clip`,S=`module-${s}-desired-clip`;return u`
            <g transform=${`translate(${P}, ${g})`}>
              <circle class="module-circle" r="50" stroke-width="5" fill="none"></circle>
              ${this.renderModuleDirectionIndicator(k,a,"blue")}
              ${this.renderModuleDirectionIndicator(S,o,"red")}
              ${this.renderModuleVelocityIndicator(k,a,c,"blue")}
              ${this.renderModuleVelocityIndicator(S,o,m,"red")}
            </g>
          `})} 
      </g>
    `}renderWheelMask(){const e=this.getSwerveModules(),[t,r]=this.getBaseSize();return u`
      <defs>
        <mask id="wheel-mask">
          <rect fill="white" width=${t} height=${r} stroke-width="5" stroke="white"></rect>
          ${e.map(i=>{const s=r/2-r*i.location[0]/this.sizeFrontBack,o=t/2-t*i.location[1]/this.sizeLeftRight;return u`
              <circle r="50" fill="black" transform=${`translate(${o}, ${s})`}></circle>
            `})}
        </mask>
      </defs>
    `}renderArrow(){const[e,t]=this.getBaseSize(),r=`M ${e/2-30},60 L ${e/2},30 L ${e/2+30},60`;return u`
      <line class="arrow" x1=${e/2} y1=${30} x2=${e/2} y2=${t-30} stroke-width="5" />
      <path class="arrow" d=${r} stroke-width="5" fill="none" />
      
    `}render(){return u`
      <div>
        <svg>
            ${this.renderWheelMask()}
          <g class="swerve">
            <rect class="base" mask="url(#wheel-mask)"></rect>
            ${this.renderModules()}
            ${this.renderArrow()}
          </g>
        </svg>
      </div>
    `}};n.styles=O`
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
  `;l([h({type:Number,attribute:"module-count"})],n.prototype,"moduleCount",2);l([h({type:Array,attribute:"wheel-locations"})],n.prototype,"wheelLocations",2);l([h({type:Array,attribute:"measured-states"})],n.prototype,"measuredStates",2);l([h({type:Array,attribute:"desired-states"})],n.prototype,"desiredStates",2);l([h({type:Number,attribute:"robot-rotation"})],n.prototype,"robotRotation",2);l([h({type:Number,attribute:"max-speed"})],n.prototype,"maxSpeed",2);l([h({type:String,attribute:"rotation-unit"})],n.prototype,"rotationUnit",2);l([h({type:Number,attribute:"size-left-right"})],n.prototype,"sizeLeftRight",2);l([h({type:Number,attribute:"size-front-back"})],n.prototype,"sizeFrontBack",2);l([v("svg")],n.prototype,"_svg",2);l([v(".swerve")],n.prototype,"_swerve",2);l([v(".base")],n.prototype,"_base",2);l([v(".modules")],n.prototype,"_modules",2);n=l([F("frc-swerve-drivebase")],n);const D={moduleCount:4,wheelLocations:[2.5,2,2.5,-2,-2.5,2,-2.5,-2],measuredStates:[0,0,0,0,0,0,0,0],desiredStates:[0,0,0,0,0,0,0,0],robotRotation:0,maxSpeed:1,rotationUnit:"radians",sizeLeftRight:4,sizeFrontBack:5,theme:"light","background-color":"#fff","--frc-swerve-drive-color":"black"},K={title:"FRC/Swerve Drivebase",tags:["autodocs"],component:"frc-swerve-drivebase",args:D,argTypes:{moduleCount:{table:{category:"Properties",defaultValue:{summary:4}},control:{type:"number",min:2,step:1}},wheelLocations:{table:{category:"Properties",defaultValue:{summary:[2.5,2,2.5,-2,-2.5,2,-2.5,-2]}}},desiredStates:{table:{category:"Properties",defaultValue:{summary:[0,0,0,0,0,0,0,0]}}},measuredStates:{table:{category:"Properties",defaultValue:{summary:[0,0,0,0,0,0,0,0]}}},robotRotation:{table:{category:"Properties",defaultValue:{summary:0}}},maxSpeed:{table:{category:"Properties",defaultValue:{summary:1}}},rotationUnit:{control:"radio",options:["radians","degrees"],table:{category:"Properties",defaultValue:{summary:"radians"}}},sizeLeftRight:{table:{category:"Properties",defaultValue:{summary:4}}},sizeFrontBack:{table:{category:"Properties",defaultValue:{summary:5}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-swerve-drive-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(e,t)=>{const i=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",s=t.args["background-color"];return f` <div
        style=${I({padding:"80px 60px",marginBottom:"5px",background:t.args.theme==="custom"?s:i,display:"flex",justifyContent:"center"})}
      >
        ${e()}
      </div>`}]};function W(e){return e.theme==="custom"?f`
      <style>
        .custom {
          --frc-swerve-drive-color: ${e["--frc-swerve-drive-color"]};
          width: 250px;
        }
      </style>
    `:e.theme==="dark"?f`
      <style>
        .dark {
          --frc-swerve-drive-color: white;
          width: 250px;
        }
      </style>
    `:f`
    <style>
      .light {
        --frc-swerve-drive-color: black;
        width: 250px;
      }
    </style>
  `}function _(e={}){return{args:{...D,...e},render:r=>f`
      ${W(r)}
      <frc-swerve-drivebase
        class=${r.theme}
        module-count=${r.moduleCount}
        wheel-locations=${JSON.stringify(r.wheelLocations)}
        measured-states=${JSON.stringify(r.measuredStates)}
        desired-states=${JSON.stringify(r.desiredStates)}
        robot-rotation=${r.robotRotation}
        max-speed=${r.maxSpeed}
        rotation-unit=${r.rotationUnit}
        size-left-right=${r.sizeLeftRight}
        size-front-back=${r.sizeFrontBack}
      ></frc-swerve-drivebase>
    `}}const y=_({theme:"light"}),b=_({theme:"dark"});var R,M,x;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'light'
})`,...(x=(M=y.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var L,B,C;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`createDrivebaseStory({
  theme: 'dark'
})`,...(C=(B=b.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const G=["LightTheme","DarkTheme"];export{b as DarkTheme,y as LightTheme,G as __namedExportsOrder,K as default};
//# sourceMappingURL=SwerveDrivebase.stories-7f9913c7.js.map
