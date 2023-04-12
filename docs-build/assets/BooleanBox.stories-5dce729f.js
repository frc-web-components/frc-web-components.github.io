import{r as D,s as V,$ as y}from"./lit-element-ac510585.js";import{e as b,n as w}from"./query-assigned-elements-a1ee9091.js";import{l as C}from"./if-defined-a8bd05d9.js";var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,s=(a,r,o,l)=>{for(var t=l>1?void 0:l?j(r,o):r,m=a.length-1,d;m>=0;m--)(d=a[m])&&(t=(l?d(r,o,t):d(t))||t);return l&&t&&$(r,o,t),t};let e=class extends V{constructor(){super(...arguments),this.value=!1,this.falseColor=e.DEFAULT_FALSE_COLOR,this.trueColor=e.DEFAULT_TRUE_COLOR,this.label=""}updated(){const a=this.falseColor||e.DEFAULT_FALSE_COLOR,r=this.trueColor||e.DEFAULT_TRUE_COLOR,o=this.renderRoot.querySelector("[part=box]"),l=this.value?r:a;o.style.setProperty("--box-color",l)}render(){return y` <div part="box">${this.label||y`&nbsp;`}</div> `}};e.DEFAULT_FALSE_COLOR="#ff0000";e.DEFAULT_TRUE_COLOR="#00ff00";e.styles=D`
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
  `;s([b({type:Boolean})],e.prototype,"value",2);s([b({type:String,attribute:"false-color"})],e.prototype,"falseColor",2);s([b({type:String,attribute:"true-color"})],e.prototype,"trueColor",2);s([b({type:String})],e.prototype,"label",2);e=s([w("frc-boolean-box")],e);const U={value:!1,falseColor:"#ff0000",trueColor:"#00ff00",label:""},z={title:"FRC/Boolean Box",tags:["autodocs"],component:"frc-boolean-box",args:U,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:!1}}},falseColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#ff0000"}}},trueColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#00ff00"}}},label:{table:{category:"Properties",defaultValue:{summary:""}}}}};function c(a={}){return{args:{...U,...a},parameters:{canvas:{sourceState:"shown"}},render:o=>y`
      <frc-boolean-box
        ?value=${o.value}
        false-color=${C(o.falseColor||void 0)}
        true-color=${C(o.trueColor||void 0)}
        label=${C(o.label||void 0)}
      ></frc-boolean-box>
    `}}const u=c(),n=c({value:!0}),p=c({falseColor:"#f67b12"}),i=c({value:!0,trueColor:"#21e4bb"}),f=c({label:"I'm a box"});var x,g,v;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"createBooleanBoxStory()",...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,_,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`createBooleanBoxStory({
  value: true
})`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var B,L,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`createBooleanBoxStory({
  falseColor: '#f67b12'
})`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,T,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`createBooleanBoxStory({
  value: true,
  trueColor: '#21e4bb'
})`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var A,R,P;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:"createBooleanBoxStory({\n  label: `I'm a box`\n})",...(P=(R=f.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const N=["FalseValue","TrueValue","CustomFalseColor","CustomTrueColor","WithLabel"];export{p as CustomFalseColor,i as CustomTrueColor,u as FalseValue,n as TrueValue,f as WithLabel,N as __namedExportsOrder,z as default};
//# sourceMappingURL=BooleanBox.stories-5dce729f.js.map
