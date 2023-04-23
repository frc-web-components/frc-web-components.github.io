import{r as le,s as ge,$ as B}from"./lit-element-ac510585.js";import{e as H}from"./query-assigned-elements-bd4ea1f7.js";import{i as ce}from"./query-99a7b366.js";import{c as fe,g as me}from"./_commonjsHelpers-725317a4.js";import{i as de}from"./style-map-fc25a154.js";var N={},ve={get exports(){return N},set exports(s){N=s}},q={},he={get exports(){return q},set exports(s){q=s}};(function(s){(function(t,i){var l=i(t);s.exports?s.exports=l:t.Gauge=l})(typeof window>"u"?fe:window,function(t,i){var l=t.document,g=Array.prototype.slice,b=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(v){return setTimeout(v,1e3/60)};function G(v){var M=v.duration,V=1,D=60*M,x=v.start||0,k=v.end,E=k-x,P=v.step,S=v.easing||function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)};function z(){var r=V/D,a=E*S(r)+x;P(a,V),V+=1,r<1&&b(z)}b(z)}var Q=function(){var v="http://www.w3.org/2000/svg",M={centerX:50,centerY:50},V={dialRadius:40,dialStartAngle:135,dialEndAngle:45,value:0,max:100,min:0,valueDialClass:"value",valueClass:"value-text",dialClass:"dial",gaugeClass:"gauge",showValue:!0,gaugeColor:null,label:function(r){return Math.round(r)}};function D(){var r=arguments[0],a=g.call(arguments,1);return a.forEach(function(e){for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n])}),r}function x(r,a,e){var n=l.createElementNS(v,r);for(var u in a)n.setAttribute(u,a[u]);return e&&e.forEach(function(w){n.appendChild(w)}),n}function k(r,a){return r*a/100}function E(r,a,e){var n=Number(r);return n>e?e:n<a?a:n}function P(r,a,e){var n=e-a,u=r-a;return 100*u/n}function S(r,a,e,n){var u=n*Math.PI/180;return{x:Math.round((r+e*Math.cos(u))*1e3)/1e3,y:Math.round((a+e*Math.sin(u))*1e3)/1e3}}function z(r,a,e){var n=M.centerX,u=M.centerY;return{end:S(n,u,r,e),start:S(n,u,r,a)}}return function(a,e){e=D({},V,e);var n=a,u=e.max,w=e.min,c=E(e.value,w,u),R=e.dialRadius,Z=e.showValue,m=e.dialStartAngle,C=e.dialEndAngle,ee=e.valueDialClass,te=e.valueClass;e.valueLabelClass;var ae=e.dialClass,re=e.gaugeClass,_=e.color,F,y,ne=e.label,ie=e.viewBox,I;if(m<C){console.log("WARN! startAngle < endAngle, Swapping");var se=m;m=C,C=se}function T(o,h,d,f){var p=z(o,h,d),W=p.start,X=p.end,oe=typeof f>"u"?1:f;return["M",W.x,W.y,"A",o,o,0,oe,1,X.x,X.y].join(" ")}function ue(o){F=x("text",{x:50,y:50,fill:"#999",class:te,"font-size":"100%","font-family":"sans-serif","font-weight":"normal","text-anchor":"middle","alignment-baseline":"middle","dominant-baseline":"central"}),y=x("path",{class:ee,fill:"none",stroke:"#666","stroke-width":2.5,d:T(R,m,m)});var h=k(100,360-Math.abs(m-C)),d=h<=180?0:1,f=x("svg",{viewBox:ie||"0 0 100 100",class:re},[x("path",{class:ae,fill:"none",stroke:"#eee","stroke-width":2,d:T(R,m,C,d)}),x("g",{class:"text-container"},[F]),y]);o.appendChild(f)}function j(o,h){var d=P(o,w,u),f=k(d,360-Math.abs(m-C)),p=f<=180?0:1;Z&&(F.textContent=ne.call(e,o)),y.setAttribute("d",T(R,m,f+m,p))}function L(o,h){var d=_.call(e,o),f=h*1e3,p="stroke "+f+"ms ease";y.style.stroke=d,y.style["-webkit-transition"]=p,y.style["-moz-transition"]=p,y.style.transition=p}return I={setMaxValue:function(o){u=o,j(c)},setValue:function(o){c=E(o,w,u),_&&L(c,0),j(c)},setValueAnimated:function(o,h){var d=c;c=E(o,w,u),d!==c&&(_&&L(c,h),G({start:d||0,end:c,duration:h||1,step:function(f,p){j(f)}}))},getValue:function(){return c}},ue(n),I.setValue(c),I}}();return Q})})(he);(function(s){s.exports=q})(ve);const pe=me(N);var xe=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,$=(s,t,i,l)=>{for(var g=l>1?void 0:l?ye(t,i):t,b=s.length-1,G;b>=0;b--)(G=s[b])&&(g=(l?G(t,i,g):G(g))||g);return l&&g&&xe(t,i,g),g};let A=class extends ge{constructor(){super(...arguments),this.min=0,this.max=100,this.value=0}setSize(){const t=this.getBoundingClientRect(),i=t.width,l=t.height,g=Math.min(i,l);this.gaugeElement.style.width=`${g}px`}gaugeInit(){this.gaugeElement.innerHTML="",this.gauge=pe(this.gaugeElement,{min:Math.min(this.min,this.max),max:Math.max(this.min,this.max)}),this.setSize()}firstUpdated(){this.gaugeInit(),new ResizeObserver(()=>this.setSize()).observe(this)}updated(t){var i;(t.has("min")||t.has("max"))&&this.gaugeInit(),(i=this.gauge)==null||i.setValue(this.value)}render(){return B`
      <div class="gauge-container-container">
        <div id="gauge" class="gauge-container"></div>
      </div>
    `}};A.styles=le`
    :host {
      display: inline-block;
      width: 200px;
      height: 200px;
    }

    .gauge-container-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .gauge-container {
      display: block;
    }

    .gauge-container > .gauge > .dial {
      stroke: #ddd;
      stroke-width: 3;
      fill: rgba(0, 0, 0, 0);
      stroke: var(--frc-gauge-color, rgb(221, 221, 221));
    }
    .gauge-container > .gauge > .value {
      stroke: var(--frc-gauge-fill-color, rgb(47, 180, 200));
      stroke-width: 3;
      fill: rgba(0, 0, 0, 0);
    }
    .gauge-container > .gauge .value-text {
      fill: var(--frc-gauge-text-color, rgb(100, 100, 100));
      font-family: sans-serif;
      font-size: 1em;
    }
  `;$([H({type:Number})],A.prototype,"min",2);$([H({type:Number})],A.prototype,"max",2);$([H({type:Number})],A.prototype,"value",2);$([ce("#gauge")],A.prototype,"gaugeElement",2);customElements.get("frc-gauge")||customElements.define("frc-gauge",A);const K={value:0,min:0,max:100,theme:"light","background-color":"#fff"},Me={title:"FRC/Gauge",tags:["autodocs"],component:"frc-gauge",args:K,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:0}}},max:{table:{category:"Properties",defaultValue:{summary:100}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}}},decorators:[(s,t)=>{const l=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",g=t.args["background-color"];return B` <div
        style=${de({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?g:l})}
      >
        ${s()}
      </div>`}]};function be(s={}){return{args:{...K,...s},render:i=>B`
      <frc-gauge
        class=${i.theme}
        value=${i.value}
        min=${i.min}
        max=${i.max}
      ></frc-gauge>
    `}}const O=be();var Y,U,J;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:"createGaugeStory()",...(J=(U=O.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const ke=["Gauge"];export{O as Gauge,ke as __namedExportsOrder,Me as default};
//# sourceMappingURL=Gauge.stories-d1d1e529.js.map
