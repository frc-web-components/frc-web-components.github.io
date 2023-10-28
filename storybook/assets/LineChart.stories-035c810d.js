import{w as ht,y as X,s as Ve,r as Sn,$ as j}from"./lit-element-ac510585.js";import{e as S}from"./query-assigned-elements-bd4ea1f7.js";import{t as An}from"./state-54413a7c.js";import{i as Oe}from"./query-839578ff.js";import{c as Un,i as Xe,a as dt,b as mt,d as Ln,s as ve}from"./transform-c376ec3f.js";import{e as Pn}from"./directive-helpers-5324feae.js";import{a as Yn,t as Nn,e as Fn,i as ye}from"./style-map-70149a85.js";function Ae(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function _n(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function rt(e){let t,n,r;e.length!==2?(t=Ae,n=(s,u)=>Ae(e(s),u),r=(s,u)=>e(s)-u):(t=e===Ae||e===_n?e:Hn,n=e,r=e);function i(s,u,c=0,m=s.length){if(c<m){if(t(u,u)!==0)return m;do{const h=c+m>>>1;n(s[h],u)<0?c=h+1:m=h}while(c<m)}return c}function a(s,u,c=0,m=s.length){if(c<m){if(t(u,u)!==0)return m;do{const h=c+m>>>1;n(s[h],u)<=0?c=h+1:m=h}while(c<m)}return c}function o(s,u,c=0,m=s.length){const h=i(s,u,c,m-1);return h>c&&r(s[h-1],u)>-r(s[h],u)?h-1:h}return{left:i,center:o,right:a}}function Hn(){return 0}function Vn(e){return e===null?NaN:+e}const On=rt(Ae),Wn=On.right;rt(Vn).center;const In=Wn;class gt extends Map{constructor(t,n=Rn){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(yt(this,t))}has(t){return super.has(yt(this,t))}set(t,n){return super.set(zn(this,t),n)}delete(t){return super.delete(jn(this,t))}}function yt({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function zn({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function jn({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function Rn(e){return e!==null&&typeof e=="object"?e.valueOf():e}var Qe=Math.sqrt(50),Je=Math.sqrt(10),Ke=Math.sqrt(2);function En(e,t,n){var r,i=-1,a,o,s;if(t=+t,e=+e,n=+n,e===t&&n>0)return[e];if((r=t<e)&&(a=e,e=t,t=a),(s=jt(e,t,n))===0||!isFinite(s))return[];if(s>0){let u=Math.round(e/s),c=Math.round(t/s);for(u*s<e&&++u,c*s>t&&--c,o=new Array(a=c-u+1);++i<a;)o[i]=(u+i)*s}else{s=-s;let u=Math.round(e*s),c=Math.round(t*s);for(u/s<e&&++u,c/s>t&&--c,o=new Array(a=c-u+1);++i<a;)o[i]=(u+i)/s}return r&&o.reverse(),o}function jt(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=Qe?10:a>=Je?5:a>=Ke?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=Qe?10:a>=Je?5:a>=Ke?2:1)}function et(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=Qe?i*=10:a>=Je?i*=5:a>=Ke&&(i*=2),t<e?-i:i}function Gn(e){return e}var je=1,Ue=2,tt=3,pe=4,pt=1e-6;function Bn(e){return"translate("+e+",0)"}function Zn(e){return"translate(0,"+e+")"}function qn(e){return t=>+e(t)}function Xn(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function Qn(){return!this.__axis}function it(e,t){var n=[],r=null,i=null,a=6,o=6,s=3,u=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===je||e===pe?-1:1,m=e===pe||e===Ue?"x":"y",h=e===je||e===tt?Bn:Zn;function f(g){var C=r??(t.ticks?t.ticks.apply(t,n):t.domain()),N=i??(t.tickFormat?t.tickFormat.apply(t,n):Gn),L=Math.max(a,0)+s,F=t.range(),V=+F[0]+u,T=+F[F.length-1]+u,U=(t.bandwidth?Xn:qn)(t.copy(),u),$=g.selection?g.selection():g,y=$.selectAll(".domain").data([null]),w=$.selectAll(".tick").data(C,t).order(),O=w.exit(),G=w.enter().append("g").attr("class","tick"),I=w.select("line"),p=w.select("text");y=y.merge(y.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(G),I=I.merge(G.append("line").attr("stroke","currentColor").attr(m+"2",c*a)),p=p.merge(G.append("text").attr("fill","currentColor").attr(m,c*L).attr("dy",e===je?"0em":e===tt?"0.71em":"0.32em")),g!==$&&(y=y.transition(g),w=w.transition(g),I=I.transition(g),p=p.transition(g),O=O.transition(g).attr("opacity",pt).attr("transform",function(D){return isFinite(D=U(D))?h(D+u):this.getAttribute("transform")}),G.attr("opacity",pt).attr("transform",function(D){var k=this.parentNode.__axis;return h((k&&isFinite(k=k(D))?k:U(D))+u)})),O.remove(),y.attr("d",e===pe||e===Ue?o?"M"+c*o+","+V+"H"+u+"V"+T+"H"+c*o:"M"+u+","+V+"V"+T:o?"M"+V+","+c*o+"V"+u+"H"+T+"V"+c*o:"M"+V+","+u+"H"+T),w.attr("opacity",1).attr("transform",function(D){return h(U(D)+u)}),I.attr(m+"2",c*a),p.attr(m,c*L).text(N),$.filter(Qn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===Ue?"start":e===pe?"end":"middle"),$.each(function(){this.__axis=U})}return f.scale=function(g){return arguments.length?(t=g,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(g){return arguments.length?(n=g==null?[]:Array.from(g),f):n.slice()},f.tickValues=function(g){return arguments.length?(r=g==null?null:Array.from(g),f):r&&r.slice()},f.tickFormat=function(g){return arguments.length?(i=g,f):i},f.tickSize=function(g){return arguments.length?(a=o=+g,f):a},f.tickSizeInner=function(g){return arguments.length?(a=+g,f):a},f.tickSizeOuter=function(g){return arguments.length?(o=+g,f):o},f.tickPadding=function(g){return arguments.length?(s=+g,f):s},f.offset=function(g){return arguments.length?(u=+g,f):u},f}function Jn(e){return it(Ue,e)}function Rt(e){return it(tt,e)}function xt(e){return it(pe,e)}function Kn(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function er(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tr(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=at(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(s){for(o=0;o<r;++o)a[o]=i[o](s);return a}}function nr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function rr(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=at(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}function at(e,t){var n=typeof t,r;return t==null||n==="boolean"?Un(t):(n==="number"?Xe:n==="string"?(r=dt(t))?(t=r,mt):Ln:t instanceof dt?mt:t instanceof Date?nr:er(t)?Kn:Array.isArray(t)?tr:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?rr:Xe)(e,t)}function ir(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ar(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Pe(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ce(e){return e=Pe(Math.abs(e)),e?e[1]:NaN}function or(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),a.push(n.substring(i-=s,i+s)),!((u+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function sr(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var ur=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ye(e){if(!(t=ur.exec(e)))throw new Error("invalid format: "+e);var t;return new ot({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ye.prototype=ot.prototype;function ot(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}ot.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function cr(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var Et;function lr(e,t){var n=Pe(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(Et=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+Pe(e,Math.max(0,t+a-1))[0]}function vt(e,t){var n=Pe(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Mt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:ar,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>vt(e*100,t),r:vt,s:lr,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function wt(e){return e}var bt=Array.prototype.map,Tt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function fr(e){var t=e.grouping===void 0||e.thousands===void 0?wt:or(bt.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?wt:sr(bt.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",u=e.nan===void 0?"NaN":e.nan+"";function c(h){h=Ye(h);var f=h.fill,g=h.align,C=h.sign,N=h.symbol,L=h.zero,F=h.width,V=h.comma,T=h.precision,U=h.trim,$=h.type;$==="n"?(V=!0,$="g"):Mt[$]||(T===void 0&&(T=12),U=!0,$="g"),(L||f==="0"&&g==="=")&&(L=!0,f="0",g="=");var y=N==="$"?n:N==="#"&&/[boxX]/.test($)?"0"+$.toLowerCase():"",w=N==="$"?r:/[%p]/.test($)?o:"",O=Mt[$],G=/[defgprs%]/.test($);T=T===void 0?6:/[gprs]/.test($)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function I(p){var D=y,k=w,B,Ce,ie;if($==="c")k=O(p)+k,p="";else{p=+p;var ae=p<0||1/p<0;if(p=isNaN(p)?u:O(Math.abs(p),T),U&&(p=cr(p)),ae&&+p==0&&C!=="+"&&(ae=!1),D=(ae?C==="("?C:s:C==="-"||C==="("?"":C)+D,k=($==="s"?Tt[8+Et/3]:"")+k+(ae&&C==="("?")":""),G){for(B=-1,Ce=p.length;++B<Ce;)if(ie=p.charCodeAt(B),48>ie||ie>57){k=(ie===46?i+p.slice(B+1):p.slice(B))+k,p=p.slice(0,B);break}}}V&&!L&&(p=t(p,1/0));var oe=D.length+p.length+k.length,W=oe<F?new Array(F-oe+1).join(f):"";switch(V&&L&&(p=t(W+p,W.length?F-k.length:1/0),W=""),g){case"<":p=D+p+k+W;break;case"=":p=D+W+p+k;break;case"^":p=W.slice(0,oe=W.length>>1)+D+p+k+W.slice(oe);break;default:p=W+D+p+k;break}return a(p)}return I.toString=function(){return h+""},I}function m(h,f){var g=c((h=Ye(h),h.type="f",h)),C=Math.max(-8,Math.min(8,Math.floor(ce(f)/3)))*3,N=Math.pow(10,-C),L=Tt[8+C/3];return function(F){return g(N*F)+L}}return{format:c,formatPrefix:m}}var ke,Gt,Bt;hr({thousands:",",grouping:[3],currency:["$",""]});function hr(e){return ke=fr(e),Gt=ke.format,Bt=ke.formatPrefix,ke}function dr(e){return Math.max(0,-ce(Math.abs(e)))}function mr(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ce(t)/3)))*3-ce(Math.abs(e)))}function gr(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ce(t)-ce(e))+1}function st(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}const $t=Symbol("implicit");function Zt(){var e=new gt,t=[],n=[],r=$t;function i(a){let o=e.get(a);if(o===void 0){if(r!==$t)return r;e.set(a,o=t.push(a)-1)}return n[o%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new gt;for(const o of a)e.has(o)||e.set(o,t.push(o)-1);return i},i.range=function(a){return arguments.length?(n=Array.from(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Zt(t,n).unknown(r)},st.apply(i,arguments),i}function yr(e){return function(){return e}}function pr(e){return+e}var Ct=[0,1];function ue(e){return e}function nt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:yr(isNaN(t)?NaN:.5)}function xr(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function vr(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=nt(i,r),a=n(o,a)):(r=nt(r,i),a=n(a,o)),function(s){return a(r(s))}}function Mr(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=nt(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(s){var u=In(e,s,1,r)-1;return a[u](i[u](s))}}function qt(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function wr(){var e=Ct,t=Ct,n=at,r,i,a,o=ue,s,u,c;function m(){var f=Math.min(e.length,t.length);return o!==ue&&(o=xr(e[0],e[f-1])),s=f>2?Mr:vr,u=c=null,h}function h(f){return f==null||isNaN(f=+f)?a:(u||(u=s(e.map(r),t,n)))(r(o(f)))}return h.invert=function(f){return o(i((c||(c=s(t,e.map(r),Xe)))(f)))},h.domain=function(f){return arguments.length?(e=Array.from(f,pr),m()):e.slice()},h.range=function(f){return arguments.length?(t=Array.from(f),m()):t.slice()},h.rangeRound=function(f){return t=Array.from(f),n=ir,m()},h.clamp=function(f){return arguments.length?(o=f?!0:ue,m()):o!==ue},h.interpolate=function(f){return arguments.length?(n=f,m()):n},h.unknown=function(f){return arguments.length?(a=f,h):a},function(f,g){return r=f,i=g,m()}}function Xt(){return wr()(ue,ue)}function br(e,t,n,r){var i=et(e,t,n),a;switch(r=Ye(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=mr(i,o))&&(r.precision=a),Bt(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=gr(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=dr(i))&&(r.precision=a-(r.type==="%")*2);break}}return Gt(r)}function Tr(e){var t=e.domain;return e.ticks=function(n){var r=t();return En(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return br(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],u,c,m=10;for(s<o&&(c=o,o=s,s=c,c=i,i=a,a=c);m-- >0;){if(c=jt(o,s,n),c===u)return r[i]=o,r[a]=s,t(r);if(c>0)o=Math.floor(o/c)*c,s=Math.ceil(s/c)*c;else if(c<0)o=Math.ceil(o*c)/c,s=Math.floor(s*c)/c;else break;u=c}return e},e}function Qt(){var e=Xt();return e.copy=function(){return qt(e,Qt())},st.apply(e,arguments),Tr(e)}function $r(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}var Re=new Date,Ee=new Date;function P(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=function(a){return e(a=new Date(+a)),a},i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(a){var o=i(a),s=i.ceil(a);return a-o<s-a?o:s},i.offset=function(a,o){return t(a=new Date(+a),o==null?1:Math.floor(o)),a},i.range=function(a,o,s){var u=[],c;if(a=i.ceil(a),s=s==null?1:Math.floor(s),!(a<o)||!(s>0))return u;do u.push(c=new Date(+a)),t(a,s),e(a);while(c<a&&a<o);return u},i.filter=function(a){return P(function(o){if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},function(o,s){if(o>=o)if(s<0)for(;++s<=0;)for(;t(o,-1),!a(o););else for(;--s>=0;)for(;t(o,1),!a(o););})},n&&(i.count=function(a,o){return Re.setTime(+a),Ee.setTime(+o),e(Re),e(Ee),Math.floor(n(Re,Ee))},i.every=function(a){return a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?function(o){return r(o)%a===0}:function(o){return i.count(0,o)%a===0}):i}),i}var Ne=P(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});Ne.every=function(e){return e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?P(function(t){t.setTime(Math.floor(t/e)*e)},function(t,n){t.setTime(+t+n*e)},function(t,n){return(n-t)/e}):Ne};const Cr=Ne;Ne.range;const R=1e3,z=R*60,Q=z*60,J=Q*24,ut=J*7,kt=J*30,Ge=J*365;var Jt=P(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+t*R)},function(e,t){return(t-e)/R},function(e){return e.getUTCSeconds()});const xe=Jt;Jt.range;var Kt=P(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*R)},function(e,t){e.setTime(+e+t*z)},function(e,t){return(t-e)/z},function(e){return e.getMinutes()});const en=Kt;Kt.range;var tn=P(function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*R-e.getMinutes()*z)},function(e,t){e.setTime(+e+t*Q)},function(e,t){return(t-e)/Q},function(e){return e.getHours()});const nn=tn;tn.range;var rn=P(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*z)/J,e=>e.getDate()-1);const We=rn;rn.range;function ee(e){return P(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n*7)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*z)/ut})}var Ie=ee(0),Fe=ee(1),kr=ee(2),Dr=ee(3),le=ee(4),Sr=ee(5),Ar=ee(6);Ie.range;Fe.range;kr.range;Dr.range;le.range;Sr.range;Ar.range;var an=P(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12},function(e){return e.getMonth()});const on=an;an.range;var ct=P(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});ct.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:P(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n*e)})};const K=ct;ct.range;var sn=P(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/J},function(e){return e.getUTCDate()-1});const un=sn;sn.range;function te(e){return P(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n*7)},function(t,n){return(n-t)/ut})}var cn=te(0),_e=te(1),Ur=te(2),Lr=te(3),fe=te(4),Pr=te(5),Yr=te(6);cn.range;_e.range;Ur.range;Lr.range;fe.range;Pr.range;Yr.range;var lt=P(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});lt.every=function(e){return!isFinite(e=Math.floor(e))||!(e>0)?null:P(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})};const be=lt;lt.range;function Nr(e,t,n,r,i,a){const o=[[xe,1,R],[xe,5,5*R],[xe,15,15*R],[xe,30,30*R],[a,1,z],[a,5,5*z],[a,15,15*z],[a,30,30*z],[i,1,Q],[i,3,3*Q],[i,6,6*Q],[i,12,12*Q],[r,1,J],[r,2,2*J],[n,1,ut],[t,1,kt],[t,3,3*kt],[e,1,Ge]];function s(c,m,h){const f=m<c;f&&([c,m]=[m,c]);const g=h&&typeof h.range=="function"?h:u(c,m,h),C=g?g.range(c,+m+1):[];return f?C.reverse():C}function u(c,m,h){const f=Math.abs(m-c)/h,g=rt(([,,L])=>L).right(o,f);if(g===o.length)return e.every(et(c/Ge,m/Ge,h));if(g===0)return Cr.every(Math.max(et(c,m,h),1));const[C,N]=o[f/o[g-1][2]<o[g][2]/f?g-1:g];return C.every(N)}return[s,u]}const[Fr,_r]=Nr(K,on,Ie,We,nn,en);function Be(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Ze(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function de(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Hr(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,s=e.months,u=e.shortMonths,c=me(i),m=ge(i),h=me(a),f=ge(a),g=me(o),C=ge(o),N=me(s),L=ge(s),F=me(u),V=ge(u),T={a:ae,A:oe,b:W,B:vn,c:null,d:Pt,e:Pt,f:oi,g:yi,G:xi,H:ri,I:ii,j:ai,L:ln,m:si,M:ui,p:Mn,q:wn,Q:Ft,s:_t,S:ci,u:li,U:fi,V:hi,w:di,W:mi,x:null,X:null,y:gi,Y:pi,Z:vi,"%":Nt},U={a:bn,A:Tn,b:$n,B:Cn,c:null,d:Yt,e:Yt,f:Ti,g:Yi,G:Fi,H:Mi,I:wi,j:bi,L:hn,m:$i,M:Ci,p:kn,q:Dn,Q:Ft,s:_t,S:ki,u:Di,U:Si,V:Ai,w:Ui,W:Li,x:null,X:null,y:Pi,Y:Ni,Z:_i,"%":Nt},$={a:I,A:p,b:D,B:k,c:B,d:Ut,e:Ut,f:Kr,g:At,G:St,H:Lt,I:Lt,j:qr,L:Jr,m:Zr,M:Xr,p:G,q:Br,Q:ti,s:ni,S:Qr,u:zr,U:jr,V:Rr,w:Ir,W:Er,x:Ce,X:ie,y:At,Y:St,Z:Gr,"%":ei};T.x=y(n,T),T.X=y(r,T),T.c=y(t,T),U.x=y(n,U),U.X=y(r,U),U.c=y(t,U);function y(d,x){return function(v){var l=[],Y=-1,b=0,_=d.length,H,q,ft;for(v instanceof Date||(v=new Date(+v));++Y<_;)d.charCodeAt(Y)===37&&(l.push(d.slice(b,Y)),(q=Dt[H=d.charAt(++Y)])!=null?H=d.charAt(++Y):q=H==="e"?" ":"0",(ft=x[H])&&(H=ft(v,q)),l.push(H),b=Y+1);return l.push(d.slice(b,Y)),l.join("")}}function w(d,x){return function(v){var l=de(1900,void 0,1),Y=O(l,d,v+="",0),b,_;if(Y!=v.length)return null;if("Q"in l)return new Date(l.Q);if("s"in l)return new Date(l.s*1e3+("L"in l?l.L:0));if(x&&!("Z"in l)&&(l.Z=0),"p"in l&&(l.H=l.H%12+l.p*12),l.m===void 0&&(l.m="q"in l?l.q:0),"V"in l){if(l.V<1||l.V>53)return null;"w"in l||(l.w=1),"Z"in l?(b=Ze(de(l.y,0,1)),_=b.getUTCDay(),b=_>4||_===0?_e.ceil(b):_e(b),b=un.offset(b,(l.V-1)*7),l.y=b.getUTCFullYear(),l.m=b.getUTCMonth(),l.d=b.getUTCDate()+(l.w+6)%7):(b=Be(de(l.y,0,1)),_=b.getDay(),b=_>4||_===0?Fe.ceil(b):Fe(b),b=We.offset(b,(l.V-1)*7),l.y=b.getFullYear(),l.m=b.getMonth(),l.d=b.getDate()+(l.w+6)%7)}else("W"in l||"U"in l)&&("w"in l||(l.w="u"in l?l.u%7:"W"in l?1:0),_="Z"in l?Ze(de(l.y,0,1)).getUTCDay():Be(de(l.y,0,1)).getDay(),l.m=0,l.d="W"in l?(l.w+6)%7+l.W*7-(_+5)%7:l.w+l.U*7-(_+6)%7);return"Z"in l?(l.H+=l.Z/100|0,l.M+=l.Z%100,Ze(l)):Be(l)}}function O(d,x,v,l){for(var Y=0,b=x.length,_=v.length,H,q;Y<b;){if(l>=_)return-1;if(H=x.charCodeAt(Y++),H===37){if(H=x.charAt(Y++),q=$[H in Dt?x.charAt(Y++):H],!q||(l=q(d,v,l))<0)return-1}else if(H!=v.charCodeAt(l++))return-1}return l}function G(d,x,v){var l=c.exec(x.slice(v));return l?(d.p=m.get(l[0].toLowerCase()),v+l[0].length):-1}function I(d,x,v){var l=g.exec(x.slice(v));return l?(d.w=C.get(l[0].toLowerCase()),v+l[0].length):-1}function p(d,x,v){var l=h.exec(x.slice(v));return l?(d.w=f.get(l[0].toLowerCase()),v+l[0].length):-1}function D(d,x,v){var l=F.exec(x.slice(v));return l?(d.m=V.get(l[0].toLowerCase()),v+l[0].length):-1}function k(d,x,v){var l=N.exec(x.slice(v));return l?(d.m=L.get(l[0].toLowerCase()),v+l[0].length):-1}function B(d,x,v){return O(d,t,x,v)}function Ce(d,x,v){return O(d,n,x,v)}function ie(d,x,v){return O(d,r,x,v)}function ae(d){return o[d.getDay()]}function oe(d){return a[d.getDay()]}function W(d){return u[d.getMonth()]}function vn(d){return s[d.getMonth()]}function Mn(d){return i[+(d.getHours()>=12)]}function wn(d){return 1+~~(d.getMonth()/3)}function bn(d){return o[d.getUTCDay()]}function Tn(d){return a[d.getUTCDay()]}function $n(d){return u[d.getUTCMonth()]}function Cn(d){return s[d.getUTCMonth()]}function kn(d){return i[+(d.getUTCHours()>=12)]}function Dn(d){return 1+~~(d.getUTCMonth()/3)}return{format:function(d){var x=y(d+="",T);return x.toString=function(){return d},x},parse:function(d){var x=w(d+="",!1);return x.toString=function(){return d},x},utcFormat:function(d){var x=y(d+="",U);return x.toString=function(){return d},x},utcParse:function(d){var x=w(d+="",!0);return x.toString=function(){return d},x}}}var Dt={"-":"",_:" ",0:"0"},A=/^\s*\d+/,Vr=/^%/,Or=/[\\^$*+?|[\]().{}]/g;function M(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function Wr(e){return e.replace(Or,"\\$&")}function me(e){return new RegExp("^(?:"+e.map(Wr).join("|")+")","i")}function ge(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function Ir(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function zr(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function jr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function Rr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function Er(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function St(e,t,n){var r=A.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function At(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function Gr(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function Br(e,t,n){var r=A.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function Zr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Ut(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function qr(e,t,n){var r=A.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Lt(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function Xr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Qr(e,t,n){var r=A.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Jr(e,t,n){var r=A.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function Kr(e,t,n){var r=A.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function ei(e,t,n){var r=Vr.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function ti(e,t,n){var r=A.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function ni(e,t,n){var r=A.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Pt(e,t){return M(e.getDate(),t,2)}function ri(e,t){return M(e.getHours(),t,2)}function ii(e,t){return M(e.getHours()%12||12,t,2)}function ai(e,t){return M(1+We.count(K(e),e),t,3)}function ln(e,t){return M(e.getMilliseconds(),t,3)}function oi(e,t){return ln(e,t)+"000"}function si(e,t){return M(e.getMonth()+1,t,2)}function ui(e,t){return M(e.getMinutes(),t,2)}function ci(e,t){return M(e.getSeconds(),t,2)}function li(e){var t=e.getDay();return t===0?7:t}function fi(e,t){return M(Ie.count(K(e)-1,e),t,2)}function fn(e){var t=e.getDay();return t>=4||t===0?le(e):le.ceil(e)}function hi(e,t){return e=fn(e),M(le.count(K(e),e)+(K(e).getDay()===4),t,2)}function di(e){return e.getDay()}function mi(e,t){return M(Fe.count(K(e)-1,e),t,2)}function gi(e,t){return M(e.getFullYear()%100,t,2)}function yi(e,t){return e=fn(e),M(e.getFullYear()%100,t,2)}function pi(e,t){return M(e.getFullYear()%1e4,t,4)}function xi(e,t){var n=e.getDay();return e=n>=4||n===0?le(e):le.ceil(e),M(e.getFullYear()%1e4,t,4)}function vi(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+M(t/60|0,"0",2)+M(t%60,"0",2)}function Yt(e,t){return M(e.getUTCDate(),t,2)}function Mi(e,t){return M(e.getUTCHours(),t,2)}function wi(e,t){return M(e.getUTCHours()%12||12,t,2)}function bi(e,t){return M(1+un.count(be(e),e),t,3)}function hn(e,t){return M(e.getUTCMilliseconds(),t,3)}function Ti(e,t){return hn(e,t)+"000"}function $i(e,t){return M(e.getUTCMonth()+1,t,2)}function Ci(e,t){return M(e.getUTCMinutes(),t,2)}function ki(e,t){return M(e.getUTCSeconds(),t,2)}function Di(e){var t=e.getUTCDay();return t===0?7:t}function Si(e,t){return M(cn.count(be(e)-1,e),t,2)}function dn(e){var t=e.getUTCDay();return t>=4||t===0?fe(e):fe.ceil(e)}function Ai(e,t){return e=dn(e),M(fe.count(be(e),e)+(be(e).getUTCDay()===4),t,2)}function Ui(e){return e.getUTCDay()}function Li(e,t){return M(_e.count(be(e)-1,e),t,2)}function Pi(e,t){return M(e.getUTCFullYear()%100,t,2)}function Yi(e,t){return e=dn(e),M(e.getUTCFullYear()%100,t,2)}function Ni(e,t){return M(e.getUTCFullYear()%1e4,t,4)}function Fi(e,t){var n=e.getUTCDay();return e=n>=4||n===0?fe(e):fe.ceil(e),M(e.getUTCFullYear()%1e4,t,4)}function _i(){return"+0000"}function Nt(){return"%"}function Ft(e){return+e}function _t(e){return Math.floor(+e/1e3)}var se,mn;Hi({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Hi(e){return se=Hr(e),mn=se.format,se.parse,se.utcFormat,se.utcParse,se}function Vi(e){return new Date(e)}function Oi(e){return e instanceof Date?+e:+new Date(+e)}function gn(e,t,n,r,i,a,o,s,u,c){var m=Xt(),h=m.invert,f=m.domain,g=c(".%L"),C=c(":%S"),N=c("%I:%M"),L=c("%I %p"),F=c("%a %d"),V=c("%b %d"),T=c("%B"),U=c("%Y");function $(y){return(u(y)<y?g:s(y)<y?C:o(y)<y?N:a(y)<y?L:r(y)<y?i(y)<y?F:V:n(y)<y?T:U)(y)}return m.invert=function(y){return new Date(h(y))},m.domain=function(y){return arguments.length?f(Array.from(y,Oi)):f().map(Vi)},m.ticks=function(y){var w=f();return e(w[0],w[w.length-1],y??10)},m.tickFormat=function(y,w){return w==null?$:c(w)},m.nice=function(y){var w=f();return(!y||typeof y.range!="function")&&(y=t(w[0],w[w.length-1],y??10)),y?f($r(w,y)):m},m.copy=function(){return qt(m,gn(e,t,n,r,i,a,o,s,u,c))},m}function Wi(){return st.apply(gn(Fr,_r,K,on,Ie,We,nn,en,xe,mn).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ii(e){for(var t=e.length/6|0,n=new Array(t),r=0;r<t;)n[r]="#"+e.slice(r*6,++r*6);return n}const zi=Ii("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t)=>{var n,r;const i=e._$AN;if(i===void 0)return!1;for(const a of i)(r=(n=a)._$AO)===null||r===void 0||r.call(n,t,!1),Me(a,t);return!0},He=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},yn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ei(t)}};function ji(e){this._$AN!==void 0?(He(this),this._$AM=e,yn(this)):this._$AM=e}function Ri(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let a=n;a<r.length;a++)Me(r[a],!1),He(r[a]);else r!=null&&(Me(r,!1),He(r));else Me(this,e)}const Ei=e=>{var t,n,r,i;e.type==Nn.CHILD&&((t=(r=e)._$AP)!==null&&t!==void 0||(r._$AP=Ri),(n=(i=e)._$AQ)!==null&&n!==void 0||(i._$AQ=ji))};class Gi extends Yn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),yn(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),n&&(Me(this,t),He(this))}setValue(t){if(Pn(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const qe=new WeakMap,we=Fn(class extends Gi{render(e){return ht}update(e,[t]){var n;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.dt=(n=e.options)===null||n===void 0?void 0:n.host,this.rt(this.ct=e.element)),ht}rt(e){var t;if(typeof this.Y=="function"){const n=(t=this.dt)!==null&&t!==void 0?t:globalThis;let r=qe.get(n);r===void 0&&(r=new WeakMap,qe.set(n,r)),r.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,n;return typeof this.Y=="function"?(t=qe.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(n=this.Y)===null||n===void 0?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Bi(e,t,n){return Wi().domain([n-t,n]).range([0,e])}function Zi(e){const t=Rt(e).tickFormat(n=>`${n.getTime()/1e3}`);return X`
    <g 
      class="axis axis--x" 
      ${we(n=>{t(ve(n))})}>
    </g> 
  `}function qi(e,t){const n=Rt(e).tickSize(-t).tickFormat("");return X`
    <g 
      class="axis-x-grid" 
      ${we(r=>{n(ve(r))})}>
    </g> 
  `}var Xi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Te=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Xi(t,n,i),i};class he extends Ve{constructor(){super(...arguments),this.value=0,this.color="",this.hide=!1,this.yAxis=0,this.displayName=""}}Te([S({type:Number})],he.prototype,"value",2);Te([S({type:String})],he.prototype,"color",2);Te([S({type:Boolean})],he.prototype,"hide",2);Te([S({type:Number,attribute:"y-axis"})],he.prototype,"yAxis",2);Te([S({type:String,attribute:"display-name"})],he.prototype,"displayName",2);customElements.get("frc-line-chart-data")||customElements.define("frc-line-chart-data",he);var Ji=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,ne=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ki(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ji(t,n,i),i};const ea=Zt().domain(Array(8).fill(0).map((e,t)=>t)).range(zi),Le=class extends Ve{constructor(){super(...arguments),this.viewTime=10,this.chartTitle="",this.data=[],this.startTime=0,this.elapsedTimeMs=0}firstUpdated(){this.startTime=Date.now(),requestAnimationFrame(()=>{this.updateChart()})}getFilteredData(e){const t=e.findIndex(({timeMs:n})=>this.elapsedTimeMs-n<Math.round(this.viewTime*1e3))-1;return t<0?e:e.slice(t)}updateChart(){this.elapsedTimeMs=Date.now()-this.startTime;const e=[...this.children].filter(t=>t.tagName.toLowerCase()==="frc-line-chart-data");this.data=e.map((t,n)=>{var i;const r=((i=this.data[n])==null?void 0:i.data)??[];return r.push({value:t.value??0,timeMs:this.elapsedTimeMs}),{data:this.getFilteredData(r),color:t.color||ea(n%8),hide:t.hide??!1,yAxis:t.yAxis??0,displayName:t.displayName||`Data ${n}`}}),requestAnimationFrame(()=>{this.updateChart()})}static getYScale(e,t,n){const{invert:r,lockMin:i,lockMax:a}=n;let{min:o,max:s}=n;(!i||!a)&&t.forEach(c=>{c.data.forEach(({value:m})=>{i||(o=Math.min(o,m)),a||(s=Math.max(s,m))})});const u=r?[0,e]:[e,0];return Qt().domain([o,s]).range(u)}getDimensions(){var o;const e={top:0,right:40,bottom:20,left:40},t=((o=this.chartContainer)==null?void 0:o.getBoundingClientRect())??{width:960,height:500},n=t.width,r=t.height,i=n-e.left-e.right,a=r-e.top-e.bottom;return{margin:e,svgWidth:n,svgHeight:r,width:i,height:a}}getYScales(){const{height:e}=this.getDimensions(),t=[...this.children].filter(n=>n.tagName.toLowerCase()==="frc-line-chart-axis");if(t.length===0){const n={min:-1,max:1,lockMin:!1,lockMax:!1,invert:!1,side:"left",hideGridLines:!1};return[{chartAxis:n,scale:Le.getYScale(e,this.data.filter(({yAxis:r})=>r===0),n)}]}return t.map((n,r)=>{const i=n,a={min:i.min??-1,max:i.max??1,lockMin:i.lockMin??!1,lockMax:i.lockMax??!1,invert:i.invert??!1,side:i.side??"left",hideGridLines:i.hideGridLines??!1};return{chartAxis:a,scale:Le.getYScale(e,this.data.filter(({yAxis:o})=>o===r),a)}})}static getPath(e,t,n){return`M${e.map(i=>[t(i).toFixed(3),n(i).toFixed(3)].join(",")).join("L")}`}getLegend(){const e=[...this.children].find(r=>r.tagName.toLowerCase()==="frc-line-chart-legend");if(!e)return{direction:"horizontal",position:"n",inside:!1,hide:!1};const t=e;return{direction:t.direction??"horizontal",position:t.position??"n",inside:t.inside??!1,hide:t.hide??!1}}render(){const{inside:e,position:t,direction:n,hide:r}=this.getLegend(),i=t==="w"||t==="e"||["ne","nw","se","sw"].includes(t)&&n==="vertical",a=i&&["ne","e","se"].includes(t)||!i&&["sw","s","se"].includes(t),o=ye({display:e?"block":"flex",flexDirection:`${i?"row":"column"}${a?"-reverse":""}`}),s=e?{width:"100%",height:"100%"}:{flex:"1"};return j`
      <div class="chart-and-header">
        ${this.chartTitle?j`<header>${this.chartTitle}</header>`:""}
        <div class="chart-and-legend" style=${o}>
          ${r?"":this.renderLegend()}
          <div class="chart-container" style=${ye(s)}>
            ${this.renderChart()}
          </div>
        </div>
      </div>
    `}renderLegend(){const{margin:e}=this.getDimensions(),{inside:t,direction:n,position:r}=this.getLegend(),i=(()=>["n","s","e","w"].includes(r)?"center":r==="nw"?"flex-start":r==="se"?"flex-end":r==="ne"?n==="horizontal"?"flex-end":"flex-start":n==="vertical"?"flex-end":"flex-start")(),a=(()=>{if(!t)return{};const u={alignItems:"center"};return r.includes("n")?u.top=`${e.top}px`:r.includes("s")&&(u.bottom=`${e.bottom}px`),r.includes("w")?u.left=`${e.left}px`:r.includes("e")&&(u.right=`${e.right}px`),["n","s","e","w"].includes(r)&&(u.justifyContent="center"),["n","s"].includes(r)&&(u.left="0",u.right="0"),["e","w"].includes(r)&&(u.top="0",u.bottom="0"),u})(),o=ye({alignSelf:i,...a});return j`
      <div
        class="legend ${t?"inside":"outside"} ${n==="horizontal"?"horizontal":"vertical"}"
        style=${o}
      >
        ${this.data.map(({color:u,displayName:c})=>j`
            <div class="legend-item">
              <div
                class="legend-item-box"
                style=${ye({background:u})}
              ></div>
              <span class="legend-item-label">${c}</span>
            </div>
          `)}
      </div>
    `}renderChart(){const{margin:e,svgWidth:t,svgHeight:n,width:r,height:i}=this.getDimensions(),a=Bi(r,Math.round(this.viewTime*1e3),this.elapsedTimeMs),o=this.getYScales(),s=o.map(u=>m=>Le.getPath(m,h=>a(new Date(h.timeMs)),h=>u.scale(h.value)));return X`
      <svg width=${t} height=${n} style="position: absolute">
        <g transform="translate(${e.left},${e.top})">
          <defs>
            <clipPath id="clip">
              <rect width=${r} height=${i}></rect>
            </clipPath>
          </defs>
          <g transform="translate(0,${i})">
            ${Zi(a)}
            ${qi(a,i)}
          </g>
          ${this.renderScales(o,"left")}
          ${this.renderScales(o,"right")}
          <rect class="chart-border" width=${r} height=${i}></rect>
          ${this.data.filter(({hide:u,yAxis:c})=>!u&&c<o.length&&c>=0).map(u=>X`
            <g clip-path="url(#clip)">
              <path 
                class="data-path"
                ${we(c=>{const m=ve(c),h=s[u.yAxis](u.data);m.attr("class","line").attr("stroke",u.color).attr("d",h)})}>
              ></path>
            </g>
          `)}
        </g>
      </svg>
    `}renderScales(e,t){const{width:n}=this.getDimensions();return X`
     ${e.filter(r=>r.chartAxis.side===t).map((r,i)=>{const a=r.chartAxis.side==="left"?-i*25:n;return X`
              <g 
                class="axis axis--y" 
                transform="translate(${a}, 0)"
                ${we(o=>{(r.chartAxis.side==="left"?xt:Jn)(r.scale)(ve(o))})}>
              </g>
              ${r.chartAxis.hideGridLines?"":X`
                    <g 
                      class="axis-y-grid" 
                      ${we(o=>{xt(r.scale).tickSize(-n).tickFormat("")(ve(o))})}>
                    </g> 
                  `}
            `})}
    `}};let E=Le;E.styles=Sn`
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
  `;ne([S({type:Number,attribute:"view-time"})],E.prototype,"viewTime",2);ne([S({type:String,attribute:"chart-title"})],E.prototype,"chartTitle",2);ne([An()],E.prototype,"data",2);ne([Oe(".data-path")],E.prototype,"path",2);ne([Oe("svg")],E.prototype,"svg",2);ne([Oe(".axis--x")],E.prototype,"xAxis",2);ne([Oe(".chart-container")],E.prototype,"chartContainer",2);customElements.get("frc-line-chart")||customElements.define("frc-line-chart",E);var ta=Object.defineProperty,na=Object.getOwnPropertyDescriptor,re=(e,t,n,r)=>{for(var i=r>1?void 0:r?na(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ta(t,n,i),i};class Z extends Ve{constructor(){super(...arguments),this.min=-1,this.max=1,this.lockMin=!1,this.lockMax=!1,this.invert=!1,this.side="left",this.hideGridLines=!1}}re([S({type:Number})],Z.prototype,"min",2);re([S({type:Number})],Z.prototype,"max",2);re([S({type:Boolean,attribute:"lock-min"})],Z.prototype,"lockMin",2);re([S({type:Boolean,attribute:"lock-max"})],Z.prototype,"lockMax",2);re([S({type:Boolean})],Z.prototype,"invert",2);re([S({type:String})],Z.prototype,"side",2);re([S({type:Boolean,attribute:"hide-grid-lines"})],Z.prototype,"hideGridLines",2);customElements.get("frc-line-chart-axis")||customElements.define("frc-line-chart-axis",Z);var ra=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,ze=(e,t,n,r)=>{for(var i=r>1?void 0:r?ia(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ra(t,n,i),i};const aa=["nw","n","ne","w","e","sw","s","se"];class $e extends Ve{constructor(){super(...arguments),this.position="n",this.direction="horizontal",this.hide=!1,this.inside=!1}}ze([S({type:String})],$e.prototype,"position",2);ze([S({type:String})],$e.prototype,"direction",2);ze([S({type:Boolean})],$e.prototype,"hide",2);ze([S({type:Boolean})],$e.prototype,"inside",2);customElements.get("frc-line-chart-legend")||customElements.define("frc-line-chart-legend",$e);const pn={viewTime:10,chartTitle:"",dataValue:0,dataColor:"",dataHide:!1,dataYAxis:0,dataDisplayName:"",data2Value:0,data2Color:"",data2Hide:!1,data2YAxis:0,data2DisplayName:"",axisMin:-1,axisMax:1,axisLockMin:!1,axisLockMax:!1,axisInvert:!1,axisSide:"left",axisHideGridLines:!1,axis2Min:-1,axis2Max:1,axis2LockMin:!1,axis2LockMax:!1,axis2Invert:!1,axis2Side:"right",axis2HideGridLines:!1,legendPosition:"n",legendDirection:"horizontal",legendHide:!1,legendInside:!1,theme:"light","background-color":"#fff","--frc-line-chart-text-color":"black","--frc-line-chart-border-color":"black","--frc-line-chart-grid-color":"#eee"},ma={title:"FRC Line Chart/Basic Chart",tags:["autodocs"],component:"frc-line-chart",args:pn,argTypes:{viewTime:{table:{category:"Chart Properties",defaultValue:{summary:10}},control:{type:"number",min:0}},chartTitle:{table:{category:"Chart Properties",defaultValue:{summary:""}}},dataValue:{table:{category:"Data Properties",defaultValue:{summary:0}}},dataColor:{control:"color",table:{category:"Data Properties",defaultValue:{summary:""}}},dataHide:{table:{category:"Data Properties",defaultValue:{summary:!1}}},dataYAxis:{control:"radio",options:[0,1],table:{category:"Data Properties",defaultValue:0}},dataDisplayName:{table:{category:"Data Properties",defaultValue:{summary:""}}},data2Value:{table:{category:"Data 2 Properties",defaultValue:{summary:0}}},data2Color:{control:"color",table:{category:"Data 2 Properties",defaultValue:{summary:""}}},data2Hide:{table:{category:"Data 2 Properties",defaultValue:{summary:!1}}},data2YAxis:{control:"radio",options:[0,1],table:{category:"Data 2 Properties",defaultValue:0}},data2DisplayName:{table:{category:"Data 2 Properties",defaultValue:{summary:""}}},axisMin:{table:{category:"Axis Properties",defaultValue:{summary:-1}}},axisMax:{table:{category:"Axis Properties",defaultValue:{summary:1}}},axisLockMin:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisLockMax:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisInvert:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axisSide:{control:"radio",options:["left","right"],table:{category:"Axis Properties",defaultValue:"left"}},axisHideGridLines:{table:{category:"Axis Properties",defaultValue:{summary:!1}}},axis2Min:{table:{category:"Axis 2 Properties",defaultValue:{summary:-1}}},axis2Max:{table:{category:"Axis 2 Properties",defaultValue:{summary:1}}},axis2LockMin:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2LockMax:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2Invert:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},axis2Side:{control:"radio",options:["left","right"],table:{category:"Axis 2 Properties",defaultValue:"right"}},axis2HideGridLines:{table:{category:"Axis 2 Properties",defaultValue:{summary:!1}}},legendPosition:{control:"select",options:aa,table:{category:"Legend Properties",defaultValue:"n"}},legendDirection:{control:"radio",options:["horizontal","vertical"],table:{category:"Legend Properties",defaultValue:"horizontal"}},legendHide:{table:{category:"Legend Properties",defaultValue:{summary:!1}}},legendInside:{table:{category:"Legend Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}},"--frc-line-chart-text-color":{table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-line-chart-border-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"black"}}},"--frc-line-chart-grid-color":{control:"color",table:{category:"Styles",defaultValue:{summary:"#eee"}}}},decorators:[(e,t)=>{const r=t.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",i=t.args["background-color"];return j` <div
        style=${ye({padding:"20px 10px",marginBottom:"5px",background:t.args.theme==="custom"?i:r})}
      >
        ${e()}
      </div>`}]};function oa(e){return e.theme==="custom"?j`
      <style>
        .custom {
          --frc-line-chart-text-color: ${e["--frc-line-chart-text-color"]};
          --frc-line-chart-border-color: ${e["--frc-line-chart-border-color"]};
          --frc-line-chart-grid-color: ${e["--frc-line-chart-grid-color"]};
        }
      </style>
    `:e.theme==="dark"?j`
      <style>
        .dark {
          --frc-line-chart-text-color: white;
          --frc-line-chart-border-color: white;
          --frc-line-chart-grid-color: rgba(22, 22, 22, 0.2);
        }
      </style>
    `:j`
    <style>
      .light {
        --frc-line-chart-text-color: black;
        --frc-line-chart-border-color: black;
        --frc-line-chart-grid-color: #eee;
      }
    </style>
  `}function xn(e={}){return{args:{...pn,...e},render:n=>j`
      ${oa(n)}
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
})`,...(zt=(It=Se.parameters)==null?void 0:It.docs)==null?void 0:zt.source}}};const ga=["LightTheme","DarkTheme"];export{Se as DarkTheme,De as LightTheme,ga as __namedExportsOrder,ma as default};
//# sourceMappingURL=LineChart.stories-035c810d.js.map
