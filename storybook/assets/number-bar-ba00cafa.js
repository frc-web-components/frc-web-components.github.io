import{r as u,s as c,$ as h}from"./lit-element-ac510585.js";import{e as i}from"./query-assigned-elements-bd4ea1f7.js";import"./axis-84ece74a.js";var x=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=(n,e,r,p)=>{for(var a=p>1?void 0:p?l(e,r):e,m=n.length-1,o;m>=0;m--)(o=n[m])&&(a=(p?o(e,r,a):o(a))||a);return p&&a&&x(e,r,a),a};function b(n,e,r){return Math.min(r,Math.max(n,e))}class t extends c{constructor(){super(...arguments),this.value=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit=""}render(){const e=Math.min(this.min,this.max),r=Math.max(this.min,this.max);return h`
      <frc-bar
        value="${this.value}"
        min="${e}"
        max="${r}"
        center="${this.center}"
        part="bar"
      >
        ${this.hideText?"":h`
              ${this.value.toFixed(b(this.precision,0,100))} ${this.unit}
            `}
      </frc-bar>
      ${this.numTickMarks>0?h`
            <frc-axis
              part="axis"
              ticks="${this.numTickMarks}"
              .range="${[e,r]}"
              unit="${this.unit}"
            ></frc-axis>
          `:""}
    `}}t.styles=[u`
      :host {
        display: inline-block;
        width: 300px;
        height: auto;
        font-family: sans-serif;
      }

      :host([num-tick-marks='0']) [part='bar'] {
        width: 100%;
        margin: 0;
      }

      [part='bar'] {
        position: relative;
        width: calc(100% - 40px);
        height: 20px;
        margin: 0 20px;
        border-radius: 3px;
      }

      [part='axis'] {
        width: calc(100% - 45px);
        margin: 2px auto 0;
        display: block;
      }
    `];s([i({type:Number})],t.prototype,"value",2);s([i({type:Number})],t.prototype,"min",2);s([i({type:Number})],t.prototype,"max",2);s([i({type:Number})],t.prototype,"center",2);s([i({type:Number})],t.prototype,"precision",2);s([i({type:Boolean,attribute:"hide-text"})],t.prototype,"hideText",2);s([i({type:Number,attribute:"num-tick-marks"})],t.prototype,"numTickMarks",2);s([i({type:String})],t.prototype,"unit",2);customElements.get("frc-number-bar")||customElements.define("frc-number-bar",t);export{t as N};
//# sourceMappingURL=number-bar-ba00cafa.js.map
