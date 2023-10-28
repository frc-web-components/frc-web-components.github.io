import{r as A,s as S,$ as r}from"./lit-element-ac510585.js";import{e as m}from"./query-assigned-elements-bd4ea1f7.js";import"./index-1e2d8678.js";import{i as x}from"./style-map-70149a85.js";var v=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(t,o,e,a)=>{for(var s=a>1?void 0:a?C(o,e):o,f=t.length-1,p;f>=0;f--)(p=t[f])&&(s=(a?p(o,e,s):p(s))||s);return a&&s&&v(o,e,s),s};const _=1,E=2,F=4,N=8,k=16,$=32,P=["Unknown","Practice","Qualification","Elimination"];class n extends S{constructor(){super(...arguments),this.matchType=0,this.matchNumber=0,this.eventName="",this.fmsControlData=0}getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(this.fmsControlData&_)}isAuto(){return!!(this.fmsControlData&E)}isTest(){return!!(this.fmsControlData&F)}isEmergencyStopped(){return!!(this.fmsControlData&N)}isFmsAttached(){return!!(this.fmsControlData&k)}isDsAttached(){return!!(this.fmsControlData&$)}render(){return r`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${P[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>

      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?r`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  FMS connected
                </span>
              `:r`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  FMS disconnected
                </span>
              `}
        </span>
        <span>
          ${this.isDsAttached()?r`
                <span class="info">
                  <frc-icon icon="check" color="green"></frc-icon>
                  DriverStation connected
                </span>
              `:r`
                <span class="info">
                  <frc-icon icon="close" color="red"></frc-icon>
                  DriverStation disconnected
                </span>
              `}
        </span>
      </p>
      <p style="font-weight: normal">Robot state: ${this.getRobotState()}</p>
    `}}n.styles=A`
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
  `;l([m({type:Number,attribute:"match-type"})],n.prototype,"matchType",2);l([m({type:Number,attribute:"match-number"})],n.prototype,"matchNumber",2);l([m({type:String,attribute:"event-name"})],n.prototype,"eventName",2);l([m({type:Number,attribute:"fms-control-data"})],n.prototype,"fmsControlData",2);customElements.get("frc-basic-fms-info")||customElements.define("frc-basic-fms-info",n);const T={matchType:0,matchNumber:0,eventName:"",fmsControlData:0,theme:"light","background-color":"#fff","--frc-basic-fms-info-text-color":"black"},V={title:"FRC/Basic FMS Info",tags:["autodocs"],component:"frc-basic-fms-info",args:T,argTypes:{matchType:{table:{category:"Properties",defaultValue:{summary:0}},options:[0,1,2,3],control:{type:"select",labels:["Unknown","Practice","Qualification","Elimination"]}},matchNumber:{table:{category:"Properties",defaultValue:{summary:0}}},eventName:{table:{category:"Properties",defaultValue:{summary:""}}},fmsControlData:{table:{category:"Properties",defaultValue:{summary:0}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-basic-fms-info-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(t,o)=>{const a=o.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",s=o.args["background-color"];return r` <div
        style=${x({padding:"20px 10px",marginBottom:"5px",background:o.args.theme==="custom"?s:a})}
      >
        ${t()}
      </div>`}]};function L(t){return t.theme==="custom"?r`
      <style>
        .custom {
          --frc-basic-fms-info-text-color: ${t["--frc-basic-fms-info-text-color"]};
        }
      </style>
    `:t.theme==="dark"?r`
      <style>
        .dark {
          --frc-basic-fms-info-text-color: white;
        }
      </style>
    `:r`
    <style>
      .light {
        --frc-basic-fms-info-text-color: black;
      }
    </style>
  `}function D(t={}){return{args:{...T,...t},render:e=>r`
      ${L(e)}
      <frc-basic-fms-info
        class=${e.theme}
        match-type=${e.matchType}
        match-number=${e.matchNumber}
        event-name=${e.eventName}
        fms-control-data=${e.fmsControlData}
      ></frc-basic-fms-info>
    `}}const c=D({theme:"light"}),i=D({theme:"dark"});var u,h,d;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'light'
})`,...(d=(h=c.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var y,b,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`createBasicFmsStory({
  theme: 'dark'
})`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["LightTheme","DarkTheme"];export{i as DarkTheme,c as LightTheme,M as __namedExportsOrder,V as default};
//# sourceMappingURL=BasicFmsInfo.stories-2c2bfdbe.js.map
