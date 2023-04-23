import{r as v,s as b,$ as a}from"./lit-element-ac510585.js";import{e as n}from"./query-assigned-elements-bd4ea1f7.js";import{i as w}from"./style-map-fc25a154.js";import{l as p}from"./if-defined-a8bd05d9.js";const i={check:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z","check-circle":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z",close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",edit:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"};var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(o,e,t,c)=>{for(var r=c>1?void 0:c?P(e,t):e,u=o.length-1,h;u>=0;u--)(h=o[u])&&(r=(c?h(e,t,r):h(r))||r);return c&&r&&x(e,t,r),r};let s=class extends b{constructor(){super(...arguments),this.color="#000000",this.icon=Object.keys(i)[0],this.svgPath="",this.viewBox="0 0 24 24"}render(){const e=this.icon==="Custom"||!this.icon;return a`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox=${e?this.viewBox:"0 0 24 24"}
        width="24px"
        fill=${this.color}
      >
        <path d=${e?this.svgPath:i[this.icon]} />
      </svg>
    `}};s.styles=v`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;m([n({type:String})],s.prototype,"color",2);m([n({type:String})],s.prototype,"icon",2);m([n({type:String})],s.prototype,"svgPath",2);m([n({type:String})],s.prototype,"viewBox",2);customElements.get("frc-icon")||customElements.define("frc-icon",s);const f={color:"black",customIcon:!1,icon:Object.keys(i)[0],svgPath:"",viewBox:"0 0 24 24",theme:"light","background-color":"#fff",width:24,height:24},B={title:"FRC/Icon",tags:["autodocs"],component:"frc-icon",args:f,argTypes:{color:{table:{category:"Properties",defaultValue:{summary:"black"}}},customIcon:{table:{category:"Properties",defaultValue:{summary:!1}}},icon:{table:{category:"Properties",defaultValue:{summary:Object.keys(i)[0]}},options:Object.keys(i),control:{type:"select"}},svgPath:{table:{category:"Properties",defaultValue:{summary:""}}},viewBox:{table:{category:"Properties",defaultValue:{summary:"0 0 24 24"}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},width:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}},height:{table:{category:"Styles",defaultValue:24},control:{type:"number",min:0}}},decorators:[(o,e)=>{const c=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",r=e.args["background-color"];return a` <div
        style=${w({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?r:c})}
      >
        ${o()}
      </div>`}]};function $(o){return a`
    <style>
      frc-icon {
        width: ${o.width}px;
        height: ${o.height}px;
      }
    </style>
  `}function S(o={}){return{args:{...f,...o},render:t=>a`
      ${$(t)}
      <frc-icon
        class=${t.theme}
        color=${t.color}
        icon=${p(t.customIcon?void 0:t.icon)}
        svg-path=${p(t.customIcon?t.svgPath:void 0)}
        view-box=${p(t.customIcon?t.viewBox:void 0)}
      ></frc-icon>
    `}}const l=S();var g,d,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:"createIconStory()",...(y=(d=l.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const _=["Icon"];export{l as Icon,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=Icon.stories-021d39e6.js.map
