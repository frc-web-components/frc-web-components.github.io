import{i as $,s as w,x as a}from"./lit-element-336289fd.js";import{n as m}from"./property-a00a2a3e.js";import"./index-02becddb.js";import"./index-3e8c2208.js";import{o as C}from"./style-map-1987af2b.js";import"./index-4ab9e818.js";import"./state-0f1c18cb.js";import"./query-5f0bf39c.js";import"./index-7c70066a.js";import"./transform-c376ec3f.js";var S=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(t,e,r,o)=>{for(var l=o>1?void 0:o?P(e,r):e,i=t.length-1,f;i>=0;i--)(f=t[i])&&(l=(o?f(e,r,l):f(l))||l);return o&&l&&S(e,r,l),l};function n(t,e){const r=[];for(let o=t;o<e;o+=1)r.push(o);return r}class c extends w{constructor(){super(...arguments),this.voltage=0,this.totalCurrent=0,this.channels=Array(16).fill(0)}renderChannel(e){return a`
      <frc-number-bar
        class="channel"
        part="channel"
        value=${this.channels[e]??0}
        min="0"
        max="40"
        center="0"
        precision="2"
        ?hide-text="${!1}"
        num-tick-marks="0"
        unit="A"
      ></frc-number-bar>
    `}render(){return a`
      <div part="channels">
        ${n(0,8).map(e=>a`
            <label part="channel-label">
              <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
            </label>
          `)}
        ${n(0,8).map(e=>a` ${this.renderChannel(e)} `)}
        ${n(8,16).map(e=>a`
            <label part="channel-label">
              <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
            </label>
          `)}
        ${n(8,16).map(e=>a` ${this.renderChannel(e)} `)}
      </div>
      <div part="voltage-and-total-current">
        <label part="voltage-label">
          <slot name="voltage-label">Voltage</slot>
        </label>
        <label part="total-current-label">
          <slot name="total-current">Total Current</slot>
        </label>
        <frc-voltage-view
          class="voltage"
          part="voltage"
          value="${this.voltage}"
          min="0"
          max="15"
          center="0"
          precision="2"
          ?hide-text="${!1}"
          num-tick-marks="0"
        ></frc-voltage-view>
        <frc-number-bar
          class="total-current"
          part="total-current"
          value="${this.totalCurrent}"
          min="0"
          max="500"
          center="0"
          precision="2"
          ?hide-text="${!1}"
          num-tick-marks="0"
          unit="A"
        ></frc-number-bar>
      </div>
    `}}c.styles=$`
    :host {
      display: inline-block;
      width: 350px;
      margin: 5px;
      color: var(--frc-label-text-color, black);
      font-family: sans-serif;
      font-size: 16px;
    }

    [part='channels'] {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: min-content 1fr min-content 1fr;
      grid-template-rows: auto auto auto auto auto auto auto auto;
      width: 100%;
      height: auto;
      align-items: center;
      gap: 3px;
    }

    .channel,
    .voltage,
    .total-current {
      width: auto;
    }

    [part='channel-label'] {
      padding-left: 5px;
      text-align: right;
      white-space: nowrap;
    }

    [part='voltage-and-total-current'] {
      margin-top: 5px;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: min-content auto;
      grid-template-rows: auto auto;
      column-gap: 10px;
      width: 100%;
      height: auto;
      align-items: center;
      gap: 3px;
    }

    [part='voltage-and-total-current'] {
      white-space: nowrap;
    }
  `;d([m({type:Number})],c.prototype,"voltage",2);d([m({type:Number,attribute:"total-current"})],c.prototype,"totalCurrent",2);d([m({type:Array})],c.prototype,"channels",2);customElements.get("frc-pdp")||customElements.define("frc-pdp",c);const x={voltage:0,totalCurrent:0,channels:Array(16).fill(0),theme:"light","background-color":"#fff","--frc-label-text-color":"black","--frc-axis-text-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-voltage-view-foreground-color":"#ffbd2f"},z={title:"FRC/PDP",tags:["autodocs"],component:"frc-pdp",args:x,argTypes:{voltage:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,max:15}},totalCurrent:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,max:500}},channels:{control:"object",table:{category:"Properties",defaultValue:{summary:Array(16).fill(0)}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-label-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-voltage-view-foreground-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#ffbd2f"}}}},decorators:[(t,e)=>{const o=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",l=e.args["background-color"];return a` <div
        style=${C({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?l:o})}
      >
        ${t()}
      </div>`}]};function V(t){return t.theme==="custom"?a`
      <style>
        .custom {
          --frc-label-text-color: ${t["--frc-label-text-color"]};
          --frc-bar-background: ${t["--frc-bar-background"]};
          --frc-bar-foreground: ${t["--frc-bar-foreground"]};
          --frc-bar-color: ${t["--frc-bar-color"]};
          --frc-axis-text-color: ${t["--frc-axis-text-color"]};
          --frc-voltage-view-foreground-color: ${t["--frc-voltage-view-foreground-color"]};
        }
      </style>
    `:t.theme==="dark"?a`
      <style>
        .dark {
          --frc-label-text-color: white;
          --frc-bar-background: #444;
          --frc-bar-foreground: steelblue;
          --frc-bar-color: white;
          --frc-axis-text-color: white;
          --frc-voltage-view-foreground-color: #ffbd2f;
        }
      </style>
    `:a`
    <style>
      .light {
        --frc-label-text-color: black;
        --frc-bar-background: #ddd;
        --frc-bar-foreground: lightblue;
        --frc-bar-color: black;
        --frc-axis-text-color: black;
        --frc-voltage-view-foreground-color: #dd9b0d;
      }
    </style>
  `}function k(t={}){return{args:{...x,...t},render:r=>a`
      ${V(r)}
      <frc-pdp
        class=${r.theme}
        voltage=${r.voltage}
        total-current=${r.totalCurrent}
        channels=${JSON.stringify(r.channels)}
      ></frc-pdp>
    `}}const s=k({theme:"light"}),u=k({theme:"dark"});var p,g,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`createPdpStory({
  theme: 'light'
})`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,y,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`createPdpStory({
  theme: 'dark'
})`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const B=["LightTheme","DarkTheme"];export{u as DarkTheme,s as LightTheme,B as __namedExportsOrder,z as default};
