import{s as c,i as r,k as u,X as h}from"./property-7226fcdb-ca5eacb2.js";import"./bar.es-60d50a7c.js";import"./axis.es-ac91c8c7.js";import"./transform-bc2573b1-2dde8094.js";var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(n,i,e,p)=>{for(var s=p>1?void 0:p?b(i,e):i,o=n.length-1,m;o>=0;o--)(m=n[o])&&(s=(p?m(i,e,s):m(s))||s);return p&&s&&x(i,e,s),s};function y(n,i,e){return Math.min(e,Math.max(n,i))}class t extends u{constructor(){super(...arguments),this.value=0,this.min=-1,this.max=1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit=""}render(){const i=Math.min(this.min,this.max),e=Math.max(this.min,this.max);return h`
      <frc-bar
        value="${this.value}"
        min="${i}"
        max="${e}"
        center="${this.center}"
        part="bar"
      >
        ${this.hideText?"":h`
              ${this.value.toFixed(y(this.precision,0,100))} ${this.unit}
            `}
      </frc-bar>
      ${this.numTickMarks>0?h`
            <frc-axis
              part="axis"
              ticks="${this.numTickMarks}"
              min=${i}
              max=${e}
              unit="${this.unit}"
            ></frc-axis>
          `:""}
    `}}t.styles=[c`
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
    `];a([r({type:Number})],t.prototype,"value",2);a([r({type:Number})],t.prototype,"min",2);a([r({type:Number})],t.prototype,"max",2);a([r({type:Number})],t.prototype,"center",2);a([r({type:Number})],t.prototype,"precision",2);a([r({type:Boolean,attribute:"hide-text"})],t.prototype,"hideText",2);a([r({type:Number,attribute:"num-tick-marks"})],t.prototype,"numTickMarks",2);a([r({type:String})],t.prototype,"unit",2);customElements.get("frc-number-bar")||customElements.define("frc-number-bar",t);export{t};
