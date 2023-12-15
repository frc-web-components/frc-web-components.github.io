import{i as y,s as v,x as s}from"./lit-element-336289fd.js";import{n as i}from"./property-a00a2a3e.js";import{e as x}from"./query-5f0bf39c.js";import"./index-1610cb93.js";var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,n=(o,e,t,l)=>{for(var a=l>1?void 0:l?S(e,t):e,p=o.length-1,d;p>=0;p--)(d=o[p])&&(a=(l?d(e,t,a):d(a))||a);return l&&a&&C(e,t,a),a},w=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)},_=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},$=(o,e,t)=>(w(o,e,"access private method"),t),h,m;let r=class extends v{constructor(){super(...arguments),_(this,h),this.options=[],this.selected="",this.default="",this.active="",this.label="Auto Choices"}onChange(){this.selected=this.selectElement.value,$(this,h,m).call(this)}updated(e){e.has("default")&&this.options.includes(this.selected)}render(){return s`
      <div class="container">
        ${this.label?s` <p>${this.label}</p> `:""}
        <div class="input-container">
          <label>
            <select @change=${this.onChange} .value=${this.selected}>
              ${this.options.map(e=>s`
                    <option
                      value=${e}
                      ?selected=${this.selected===e}
                    >
                      ${e}
                    </option>
                  `)}
            </select>
          </label>
          ${this.options.length>0?s`
                ${this.selected===this.active?s`<frc-icon icon="check" color="green"></frc-icon>`:s`<frc-icon icon="close" color="red"></frc-icon>`}
              `:""}
        </div>
      </div>
    `}};h=new WeakSet;m=function(){this.dispatchEvent(new CustomEvent("change",{detail:{selected:this.selected},bubbles:!0,composed:!0}))};r.styles=y`
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
      margin: 0;
      font-size: 13px;
      padding-left: 3px;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  `;n([i({type:Array})],r.prototype,"options",2);n([i({type:String,reflect:!0})],r.prototype,"selected",2);n([i({type:String})],r.prototype,"default",2);n([i({type:String})],r.prototype,"active",2);n([i({type:String,reflect:!0})],r.prototype,"label",2);n([x("select",!0)],r.prototype,"selectElement",2);customElements.get("frc-sendable-chooser")||customElements.define("frc-sendable-chooser",r);const g={options:["Option 1","Option 2"],selected:"Option 1",default:"",active:"",label:"Auto Choices"},z={title:"FRC/Sendable Chooser",tags:["autodocs"],component:"frc-sendable-chooser",args:g,argTypes:{options:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},selected:{table:{category:"Properties",defaultValue:{summary:""}}},default:{table:{category:"Properties",defaultValue:{summary:""}}},active:{table:{category:"Properties",defaultValue:{summary:""}}},label:{table:{category:"Properties",defaultValue:{summary:""}}}}};function E(o={}){return{args:{...g,...o},parameters:{canvas:{sourceState:"shown"}},render:t=>s`
      <frc-sendable-chooser
        .options=${t.options}
        selected=${t.selected}
        default=${t.default}
        active=${t.active}
        label=${t.label}
      ></frc-sendable-chooser>
    `}}const c=E();var u,f,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:"createSendableChooserStory()",...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const T=["SendableChooser"];export{c as SendableChooser,T as __namedExportsOrder,z as default};
