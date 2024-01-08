import{s as v,i as h,k as m,X as d}from"./property-293dc01c-d6840d48.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(e,t,o,s)=>{for(var i=s>1?void 0:s?w(t,o):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(i=(s?a(t,o,i):a(i))||i);return s&&i&&y(t,o,i),i},x=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},u=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},g=(e,t,o)=>(x(e,t,"access private method"),o),l,f,c,b;class r extends m{constructor(){super(...arguments),u(this,l),u(this,c),this.options=["On","Off"],this.value="",this.direction="vertical"}async setValue(t){this.value=t}updated(t){t.has("options")&&!this.options.includes(this.value)&&(this.value=this.options[0]??""),t.has("value")&&g(this,l,f).call(this),t.has("options")&&g(this,c,b).call(this),t.has("direction")&&this.style.setProperty("flex-direction",this.direction==="vertical"?"column":"row")}render(){return d`
      ${this.options.map(t=>d`
          <button
            class="${this.value===t?"toggled":""}"
            @click="${()=>this.setValue(t)}"
          >
            ${t}
          </button>
        `)}
    `}}l=new WeakSet;f=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))};c=new WeakSet;b=function(){this.dispatchEvent(new CustomEvent("optionsUpdate",{detail:{options:this.options},bubbles:!0,composed:!0}))};r.styles=v`
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
