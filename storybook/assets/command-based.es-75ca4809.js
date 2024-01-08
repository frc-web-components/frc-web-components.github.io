import{s as g,i as o,k as b,X as h}from"./property-293dc01c-d6840d48.js";import"./toggle-button.es-e0b9a3fa.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(e,t,n,s)=>{for(var r=s>1?void 0:s?v(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=(s?l(t,n,r):l(r))||r);return s&&r&&f(t,n,r),r},x=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},w=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},$=(e,t,n)=>(x(e,t,"access private method"),n),d,y;class m extends b{constructor(){super(...arguments),w(this,d),this.name="Command",this.running=!1,this.controllable=!1,this.label=""}render(){return h`
      <frc-toggle-button
        ?disabled="${!this.controllable}"
        ?toggled="${this.running}"
        label=${this.label||this.name}
        @toggle="${$(this,d,y)}"
      >
      </frc-toggle-button>
    `}}d=new WeakSet;y=function(e){e.stopPropagation(),this.running=!this.running,this.dispatchEvent(new CustomEvent("toggle",{detail:{running:this.running},bubbles:!0,composed:!0}))};m.styles=g`
    :host {
      display: inline-block;
      width: 100px;
      height: 50px;
      font-family: sans-serif;
      font-size: 16px;
      letter-spacing: 0.5px;
    }

    frc-toggle-button {
      width: 100%;
      height: 100%;
    }
  `;c([o({type:String})],m.prototype,"name",2);c([o({type:Boolean})],m.prototype,"running",2);c([o({type:Boolean})],m.prototype,"controllable",2);c([o({type:String})],m.prototype,"label",2);customElements.get("frc-robot-command")||customElements.define("frc-robot-command",m);var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,p=(e,t,n,s)=>{for(var r=s>1?void 0:s?S(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=(s?l(t,n,r):l(r))||r);return s&&r&&C(t,n,r),r};const a=class u extends b{constructor(){super(...arguments),this.default="",this.command="",this.hasCommand=!1,this.hasDefault=!1,this.label="",this.name="",this.hideName=!1}static renderValue(t,n){return n?h`<span class="has-value">${t}</span>`:h`<span class="no-value">None</span>`}render(){return h`
      ${this.hideName?"":h` <header>${this.label||this.name}</header> `}
      <div class="subsystem">
        <p>
          Default command:
          ${u.renderValue(this.default,this.hasDefault)}
        </p>
        <p>
          Current command:
          ${u.renderValue(this.command,this.hasCommand)}
        </p>
      </div>
    `}};a.styles=g`
    :host {
      display: inline-block;
      font-family: sans-serif;
      font-size: 16px;
      padding: 5px;
      color: var(--frc-label-text-color, black);
    }

    .subsystem {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    p {
      margin: 0;
      margin-right: 10px;
      margin-top: 5px;
    }

    header {
      font-weight: bold;
      margin-bottom: 2px;
      color: var(--frc-robot-subsystem-header-color, purple);
    }

    .has-value {
      color: green;
    }

    .no-value {
      color: red;
    }
  `;p([o({type:String})],a.prototype,"default",2);p([o({type:String})],a.prototype,"command",2);p([o({type:Boolean,attribute:"has-command"})],a.prototype,"hasCommand",2);p([o({type:Boolean,attribute:"has-default"})],a.prototype,"hasDefault",2);p([o({type:String})],a.prototype,"label",2);p([o({type:String})],a.prototype,"name",2);p([o({type:Boolean,attribute:"hide-name"})],a.prototype,"hideName",2);let E=a;customElements.get("frc-robot-subsystem")||customElements.define("frc-robot-subsystem",E);
