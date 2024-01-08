import{s as v,i as l,k as S,X as s}from"./property-293dc01c-d6840d48.js";import"./icon-70228e82-483a2944.js";import{x as c}from"./lit-element-37c36932.js";import{o as T}from"./style-map-4c049cd0.js";var N=Object.defineProperty,C=Object.getOwnPropertyDescriptor,f=(t,r,e,n)=>{for(var o=n>1?void 0:n?C(r,e):r,p=t.length-1,h;p>=0;p--)(h=t[p])&&(o=(n?h(r,e,o):h(o))||o);return n&&o&&N(r,e,o),o};const $=1,A=2,w=4,F=8,E=16,P=32,j=["Unknown","Practice","Qualification","Elimination"];class a extends S{constructor(){super(...arguments),this.matchType=0,this.matchNumber=0,this.eventName="",this.fmsControlData=0}getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(this.fmsControlData&$)}isAuto(){return!!(this.fmsControlData&A)}isTest(){return!!(this.fmsControlData&w)}isEmergencyStopped(){return!!(this.fmsControlData&F)}isFmsAttached(){return!!(this.fmsControlData&E)}isDsAttached(){return!!(this.fmsControlData&P)}render(){return s`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${j[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>

      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?s`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  FMS connected
                </span>
              `:s`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  FMS disconnected
                </span>
              `}
        </span>
        <span>
          ${this.isDsAttached()?s`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  DriverStation connected
                </span>
              `:s`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  DriverStation disconnected
                </span>
              `}
        </span>
      </p>
      <p style="font-weight: normal">Robot state: ${this.getRobotState()}</p>
    `}}a.styles=v`
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
  `;f([l({type:Number,attribute:"match-type"})],a.prototype,"matchType",2);f([l({type:Number,attribute:"match-number"})],a.prototype,"matchNumber",2);f([l({type:String,attribute:"event-name"})],a.prototype,"eventName",2);f([l({type:Number,attribute:"fms-control-data"})],a.prototype,"fmsControlData",2);customElements.get("frc-basic-fms-info")||customElements.define("frc-basic-fms-info",a);const D={matchType:0,matchNumber:0,eventName:"",fmsControlData:0,theme:"light","background-color":"#fff","--frc-basic-fms-info-text-color":"black"},M={title:"FRC/Basic FMS Info",tags:["autodocs"],component:"frc-basic-fms-info",args:D,argTypes:{matchType:{table:{category:"Properties",defaultValue:{summary:0}},options:[0,1,2,3],control:{type:"select",labels:["Unknown","Practice","Qualification","Elimination"]}},matchNumber:{table:{category:"Properties",defaultValue:{summary:0}}},eventName:{table:{category:"Properties",defaultValue:{summary:""}}},fmsControlData:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-basic-fms-info-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(t,r)=>{const n=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=r.args["background-color"];return c` <div
        style=${T({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?o:n})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/basic-fms-info";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-basic-fms-info match-type="1" match-number="2" event-name="Some event" fms-control-data="23"></frc-basic-fms-info>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { BasicFmsInfo } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<BasicFmsInfo matchType={1} matchNumber={2} eventName="Some event" fmsControlData={23} />\r
\`\`\``}}}};function B(t){return t.theme==="custom"?c`
      <style>
        .custom {
          --frc-basic-fms-info-text-color: ${t["--frc-basic-fms-info-text-color"]};
        }
      </style>
    `:t.theme==="dark"?c`
      <style>
        .dark {
          --frc-basic-fms-info-text-color: white;
        }
      </style>
    `:c`
    <style>
      .light {
        --frc-basic-fms-info-text-color: black;
      }
    </style>
  `}function k(t={}){return{args:{...D,...t},render:e=>c`
      ${B(e)}
      <frc-basic-fms-info
        class=${e.theme}
        match-type=${e.matchType}
        match-number=${e.matchNumber}
        event-name=${e.eventName}
        fms-control-data=${e.fmsControlData}
      ></frc-basic-fms-info>
    `}}const i=k({theme:"light"}),m=k({theme:"dark"});var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'light'
})`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,g,x;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'dark'
})`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const L=["LightTheme","DarkTheme"];export{m as DarkTheme,i as LightTheme,L as __namedExportsOrder,M as default};
