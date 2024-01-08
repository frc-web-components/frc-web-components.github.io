import{s as x,i,k as v,X as a}from"./property-293dc01c-d6840d48.js";import{h as k}from"./query-b33b5ea2-b51c1579.js";import"./icon-70228e82-483a2944.js";import{x as c}from"./lit-element-37c36932.js";import{o as S}from"./style-map-4c049cd0.js";var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(t,e,o,s)=>{for(var r=s>1?void 0:s?w(e,o):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(r=(s?h(e,o,r):h(r))||r);return s&&r&&$(e,o,r),r},C=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},O=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},E=(t,e,o)=>(C(t,e,"access private method"),o),m,y;class n extends v{constructor(){super(...arguments),O(this,m),this.options=[],this.selected="",this.default="",this.active="",this.label="Auto Choices"}onChange(){this.selected=this.selectElement.value,E(this,m,y).call(this)}updated(e){e.has("default")&&this.options.includes(this.selected)}render(){return a`
      <div class="container">
        ${this.label?a` <p>${this.label}</p> `:""}
        <div class="input-container">
          <label>
            <select @change=${this.onChange} .value=${this.selected}>
              ${this.options.map(e=>a`
                    <option
                      value=${e}
                      ?selected=${this.selected===e}
                    >
                      ${e}
                    </option>
                  `)}
            </select>
          </label>
          ${this.options.length>0?a`
                ${this.selected===this.active?a`<frc-icon icon="check" color="green"></frc-icon>`:a`<frc-icon icon="close" color="red"></frc-icon>`}
              `:""}
        </div>
      </div>
    `}}m=new WeakSet;y=function(){this.dispatchEvent(new CustomEvent("change",{detail:{selected:this.selected},bubbles:!0,composed:!0}))};n.styles=x`
    :host {
      display: inline-block;
      min-width: 220px;
      font-family: sans-serif;
    }

    .input-container {
      display: flex;
      align-items: flex-end;
      gap: 7px;
      width: 100%;
    }

    frc-icon {
      width: 20px;
      height: 20px;
      margin-bottom: 12px;
    }

    label {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    label:after {
      content: ' ';
      position: absolute;
      right: 15px;
      top: 46%;
      margin-top: -3px;
      z-index: 2;
      pointer-events: none;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6.9px 4px 0 4px;
      border-color: #aaa transparent transparent transparent;
      pointer-events: none;
    }

    select {
      width: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      outline: 0 none;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 0 30px 0 10px;

      border: 1px solid #e0e0e0;
      border-radius: 3px;
      line-height: 36px;
      height: 36px;
      background: #fff;
      margin: 0 5px 5px 0;
    }

    p {
      color: var(--frc-sendable-chooser-label-color, black);
      margin: 0;
      font-size: 13px;
      padding-left: 3px;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  `;l([i({type:Array})],n.prototype,"options",2);l([i({type:String,reflect:!0})],n.prototype,"selected",2);l([i({type:String})],n.prototype,"default",2);l([i({type:String})],n.prototype,"active",2);l([i({type:String,reflect:!0})],n.prototype,"label",2);l([k("select",!0)],n.prototype,"selectElement",2);customElements.get("frc-sendable-chooser")||customElements.define("frc-sendable-chooser",n);const g={options:["Option 1","Option 2"],selected:"Option 1",default:"",active:"",label:"Auto Choices",theme:"light","background-color":"#fff","--frc-sendable-chooser-label-color":"black"},R={title:"FRC/Sendable Chooser",tags:["autodocs"],component:"frc-sendable-chooser",args:g,argTypes:{options:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},selected:{table:{category:"Properties",defaultValue:{summary:""}}},default:{table:{category:"Properties",defaultValue:{summary:""}}},active:{table:{category:"Properties",defaultValue:{summary:""}}},label:{table:{category:"Properties",defaultValue:{summary:""}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-sendable-chooser-label-color":{table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(t,e)=>{const s=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",r=e.args["background-color"];return c` <div
        style=${S({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?r:s})}
      >
        ${t()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/sendable-chooser";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-sendable-chooser selected="Option 1" options='["Option 1", "Option 2"]'></frc-sendable-chooser>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { SendableChooser } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<SendableChooser selected="Option 1" options={["Option 1", "Option 2"]} />\r
\`\`\``}}}};function A(t){return t.theme==="custom"?c`
      <style>
        .custom {
          --frc-sendable-chooser-label-color: ${t["--frc-sendable-chooser-label-color"]};
        }
      </style>
    `:t.theme==="dark"?c`
      <style>
        .dark {
          --frc-sendable-chooser-label-color: white;
        }
      </style>
    `:c`
    <style>
      .light {
        --frc-sendable-chooser-label-color: black;
      }
    </style>
  `}function V(t={}){return{args:{...g,...t},parameters:{canvas:{sourceState:"shown"}},render:o=>c`
      ${A(o)}
      <frc-sendable-chooser
        class=${o.theme}
        options=${JSON.stringify(o.options)}
        selected=${o.selected}
        default=${o.default}
        active=${o.active}
        label=${o.label}
      ></frc-sendable-chooser>
    `}}const p=V();var f,b,u;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:"createSendableChooserStory()",...(u=(b=p.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const W=["SendableChooser"];export{p as SendableChooser,W as __namedExportsOrder,R as default};
