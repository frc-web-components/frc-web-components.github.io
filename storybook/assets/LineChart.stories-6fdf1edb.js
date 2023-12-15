import{T as ht,b as X,s as Ve,i as Sn,x as G}from"./lit-element-336289fd.js";import{n as S}from"./property-a00a2a3e.js";import{r as An}from"./state-0f1c18cb.js";import{e as Oe}from"./query-5f0bf39c.js";import{c as Un,i as Xe,a as mt,b as dt,d as Ln,s as Me}from"./transform-c376ec3f.js";import{f as Nn}from"./directive-helpers-0e49106b.js";import{i as Pn,t as Fn,e as Yn,o as ye}from"./style-map-1987af2b.js";function Ae(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function _n(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function rt(e){let t,n,r;e.length!==2?(t=Ae,n=(s,l)=>Ae(e(s),l),r=(s,l)=>e(s)-l):(t=e===Ae||e===_n?e:Hn,n=e,r=e);function i(s,l,u=0,m=s.length){if(u<m){if(t(l,l)!==0)return m;do{const h=u+m>>>1;n(s[h],l)<0?u=h+1:m=h}while(u<m)}return u}function a(s,l,u=0,m=s.length){if(u<m){if(t(l,l)!==0)return m;do{const h=u+m>>>1;n(s[h],l)<=0?u=h+1:m=h}while(u<m)}return u}function o(s,l,u=0,m=s.length){const h=i(s,l,u,m-1);return h>u&&r(s[h-1],l)>-r(s[h],l)?h-1:h}return{left:i,center:o,right:a}}function Hn(){return 0}function Vn(e){return e===null?NaN:+e}const On=rt(Ae),Wn=On.right;rt(Vn).center;const In=Wn;class gt extends Map{constructor(t,n=jn){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(yt(this,t))}has(t){return super.has(yt(this,t))}set(t,n){return super.set(zn(this,t),n)}delete(t){return super.delete(Gn(this,t))}}function yt({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function zn({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function Gn({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function jn(e){return e!==null&&typeof e=="object"?e.valueOf():e}var Qe=Math.sqrt(50),Je=Math.sqrt(10),Ke=Math.sqrt(2);function Rn(e,t,n){var r,i=-1,a,o,s;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(a=e,e=t,t=a),(s=Gt(e,t,n))===0||!isFinite(s))return[];if(s>0){let l=Math.round(e/s),u=Math.round(t/s);for(l*s<e&&++l,u*s>t&&--u,o=new Array(a=u-l+1);++i<a;)o[i]=(l+i)*s}else{s=-s;let l=Math.round(e*s),u=Math.round(t*s);for(l/s<e&&++l,u/s>t&&--u,o=new Array(a=u-l+1);++i<a;)o[i]=(l+i)/s}return r&&o.reverse(),o}function Gt(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=Qe?10:a>=Je?5:a>=Ke?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=Qe?10:a>=Je?5:a>=Ke?2:1)}function et(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=Qe?i*=10:a>=Je?i*=5:a>=Ke&&(i*=2),t<e?-i:i}function En(e){return e}var Ge=1,Ue=2,tt=3,pe=4,pt=1e-6;function Bn(e){return"translate("+e+",0)"}function Zn(e){return"translate(0,"+e+")"}function qn(e){return t=>+e(t)}function Xn(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function Qn(){return!this.__axis}function it(e,t){var n=[],r=null,i=null,a=6,o=6,s=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,u=e===Ge||e===pe?-1:1,m=e===pe||e===Ue?"x":"y",h=e===Ge||e===tt?Bn:Zn;function f(g){var $=r??(t.ticks?t.ticks.apply(t,n):t.domain()),F=i??(t.tickFormat?t.tickFormat.apply(t,n):En),L=Math.max(a,0)+s,Y=t.range(),V=+Y[0]+l,T=+Y[Y.length-1]+l,U=(t.bandwidth?Xn:qn)(t.copy(),l),C=g.selection?g.selection():g,y=C.selectAll(".domain").data([null]),w=C.selectAll(".tick").data($,t).order(),O=w.exit(),E=w.enter().append("g").attr("class","tick"),I=w.select("line"),p=w.select("text");y=y.merge(y.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(E),I=I.merge(E.append("line").attr("stroke","currentColor").attr(m+"2",u*a)),p=p.merge(E.append("text").attr("fill","currentColor").attr(m,u*L).attr("dy",e===Ge?"0em":e===tt?"0.71em":"0.32em")),g!==C&&(y=y.transition(g),w=w.transition(g),I=I.transition(g),p=p.transition(g),O=O.transition(g).attr("opacity",pt).attr("transform",function(D){return isFinite(D=U(D))?h(D+l):this.getAttribute("transform")}),E.attr("opacity",pt).attr("transform",function(D){var k=this.parentNode.__axis;return h((k&&isFinite(k=k(D))?k:U(D))+l)})),O.remove(),y.attr("d",e===pe||e===Ue?o?"M"+u*o+","+V+"H"+l+"V"+T+"H"+u*o:"M"+l+","+V+"V"+T:o?"M"+V+","+u*o+"V"+l+"H"+T+"V"+u*o:"M"+V+","+l+"H"+T),w.attr("opacity",1).attr("transform",function(D){return h(U(D)+l)}),I.attr(m+"2",u*a),p.attr(m,u*L).text(F),C.filter(Qn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===Ue?"start":e===pe?"end":"middle"),C.each(function(){this.__axis=U})}return f.scale=function(g){return arguments.length?(t=g,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(g){return arguments.length?(n=g==null?[]:Array.from(g),f):n.slice()},f.tickValues=function(g){return arguments.length?(r=g==null?null:Array.from(g),f):r&&r.slice()},f.tickFormat=function(g){return arguments.length?(i=g,f):i},f.tickSize=function(g){return arguments.length?(a=o=+g,f):a},f.tickSizeInner=function(g){return arguments.length?(a=+g,f):a},f.tickSizeOuter=function(g){return arguments.length?(o=+g,f):o},f.tickPadding=function(g){return arguments.length?(s=+g,f):s},f.offset=function(g){return arguments.length?(l=+g,f):l},f}function Jn(e){return it(Ue,e)}function jt(e){return it(tt,e)}function xt(e){return it(pe,e)}function Kn(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function er(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tr(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=at(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(s){for(o=0;o<r;++o)a[o]=i[o](s);return a}}function nr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function rr(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=at(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}function at(e,t){var n=typeof t,r;return t==null||n==="boolean"?Un(t):(n==="number"?Xe:n==="string"?(r=mt(t))?(t=r,dt):Ln:t instanceof mt?dt:t instanceof Date?nr:er(t)?Kn:Array.isArray(t)?tr:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?rr:Xe)(e,t)}function ir(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ar(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ne(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ce(e){return e=Ne(Math.abs(e)),e?e[1]:NaN}function or(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],l=0;i>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),a.push(n.substring(i-=s,i+s)),!((l+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function sr(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var ur=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Pe(e){if(!(t=ur.exec(e)))throw new Error("invalid format: "+e);var t;return new ot({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Pe.prototype=ot.prototype;function ot(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}ot.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function cr(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var Rt;function lr(e,t){var n=Ne(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(Rt=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+Ne(e,Math.max(0,t+a-1))[0]}function Mt(e,t){var n=Ne(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const vt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:ar,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Mt(e*100,t),r:Mt,s:lr,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function wt(e){return e}var bt=Array.prototype.map,Tt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function fr(e){var t=e.grouping===void 0||e.thousands===void 0?wt:or(bt.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?wt:sr(bt.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function u(h){h=Pe(h);var f=h.fill,g=h.align,$=h.sign,F=h.symbol,L=h.zero,Y=h.width,V=h.comma,T=h.precision,U=h.trim,C=h.type;C==="n"?(V=!0,C="g"):vt[C]||(T===void 0&&(T=12),U=!0,C="g"),(L||f==="0"&&g==="=")&&(L=!0,f="0",g="=");var y=F==="$"?n:F==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",w=F==="$"?r:/[%p]/.test(C)?o:"",O=vt[C],E=/[defgprs%]/.test(C);T=T===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function I(p){var D=y,k=w,B,$e,ie;if(C==="c")k=O(p)+k,p="";else{p=+p;var ae=p<0||1/p<0;if(p=isNaN(p)?l:O(Math.abs(p),T),U&&(p=cr(p)),ae&&+p==0&&$!=="+"&&(ae=!1),D=(ae?$==="("?$:s:$==="-"||$==="("?"":$)+D,k=(C==="s"?Tt[8+Rt/3]:"")+k+(ae&&$==="("?")":""),E){for(B=-1,$e=p.length;++B<$e;)if(ie=p.charCodeAt(B),48>ie||ie>57){k=(ie===46?i+p.slice(B+1):p.slice(B))+k,p=p.slice(0,B);break}}}V&&!L&&(p=t(p,1/0));var oe=D.length+p.length+k.length,W=oe<Y?new Array(Y-oe+1).join(f):"";switch(V&&L&&(p=t(W+p,W.length?Y-k.length:1/0),W=""),g){case"<":p=D+p+k+W;break;case"=":p=D+W+p+k;break;case"^":p=W.slice(0,oe=W.length>>1)+D+p+k+W.slice(oe);break;default:p=W+D+p+k;break}return a(p)}return I.toString=function(){return h+""},I}function m(h,f){var g=u((h=Pe(h),h.type="f",h)),$=Math.max(-8,Math.min(8,Math.floor(ce(f)/3)))*3,F=Math.pow(10,-$),L=Tt[8+$/3];return function(Y){return g(F*Y)+L}}return{format:u,formatPrefix:m}}var ke,Et,Bt;hr({thousands:",",grouping:[3],currency:["$",""]});function hr(e){return ke=fr(e),Et=ke.format,Bt=ke.formatPrefix,ke}function mr(e){return Math.max(0,-ce(Math.abs(e)))}function dr(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ce(t)/3)))*3-ce(Math.abs(e)))}function gr(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ce(t)-ce(e))+1}function st(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}const Ct=Symbol("implicit");function Zt(){var e=new gt,t=[],n=[],r=Ct;function i(a){let o=e.get(a);if(o===void 0){if(r!==Ct)return r;e.set(a,o=t.push(a)-1)}return n[o%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new gt;for(const o of a)e.has(o)||e.set(o,t.push(o)-1);return i},i.range=function(a){return arguments.length?(n=Array.from(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Zt(t,n).unknown(r)},st.apply(i,arguments),i}function yr(e){return function(){return e}}function pr(e){return+e}var $t=[0,1];function ue(e){return e}function nt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:yr(isNaN(t)?NaN:.5)}function xr(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function Mr(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=nt(i,r),a=n(o,a)):(r=nt(r,i),a=n(a,o)),function(s){return a(r(s))}}function vr(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=nt(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(s){var l=In(e,s,1,r)-1;return a[l](i[l](s))}}function qt(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function wr(){var e=$t,t=$t,n=at,r,i,a,o=ue,s,l,u;function m(){var f=Math.min(e.length,t.length);return o!==ue&&(o=xr(e[0],e[f-1])),s=f>2?vr:Mr,l=u=null,h}function h(f){return f==null||isNaN(f=+f)?a:(l||(l=s(e.map(r),t,n)))(r(o(f)))}return h.invert=function(f){return o(i((u||(u=s(t,e.map(r),Xe)))(f)))},h.domain=function(f){return arguments.length?(e=Array.from(f,pr),m()):e.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),m()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),n=ir,m()},h.clamp=function(f){return arguments.length?(o=f?!0:ue,m()):o!==ue},h.interpolate=function(f){return arguments.length?(n=f,m()):n},h.unknown=function(f){return arguments.length?(a=f,h):a},function(f,g){return r=f,i=g,m()}}function Xt(){return wr()(ue,ue)}function br(e,t,n,r){var i=et(e,t,n),a;switch(r=Pe(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=dr(i,o))&&(r.precision=a),Bt(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=gr(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=mr(i))&&(r.precision=a-(r.type==="%")*2);break}}return Et(r)}function Tr(e){var t=e.domain;return e.ticks=function(n){var r=t();return Rn(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return br(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],l,u,m=10;for(s<o&&(u=o,o=s,s=u,u=i,i=a,a=u);m-- >0;){if(u=Gt(o,s,n),u===l)return r[i]=o,r[a]=s,t(r);if(u>0)o=Math.floor(o/u)*u,s=Math.ceil(s/u)*u;else if(u<0)o=Math.ceil(o*u)/u,s=Math.floor(s*u)/u;else break;l=u}return e},e}function Qt(){var e=Xt();return e.copy=function(){return qt(e,Qt())},st.apply(e,arguments),Tr(e)}function Cr(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}var je=new Date,Re=new Date;function N(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=function(a){return e(a=new Date(+a)),a},i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(a){var o=i(a),s=i.ceil(a);return a-o<s-a?o:s},i.offset=function(a,o){return t(a=new Date(+a),o==null?1:Math.floor(o)),a},i.range=function(a,o,s){var l=[],u;if(a=i.ceil(a),s=s==null?1:Math.floor(s),!(a<o)||!(s>0))return l;do l.push(u=new Date(+a)),t(a,s),e(a);while(u<a&&a<o);return l},i.filter=function(a){return N(function(o){if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},function(o,s){if(o>=o)if(s<0)for(;++s<=0;)for(;t(o,-1),!a(o););else for(;--s>=0;)for(;t(o,1),!a(o););})},n&&(i.count=function(a,o){return je.setTime(+a),Re.setTime(+o),e(je),e(Re),Math.floor(n(je,Re))},i.every=function(a){return a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?function(o){return r(o)%a===0}:function(o){return i.count(0,o)%a===0}):i}),i}var Fe=N(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});Fe.every=function(e){return e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?N(function(t){t.setTime(Math.floor(t/e)*e)},function(t,n){t.setTime(+t+n*e)},function(t,n){return(n-t)/e}):Fe};const $r=Fe;Fe.range;const j=1e3,z=j*60,Q=z*60,J=Q*24,ut=J*7,kt=J*30,Ee=J*365;var Jt=N(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*j)},function(e,t){return(t-e)/j},function(e){return e.getUTCSeconds()});const xe=Jt;Jt.range;var Kt=N(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*j)},function(e,t){e.setTime(+e+t*z)},function(e,t){return(t-e)/z},function(e){return e.getMinutes()});const en=Kt;Kt.range;var tn=N(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*j-e.getMinutes()*z)},function(e,t){e.setTime(+e+t*Q)},function(e,t){return(t-e)/Q},function(e){return e.getHours()});const nn=tn;tn.range;var rn=N(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*z)/J,e=>e.getDate()-1);const We=rn;rn.range;function ee(e){return N(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n*7)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*z)/ut})}var Ie=ee(0),Ye=ee(1),kr=ee(2),Dr=ee(3),le=ee(4),Sr=ee(5),Ar=ee(6);Ie.range;Ye.range;kr.range;Dr.range;le.range;Sr.range;Ar.range;var an=N(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});const on=an;an.range;var ct=N(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});ct.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:N(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n*e)})};const K=ct;ct.range;var sn=N(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/J},function(e){return e.getUTCDate()-1});const un=sn;sn.range;function te(e){return N(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n*7)},function(t,n){return(n-t)/ut})}var cn=te(0),_e=te(1),Ur=te(2),Lr=te(3),fe=te(4),Nr=te(5),Pr=te(6);cn.range;_e.range;Ur.range;Lr.range;fe.range;Nr.range;Pr.range;var lt=N(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});lt.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:N(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})};const be=lt;lt.range;function Fr(e,t,n,r,i,a){const o=[[xe,1,j],[xe,5,5*j],[xe,15,15*j],[xe,30,30*j],[a,1,z],[a,5,5*z],[a,15,15*z],[a,30,30*z],[i,1,Q],[i,3,3*Q],[i,6,6*Q],[i,12,12*Q],[r,1,J],[r,2,2*J],[n,1,ut],[t,1,kt],[t,3,3*kt],[e,1,Ee]];function s(u,m,h){const f=m<u;f&&([u,m]=[m,u]);const g=h&&typeof h.range=="function"?h:l(u,m,h),$=g?g.range(u,+m+1):[];return f?$.reverse():$}function l(u,m,h){const f=Math.abs(m-u)/h,g=rt(([,,L])=>L).right(o,f);if(g===o.length)return e.every(et(u/Ee,m/Ee,h));if(g===0)return $r.every(Math.max(et(u,m,h),1));const[$,F]=o[f/o[g-1][2]<o[g][2]/f?g-1:g];return $.every(F)}return[s,l]}const[Yr,_r]=Fr(K,on,Ie,We,nn,en);function Be(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Ze(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function me(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Hr(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,s=e.months,l=e.shortMonths,u=de(i),m=ge(i),h=de(a),f=ge(a),g=de(o),$=ge(o),F=de(s),L=ge(s),Y=de(l),V=ge(l),T={a:ae,A:oe,b:W,B:Mn,c:null,d:Nt,e:Nt,f:oi,g:yi,G:xi,H:ri,I:ii,j:ai,L:ln,m:si,M:ui,p:vn,q:wn,Q:Yt,s:_t,S:ci,u:li,U:fi,V:hi,w:mi,W:di,x:null,X:null,y:gi,Y:pi,Z:Mi,"%":Ft},U={a:bn,A:Tn,b:Cn,B:$n,c:null,d:Pt,e:Pt,f:Ti,g:Pi,G:Yi,H:vi,I:wi,j:bi,L:hn,m:Ci,M:$i,p:kn,q:Dn,Q:Yt,s:_t,S:ki,u:Di,U:Si,V:Ai,w:Ui,W:Li,x:null,X:null,y:Ni,Y:Fi,Z:_i,"%":Ft},C={a:I,A:p,b:D,B:k,c:B,d:Ut,e:Ut,f:Kr,g:At,G:St,H:Lt,I:Lt,j:qr,L:Jr,m:Zr,M:Xr,p:E,q:Br,Q:ti,s:ni,S:Qr,u:zr,U:Gr,V:jr,w:Ir,W:Rr,x:$e,X:ie,y:At,Y:St,Z:Er,"%":ei};T.x=y(n,T),T.X=y(r,T),T.c=y(t,T),U.x=y(n,U),U.X=y(r,U),U.c=y(t,U);function y(d,x){return function(M){var c=[],P=-1,b=0,_=d.length,H,q,ft;for(M instanceof Date||(M=new Date(+M));++P<_;)d.charCodeAt(P)===37&&(c.push(d.slice(b,P)),(q=Dt[H=d.charAt(++P)])!=null?H=d.charAt(++P):q=H==="e"?" ":"0",(ft=x[H])&&(H=ft(M,q)),c.push(H),b=P+1);return c.push(d.slice(b,P)),c.join("")}}function w(d,x){return function(M){var c=me(1900,void 0,1),P=O(c,d,M+="",0),b,_;if(P!=M.length)return null;if("Q"in c)return new Date(c.Q);if("s"in c)return new Date(c.s*1e3+("L"in c?c.L:0));if(x&&!("Z"in c)&&(c.Z=0),"p"in c&&(c.H=c.H%12+c.p*12),c.m===void 0&&(c.m="q"in c?c.q:0),"V"in c){if(c.V<1||c.V>53)return null;"w"in c||(c.w=1),"Z"in c?(b=Ze(me(c.y,0,1)),_=b.getUTCDay(),b=_>4||_===0?_e.ceil(b):_e(b),b=un.offset(b,(c.V-1)*7),c.y=b.getUTCFullYear(),c.m=b.getUTCMonth(),c.d=b.getUTCDate()+(c.w+6)%7):(b=Be(me(c.y,0,1)),_=b.getDay(),b=_>4||_===0?Ye.ceil(b):Ye(b),b=We.offset(b,(c.V-1)*7),c.y=b.getFullYear(),c.m=b.getMonth(),c.d=b.getDate()+(c.w+6)%7)}else("W"in c||"U"in c)&&("w"in c||(c.w="u"in c?c.u%7:"W"in c?1:0),_="Z"in c?Ze(me(c.y,0,1)).getUTCDay():Be(me(c.y,0,1)).getDay(),c.m=0,c.d="W"in c?(c.w+6)%7+c.W*7-(_+5)%7:c.w+c.U*7-(_+6)%7);return"Z"in c?(c.H+=c.Z/100|0,c.M+=c.Z%100,Ze(c)):Be(c)}}function O(d,x,M,c){for(var P=0,b=x.length,_=M.length,H,q;P<b;){if(c>=_)return-1;if(H=x.charCodeAt(P++),H===37){if(H=x.charAt(P++),q=C[H in Dt?x.charAt(P++):H],!q||(c=q(d,M,c))<0)return-1}else if(H!=M.charCodeAt(c++))return-1}return c}function E(d,x,M){var c=u.exec(x.slice(M));return c?(d.p=m.get(c[0].toLowerCase()),M+c[0].length):-1}function I(d,x,M){var c=g.exec(x.slice(M));return c?(d.w=$.get(c[0].toLowerCase()),M+c[0].length):-1}function p(d,x,M){var c=h.exec(x.slice(M));return c?(d.w=f.get(c[0].toLowerCase()),M+c[0].length):-1}function D(d,x,M){var c=Y.exec(x.slice(M));return c?(d.m=V.get(c[0].toLowerCase()),M+c[0].length):-1}function k(d,x,M){var c=F.exec(x.slice(M));return c?(d.m=L.get(c[0].toLowerCase()),M+c[0].length):-1}function B(d,x,M){return O(d,t,x,M)}function $e(d,x,M){return O(d,n,x,M)}function ie(d,x,M){return O(d,r,x,M)}function ae(d){return o[d.getDay()]}function oe(d){return a[d.getDay()]}function W(d){return l[d.getMonth()]}function Mn(d){return s[d.getMonth()]}function vn(d){return i[+(d.getHours()>=12)]}function wn(d){return 1+~~(d.getMonth()/3)}function bn(d){return o[d.getUTCDay()]}function Tn(d){return a[d.getUTCDay()]}function Cn(d){return l[d.getUTCMonth()]}function $n(d){return s[d.getUTCMonth()]}function kn(d){return i[+(d.getUTCHours()>=12)]}function Dn(d){return 1+~~(d.getUTCMonth()/3)}return{format:function(d){var x=y(d+="",T);return x.toString=function(){return d},x},parse:function(d){var x=w(d+="",!1);return x.toString=function(){return d},x},utcFormat:function(d){var x=y(d+="",U);return x.toString=function(){return d},x},utcParse:function(d){var x=w(d+="",!0);return x.toString=function(){return d},x}}}var Dt={"-":"",_:" ",0:"0"},A=/^\s*\d+/,Vr=/^%/,Or=/[\\^$*+?|[\]().{}]/g;function v(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function Wr(e){return e.replace(Or,"\\$&")}function de(e){return new RegExp("^(?:"+e.map(Wr).join("|")+")","i")}function ge(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function Ir(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function zr(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function Gr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function jr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function Rr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function St(e,t,n){var r=A.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function At(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function Er(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function Br(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function Zr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Ut(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function qr(e,t,n){var r=A.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Lt(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function Xr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Qr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Jr(e,t,n){var r=A.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function Kr(e,t,n){var r=A.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function ei(e,t,n){var r=Vr.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function ti(e,t,n){var r=A.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function ni(e,t,n){var r=A.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Nt(e,t){return v(e.getDate(),t,2)}function ri(e,t){return v(e.getHours(),t,2)}function ii(e,t){return v(e.getHours()%12||12,t,2)}function ai(e,t){return v(1+We.count(K(e),e),t,3)}function ln(e,t){return v(e.getMilliseconds(),t,3)}function oi(e,t){return ln(e,t)+"000"}function si(e,t){return v(e.getMonth()+1,t,2)}function ui(e,t){return v(e.getMinutes(),t,2)}function ci(e,t){return v(e.getSeconds(),t,2)}function li(e){var t=e.getDay();return t===0?7:t}function fi(e,t){return v(Ie.count(K(e)-1,e),t,2)}function fn(e){var t=e.getDay();return t>=4||t===0?le(e):le.ceil(e)}function hi(e,t){return e=fn(e),v(le.count(K(e),e)+(K(e).getDay()===4),t,2)}function mi(e){return e.getDay()}function di(e,t){return v(Ye.count(K(e)-1,e),t,2)}function gi(e,t){return v(e.getFullYear()%100,t,2)}function yi(e,t){return e=fn(e),v(e.getFullYear()%100,t,2)}function pi(e,t){return v(e.getFullYear()%1e4,t,4)}function xi(e,t){var n=e.getDay();return e=n>=4||n===0?le(e):le.ceil(e),v(e.getFullYear()%1e4,t,4)}function Mi(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+v(t/60|0,"0",2)+v(t%60,"0",2)}function Pt(e,t){return v(e.getUTCDate(),t,2)}function vi(e,t){return v(e.getUTCHours(),t,2)}function wi(e,t){return v(e.getUTCHours()%12||12,t,2)}function bi(e,t){return v(1+un.count(be(e),e),t,3)}function hn(e,t){return v(e.getUTCMilliseconds(),t,3)}function Ti(e,t){return hn(e,t)+"000"}function Ci(e,t){return v(e.getUTCMonth()+1,t,2)}function $i(e,t){return v(e.getUTCMinutes(),t,2)}function ki(e,t){return v(e.getUTCSeconds(),t,2)}function Di(e){var t=e.getUTCDay();return t===0?7:t}function Si(e,t){return v(cn.count(be(e)-1,e),t,2)}function mn(e){var t=e.getUTCDay();return t>=4||t===0?fe(e):fe.ceil(e)}function Ai(e,t){return e=mn(e),v(fe.count(be(e),e)+(be(e).getUTCDay()===4),t,2)}function Ui(e){return e.getUTCDay()}function Li(e,t){return v(_e.count(be(e)-1,e),t,2)}function Ni(e,t){return v(e.getUTCFullYear()%100,t,2)}function Pi(e,t){return e=mn(e),v(e.getUTCFullYear()%100,t,2)}function Fi(e,t){return v(e.getUTCFullYear()%1e4,t,4)}function Yi(e,t){var n=e.getUTCDay();return e=n>=4||n===0?fe(e):fe.ceil(e),v(e.getUTCFullYear()%1e4,t,4)}function _i(){return"+0000"}function Ft(){return"%"}function Yt(e){return+e}function _t(e){return Math.floor(+e/1e3)}var se,dn;Hi({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Hi(e){return se=Hr(e),dn=se.format,se.parse,se.utcFormat,se.utcParse,se}function Vi(e){return new Date(e)}function Oi(e){return e instanceof Date?+e:+new Date(+e)}function gn(e,t,n,r,i,a,o,s,l,u){var m=Xt(),h=m.invert,f=m.domain,g=u(".%L"),$=u(":%S"),F=u("%I:%M"),L=u("%I %p"),Y=u("%a %d"),V=u("%b %d"),T=u("%B"),U=u("%Y");function C(y){return(l(y)<y?g:s(y)<y?$:o(y)<y?F:a(y)<y?L:r(y)<y?i(y)<y?Y:V:n(y)<y?T:U)(y)}return m.invert=function(y){return new Date(h(y))},m.domain=function(y){return arguments.length?f(Array.from(y,Oi)):f().map(Vi)},m.ticks=function(y){var w=f();return e(w[0],w[w.length-1],y??10)},m.tickFormat=function(y,w){return w==null?C:u(w)},m.nice=function(y){var w=f();return(!y||typeof y.range!="function")&&(y=t(w[0],w[w.length-1],y??10)),y?f(Cr(w,y)):m},m.copy=function(){return qt(m,gn(e,t,n,r,i,a,o,s,l,u))},m}function Wi(){return st.apply(gn(Yr,_r,K,on,Ie,We,nn,en,xe,dn).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ii(e){for(var t=e.length/6|0,n=new Array(t),r=0;r<t;)n[r]="#"+e.slice(r*6,++r*6);return n}const zi=Ii("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),ve(i,t);return!0},He=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},yn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ri(t)}};function Gi(e){this._$AN!==void 0?(He(this),this._$AM=e,yn(this)):this._$AM=e}function ji(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let a=n;a<r.length;a++)ve(r[a],!1),He(r[a]);else r!=null&&(ve(r,!1),He(r));else ve(this,e)}const Ri=e=>{e.type==Fn.CHILD&&(e._$AP??(e._$AP=ji),e._$AQ??(e._$AQ=Gi))};class Ei extends Pn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),yn(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(ve(this,t),He(this))}setValue(t){if(Nn(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const qe=new WeakMap,we=Yn(class extends Ei{render(e){return ht}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),ht}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=qe.get(t);n===void 0&&(n=new WeakMap,qe.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=qe.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});function Bi(e,t,n){return Wi().domain([n-t,n]).range([0,e])}function Zi(e){const t=jt(e).tickFormat(n=>`${n.getTime()/1e3}`);return X`
    <g 
      class="axis axis--x" 
      ${we(n=>{t(Me(n))})}>
    </g> 
  `}function qi(e,t){const n=jt(e).tickSize(-t).tickFormat("");return X`
    <g 
      class="axis-x-grid" 
      ${we(r=>{n(Me(r))})}>
    </g> 
  `}var Xi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Te=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Xi(t,n,i),i};class he extends Ve{constructor(){super(...arguments),this.value=0,this.color="",this.hide=!1,this.yAxis=0,this.displayName=""}}Te([S({type:Number})],he.prototype,"value",2);Te([S({type:String})],he.prototype,"color",2);Te([S({type:Boolean})],he.prototype,"hide",2);Te([S({type:Number,attribute:"y-axis"})],he.prototype,"yAxis",2);Te([S({type:String,attribute:"display-name"})],he.prototype,"displayName",2);customElements.get("frc-line-chart-data")||customElements.define("frc-line-chart-data",he);var Ji=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,ne=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ki(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ji(t,n,i),i};const ea=Zt().domain(Array(8).fill(0).map((e,t)=>t)).range(zi),R=class Le extends Ve{constructor(){super(...arguments),this.viewTime=10,this.chartTitle="",this.data=[],this.startTime=0,this.elapsedTimeMs=0}firstUpdated(){this.startTime=Date.now(),requestAnimationFrame(()=>{this.updateChart()})}getFilteredData(t){const n=t.findIndex(({timeMs:r})=>this.elapsedTimeMs-r<Math.round(this.viewTime*1e3))-1;return n<0?t:t.slice(n)}updateChart(){this.elapsedTimeMs=Date.now()-this.startTime;const t=[...this.children].filter(n=>n.tagName.toLowerCase()==="frc-line-chart-data");this.data=t.map((n,r)=>{var a;const i=((a=this.data[r])==null?void 0:a.data)??[];return i.push({value:n.value??0,timeMs:this.elapsedTimeMs}),{data:this.getFilteredData(i),color:n.color||ea(r%8),hide:n.hide??!1,yAxis:n.yAxis??0,displayName:n.displayName||`Data ${r}`}}),requestAnimationFrame(()=>{this.updateChart()})}static getYScale(t,n,r){const{invert:i,lockMin:a,lockMax:o}=r;let{min:s,max:l}=r;(!a||!o)&&n.forEach(m=>{m.data.forEach(({value:h})=>{a||(s=Math.min(s,h)),o||(l=Math.max(l,h))})});const u=i?[0,t]:[t,0];return Qt().domain([s,l]).range(u)}getDimensions(){var s;const t={top:0,right:40,bottom:20,left:40},n=((s=this.chartContainer)==null?void 0:s.getBoundingClientRect())??{width:960,height:500},r=n.width,i=n.height,a=r-t.left-t.right,o=i-t.top-t.bottom;return{margin:t,svgWidth:r,svgHeight:i,width:a,height:o}}getYScales(){const{height:t}=this.getDimensions(),n=[...this.children].filter(r=>r.tagName.toLowerCase()==="frc-line-chart-axis");if(n.length===0){const r={min:-1,max:1,lockMin:!1,lockMax:!1,invert:!1,side:"left",hideGridLines:!1};return[{chartAxis:r,scale:Le.getYScale(t,this.data.filter(({yAxis:i})=>i===0),r)}]}return n.map((r,i)=>{const a=r,o={min:a.min??-1,max:a.max??1,lockMin:a.lockMin??!1,lockMax:a.lockMax??!1,invert:a.invert??!1,side:a.side??"left",hideGridLines:a.hideGridLines??!1};return{chartAxis:o,scale:Le.getYScale(t,this.data.filter(({yAxis:s})=>s===i),o)}})}static getPath(t,n,r){return`M${t.map(a=>[n(a).toFixed(3),r(a).toFixed(3)].join(",")).join("L")}`}getLegend(){const t=[...this.children].find(i=>i.tagName.toLowerCase()==="frc-line-chart-legend");if(!t)return{direction:"horizontal",position:"n",inside:!1,hide:!1};const n=t;return{direction:n.direction??"horizontal",position:n.position??"n",inside:n.inside??!1,hide:n.hide??!1}}render(){const{inside:t,position:n,direction:r,hide:i}=this.getLegend(),a=n==="w"||n==="e"||["ne","nw","se","sw"].includes(n)&&r==="vertical",o=a&&["ne","e","se"].includes(n)||!a&&["sw","s","se"].includes(n),s=ye({display:t?"block":"flex",flexDirection:`${a?"row":"column"}${o?"-reverse":""}`}),l=t?{width:"100%",height:"100%"}:{flex:"1"};return G`
      <div class="chart-and-header">
        ${this.chartTitle?G`<header>${this.chartTitle}</header>`:""}
        <div class="chart-and-legend" style=${s}>
          ${i?"":this.renderLegend()}
          <div class="chart-container" style=${ye(l)}>
            ${this.renderChart()}
          </div>
        </div>
      </div>
    `}renderLegend(){const{margin:t}=this.getDimensions(),{inside:n,direction:r,position:i}=this.getLegend(),a=(()=>["n","s","e","w"].includes(i)?"center":i==="nw"?"flex-start":i==="se"?"flex-end":i==="ne"?r==="horizontal"?"flex-end":"flex-start":r==="vertical"?"flex-end":"flex-start")(),o=(()=>{if(!n)return{};const u={alignItems:"center"};return i.includes("n")?u.top=`${t.top}px`:i.includes("s")&&(u.bottom=`${t.bottom}px`),i.includes("w")?u.left=`${t.left}px`:i.includes("e")&&(u.right=`${t.right}px`),["n","s","e","w"].includes(i)&&(u.justifyContent="center"),["n","s"].includes(i)&&(u.left="0",u.right="0"),["e","w"].includes(i)&&(u.top="0",u.bottom="0"),u})(),s=ye({alignSelf:a,...o});return G`
      <div
        class="legend ${n?"inside":"outside"} ${r==="horizontal"?"horizontal":"vertical"}"
        style=${s}
      >
        ${this.data.map(({color:u,displayName:m})=>G`
            <div class="legend-item">
              <div
                class="legend-item-box"
                style=${ye({background:u})}
              ></div>
              <span class="legend-item-label">${m}</span>
            </div>
          `)}
      </div>
    `}renderChart(){const{margin:t,svgWidth:n,svgHeight:r,width:i,height:a}=this.getDimensions(),o=Bi(i,Math.round(this.viewTime*1e3),this.elapsedTimeMs),s=this.getYScales(),l=s.map(u=>h=>Le.getPath(h,f=>o(new Date(f.timeMs)),f=>u.scale(f.value)));return X`
      <svg width=${n} height=${r} style="position: absolute">
        <g transform="translate(${t.left},${t.top})">
          <defs>
            <clipPath id="clip">
              <rect width=${i} height=${a}></rect>
            </clipPath>
          </defs>
          <g transform="translate(0,${a})">
            ${Zi(o)}
            ${qi(o,a)}
          </g>
          ${this.renderScales(s,"left")}
          ${this.renderScales(s,"right")}
          <rect class="chart-border" width=${i} height=${a}></rect>
          ${this.data.filter(({hide:u,yAxis:m})=>!u&&m<s.length&&m>=0).map(u=>X`
            <g clip-path="url(#clip)">
              <path 
                class="data-path"
                ${we(m=>{const h=Me(m),f=l[u.yAxis](u.data);h.attr("class","line").attr("stroke",u.color).attr("d",f)})}>
              ></path>
            </g>
          `)}
        </g>
      </svg>
    `}renderScales(t,n){const{width:r}=this.getDimensions();return X`
     ${t.filter(i=>i.chartAxis.side===n).map((i,a)=>{const o=i.chartAxis.side==="left"?-a*25:r;return X`
              <g 
                class="axis axis--y" 
                transform="translate(${o}, 0)"
                ${we(s=>{(i.chartAxis.side==="left"?xt:Jn)(i.scale)(Me(s))})}>
              </g>
              ${i.chartAxis.hideGridLines?"":X`
                    <g 
                      class="axis-y-grid" 
                      ${we(s=>{xt(i.scale).tickSize(-r).tickFormat("")(Me(s))})}>
                    </g> 
                  `}
            `})}
    `}};R.styles=Sn`
    :host {
      display: inline-block;
      width: 700px;
      height: 400px;
      color: var(--frc-line-chart-text-color, black);
    }

    .chart-and-header {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .chart-and-header header {
      font-size: 18px;
      font-family: sans-serif;
      margin: 3px 0;
    }

    .chart-and-legend {
      flex: 1;
      width: 100%;
      position: relative;
    }

    .legend-container {
      position: relative;
    }

    .legend {
      display: flex;
      z-index: 100;
    }

    .legend.outside {
      position: relative;
    }

    .legend.inside {
      position: absolute;
    }

    .legend-item {
      display: flex;
      flex-wrap: no-wrap;
      gap: 5px;
      align-items: center;
      padding: 5px;
    }

    .legend.horizontal {
      flex-direction: row;
    }

    .legend.vertical {
      flex-direction: column;
    }

    .legend-item-box {
      width: 15px;
      height: 15px;
    }

    .legend-item-label {
      font-family: sans-serif;
      font-size: 15px;
    }

    .line {
      fill: none;
      stroke-width: 1.5px;
    }

    .chart-border {
      fill: none;
      stroke-width: 1;
      stroke: var(--frc-line-chart-border-color, black);
    }

    .axis-x-grid line,
    .axis-y-grid line {
      stroke: var(--frc-line-chart-grid-color, #eee);
    }

    .axis--y {
      font-family: monospace;
    }

    svg {
      overflow: visible;
    }
  `;ne([S({type:Number,attribute:"view-time"})],R.prototype,"viewTime",2);ne([S({type:String,attribute:"chart-title"})],R.prototype,"chartTitle",2);ne([An()],R.prototype,"data",2);ne([Oe(".data-path")],R.prototype,"path",2);ne([Oe("svg")],R.prototype,"svg",2);ne([Oe(".axis--x")],R.prototype,"xAxis",2);ne([Oe(".chart-container")],R.prototype,"chartContainer",2);let ta=R;customElements.get("frc-line-chart")||customElements.define("frc-line-chart",ta);var na=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,re=(e,t,n,r)=>{for(var i=r>1?void 0:r?ra(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&na(t,n,i),i};class Z extends Ve{constructor(){super(...arguments),this.min=-1,this.max=1,this.lockMin=!1,this.lockMax=!1,this.invert=!1,this.side="left",this.hideGridLines=!1}}re([S({type:Number})],Z.prototype,"min",2);re([S({type:Number})],Z.prototype,"max",2);re([S({type:Boolean,attribute:"lock-min"})],Z.prototype,"lockMin",2);re([S({type:Boolean,attribute:"lock-max"})],Z.prototype,"lockMax",2);re([S({type:Boolean})],Z.prototype,"invert",2);re([S({type:String})],Z.prototype,"side",2);re([S({type:Boolean,attribute:"hide-grid-lines"})],Z.prototype,"hideGridLines",2);customElements.get("frc-line-chart-axis")||customElements.define("frc-line-chart-axis",Z);var ia=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,ze=(e,t,n,r)=>{for(var i=r>1?void 0:r?aa(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ia(t,n,i),i};const oa=["nw","n","ne","w","e","sw","s","se"];class Ce extends Ve{constructor(){super(...arguments),this.position="n",this.direction="horizontal",this.hide=!1,this.inside=!1}}ze([S({type:String})],Ce.prototype,"position",2);ze([S({type:String})],Ce.prototype,"direction",2);ze([S({type:Boolean})],Ce.prototype,"hide",2);ze([S({type:Boolean})],Ce.prototype,"inside",2);customElements.get("frc-line-chart-legend")||customElements.define("frc-line-chart-legend",Ce);const pn={viewTime:10,chartTitle:"",dataValue:0,dataColor:"",dataHide:!1,dataYAxis:0,dataDisplayName:"",data2Value:0,data2Color:"",data2Hide:!1,data2YAxis:0,data2DisplayName:"",axisMin:-1,axisMax:1,axisLockMin:!1,axisLockMax:!1,axisInvert:!1,axisSide:"left",axisHideGridLines:!1,axis2Min:-1,axis2Max:1,axis2LockMin:!1,axis2LockMax:!1,axis2Invert:!1,axis2Side:"right",axis2HideGridLines:!1,legendPosition:"n",legendDirection:"horizontal",legendHide:!1,legendInside:!1,theme:"light","background-color":"#fff","--frc-line-chart-text-color":"black","--frc-line-chart-border-color":"black","--frc-line-chart-grid-color":"#eee"},ga={title:"FRC Line Chart/Basic Chart",tags:["autodocs"],component:"frc-line-chart",args:pn,argTypes:{viewTime:{table:{category:"Chart Properties",defaultValue:{summary:10}},control:{type:"number",min:0}},chartTitle:{table:{category:"Chart Properties",defaultValue:{summary:""}}},dataValue:{table:{category:"Data Properties",defaultValue:{summary:0}}},dataColor:{control:"color",table:{category:"Data Properties",defaultValue:{summary:""}}},dataHide:{table:{category:"Data Properties",defaultValue:{summary:!1}}},dataYAxis:{control:"radio",options:[0,1],table:{category:"Data Properties",defaultValue:0}},dataDisplayName:{table:{category:"Data Properties",defaultValue:{summary:""}}},data2Value:{table:{category:"Data 2 Properties",defaultValue:{summary:0}}},data2Color:{control:"color",table:{category:"Data 2 Properties",defaultValue:{summary:""}}},data2Hide:{table:{category:"Data 2 Properties",defaultValue:{summary:!1}}},data2YAxis:{control:"radio",options:[0,1],table:{category:"Data 2 Properties",defaultValue:0}},data2DisplayName:{table:{category:"Data 2 Properties",defaultValue:{summary:""}}},axisMin:{table:{category:"Axis Properties",defaultValue:{summary:-1}}},axisMax:{table:{category:"Axis Properties",defaultValue:{summary:1}}},axisLockMin:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisLockMax:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisInvert:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisSide:{control:"radio",options:["left","right"],table:{category:"Axis Properties",defaultValue:"left"}},axisHideGridLines:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axis2Min:{table:{category:"Axis 2 Properties",defaultValue:{summary:-1}}},axis2Max:{table:{category:"Axis 2 Properties",defaultValue:{summary:1}}},axis2LockMin:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2LockMax:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2Invert:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2Side:{control:"radio",options:["left","right"],table:{category:"Axis 2 Properties",defaultValue:"right"}},axis2HideGridLines:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},legendPosition:{control:"select",options:oa,table:{category:"Legend Properties",defaultValue:"n"}},legendDirection:{control:"radio",options:["horizontal","vertical"],table:{category:"Legend Properties",defaultValue:"horizontal"}},legendHide:{table:{category:"Legend Properties",defaultValue:{summary:!1}}},legendInside:{table:{category:"Legend Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-line-chart-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-line-chart-border-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-line-chart-grid-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#eee"}}}},decorators:[(e,t)=>{const r=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",i=t.args["background-color"];return G` <div
        style=${ye({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?i:r})}
      >
        ${e()}
      </div>`}]};function sa(e){return e.theme==="custom"?G`
      <style>
        .custom {
          --frc-line-chart-text-color: ${e["--frc-line-chart-text-color"]};
          --frc-line-chart-border-color: ${e["--frc-line-chart-border-color"]};
          --frc-line-chart-grid-color: ${e["--frc-line-chart-grid-color"]};
        }
      </style>
    `:e.theme==="dark"?G`
      <style>
        .dark {
          --frc-line-chart-text-color: white;
          --frc-line-chart-border-color: white;
          --frc-line-chart-grid-color: rgba(22, 22, 22, 0.2);
        }
      </style>
    `:G`
    <style>
      .light {
        --frc-line-chart-text-color: black;
        --frc-line-chart-border-color: black;
        --frc-line-chart-grid-color: #eee;
      }
    </style>
  `}function xn(e={}){return{args:{...pn,...e},render:n=>G`
      ${sa(n)}
      <frc-line-chart
        class=${n.theme}
        view-time=${n.viewTime}
        chart-title=${n.chartTitle}
      >
        <frc-line-chart-data
          value=${n.dataValue}
          color=${n.dataColor}
          ?hide=${n.dataHide}
          y-axis=${n.dataYAxis}
          display-name=${n.dataDisplayName}
        ></frc-line-chart-data>
        <frc-line-chart-data
          value=${n.data2Value}
          color=${n.data2Color}
          ?hide=${n.data2Hide}
          y-axis=${n.data2YAxis}
          display-name=${n.data2DisplayName}
        ></frc-line-chart-data>
        <frc-line-chart-axis
          min=${n.axisMin}
          max=${n.axisMax}
          ?lock-min=${n.axisLockMin}
          ?lock-max=${n.axisLockMax}
          ?invert=${n.axisInvert}
          side=${n.axisSide}
          ?hide-grid-lines=${n.axisHideGridLines}
        ></frc-line-chart-axis>
        <frc-line-chart-axis
          min=${n.axis2Min}
          max=${n.axis2Max}
          ?lock-min=${n.axis2LockMin}
          ?lock-max=${n.axis2LockMax}
          ?invert=${n.axis2Invert}
          side=${n.axis2Side}
          ?hide-grid-lines=${n.axis2HideGridLines}
        ></frc-line-chart-axis>
        <frc-line-chart-legend
          position=${n.legendPosition}
          direction=${n.legendDirection}
          ?hide=${n.legendHide}
          ?inside=${n.legendInside}
        ></frc-line-chart-legend>
      </frc-line-chart>
    `}}const De=xn({theme:"light"}),Se=xn({theme:"dark"});var Ht,Vt,Ot;De.parameters={...De.parameters,docs:{...(Ht=De.parameters)==null?void 0:Ht.docs,source:{originalSource:`createLineChartStory({
  theme: 'light'
})`,...(Ot=(Vt=De.parameters)==null?void 0:Vt.docs)==null?void 0:Ot.source}}};var Wt,It,zt;Se.parameters={...Se.parameters,docs:{...(Wt=Se.parameters)==null?void 0:Wt.docs,source:{originalSource:`createLineChartStory({
  theme: 'dark'
})`,...(zt=(It=Se.parameters)==null?void 0:It.docs)==null?void 0:zt.source}}};const ya=["LightTheme","DarkTheme"];export{Se as DarkTheme,De as LightTheme,ya as __namedExportsOrder,ga as default};
