import{s as w,i as f,k as C,X as l}from"./property-7226fcdb-ca5eacb2.js";import"./number-bar.es-e5c3174f.js";import"./voltage-view.es-66198539.js";import"./bar.es-60d50a7c.js";import"./axis.es-ac91c8c7.js";import"./transform-bc2573b1-2dde8094.js";import{x as n}from"./lit-element-fe64f99e.js";import{o as S}from"./style-map-cd083d51.js";import"./state-504849b6-2441cf81.js";import"./query-b33b5ea2-b51c1579.js";var P=Object.defineProperty,V=Object.getOwnPropertyDescriptor,p=(t,r,e,o)=>{for(var a=o>1?void 0:o?V(r,e):r,m=t.length-1,d;m>=0;m--)(d=t[m])&&(a=(o?d(r,e,a):d(a))||a);return o&&a&&P(r,e,a),a};function s(t,r){const e=[];for(let o=t;o<r;o+=1)e.push(o);return e}class c extends C{constructor(){super(...arguments),this.voltage=0,this.totalCurrent=0,this.channels=Array(16).fill(0)}renderChannel(r){return l`
      <frc-number-bar
        class="channel"
        part="channel"
        value=${this.channels[r]??0}
        min="0"
        max="40"
        center="0"
        precision="2"
        ?hide-text="${!1}"
        num-tick-marks="0"
        unit="A"
      ></frc-number-bar>
    `}render(){return l`
      <div part="channels">
        ${s(0,8).map(r=>l`
            <label part="channel-label">
              <slot name="${`channel-label${r}`}">Ch. ${r}</slot>
            </label>
          `)}
        ${s(0,8).map(r=>l` ${this.renderChannel(r)} `)}
        ${s(8,16).map(r=>l`
            <label part="channel-label">
              <slot name="${`channel-label${r}`}">Ch. ${r}</slot>
            </label>
          `)}
        ${s(8,16).map(r=>l` ${this.renderChannel(r)} `)}
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
    `}}c.styles=w`
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
  `;p([f({type:Number})],c.prototype,"voltage",2);p([f({type:Number,attribute:"total-current"})],c.prototype,"totalCurrent",2);p([f({type:Array})],c.prototype,"channels",2);customElements.get("frc-pdp")||customElements.define("frc-pdp",c);const k={voltage:0,totalCurrent:0,channels:Array(16).fill(0),theme:"light","background-color":"#fff","--frc-label-text-color":"black","--frc-axis-text-color":"black","--frc-bar-background":"#ddd","--frc-bar-foreground":"lightblue","--frc-bar-color":"black","--frc-voltage-view-foreground-color":"#ffbd2f"},z={title:"FRC/PDP",tags:["autodocs"],component:"frc-pdp",args:k,argTypes:{voltage:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,max:15}},totalCurrent:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,max:500}},channels:{control:"object",table:{category:"Properties",defaultValue:{summary:Array(16).fill(0)}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-label-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-bar-background":{table:{category:"Styles",defaultValue:{summary:"#ddd"}}},"--frc-bar-foreground":{control:"color",table:{category:"Styles",defaultValue:{summary:"lightblue"}}},"--frc-bar-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-voltage-view-foreground-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#ffbd2f"}}}},decorators:[(t,r)=>{const o=r.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=r.args["background-color"];return n` <div
        style=${S({padding:"20px 10px",marginBottom:"5px",background:r.args.theme==="custom"?a:o})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/pdp";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-pdp voltage="0" total-current="0" channels="[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]"></frc-pdp>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Pdp } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Pdp voltage={0} totalCurrent={0} channels={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]} />\r
\`\`\``}}}};function A(t){return t.theme==="custom"?n`
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
    `:t.theme==="dark"?n`
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
    `:n`
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
  `}function $(t={}){return{args:{...k,...t},render:e=>n`
      ${A(e)}
      <frc-pdp
        class=${e.theme}
        voltage=${e.voltage}
        total-current=${e.totalCurrent}
        channels=${JSON.stringify(e.channels)}
      ></frc-pdp>
    `}}const u=$({theme:"light"}),i=$({theme:"dark"});var b,g,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`createPdpStory({
  theme: 'light'
})`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`createPdpStory({
  theme: 'dark'
})`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const B=["LightTheme","DarkTheme"];export{i as DarkTheme,u as LightTheme,B as __namedExportsOrder,z as default};
