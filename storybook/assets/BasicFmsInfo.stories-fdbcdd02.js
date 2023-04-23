import{r as D,s as w,$ as n}from"./lit-element-ac510585.js";import{e as c}from"./query-assigned-elements-bd4ea1f7.js";import{i as _}from"./style-map-fc25a154.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>s=>typeof s=="function"?((e,r)=>(window.customElements.define(e,r),r))(t,s):((e,r)=>{const{kind:o,elements:a}=r;return{kind:o,elements:a,finisher(i){window.customElements.define(e,i)}}})(t,s),h={check:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z","check-circle":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z",close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",edit:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"};var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,f=(t,s,e,r)=>{for(var o=r>1?void 0:r?P(s,e):s,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(s,e,o):i(o))||o);return r&&o&&$(s,e,o),o};Object.keys(h)[0];let l=class extends w{constructor(){super(...arguments),this.color="#000000",this.icon=Object.keys(h)[0],this.svgPath="",this.viewBox="0 0 24 24"}render(){const t=this.icon==="Custom"||!this.icon;return n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox=${t?this.viewBox:"0 0 24 24"}
        width="24px"
        fill=${this.color}
      >
        <path d=${t?this.svgPath:h[this.icon]} />
      </svg>
    `}};l.styles=D`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;f([c({type:String})],l.prototype,"color",2);f([c({type:String})],l.prototype,"icon",2);f([c({type:String})],l.prototype,"svgPath",2);f([c({type:String})],l.prototype,"viewBox",2);l=f([A("frc-icon")],l);var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,d=(t,s,e,r)=>{for(var o=r>1?void 0:r?E(s,e):s,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(s,e,o):i(o))||o);return r&&o&&k(s,e,o),o};const L=1,N=2,F=4,O=8,V=16,B=32,M=["Unknown","Practice","Qualification","Elimination"];class m extends w{constructor(){super(...arguments),this.matchType=0,this.matchNumber=0,this.eventName="",this.fmsControlData=0}getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(this.fmsControlData&L)}isAuto(){return!!(this.fmsControlData&N)}isTest(){return!!(this.fmsControlData&F)}isEmergencyStopped(){return!!(this.fmsControlData&O)}isFmsAttached(){return!!(this.fmsControlData&V)}isDsAttached(){return!!(this.fmsControlData&B)}render(){return n`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${M[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>

      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?n`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  FMS connected
                </span>
              `:n`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  FMS disconnected
                </span>
              `}
        </span>
        <span>
          ${this.isDsAttached()?n`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  DriverStation connected
                </span>
              `:n`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  DriverStation disconnected
                </span>
              `}
        </span>
      </p>
      <p style="font-weight: normal">Robot state: ${this.getRobotState()}</p>
    `}}m.styles=D`
    p {
      margin: 5px 0;
    }
    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin: 0;
    }
    :host {
      text-align: center;
      font-size: 15px;
      display: inline-flex;
      width: auto;
      flex-direction: column;
      justify-content: center;
      font-family: sans-serif;
      color: var(--frc-basic-fms-info-text-color, #000);
    }

    .info {
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
  `;d([c({type:Number,attribute:"match-type"})],m.prototype,"matchType",2);d([c({type:Number,attribute:"match-number"})],m.prototype,"matchNumber",2);d([c({type:String,attribute:"event-name"})],m.prototype,"eventName",2);d([c({type:Number,attribute:"fms-control-data"})],m.prototype,"fmsControlData",2);customElements.get("frc-basic-fms-info")||customElements.define("frc-basic-fms-info",m);const C={matchType:0,matchNumber:0,eventName:"",fmsControlData:0,theme:"light","background-color":"#fff","--frc-basic-fms-info-text-color":"black"},H={title:"FRC/Basic FMS Info",tags:["autodocs"],component:"frc-basic-fms-info",args:C,argTypes:{matchType:{table:{category:"Properties",defaultValue:{summary:0}},options:[0,1,2,3],control:{type:"select",labels:["Unknown","Practice","Qualification","Elimination"]}},matchNumber:{table:{category:"Properties",defaultValue:{summary:0}}},eventName:{table:{category:"Properties",defaultValue:{summary:""}}},fmsControlData:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-basic-fms-info-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(t,s)=>{const r=s.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=s.args["background-color"];return n` <div
        style=${_({padding:"20px 10px",marginBottom:"5px",background:s.args.theme==="custom"?o:r})}
      >
        ${t()}
      </div>`}]};function j(t){return t.theme==="custom"?n`
      <style>
        .custom {
          --frc-basic-fms-info-text-color: ${t["--frc-basic-fms-info-text-color"]};
        }
      </style>
    `:t.theme==="dark"?n`
      <style>
        .dark {
          --frc-basic-fms-info-text-color: white;
        }
      </style>
    `:n`
    <style>
      .light {
        --frc-basic-fms-info-text-color: black;
      }
    </style>
  `}function T(t={}){return{args:{...C,...t},render:e=>n`
      ${j(e)}
      <frc-basic-fms-info
        class=${e.theme}
        match-type=${e.matchType}
        match-number=${e.matchNumber}
        event-name=${e.eventName}
        fms-control-data=${e.fmsControlData}
      ></frc-basic-fms-info>
    `}}const p=T({theme:"light"}),u=T({theme:"dark"});var y,g,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'light'
})`,...(b=(g=p.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'dark'
})`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const I=["LightTheme","DarkTheme"];export{u as DarkTheme,p as LightTheme,I as __namedExportsOrder,H as default};
//# sourceMappingURL=BasicFmsInfo.stories-fdbcdd02.js.map
