import{r as V,s as w,$ as y}from"./lit-element-ac510585.js";import{e as b}from"./query-assigned-elements-bd4ea1f7.js";import{l as x}from"./if-defined-a8bd05d9.js";var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(a,r,e,l)=>{for(var t=l>1?void 0:l?j(r,e):r,d=a.length-1,C;d>=0;d--)(C=a[d])&&(t=(l?C(r,e,t):C(t))||t);return l&&t&&$(r,e,t),t};const s=class extends w{constructor(){super(...arguments),this.value=!1,this.falseColor=s.DEFAULT_FALSE_COLOR,this.trueColor=s.DEFAULT_TRUE_COLOR,this.label=""}updated(){const a=this.falseColor||s.DEFAULT_FALSE_COLOR,r=this.trueColor||s.DEFAULT_TRUE_COLOR,e=this.renderRoot.querySelector("[part=box]"),l=this.value?r:a;e.style.setProperty("--box-color",l)}render(){return y` <div part="box">${this.label||y`&nbsp;`}</div> `}};let o=s;o.DEFAULT_FALSE_COLOR="#ff0000";o.DEFAULT_TRUE_COLOR="#00ff00";o.styles=V`
    :host {
      display: inline-block;
      width: 80px;
      height: 80px;
      padding: 5px;
      box-sizing: border-box;
    }

    [part='box'] {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      background-color: var(--box-color);
      text-align: center;
    }
  `;m([b({type:Boolean})],o.prototype,"value",2);m([b({type:String,attribute:"false-color"})],o.prototype,"falseColor",2);m([b({type:String,attribute:"true-color"})],o.prototype,"trueColor",2);m([b({type:String})],o.prototype,"label",2);customElements.get("frc-boolean-box")||customElements.define("frc-boolean-box",o);const D={value:!1,falseColor:"#ff0000",trueColor:"#00ff00",label:""},z={title:"FRC/Boolean Box",tags:["autodocs"],component:"frc-boolean-box",args:D,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:!1}}},falseColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#ff0000"}}},trueColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#00ff00"}}},label:{table:{category:"Properties",defaultValue:{summary:""}}}}};function c(a={}){return{args:{...D,...a},parameters:{canvas:{sourceState:"shown"}},render:e=>y`
      <frc-boolean-box
        ?value=${e.value}
        false-color=${x(e.falseColor||void 0)}
        true-color=${x(e.trueColor||void 0)}
        label=${x(e.label||void 0)}
      ></frc-boolean-box>
    `}}const u=c(),n=c({value:!0}),p=c({falseColor:"#f67b12"}),i=c({value:!0,trueColor:"#21e4bb"}),f=c({label:"I'm a box"});var g,v,_;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:"createBooleanBoxStory()",...(_=(v=u.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var h,B,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`createBooleanBoxStory({
  value: true
})`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,O,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`createBooleanBoxStory({
  falseColor: '#f67b12'
})`,...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,T,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`createBooleanBoxStory({
  value: true,
  trueColor: '#21e4bb'
})`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,P,U;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"createBooleanBoxStory({\n  label: `I'm a box`\n})",...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const N=["FalseValue","TrueValue","CustomFalseColor","CustomTrueColor","WithLabel"];export{p as CustomFalseColor,i as CustomTrueColor,u as FalseValue,n as TrueValue,f as WithLabel,N as __namedExportsOrder,z as default};
//# sourceMappingURL=BooleanBox.stories-776308ad.js.map
