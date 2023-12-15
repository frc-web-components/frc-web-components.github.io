import{i as T,s as x,x as o}from"./lit-element-336289fd.js";import{n as i}from"./property-a00a2a3e.js";import{n as u}from"./when-cf7256a5.js";import"./index-1610cb93.js";import{o as q}from"./style-map-1987af2b.js";var $=Object.defineProperty,N=Object.getOwnPropertyDescriptor,s=(r,e,t,n)=>{for(var l=n>1?void 0:n?N(e,t):e,f=r.length-1,m;f>=0;f--)(m=r[f])&&(l=(n?m(e,t,l):m(l))||l);return n&&l&&$(e,t,l),l};const A="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z",Z="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",S="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z";class a extends x{constructor(){super(...arguments),this.errors=[],this.warnings=[],this.infos=[],this.level="info",this.hideTitle=!1}render(){return o`
      <div class="alerts-container">
        ${u(!this.hideTitle,()=>o` <header>Alerts</header> `)}
        <div class="alerts-list">
          ${this.errors.map(e=>o`
              <div class="alert">
                <div class="icon">
                  <frc-icon
                    color="red"
                    svg-path=${Z}
                    view-box="0 -960 960 960"
                  ></frc-icon>
                </div>
                <label>${e}</label>
              </div>
            `)}
          ${u(this.level!=="error",()=>o`
              ${this.warnings.map(e=>o`
                  <div class="alert">
                    <div class="icon">
                      <frc-icon
                        color="yellow"
                        svg-path=${A}
                        view-box="0 -960 960 960"
                      ></frc-icon>
                    </div>
                    <label>${e}</label>
                  </div>
                `)}
            `)}
          ${u(this.level==="info",()=>o`
              ${this.infos.map(e=>o`
                  <div class="alert">
                    <div class="icon">
                      <frc-icon
                        color="green"
                        svg-path=${S}
                        view-box="0 -960 960 960"
                      ></frc-icon>
                    </div>
                    <label>${e}</label>
                  </div>
                `)}
            `)}
        </div>
      </div>
    `}}a.styles=T`
    :host {
      font-family: sans-serif;
      display: inline-block;
      width: 300px;
      height: auto;
      box-sizing: border-box;
      color: var(--frc-network-alerts-text-color, black);
    }

    .alerts-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    header {
      background: var(--frc-network-alerts-header-color, lightblue);
      padding: 10px 0;
      text-align: center;
      font-weight: bold;
    }

    .alerts-list {
      padding: 8px 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 9px;
      flex: 1;
      overflow-y: auto;
    }

    .alert {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .icon {
      width: 24px;
      height: 24px;
    }

    .alert label {
      flex: 1;
    }

    .icon frc-icon {
      width: 100%;
      height: 100%;
    }
  `;s([i({type:Array})],a.prototype,"errors",2);s([i({type:Array})],a.prototype,"warnings",2);s([i({type:Array})],a.prototype,"infos",2);s([i({type:String})],a.prototype,"level",2);s([i({type:Boolean,attribute:"hide-title"})],a.prototype,"hideTitle",2);customElements.get("frc-network-alerts")||customElements.define("frc-network-alerts",a);const w={errors:[],warnings:[],infos:[],level:"info",hideTitle:!1,theme:"light","background-color":"#fff","--frc-network-alerts-text-color":"black","--frc-network-alerts-header-color":"lightblue"},z={title:"FRC/Network Alerts",tags:["autodocs"],component:"frc-network-alerts",args:w,argTypes:{errors:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},warnings:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},infos:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},level:{control:"radio",options:["info","warning","error"],table:{category:"Properties",defaultValue:"info"}},hideTitle:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-network-alerts-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-network-alerts-header-color":{table:{category:"Styles",defaultValue:{summary:"lightblue"}}}},decorators:[(r,e)=>{const n=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",l=e.args["background-color"];return o` <div
        style=${q({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?l:n})}
      >
        ${r()}
      </div>`}]};function O(r){return r.theme==="custom"?o`
      <style>
        .custom {
          --frc-network-alerts-text-color: ${r["--frc-network-alerts-text-color"]};
          --frc-network-alerts-header-color: ${r["--frc-network-alerts-header-color"]};
        }
      </style>
    `:r.theme==="dark"?o`
      <style>
        .dark {
          --frc-network-alerts-text-color: white;
          --frc-network-alerts-header-color: steelblue;
        }
      </style>
    `:o`
    <style>
      .light {
        --frc-network-alerts-text-color: black;
        --frc-network-alerts-header-color: lightblue;
      }
    </style>
  `}function k(r={}){return{args:{...w,...r},render:t=>o`
      ${O(t)}
      <frc-network-alerts
        class=${t.theme}
        errors=${JSON.stringify(t.errors)}
        warnings=${JSON.stringify(t.warnings)}
        infos=${JSON.stringify(t.infos)}
        level=${t.level}
        ?hide-title=${t.hideTitle}
      ></frc-network-alerts>
    `}}const c=k({theme:"light",errors:["Failed to initialize navX, odometry will likely be nonfunctional.","Pressure sensor not connected, unable to move hood."],warnings:["No override controller.","Failed to read MAC, using default robot instead."],infos:["Tuning mode active, expect decreased network performance."]}),d=k({theme:"dark",errors:["Failed to initialize navX, odometry will likely be nonfunctional.","Pressure sensor not connected, unable to move hood."],warnings:["No override controller.","Failed to read MAC, using default robot instead."],infos:["Tuning mode active, expect decreased network performance."]});var h,g,p;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`createNetworkAlertsStory({
  theme: 'light',
  errors: ['Failed to initialize navX, odometry will likely be nonfunctional.', 'Pressure sensor not connected, unable to move hood.'],
  warnings: ['No override controller.', 'Failed to read MAC, using default robot instead.'],
  infos: ['Tuning mode active, expect decreased network performance.']
})`,...(p=(g=c.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var y,v,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`createNetworkAlertsStory({
  theme: 'dark',
  errors: ['Failed to initialize navX, odometry will likely be nonfunctional.', 'Pressure sensor not connected, unable to move hood.'],
  warnings: ['No override controller.', 'Failed to read MAC, using default robot instead.'],
  infos: ['Tuning mode active, expect decreased network performance.']
})`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const D=["LightTheme","DarkTheme"];export{d as DarkTheme,c as LightTheme,D as __namedExportsOrder,z as default};
