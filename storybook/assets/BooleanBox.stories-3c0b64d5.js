import{s as j,i as f,k as D,X as C}from"./property-7226fcdb-ca5eacb2.js";import{x as P}from"./lit-element-fe64f99e.js";import{o as y}from"./if-defined-ada0bdaa.js";var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,d=(n,t,e,a)=>{for(var o=a>1?void 0:a?k(t,e):t,b=n.length-1,x;b>=0;b--)(x=n[b])&&(o=(a?x(t,e,o):x(o))||o);return a&&o&&$(t,e,o),o};const r=class s extends D{constructor(){super(...arguments),this.value=!1,this.falseColor=s.DEFAULT_FALSE_COLOR,this.trueColor=s.DEFAULT_TRUE_COLOR,this.label=""}updated(){const t=this.falseColor||s.DEFAULT_FALSE_COLOR,e=this.trueColor||s.DEFAULT_TRUE_COLOR,a=this.renderRoot.querySelector("[part=box]"),o=this.value?e:t;a.style.setProperty("--box-color",o)}render(){return C` <div part="box">${this.label||C`&nbsp;`}</div> `}};r.DEFAULT_FALSE_COLOR="#ff0000";r.DEFAULT_TRUE_COLOR="#00ff00";r.styles=j`
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
  `;d([f({type:Boolean})],r.prototype,"value",2);d([f({type:String,attribute:"false-color"})],r.prototype,"falseColor",2);d([f({type:String,attribute:"true-color"})],r.prototype,"trueColor",2);d([f({type:String})],r.prototype,"label",2);let I=r;customElements.get("frc-boolean-box")||customElements.define("frc-boolean-box",I);const V={value:!1,falseColor:"#ff0000",trueColor:"#00ff00",label:""},z={title:"FRC/Boolean Box",tags:["autodocs"],component:"frc-boolean-box",args:V,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:!1}}},falseColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#ff0000"}}},trueColor:{control:"color",table:{category:"Properties",defaultValue:{summary:"#00ff00"}}},label:{table:{category:"Properties",defaultValue:{summary:""}}}},parameters:{docs:{description:{component:'To use this component import the module:\r\n\r\n```javascript\r\nimport "@frc-web-components/fwc/components/boolean-box";\r\n\r\n// or to import all components:\r\nimport "@frc-web-components/fwc/components";\r\n```\r\n\r\nAnd then add the component to your html:\r\n\r\n```html\r\n<frc-boolean-box false-color="#9dae5c" true-color="#00ff00"></frc-boolean-box>\r\n```\r\nOr use the component in React:\r\n\r\n```jsx\r\nimport { BooleanBox } from "@frc-web-components/react";\r\n```\r\n\r\nAnd then add the component in your jsx:\r\n\r\n```jsx\r\n<BooleanBox falseColor="#9dae5c" trueColor="#00ff00" />\r\n```'}}}};function l(n={}){return{args:{...V,...n},parameters:{canvas:{sourceState:"shown"}},render:e=>P`
      <frc-boolean-box
        ?value=${e.value}
        false-color=${y(e.falseColor||void 0)}
        true-color=${y(e.trueColor||void 0)}
        label=${y(e.label||void 0)}
      ></frc-boolean-box>
    `}}const c=l(),u=l({value:!0}),p=l({falseColor:"#f67b12"}),m=l({value:!0,trueColor:"#21e4bb"}),i=l({label:"I'm a box"});var h,g,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"createBooleanBoxStory()",...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var B,S,L;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`createBooleanBoxStory({
  value: true
})`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var O,E,T;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`createBooleanBoxStory({
  falseColor: '#f67b12'
})`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,F,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`createBooleanBoxStory({
  value: true,
  trueColor: '#21e4bb'
})`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var w,_,U;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"createBooleanBoxStory({\n  label: `I'm a box`\n})",...(U=(_=i.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const G=["FalseValue","TrueValue","CustomFalseColor","CustomTrueColor","WithLabel"];export{p as CustomFalseColor,m as CustomTrueColor,c as FalseValue,u as TrueValue,i as WithLabel,G as __namedExportsOrder,z as default};
