import{i as V,s as w,x as y}from"./lit-element-336289fd.js";import{n as b}from"./property-a00a2a3e.js";import{o as x}from"./if-defined-83631f70.js";var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(c,t,e,a)=>{for(var o=a>1?void 0:a?j(t,e):t,d=c.length-1,C;d>=0;d--)(C=c[d])&&(o=(a?C(t,e,o):C(o))||o);return a&&o&&$(t,e,o),o};const r=class l extends w{constructor(){super(...arguments),this.value=!1,this.falseColor=l.DEFAULT_FALSE_COLOR,this.trueColor=l.DEFAULT_TRUE_COLOR,this.label=""}updated(){const t=this.falseColor||l.DEFAULT_FALSE_COLOR,e=this.trueColor||l.DEFAULT_TRUE_COLOR,a=this.renderRoot.querySelector("[part=box]"),o=this.value?e:t;a.style.setProperty("--box-color",o)}render(){return y` <div part="box">${this.label||y`&nbsp;`}</div> `}};r.DEFAULT_FALSE_COLOR="#ff0000";r.DEFAULT_TRUE_COLOR="#00ff00";r.styles=V`
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
  `;m([b({type:Boolean})],r.prototype,"value",2);m([b({type:String,attribute:"false-color"})],r.prototype,"falseColor",2);m([b({type:String,attribute:"true-color"})],r.prototype,"trueColor",2);m([b({type:String})],r.prototype,"label",2);let I=r;customElements.get("frc-boolean-box")||customElements.define("frc-boolean-box",I);const D={value:!1,falseColor:"#ff0000",trueColor:"#00ff00",label:""},N={title:"FRC/Boolean Box",tags:["autodocs"],component:"frc-boolean-box",args:D,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:!1}}},falseColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#ff0000"}}},trueColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#00ff00"}}},label:{table:{category:"Properties",defaultValue:{summary:""}}}}};function s(c={}){return{args:{...D,...c},parameters:{canvas:{sourceState:"shown"}},render:e=>y`
      <frc-boolean-box
        ?value=${e.value}
        false-color=${x(e.falseColor||void 0)}
        true-color=${x(e.trueColor||void 0)}
        label=${x(e.label||void 0)}
      ></frc-boolean-box>
    `}}const n=s(),u=s({value:!0}),p=s({falseColor:"#f67b12"}),i=s({value:!0,trueColor:"#21e4bb"}),f=s({label:"I'm a box"});var g,v,B;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"createBooleanBoxStory()",...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var h,S,_;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`createBooleanBoxStory({
  value: true
})`,...(_=(S=u.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var L,O,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`createBooleanBoxStory({
  falseColor: '#f67b12'
})`,...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,T,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`createBooleanBoxStory({
  value: true,
  trueColor: '#21e4bb'
})`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,P,U;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"createBooleanBoxStory({\n  label: `I'm a box`\n})",...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const G=["FalseValue","TrueValue","CustomFalseColor","CustomTrueColor","WithLabel"];export{p as CustomFalseColor,i as CustomTrueColor,n as FalseValue,u as TrueValue,f as WithLabel,G as __namedExportsOrder,N as default};
