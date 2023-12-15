import{i as oe,s as le,x as N}from"./lit-element-336289fd.js";import{n as q}from"./property-a00a2a3e.js";import{e as ge}from"./query-5f0bf39c.js";import{c as ce,g as me}from"./_commonjsHelpers-725317a4.js";import{o as fe}from"./style-map-1987af2b.js";var U={exports:{}};(function(m){(function(t,i){var o=i(t);m.exports?m.exports=o:t.Gauge=o})(typeof window>"u"?ce:window,function(t,i){var o=t.document,l=Array.prototype.slice,b=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(v){return setTimeout(v,1e3/60)};function G(v){var k=v.duration,V=1,P=60*k,x=v.start||0,E=v.end,M=E-x,R=v.step,S=v.easing||function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)};function z(){var r=V/P,a=M*S(r)+x;R(a,V),V+=1,r<1&&b(z)}b(z)}var K=function(){var v="http://www.w3.org/2000/svg",k={centerX:50,centerY:50},V={dialRadius:40,dialStartAngle:135,dialEndAngle:45,value:0,max:100,min:0,valueDialClass:"value",valueClass:"value-text",dialClass:"dial",gaugeClass:"gauge",showValue:!0,gaugeColor:null,label:function(r){return Math.round(r)}};function P(){var r=arguments[0],a=l.call(arguments,1);return a.forEach(function(e){for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n])}),r}function x(r,a,e){var n=o.createElementNS(v,r);for(var s in a)n.setAttribute(s,a[s]);return e&&e.forEach(function(w){n.appendChild(w)}),n}function E(r,a){return r*a/100}function M(r,a,e){var n=Number(r);return n>e?e:n<a?a:n}function R(r,a,e){var n=e-a,s=r-a;return 100*s/n}function S(r,a,e,n){var s=n*Math.PI/180;return{x:Math.round((r+e*Math.cos(s))*1e3)/1e3,y:Math.round((a+e*Math.sin(s))*1e3)/1e3}}function z(r,a,e){var n=k.centerX,s=k.centerY;return{end:S(n,s,r,e),start:S(n,s,r,a)}}return function(a,e){e=P({},V,e);var n=a,s=e.max,w=e.min,g=M(e.value,w,s),_=e.dialRadius,Q=e.showValue,f=e.dialStartAngle,C=e.dialEndAngle,Z=e.valueDialClass,ee=e.valueClass;e.valueLabelClass;var te=e.dialClass,ae=e.gaugeClass,$=e.color,F,y,re=e.label,ne=e.viewBox,I;if(f<C){console.log("WARN! startAngle < endAngle, Swapping");var ie=f;f=C,C=ie}function T(u,h,d,c){var p=z(u,h,d),H=p.start,L=p.end,ue=typeof c>"u"?1:c;return["M",H.x,H.y,"A",u,u,0,ue,1,L.x,L.y].join(" ")}function se(u){F=x("text",{x:50,y:50,fill:"#999",class:ee,"font-size":"100%","font-family":"sans-serif","font-weight":"normal","text-anchor":"middle","alignment-baseline":"middle","dominant-baseline":"central"}),y=x("path",{class:Z,fill:"none",stroke:"#666","stroke-width":2.5,d:T(_,f,f)});var h=E(100,360-Math.abs(f-C)),d=h<=180?0:1,c=x("svg",{viewBox:ne||"0 0 100 100",class:ae},[x("path",{class:te,fill:"none",stroke:"#eee","stroke-width":2,d:T(_,f,C,d)}),x("g",{class:"text-container"},[F]),y]);u.appendChild(c)}function j(u,h){var d=R(u,w,s),c=E(d,360-Math.abs(f-C)),p=c<=180?0:1;Q&&(F.textContent=re.call(e,u)),y.setAttribute("d",T(_,f,c+f,p))}function B(u,h){var d=$.call(e,u),c=h*1e3,p="stroke "+c+"ms ease";y.style.stroke=d,y.style["-webkit-transition"]=p,y.style["-moz-transition"]=p,y.style.transition=p}return I={setMaxValue:function(u){s=u,j(g)},setValue:function(u){g=M(u,w,s),$&&B(g,0),j(g)},setValueAnimated:function(u,h){var d=g;g=M(u,w,s),d!==g&&($&&B(g,h),G({start:d||0,end:g,duration:h||1,step:function(c,p){j(c)}}))},getValue:function(){return g}},se(n),I.setValue(g),I}}();return K})})(U);var de=U.exports,ve=de;const he=me(ve);var pe=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,D=(m,t,i,o)=>{for(var l=o>1?void 0:o?xe(t,i):t,b=m.length-1,G;b>=0;b--)(G=m[b])&&(l=(o?G(t,i,l):G(l))||l);return o&&l&&pe(t,i,l),l};let A=class extends le{constructor(){super(...arguments),this.min=0,this.max=100,this.value=0}setSize(){const t=this.getBoundingClientRect(),i=t.width,o=t.height,l=Math.min(i,o);this.gaugeElement.style.width=`${l}px`}gaugeInit(){this.gaugeElement.innerHTML="",this.gauge=he(this.gaugeElement,{min:Math.min(this.min,this.max),max:Math.max(this.min,this.max)}),this.setSize()}firstUpdated(){this.gaugeInit(),new ResizeObserver(()=>this.setSize()).observe(this)}updated(t){var i;(t.has("min")||t.has("max"))&&this.gaugeInit(),(i=this.gauge)==null||i.setValue(this.value)}render(){return N`
      <div class="gauge-container-container">
        <div id="gauge" class="gauge-container"></div>
      </div>
    `}};A.styles=oe`
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
  `;D([q({type:Number})],A.prototype,"min",2);D([q({type:Number})],A.prototype,"max",2);D([q({type:Number})],A.prototype,"value",2);D([ge("#gauge")],A.prototype,"gaugeElement",2);customElements.get("frc-gauge")||customElements.define("frc-gauge",A);const J={value:0,min:0,max:100,theme:"light","background-color":"#fff"},Me={title:"FRC/Gauge",tags:["autodocs"],component:"frc-gauge",args:J,argTypes:{value:{table:{category:"Properties",defaultValue:{summary:0}}},min:{table:{category:"Properties",defaultValue:{summary:0}}},max:{table:{category:"Properties",defaultValue:{summary:100}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}}},decorators:[(m,t)=>{const o=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",l=t.args["background-color"];return N` <div
        style=${fe({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?l:o})}
      >
        ${m()}
      </div>`}]};function ye(m={}){return{args:{...J,...m},render:i=>N`
      <frc-gauge
        class=${i.theme}
        value=${i.value}
        min=${i.min}
        max=${i.max}
      ></frc-gauge>
    `}}const O=ye();var W,X,Y;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:"createGaugeStory()",...(Y=(X=O.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ke=["Gauge"];export{O as Gauge,ke as __namedExportsOrder,Me as default};
