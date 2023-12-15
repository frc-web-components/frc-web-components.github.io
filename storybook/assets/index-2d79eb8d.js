import{i as b,s as m,x as u}from"./lit-element-336289fd.js";import{n as h}from"./property-a00a2a3e.js";var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,p=(e,t,i,s)=>{for(var o=s>1?void 0:s?_(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&y(t,i,o),o},w=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},f=(e,t,i)=>(w(e,t,"access private method"),i),l,g,c,v;class r extends m{constructor(){super(...arguments),d(this,l),d(this,c),this.options=["On","Off"],this.value="",this.direction="vertical"}async setValue(t){this.value=t}updated(t){t.has("options")&&!this.options.includes(this.value)&&(this.value=this.options[0]??""),t.has("value")&&f(this,l,g).call(this),t.has("options")&&f(this,c,v).call(this),t.has("direction")&&this.style.setProperty("flex-direction",this.direction==="vertical"?"column":"row")}render(){return u`
      ${this.options.map(t=>u`
          <button
            class="${this.value===t?"toggled":""}"
            @click="${()=>this.setValue(t)}"
          >
            ${t}
          </button>
        `)}
    `}}l=new WeakSet;g=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))};c=new WeakSet;v=function(){this.dispatchEvent(new CustomEvent("optionsUpdate",{detail:{options:this.options},bubbles:!0,composed:!0}))};r.styles=b`
    :host {
      display: inline-flex;
      flex-direction: column;
      width: 150px;
      height: 300px;
      gap: 0;
      font-family: sans-serif;
      font-size: 16px;
      letter-spacing: 0.5px;
    }

    button {
      width: 100%;
      height: 100%;
      margin: 0;
      border: none;
      font-size: inherit;
      font-family: inherit;
      letter-spacing: inherit;
      background: var(--frc-button-background-color, rgb(230, 230, 230));
      color: var(--frc-button-text-color, black);
      flex: 1;
    }

    .toggled {
      background: var(--frc-button-toggled-background-color, black);
      color: var(--frc-button-toggled-text-color, white);
      font-weight: bold;
    }

    [part='button'] {
      border-radius: 0;
      margin: 0;
      flex: 1;
      font-size: inherit;
      height: 100%;
      padding: 0;
    }
  `;p([h({type:Array})],r.prototype,"options",2);p([h({type:String})],r.prototype,"value",2);p([h({type:String})],r.prototype,"direction",2);customElements.get("frc-toggle-group")||customElements.define("frc-toggle-group",r);
