import{i as l,s as v,x as g}from"./lit-element-336289fd.js";import{n as o}from"./property-a00a2a3e.js";const m={check:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z","check-circle":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z",close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",edit:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"};var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,r=(c,t,h,s)=>{for(var e=s>1?void 0:s?x(t,h):t,n=c.length-1,p;n>=0;n--)(p=c[n])&&(e=(s?p(t,h,e):p(e))||e);return s&&e&&w(t,h,e),e};class i extends v{constructor(){super(...arguments),this.color="#000000",this.icon="",this.svgPath="",this.viewBox="0 0 24 24"}render(){const t=this.icon==="Custom"||!this.icon;return g`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox=${t?this.viewBox:"0 0 24 24"}
        width="24px"
        fill=${this.color}
      >
        <path d=${t?this.svgPath:m[this.icon]} />
      </svg>
    `}}i.styles=l`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;r([o({type:String})],i.prototype,"color",2);r([o({type:String})],i.prototype,"icon",2);r([o({type:String,attribute:"svg-path"})],i.prototype,"svgPath",2);r([o({type:String,attribute:"view-box"})],i.prototype,"viewBox",2);customElements.get("frc-icon")||customElements.define("frc-icon",i);export{m as i};
