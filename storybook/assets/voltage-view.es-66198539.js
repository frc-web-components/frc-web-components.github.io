import{s as a,i as e}from"./property-7226fcdb-ca5eacb2.js";import{t as y}from"./number-bar.es-e5c3174f.js";import"./bar.es-60d50a7c.js";import"./axis.es-ac91c8c7.js";import"./transform-bc2573b1-2dde8094.js";var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,l=Reflect.get,r=(s,p,i,n)=>{for(var o=n>1?void 0:n?f(p,i):p,c=s.length-1,m;c>=0;c--)(m=s[c])&&(o=(n?m(p,i,o):m(o))||o);return n&&o&&u(p,i,o),o},g=(s,p,i)=>l(b(s),i,p);const t=class extends y{constructor(){super(...arguments),this.value=0,this.min=0,this.max=5,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="V"}};t.styles=[...g(t,t,"styles"),a`
      [part='bar']::part(foreground) {
        background: var(--frc-voltage-view-foreground-color, #ffbd2f);
      }
    `];r([e({type:Number})],t.prototype,"value",2);r([e({type:Number})],t.prototype,"min",2);r([e({type:Number})],t.prototype,"max",2);r([e({type:Number})],t.prototype,"center",2);r([e({type:Number})],t.prototype,"precision",2);r([e({type:Boolean,attribute:"hide-text"})],t.prototype,"hideText",2);r([e({type:Number,attribute:"num-tick-marks"})],t.prototype,"numTickMarks",2);r([e({type:String})],t.prototype,"unit",2);let v=t;customElements.get("frc-voltage-view")||customElements.define("frc-voltage-view",v);