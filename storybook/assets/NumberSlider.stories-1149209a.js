import{r as $,s as _,$ as o}from"./lit-element-ac510585.js";import{e as l}from"./query-assigned-elements-bd4ea1f7.js";import{i as C}from"./style-map-70149a85.js";var w=Object.defineProperty,T=Object.getOwnPropertyDescriptor,m=(r,e,t,s)=>{for(var a=s>1?void 0:s?T(e,t):e,u=r.length-1,d;u>=0;u--)(d=r[u])&&(a=(s?d(e,t,a):d(a))||a);return s&&a&&w(e,t,a),a},N=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},P=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},E=(r,e,t)=>(N(r,e,"access private method"),t),h,v;class i extends _{constructor(){super(...arguments),P(this,h),this.value=0,this.min=-1,this.max=1,this.blockIncrement=.05}onChange(e){this.value=parseFloat(e.target.value),E(this,h,v).call(this)}firstUpdated(){setTimeout(()=>{const e=this.renderRoot.querySelector("#slider");e&&(e.value=this.value)})}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max),s=Math.max(e,Math.min(this.value,t));return o`
      <div class="slider-container">
        <input
          id="slider"
          type="range"
          .value="${s.toString()}"
          min="${e}"
          max="${t}"
          step="${this.blockIncrement}"
          @change="${this.onChange}"
        />

        <frc-axis ticks="5" min=${e} max=${t}></frc-axis>
      </div>
    `}}h=new WeakSet;v=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))};i.styles=$`
    :host {
      display: inline-block;
      height: 50px;
      width: 300px;
    }

    .slider-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
    }

    input {
      width: 100%;
    }

    table-axis {
      width: calc(85% - 14px);
      max-width: calc(100% - 74px);
      display: block;
    }
  `;m([l({type:Number})],i.prototype,"value",2);m([l({type:Number})],i.prototype,"min",2);m([l({type:Number})],i.prototype,"max",2);m([l({type:Number,attribute:"block-increment"})],i.prototype,"blockIncrement",2);customElements.get("frc-number-slider")||customElements.define("frc-number-slider",i);const k={value:0,min:-1,max:1,blockIncrement:.05,theme:"light","background-color":"#fff","--frc-axis-text-color":"black"},O={title:"FRC/Number Slider",tags:["autodocs"],component:"frc-number-slider",args:k,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:-1}}},max:{table:{category:"Properties",defaultValue:{summary:1}}},blockIncrement:{table:{category:"Properties",defaultValue:{summary:.05}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-axis-text-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}}},decorators:[(r,e)=>{const s=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",a=e.args["background-color"];return o` <div
        style=${C({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?a:s})}
      >
        ${r()}
      </div>`}]};function V(r){return r.theme==="custom"?o`
      <style>
        .custom {
          --frc-axis-text-color: ${r["--frc-axis-text-color"]};
        }
      </style>
    `:r.theme==="dark"?o`
      <style>
        .dark {
          --frc-axis-text-color: white;
        }
      </style>
    `:o`
    <style>
      .light {
        --frc-axis-text-color: black;
      }
    </style>
  `}function S(r={}){return{args:{...k,...r},render:t=>o`
      ${V(t)}
      <frc-number-slider
        class=${t.theme}
        value=${t.value}
        min=${t.min}
        max=${t.max}
        block-increment=${t.blockIncrement}
      ></frc-number-slider>
    `}}const c=S({theme:"light"}),n=S({theme:"dark"});var p,f,y;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`createNumberSliderStory({
  theme: 'light'
})`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,x,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`createNumberSliderStory({
  theme: 'dark'
})`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const A=["LightTheme","DarkTheme"];export{n as DarkTheme,c as LightTheme,A as __namedExportsOrder,O as default};
//# sourceMappingURL=NumberSlider.stories-1149209a.js.map
