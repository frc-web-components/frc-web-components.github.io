import{s as Wc,i as Jt,k as Ia,X as qc}from"./property-7226fcdb-ca5eacb2.js";import{h as Xl}from"./query-b33b5ea2-b51c1579.js";import{c as eo}from"./units-a299d414-de746bd8.js";import{n as sn}from"./state-504849b6-2441cf81.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="151",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yc=0,to=1,Xc=2,Kl=1,Kc=2,bn=3,bi=0,Qt=1,mi=2,Ki=0,qr=1,io=2,ro=3,no=4,Zc=5,Vr=100,Jc=101,Qc=102,so=103,ao=104,$c=200,eh=201,th=202,ih=203,Zl=204,Jl=205,rh=206,nh=207,sh=208,ah=209,oh=210,lh=0,ch=1,hh=2,_a=3,uh=4,dh=5,ph=6,mh=7,bs=0,fh=1,gh=2,Ui=0,_h=1,vh=2,yh=3,xh=4,bh=5,Ql=300,Zr=301,Jr=302,va=303,ya=304,Ms=306,xi=1e3,jt=1001,vs=1002,Dt=1003,xa=1004,fs=1005,Ot=1006,$l=1007,Oi=1008,or=1009,Mh=1010,wh=1011,ec=1012,Sh=1013,sr=1014,Xi=1015,An=1016,Th=1017,Ah=1018,Yr=1020,Eh=1021,ai=1023,Ch=1024,Lh=1025,ar=1026,Qr=1027,Rh=1028,Ih=1029,Nh=1030,Ph=1031,Dh=1033,ks=33776,Us=33777,Os=33778,zs=33779,oo=35840,lo=35841,co=35842,ho=35843,kh=36196,uo=37492,po=37496,mo=37808,fo=37809,go=37810,_o=37811,vo=37812,yo=37813,xo=37814,bo=37815,Mo=37816,wo=37817,So=37818,To=37819,Ao=37820,Eo=37821,Fs=36492,Uh=36283,Co=36284,Lo=36285,Ro=36286,En=2300,$r=2301,Bs=2302,Io=2400,No=2401,Po=2402,Oh=2500,zh=0,tc=1,ba=2,lr=3e3,rt=3001,Fh=3200,Bh=3201,ws=0,Hh=1,vi="srgb",Ss="srgb-linear",ic="display-p3",Hs=7680,Gh=519,Ma=35044,Do="300 es",wa=1035;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const wn=Math.PI/180,en=180/Math.PI;function fi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[o&255]+Gt[o>>8&255]+Gt[o>>16&255]+Gt[o>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function zt(o,e,t){return Math.max(e,Math.min(t,o))}function Pa(o,e){return(o%e+e)%e}function Vh(o,e,t,i,r){return i+(o-e)*(r-i)/(t-e)}function jh(o,e,t){return o!==e?(t-o)/(e-o):0}function Sn(o,e,t){return(1-t)*o+t*e}function Wh(o,e,t,i){return Sn(o,e,1-Math.exp(-t*i))}function qh(o,e=1){return e-Math.abs(Pa(o,e*2)-e)}function Yh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Xh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Kh(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Zh(o,e){return o+Math.random()*(e-o)}function Jh(o){return o*(.5-Math.random())}function Qh(o){o!==void 0&&(ko=o);let e=ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $h(o){return o*wn}function eu(o){return o*en}function Sa(o){return(o&o-1)===0&&o!==0}function rc(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function nc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function tu(o,e,t,i,r){const n=Math.cos,s=Math.sin,a=n(t/2),c=s(t/2),l=n((e+i)/2),h=s((e+i)/2),u=n((e-i)/2),d=s((e-i)/2),m=n((i-e)/2),v=s((i-e)/2);switch(r){case"XYX":o.set(a*h,c*u,c*d,a*l);break;case"YZY":o.set(c*d,a*h,c*u,a*l);break;case"ZXZ":o.set(c*u,c*d,a*h,a*l);break;case"XZX":o.set(a*h,c*v,c*m,a*l);break;case"YXY":o.set(c*m,a*h,c*v,a*l);break;case"ZYZ":o.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Di(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const jr={DEG2RAD:wn,RAD2DEG:en,generateUUID:fi,clamp:zt,euclideanModulo:Pa,mapLinear:Vh,inverseLerp:jh,lerp:Sn,damp:Wh,pingpong:qh,smoothstep:Yh,smootherstep:Xh,randInt:Kh,randFloat:Zh,randFloatSpread:Jh,seededRandom:Qh,degToRad:$h,radToDeg:eu,isPowerOfTwo:Sa,ceilPowerOfTwo:rc,floorPowerOfTwo:nc,setQuaternionFromProperEuler:tu,normalize:pt,denormalize:Di};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,s,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=n,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],v=i[8],y=r[0],f=r[3],p=r[6],E=r[1],M=r[4],A=r[7],S=r[2],P=r[5],D=r[8];return n[0]=s*y+a*E+c*S,n[3]=s*f+a*M+c*P,n[6]=s*p+a*A+c*D,n[1]=l*y+h*E+u*S,n[4]=l*f+h*M+u*P,n[7]=l*p+h*A+u*D,n[2]=d*y+m*E+v*S,n[5]=d*f+m*M+v*P,n[8]=d*p+m*A+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*a*l-i*n*h+i*a*c+r*n*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*s-a*l,d=a*c-h*n,m=l*n-s*c,v=t*u+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=u*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*n-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(s*t-i*n)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,a){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Je;function sc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cn(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Xr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const iu=new Je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ru=new Je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nu(o){return o.convertSRGBToLinear().applyMatrix3(ru)}function su(o){return o.applyMatrix3(iu).convertLinearToSRGB()}const au={[Ss]:o=>o,[vi]:o=>o.convertSRGBToLinear(),[ic]:nu},ou={[Ss]:o=>o,[vi]:o=>o.convertLinearToSRGB(),[ic]:su},$t={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ss},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const i=au[e],r=ou[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Sr;class ac{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Cn("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=Xr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class oc{constructor(e=null){this.isSource=!0,this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?n.push(js(r[s].image)):n.push(js(r[s]))}else n=js(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ac.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class Ht extends dr{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=jt,r=jt,n=Ot,s=Oi,a=ai,c=or,l=Ht.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=fi(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ql;Ht.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const s=e.elements,a=s[0],c=s[4],l=s[8],h=s[1],u=s[5],d=s[9],m=s[2],v=s[6],y=s[10];if(Math.abs(c-h)<.01&&Math.abs(l-m)<.01&&Math.abs(d-v)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+m)<.1&&Math.abs(d+v)<.1&&Math.abs(a+u+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(a+1)/2,E=(u+1)/2,M=(y+1)/2,A=(c+h)/4,S=(l+m)/4,P=(d+v)/4;return p>E&&p>M?p<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(p),r=A/i,n=S/i):E>M?E<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(E),i=A/r,n=P/r):M<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(M),i=S/n,r=P/n),this.set(i,r,n,t),this}let f=Math.sqrt((v-d)*(v-d)+(l-m)*(l-m)+(h-c)*(h-c));return Math.abs(f)<.001&&(f=1),this.x=(v-d)/f,this.y=(l-m)/f,this.z=(h-c)/f,this.w=Math.acos((a+u+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends dr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lc extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=n[s+0],m=n[s+1],v=n[s+2],y=n[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(u!==y||c!==d||l!==m||h!==v){let f=1-a;const p=c*d+l*m+h*v+u*y,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),P=Math.atan2(S,p*E);f=Math.sin(f*P)/S,a=Math.sin(a*P)/S}const A=a*E;if(c=c*f+d*A,l=l*f+m*A,h=h*f+v*A,u=u*f+y*A,f===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=n[s],d=n[s+1],m=n[s+2],v=n[s+3];return e[t]=a*v+h*u+c*m-l*d,e[t+1]=c*v+h*d+l*u-a*m,e[t+2]=l*v+h*m+a*d-c*u,e[t+3]=h*v-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(n/2),d=c(i/2),m=c(r/2),v=c(n/2);switch(s){case"XYZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"YZX":this._x=d*h*u+l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u-d*m*v;break;case"XZY":this._x=d*h*u-l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(n-l)*m,this._z=(s-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(n+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(n-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(s-r)/m,this._x=(n+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,s=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*a+r*l-n*c,this._y=r*h+s*c+n*a-i*l,this._z=n*h+s*l+i*c-r*a,this._w=s*h-i*a-r*c-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=n,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=n*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,s=e.y,a=e.z,c=e.w,l=c*t+s*r-a*i,h=c*i+a*t-n*r,u=c*r+n*i-s*t,d=-n*t-s*i-a*r;return this.x=l*c+d*-n+h*-a-u*-s,this.y=h*c+d*-s+u*-n-l*-a,this.z=u*c+d*-a+l*-s-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-n*a,this.y=n*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new U,Uo=new Wt;class zi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const n=r.attributes.position;for(let s=0,a=n.count;s<a;s++)Ci.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ci)}else r.boundingBox===null&&r.computeBoundingBox(),Tr.copy(r.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let r=0,n=i.length;r<n;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dn),Vn.subVectors(this.max,dn),Ar.subVectors(e.a,dn),Er.subVectors(e.b,dn),Cr.subVectors(e.c,dn),Hi.subVectors(Er,Ar),Gi.subVectors(Cr,Er),$i.subVectors(Ar,Cr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-$i.z,$i.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,$i.z,0,-$i.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-$i.y,$i.x,0];return!qs(t,Ar,Er,Cr,Vn)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,Ar,Er,Cr,Vn))?!1:(jn.crossVectors(Hi,Gi),t=[jn.x,jn.y,jn.z],qs(t,Ar,Er,Cr,Vn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new U,new U,new U,new U,new U,new U,new U,new U],Ci=new U,Tr=new zi,Ar=new U,Er=new U,Cr=new U,Hi=new U,Gi=new U,$i=new U,dn=new U,Vn=new U,jn=new U,er=new U;function qs(o,e,t,i,r){for(let n=0,s=o.length-3;n<=s;n+=3){er.fromArray(o,n);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),c=e.dot(er),l=t.dot(er),h=i.dot(er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hu=new zi,pn=new U,Ys=new U;class Fi{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hu.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pn.subVectors(e,this.center);const t=pn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pn.copy(e.center).add(Ys)),this.expandByPoint(pn.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new U,Xs=new U,Wn=new U,Vi=new U,Ks=new U,qn=new U,Zs=new U;class Da{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xs.copy(e).add(t).multiplyScalar(.5),Wn.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Xs);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Wn),a=Vi.dot(this.direction),c=-Vi.dot(Wn),l=Vi.lengthSq(),h=Math.abs(1-s*s);let u,d,m,v;if(h>0)if(u=s*c-a,d=s*a-c,v=n*h,u>=0)if(d>=-v)if(d<=v){const y=1/h;u*=y,d*=y,m=u*(u+s*d+2*a)+d*(s*u+d+2*c)+l}else d=n,u=Math.max(0,-(s*d+a)),m=-u*u+d*(d+2*c)+l;else d=-n,u=Math.max(0,-(s*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-s*n+a)),d=u>0?-n:Math.min(Math.max(-n,-c),n),m=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-n,-c),n),m=d*(d+2*c)+l):(u=Math.max(0,-(s*n+a)),d=u>0?n:Math.min(Math.max(-n,-c),n),m=-u*u+d*(d+2*c)+l);else d=s>0?-n:n,u=Math.max(0,-(s*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xs).addScaledVector(Wn,d),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,n=e.radius*e.radius;if(r>n)return null;const s=Math.sqrt(n-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,s,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(n=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||n>r||((n>i||isNaN(i))&&(i=n),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,n){Ks.subVectors(t,e),qn.subVectors(i,e),Zs.crossVectors(Ks,qn);let s=this.direction.dot(Zs),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Vi.subVectors(this.origin,e);const c=a*this.direction.dot(qn.crossVectors(Vi,qn));if(c<0)return null;const l=a*this.direction.dot(Ks.cross(Vi));if(l<0||c+l>s)return null;const h=-a*Vi.dot(Zs);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,s,a,c,l,h,u,d,m,v,y,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),n=1/Lr.setFromMatrixColumn(e,1).length(),s=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=s*h,m=s*u,v=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=v+m*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,v=l*h,y=l*u;t[0]=d+y*a,t[4]=v*a-m,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=m*a-v,t[6]=y+d*a,t[10]=s*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,v=l*h,y=l*u;t[0]=d-y*a,t[4]=-s*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*h,t[9]=y-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const d=s*h,m=s*u,v=a*h,y=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,m=s*l,v=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=v*u+m,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=d-y*u}else if(e.order==="XZY"){const d=s*c,m=s*l,v=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=s*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,du)}lookAt(e,t,i){const r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ji.crossVectors(i,ei),ji.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ji.crossVectors(i,ei)),ji.normalize(),Yn.crossVectors(ei,ji),r[0]=ji.x,r[4]=Yn.x,r[8]=ei.x,r[1]=ji.y,r[5]=Yn.y,r[9]=ei.y,r[2]=ji.z,r[6]=Yn.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],v=i[2],y=i[6],f=i[10],p=i[14],E=i[3],M=i[7],A=i[11],S=i[15],P=r[0],D=r[4],N=r[8],b=r[12],L=r[1],G=r[5],W=r[9],O=r[13],V=r[2],q=r[6],H=r[10],te=r[14],Z=r[3],Q=r[7],le=r[11],fe=r[15];return n[0]=s*P+a*L+c*V+l*Z,n[4]=s*D+a*G+c*q+l*Q,n[8]=s*N+a*W+c*H+l*le,n[12]=s*b+a*O+c*te+l*fe,n[1]=h*P+u*L+d*V+m*Z,n[5]=h*D+u*G+d*q+m*Q,n[9]=h*N+u*W+d*H+m*le,n[13]=h*b+u*O+d*te+m*fe,n[2]=v*P+y*L+f*V+p*Z,n[6]=v*D+y*G+f*q+p*Q,n[10]=v*N+y*W+f*H+p*le,n[14]=v*b+y*O+f*te+p*fe,n[3]=E*P+M*L+A*V+S*Z,n[7]=E*D+M*G+A*q+S*Q,n[11]=E*N+M*W+A*H+S*le,n[15]=E*b+M*O+A*te+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],y=e[7],f=e[11],p=e[15];return v*(+n*c*u-r*l*u-n*a*d+i*l*d+r*a*m-i*c*m)+y*(+t*c*m-t*l*d+n*s*d-r*s*m+r*l*h-n*c*h)+f*(+t*l*u-t*a*m-n*s*u+i*s*m+n*a*h-i*l*h)+p*(-r*a*h-t*c*u+t*a*d+r*s*u-i*s*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],y=e[13],f=e[14],p=e[15],E=u*f*l-y*d*l+y*c*m-a*f*m-u*c*p+a*d*p,M=v*d*l-h*f*l-v*c*m+s*f*m+h*c*p-s*d*p,A=h*y*l-v*u*l+v*a*m-s*y*m-h*a*p+s*u*p,S=v*u*c-h*y*c-v*a*d+s*y*d+h*a*f-s*u*f,P=t*E+i*M+r*A+n*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=E*D,e[1]=(y*d*n-u*f*n-y*r*m+i*f*m+u*r*p-i*d*p)*D,e[2]=(a*f*n-y*c*n+y*r*l-i*f*l-a*r*p+i*c*p)*D,e[3]=(u*c*n-a*d*n-u*r*l+i*d*l+a*r*m-i*c*m)*D,e[4]=M*D,e[5]=(h*f*n-v*d*n+v*r*m-t*f*m-h*r*p+t*d*p)*D,e[6]=(v*c*n-s*f*n-v*r*l+t*f*l+s*r*p-t*c*p)*D,e[7]=(s*d*n-h*c*n+h*r*l-t*d*l-s*r*m+t*c*m)*D,e[8]=A*D,e[9]=(v*u*n-h*y*n-v*i*m+t*y*m+h*i*p-t*u*p)*D,e[10]=(s*y*n-v*a*n+v*i*l-t*y*l-s*i*p+t*a*p)*D,e[11]=(h*a*n-s*u*n-h*i*l+t*u*l+s*i*m-t*a*m)*D,e[12]=S*D,e[13]=(h*y*r-v*u*r+v*i*d-t*y*d-h*i*f+t*u*f)*D,e[14]=(v*a*r-s*y*r-v*i*c+t*y*c+s*i*f-t*a*f)*D,e[15]=(s*u*r-h*a*r+h*i*c-t*u*c-s*i*d+t*a*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,s=e.x,a=e.y,c=e.z,l=n*s,h=n*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*s,0,l*c-r*a,h*c+r*s,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,s=t._y,a=t._z,c=t._w,l=n+n,h=s+s,u=a+a,d=n*l,m=n*h,v=n*u,y=s*h,f=s*u,p=a*u,E=c*l,M=c*h,A=c*u,S=i.x,P=i.y,D=i.z;return r[0]=(1-(y+p))*S,r[1]=(m+A)*S,r[2]=(v-M)*S,r[3]=0,r[4]=(m-A)*P,r[5]=(1-(d+p))*P,r[6]=(f+E)*P,r[7]=0,r[8]=(v+M)*D,r[9]=(f-E)*D,r[10]=(1-(d+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Lr.set(r[0],r[1],r[2]).length();const s=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const c=1/n,l=1/s,h=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=l,hi.elements[5]*=l,hi.elements[6]*=l,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),i.x=n,i.y=s,i.z=a,this}makePerspective(e,t,i,r,n,s){const a=this.elements,c=2*n/(t-e),l=2*n/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(s+n)/(s-n),m=-2*s*n/(s-n);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,n,s){const a=this.elements,c=1/(t-e),l=1/(i-r),h=1/(s-n),u=(t+e)*c,d=(i+r)*l,m=(s+n)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new U,hi=new je,uu=new U(0,0,0),du=new U(1,1,1),ji=new U,Yn=new U,ei=new U,Oo=new je,zo=new Wt;class Nn{constructor(e=0,t=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],s=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Fo=new U,Rr=new Wt,Ri=new je,Xn=new U,mn=new U,mu=new U,fu=new Wt,Bo=new U(1,0,0),Ho=new U(0,1,0),Go=new U(0,0,1),gu={type:"added"},Vo={type:"removed"};class _t extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new Nn,i=new Wt,r=new U(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Je}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Bo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Fo.copy(e).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xn.copy(e):Xn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(mn,Xn,this.up):Ri.lookAt(Xn,mn,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Vo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,s=r.length;n<s;n++){const a=r[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];n(e.shapes,u)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(n(e.materials,this.material[c]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(n(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new U,Ii=new U,Js=new U,Ni=new U,Ir=new U,Nr=new U,jo=new U,Qs=new U,$s=new U,ea=new U;let Kn=!1;class pi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){ui.subVectors(r,t),Ii.subVectors(i,t),Js.subVectors(e,t);const s=ui.dot(ui),a=ui.dot(Ii),c=ui.dot(Js),l=Ii.dot(Ii),h=Ii.dot(Js),u=s*l-a*a;if(u===0)return n.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,v=(s*h-a*c)*d;return n.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni),Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,t,i,r,n,s,a,c){return Kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kn=!0),this.getInterpolation(e,t,i,r,n,s,a,c)}static getInterpolation(e,t,i,r,n,s,a,c){return this.getBarycoord(e,t,i,r,Ni),c.setScalar(0),c.addScaledVector(n,Ni.x),c.addScaledVector(s,Ni.y),c.addScaledVector(a,Ni.z),c}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),Ii.subVectors(e,t),ui.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ui.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kn=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}getInterpolation(e,t,i,r,n){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let s,a;Ir.subVectors(r,i),Nr.subVectors(n,i),Qs.subVectors(e,i);const c=Ir.dot(Qs),l=Nr.dot(Qs);if(c<=0&&l<=0)return t.copy(i);$s.subVectors(e,r);const h=Ir.dot($s),u=Nr.dot($s);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(Ir,s);ea.subVectors(e,n);const m=Ir.dot(ea),v=Nr.dot(ea);if(v>=0&&m<=v)return t.copy(n);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Nr,a);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return jo.subVectors(n,r),a=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(jo,a);const p=1/(f+y+d);return s=y*p,a=d*p,t.copy(i).addScaledVector(Ir,s).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _u=0;class oi extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=qr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const s=[];for(const a in n){const c=n[a];delete c.metadata,s.push(c)}return s}if(t){const n=r(e.textures),s=r(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Zn={h:0,s:0,l:0};function ta(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$t.workingColorSpace){if(e=Pa(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=ta(s,n,e+1/3),this.g=ta(s,n,e),this.b=ta(s,n,e-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(e,t=vi){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,$t.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,$t.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(n[1])/360,l=parseFloat(n[2])/100,h=parseFloat(n[3])/100;return i(n[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const i=hc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return $t.fromWorkingColorSpace(Vt.copy(this),e),zt(Vt.r*255,0,255)<<16^zt(Vt.g*255,0,255)<<8^zt(Vt.b*255,0,255)<<0}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,n=Vt.b,s=Math.max(i,r,n),a=Math.min(i,r,n);let c,l;const h=(a+s)/2;if(a===s)c=0,l=0;else{const u=s-a;switch(l=h<=.5?u/(s+a):u/(2-s-a),s){case i:c=(r-n)/u+(r<n?6:0);break;case r:c=(n-i)/u+2;break;case n:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vi){$t.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(di),di.h+=e,di.s+=t,di.l+=i,this.setHSL(di.h,di.s,di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Zn);const i=Sn(di.h,Zn.h,t),r=Sn(di.s,Zn.s,t),n=Sn(di.l,Zn.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Be;Be.NAMES=hc;class ki extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,Jn=new Ve;class Ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class uc extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dc extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vu=0;const ni=new je,ia=new _t,Pr=new U,ti=new zi,fn=new zi,Pt=new U;class Zt extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?dc:uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Je().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];ti.setFromBufferAttribute(n),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(ti.min,fn.min),ti.expandByPoint(Pt),Pt.addVectors(ti.max,fn.max),ti.expandByPoint(Pt)):(ti.expandByPoint(fn.min),ti.expandByPoint(fn.max))}ti.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)Pt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let n=0,s=t.length;n<s;n++){const a=t[n],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),Pt.add(Pr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let L=0;L<a;L++)l[L]=new U,h[L]=new U;const u=new U,d=new U,m=new U,v=new Ve,y=new Ve,f=new Ve,p=new U,E=new U;function M(L,G,W){u.fromArray(r,L*3),d.fromArray(r,G*3),m.fromArray(r,W*3),v.fromArray(s,L*2),y.fromArray(s,G*2),f.fromArray(s,W*2),d.sub(u),m.sub(u),y.sub(v),f.sub(v);const O=1/(y.x*f.y-f.x*y.y);isFinite(O)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-y.y).multiplyScalar(O),E.copy(m).multiplyScalar(y.x).addScaledVector(d,-f.x).multiplyScalar(O),l[L].add(p),l[G].add(p),l[W].add(p),h[L].add(E),h[G].add(E),h[W].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let L=0,G=A.length;L<G;++L){const W=A[L],O=W.start,V=W.count;for(let q=O,H=O+V;q<H;q+=3)M(i[q+0],i[q+1],i[q+2])}const S=new U,P=new U,D=new U,N=new U;function b(L){D.fromArray(n,L*3),N.copy(D);const G=l[L];S.copy(G),S.sub(D.multiplyScalar(D.dot(G))).normalize(),P.crossVectors(N,G);const W=P.dot(h[L])<0?-1:1;c[L*4]=S.x,c[L*4+1]=S.y,c[L*4+2]=S.z,c[L*4+3]=W}for(let L=0,G=A.length;L<G;++L){const W=A[L],O=W.start,V=W.count;for(let q=O,H=O+V;q<H;q+=3)b(i[q+0]),b(i[q+1]),b(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,n=new U,s=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,v),n.fromBufferAttribute(t,y),s.fromBufferAttribute(t,f),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,v=0;for(let y=0,f=c.length;y<f;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*h;for(let p=0;p<h;p++)d[v++]=l[m++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const n=this.morphAttributes;for(const a in n){const c=[],l=n[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const n=e.morphAttributes;for(const l in n){const h=[],u=n[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new je,_i=new Da,Qn=new Fi,qo=new U,Dr=new U,kr=new U,Ur=new U,ra=new U,$n=new U,es=new Ve,ts=new Ve,is=new Ve,Yo=new U,Xo=new U,Ko=new U,rs=new U,ns=new U;class kt extends _t{constructor(e=new Zt,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(n&&a){$n.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const h=a[c],u=n[c];h!==0&&(ra.fromBufferAttribute(u,e),s?$n.addScaledVector(ra,h):$n.addScaledVector(ra.sub(t),h))}t.add($n)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Qn.copy(i.boundingSphere),Qn.applyMatrix4(n),_i.copy(e.ray).recast(e.near),Qn.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Qn,qo)===null||_i.origin.distanceToSquared(qo)>(e.far-e.near)**2))||(Wo.copy(n).invert(),_i.copy(e.ray).applyMatrix4(Wo),i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,c=i.attributes.position,l=i.attributes.uv,h=i.attributes.uv2,u=i.attributes.normal,d=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,y=d.length;v<y;v++){const f=d[v],p=r[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,S=M;A<S;A+=3){const P=a.getX(A),D=a.getX(A+1),N=a.getX(A+2);s=ss(this,p,e,_i,l,h,u,P,D,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let f=v,p=y;f<p;f+=3){const E=a.getX(f),M=a.getX(f+1),A=a.getX(f+2);s=ss(this,r,e,_i,l,h,u,E,M,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,y=d.length;v<y;v++){const f=d[v],p=r[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,S=M;A<S;A+=3){const P=A,D=A+1,N=A+2;s=ss(this,p,e,_i,l,h,u,P,D,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=v,p=y;f<p;f+=3){const E=f,M=f+1,A=f+2;s=ss(this,r,e,_i,l,h,u,E,M,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function yu(o,e,t,i,r,n,s,a){let c;if(e.side===Qt?c=i.intersectTriangle(s,n,r,!0,a):c=i.intersectTriangle(r,n,s,e.side===bi,a),c===null)return null;ns.copy(a),ns.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(ns);return l<t.near||l>t.far?null:{distance:l,point:ns.clone(),object:o}}function ss(o,e,t,i,r,n,s,a,c,l){o.getVertexPosition(a,Dr),o.getVertexPosition(c,kr),o.getVertexPosition(l,Ur);const h=yu(o,e,t,i,Dr,kr,Ur,rs);if(h){r&&(es.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,c),is.fromBufferAttribute(r,l),h.uv=pi.getInterpolation(rs,Dr,kr,Ur,es,ts,is,new Ve)),n&&(es.fromBufferAttribute(n,a),ts.fromBufferAttribute(n,c),is.fromBufferAttribute(n,l),h.uv2=pi.getInterpolation(rs,Dr,kr,Ur,es,ts,is,new Ve)),s&&(Yo.fromBufferAttribute(s,a),Xo.fromBufferAttribute(s,c),Ko.fromBufferAttribute(s,l),h.normal=pi.getInterpolation(rs,Dr,kr,Ur,Yo,Xo,Ko,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new U,materialIndex:0};pi.getNormal(Dr,kr,Ur,u.normal),h.face=u}return h}class an extends Zt{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};const a=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,s,n,0),v("z","y","x",1,-1,i,t,-e,s,n,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,n,4),v("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function v(y,f,p,E,M,A,S,P,D,N,b){const L=A/D,G=S/N,W=A/2,O=S/2,V=P/2,q=D+1,H=N+1;let te=0,Z=0;const Q=new U;for(let le=0;le<H;le++){const fe=le*G-O;for(let ue=0;ue<q;ue++){const B=ue*L-W;Q[y]=B*E,Q[f]=fe*M,Q[p]=V,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[f]=0,Q[p]=P>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ue/D),u.push(1-le/N),te+=1}}for(let le=0;le<N;le++)for(let fe=0;fe<D;fe++){const ue=d+fe+q*le,B=d+fe+q*(le+1),Y=d+(fe+1)+q*(le+1),oe=d+(fe+1)+q*le;c.push(ue,B,oe),c.push(B,Y,oe),Z+=6}a.addGroup(m,Z,b),m+=Z,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const r=o[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(o){const e={};for(let t=0;t<o.length;t++){const i=tn(o[t]);for(const r in i)e[r]=i[r]}return e}function xu(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function pc(o){return o.getRenderTarget()===null&&o.outputEncoding===rt?vi:Ss}const bu={clone:tn,merge:Kt};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tn(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mc extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends mc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=en*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return en*2*Math.atan(Math.tan(wn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;n+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,zr=1;class Su extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ft(Or,zr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new Ft(Or,zr,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const s=new Ft(Or,zr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Ft(Or,zr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ft(Or,zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ft(Or,zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,s,a,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ui,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class fc extends Ht{constructor(e,t,i,r,n,s,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,r,n,s,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tu extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new an(5,5,5),n=new hr({name:"CubemapFromEquirect",uniforms:tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ki});n.uniforms.tEquirect.value=t;const s=new kt(r,n),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Ot),new Su(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}const na=new U,Au=new U,Eu=new Je;class ir{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=na.subVectors(i,t).cross(Au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Eu.getNormalMatrix(e),r=this.coplanarPoint(na).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Fi,as=new U;class ka{constructor(e=new ir,t=new ir,i=new ir,r=new ir,n=new ir,s=new ir){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],s=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],m=i[9],v=i[10],y=i[11],f=i[12],p=i[13],E=i[14],M=i[15];return t[0].setComponents(a-r,u-c,y-d,M-f).normalize(),t[1].setComponents(a+r,u+c,y+d,M+f).normalize(),t[2].setComponents(a+n,u+l,y+m,M+p).normalize(),t[3].setComponents(a-n,u-l,y-m,M-p).normalize(),t[4].setComponents(a-s,u-h,y-v,M-E).normalize(),t[5].setComponents(a+s,u+h,y+v,M+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let o=null,e=!1,t=null,i=null;function r(n,s){t(n,s),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){o=n}}}function Cu(o,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,d=l.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(u instanceof Int16Array)v=5122;else if(u instanceof Uint32Array)v=5125;else if(u instanceof Int32Array)v=5124;else if(u instanceof Int8Array)v=5120;else if(u instanceof Uint8Array)v=5121;else if(u instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function n(l,h,u){const d=h.array,m=h.updateRange;o.bindBuffer(u,l),m.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(o.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(n(u.buffer,l,h),u.version=l.version)}return{get:s,remove:a,update:c}}class Ua extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,m=[],v=[],y=[],f=[];for(let p=0;p<h;p++){const E=p*d-s;for(let M=0;M<l;M++){const A=M*u-n;v.push(A,-E,0),y.push(0,0,1),f.push(M/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const M=E+l*p,A=E+l*(p+1),S=E+1+l*(p+1),P=E+1+l*p;m.push(M,A,P),m.push(A,S,P)}this.setIndex(m),this.setAttribute("position",new bt(v,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku="vec3 transformed = vec3( position );",Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Td=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:Lu,alphamap_pars_fragment:Ru,alphatest_fragment:Iu,alphatest_pars_fragment:Nu,aomap_fragment:Pu,aomap_pars_fragment:Du,begin_vertex:ku,beginnormal_vertex:Uu,bsdfs:Ou,iridescence_fragment:zu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Vu,color_fragment:ju,color_pars_fragment:Wu,color_pars_vertex:qu,color_vertex:Yu,common:Xu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:$u,emissivemap_pars_fragment:ed,encodings_fragment:td,encodings_pars_fragment:id,envmap_fragment:rd,envmap_common_pars_fragment:nd,envmap_pars_fragment:sd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:vd,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:fd,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:yd,lights_toon_pars_fragment:xd,lights_phong_fragment:bd,lights_phong_pars_fragment:Md,lights_physical_fragment:wd,lights_physical_pars_fragment:Sd,lights_fragment_begin:Td,lights_fragment_maps:Ad,lights_fragment_end:Ed,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Id,map_fragment:Nd,map_pars_fragment:Pd,map_particle_fragment:Dd,map_particle_pars_fragment:kd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Od,morphcolor_vertex:zd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Bd,morphtarget_vertex:Hd,normal_fragment_begin:Gd,normal_fragment_maps:Vd,normal_pars_fragment:jd,normal_pars_vertex:Wd,normal_vertex:qd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Jd,output_fragment:Qd,packing:$d,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:ip,dithering_pars_fragment:rp,roughnessmap_fragment:np,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:fp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:yp,uv_pars_fragment:xp,uv_pars_vertex:bp,uv_vertex:Mp,worldpos_vertex:wp,background_vert:Sp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Ep,cube_vert:Cp,cube_frag:Lp,depth_vert:Rp,depth_frag:Ip,distanceRGBA_vert:Np,distanceRGBA_frag:Pp,equirect_vert:Dp,equirect_frag:kp,linedashed_vert:Up,linedashed_frag:Op,meshbasic_vert:zp,meshbasic_frag:Fp,meshlambert_vert:Bp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:jp,meshnormal_frag:Wp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Xp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:Qp,points_frag:$p,shadow_vert:em,shadow_frag:tm,sprite_vert:im,sprite_frag:rm},ve={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaTest:{value:0}}},yi={basic:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Kt([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Kt([ve.lights,ve.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:Kt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const os={r:0,b:0,g:0};function nm(o,e,t,i,r,n,s){const a=new Be(0);let c=n===!0?0:1,l,h,u=null,d=0,m=null;function v(f,p){let E=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M));const A=o.xr,S=A.getSession&&A.getSession();S&&S.environmentBlendMode==="additive"&&(M=null),M===null?y(a,c):M&&M.isColor&&(y(M,1),E=!0),(o.autoClear||E)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ms)?(h===void 0&&(h=new kt(new an(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:tn(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=M.encoding!==rt,(u!==M||d!==M.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=o.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new kt(new Ua(2,2),new hr({name:"BackgroundMaterial",uniforms:tn(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=M.encoding!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==o.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,m=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function y(f,p){f.getRGB(os,pc(o)),i.buffers.color.setClear(os.r,os.g,os.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,y(a,c)},render:v}}function sm(o,e,t,i){const r=o.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||n!==null,a={},c=f(null);let l=c,h=!1;function u(V,q,H,te,Z){let Q=!1;if(s){const le=y(te,H,q);l!==le&&(l=le,m(l.object)),Q=p(V,te,H,Z),Q&&E(V,te,H,Z)}else{const le=q.wireframe===!0;(l.geometry!==te.id||l.program!==H.id||l.wireframe!==le)&&(l.geometry=te.id,l.program=H.id,l.wireframe=le,Q=!0)}Z!==null&&t.update(Z,34963),(Q||h)&&(h=!1,N(V,q,H,te),Z!==null&&o.bindBuffer(34963,t.get(Z).buffer))}function d(){return i.isWebGL2?o.createVertexArray():n.createVertexArrayOES()}function m(V){return i.isWebGL2?o.bindVertexArray(V):n.bindVertexArrayOES(V)}function v(V){return i.isWebGL2?o.deleteVertexArray(V):n.deleteVertexArrayOES(V)}function y(V,q,H){const te=H.wireframe===!0;let Z=a[V.id];Z===void 0&&(Z={},a[V.id]=Z);let Q=Z[q.id];Q===void 0&&(Q={},Z[q.id]=Q);let le=Q[te];return le===void 0&&(le=f(d()),Q[te]=le),le}function f(V){const q=[],H=[],te=[];for(let Z=0;Z<r;Z++)q[Z]=0,H[Z]=0,te[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:H,attributeDivisors:te,object:V,attributes:{},index:null}}function p(V,q,H,te){const Z=l.attributes,Q=q.attributes;let le=0;const fe=H.getAttributes();for(const ue in fe)if(fe[ue].location>=0){const B=Z[ue];let Y=Q[ue];if(Y===void 0&&(ue==="instanceMatrix"&&V.instanceMatrix&&(Y=V.instanceMatrix),ue==="instanceColor"&&V.instanceColor&&(Y=V.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;le++}return l.attributesNum!==le||l.index!==te}function E(V,q,H,te){const Z={},Q=q.attributes;let le=0;const fe=H.getAttributes();for(const ue in fe)if(fe[ue].location>=0){let B=Q[ue];B===void 0&&(ue==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),ue==="instanceColor"&&V.instanceColor&&(B=V.instanceColor));const Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),Z[ue]=Y,le++}l.attributes=Z,l.attributesNum=le,l.index=te}function M(){const V=l.newAttributes;for(let q=0,H=V.length;q<H;q++)V[q]=0}function A(V){S(V,0)}function S(V,q){const H=l.newAttributes,te=l.enabledAttributes,Z=l.attributeDivisors;H[V]=1,te[V]===0&&(o.enableVertexAttribArray(V),te[V]=1),Z[V]!==q&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,q),Z[V]=q)}function P(){const V=l.newAttributes,q=l.enabledAttributes;for(let H=0,te=q.length;H<te;H++)q[H]!==V[H]&&(o.disableVertexAttribArray(H),q[H]=0)}function D(V,q,H,te,Z,Q){i.isWebGL2===!0&&(H===5124||H===5125)?o.vertexAttribIPointer(V,q,H,Z,Q):o.vertexAttribPointer(V,q,H,te,Z,Q)}function N(V,q,H,te){if(i.isWebGL2===!1&&(V.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=te.attributes,Q=H.getAttributes(),le=q.defaultAttributeValues;for(const fe in Q){const ue=Q[fe];if(ue.location>=0){let B=Z[fe];if(B===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(B=V.instanceColor)),B!==void 0){const Y=B.normalized,oe=B.itemSize,$=t.get(B);if($===void 0)continue;const F=$.buffer,ye=$.type,Ce=$.bytesPerElement;if(B.isInterleavedBufferAttribute){const me=B.data,De=me.stride,tt=B.offset;if(me.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ue.locationSize;Ne++)S(ue.location+Ne,me.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<ue.locationSize;Ne++)A(ue.location+Ne);o.bindBuffer(34962,F);for(let Ne=0;Ne<ue.locationSize;Ne++)D(ue.location+Ne,oe/ue.locationSize,ye,Y,De*Ce,(tt+oe/ue.locationSize*Ne)*Ce)}else{if(B.isInstancedBufferAttribute){for(let me=0;me<ue.locationSize;me++)S(ue.location+me,B.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let me=0;me<ue.locationSize;me++)A(ue.location+me);o.bindBuffer(34962,F);for(let me=0;me<ue.locationSize;me++)D(ue.location+me,oe/ue.locationSize,ye,Y,oe*Ce,oe/ue.locationSize*me*Ce)}}else if(le!==void 0){const Y=le[fe];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(ue.location,Y);break;case 3:o.vertexAttrib3fv(ue.location,Y);break;case 4:o.vertexAttrib4fv(ue.location,Y);break;default:o.vertexAttrib1fv(ue.location,Y)}}}}P()}function b(){W();for(const V in a){const q=a[V];for(const H in q){const te=q[H];for(const Z in te)v(te[Z].object),delete te[Z];delete q[H]}delete a[V]}}function L(V){if(a[V.id]===void 0)return;const q=a[V.id];for(const H in q){const te=q[H];for(const Z in te)v(te[Z].object),delete te[Z];delete q[H]}delete a[V.id]}function G(V){for(const q in a){const H=a[q];if(H[V.id]===void 0)continue;const te=H[V.id];for(const Z in te)v(te[Z].object),delete te[Z];delete H[V.id]}}function W(){O(),h=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:A,disableUnusedAttributes:P}}function am(o,e,t,i){const r=i.isWebGL2;let n;function s(l){n=l}function a(l,h){o.drawArrays(n,l,h),t.update(h,n,1)}function c(l,h,u){if(u===0)return;let d,m;if(r)d=o,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](n,l,h,u),t.update(h,n,u)}this.setMode=s,this.render=a,this.renderInstances=c}function om(o,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(D){if(D==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=n(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),v=o.getParameter(34076),y=o.getParameter(34921),f=o.getParameter(36347),p=o.getParameter(36348),E=o.getParameter(36349),M=d>0,A=s||e.has("OES_texture_float"),S=M&&A,P=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:A,floatVertexTextures:S,maxSamples:P}}function lm(o){const e=this;let t=null,i=0,r=!1,n=!1;const s=new ir,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,p=o.get(u);if(!r||v===null||v.length===0||n&&!f)n?h(null):l();else{const E=n?0:i,M=E*4;let A=p.clippingState||null;c.value=A,A=h(v,d,M,m);for(let S=0;S!==M;++S)A[S]=t[S];p.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,v){const y=u!==null?u.length:0;let f=null;if(y!==0){if(f=c.value,v!==!0||f===null){const p=m+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,A=m;M!==y;++M,A+=4)s.copy(u[M]).applyMatrix4(E,a),s.normal.toArray(f,A),f[A+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function cm(o){let e=new WeakMap;function t(s,a){return a===va?s.mapping=Zr:a===ya&&(s.mapping=Jr),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===va||a===ya)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Tu(c.height/2);return l.fromEquirectangularTexture(o,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ts extends mc{constructor(e=-1,t=1,i=1,r=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,Zo=[.125,.215,.35,.446,.526,.582],nr=20,sa=new Ts,Jo=new Be;let aa=null;const rr=(1+Math.sqrt(5))/2,Fr=1/rr,Qo=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,rr,Fr),new U(0,rr,-Fr),new U(Fr,0,rr),new U(-Fr,0,rr),new U(rr,Fr,0),new U(-rr,Fr,0)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:An,format:ai,encoding:lr,depthBuffer:!1},r=el(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(n)),this._blurMaterial=um(n,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,r){const n=new Ft(90,1,t,i),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Jo),c.toneMapping=Ui,c.autoClear=!1;const u=new ki({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),d=new kt(new an,u);let m=!1;const v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,m=!0):(u.color.copy(Jo),m=!0);for(let y=0;y<6;y++){const f=y%3;f===0?(n.up.set(0,s[y],0),n.lookAt(a[y],0,0)):f===1?(n.up.set(0,0,s[y]),n.lookAt(0,a[y],0)):(n.up.set(0,s[y],0),n.lookAt(0,0,a[y]));const p=this._cubeSize;ls(r,f*p,y>2?p:0,p,p),c.setRenderTarget(r),m&&c.render(d,n),c.render(e,n)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const n=r?this._cubemapMaterial:this._equirectMaterial,s=new kt(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const c=this._cubeSize;ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qo[(r-1)%Qo.length];this._blur(e,r-1,r,n,s)}t.autoClear=i}_blur(e,t,i,r,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",n),this._halfBlur(s,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*nr-1),y=n/v,f=isFinite(n)?1+Math.floor(h*y):nr;f>nr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${nr}`);const p=[];let E=0;for(let D=0;D<nr;++D){const N=D/y,b=Math.exp(-N*N/2);p.push(b),D===0?E+=b:D<f&&(E+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-i;const A=this._sizeLods[r],S=3*A*(r>M-Wr?r-M+Wr:0),P=4*(this._cubeSize-A);ls(t,S,P,3*A,2*A),c.setRenderTarget(t),c.render(u,sa)}}function hm(o){const e=[],t=[],i=[];let r=o;const n=o-Wr+1+Zo.length;for(let s=0;s<n;s++){const a=Math.pow(2,r);t.push(a);let c=1/a;s>o-Wr?c=Zo[s-o+Wr-1]:s===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,y=3,f=2,p=1,E=new Float32Array(y*v*m),M=new Float32Array(f*v*m),A=new Float32Array(p*v*m);for(let P=0;P<m;P++){const D=P%3*2/3-1,N=P>2?0:-1,b=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];E.set(b,y*v*P),M.set(d,f*v*P);const L=[P,P,P,P,P,P];A.set(L,p*v*P)}const S=new Zt;S.setAttribute("position",new Ut(E,y)),S.setAttribute("uv",new Ut(M,f)),S.setAttribute("faceIndex",new Ut(A,p)),e.push(S),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function el(o,e,t){const i=new cr(o,e,t);return i.texture.mapping=Ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(o,e,t,i,r){o.viewport.set(e,t,i,r),o.scissor.set(e,t,i,r)}function um(o,e,t){const i=new Float32Array(nr),r=new U(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function tl(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function il(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dm(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===va||c===ya,h=c===Zr||c===Jr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new $o(o)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new $o(o));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",n),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function n(a){const c=a.target;c.removeEventListener("dispose",n);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function pm(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mm(o,e,t,i){const r={},n=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",s),delete r[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const v in d)e.update(d[v],34962);const m=u.morphAttributes;for(const v in m){const y=m[v];for(let f=0,p=y.length;f<p;f++)e.update(y[f],34962)}}function l(u){const d=[],m=u.index,v=u.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let M=0,A=E.length;M<A;M+=3){const S=E[M+0],P=E[M+1],D=E[M+2];d.push(S,P,P,D,D,S)}}else{const E=v.array;y=v.version;for(let M=0,A=E.length/3-1;M<A;M+=3){const S=M+0,P=M+1,D=M+2;d.push(S,P,P,D,D,S)}}const f=new(sc(d)?dc:uc)(d,1);f.version=y;const p=n.get(u);p&&e.remove(p),n.set(u,f)}function h(u){const d=n.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return n.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fm(o,e,t,i){const r=i.isWebGL2;let n;function s(d){n=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){o.drawElements(n,m,a,d*c),t.update(m,n,1)}function u(d,m,v){if(v===0)return;let y,f;if(r)y=o,f="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[f](n,m,a,d*c,v),t.update(m,n,v)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u}function gm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(n/3);break;case 1:t.lines+=a*(n/2);break;case 3:t.lines+=a*(n-1);break;case 2:t.lines+=a*n;break;case 0:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _m(o,e){return o[0]-e[0]}function vm(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ym(o,e,t){const i={},r=new Float32Array(8),n=new WeakMap,s=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let y=n.get(h);if(y===void 0||y.count!==v){let E=function(){O.dispose(),n.delete(h),h.removeEventListener("dispose",E)};y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let L=h.attributes.position.count*b,G=1;L>e.maxTextureSize&&(G=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const W=new Float32Array(L*G*4*v),O=new lc(W,L,G,v);O.type=Xi,O.needsUpdate=!0;const V=b*4;for(let q=0;q<v;q++){const H=P[q],te=D[q],Z=N[q],Q=L*G*4*q;for(let le=0;le<H.count;le++){const fe=le*V;M===!0&&(s.fromBufferAttribute(H,le),W[Q+fe+0]=s.x,W[Q+fe+1]=s.y,W[Q+fe+2]=s.z,W[Q+fe+3]=0),A===!0&&(s.fromBufferAttribute(te,le),W[Q+fe+4]=s.x,W[Q+fe+5]=s.y,W[Q+fe+6]=s.z,W[Q+fe+7]=0),S===!0&&(s.fromBufferAttribute(Z,le),W[Q+fe+8]=s.x,W[Q+fe+9]=s.y,W[Q+fe+10]=s.z,W[Q+fe+11]=Z.itemSize===4?s.w:1)}}y={count:v,texture:O,size:new Ve(L,G)},n.set(h,y),h.addEventListener("dispose",E)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(o,"morphTargetBaseInfluence",p),u.getUniforms().setValue(o,"morphTargetInfluences",d),u.getUniforms().setValue(o,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}else{const m=d===void 0?0:d.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let M=0;M<m;M++)v[M]=[M,0];i[h.id]=v}for(let M=0;M<m;M++){const A=v[M];A[0]=M,A[1]=d[M]}v.sort(vm);for(let M=0;M<8;M++)M<m&&v[M][1]?(a[M][0]=v[M][0],a[M][1]=v[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(_m);const y=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const A=a[M],S=A[0],P=A[1];S!==Number.MAX_SAFE_INTEGER&&P?(y&&h.getAttribute("morphTarget"+M)!==y[S]&&h.setAttribute("morphTarget"+M,y[S]),f&&h.getAttribute("morphNormal"+M)!==f[S]&&h.setAttribute("morphNormal"+M,f[S]),r[M]=P,p+=P):(y&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const E=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(o,"morphTargetBaseInfluence",E),u.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:c}}function xm(o,e,t,i){let r=new WeakMap;function n(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:s}}const _c=new Ht,vc=new lc,yc=new cu,xc=new fc,rl=[],nl=[],sl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function on(o,e,t){const i=o[0];if(i<=0||i>0)return o;const r=e*t;let n=rl[r];if(n===void 0&&(n=new Float32Array(r),rl[r]=n),e!==0){i.toArray(n,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(n,a)}return n}function Lt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Rt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function As(o,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function bm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;o.uniform2fv(this.addr,e),Rt(t,e)}}function wm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;o.uniform3fv(this.addr,e),Rt(t,e)}}function Sm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;o.uniform4fv(this.addr,e),Rt(t,e)}}function Tm(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;ol.set(i),o.uniformMatrix2fv(this.addr,!1,ol),Rt(t,i)}}function Am(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;al.set(i),o.uniformMatrix3fv(this.addr,!1,al),Rt(t,i)}}function Em(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;sl.set(i),o.uniformMatrix4fv(this.addr,!1,sl),Rt(t,i)}}function Cm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Lm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;o.uniform2iv(this.addr,e),Rt(t,e)}}function Rm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;o.uniform3iv(this.addr,e),Rt(t,e)}}function Im(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;o.uniform4iv(this.addr,e),Rt(t,e)}}function Nm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Pm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;o.uniform2uiv(this.addr,e),Rt(t,e)}}function Dm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;o.uniform3uiv(this.addr,e),Rt(t,e)}}function km(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;o.uniform4uiv(this.addr,e),Rt(t,e)}}function Um(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||_c,r)}function Om(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yc,r)}function zm(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xc,r)}function Fm(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vc,r)}function Bm(o){switch(o){case 5126:return bm;case 35664:return Mm;case 35665:return wm;case 35666:return Sm;case 35674:return Tm;case 35675:return Am;case 35676:return Em;case 5124:case 35670:return Cm;case 35667:case 35671:return Lm;case 35668:case 35672:return Rm;case 35669:case 35673:return Im;case 5125:return Nm;case 36294:return Pm;case 36295:return Dm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Fm}}function Hm(o,e){o.uniform1fv(this.addr,e)}function Gm(o,e){const t=on(e,this.size,2);o.uniform2fv(this.addr,t)}function Vm(o,e){const t=on(e,this.size,3);o.uniform3fv(this.addr,t)}function jm(o,e){const t=on(e,this.size,4);o.uniform4fv(this.addr,t)}function Wm(o,e){const t=on(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function qm(o,e){const t=on(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Ym(o,e){const t=on(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Xm(o,e){o.uniform1iv(this.addr,e)}function Km(o,e){o.uniform2iv(this.addr,e)}function Zm(o,e){o.uniform3iv(this.addr,e)}function Jm(o,e){o.uniform4iv(this.addr,e)}function Qm(o,e){o.uniform1uiv(this.addr,e)}function $m(o,e){o.uniform2uiv(this.addr,e)}function ef(o,e){o.uniform3uiv(this.addr,e)}function tf(o,e){o.uniform4uiv(this.addr,e)}function rf(o,e,t){const i=this.cache,r=e.length,n=As(t,r);Lt(i,n)||(o.uniform1iv(this.addr,n),Rt(i,n));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||_c,n[s])}function nf(o,e,t){const i=this.cache,r=e.length,n=As(t,r);Lt(i,n)||(o.uniform1iv(this.addr,n),Rt(i,n));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||yc,n[s])}function sf(o,e,t){const i=this.cache,r=e.length,n=As(t,r);Lt(i,n)||(o.uniform1iv(this.addr,n),Rt(i,n));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||xc,n[s])}function af(o,e,t){const i=this.cache,r=e.length,n=As(t,r);Lt(i,n)||(o.uniform1iv(this.addr,n),Rt(i,n));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||vc,n[s])}function of(o){switch(o){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return jm;case 35674:return Wm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Xm;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return $m;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return af}}class lf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bm(t.type)}}class cf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=of(t.type)}}class hf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,s=r.length;n!==s;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function ll(o,e){o.seq.push(e),o.map[e.id]=e}function uf(o,e,t){const i=o.name,r=i.length;for(oa.lastIndex=0;;){const n=oa.exec(i),s=oa.lastIndex;let a=n[1];const c=n[2]==="]",l=n[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){ll(t,l===void 0?new lf(a,o,e):new cf(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new hf(a),ll(t,h)),t=h}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),s=e.getUniformLocation(t,n.name);uf(n,s,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){const a=t[n],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function cl(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let df=0;function pf(o,e){const t=o.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=r;s<n;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function mf(o){switch(o){case lr:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function hl(o,e,t){const i=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+pf(o.getShaderSource(e),s)}else return r}function ff(o,e){const t=mf(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gf(o,e){let t;switch(e){case _h:t="Linear";break;case vh:t="Reinhard";break;case yh:t="OptimizedCineon";break;case xh:t="ACESFilmic";break;case bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _f(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mn).join(`
`)}function vf(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yf(o,e){const t={},i=o.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=o.getActiveAttrib(e,r),s=n.name;let a=1;n.type===35674&&(a=2),n.type===35675&&(a=3),n.type===35676&&(a=4),t[s]={type:n.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Mn(o){return o!==""}function ul(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(o){return o.replace(xf,bf)}function bf(o,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ta(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(o){return o.replace(Mf,wf)}function wf(o,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function ml(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sf(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Af(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ef(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bs:e="ENVMAP_BLENDING_MULTIPLY";break;case fh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function Cf(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Lf(o,e,t,i){const r=o.getContext(),n=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=Sf(t),l=Tf(t),h=Af(t),u=Ef(t),d=Cf(t),m=t.isWebGL2?"":_f(t),v=vf(n),y=r.createProgram();let f,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter(Mn).join(`
`),f.length>0&&(f+=`
`),p=[m,v].filter(Mn).join(`
`),p.length>0&&(p+=`
`)):(f=[ml(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mn).join(`
`),p=[m,ml(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ui?gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,ff("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mn).join(`
`)),s=Ta(s),s=ul(s,t),s=dl(s,t),a=Ta(a),a=ul(a,t),a=dl(a,t),s=pl(s),a=pl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+f+s,A=E+p+a,S=cl(r,35633,M),P=cl(r,35632,A);if(r.attachShader(y,S),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),o.debug.checkShaderErrors){const b=r.getProgramInfoLog(y).trim(),L=r.getShaderInfoLog(S).trim(),G=r.getShaderInfoLog(P).trim();let W=!0,O=!0;if(r.getProgramParameter(y,35714)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,y,S,P);else{const V=hl(r,S,"vertex"),q=hl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,35715)+`

Program Info Log: `+b+`
`+V+`
`+q)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||G==="")&&(O=!1);O&&(this.diagnostics={runnable:W,programLog:b,vertexShader:{log:L,prefix:f},fragmentShader:{log:G,prefix:p}})}r.deleteShader(S),r.deleteShader(P);let D;this.getUniforms=function(){return D===void 0&&(D=new gs(r,y)),D};let N;return this.getAttributes=function(){return N===void 0&&(N=yf(r,y)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=df++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=P,this}let Rf=0;class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nf(e),t.set(e,i)),i}}class Nf{constructor(e){this.id=Rf++,this.code=e,this.usedTimes=0}}function Pf(o,e,t,i,r,n,s){const a=new cc,c=new If,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===1?"uv2":"uv"}function f(b,L,G,W,O){const V=W.fog,q=O.geometry,H=b.isMeshStandardMaterial?W.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),Z=te&&te.mapping===Ms?te.image.height:null,Q=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=le!==void 0?le.length:0;let ue=0;q.morphAttributes.position!==void 0&&(ue=1),q.morphAttributes.normal!==void 0&&(ue=2),q.morphAttributes.color!==void 0&&(ue=3);let B,Y,oe,$;if(Q){const ce=yi[Q];B=ce.vertexShader,Y=ce.fragmentShader}else B=b.vertexShader,Y=b.fragmentShader,c.update(b),oe=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);const F=o.getRenderTarget(),ye=O.isInstancedMesh===!0,Ce=!!b.map,me=!!b.matcap,De=!!te,tt=!!b.aoMap,Ne=!!b.lightMap,We=!!b.bumpMap,yt=!!b.normalMap,ft=!!b.displacementMap,Mt=!!b.emissiveMap,wt=!!b.metalnessMap,Qe=!!b.roughnessMap,at=b.clearcoat>0,It=b.iridescence>0,I=b.sheen>0,C=b.transmission>0,ee=at&&!!b.clearcoatMap,de=at&&!!b.clearcoatNormalMap,pe=at&&!!b.clearcoatRoughnessMap,_e=It&&!!b.iridescenceMap,k=It&&!!b.iridescenceThicknessMap,ae=I&&!!b.sheenColorMap,K=I&&!!b.sheenRoughnessMap,xe=!!b.specularMap,Ee=!!b.specularColorMap,Le=!!b.specularIntensityMap,we=C&&!!b.transmissionMap,Se=C&&!!b.thicknessMap,He=!!b.gradientMap,nt=!!b.alphaMap,xt=b.alphaTest>0,z=!!b.extensions,re=!!q.attributes.uv2;return{isWebGL2:h,shaderID:Q,shaderName:b.type,vertexShader:B,fragmentShader:Y,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:ye,instancingColor:ye&&O.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?o.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:lr,map:Ce,matcap:me,envMap:De,envMapMode:De&&te.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:Ne,bumpMap:We,normalMap:yt,displacementMap:d&&ft,emissiveMap:Mt,normalMapObjectSpace:yt&&b.normalMapType===Hh,normalMapTangentSpace:yt&&b.normalMapType===ws,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&b.map.encoding===rt,metalnessMap:wt,roughnessMap:Qe,clearcoat:at,clearcoatMap:ee,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:It,iridescenceMap:_e,iridescenceThicknessMap:k,sheen:I,sheenColorMap:ae,sheenRoughnessMap:K,specularMap:xe,specularColorMap:Ee,specularIntensityMap:Le,transmission:C,transmissionMap:we,thicknessMap:Se,gradientMap:He,opaque:b.transparent===!1&&b.blending===qr,alphaMap:nt,alphaTest:xt,combine:b.combine,mapUv:Ce&&y(b.map.channel),aoMapUv:tt&&y(b.aoMap.channel),lightMapUv:Ne&&y(b.lightMap.channel),bumpMapUv:We&&y(b.bumpMap.channel),normalMapUv:yt&&y(b.normalMap.channel),displacementMapUv:ft&&y(b.displacementMap.channel),emissiveMapUv:Mt&&y(b.emissiveMap.channel),metalnessMapUv:wt&&y(b.metalnessMap.channel),roughnessMapUv:Qe&&y(b.roughnessMap.channel),clearcoatMapUv:ee&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:k&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:K&&y(b.sheenRoughnessMap.channel),specularMapUv:xe&&y(b.specularMap.channel),specularColorMapUv:Ee&&y(b.specularColorMap.channel),specularIntensityMapUv:Le&&y(b.specularIntensityMap.channel),transmissionMapUv:we&&y(b.transmissionMap.channel),thicknessMapUv:Se&&y(b.thicknessMap.channel),alphaMapUv:nt&&y(b.alphaMap.channel),vertexTangents:yt&&!!q.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs2:re,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Ce||nt),fog:!!V,useFog:b.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:b.toneMapped?o.toneMapping:Ui,useLegacyLights:o.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mi,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:z&&b.extensions.derivatives===!0,extensionFragDepth:z&&b.extensions.fragDepth===!0,extensionDrawBuffers:z&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)L.push(G),L.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(E(L,b),M(L,b),L.push(o.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function E(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function M(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUvs2&&a.enable(13),L.vertexTangents&&a.enable(14),b.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.decodeVideoTexture&&a.enable(17),L.opaque&&a.enable(18),L.pointsUvs&&a.enable(19),b.push(a.mask)}function A(b){const L=v[b.type];let G;if(L){const W=yi[L];G=bu.clone(W.uniforms)}else G=b.uniforms;return G}function S(b,L){let G;for(let W=0,O=l.length;W<O;W++){const V=l[W];if(V.cacheKey===L){G=V,++G.usedTimes;break}}return G===void 0&&(G=new Lf(o,L,b,n),l.push(G)),G}function P(b){if(--b.usedTimes===0){const L=l.indexOf(b);l[L]=l[l.length-1],l.pop(),b.destroy()}}function D(b){c.remove(b)}function N(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:S,releaseProgram:P,releaseShaderCache:D,programs:l,dispose:N}}function Df(){let o=new WeakMap;function e(n){let s=o.get(n);return s===void 0&&(s={},o.set(n,s)),s}function t(n){o.delete(n)}function i(n,s,a){o.get(n)[s]=a}function r(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kf(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function fl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gl(){const o=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function s(u,d,m,v,y,f){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:f},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=y,p.group=f),e++,p}function a(u,d,m,v,y,f){const p=s(u,d,m,v,y,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function c(u,d,m,v,y,f){const p=s(u,d,m,v,y,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||kf),i.length>1&&i.sort(d||fl),r.length>1&&r.sort(d||fl)}function h(){for(let u=e,d=o.length;u<d;u++){const m=o[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:c,finish:h,sort:l}}function Uf(){let o=new WeakMap;function e(i,r){const n=o.get(i);let s;return n===void 0?(s=new gl,o.set(i,[s])):r>=n.length?(s=new gl,n.push(s)):s=n[r],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function Of(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return o[e.id]=t,t}}}function zf(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Ff=0;function Bf(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hf(o,e){const t=new Of,i=zf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new U);const n=new U,s=new je,a=new je;function c(h,u){let d=0,m=0,v=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let y=0,f=0,p=0,E=0,M=0,A=0,S=0,P=0,D=0,N=0;h.sort(Bf);const b=u===!0?Math.PI:1;for(let G=0,W=h.length;G<W;G++){const O=h[G],V=O.color,q=O.intensity,H=O.distance,te=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=V.r*q*b,m+=V.g*q*b,v+=V.b*q*b;else if(O.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(O.sh.coefficients[Z],q);else if(O.isDirectionalLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const Q=O.shadow,le=i.get(O);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,r.directionalShadow[y]=le,r.directionalShadowMap[y]=te,r.directionalShadowMatrix[y]=O.shadow.matrix,A++}r.directional[y]=Z,y++}else if(O.isSpotLight){const Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(V).multiplyScalar(q*b),Z.distance=H,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,r.spot[p]=Z;const Q=O.shadow;if(O.map&&(r.spotLightMap[D]=O.map,D++,Q.updateMatrices(O),O.castShadow&&N++),r.spotLightMatrix[p]=Q.matrix,O.castShadow){const le=i.get(O);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,r.spotShadow[p]=le,r.spotShadowMap[p]=te,P++}p++}else if(O.isRectAreaLight){const Z=t.get(O);Z.color.copy(V).multiplyScalar(q),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=Z,E++}else if(O.isPointLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity*b),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const Q=O.shadow,le=i.get(O);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,le.shadowCameraNear=Q.camera.near,le.shadowCameraFar=Q.camera.far,r.pointShadow[f]=le,r.pointShadowMap[f]=te,r.pointShadowMatrix[f]=O.shadow.matrix,S++}r.point[f]=Z,f++}else if(O.isHemisphereLight){const Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(q*b),Z.groundColor.copy(O.groundColor).multiplyScalar(q*b),r.hemi[M]=Z,M++}}E>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const L=r.hash;(L.directionalLength!==y||L.pointLength!==f||L.spotLength!==p||L.rectAreaLength!==E||L.hemiLength!==M||L.numDirectionalShadows!==A||L.numPointShadows!==S||L.numSpotShadows!==P||L.numSpotMaps!==D)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=E,r.point.length=f,r.hemi.length=M,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+D-N,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=N,L.directionalLength=y,L.pointLength=f,L.spotLength=p,L.rectAreaLength=E,L.hemiLength=M,L.numDirectionalShadows=A,L.numPointShadows=S,L.numSpotShadows=P,L.numSpotMaps=D,r.version=Ff++)}function l(h,u){let d=0,m=0,v=0,y=0,f=0;const p=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const A=h[E];if(A.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),d++}else if(A.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),v++}else if(A.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const S=r.hemi[f];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:r}}function _l(o,e){const t=new Hf(o,e),i=[],r=[];function n(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function Gf(o,e){let t=new WeakMap;function i(n,s=0){const a=t.get(n);let c;return a===void 0?(c=new _l(o,e),t.set(n,[c])):s>=a.length?(c=new _l(o,e),a.push(c)):c=a[s],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vf extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yf(o,e,t){let i=new ka;const r=new Ve,n=new Ve,s=new mt,a=new Vf({depthPacking:Bh}),c=new jf,l={},h=t.maxTextureSize,u={[bi]:Qt,[Qt]:bi,[mi]:mi},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Wf,fragmentShader:qf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new kt(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl,this.render=function(A,S,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const D=o.getRenderTarget(),N=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,W=A.length;G<W;G++){const O=A[G],V=O.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const q=V.getFrameExtents();if(r.multiply(q),n.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/q.x),r.x=n.x*q.x,V.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/q.y),r.y=n.y*q.y,V.mapSize.y=n.y)),V.map===null){const te=this.type!==bn?{minFilter:Dt,magFilter:Dt}:{};V.map=new cr(r.x,r.y,te),V.map.texture.name=O.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const H=V.getViewportCount();for(let te=0;te<H;te++){const Z=V.getViewport(te);s.set(n.x*Z.x,n.y*Z.y,n.x*Z.z,n.y*Z.w),L.viewport(s),V.updateMatrices(O,te),i=V.getFrustum(),M(S,P,V.camera,O,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&p(V,P),V.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(D,N,b)};function p(A,S){const P=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(S,null,P,d,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(S,null,P,m,y,null)}function E(A,S,P,D){let N=null;const b=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)N=b;else if(N=P.isPointLight===!0?c:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=N.uuid,G=S.uuid;let W=l[L];W===void 0&&(W={},l[L]=W);let O=W[G];O===void 0&&(O=N.clone(),W[G]=O),N=O}if(N.visible=S.visible,N.wireframe=S.wireframe,D===bn?N.side=S.shadowSide!==null?S.shadowSide:S.side:N.side=S.shadowSide!==null?S.shadowSide:u[S.side],N.alphaMap=S.alphaMap,N.alphaTest=S.alphaTest,N.map=S.map,N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.displacementMap=S.displacementMap,N.displacementScale=S.displacementScale,N.displacementBias=S.displacementBias,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,P.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=o.properties.get(N);L.light=P}return N}function M(A,S,P,D,N){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===bn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=e.update(A),G=A.material;if(Array.isArray(G)){const W=L.groups;for(let O=0,V=W.length;O<V;O++){const q=W[O],H=G[q.materialIndex];if(H&&H.visible){const te=E(A,H,D,N);o.renderBufferDirect(P,null,L,te,A,q)}}}else if(G.visible){const W=E(A,G,D,N);o.renderBufferDirect(P,null,L,W,A,null)}}const b=A.children;for(let L=0,G=b.length;L<G;L++)M(b[L],S,P,D,N)}}function Xf(o,e,t){const i=t.isWebGL2;function r(){let z=!1;const re=new mt;let ce=null;const Me=new mt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!z&&(o.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){z=Ue},setClear:function(Ue,ut,vt,Et,gi){gi===!0&&(Ue*=Et,ut*=Et,vt*=Et),re.set(Ue,ut,vt,Et),Me.equals(re)===!1&&(o.clearColor(Ue,ut,vt,Et),Me.copy(re))},reset:function(){z=!1,ce=null,Me.set(-1,0,0,0)}}}function n(){let z=!1,re=null,ce=null,Me=null;return{setTest:function(Ue){Ue?F(2929):ye(2929)},setMask:function(Ue){re!==Ue&&!z&&(o.depthMask(Ue),re=Ue)},setFunc:function(Ue){if(ce!==Ue){switch(Ue){case lh:o.depthFunc(512);break;case ch:o.depthFunc(519);break;case hh:o.depthFunc(513);break;case _a:o.depthFunc(515);break;case uh:o.depthFunc(514);break;case dh:o.depthFunc(518);break;case ph:o.depthFunc(516);break;case mh:o.depthFunc(517);break;default:o.depthFunc(515)}ce=Ue}},setLocked:function(Ue){z=Ue},setClear:function(Ue){Me!==Ue&&(o.clearDepth(Ue),Me=Ue)},reset:function(){z=!1,re=null,ce=null,Me=null}}}function s(){let z=!1,re=null,ce=null,Me=null,Ue=null,ut=null,vt=null,Et=null,gi=null;return{setTest:function(it){z||(it?F(2960):ye(2960))},setMask:function(it){re!==it&&!z&&(o.stencilMask(it),re=it)},setFunc:function(it,qt,ii){(ce!==it||Me!==qt||Ue!==ii)&&(o.stencilFunc(it,qt,ii),ce=it,Me=qt,Ue=ii)},setOp:function(it,qt,ii){(ut!==it||vt!==qt||Et!==ii)&&(o.stencilOp(it,qt,ii),ut=it,vt=qt,Et=ii)},setLocked:function(it){z=it},setClear:function(it){gi!==it&&(o.clearStencil(it),gi=it)},reset:function(){z=!1,re=null,ce=null,Me=null,Ue=null,ut=null,vt=null,Et=null,gi=null}}}const a=new r,c=new n,l=new s,h=new WeakMap,u=new WeakMap;let d={},m={},v=new WeakMap,y=[],f=null,p=!1,E=null,M=null,A=null,S=null,P=null,D=null,N=null,b=!1,L=null,G=null,W=null,O=null,V=null;const q=o.getParameter(35661);let H=!1,te=0;const Z=o.getParameter(7938);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=te>=2);let Q=null,le={};const fe=o.getParameter(3088),ue=o.getParameter(2978),B=new mt().fromArray(fe),Y=new mt().fromArray(ue);function oe(z,re,ce){const Me=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(z,Ue),o.texParameteri(z,10241,9728),o.texParameteri(z,10240,9728);for(let ut=0;ut<ce;ut++)o.texImage2D(re+ut,0,6408,1,1,0,6408,5121,Me);return Ue}const $={};$[3553]=oe(3553,3553,1),$[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),F(2929),c.setFunc(_a),ft(!1),Mt(to),F(2884),We(Ki);function F(z){d[z]!==!0&&(o.enable(z),d[z]=!0)}function ye(z){d[z]!==!1&&(o.disable(z),d[z]=!1)}function Ce(z,re){return m[z]!==re?(o.bindFramebuffer(z,re),m[z]=re,i&&(z===36009&&(m[36160]=re),z===36160&&(m[36009]=re)),!0):!1}function me(z,re){let ce=y,Me=!1;if(z)if(ce=v.get(re),ce===void 0&&(ce=[],v.set(re,ce)),z.isWebGLMultipleRenderTargets){const Ue=z.texture;if(ce.length!==Ue.length||ce[0]!==36064){for(let ut=0,vt=Ue.length;ut<vt;ut++)ce[ut]=36064+ut;ce.length=Ue.length,Me=!0}}else ce[0]!==36064&&(ce[0]=36064,Me=!0);else ce[0]!==1029&&(ce[0]=1029,Me=!0);Me&&(t.isWebGL2?o.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function De(z){return f!==z?(o.useProgram(z),f=z,!0):!1}const tt={[Vr]:32774,[Jc]:32778,[Qc]:32779};if(i)tt[so]=32775,tt[ao]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(tt[so]=z.MIN_EXT,tt[ao]=z.MAX_EXT)}const Ne={[$c]:0,[eh]:1,[th]:768,[Zl]:770,[oh]:776,[sh]:774,[rh]:772,[ih]:769,[Jl]:771,[ah]:775,[nh]:773};function We(z,re,ce,Me,Ue,ut,vt,Et){if(z===Ki){p===!0&&(ye(3042),p=!1);return}if(p===!1&&(F(3042),p=!0),z!==Zc){if(z!==E||Et!==b){if((M!==Vr||P!==Vr)&&(o.blendEquation(32774),M=Vr,P=Vr),Et)switch(z){case qr:o.blendFuncSeparate(1,771,1,771);break;case io:o.blendFunc(1,1);break;case ro:o.blendFuncSeparate(0,769,0,1);break;case no:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qr:o.blendFuncSeparate(770,771,1,771);break;case io:o.blendFunc(770,1);break;case ro:o.blendFuncSeparate(0,769,0,1);break;case no:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,S=null,D=null,N=null,E=z,b=Et}return}Ue=Ue||re,ut=ut||ce,vt=vt||Me,(re!==M||Ue!==P)&&(o.blendEquationSeparate(tt[re],tt[Ue]),M=re,P=Ue),(ce!==A||Me!==S||ut!==D||vt!==N)&&(o.blendFuncSeparate(Ne[ce],Ne[Me],Ne[ut],Ne[vt]),A=ce,S=Me,D=ut,N=vt),E=z,b=!1}function yt(z,re){z.side===mi?ye(2884):F(2884);let ce=z.side===Qt;re&&(ce=!ce),ft(ce),z.blending===qr&&z.transparent===!1?We(Ki):We(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const Me=z.stencilWrite;l.setTest(Me),Me&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Qe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?F(32926):ye(32926)}function ft(z){L!==z&&(z?o.frontFace(2304):o.frontFace(2305),L=z)}function Mt(z){z!==Yc?(F(2884),z!==G&&(z===to?o.cullFace(1029):z===Xc?o.cullFace(1028):o.cullFace(1032))):ye(2884),G=z}function wt(z){z!==W&&(H&&o.lineWidth(z),W=z)}function Qe(z,re,ce){z?(F(32823),(O!==re||V!==ce)&&(o.polygonOffset(re,ce),O=re,V=ce)):ye(32823)}function at(z){z?F(3089):ye(3089)}function It(z){z===void 0&&(z=33984+q-1),Q!==z&&(o.activeTexture(z),Q=z)}function I(z,re,ce){ce===void 0&&(Q===null?ce=33984+q-1:ce=Q);let Me=le[ce];Me===void 0&&(Me={type:void 0,texture:void 0},le[ce]=Me),(Me.type!==z||Me.texture!==re)&&(Q!==ce&&(o.activeTexture(ce),Q=ce),o.bindTexture(z,re||$[z]),Me.type=z,Me.texture=re)}function C(){const z=le[Q];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){B.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),B.copy(z))}function Se(z){Y.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),Y.copy(z))}function He(z,re){let ce=u.get(re);ce===void 0&&(ce=new WeakMap,u.set(re,ce));let Me=ce.get(z);Me===void 0&&(Me=o.getUniformBlockIndex(re,z.name),ce.set(z,Me))}function nt(z,re){const ce=u.get(re).get(z);h.get(re)!==ce&&(o.uniformBlockBinding(re,ce,z.__bindingPointIndex),h.set(re,ce))}function xt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},Q=null,le={},m={},v=new WeakMap,y=[],f=null,p=!1,E=null,M=null,A=null,S=null,P=null,D=null,N=null,b=!1,L=null,G=null,W=null,O=null,V=null,B.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:F,disable:ye,bindFramebuffer:Ce,drawBuffers:me,useProgram:De,setBlending:We,setMaterial:yt,setFlipSided:ft,setCullFace:Mt,setLineWidth:wt,setPolygonOffset:Qe,setScissorTest:at,activeTexture:It,bindTexture:I,unbindTexture:C,compressedTexImage2D:ee,compressedTexImage3D:de,texImage2D:Ee,texImage3D:Le,updateUBOMapping:He,uniformBlockBinding:nt,texStorage2D:K,texStorage3D:xe,texSubImage2D:pe,texSubImage3D:_e,compressedTexSubImage2D:k,compressedTexSubImage3D:ae,scissor:we,viewport:Se,reset:xt}}function Kf(o,e,t,i,r,n,s){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,C){return p?new OffscreenCanvas(I,C):Cn("canvas")}function M(I,C,ee,de){let pe=1;if((I.width>de||I.height>de)&&(pe=de/Math.max(I.width,I.height)),pe<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const _e=C?nc:Math.floor,k=_e(pe*I.width),ae=_e(pe*I.height);y===void 0&&(y=E(k,ae));const K=ee?E(k,ae):y;return K.width=k,K.height=ae,K.getContext("2d").drawImage(I,0,0,k,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+k+"x"+ae+")."),K}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function A(I){return Sa(I.width)&&Sa(I.height)}function S(I){return a?!1:I.wrapS!==jt||I.wrapT!==jt||I.minFilter!==Dt&&I.minFilter!==Ot}function P(I,C){return I.generateMipmaps&&C&&I.minFilter!==Dt&&I.minFilter!==Ot}function D(I){o.generateMipmap(I)}function N(I,C,ee,de,pe=!1){if(a===!1)return C;if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e=C;return C===6403&&(ee===5126&&(_e=33326),ee===5131&&(_e=33325),ee===5121&&(_e=33321)),C===33319&&(ee===5126&&(_e=33328),ee===5131&&(_e=33327),ee===5121&&(_e=33323)),C===6408&&(ee===5126&&(_e=34836),ee===5131&&(_e=34842),ee===5121&&(_e=de===rt&&pe===!1?35907:32856),ee===32819&&(_e=32854),ee===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function b(I,C,ee){return P(I,ee)===!0||I.isFramebufferTexture&&I.minFilter!==Dt&&I.minFilter!==Ot?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function L(I){return I===Dt||I===xa||I===fs?9728:9729}function G(I){const C=I.target;C.removeEventListener("dispose",G),O(C),C.isVideoTexture&&v.delete(C)}function W(I){const C=I.target;C.removeEventListener("dispose",W),q(C)}function O(I){const C=i.get(I);if(C.__webglInit===void 0)return;const ee=I.source,de=f.get(ee);if(de){const pe=de[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&V(I),Object.keys(de).length===0&&f.delete(ee)}i.remove(I)}function V(I){const C=i.get(I);o.deleteTexture(C.__webglTexture);const ee=I.source,de=f.get(ee);delete de[C.__cacheKey],s.memory.textures--}function q(I){const C=I.texture,ee=i.get(I),de=i.get(C);if(de.__webglTexture!==void 0&&(o.deleteTexture(de.__webglTexture),s.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)o.deleteFramebuffer(ee.__webglFramebuffer[pe]),ee.__webglDepthbuffer&&o.deleteRenderbuffer(ee.__webglDepthbuffer[pe]);else{if(o.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&o.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let pe=0;pe<ee.__webglColorRenderbuffer.length;pe++)ee.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(ee.__webglColorRenderbuffer[pe]);ee.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let pe=0,_e=C.length;pe<_e;pe++){const k=i.get(C[pe]);k.__webglTexture&&(o.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(C[pe])}i.remove(C),i.remove(I)}let H=0;function te(){H=0}function Z(){const I=H;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),H+=1,I}function Q(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.encoding),C.join()}function le(I,C){const ee=i.get(I);if(I.isVideoTexture&&at(I),I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){const de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(ee,I,C);return}}t.bindTexture(3553,ee.__webglTexture,33984+C)}function fe(I,C){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){ye(ee,I,C);return}t.bindTexture(35866,ee.__webglTexture,33984+C)}function ue(I,C){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){ye(ee,I,C);return}t.bindTexture(32879,ee.__webglTexture,33984+C)}function B(I,C){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){Ce(ee,I,C);return}t.bindTexture(34067,ee.__webglTexture,33984+C)}const Y={[xi]:10497,[jt]:33071,[vs]:33648},oe={[Dt]:9728,[xa]:9984,[fs]:9986,[Ot]:9729,[$l]:9985,[Oi]:9987};function $(I,C,ee){if(ee?(o.texParameteri(I,10242,Y[C.wrapS]),o.texParameteri(I,10243,Y[C.wrapT]),(I===32879||I===35866)&&o.texParameteri(I,32882,Y[C.wrapR]),o.texParameteri(I,10240,oe[C.magFilter]),o.texParameteri(I,10241,oe[C.minFilter])):(o.texParameteri(I,10242,33071),o.texParameteri(I,10243,33071),(I===32879||I===35866)&&o.texParameteri(I,32882,33071),(C.wrapS!==jt||C.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(I,10240,L(C.magFilter)),o.texParameteri(I,10241,L(C.minFilter)),C.minFilter!==Dt&&C.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Dt||C.minFilter!==fs&&C.minFilter!==Oi||C.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===An&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(o.texParameterf(I,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function F(I,C){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",G));const de=C.source;let pe=f.get(de);pe===void 0&&(pe={},f.set(de,pe));const _e=Q(C);if(_e!==I.__cacheKey){pe[_e]===void 0&&(pe[_e]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,ee=!0),pe[_e].usedTimes++;const k=pe[I.__cacheKey];k!==void 0&&(pe[I.__cacheKey].usedTimes--,k.usedTimes===0&&V(C)),I.__cacheKey=_e,I.__webglTexture=pe[_e].texture}return ee}function ye(I,C,ee){let de=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(de=35866),C.isData3DTexture&&(de=32879);const pe=F(I,C),_e=C.source;t.bindTexture(de,I.__webglTexture,33984+ee);const k=i.get(_e);if(_e.version!==k.__version||pe===!0){t.activeTexture(33984+ee),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const ae=S(C)&&A(C.image)===!1;let K=M(C.image,ae,!1,h);K=It(C,K);const xe=A(K)||a,Ee=n.convert(C.format,C.encoding);let Le=n.convert(C.type),we=N(C.internalFormat,Ee,Le,C.encoding,C.isVideoTexture);$(de,C,xe);let Se;const He=C.mipmaps,nt=a&&C.isVideoTexture!==!0,xt=k.__version===void 0||pe===!0,z=b(C,K,xe);if(C.isDepthTexture)we=6402,a?C.type===Xi?we=36012:C.type===sr?we=33190:C.type===Yr?we=35056:we=33189:C.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ar&&we===6402&&C.type!==ec&&C.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=sr,Le=n.convert(C.type)),C.format===Qr&&we===6402&&(we=34041,C.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Yr,Le=n.convert(C.type))),xt&&(nt?t.texStorage2D(3553,1,we,K.width,K.height):t.texImage2D(3553,0,we,K.width,K.height,0,Ee,Le,null));else if(C.isDataTexture)if(He.length>0&&xe){nt&&xt&&t.texStorage2D(3553,z,we,He[0].width,He[0].height);for(let re=0,ce=He.length;re<ce;re++)Se=He[re],nt?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ee,Le,Se.data):t.texImage2D(3553,re,we,Se.width,Se.height,0,Ee,Le,Se.data);C.generateMipmaps=!1}else nt?(xt&&t.texStorage2D(3553,z,we,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,Ee,Le,K.data)):t.texImage2D(3553,0,we,K.width,K.height,0,Ee,Le,K.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){nt&&xt&&t.texStorage3D(35866,z,we,He[0].width,He[0].height,K.depth);for(let re=0,ce=He.length;re<ce;re++)Se=He[re],C.format!==ai?Ee!==null?nt?t.compressedTexSubImage3D(35866,re,0,0,0,Se.width,Se.height,K.depth,Ee,Se.data,0,0):t.compressedTexImage3D(35866,re,we,Se.width,Se.height,K.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,re,0,0,0,Se.width,Se.height,K.depth,Ee,Le,Se.data):t.texImage3D(35866,re,we,Se.width,Se.height,K.depth,0,Ee,Le,Se.data)}else{nt&&xt&&t.texStorage2D(3553,z,we,He[0].width,He[0].height);for(let re=0,ce=He.length;re<ce;re++)Se=He[re],C.format!==ai?Ee!==null?nt?t.compressedTexSubImage2D(3553,re,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(3553,re,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ee,Le,Se.data):t.texImage2D(3553,re,we,Se.width,Se.height,0,Ee,Le,Se.data)}else if(C.isDataArrayTexture)nt?(xt&&t.texStorage3D(35866,z,we,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Ee,Le,K.data)):t.texImage3D(35866,0,we,K.width,K.height,K.depth,0,Ee,Le,K.data);else if(C.isData3DTexture)nt?(xt&&t.texStorage3D(32879,z,we,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Ee,Le,K.data)):t.texImage3D(32879,0,we,K.width,K.height,K.depth,0,Ee,Le,K.data);else if(C.isFramebufferTexture){if(xt)if(nt)t.texStorage2D(3553,z,we,K.width,K.height);else{let re=K.width,ce=K.height;for(let Me=0;Me<z;Me++)t.texImage2D(3553,Me,we,re,ce,0,Ee,Le,null),re>>=1,ce>>=1}}else if(He.length>0&&xe){nt&&xt&&t.texStorage2D(3553,z,we,He[0].width,He[0].height);for(let re=0,ce=He.length;re<ce;re++)Se=He[re],nt?t.texSubImage2D(3553,re,0,0,Ee,Le,Se):t.texImage2D(3553,re,we,Ee,Le,Se);C.generateMipmaps=!1}else nt?(xt&&t.texStorage2D(3553,z,we,K.width,K.height),t.texSubImage2D(3553,0,0,0,Ee,Le,K)):t.texImage2D(3553,0,we,Ee,Le,K);P(C,xe)&&D(de),k.__version=_e.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Ce(I,C,ee){if(C.image.length!==6)return;const de=F(I,C),pe=C.source;t.bindTexture(34067,I.__webglTexture,33984+ee);const _e=i.get(pe);if(pe.version!==_e.__version||de===!0){t.activeTexture(33984+ee),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const k=C.isCompressedTexture||C.image[0].isCompressedTexture,ae=C.image[0]&&C.image[0].isDataTexture,K=[];for(let re=0;re<6;re++)!k&&!ae?K[re]=M(C.image[re],!1,!0,l):K[re]=ae?C.image[re].image:C.image[re],K[re]=It(C,K[re]);const xe=K[0],Ee=A(xe)||a,Le=n.convert(C.format,C.encoding),we=n.convert(C.type),Se=N(C.internalFormat,Le,we,C.encoding),He=a&&C.isVideoTexture!==!0,nt=_e.__version===void 0||de===!0;let xt=b(C,xe,Ee);$(34067,C,Ee);let z;if(k){He&&nt&&t.texStorage2D(34067,xt,Se,xe.width,xe.height);for(let re=0;re<6;re++){z=K[re].mipmaps;for(let ce=0;ce<z.length;ce++){const Me=z[ce];C.format!==ai?Le!==null?He?t.compressedTexSubImage2D(34069+re,ce,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(34069+re,ce,Se,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+re,ce,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(34069+re,ce,Se,Me.width,Me.height,0,Le,we,Me.data)}}}else{z=C.mipmaps,He&&nt&&(z.length>0&&xt++,t.texStorage2D(34067,xt,Se,K[0].width,K[0].height));for(let re=0;re<6;re++)if(ae){He?t.texSubImage2D(34069+re,0,0,0,K[re].width,K[re].height,Le,we,K[re].data):t.texImage2D(34069+re,0,Se,K[re].width,K[re].height,0,Le,we,K[re].data);for(let ce=0;ce<z.length;ce++){const Me=z[ce].image[re].image;He?t.texSubImage2D(34069+re,ce+1,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(34069+re,ce+1,Se,Me.width,Me.height,0,Le,we,Me.data)}}else{He?t.texSubImage2D(34069+re,0,0,0,Le,we,K[re]):t.texImage2D(34069+re,0,Se,Le,we,K[re]);for(let ce=0;ce<z.length;ce++){const Me=z[ce];He?t.texSubImage2D(34069+re,ce+1,0,0,Le,we,Me.image[re]):t.texImage2D(34069+re,ce+1,Se,Le,we,Me.image[re])}}}P(C,Ee)&&D(34067),_e.__version=pe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function me(I,C,ee,de,pe){const _e=n.convert(ee.format,ee.encoding),k=n.convert(ee.type),ae=N(ee.internalFormat,_e,k,ee.encoding);i.get(C).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,ae,C.width,C.height,C.depth,0,_e,k,null):t.texImage2D(pe,0,ae,C.width,C.height,0,_e,k,null)),t.bindFramebuffer(36160,I),Qe(C)?d.framebufferTexture2DMultisampleEXT(36160,de,pe,i.get(ee).__webglTexture,0,wt(C)):(pe===3553||pe>=34069&&pe<=34074)&&o.framebufferTexture2D(36160,de,pe,i.get(ee).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(I,C,ee){if(o.bindRenderbuffer(36161,I),C.depthBuffer&&!C.stencilBuffer){let de=33189;if(ee||Qe(C)){const pe=C.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Xi?de=36012:pe.type===sr&&(de=33190));const _e=wt(C);Qe(C)?d.renderbufferStorageMultisampleEXT(36161,_e,de,C.width,C.height):o.renderbufferStorageMultisample(36161,_e,de,C.width,C.height)}else o.renderbufferStorage(36161,de,C.width,C.height);o.framebufferRenderbuffer(36160,36096,36161,I)}else if(C.depthBuffer&&C.stencilBuffer){const de=wt(C);ee&&Qe(C)===!1?o.renderbufferStorageMultisample(36161,de,35056,C.width,C.height):Qe(C)?d.renderbufferStorageMultisampleEXT(36161,de,35056,C.width,C.height):o.renderbufferStorage(36161,34041,C.width,C.height),o.framebufferRenderbuffer(36160,33306,36161,I)}else{const de=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0;pe<de.length;pe++){const _e=de[pe],k=n.convert(_e.format,_e.encoding),ae=n.convert(_e.type),K=N(_e.internalFormat,k,ae,_e.encoding),xe=wt(C);ee&&Qe(C)===!1?o.renderbufferStorageMultisample(36161,xe,K,C.width,C.height):Qe(C)?d.renderbufferStorageMultisampleEXT(36161,xe,K,C.width,C.height):o.renderbufferStorage(36161,K,C.width,C.height)}}o.bindRenderbuffer(36161,null)}function tt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),le(C.depthTexture,0);const ee=i.get(C.depthTexture).__webglTexture,de=wt(C);if(C.depthTexture.format===ar)Qe(C)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,de):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(C.depthTexture.format===Qr)Qe(C)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,de):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const C=i.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");tt(C.__webglFramebuffer,I)}else if(ee){C.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,C.__webglFramebuffer[de]),C.__webglDepthbuffer[de]=o.createRenderbuffer(),De(C.__webglDepthbuffer[de],I,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),De(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function We(I,C,ee){const de=i.get(I);C!==void 0&&me(de.__webglFramebuffer,I,I.texture,36064,3553),ee!==void 0&&Ne(I)}function yt(I){const C=I.texture,ee=i.get(I),de=i.get(C);I.addEventListener("dispose",W),I.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=C.version,s.memory.textures++);const pe=I.isWebGLCubeRenderTarget===!0,_e=I.isWebGLMultipleRenderTargets===!0,k=A(I)||a;if(pe){ee.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)ee.__webglFramebuffer[ae]=o.createFramebuffer()}else{if(ee.__webglFramebuffer=o.createFramebuffer(),_e)if(r.drawBuffers){const ae=I.texture;for(let K=0,xe=ae.length;K<xe;K++){const Ee=i.get(ae[K]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Qe(I)===!1){const ae=_e?C:[C];ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let K=0;K<ae.length;K++){const xe=ae[K];ee.__webglColorRenderbuffer[K]=o.createRenderbuffer(),o.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[K]);const Ee=n.convert(xe.format,xe.encoding),Le=n.convert(xe.type),we=N(xe.internalFormat,Ee,Le,xe.encoding,I.isXRRenderTarget===!0),Se=wt(I);o.renderbufferStorageMultisample(36161,Se,we,I.width,I.height),o.framebufferRenderbuffer(36160,36064+K,36161,ee.__webglColorRenderbuffer[K])}o.bindRenderbuffer(36161,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),De(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,de.__webglTexture),$(34067,C,k);for(let ae=0;ae<6;ae++)me(ee.__webglFramebuffer[ae],I,C,36064,34069+ae);P(C,k)&&D(34067),t.unbindTexture()}else if(_e){const ae=I.texture;for(let K=0,xe=ae.length;K<xe;K++){const Ee=ae[K],Le=i.get(Ee);t.bindTexture(3553,Le.__webglTexture),$(3553,Ee,k),me(ee.__webglFramebuffer,I,Ee,36064+K,3553),P(Ee,k)&&D(3553)}t.unbindTexture()}else{let ae=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?ae=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,de.__webglTexture),$(ae,C,k),me(ee.__webglFramebuffer,I,C,36064,ae),P(C,k)&&D(ae),t.unbindTexture()}I.depthBuffer&&Ne(I)}function ft(I){const C=A(I)||a,ee=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let de=0,pe=ee.length;de<pe;de++){const _e=ee[de];if(P(_e,C)){const k=I.isWebGLCubeRenderTarget?34067:3553,ae=i.get(_e).__webglTexture;t.bindTexture(k,ae),D(k),t.unbindTexture()}}}function Mt(I){if(a&&I.samples>0&&Qe(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ee=I.width,de=I.height;let pe=16384;const _e=[],k=I.stencilBuffer?33306:36096,ae=i.get(I),K=I.isWebGLMultipleRenderTargets===!0;if(K)for(let xe=0;xe<C.length;xe++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),o.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let xe=0;xe<C.length;xe++){_e.push(36064+xe),I.depthBuffer&&_e.push(k);const Ee=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ee===!1&&(I.depthBuffer&&(pe|=256),I.stencilBuffer&&(pe|=1024)),K&&o.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[xe]),Ee===!0&&(o.invalidateFramebuffer(36008,[k]),o.invalidateFramebuffer(36009,[k])),K){const Le=i.get(C[xe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Le,0)}o.blitFramebuffer(0,0,ee,de,0,0,ee,de,pe,9728),m&&o.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let xe=0;xe<C.length;xe++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+xe,36161,ae.__webglColorRenderbuffer[xe]);const Ee=i.get(C[xe]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),o.framebufferTexture2D(36009,36064+xe,3553,Ee,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function wt(I){return Math.min(u,I.samples)}function Qe(I){const C=i.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function at(I){const C=s.render.frame;v.get(I)!==C&&(v.set(I,C),I.update())}function It(I,C){const ee=I.encoding,de=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===wa||ee!==lr&&(ee===rt?a===!1?e.has("EXT_sRGB")===!0&&de===ai?(I.format=wa,I.minFilter=Ot,I.generateMipmaps=!1):C=ac.sRGBToLinear(C):(de!==ai||pe!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),C}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=le,this.setTexture2DArray=fe,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=We,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Qe}function Zf(o,e,t){const i=t.isWebGL2;function r(n,s=null){let a;if(n===or)return 5121;if(n===Th)return 32819;if(n===Ah)return 32820;if(n===Mh)return 5120;if(n===wh)return 5122;if(n===ec)return 5123;if(n===Sh)return 5124;if(n===sr)return 5125;if(n===Xi)return 5126;if(n===An)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===Eh)return 6406;if(n===ai)return 6408;if(n===Ch)return 6409;if(n===Lh)return 6410;if(n===ar)return 6402;if(n===Qr)return 34041;if(n===wa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===Rh)return 6403;if(n===Ih)return 36244;if(n===Nh)return 33319;if(n===Ph)return 33320;if(n===Dh)return 36249;if(n===ks||n===Us||n===Os||n===zs)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===uo||n===po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===uo)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===fo||n===go||n===_o||n===vo||n===yo||n===xo||n===bo||n===Mo||n===wo||n===So||n===To||n===Ao||n===Eo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===mo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Fs)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===Uh||n===Co||n===Lo||n===Ro)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Fs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[n]!==void 0?o[n]:null}return{convert:r}}class Jf extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,i),p=this._getHandJoint(l,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $f extends Ht{constructor(e,t,i,r,n,s,a,c,l,h){if(h=h!==void 0?h:ar,h!==ar&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=sr),i===void 0&&h===Qr&&(i=Yr),super(null,r,n,s,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1}}class eg extends dr{constructor(e,t){super();const i=this;let r=null,n=1,s=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,v=null;const y=t.getContextAttributes();let f=null,p=null;const E=[],M=[],A=new Set,S=new Map,P=new Ft;P.layers.enable(1),P.viewport=new mt;const D=new Ft;D.layers.enable(2),D.viewport=new mt;const N=[P,D],b=new Jf;b.layers.enable(1),b.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=E[B];return Y===void 0&&(Y=new la,E[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=E[B];return Y===void 0&&(Y=new la,E[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=E[B];return Y===void 0&&(Y=new la,E[B]=Y),Y.getHandSpace()};function W(B){const Y=M.indexOf(B.inputSource);if(Y===-1)return;const oe=E[Y];oe!==void 0&&oe.dispatchEvent({type:B.type,data:B.inputSource})}function O(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",V);for(let B=0;B<E.length;B++){const Y=M[B];Y!==null&&(M[B]=null,E[B].disconnect(Y))}L=null,G=null,e.setRenderTarget(f),m=null,d=null,u=null,r=null,p=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){n=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",O),r.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),p=new cr(m.framebufferWidth,m.framebufferHeight,{format:ai,type:or,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let Y=null,oe=null,$=null;y.depth&&($=y.stencil?35056:33190,Y=y.stencil?Qr:ar,oe=y.stencil?Yr:sr);const F={colorFormat:32856,depthFormat:$,scaleFactor:n};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(F),r.updateRenderState({layers:[d]}),p=new cr(d.textureWidth,d.textureHeight,{format:ai,type:or,depthTexture:new $f(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const ye=e.properties.get(p);ye.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function V(B){for(let Y=0;Y<B.removed.length;Y++){const oe=B.removed[Y],$=M.indexOf(oe);$>=0&&(M[$]=null,E[$].disconnect(oe))}for(let Y=0;Y<B.added.length;Y++){const oe=B.added[Y];let $=M.indexOf(oe);if($===-1){for(let ye=0;ye<E.length;ye++)if(ye>=M.length){M.push(oe),$=ye;break}else if(M[ye]===null){M[ye]=oe,$=ye;break}if($===-1)break}const F=E[$];F&&F.connect(oe)}}const q=new U,H=new U;function te(B,Y,oe){q.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const $=q.distanceTo(H),F=Y.projectionMatrix.elements,ye=oe.projectionMatrix.elements,Ce=F[14]/(F[10]-1),me=F[14]/(F[10]+1),De=(F[9]+1)/F[5],tt=(F[9]-1)/F[5],Ne=(F[8]-1)/F[0],We=(ye[8]+1)/ye[0],yt=Ce*Ne,ft=Ce*We,Mt=$/(-Ne+We),wt=Mt*-Ne;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(wt),B.translateZ(Mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Qe=Ce+Mt,at=me+Mt,It=yt-wt,I=ft+($-wt),C=De*me/at*Qe,ee=tt*me/at*Qe;B.projectionMatrix.makePerspective(It,I,C,ee,Qe,at),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Z(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;b.near=D.near=P.near=B.near,b.far=D.far=P.far=B.far,(L!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,G=b.far);const Y=B.parent,oe=b.cameras;Z(b,Y);for(let $=0;$<oe.length;$++)Z(oe[$],Y);oe.length===2?te(b,P,D):b.projectionMatrix.copy(P.projectionMatrix),Q(B,b,Y)};function Q(B,Y,oe){oe===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const $=B.children;for(let F=0,ye=$.length;F<ye;F++)$[F].updateMatrixWorld(!0);B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=en*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return A};let le=null;function fe(B,Y){if(h=Y.getViewerPose(l||s),v=Y,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let $=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,$=!0);for(let F=0;F<oe.length;F++){const ye=oe[F];let Ce=null;if(m!==null)Ce=m.getViewport(ye);else{const De=u.getViewSubImage(d,ye);Ce=De.viewport,F===0&&(e.setRenderTargetTextures(p,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let me=N[F];me===void 0&&(me=new Ft,me.layers.enable(F),me.viewport=new mt,N[F]=me),me.matrix.fromArray(ye.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ye.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),F===0&&(b.matrix.copy(me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),$===!0&&b.cameras.push(me)}}for(let oe=0;oe<E.length;oe++){const $=M[oe],F=E[oe];$!==null&&F!==void 0&&F.update($,Y,l||s)}if(le&&le(B,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let oe=null;for(const $ of A)Y.detectedPlanes.has($)||(oe===null&&(oe=[]),oe.push($));if(oe!==null)for(const $ of oe)A.delete($),S.delete($),i.dispatchEvent({type:"planeremoved",data:$});for(const $ of Y.detectedPlanes)if(!A.has($))A.add($),S.set($,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:$});else{const F=S.get($);$.lastChangedTime>F&&(S.set($,$.lastChangedTime),i.dispatchEvent({type:"planechanged",data:$}))}}v=null}const ue=new gc;ue.setAnimationLoop(fe),this.setAnimationLoop=function(B){le=B},this.dispose=function(){}}}function tg(o,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,pc(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,E,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(f,p):p.isMeshToonMaterial?(n(f,p),u(f,p)):p.isMeshPhongMaterial?(n(f,p),h(f,p)):p.isMeshStandardMaterial?(n(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(n(f,p),v(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),y(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,E,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const M=o.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,E,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){const E=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ig(o,e,t,i){let r={},n={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function c(E,M){const A=M.program;i.uniformBlockBinding(E,A)}function l(E,M){let A=r[E.id];A===void 0&&(v(E),A=h(E),r[E.id]=A,E.addEventListener("dispose",f));const S=M.program;i.updateUBOMapping(E,S);const P=e.render.frame;n[E.id]!==P&&(d(E),n[E.id]=P)}function h(E){const M=u();E.__bindingPointIndex=M;const A=o.createBuffer(),S=E.__size,P=E.usage;return o.bindBuffer(35345,A),o.bufferData(35345,S,P),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,A),A}function u(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=r[E.id],A=E.uniforms,S=E.__cache;o.bindBuffer(35345,M);for(let P=0,D=A.length;P<D;P++){const N=A[P];if(m(N,P,S)===!0){const b=N.__offset,L=Array.isArray(N.value)?N.value:[N.value];let G=0;for(let W=0;W<L.length;W++){const O=L[W],V=y(O);typeof O=="number"?(N.__data[0]=O,o.bufferSubData(35345,b+G,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=O.elements[0],N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=O.elements[0],N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=O.elements[0]):(O.toArray(N.__data,G),G+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,b,N.__data)}}o.bindBuffer(35345,null)}function m(E,M,A){const S=E.value;if(A[M]===void 0){if(typeof S=="number")A[M]=S;else{const P=Array.isArray(S)?S:[S],D=[];for(let N=0;N<P.length;N++)D.push(P[N].clone());A[M]=D}return!0}else if(typeof S=="number"){if(A[M]!==S)return A[M]=S,!0}else{const P=Array.isArray(A[M])?A[M]:[A[M]],D=Array.isArray(S)?S:[S];for(let N=0;N<P.length;N++){const b=P[N];if(b.equals(D[N])===!1)return b.copy(D[N]),!0}}return!1}function v(E){const M=E.uniforms;let A=0;const S=16;let P=0;for(let D=0,N=M.length;D<N;D++){const b=M[D],L={boundary:0,storage:0},G=Array.isArray(b.value)?b.value:[b.value];for(let W=0,O=G.length;W<O;W++){const V=G[W],q=y(V);L.boundary+=q.boundary,L.storage+=q.storage}if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=A,D>0){P=A%S;const W=S-P;P!==0&&W-L.boundary<0&&(A+=S-P,b.__offset=A)}A+=L.storage}return P=A%S,P>0&&(A+=S-P),E.__size=A,E.__cache={},this}function y(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const A=s.indexOf(M.__bindingPointIndex);s.splice(A,1),o.deleteBuffer(r[M.id]),delete r[M.id],delete n[M.id]}function p(){for(const E in r)o.deleteBuffer(r[E]);s=[],r={},n={}}return{bind:c,update:l,dispose:p}}function rg(){const o=Cn("canvas");return o.style.display="block",o}class bc{constructor(e={}){const{canvas:t=rg(),context:i=null,depth:r=!0,stencil:n=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;let m=null,v=null;const y=[],f=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.useLegacyLights=!0,this.toneMapping=Ui,this.toneMappingExposure=1;const p=this;let E=!1,M=0,A=0,S=null,P=-1,D=null;const N=new mt,b=new mt;let L=null,G=t.width,W=t.height,O=1,V=null,q=null;const H=new mt(0,0,G,W),te=new mt(0,0,G,W);let Z=!1;const Q=new ka;let le=!1,fe=!1,ue=null;const B=new je,Y=new U,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $(){return S===null?O:1}let F=i;function ye(R,X){for(let ie=0;ie<R.length;ie++){const j=R[ie],ne=t.getContext(j,X);if(ne!==null)return ne}return null}try{const R={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",nt,!1),F===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),F=ye(X,R),F===null)throw ye(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ce,me,De,tt,Ne,We,yt,ft,Mt,wt,Qe,at,It,I,C,ee,de,pe,_e,k,ae,K,xe,Ee;function Le(){Ce=new pm(F),me=new om(F,Ce,e),Ce.init(me),K=new Zf(F,Ce,me),De=new Xf(F,Ce,me),tt=new gm,Ne=new Df,We=new Kf(F,Ce,De,Ne,me,K,tt),yt=new cm(p),ft=new dm(p),Mt=new Cu(F,me),xe=new sm(F,Ce,Mt,me),wt=new mm(F,Mt,tt,xe),Qe=new xm(F,wt,Mt,tt),_e=new ym(F,me,We),ee=new lm(Ne),at=new Pf(p,yt,ft,Ce,me,xe,ee),It=new tg(p,Ne),I=new Uf,C=new Gf(Ce,me),pe=new nm(p,yt,ft,De,Qe,d,c),de=new Yf(p,Qe,me),Ee=new ig(F,tt,me,De),k=new am(F,Ce,tt,me),ae=new fm(F,Ce,tt,me),tt.programs=at.programs,p.capabilities=me,p.extensions=Ce,p.properties=Ne,p.renderLists=I,p.shadowMap=de,p.state=De,p.info=tt}Le();const we=new eg(p,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(G,W,!1))},this.getSize=function(R){return R.set(G,W)},this.setSize=function(R,X,ie=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,W=X,t.width=Math.floor(R*O),t.height=Math.floor(X*O),ie===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(G*O,W*O).floor()},this.setDrawingBufferSize=function(R,X,ie){G=R,W=X,O=ie,t.width=Math.floor(R*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,X,ie,j){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,X,ie,j),De.viewport(N.copy(H).multiplyScalar(O).floor())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,X,ie,j){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,X,ie,j),De.scissor(b.copy(te).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(R){De.setScissorTest(Z=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R=!0,X=!0,ie=!0){let j=0;R&&(j|=16384),X&&(j|=256),ie&&(j|=1024),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),I.dispose(),C.dispose(),Ne.dispose(),yt.dispose(),ft.dispose(),Qe.dispose(),xe.dispose(),Ee.dispose(),at.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ue),we.removeEventListener("sessionend",ut),ue&&(ue.dispose(),ue=null),vt.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=tt.autoReset,X=de.enabled,ie=de.autoUpdate,j=de.needsUpdate,ne=de.type;Le(),tt.autoReset=R,de.enabled=X,de.autoUpdate=ie,de.needsUpdate=j,de.type=ne}function nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const X=R.target;X.removeEventListener("dispose",xt),z(X)}function z(R){re(R),Ne.remove(R)}function re(R){const X=Ne.get(R).programs;X!==void 0&&(X.forEach(function(ie){at.releaseProgram(ie)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ie,j,ne,Re){X===null&&(X=oe);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,Ge=Ls(R,X,ie,j,ne);De.setMaterial(j,ze);let qe=ie.index,$e=1;j.wireframe===!0&&(qe=wt.getWireframeAttribute(ie),$e=2);const Ke=ie.drawRange,Xe=ie.attributes.position;let gt=Ke.start*$e,ot=(Ke.start+Ke.count)*$e;Re!==null&&(gt=Math.max(gt,Re.start*$e),ot=Math.min(ot,(Re.start+Re.count)*$e)),qe!==null?(gt=Math.max(gt,0),ot=Math.min(ot,qe.count)):Xe!=null&&(gt=Math.max(gt,0),ot=Math.min(ot,Xe.count));const Nt=ot-gt;if(Nt<0||Nt===1/0)return;xe.setup(ne,j,Ge,ie,qe);let ci,St=k;if(qe!==null&&(ci=Mt.get(qe),St=ae,St.setIndex(ci)),ne.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*$()),St.setMode(1)):St.setMode(4);else if(ne.isLine){let Ze=j.linewidth;Ze===void 0&&(Ze=1),De.setLineWidth(Ze*$()),ne.isLineSegments?St.setMode(1):ne.isLineLoop?St.setMode(2):St.setMode(3)}else ne.isPoints?St.setMode(0):ne.isSprite&&St.setMode(4);if(ne.isInstancedMesh)St.renderInstances(gt,Nt,ne.count);else if(ie.isInstancedBufferGeometry){const Ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,_r=Math.min(ie.instanceCount,Ze);St.renderInstances(gt,Nt,_r)}else St.render(gt,Nt)},this.compile=function(R,X){function ie(j,ne,Re){j.transparent===!0&&j.side===mi&&j.forceSinglePass===!1?(j.side=Qt,j.needsUpdate=!0,gr(j,ne,Re),j.side=bi,j.needsUpdate=!0,gr(j,ne,Re),j.side=mi):gr(j,ne,Re)}v=C.get(R),v.init(),f.push(v),R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights(p.useLegacyLights),R.traverse(function(j){const ne=j.material;if(ne)if(Array.isArray(ne))for(let Re=0;Re<ne.length;Re++){const ze=ne[Re];ie(ze,R,j)}else ie(ne,R,j)}),f.pop(),v=null};let ce=null;function Me(R){ce&&ce(R)}function Ue(){vt.stop()}function ut(){vt.start()}const vt=new gc;vt.setAnimationLoop(Me),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(R){ce=R,we.setAnimationLoop(R),R===null?vt.stop():vt.start()},we.addEventListener("sessionstart",Ue),we.addEventListener("sessionend",ut),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,X,S),v=C.get(R,f.length),v.init(),f.push(v),B.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(B),fe=this.localClippingEnabled,le=ee.init(this.clippingPlanes,fe),m=I.get(R,y.length),m.init(),y.push(m),Et(R,X,0,p.sortObjects),m.finish(),p.sortObjects===!0&&m.sort(V,q),le===!0&&ee.beginShadows();const ie=v.state.shadowsArray;if(de.render(ie,R,X),le===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(m,R),v.setupLights(p.useLegacyLights),X.isArrayCamera){const j=X.cameras;for(let ne=0,Re=j.length;ne<Re;ne++){const ze=j[ne];gi(m,R,ze,ze.viewport)}}else gi(m,R,X);S!==null&&(We.updateMultisampleRenderTarget(S),We.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(p,R,X),xe.resetDefaultState(),P=-1,D=null,f.pop(),f.length>0?v=f[f.length-1]:v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Et(R,X,ie,j){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){j&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(B);const Re=Qe.update(R),ze=R.material;ze.visible&&m.push(R,Re,ze,ie,Y.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==tt.render.frame&&(R.skeleton.update(),R.skeleton.frame=tt.render.frame),!R.frustumCulled||Q.intersectsObject(R))){j&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(B);const Re=Qe.update(R),ze=R.material;if(Array.isArray(ze)){const Ge=Re.groups;for(let qe=0,$e=Ge.length;qe<$e;qe++){const Ke=Ge[qe],Xe=ze[Ke.materialIndex];Xe&&Xe.visible&&m.push(R,Re,Xe,ie,Y.z,Ke)}}else ze.visible&&m.push(R,Re,ze,ie,Y.z,null)}}const ne=R.children;for(let Re=0,ze=ne.length;Re<ze;Re++)Et(ne[Re],X,ie,j)}function gi(R,X,ie,j){const ne=R.opaque,Re=R.transmissive,ze=R.transparent;v.setupLightsView(ie),le===!0&&ee.setGlobalState(p.clippingPlanes,ie),Re.length>0&&it(ne,Re,X,ie),j&&De.viewport(N.copy(j)),ne.length>0&&qt(ne,X,ie),Re.length>0&&qt(Re,X,ie),ze.length>0&&qt(ze,X,ie),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function it(R,X,ie,j){if(ue===null){const Ge=me.isWebGL2;ue=new cr(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?An:or,minFilter:Oi,samples:Ge&&a===!0?4:0})}const ne=p.getRenderTarget();p.setRenderTarget(ue),p.clear();const Re=p.toneMapping;p.toneMapping=Ui,qt(R,ie,j),We.updateMultisampleRenderTarget(ue),We.updateRenderTargetMipmap(ue);let ze=!1;for(let Ge=0,qe=X.length;Ge<qe;Ge++){const $e=X[Ge],Ke=$e.object,Xe=$e.geometry,gt=$e.material,ot=$e.group;if(gt.side===mi&&Ke.layers.test(j.layers)){const Nt=gt.side;gt.side=Qt,gt.needsUpdate=!0,ii(Ke,ie,j,Xe,gt,ot),gt.side=Nt,gt.needsUpdate=!0,ze=!0}}ze===!0&&(We.updateMultisampleRenderTarget(ue),We.updateRenderTargetMipmap(ue)),p.setRenderTarget(ne),p.toneMapping=Re}function qt(R,X,ie){const j=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Re=R.length;ne<Re;ne++){const ze=R[ne],Ge=ze.object,qe=ze.geometry,$e=j===null?ze.material:j,Ke=ze.group;Ge.layers.test(ie.layers)&&ii(Ge,X,ie,qe,$e,Ke)}}function ii(R,X,ie,j,ne,Re){R.onBeforeRender(p,X,ie,j,ne,Re),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(p,X,ie,j,R,Re),ne.transparent===!0&&ne.side===mi&&ne.forceSinglePass===!1?(ne.side=Qt,ne.needsUpdate=!0,p.renderBufferDirect(ie,X,j,ne,R,Re),ne.side=bi,ne.needsUpdate=!0,p.renderBufferDirect(ie,X,j,ne,R,Re),ne.side=mi):p.renderBufferDirect(ie,X,j,ne,R,Re),R.onAfterRender(p,X,ie,j,ne,Re)}function gr(R,X,ie){X.isScene!==!0&&(X=oe);const j=Ne.get(R),ne=v.state.lights,Re=v.state.shadowsArray,ze=ne.state.version,Ge=at.getParameters(R,ne.state,Re,X,ie),qe=at.getProgramCacheKey(Ge);let $e=j.programs;j.environment=R.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(R.isMeshStandardMaterial?ft:yt).get(R.envMap||j.environment),$e===void 0&&(R.addEventListener("dispose",xt),$e=new Map,j.programs=$e);let Ke=$e.get(qe);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===ze)return On(R,Ge),Ke}else Ge.uniforms=at.getUniforms(R),R.onBuild(ie,Ge,p),R.onBeforeCompile(Ge,p),Ke=at.acquireProgram(Ge,qe),$e.set(qe,Ke),j.uniforms=Ge.uniforms;const Xe=j.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=ee.uniform),On(R,Ge),j.needsLights=Is(R),j.lightsStateVersion=ze,j.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.directionalShadowMap.value=ne.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotShadowMap.value=ne.state.spotShadowMap,Xe.spotLightMatrix.value=ne.state.spotLightMatrix,Xe.spotLightMap.value=ne.state.spotLightMap,Xe.pointShadowMap.value=ne.state.pointShadowMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const gt=Ke.getUniforms(),ot=gs.seqWithValue(gt.seq,Xe);return j.currentProgram=Ke,j.uniformsList=ot,Ke}function On(R,X){const ie=Ne.get(R);ie.outputEncoding=X.outputEncoding,ie.instancing=X.instancing,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Ls(R,X,ie,j,ne){X.isScene!==!0&&(X=oe),We.resetTextureUnits();const Re=X.fog,ze=j.isMeshStandardMaterial?X.environment:null,Ge=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:lr,qe=(j.isMeshStandardMaterial?ft:yt).get(j.envMap||ze),$e=j.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ke=!!j.normalMap&&!!ie.attributes.tangent,Xe=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,ot=!!ie.morphAttributes.color,Nt=j.toneMapped?p.toneMapping:Ui,ci=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,St=ci!==void 0?ci.length:0,Ze=Ne.get(j),_r=v.state.lights;if(le===!0&&(fe===!0||R!==D)){const Yt=R===D&&j.id===P;ee.setState(j,R,Yt)}let un=!1;j.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==_r.state.version||Ze.outputEncoding!==Ge||ne.isInstancedMesh&&Ze.instancing===!1||!ne.isInstancedMesh&&Ze.instancing===!0||ne.isSkinnedMesh&&Ze.skinning===!1||!ne.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==qe||j.fog===!0&&Ze.fog!==Re||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ee.numPlanes||Ze.numIntersection!==ee.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ke||Ze.morphTargets!==Xe||Ze.morphNormals!==gt||Ze.morphColors!==ot||Ze.toneMapping!==Nt||me.isWebGL2===!0&&Ze.morphTargetsCount!==St)&&(un=!0):(un=!0,Ze.__version=j.version);let Si=Ze.currentProgram;un===!0&&(Si=gr(j,X,ne));let zn=!1,Bi=!1,vr=!1;const Tt=Si.getUniforms(),Ti=Ze.uniforms;if(De.useProgram(Si.program)&&(zn=!0,Bi=!0,vr=!0),j.id!==P&&(P=j.id,Bi=!0),zn||D!==R){if(Tt.setValue(F,"projectionMatrix",R.projectionMatrix),me.logarithmicDepthBuffer&&Tt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),D!==R&&(D=R,Bi=!0,vr=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Yt=Tt.map.cameraPosition;Yt!==void 0&&Yt.setValue(F,Y.setFromMatrixPosition(R.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ne.isSkinnedMesh)&&Tt.setValue(F,"viewMatrix",R.matrixWorldInverse)}if(ne.isSkinnedMesh){Tt.setOptional(F,ne,"bindMatrix"),Tt.setOptional(F,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(me.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Tt.setValue(F,"boneTexture",Yt.boneTexture,We),Tt.setValue(F,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=ie.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&me.isWebGL2===!0)&&_e.update(ne,ie,Si),(Bi||Ze.receiveShadow!==ne.receiveShadow)&&(Ze.receiveShadow=ne.receiveShadow,Tt.setValue(F,"receiveShadow",ne.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ti.envMap.value=qe,Ti.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Bi&&(Tt.setValue(F,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&Rs(Ti,vr),Re&&j.fog===!0&&It.refreshFogUniforms(Ti,Re),It.refreshMaterialUniforms(Ti,j,O,W,ue),gs.upload(F,Ze.uniformsList,Ti,We)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gs.upload(F,Ze.uniformsList,Ti,We),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(F,"center",ne.center),Tt.setValue(F,"modelViewMatrix",ne.modelViewMatrix),Tt.setValue(F,"normalMatrix",ne.normalMatrix),Tt.setValue(F,"modelMatrix",ne.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Yt=j.uniformsGroups;for(let xr=0,Ns=Yt.length;xr<Ns;xr++)if(me.isWebGL2){const Fn=Yt[xr];Ee.update(Fn,Si),Ee.bind(Fn,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Rs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Is(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,X,ie){Ne.get(R.texture).__webglTexture=X,Ne.get(R.depthTexture).__webglTexture=ie;const j=Ne.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=ie===void 0,j.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const ie=Ne.get(R);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ie=0){S=R,M=X,A=ie;let j=!0,ne=null,Re=!1,ze=!1;if(R){const Ge=Ne.get(R);Ge.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(36160,null),j=!1):Ge.__webglFramebuffer===void 0?We.setupRenderTarget(R):Ge.__hasExternalTextures&&We.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const $e=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ne=$e[X],Re=!0):me.isWebGL2&&R.samples>0&&We.useMultisampledRTT(R)===!1?ne=Ne.get(R).__webglMultisampledFramebuffer:ne=$e,N.copy(R.viewport),b.copy(R.scissor),L=R.scissorTest}else N.copy(H).multiplyScalar(O).floor(),b.copy(te).multiplyScalar(O).floor(),L=Z;if(De.bindFramebuffer(36160,ne)&&me.drawBuffers&&j&&De.drawBuffers(R,ne),De.viewport(N),De.scissor(b),De.setScissorTest(L),Re){const Ge=Ne.get(R.texture);F.framebufferTexture2D(36160,36064,34069+X,Ge.__webglTexture,ie)}else if(ze){const Ge=Ne.get(R.texture),qe=X||0;F.framebufferTextureLayer(36160,36064,Ge.__webglTexture,ie||0,qe)}P=-1},this.readRenderTargetPixels=function(R,X,ie,j,ne,Re,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){De.bindFramebuffer(36160,Ge);try{const qe=R.texture,$e=qe.format,Ke=qe.type;if($e!==ai&&K.convert($e)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ke===An&&(Ce.has("EXT_color_buffer_half_float")||me.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ke!==or&&K.convert(Ke)!==F.getParameter(35738)&&!(Ke===Xi&&(me.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-j&&ie>=0&&ie<=R.height-ne&&F.readPixels(X,ie,j,ne,K.convert($e),K.convert(Ke),Re)}finally{const qe=S!==null?Ne.get(S).__webglFramebuffer:null;De.bindFramebuffer(36160,qe)}}},this.copyFramebufferToTexture=function(R,X,ie=0){const j=Math.pow(2,-ie),ne=Math.floor(X.image.width*j),Re=Math.floor(X.image.height*j);We.setTexture2D(X,0),F.copyTexSubImage2D(3553,ie,0,0,R.x,R.y,ne,Re),De.unbindTexture()},this.copyTextureToTexture=function(R,X,ie,j=0){const ne=X.image.width,Re=X.image.height,ze=K.convert(ie.format),Ge=K.convert(ie.type);We.setTexture2D(ie,0),F.pixelStorei(37440,ie.flipY),F.pixelStorei(37441,ie.premultiplyAlpha),F.pixelStorei(3317,ie.unpackAlignment),X.isDataTexture?F.texSubImage2D(3553,j,R.x,R.y,ne,Re,ze,Ge,X.image.data):X.isCompressedTexture?F.compressedTexSubImage2D(3553,j,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,ze,X.mipmaps[0].data):F.texSubImage2D(3553,j,R.x,R.y,ze,Ge,X.image),j===0&&ie.generateMipmaps&&F.generateMipmap(3553),De.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ie,j,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=R.max.x-R.min.x+1,ze=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,qe=K.convert(j.format),$e=K.convert(j.type);let Ke;if(j.isData3DTexture)We.setTexture3D(j,0),Ke=32879;else if(j.isDataArrayTexture)We.setTexture2DArray(j,0),Ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,j.flipY),F.pixelStorei(37441,j.premultiplyAlpha),F.pixelStorei(3317,j.unpackAlignment);const Xe=F.getParameter(3314),gt=F.getParameter(32878),ot=F.getParameter(3316),Nt=F.getParameter(3315),ci=F.getParameter(32877),St=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;F.pixelStorei(3314,St.width),F.pixelStorei(32878,St.height),F.pixelStorei(3316,R.min.x),F.pixelStorei(3315,R.min.y),F.pixelStorei(32877,R.min.z),ie.isDataTexture||ie.isData3DTexture?F.texSubImage3D(Ke,ne,X.x,X.y,X.z,Re,ze,Ge,qe,$e,St.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ke,ne,X.x,X.y,X.z,Re,ze,Ge,qe,St.data)):F.texSubImage3D(Ke,ne,X.x,X.y,X.z,Re,ze,Ge,qe,$e,St),F.pixelStorei(3314,Xe),F.pixelStorei(32878,gt),F.pixelStorei(3316,ot),F.pixelStorei(3315,Nt),F.pixelStorei(32877,ci),ne===0&&j.generateMipmaps&&F.generateMipmap(Ke),De.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?We.setTextureCube(R,0):R.isData3DTexture?We.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?We.setTexture2DArray(R,0):We.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){M=0,A=0,S=null,De.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class ng extends bc{}ng.prototype.isWebGL1Renderer=!0;class Mc extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class sg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ma,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new U;class za{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vl=new U,yl=new mt,xl=new mt,ag=new U,bl=new je,Br=new U;class wc extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Br.fromBufferAttribute(t,i),this.applyBoneTransform(i,Br),this.boundingBox.expandByPoint(Br)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Br.fromBufferAttribute(t,i),this.applyBoneTransform(i,Br),this.boundingSphere.expandByPoint(Br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;yl.fromBufferAttribute(r.attributes.skinIndex,e),xl.fromBufferAttribute(r.attributes.skinWeight,e),vl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const s=xl.getComponent(n);if(s!==0){const a=yl.getComponent(n);bl.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ag.copy(vl).applyMatrix4(bl),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Fa extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sc extends Ht{constructor(e=null,t=1,i=1,r,n,s,a,c,l=Dt,h=Dt,u,d){super(null,s,a,c,l,h,r,n,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ml=new je,og=new je;class Es{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,s=e.length;n<s;n++){const a=e[n]?e[n].matrixWorld:og;Ml.multiplyMatrices(a,t[n]),Ml.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Es(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=rc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Sc(t,e,e,ai,Xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let s=t[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Fa),this.bones.push(s),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const s=t[r];e.bones.push(s.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class wl extends Ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new je,Sl=new je,cs=[],Tl=new zi,lg=new je,gn=new kt,_n=new Fi;class cg extends kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Tl.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),_n.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(_n)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(gn.geometry=this.geometry,gn.material=this.material,gn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_n.copy(this.boundingSphere),_n.applyMatrix4(i),e.ray.intersectsSphere(_n)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Hr),Sl.multiplyMatrices(i,Hr),gn.matrixWorld=Sl,gn.raycast(e,cs);for(let s=0,a=cs.length;s<a;s++){const c=cs[s];c.instanceId=n,c.object=this,t.push(c)}cs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new U,El=new U,Cl=new je,ca=new Da,hs=new Fi;class Cs extends _t{constructor(e=new Zt,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Al.fromBufferAttribute(t,r-1),El.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Al.distanceTo(El);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),hs.radius+=n,e.ray.intersectsSphere(hs)===!1)return;Cl.copy(r).invert(),ca.copy(e.ray).applyMatrix4(Cl);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,v=i.index,y=i.attributes.position;if(v!==null){const f=Math.max(0,s.start),p=Math.min(v.count,s.start+s.count);for(let E=f,M=p-1;E<M;E+=m){const A=v.getX(E),S=v.getX(E+1);if(l.fromBufferAttribute(y,A),h.fromBufferAttribute(y,S),ca.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),p=Math.min(y.count,s.start+s.count);for(let E=f,M=p-1;E<M;E+=m){if(l.fromBufferAttribute(y,E),h.fromBufferAttribute(y,E+1),ca.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const Ll=new U,Rl=new U;class Tc extends Cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)Ll.fromBufferAttribute(t,r),Rl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ll.distanceTo(Rl);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hg extends Cs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ac extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new je,Aa=new Da,us=new Fi,ds=new U;class ug extends _t{constructor(e=new Zt,t=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(r),us.radius+=n,e.ray.intersectsSphere(us)===!1)return;Il.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(Il);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let m=u,v=d;m<v;m++){const y=l.getX(m);ds.fromBufferAttribute(h,y),Nl(ds,y,c,r,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let m=u,v=d;m<v;m++)ds.fromBufferAttribute(h,m),Nl(ds,m,c,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Nl(o,e,t,i,r,n,s){const a=Aa.distanceSqToPoint(o);if(a<t){const c=new U;Aa.closestPointToPoint(o,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;n.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:s})}}class Ba extends Zt{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),n=Math.floor(n);const h=[],u=[],d=[],m=[];let v=0;const y=[],f=i/2;let p=0;E(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function E(){const A=new U,S=new U;let P=0;const D=(t-e)/i;for(let N=0;N<=n;N++){const b=[],L=N/n,G=L*(t-e)+e;for(let W=0;W<=r;W++){const O=W/r,V=O*c+a,q=Math.sin(V),H=Math.cos(V);S.x=G*q,S.y=-L*i+f,S.z=G*H,u.push(S.x,S.y,S.z),A.set(q,D,H).normalize(),d.push(A.x,A.y,A.z),m.push(O,1-L),b.push(v++)}y.push(b)}for(let N=0;N<r;N++)for(let b=0;b<n;b++){const L=y[b][N],G=y[b+1][N],W=y[b+1][N+1],O=y[b][N+1];h.push(L,G,O),h.push(G,W,O),P+=6}l.addGroup(p,P,0),p+=P}function M(A){const S=v,P=new Ve,D=new U;let N=0;const b=A===!0?e:t,L=A===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,f*L,0),d.push(0,L,0),m.push(.5,.5),v++;const G=v;for(let W=0;W<=r;W++){const O=W/r*c+a,V=Math.cos(O),q=Math.sin(O);D.x=b*q,D.y=f*L,D.z=b*V,u.push(D.x,D.y,D.z),d.push(0,L,0),P.x=V*.5+.5,P.y=q*.5*L+.5,m.push(P.x,P.y),v++}for(let W=0;W<r;W++){const O=S+W,V=G+W;A===!0?h.push(V,V+1,O):h.push(V+1,V,O),N+=3}l.addGroup(p,N,A===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ha extends Zt{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const h=[],u=new U,d=new U,m=[],v=[],y=[],f=[];for(let p=0;p<=i;p++){const E=[],M=p/i;let A=0;p===0&&s===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let S=0;S<=t;S++){const P=S/t;u.x=-e*Math.cos(r+P*n)*Math.sin(s+M*a),u.y=e*Math.cos(s+M*a),u.z=e*Math.sin(r+P*n)*Math.sin(s+M*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(P+A,1-M),E.push(l++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const M=h[p][E+1],A=h[p][E],S=h[p+1][E],P=h[p+1][E+1];(p!==0||s>0)&&m.push(M,A,P),(p!==i-1||c<Math.PI)&&m.push(A,S,P)}this.setIndex(m),this.setAttribute("position",new bt(v,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pn extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ws,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tn extends oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ws,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dg extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ws,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Wi(o,e,t){return Ec(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function ps(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Ec(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function pg(o){function e(r,n){return o[r]-o[n]}const t=o.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Pl(o,e,t){const i=o.length,r=new o.constructor(i);for(let n=0,s=0;s!==i;++n){const a=t[n]*e;for(let c=0;c!==e;++c)r[s++]=o[a+c]}return r}function Cc(o,e,t,i){let r=1,n=o[0];for(;n!==void 0&&n[i]===void 0;)n=o[r++];if(n===void 0)return;let s=n[i];if(s!==void 0)if(Array.isArray(s))do s=n[i],s!==void 0&&(e.push(n.time),t.push.apply(t,s)),n=o[r++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[i],s!==void 0&&(e.push(n.time),s.toArray(t,t.length)),n=o[r++];while(n!==void 0);else do s=n[i],s!==void 0&&(e.push(n.time),t.push(s)),n=o[r++];while(n!==void 0)}class Dn{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){const a=t[1];e<a&&(i=2,n=a);for(let c=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mg extends Dn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,s=e+1,a=r[n],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case No:n=e,a=2*t-i;break;case Po:n=r.length-2,a=t+r[n]-r[n+1];break;default:n=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case No:s=e,c=2*i-t;break;case Po:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(i-t)/(r-t),y=v*v,f=y*v,p=-d*f+2*d*y-d*v,E=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*v+1,M=(-1-m)*f+(1.5+m)*y+.5*v,A=m*f-m*y;for(let S=0;S!==a;++S)n[S]=p*s[h+S]+E*s[l+S]+M*s[c+S]+A*s[u+S];return n}}class fg extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)n[d]=s[l+d]*u+s[c+d]*h;return n}}class gg extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ps(t,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ps(e.times,Array),values:ps(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case En:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case Bs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return En;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return Bs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,s=r-1;for(;n!==r&&i[n]<e;)++n;for(;s!==-1&&i[s]>t;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);const a=this.getValueSize();this.times=Wi(i,n,s),this.values=Wi(this.values,n*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==n;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&Ec(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Wi(this.times),t=Wi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Bs,n=e.length-1;let s=1;for(let a=1;a<n;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{const u=a*i,d=u-i,m=u+i;for(let v=0;v!==i;++v){const y=t[u+v];if(y!==t[d+v]||y!==t[m+v]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];const u=a*i,d=s*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++s}}if(n>0){e[s]=e[n];for(let a=n*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=Wi(e,0,s),this.values=Wi(t,0,s*i)):(this.times=e,this.values=t),this}clone(){const e=Wi(this.times,0),t=Wi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=$r;class ln extends Mi{}ln.prototype.ValueTypeName="bool";ln.prototype.ValueBufferType=Array;ln.prototype.DefaultInterpolation=En;ln.prototype.InterpolantFactoryMethodLinear=void 0;ln.prototype.InterpolantFactoryMethodSmooth=void 0;class Lc extends Mi{}Lc.prototype.ValueTypeName="color";class Ln extends Mi{}Ln.prototype.ValueTypeName="number";class _g extends Dn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Wt.slerpFlat(n,0,s,l-a,s,l,c);return n}}class Zi extends Mi{InterpolantFactoryMethodLinear(e){return new _g(this.times,this.values,this.getValueSize(),e)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.DefaultInterpolation=$r;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class cn extends Mi{}cn.prototype.ValueTypeName="string";cn.prototype.ValueBufferType=Array;cn.prototype.DefaultInterpolation=En;cn.prototype.InterpolantFactoryMethodLinear=void 0;cn.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Mi{}ur.prototype.ValueTypeName="vector";class Ea{constructor(e,t=-1,i,r=Oh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(yg(i[s]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,s=i.length;n!==s;++n)t.push(Mi.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,s=[];for(let a=0;a<n;a++){let c=[],l=[];c.push((a+n-1)%n,a,(a+1)%n),l.push(0,1,0);const h=pg(c);c=Pl(c,1,h),l=Pl(l,1,h),!r&&c[0]===0&&(c.push(n),l.push(l[0])),s.push(new Ln(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(n);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(l)}}const s=[];for(const a in r)s.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,m,v){if(d.length!==0){const y=[],f=[];Cc(d,y,f,m),y.length!==0&&v.push(new h(u,y,f))}},r=[],n=e.name||"default",s=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let v=0;v<u[m].morphTargets.length;v++)d[u[m].morphTargets[v]]=-1;for(const v in d){const y=[],f=[];for(let p=0;p!==u[m].morphTargets.length;++p){const E=u[m];y.push(E.time),f.push(E.morphTarget===v?1:0)}r.push(new Ln(".morphTargetInfluence["+v+"]",y,f))}c=d.length*s}else{const d=".bones["+t[h].name+"]";i(ur,d+".position",u,"pos",r),i(Zi,d+".quaternion",u,"rot",r),i(ur,d+".scale",u,"scl",r)}}return r.length===0?null:new this(n,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ln;case"vector":case"vector2":case"vector3":case"vector4":return ur;case"color":return Lc;case"quaternion":return Zi;case"bool":case"boolean":return ln;case"string":return cn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function yg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vg(o.type);if(o.times===void 0){const t=[],i=[];Cc(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const rn={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Rc{constructor(e,t,i){const r=this;let n=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,a),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const Ic=new Rc;class Ji{constructor(e){this.manager=e!==void 0?e:Ic,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Pi={};class xg extends Error{constructor(e,t){super(e),this.response=t}}class kn extends Ji{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=rn.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:i,onError:r});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Pi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,v=m!==0;let y=0;const f=new ReadableStream({start(p){E();function E(){u.read().then(({done:M,value:A})=>{if(M)p.close();else{y+=A.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:m});for(let P=0,D=h.length;P<D;P++){const N=h[P];N.onProgress&&N.onProgress(S)}p.enqueue(A),E()}})}}});return new Response(f)}else throw new xg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{rn.add(e,l);const h=Pi[e];delete Pi[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Pi[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bg extends Ji{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=rn.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const a=Cn("img");function c(){h(),rn.add(e,this),t&&t(this),n.manager.itemEnd(e)}function l(u){h(),r&&r(u),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class Mg extends Ji{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new Sc,a=new kn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(n.withCredentials),a.load(e,function(c){const l=n.parse(c);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:jt,s.wrapT=l.wrapT!==void 0?l.wrapT:jt,s.magFilter=l.magFilter!==void 0?l.magFilter:Ot,s.minFilter=l.minFilter!==void 0?l.minFilter:Ot,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=Oi),l.mipmapCount===1&&(s.minFilter=Ot),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l))},i,r),s}}class Ga extends Ji{constructor(e){super(e)}load(e,t,i,r){const n=new Ht,s=new bg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Un extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wg extends Un{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ha=new je,Dl=new U,kl=new U;class Va{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sg extends Va{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=en*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nc extends Un{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Sg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ul=new je,vn=new U,ua=new U;class Tg extends Va{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),vn.setFromMatrixPosition(e.matrixWorld),i.position.copy(vn),ua.copy(i.position),ua.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ua),i.updateMatrixWorld(),r.makeTranslation(-vn.x,-vn.y,-vn.z),Ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class ja extends Un{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends Va{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pc extends Un{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eg extends Un{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cg extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=rn.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(c){rn.add(e,c),t&&t(c),n.manager.itemEnd(e)}).catch(function(c){r&&r(c),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}const Wa="\\[\\]\\.:\\/",Lg=new RegExp("["+Wa+"]","g"),qa="[^"+Wa+"]",Rg="[^"+Wa.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",qa),Ng=/(WCOD+)?/.source.replace("WCOD",Rg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qa),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qa),kg=new RegExp("^"+Ig+Ng+Pg+Dg+"$"),Ug=["material","materials","bones","map"];class Og{constructor(e,t,i){const r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){const t=kg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);Ug.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let s=0;s<n.length;s++){const a=n[s];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[r];if(s===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Og;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ol{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zg extends an{constructor(e,t,i,r,n,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,i,r,n,s)}}class Fg extends Ba{constructor(e,t,i,r,n,s,a,c){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,i,r,n,s,a,c)}}class Bg extends Ha{constructor(e,t,i,r,n,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,i,r,n,s,a)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);function zl(o,e){if(e===zh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===ba||e===tc){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)s.push(c);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,r=[];if(e===ba)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=o.clone();return n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Ya extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new qg(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new i0(t)})}load(e,t,i,r){const n=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Rn.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),n.manager.itemError(e),n.manager.itemEnd(e)},c=new kn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{n.parse(l,s,function(h){t(h),n.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;const s={},a={},c=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dc){try{s[et.KHR_BINARY_GLTF]=new r0(e)}catch(h){r&&r(h);return}n=JSON.parse(s[et.KHR_BINARY_GLTF].content)}else n=JSON.parse(c.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new g0(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);a[u.name]=u,s[u.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){const u=n.extensionsUsed[h],d=n.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:s[u]=new Vg;break;case et.KHR_DRACO_MESH_COMPRESSION:s[u]=new n0(n,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:s[u]=new s0;break;case et.KHR_MESH_QUANTIZATION:s[u]=new a0;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,n){i.parse(e,t,r,n)})}}function Hg(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gg{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const n=t.json,s=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let a;const c=new Be(16777215);s.color!==void 0&&c.fromArray(s.color);const l=s.range!==void 0?s.range:0;switch(s.type){case"directional":a=new Pc(c),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new ja(c),a.distance=l;break;case"spot":a=new Nc(c),a.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,a.angle=s.spot.outerConeAngle,a.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return a.position.set(0,0,0),a.decay=2,Yi(a,s),s.intensity!==void 0&&(a.intensity=s.intensity),a.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(a),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(s){return i._getNodeRef(t.cache,n,s)})}}class Vg{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(e,t,i){const r=[];e.color=new Be(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const s=n.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}n.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",n.baseColorTexture,rt))}return Promise.all(r)}}class jg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Wg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(n)}}class qg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(n)}}class Yg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,rt)),s.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(n)}}class Xg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(n)}}class Kg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Be(a[0],a[1],a[2]),Promise.all(n)}}class Zg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Jg{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Be(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,rt)),Promise.all(n)}}class Qg{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const n=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,s)}}class $g{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const s=n.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class e0{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const s=n.extensions[t],a=r.images[s.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,s.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class t0{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(m),h,u,d,r.mode,r.filter),m})})}else return null}}class i0{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;const n=i.extensions[this.name].attributes,s=[],a={};for(const c in n)s.push(this.parser.getDependency("accessor",n[c]).then(l=>(a[c]=l,a[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{const l=c.pop(),h=l.isGroup?l.children:[l],u=c[0].count,d=[];for(const m of h){const v=new je,y=new U,f=new Wt,p=new U(1,1,1),E=new cg(m.geometry,m.material,u);for(let M=0;M<u;M++)a.TRANSLATION&&y.fromBufferAttribute(a.TRANSLATION,M),a.ROTATION&&f.fromBufferAttribute(a.ROTATION,M),a.SCALE&&p.fromBufferAttribute(a.SCALE,M),E.setMatrixAt(M,v.compose(y,f,p));for(const M in a)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,a[M]);_t.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),d.push(E)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const Dc="glTF",yn=12,Fl={JSON:1313821514,BIN:5130562};class r0{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-yn,n=new DataView(e,yn);let s=0;for(;s<r;){const a=n.getUint32(s,!0);s+=4;const c=n.getUint32(s,!0);if(s+=4,c===Fl.JSON){const l=new Uint8Array(e,yn+s,a);this.content=i.decode(l)}else if(c===Fl.BIN){const l=yn+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class n0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},c={},l={};for(const h in s){const u=Ca[h]||h.toLowerCase();a[u]=s[h]}for(const h in e.attributes){const u=Ca[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],m=Kr[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const m in d.attributes){const v=d.attributes[m],y=c[m];y!==void 0&&(v.normalized=y)}u(d)},a,l)})})}}class s0{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class a0{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class kc extends Dn{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[n+s];return t}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=r-t,u=(i-t)/h,d=u*u,m=d*u,v=e*l,y=v-l,f=-2*m+3*d,p=m-d,E=1-f,M=p-d+u;for(let A=0;A!==a;A++){const S=s[y+A+a],P=s[y+A+c]*h,D=s[v+A+a],N=s[v+A]*h;n[A]=E*S+M*P+f*D+p*N}return n}}const o0=new Wt;class l0 extends kc{interpolate_(e,t,i,r){const n=super.interpolate_(e,t,i,r);return o0.fromArray(n).normalize().toArray(n),n}}const si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bl={9728:Dt,9729:Ot,9984:xa,9985:$l,9986:fs,9987:Oi},Hl={33071:jt,33648:vs,10497:xi},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ca={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},c0={CUBICSPLINE:void 0,LINEAR:$r,STEP:En},pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h0(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),o.DefaultMaterial}function xn(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function u0(o,e,t){let i=!1,r=!1,n=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(n=!0),i&&r&&n)break}if(!i&&!r&&!n)return Promise.resolve(o);const s=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(n){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(o.morphAttributes.position=h),r&&(o.morphAttributes.normal=u),n&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function d0(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function p0(o){const e=o.extensions&&o.extensions[et.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Gl(e.attributes):t=o.indices+":"+Gl(o.attributes)+":"+o.mode,t}function Gl(o){let e="";const t=Object.keys(o).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+o[t[i]]+";";return e}function La(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function m0(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const f0=new je;class g0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,n=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&n<98?this.textureLoader=new Ga(this.options.manager):this.textureLoader=new Cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};xn(n,a,r),Yi(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){const s=t[r].joints;for(let a=0,c=s.length;a<c;a++)e[s[a]].isBone=!0}for(let r=0,n=e.length;r<n;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),n=(s,a)=>{const c=this.associations.get(s);c!=null&&this.associations.set(a,c);for(const[l,h]of s.children.entries())n(h,a.children[l])};return n(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":r=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(n,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(n,s){i.load(Rn.resolveURL(t.uri,r.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=da[r.type],a=Kr[r.componentType],c=r.normalized===!0,l=new a(r.count*s);return Promise.resolve(new Ut(l,s,c))}const n=[];return r.bufferView!==void 0?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),r.sparse!==void 0&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(s){const a=s[0],c=da[r.type],l=Kr[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let y,f;if(m&&m!==u){const p=Math.floor(d/m),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(E);M||(y=new l(a,p*m,r.count*m/h),M=new sg(y,m/h),t.cache.add(E,M)),f=new za(M,c,d%m/h,v)}else a===null?y=new l(r.count*c):y=new l(a,d,r.count*c),f=new Ut(y,c,v);if(r.sparse!==void 0){const p=da.SCALAR,E=Kr[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,S=new E(s[1],M,r.sparse.count*p),P=new l(s[2],A,r.sparse.count*c);a!==null&&(f=new Ut(f.array.slice(),f.itemSize,f.normalized));for(let D=0,N=S.length;D<N;D++){const b=S[D];if(f.setX(b,P[D*c]),c>=2&&f.setY(b,P[D*c+1]),c>=3&&f.setZ(b,P[D*c+2]),c>=4&&f.setW(b,P[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,n=t.images[r];let s=this.textureLoader;if(n.uri){const a=i.manager.getHandler(n.uri);a!==null&&(s=a)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){const r=this,n=this.json,s=n.textures[e],a=n.images[t],c=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(n.samplers||{})[s.sampler]||{};return h.magFilter=Bl[u.magFilter]||Ot,h.minFilter=Bl[u.minFilter]||Oi,h.wrapS=Hl[u.wrapS]||xi,h.wrapT=Hl[u.wrapT]||xi,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=r.images[e],a=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:s.mimeType});return c=a.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(y){const f=new Ht(y);f.needsUpdate=!0,d(f)}),t.load(Rn.resolveURL(u,n.path),v,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=s.mimeType||m0(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const n=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),n.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=n.associations.get(s);s=n.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),n.associations.set(s,c)}}return r!==void 0&&(s.encoding=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Ac,oi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new ys,oi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||n||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),n&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),n&&(c.vertexColors=!0),s&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Pn}loadMaterial(e){const t=this,i=this.json,r=this.extensions,n=i.materials[e];let s;const a={},c=n.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){const u=r[et.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(a,n,t))}else{const u=n.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}n.doubleSided===!0&&(a.side=mi);const h=n.alphaMode||pa.OPAQUE;if(h===pa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pa.MASK&&(a.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==ki&&(l.push(t.assignTexture(a,"normalMap",n.normalTexture)),a.normalScale=new Ve(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;a.normalScale.set(u,u)}return n.occlusionTexture!==void 0&&s!==ki&&(l.push(t.assignTexture(a,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==ki&&(a.emissive=new Be().fromArray(n.emissiveFactor)),n.emissiveTexture!==void 0&&s!==ki&&l.push(t.assignTexture(a,"emissiveMap",n.emissiveTexture,rt)),Promise.all(l).then(function(){const u=new s(a);return n.name&&(u.name=n.name),Yi(u,n),t.associations.set(u,{materials:e}),n.extensions&&xn(r,u,n),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function n(a){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Vl(c,a,t)})}const s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=p0(l),u=r[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=n(l):d=Vl(new Zt,l,t),r[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,n=i.meshes[e],s=n.primitives,a=[];for(let c=0,l=s.length;c<l;c++){const h=s[c].material===void 0?h0(this.cache):this.getDependency("material",s[c].material);a.push(h)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,v=h.length;m<v;m++){const y=h[m],f=s[m];let p;const E=l[m];if(f.mode===si.TRIANGLES||f.mode===si.TRIANGLE_STRIP||f.mode===si.TRIANGLE_FAN||f.mode===void 0)p=n.isSkinnedMesh===!0?new wc(y,E):new kt(y,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===si.TRIANGLE_STRIP?p.geometry=zl(p.geometry,tc):f.mode===si.TRIANGLE_FAN&&(p.geometry=zl(p.geometry,ba));else if(f.mode===si.LINES)p=new Tc(y,E);else if(f.mode===si.LINE_STRIP)p=new Cs(y,E);else if(f.mode===si.LINE_LOOP)p=new hg(y,E);else if(f.mode===si.POINTS)p=new ug(y,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&d0(p,n),p.name=t.createUniqueName(n.name||"mesh_"+e),Yi(p,n),f.extensions&&xn(r,p,f),t.assignFinalMaterial(p),u.push(p)}for(let m=0,v=u.length;m<v;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return u[0];const d=new Bt;t.associations.set(d,{meshes:e});for(let m=0,v=u.length;m<v;m++)d.add(u[m]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(jr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ts(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,n=t.joints.length;r<n;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const n=r.pop(),s=r,a=[],c=[];for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u){a.push(u);const d=new je;n!==null&&d.fromArray(n.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Es(a,c)})}loadAnimation(e){const t=this.json.animations[e],i=t.name?t.name:"animation_"+e,r=[],n=[],s=[],a=[],c=[];for(let l=0,h=t.channels.length;l<h;l++){const u=t.channels[l],d=t.samplers[u.sampler],m=u.target,v=m.node,y=t.parameters!==void 0?t.parameters[d.input]:d.input,f=t.parameters!==void 0?t.parameters[d.output]:d.output;m.node!==void 0&&(r.push(this.getDependency("node",v)),n.push(this.getDependency("accessor",y)),s.push(this.getDependency("accessor",f)),a.push(d),c.push(m))}return Promise.all([Promise.all(r),Promise.all(n),Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2],m=l[3],v=l[4],y=[];for(let f=0,p=h.length;f<p;f++){const E=h[f],M=u[f],A=d[f],S=m[f],P=v[f];if(E===void 0)continue;E.updateMatrix();let D;switch(qi[P.path]){case qi.weights:D=Ln;break;case qi.rotation:D=Zi;break;case qi.position:case qi.scale:default:D=ur;break}const N=E.name?E.name:E.uuid,b=S.interpolation!==void 0?c0[S.interpolation]:$r,L=[];qi[P.path]===qi.weights?E.traverse(function(W){W.morphTargetInfluences&&L.push(W.name?W.name:W.uuid)}):L.push(N);let G=A.array;if(A.normalized){const W=La(G.constructor),O=new Float32Array(G.length);for(let V=0,q=G.length;V<q;V++)O[V]=G[V]*W;G=O}for(let W=0,O=L.length;W<O;W++){const V=new D(L[W]+"."+qi[P.path],M.array,G,b);S.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(q){const H=this instanceof Zi?l0:kc;return new H(this.times,this.values,this.getValueSize()/3,q)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(V)}}return new Ea(i,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(n){const s=i._getNodeRef(i.meshCache,r.mesh,n);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),s})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],n=i._loadNodeShallow(e),s=[],a=r.children||[];for(let l=0,h=a.length;l<h;l++)s.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([n,Promise.all(s),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,f0)});for(let m=0,v=u.length;m<v;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],s=n.name?r.createUniqueName(n.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),n.camera!==void 0&&a.push(r.getDependency("camera",n.camera).then(function(l){return r._getNodeRef(r.cameraCache,n.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(n.isBone===!0?h=new Fa:l.length>1?h=new Bt:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(n.name&&(h.userData.name=n.name,h.name=s),Yi(h,n),n.extensions&&xn(i,h,n),n.matrix!==void 0){const u=new je;u.fromArray(n.matrix),h.applyMatrix4(u)}else n.translation!==void 0&&h.position.fromArray(n.translation),n.rotation!==void 0&&h.quaternion.fromArray(n.rotation),n.scale!==void 0&&h.scale.fromArray(n.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,n=new Bt;i.name&&(n.name=r.createUniqueName(i.name)),Yi(n,i),i.extensions&&xn(t,n,i);const s=i.nodes||[],a=[];for(let c=0,l=s.length;c<l;c++)a.push(r.getDependency("node",s[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)n.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of r.associations)(d instanceof oi||d instanceof Ht)&&u.set(d,m);return h.traverse(d=>{const m=r.associations.get(d);m!=null&&u.set(d,m)}),u};return r.associations=l(n),n})}}function _0(o,e,t){const i=e.attributes,r=new zi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const h=La(Kr[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const a=new U,c=new U;for(let l=0,h=n.length;l<h;l++){const u=n[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){const y=La(Kr[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}o.boundingBox=r;const s=new Fi;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=s}function Vl(o,e,t){const i=e.attributes,r=[];function n(s,a){return t.getDependency("accessor",s).then(function(c){o.setAttribute(a,c)})}for(const s in i){const a=Ca[s]||s.toLowerCase();a in o.attributes||r.push(n(i[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});r.push(s)}return Yi(o,e),_0(o,e,t),Promise.all(r).then(function(){return e.targets!==void 0?u0(o,e.targets,t):o})}const jl={type:"change"},ma={type:"start"},Wl={type:"end"};class v0 extends dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",at),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",at),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(jl),i.update(),n=r.NONE},this.update=function(){const k=new U,ae=new Wt().setFromUnitVectors(e.up,new U(0,1,0)),K=ae.clone().invert(),xe=new U,Ee=new Wt,Le=2*Math.PI;return function(){const we=i.object.position;k.copy(we).sub(i.target),k.applyQuaternion(ae),a.setFromVector3(k),i.autoRotate&&n===r.NONE&&b(D()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Se=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(Se)&&isFinite(He)&&(Se<-Math.PI?Se+=Le:Se>Math.PI&&(Se-=Le),He<-Math.PI?He+=Le:He>Math.PI&&(He-=Le),Se<=He?a.theta=Math.max(Se,Math.min(He,a.theta)):a.theta=a.theta>(Se+He)/2?Math.max(Se,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),k.setFromSpherical(a),k.applyQuaternion(K),we.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||xe.distanceToSquared(i.object.position)>s||8*(1-Ee.dot(i.object.quaternion))>s?(i.dispatchEvent(jl),xe.copy(i.object.position),Ee.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",C),i.domElement.removeEventListener("pointerdown",We),i.domElement.removeEventListener("pointercancel",ft),i.domElement.removeEventListener("wheel",Qe),i.domElement.removeEventListener("pointermove",yt),i.domElement.removeEventListener("pointerup",ft),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",at),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=r.NONE;const s=1e-6,a=new Ol,c=new Ol;let l=1;const h=new U;let u=!1;const d=new Ve,m=new Ve,v=new Ve,y=new Ve,f=new Ve,p=new Ve,E=new Ve,M=new Ve,A=new Ve,S=[],P={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function N(){return Math.pow(.95,i.zoomSpeed)}function b(k){c.theta-=k}function L(k){c.phi-=k}const G=function(){const k=new U;return function(ae,K){k.setFromMatrixColumn(K,0),k.multiplyScalar(-ae),h.add(k)}}(),W=function(){const k=new U;return function(ae,K){i.screenSpacePanning===!0?k.setFromMatrixColumn(K,1):(k.setFromMatrixColumn(K,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(ae),h.add(k)}}(),O=function(){const k=new U;return function(ae,K){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;k.copy(Ee).sub(i.target);let Le=k.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),G(2*ae*Le/xe.clientHeight,i.object.matrix),W(2*K*Le/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(ae*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),W(K*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(k){i.object.isPerspectiveCamera?l/=k:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*k)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(k){i.object.isPerspectiveCamera?l*=k:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/k)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(k){d.set(k.clientX,k.clientY)}function te(k){E.set(k.clientX,k.clientY)}function Z(k){y.set(k.clientX,k.clientY)}function Q(k){m.set(k.clientX,k.clientY),v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const ae=i.domElement;b(2*Math.PI*v.x/ae.clientHeight),L(2*Math.PI*v.y/ae.clientHeight),d.copy(m),i.update()}function le(k){M.set(k.clientX,k.clientY),A.subVectors(M,E),A.y>0?V(N()):A.y<0&&q(N()),E.copy(M),i.update()}function fe(k){f.set(k.clientX,k.clientY),p.subVectors(f,y).multiplyScalar(i.panSpeed),O(p.x,p.y),y.copy(f),i.update()}function ue(k){k.deltaY<0?q(N()):k.deltaY>0&&V(N()),i.update()}function B(k){let ae=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),ae=!0;break}ae&&(k.preventDefault(),i.update())}function Y(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const k=.5*(S[0].pageX+S[1].pageX),ae=.5*(S[0].pageY+S[1].pageY);d.set(k,ae)}}function oe(){if(S.length===1)y.set(S[0].pageX,S[0].pageY);else{const k=.5*(S[0].pageX+S[1].pageX),ae=.5*(S[0].pageY+S[1].pageY);y.set(k,ae)}}function $(){const k=S[0].pageX-S[1].pageX,ae=S[0].pageY-S[1].pageY,K=Math.sqrt(k*k+ae*ae);E.set(0,K)}function F(){i.enableZoom&&$(),i.enablePan&&oe()}function ye(){i.enableZoom&&$(),i.enableRotate&&Y()}function Ce(k){if(S.length==1)m.set(k.pageX,k.pageY);else{const K=_e(k),xe=.5*(k.pageX+K.x),Ee=.5*(k.pageY+K.y);m.set(xe,Ee)}v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const ae=i.domElement;b(2*Math.PI*v.x/ae.clientHeight),L(2*Math.PI*v.y/ae.clientHeight),d.copy(m)}function me(k){if(S.length===1)f.set(k.pageX,k.pageY);else{const ae=_e(k),K=.5*(k.pageX+ae.x),xe=.5*(k.pageY+ae.y);f.set(K,xe)}p.subVectors(f,y).multiplyScalar(i.panSpeed),O(p.x,p.y),y.copy(f)}function De(k){const ae=_e(k),K=k.pageX-ae.x,xe=k.pageY-ae.y,Ee=Math.sqrt(K*K+xe*xe);M.set(0,Ee),A.set(0,Math.pow(M.y/E.y,i.zoomSpeed)),V(A.y),E.copy(M)}function tt(k){i.enableZoom&&De(k),i.enablePan&&me(k)}function Ne(k){i.enableZoom&&De(k),i.enableRotate&&Ce(k)}function We(k){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",yt),i.domElement.addEventListener("pointerup",ft)),ee(k),k.pointerType==="touch"?It(k):Mt(k))}function yt(k){i.enabled!==!1&&(k.pointerType==="touch"?I(k):wt(k))}function ft(k){de(k),S.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",yt),i.domElement.removeEventListener("pointerup",ft)),i.dispatchEvent(Wl),n=r.NONE}function Mt(k){let ae;switch(k.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Mr.DOLLY:if(i.enableZoom===!1)return;te(k),n=r.DOLLY;break;case Mr.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;Z(k),n=r.PAN}else{if(i.enableRotate===!1)return;H(k),n=r.ROTATE}break;case Mr.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;H(k),n=r.ROTATE}else{if(i.enablePan===!1)return;Z(k),n=r.PAN}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(ma)}function wt(k){switch(n){case r.ROTATE:if(i.enableRotate===!1)return;Q(k);break;case r.DOLLY:if(i.enableZoom===!1)return;le(k);break;case r.PAN:if(i.enablePan===!1)return;fe(k);break}}function Qe(k){i.enabled===!1||i.enableZoom===!1||n!==r.NONE||(k.preventDefault(),i.dispatchEvent(ma),ue(k),i.dispatchEvent(Wl))}function at(k){i.enabled===!1||i.enablePan===!1||B(k)}function It(k){switch(pe(k),S.length){case 1:switch(i.touches.ONE){case wr.ROTATE:if(i.enableRotate===!1)return;Y(),n=r.TOUCH_ROTATE;break;case wr.PAN:if(i.enablePan===!1)return;oe(),n=r.TOUCH_PAN;break;default:n=r.NONE}break;case 2:switch(i.touches.TWO){case wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(),n=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),n=r.TOUCH_DOLLY_ROTATE;break;default:n=r.NONE}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(ma)}function I(k){switch(pe(k),n){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ce(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;tt(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(k),i.update();break;default:n=r.NONE}}function C(k){i.enabled!==!1&&k.preventDefault()}function ee(k){S.push(k)}function de(k){delete P[k.pointerId];for(let ae=0;ae<S.length;ae++)if(S[ae].pointerId==k.pointerId){S.splice(ae,1);return}}function pe(k){let ae=P[k.pointerId];ae===void 0&&(ae=new Ve,P[k.pointerId]=ae),ae.set(k.pageX,k.pageY)}function _e(k){const ae=k.pointerId===S[0].pointerId?S[1]:S[0];return P[ae.pointerId]}i.domElement.addEventListener("contextmenu",C),i.domElement.addEventListener("pointerdown",We),i.domElement.addEventListener("pointercancel",ft),i.domElement.addEventListener("wheel",Qe,{passive:!1}),this.update()}}class nn{static createButton(e){const t=document.createElement("button");function i(){let c=null;async function l(u){u.addEventListener("end",h),await e.xr.setSession(u),t.textContent="EXIT VR",c=u}function h(){c.removeEventListener("end",h),t.textContent="ENTER VR",c=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(c===null){const u={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",u).then(l)}else c.end()}}function r(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function n(){r(),t.textContent="VR NOT SUPPORTED"}function s(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),t.textContent="VR NOT ALLOWED"}function a(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():n(),c&&nn.xrSessionIsGranted&&t.click()}).catch(s),t;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",a(c),c}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{nn.xrSessionIsGranted=!0})}}}nn.xrSessionIsGranted=!1;nn.registerSessionGrantedListener();function In(o){const e=new Wt;return o.forEach(t=>{const i=new U(0,0,0);t.axis==="x"&&i.setX(1),t.axis==="y"&&i.setY(1),t.axis==="z"&&i.setZ(1);const r=t.degrees*Math.PI/180;e.premultiply(new Wt().setFromAxisAngle(i,r))}),e}function Uc(o){const[e,t,i,r]=In(o);return[r,e,t,i]}function Xa(o){return new Wt(o[1],o[2],o[3],o[0])}const y0=[{game:"Crescendo",src:"/3d-models/Field3d_2024.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:180}],size:[54.2708333,26.9375],unit:"foot"},{game:"Charged Up",src:"/3d-models/Field3d_2023.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:180}],size:[54.27083,26.2916],unit:"foot"},{game:"Rapid React",src:"/3d-models/Field3d_2022.glb",rotations:[{axis:"x",degrees:90}],size:[54,27],unit:"foot"},{game:"Infinite Recharge",src:"/3d-models/Field3d_2021.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90}],size:[52.4375,26.9375],unit:"foot"},{game:"Evergreen",src:"/3d-models/Field3d_Evergreen.glb",rotations:[{axis:"x",degrees:90}],size:[54,27],unit:"foot"}],Oc=[{name:"KitBot",src:"/3d-models/Robot_KitBot.glb",rotations:[{axis:"z",degrees:90}],position:[.12,3.15,0]},{name:"Duck Bot",src:"/3d-models/Robot_Duck Bot.glb",rotations:[{axis:"z",degrees:90}],position:[0,0,0]},{name:"Crab Bot",src:"/3d-models/Robot_Crab Bot.glb",rotations:[{axis:"z",degrees:180}],position:[0,0,.045]},{name:"Bot-Bot Awakens (6328)",src:"/3d-models/Robot_Bot-Bot Awakens (6328).glb",rotations:[{axis:"z",degrees:90},{axis:"y",degrees:90}],position:[0,0,0]},{name:"Bot-Bot Strikes Back (6328)",src:"/3d-models/Robot_Bot-Bot Strikes Back (6328).glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90}],position:[.05,0,.06]},{name:"REV 2023 Starter Bot",src:"/3d-models/Robot_REV 2023 Starter Bot.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90}],position:[0,0,0],components:[{name:"0",src:"/3d-models/Robot_REV 2023 Starter Bot_0.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90},{axis:"y",degrees:211}],position:[.645,0,.48]},{name:"1",src:"/3d-models/Robot_REV 2023 Starter Bot_1.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90}],position:[.305,0,-.37]}]}],zc=[{name:"R2D2",content:`
    <robot name="flexible">
      <link name="base_link">
        <visual>
          <geometry>
            <cylinder length="0.6" radius="0.2"/>
          </geometry>
          <material name="blue">
            <color rgba="0 0 .8 1"/>
          </material>
        </visual>
      </link>
    
      <link name="right_leg">
        <visual>
          <geometry>
            <box size="0.6 .2 .1"/>
          </geometry>
          <origin rpy="0 1.57075 0" xyz="0 0 -0.3"/>
          <material name="white">
            <color rgba="1 1 1 1"/>
          </material>
        </visual>
      </link>
    
      <joint name="base_to_right_leg" type="fixed">
        <parent link="base_link"/>
        <child link="right_leg"/>
        <origin xyz="0.22 0 .25"/>
      </joint>
    
      <link name="right_base">
        <visual>
          <geometry>
            <box size=".1 0.4 .1"/>
          </geometry>
          <material name="white"/>
        </visual>
      </link>
    
      <joint name="right_base_joint" type="fixed">
        <parent link="right_leg"/>
        <child link="right_base"/>
        <origin xyz="0 0 -0.6"/>
      </joint>
    
      <link name="right_front_wheel">
        <visual>
          <geometry>
            <cylinder length=".1" radius="0.035"/>
          </geometry>
          <material name="black">
            <color rgba="0 0 0 1"/>
          </material>
        </visual>
      </link>
    
      <joint name="right_front_wheel_joint" type="continuous">
        <axis xyz="0 0 1"/>
        <parent link="right_base"/>
        <child link="right_front_wheel"/>
        <origin rpy="0 1.57075 0" xyz="0 0.133333333333 -0.085"/>
        <limit effort="100" velocity="100"/>
        <dynamics damping="0.0" friction="0.0"/>
      </joint>
    
      <link name="right_back_wheel">
        <visual>
          <geometry>
            <cylinder length=".1" radius="0.035"/>
          </geometry>
          <material name="black"/>
        </visual>
      </link>
    
      <joint name="right_back_wheel_joint" type="continuous">
        <axis xyz="0 0 1"/>
        <parent link="right_base"/>
        <child link="right_back_wheel"/>
        <origin rpy="0 1.57075 0" xyz="0 -0.133333333333 -0.085"/>
        <limit effort="100" velocity="100"/>
        <dynamics damping="0.0" friction="0.0"/>
      </joint>
    
      <link name="left_leg">
        <visual>
          <geometry>
            <box size="0.6 .2 .1"/>
          </geometry>
          <origin rpy="0 1.57075 0" xyz="0 0 -0.3"/>
          <material name="white"/>
        </visual>
      </link>
    
      <joint name="base_to_left_leg" type="fixed">
        <parent link="base_link"/>
        <child link="left_leg"/>
        <origin xyz="-0.22 0 .25"/>
      </joint>
    
      <link name="left_base">
        <visual>
          <geometry>
            <box size=".1 0.4 .1"/>
          </geometry>
          <material name="white"/>
        </visual>
      </link>
    
      <joint name="left_base_joint" type="fixed">
        <parent link="left_leg"/>
        <child link="left_base"/>
        <origin xyz="0 0 -0.6"/>
      </joint>
    
      <link name="left_front_wheel">
        <visual>
          <geometry>
            <cylinder length=".1" radius="0.035"/>
          </geometry>
          <material name="black"/>
        </visual>
      </link>
    
      <joint name="left_front_wheel_joint" type="continuous">
        <axis xyz="0 0 1"/>
        <parent link="left_base"/>
        <child link="left_front_wheel"/>
        <origin rpy="0 1.57075 0" xyz="0 0.133333333333 -0.085"/>
        <limit effort="100" velocity="100"/>
        <dynamics damping="0.0" friction="0.0"/>
      </joint>
    
      <link name="left_back_wheel">
        <visual>
          <geometry>
            <cylinder length=".1" radius="0.035"/>
          </geometry>
          <material name="black"/>
        </visual>
      </link>
    
      <joint name="left_back_wheel_joint" type="continuous">
        <axis xyz="0 0 1"/>
        <parent link="left_base"/>
        <child link="left_back_wheel"/>
        <origin rpy="0 1.57075 0" xyz="0 -0.133333333333 -0.085"/>
        <limit effort="100" velocity="100"/>
        <dynamics damping="0.0" friction="0.0"/>
      </joint>
      <joint name="gripper_extension" type="prismatic">
        <parent link="base_link"/>
        <child link="gripper_pole"/>
        <limit effort="1000.0" lower="-0.38" upper="0" velocity="0.5"/>
        <origin rpy="0 0 1.57075" xyz="0 0.19 .2"/>
      </joint>
    
      <link name="gripper_pole">
        <visual>
          <geometry>
            <cylinder length="0.2" radius=".01"/>
          </geometry>
          <origin rpy="0 1.57075 0 " xyz="0.1 0 0"/>
          <material name="Gray">
            <color rgba=".7 .7 .7 1"/>
          </material>
        </visual>
      </link>
    
      <joint name="left_gripper_joint" type="revolute">
        <axis xyz="0 0 1"/>
        <limit effort="1000.0" lower="0.0" upper="0.548" velocity="0.5"/>
        <origin rpy="0 0 0" xyz="0.2 0.01 0"/>
        <parent link="gripper_pole"/>
        <child link="left_gripper"/>
      </joint>
    
      <link name="left_gripper">
        <visual>
          <origin rpy="0.0 0 0" xyz="0 0 0"/>
          <geometry>
            <box size="0.1 0.02 0.02"/>
          </geometry>
        </visual>
      </link>
    
      <joint name="left_tip_joint" type="fixed">
        <parent link="left_gripper"/>
        <child link="left_tip"/>
      </joint>
    
      <link name="left_tip">
        <visual>
          <origin rpy="0.0 0 0" xyz="0.09137 0.00495 0"/>
          <geometry>
            <mesh filename="package://pr2_description/meshes/gripper_v0/l_finger_tip.dae"/>
          </geometry>
        </visual>
      </link>
    
      <joint name="right_gripper_joint" type="revolute">
        <axis xyz="0 0 -1"/>
        <limit effort="1000.0" lower="0.0" upper="0.548" velocity="0.5"/>
        <origin rpy="0 0 0" xyz="0.2 -0.01 0"/>
        <parent link="gripper_pole"/>
        <child link="right_gripper"/>
      </joint>
    
      <link name="right_gripper">
        <visual>
          <origin rpy="-3.1415 0 0" xyz="0 0 0"/>
          <geometry>
             <box size="0.1 0.02 0.02"/>
          </geometry>
        </visual>
      </link>
    
      <joint name="right_tip_joint" type="fixed">
        <parent link="right_gripper"/>
        <child link="right_tip"/>
      </joint>
    
      <link name="right_tip">
        <visual>
          <origin rpy="-3.1415 0 0" xyz="0.09137 0.00495 0"/>
          <geometry>
            <mesh filename="package://pr2_description/meshes/gripper_v0/l_finger_tip.dae"/>
          </geometry>
        </visual>
      </link>
    
      <link name="head">
        <visual>
          <geometry>
            <sphere radius="0.2"/>
          </geometry>
          <material name="white"/>
        </visual>
      </link>
    
      <joint name="head_swivel" type="continuous">
        <parent link="base_link"/>
        <child link="head"/>
        <axis xyz="0 0 1"/>
        <origin xyz="0 0 0.3"/>
      </joint>
    
      <link name="box">
        <visual>
          <geometry>
            <box size=".08 .08 .08"/>
          </geometry>
          <material name="blue"/>
        </visual>
      </link>
    
      <joint name="tobox" type="fixed">
        <parent link="head"/>
        <child link="box"/>
        <origin xyz="0 0.1414 0.1414"/>
      </joint>
    
    </robot>
    
    `,rotations:[{axis:"z",degrees:-90}],position:[0,0,.5]},{name:"PI Robot",content:`
    <robot name="pi_robot">

      <!-- * * * Link Definitions * * * -->

      <link name="base_link">
        <visual>
            <origin xyz="0 0 0.0425" rpy="0 0 0"/>
          <geometry>
            <box size="0.32 0.26 0.085"/>
          </geometry>
          <material name="Cyan1">
                <color rgba="0 0.9 0.9 1.0"/>
            </material>
        </visual>	
      </link>

      <link name="base_laser">
        <visual>
            <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.025" length="0.07"/>
          </geometry>
          <material name="Black1">
                <color rgba="0.2 0.2 0.2 1.0"/>
            </material>
        </visual>	
      </link>

      <link name="cpu_link">
        <visual>
            <origin xyz="0 0 0.035" rpy="0 0 0"/>
          <geometry>
            <box size="0.19 0.19 0.07"/>
          </geometry>
          <material name="Cyan2">
                <color rgba="0 0.7 0.7 1.0"/>
            </material>
        </visual>	
      </link>

        <link name="upper_base_link">
        <visual>
          <origin xyz="0 0 0.05" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.085" length="0.10"/>
          </geometry>
            <material name="Cyan3">
            <color rgba="0 0.5 0.5 0"/>
          </material>
        </visual>
      </link>

        <link name="torso_link">
        <visual>
          <origin xyz="0 0 0.12" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.05" length="0.24"/>
          </geometry>
            <material name="Yellow2">
            <color rgba="0.8 0.8 0 1.0"/>
          </material>
        </visual>
      </link>

      <link name="head_pan_link">
        <visual>
          <origin xyz="0 0 0.0225" rpy="0 0 0"/>
          <geometry>
            <box size="0.05 0.045 0.045"/>
          </geometry>
            <material name="Green1">
            <color rgba="0 1 0 1.0"/>
          </material>
        </visual>
      </link>

      <link name="head_tilt_link">
        <visual>
          <origin xyz="0 0 0.02" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.038 0.04"/>
          </geometry>
            <material name="Green2">
            <color rgba="0.1 0.8 0 1.0"/>
          </material>
        </visual>
      </link>

      <link name="neck_link">
        <visual>
          <origin xyz="0 0 0.021" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.042"/>
          </geometry>
            <material name="Green3">
            <color rgba="0.1 0.5 0.1 1.0"/>
          </material>
        </visual>
      </link>

      <link name="head_link">
        <visual>
          <origin xyz="0 0 0.025" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.07 0.11"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <!--	
      <link name="eyes_link">
        <visual>
          <origin xyz="0 0 0.035" rpy="0 0 0" />
          <geometry>
            <box size="0.01 0.04 0.01" />
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>
      -->

      <link name="antenna_link">
        <visual>
          <origin xyz="0 0 0.035" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.002" length="0.05"/>
          </geometry>
            <material name="Grey3">
            <color rgba="0.8 0.8 0.8 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_shoulder_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.025 0.015 0.05"/>
          </geometry>
            <material name="Green1">
            <color rgba="0 1 0 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_shoulder_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.025 0.015 0.05"/>
          </geometry>
            <material name="Green1">
            <color rgba="0 1 0 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_shoulder_forward_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue1">
            <color rgba="0 0 0.9 1.0"/>
          </material>
        </visual>
      </link>
        
      <link name="right_shoulder_forward_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue1">
            <color rgba="0 0 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_shoulder_up_link">
        <visual>
          <origin xyz="0 0 0" rpy="1.57 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_shoulder_up_link">
        <visual>
          <origin xyz="0 0 0" rpy="1.57 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_upper_arm_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.0075" length="0.05"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_upper_arm_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.0075" length="0.05"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_elbow_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 1.57"/>
          <geometry>
            <box size="0.035 0.035 0.05"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_elbow_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 1.57"/>
          <geometry>
            <box size="0.035 0.035 0.05"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_lower_arm_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.0075" length="0.11"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_lower_arm_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <cylinder radius="0.0075" length="0.11"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_wrist_link">
        <visual>
          <origin xyz="0 0 0" rpy="1.57 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_wrist_link">
        <visual>
          <origin xyz="0 0 0" rpy="1.57 0 0"/>
          <geometry>
            <box size="0.03 0.05 0.03"/>
          </geometry>
            <material name="Blue2">
            <color rgba="0 0 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="left_hand_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.01 0.06"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.7 0.7 0.7 1.0"/>
          </material>
        </visual>
      </link>

      <link name="right_hand_link">
        <visual>
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <geometry>
            <box size="0.03 0.01 0.06"/>
          </geometry>
            <material name="Grey1">
            <color rgba="0.9 0.9 0.9 1.0"/>
          </material>
        </visual>
      </link>

      <!-- * * * Joint Definitions * * * -->

      <joint name="cpu_joint" type="fixed">
          <parent link="base_link"/>
          <child link="cpu_link"/>
          <origin xyz="0.025 0 0.085" rpy="0 0 0"/>
      </joint>

      <joint name="base_laser_joint" type="fixed">
          <parent link="base_link"/>
          <child link="base_laser"/>
          <origin xyz="0.18 0 0.07" rpy="0 0 0"/>
      </joint>

      <joint name="upper_base_joint" type="fixed">
          <parent link="cpu_link"/>
          <child link="upper_base_link"/>
          <origin xyz="0 0 0.07" rpy="0 0 0"/>
      </joint>

      <joint name="torso_joint" type="revolute">
          <parent link="upper_base_link"/>
          <child link="torso_link"/>
          <origin xyz="0 0 0.10" rpy="0 0 0"/>
          <axis xyz="0 0 1"/>
          <limit lower="-3.1416" upper="3.1416" effort="10" velocity="3"/>
        </joint>

      <joint name="head_pan_servo" type="fixed">
          <parent link="torso_link"/>
          <child link="head_pan_link"/>
          <origin xyz="0 0 0.225" rpy="0 0 0"/>
      </joint>

      <joint name="head_pan_joint" type="revolute">
          <parent link="head_pan_link"/>
          <child link="head_tilt_link"/>
          <origin xyz="0 0 0.045" rpy="0 0 0"/>
          <axis xyz="0 0 1"/>
          <limit lower="-3.1416" upper="3.1416" effort="10" velocity="3"/>
        </joint>
        
      <joint name="head_tilt_joint" type="revolute">
          <parent link="head_tilt_link"/>
          <child link="neck_link"/>
          <origin xyz="0 0 0.04" rpy="0 0 0"/>
          <axis xyz="0 1 0"/>
          <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
        </joint>
        
      <joint name="neck_joint" type="fixed">
          <parent link="neck_link"/>
          <child link="head_link"/>
          <origin xyz="0.05 0 0.015" rpy="0 0 0"/>
      </joint>
      <!--	
      <joint name="eyes_joint" type="fixed">
          <parent link="head_link" />
          <child link="eyes_link" />
          <origin xyz="0.02 0 0.03" rpy="0 0 0" />
      </joint>
      -->

      <joint name="antenna_joint" type="fixed">
          <parent link="head_link"/>
          <child link="antenna_link"/>
          <origin xyz="0.0 -0.025 0.065" rpy="0 0 0"/>
      </joint>

      <joint name="left_shoulder_joint" type="fixed">
          <parent link="torso_link"/>
          <child link="left_shoulder_link"/>
          <origin xyz="0 0.055 0.165" rpy="0 0 0"/>
      </joint>

      <joint name="right_shoulder_joint" type="fixed">
          <parent link="torso_link"/>
          <child link="right_shoulder_link"/>
          <origin xyz="0 -0.055 0.165" rpy="0 0 0"/>
      </joint>

      <joint name="left_shoulder_forward_joint" type="revolute">
          <parent link="left_shoulder_link"/>
          <child link="left_shoulder_forward_link"/>
          <origin xyz="0 0.025 0" rpy="0 0 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="0 0 1"/>
      </joint>

      <joint name="right_shoulder_forward_joint" type="revolute">
          <parent link="right_shoulder_link"/>
          <child link="right_shoulder_forward_link"/>
          <origin xyz="0 -0.025 0" rpy="0 0 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="0 0 1"/>
      </joint>

      <joint name="left_shoulder_up_joint" type="revolute">
          <parent link="left_shoulder_forward_link"/>
          <child link="left_shoulder_up_link"/>
          <origin xyz="0 0.04 -0.01" rpy="0 -0.707 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="0 1 0"/>
      </joint>

      <joint name="right_shoulder_up_joint" type="revolute">
          <parent link="right_shoulder_forward_link"/>
          <child link="right_shoulder_up_link"/>
          <origin xyz="0 -0.04 -0.01" rpy="0 -0.707 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="0 1 0"/>
      </joint>

      <joint name="left_upper_arm_joint" type="fixed">
          <parent link="left_shoulder_up_link"/>
          <child link="left_upper_arm_link"/>
          <origin xyz="0 0 -0.05" rpy="0 0 0"/>
      </joint>

      <joint name="right_upper_arm_joint" type="fixed">
          <parent link="right_shoulder_up_link"/>
          <child link="right_upper_arm_link"/>
          <origin xyz="0 0 -0.05" rpy="0 0 0"/>
      </joint>

      <joint name="left_elbow_joint" type="revolute">
          <parent link="left_upper_arm_link"/>
          <child link="left_elbow_link"/>
          <origin xyz="-0.005 0 -0.05" rpy="0 0 0"/>
            <limit lower="-3.146" upper="3.146" effort="10" velocity="3"/>
            <axis xyz="0 0 1"/>
      </joint>

      <joint name="right_elbow_joint" type="revolute">
          <parent link="right_upper_arm_link"/>
          <child link="right_elbow_link"/>
          <origin xyz="-0.005 0 -0.05" rpy="0 0 0"/>
            <limit lower="-3.146" upper="3.146" effort="10" velocity="3"/>
            <axis xyz="0 0 1"/>
      </joint>

      <joint name="left_lower_arm_joint" type="fixed">
          <parent link="left_elbow_link"/>
          <child link="left_lower_arm_link"/>
          <origin xyz="0 0 -0.08" rpy="0 0 0"/>
      </joint>

      <joint name="right_lower_arm_joint" type="fixed">
          <parent link="right_elbow_link"/>
          <child link="right_lower_arm_link"/>
          <origin xyz="0 0 -0.08" rpy="0 0 0"/>
      </joint>

      <joint name="left_wrist_joint" type="revolute">
          <parent link="left_lower_arm_link"/>
          <child link="left_wrist_link"/>
          <origin xyz="0 0 -0.05" rpy="0 0 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="1 0 0"/>
      </joint>

      <joint name="right_wrist_joint" type="revolute">
          <parent link="right_lower_arm_link"/>
          <child link="right_wrist_link"/>
          <origin xyz="0 0 -0.05" rpy="0 0 0"/>
            <limit lower="-1.57" upper="1.57" effort="10" velocity="3"/>
            <axis xyz="1 0 0"/>
      </joint>

      <joint name="left_hand_joint" type="fixed">
          <parent link="left_wrist_link"/>
          <child link="left_hand_link"/>
          <origin xyz="0 0 -0.055" rpy="0 0 0"/>
      </joint>

      <joint name="right_hand_joint" type="fixed">
          <parent link="right_wrist_link"/>
          <child link="right_hand_link"/>
          <origin xyz="0 0 -0.055" rpy="0 0 0"/>
      </joint>

      </robot>

    `,rotations:[],position:[0,0,0]}],xs=(o,e)=>`${o.replace(/\/$/,"")}/${e.replace(/^\//,"")}`;function x0(o){const e=o.lastIndexOf("/");return e<0?"":o.substring(0,e)}var b0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,mr=(o,e,t,i)=>{for(var r=i>1?void 0:i?M0(e,t):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&b0(e,t,r),r};const Qi=class Ra extends Ia{constructor(){super(...arguments),this.objectConfigs=Oc,this.name=this.objectConfigs[0].name,this.pose=[0,0,0],this._translation=[0,0,0],this._rotation=[0,0,0,0],this.loader=new Ya,this.group=new Bt}getObjectConfig(){return this.objectConfigs.find(({name:e})=>e===this.name)??this.objectConfigs[0]}getField(){const e=this.closest("frc-field3d");if(e)return e}static adjustMaterials(e){e.traverse(t=>{const i=t;if(i.isMesh&&i.material instanceof Pn){const r=i.material;r.metalness=0,r.roughness=1}})}static updatePose(e,t){const[i,r,n]=t.translation;e.position.set(i,r,n),e.rotation.setFromQuaternion(Xa(t.rotation))}loadRobotModel(){const e=this.getField(),t=this.getObjectConfig();if(!e)return;const i=e.getFieldGroup();i.remove(this.group),this.object&&this.group.remove(this.object);const r=t.components??[],n=[t.src].concat(r.map(({src:c})=>c)).map(c=>new Promise(l=>{this.loader.load(xs(e.assetPathPrefix??"",c),h=>l(h))})),s=new Bt;this.group=s,i.add(this.group);const a=new Bt;this.object=a,s.add(a),a.rotation.setFromQuaternion(In(t.rotations)),a.position.set(...t.position),Promise.all(n).then(c=>{c.forEach(l=>{Ra.adjustMaterials(l.scene),a.add(l.scene)})})}firstUpdated(){this.updateObjectConfigs(),this.renderObject()}updated(e){if(e.has("name")&&this.loadRobotModel(),e.has("translation")||e.has("rotation")||e.has("pose"))if(this.translation||this.rotation)this._translation=this.translation??[0,0,0],this._rotation=this.rotation??[0,0,0,0];else if(this.pose.length>=7)this._translation=this.pose.slice(0,3),this._rotation=this.pose.slice(3,7);else{const[t=0,i=0,r=0]=this.pose;this._translation=[t,i],this._rotation=r}}updateObjectConfigs(){const e=this.getField(),t=e==null?void 0:e.objectConfigs;t!=null&&t.length&&t!==this.objectConfigs&&(this.objectConfigs=t,this.objectConfigs.some(i=>i.name===this.name)||(this.name=this.objectConfigs[0].name))}renderObject(){this.group&&Ra.updatePose(this.group,{translation:this._translation.length===2?[...this._translation,0]:this._translation,rotation:typeof this._rotation=="number"?Uc([{axis:"z",degrees:this._rotation}]):this._rotation}),requestAnimationFrame(()=>{this.renderObject()})}};mr([sn()],Qi.prototype,"objectConfigs",2);mr([Jt({type:String})],Qi.prototype,"name",2);mr([Jt({type:Array})],Qi.prototype,"pose",2);mr([Jt({type:Array})],Qi.prototype,"translation",2);mr([Jt({type:Array})],Qi.prototype,"rotation",2);mr([sn()],Qi.prototype,"_translation",2);mr([sn()],Qi.prototype,"_rotation",2);let w0=Qi;customElements.get("frc-field3d-object")||customElements.define("frc-field3d-object",w0);class S0 extends Ji{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new kn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(n.parse(a))}catch(c){r?r(c):console.error(c),n.manager.itemError(e)}},i,r)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const m=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(m,h,v))return!1;return!0}function i(l,h,u){for(let d=0,m=l.length;d<m;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function r(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,m,v,y=!1,f,p,E,M,A;for(let L=0;L<80-10;L++)h.getUint32(L,!1)==1129270351&&h.getUint8(L+4)==82&&h.getUint8(L+5)==61&&(y=!0,f=new Float32Array(u*3*3),p=h.getUint8(L+6)/255,E=h.getUint8(L+7)/255,M=h.getUint8(L+8)/255,A=h.getUint8(L+9)/255);const S=84,P=12*4+2,D=new Zt,N=new Float32Array(u*3*3),b=new Float32Array(u*3*3);for(let L=0;L<u;L++){const G=S+L*P,W=h.getFloat32(G,!0),O=h.getFloat32(G+4,!0),V=h.getFloat32(G+8,!0);if(y){const q=h.getUint16(G+48,!0);q&32768?(d=p,m=E,v=M):(d=(q&31)/31,m=(q>>5&31)/31,v=(q>>10&31)/31)}for(let q=1;q<=3;q++){const H=G+q*12,te=L*3*3+(q-1)*3;N[te]=h.getFloat32(H,!0),N[te+1]=h.getFloat32(H+4,!0),N[te+2]=h.getFloat32(H+8,!0),b[te]=W,b[te+1]=O,b[te+2]=V,y&&(f[te]=d,f[te+1]=m,f[te+2]=v)}}return D.setAttribute("position",new Ut(N,3)),D.setAttribute("normal",new Ut(b,3)),y&&(D.setAttribute("color",new Ut(f,3)),D.hasColors=!0,D.alpha=A),D}function n(l){const h=new Zt,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let m=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+v+v+v,"g"),f=new RegExp("normal"+v+v+v,"g"),p=[],E=[],M=new U;let A,S=0,P=0,D=0;for(;(A=u.exec(l))!==null;){P=D;const N=A[0];for(;(A=d.exec(N))!==null;){let G=0,W=0;const O=A[0];for(;(A=f.exec(O))!==null;)M.x=parseFloat(A[1]),M.y=parseFloat(A[2]),M.z=parseFloat(A[3]),W++;for(;(A=y.exec(O))!==null;)p.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),E.push(M.x,M.y,M.z),G++,D++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const b=P,L=D-P;h.addGroup(b,L,S),S++}return h.setAttribute("position",new bt(p,3)),h.setAttribute("normal",new bt(E,3)),h}function s(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=a(e);return t(c)?r(c):n(s(e))}}class ql extends Mg{constructor(e){super(e)}parse(e){function t(H){switch(H.image_type){case d:case y:(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case v:case f:case p:H.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',H.image_type)}(H.width<=0||H.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',H.pixel_size)}function i(H,te,Z,Q,le){let fe,ue;const B=Z.pixel_size>>3,Y=Z.width*Z.height*B;if(te&&(ue=le.subarray(Q,Q+=Z.colormap_length*(Z.colormap_size>>3))),H){fe=new Uint8Array(Y);let oe,$,F,ye=0;const Ce=new Uint8Array(B);for(;ye<Y;)if(oe=le[Q++],$=(oe&127)+1,oe&128){for(F=0;F<B;++F)Ce[F]=le[Q++];for(F=0;F<$;++F)fe.set(Ce,ye+F*B);ye+=B*$}else{for($*=B,F=0;F<$;++F)fe[ye+F]=le[Q++];ye+=$}}else fe=le.subarray(Q,Q+=te?Z.width*Z.height:Y);return{pixel_data:fe,palettes:ue}}function r(H,te,Z,Q,le,fe,ue,B,Y){const oe=Y;let $,F=0,ye,Ce;const me=L.width;for(Ce=te;Ce!==Q;Ce+=Z)for(ye=le;ye!==ue;ye+=fe,F++)$=B[F],H[(ye+me*Ce)*4+3]=255,H[(ye+me*Ce)*4+2]=oe[$*3+0],H[(ye+me*Ce)*4+1]=oe[$*3+1],H[(ye+me*Ce)*4+0]=oe[$*3+2];return H}function n(H,te,Z,Q,le,fe,ue,B){let Y,oe=0,$,F;const ye=L.width;for(F=te;F!==Q;F+=Z)for($=le;$!==ue;$+=fe,oe+=2)Y=B[oe+0]+(B[oe+1]<<8),H[($+ye*F)*4+0]=(Y&31744)>>7,H[($+ye*F)*4+1]=(Y&992)>>2,H[($+ye*F)*4+2]=(Y&31)<<3,H[($+ye*F)*4+3]=Y&32768?0:255;return H}function s(H,te,Z,Q,le,fe,ue,B){let Y=0,oe,$;const F=L.width;for($=te;$!==Q;$+=Z)for(oe=le;oe!==ue;oe+=fe,Y+=3)H[(oe+F*$)*4+3]=255,H[(oe+F*$)*4+2]=B[Y+0],H[(oe+F*$)*4+1]=B[Y+1],H[(oe+F*$)*4+0]=B[Y+2];return H}function a(H,te,Z,Q,le,fe,ue,B){let Y=0,oe,$;const F=L.width;for($=te;$!==Q;$+=Z)for(oe=le;oe!==ue;oe+=fe,Y+=4)H[(oe+F*$)*4+2]=B[Y+0],H[(oe+F*$)*4+1]=B[Y+1],H[(oe+F*$)*4+0]=B[Y+2],H[(oe+F*$)*4+3]=B[Y+3];return H}function c(H,te,Z,Q,le,fe,ue,B){let Y,oe=0,$,F;const ye=L.width;for(F=te;F!==Q;F+=Z)for($=le;$!==ue;$+=fe,oe++)Y=B[oe],H[($+ye*F)*4+0]=Y,H[($+ye*F)*4+1]=Y,H[($+ye*F)*4+2]=Y,H[($+ye*F)*4+3]=255;return H}function l(H,te,Z,Q,le,fe,ue,B){let Y=0,oe,$;const F=L.width;for($=te;$!==Q;$+=Z)for(oe=le;oe!==ue;oe+=fe,Y+=2)H[(oe+F*$)*4+0]=B[Y+0],H[(oe+F*$)*4+1]=B[Y+0],H[(oe+F*$)*4+2]=B[Y+0],H[(oe+F*$)*4+3]=B[Y+1];return H}function h(H,te,Z,Q,le){let fe,ue,B,Y,oe,$;switch((L.flags&E)>>M){default:case P:fe=0,B=1,oe=te,ue=0,Y=1,$=Z;break;case A:fe=0,B=1,oe=te,ue=Z-1,Y=-1,$=-1;break;case D:fe=te-1,B=-1,oe=-1,ue=0,Y=1,$=Z;break;case S:fe=te-1,B=-1,oe=-1,ue=Z-1,Y=-1,$=-1;break}if(O)switch(L.pixel_size){case 8:c(H,ue,Y,$,fe,B,oe,Q);break;case 16:l(H,ue,Y,$,fe,B,oe,Q);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(L.pixel_size){case 8:r(H,ue,Y,$,fe,B,oe,Q,le);break;case 16:n(H,ue,Y,$,fe,B,oe,Q);break;case 24:s(H,ue,Y,$,fe,B,oe,Q);break;case 32:a(H,ue,Y,$,fe,B,oe,Q);break;default:console.error("THREE.TGALoader: Format not supported.");break}return H}const u=0,d=1,m=2,v=3,y=9,f=10,p=11,E=48,M=4,A=0,S=1,P=2,D=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let N=0;const b=new Uint8Array(e),L={id_length:b[N++],colormap_type:b[N++],image_type:b[N++],colormap_index:b[N++]|b[N++]<<8,colormap_length:b[N++]|b[N++]<<8,colormap_size:b[N++],origin:[b[N++]|b[N++]<<8,b[N++]|b[N++]<<8],width:b[N++]|b[N++]<<8,height:b[N++]|b[N++]<<8,pixel_size:b[N++],flags:b[N++]};t(L),L.id_length+N>e.length&&console.error("THREE.TGALoader: No data."),N+=L.id_length;let G=!1,W=!1,O=!1;switch(L.image_type){case y:G=!0,W=!0;break;case d:W=!0;break;case f:G=!0;break;case m:break;case p:G=!0,O=!0;break;case v:O=!0;break}const V=new Uint8Array(L.width*L.height*4),q=i(G,W,L,N,b);return h(V,L.width,L.height,q.pixel_data,q.palettes),{data:V,width:L.width,height:L.height,flipY:!0,generateMipmaps:!0,minFilter:Oi}}}class T0 extends Ji{constructor(e){super(e)}load(e,t,i,r){const n=this,s=n.path===""?Rn.extractUrlBase(e):n.path,a=new kn(n.manager);a.setPath(n.path),a.setRequestHeader(n.requestHeader),a.setWithCredentials(n.withCredentials),a.load(e,function(c){try{t(n.parse(c,s))}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}parse(e,t){function i(_,g){const w=[],x=_.childNodes;for(let T=0,J=x.length;T<J;T++){const se=x[T];se.nodeName===g&&w.push(se)}return w}function r(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let x=0,T=g.length;x<T;x++)w[x]=g[x];return w}function n(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let x=0,T=g.length;x<T;x++)w[x]=parseFloat(g[x]);return w}function s(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let x=0,T=g.length;x<T;x++)w[x]=parseInt(g[x]);return w}function a(_){return _.substring(1)}function c(){return"three_default_"+Vc++}function l(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,g,w,x){const T=i(_,g)[0];if(T!==void 0){const J=i(T,w);for(let se=0;se<J.length;se++)x(J[se])}}function v(_,g){for(const w in _){const x=_[w];x.build=g(_[w])}}function y(_,g){return _.build!==void 0||(_.build=g(_)),_.build}function f(_){const g={sources:{},samplers:{},channels:{}};let w=!1;for(let x=0,T=_.childNodes.length;x<T;x++){const J=_.childNodes[x];if(J.nodeType!==1)continue;let se;switch(J.nodeName){case"source":se=J.getAttribute("id"),g.sources[se]=ce(J);break;case"sampler":se=J.getAttribute("id"),g.samplers[se]=p(J);break;case"channel":se=J.getAttribute("target"),g.channels[se]=E(J);break;case"animation":f(J),w=!0;break;default:console.log(J)}}w===!1&&(Oe.animations[_.getAttribute("id")||jr.generateUUID()]=g)}function p(_){const g={inputs:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":const J=a(T.getAttribute("source")),se=T.getAttribute("semantic");g.inputs[se]=J;break}}return g}function E(_){const g={};let w=_.getAttribute("target").split("/");const x=w.shift();let T=w.shift();const J=T.indexOf("(")!==-1,se=T.indexOf(".")!==-1;if(se)w=T.split("."),T=w.shift(),g.member=w.shift();else if(J){const be=T.split("(");T=be.shift();for(let ge=0;ge<be.length;ge++)be[ge]=parseInt(be[ge].replace(/\)/,""));g.indices=be}return g.id=x,g.sid=T,g.arraySyntax=J,g.memberSyntax=se,g.sampler=a(_.getAttribute("source")),g}function M(_){const g=[],w=_.channels,x=_.samplers,T=_.sources;for(const J in w)if(w.hasOwnProperty(J)){const se=w[J],be=x[se.sampler],ge=be.inputs.INPUT,Te=be.inputs.OUTPUT,Pe=T[ge],he=T[Te],Ae=S(se,Pe,he);L(Ae,g)}return g}function A(_){return y(Oe.animations[_],M)}function S(_,g,w){const x=Oe.nodes[_.id],T=Tt(x.id),J=x.transforms[_.sid],se=x.matrix.clone().transpose();let be,ge,Te,Pe,he,Ae;const Ie={};switch(J){case"matrix":for(Te=0,Pe=g.array.length;Te<Pe;Te++)if(be=g.array[Te],ge=Te*w.stride,Ie[be]===void 0&&(Ie[be]={}),_.arraySyntax===!0){const ke=w.array[ge],dt=_.indices[0]+4*_.indices[1];Ie[be][dt]=ke}else for(he=0,Ae=w.stride;he<Ae;he++)Ie[be][he]=w.array[ge+he];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break}const Fe=P(Ie,se);return{name:T.uuid,keyframes:Fe}}function P(_,g){const w=[];for(const T in _)w.push({time:parseFloat(T),value:_[T]});w.sort(x);for(let T=0;T<16;T++)G(w,T,g.elements[T]);return w;function x(T,J){return T.time-J.time}}const D=new U,N=new U,b=new Wt;function L(_,g){const w=_.keyframes,x=_.name,T=[],J=[],se=[],be=[];for(let ge=0,Te=w.length;ge<Te;ge++){const Pe=w[ge],he=Pe.time,Ae=Pe.value;ot.fromArray(Ae).transpose(),ot.decompose(D,b,N),T.push(he),J.push(D.x,D.y,D.z),se.push(b.x,b.y,b.z,b.w),be.push(N.x,N.y,N.z)}return J.length>0&&g.push(new ur(x+".position",T,J)),se.length>0&&g.push(new Zi(x+".quaternion",T,se)),be.length>0&&g.push(new ur(x+".scale",T,be)),g}function G(_,g,w){let x,T=!0,J,se;for(J=0,se=_.length;J<se;J++)x=_[J],x.value[g]===void 0?x.value[g]=null:T=!1;if(T===!0)for(J=0,se=_.length;J<se;J++)x=_[J],x.value[g]=w;else W(_,g)}function W(_,g){let w,x;for(let T=0,J=_.length;T<J;T++){const se=_[T];if(se.value[g]===null){if(w=O(_,T,g),x=V(_,T,g),w===null){se.value[g]=x.value[g];continue}if(x===null){se.value[g]=w.value[g];continue}q(se,w,x,g)}}}function O(_,g,w){for(;g>=0;){const x=_[g];if(x.value[w]!==null)return x;g--}return null}function V(_,g,w){for(;g<_.length;){const x=_[g];if(x.value[w]!==null)return x;g++}return null}function q(_,g,w,x){if(w.time-g.time===0){_.value[x]=g.value[x];return}_.value[x]=(_.time-g.time)*(w.value[x]-g.value[x])/(w.time-g.time)+g.value[x]}function H(_){const g={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_animation":g.animations.push(a(T.getAttribute("url")));break}}Oe.clips[_.getAttribute("id")]=g}function te(_){const g=[],w=_.name,x=_.end-_.start||-1,T=_.animations;for(let J=0,se=T.length;J<se;J++){const be=A(T[J]);for(let ge=0,Te=be.length;ge<Te;ge++)g.push(be[ge])}return new Ea(w,x,g)}function Z(_){return y(Oe.clips[_],te)}function Q(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"skin":g.id=a(T.getAttribute("source")),g.skin=le(T);break;case"morph":g.id=a(T.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Oe.controllers[_.getAttribute("id")]=g}function le(_){const g={sources:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=n(T.textContent);break;case"source":const J=T.getAttribute("id");g.sources[J]=ce(T);break;case"joints":g.joints=fe(T);break;case"vertex_weights":g.vertexWeights=ue(T);break}}return g}function fe(_){const g={inputs:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":const J=T.getAttribute("semantic"),se=a(T.getAttribute("source"));g.inputs[J]=se;break}}return g}function ue(_){const g={inputs:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":const J=T.getAttribute("semantic"),se=a(T.getAttribute("source")),be=parseInt(T.getAttribute("offset"));g.inputs[J]={id:se,offset:be};break;case"vcount":g.vcount=s(T.textContent);break;case"v":g.v=s(T.textContent);break}}return g}function B(_){const g={id:_.id},w=Oe.geometries[g.id];return _.skin!==void 0&&(g.skin=Y(_.skin),w.sources.skinIndices=g.skin.indices,w.sources.skinWeights=g.skin.weights),g}function Y(_){const g={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},w=_.sources,x=_.vertexWeights,T=x.vcount,J=x.v,se=x.inputs.JOINT.offset,be=x.inputs.WEIGHT.offset,ge=_.sources[_.joints.inputs.JOINT],Te=_.sources[_.joints.inputs.INV_BIND_MATRIX],Pe=w[x.inputs.WEIGHT.id].array;let he=0,Ae,Ie,Fe;for(Ae=0,Fe=T.length;Ae<Fe;Ae++){const dt=T[Ae],lt=[];for(Ie=0;Ie<dt;Ie++){const st=J[he+se],ht=J[he+be],Ai=Pe[ht];lt.push({index:st,weight:Ai}),he+=2}for(lt.sort(ke),Ie=0;Ie<4;Ie++){const st=lt[Ie];st!==void 0?(g.indices.array.push(st.index),g.weights.array.push(st.weight)):(g.indices.array.push(0),g.weights.array.push(0))}}for(_.bindShapeMatrix?g.bindMatrix=new je().fromArray(_.bindShapeMatrix).transpose():g.bindMatrix=new je().identity(),Ae=0,Fe=ge.array.length;Ae<Fe;Ae++){const dt=ge.array[Ae],lt=new je().fromArray(Te.array,Ae*Te.stride).transpose();g.joints.push({name:dt,boneInverse:lt})}return g;function ke(dt,lt){return lt.weight-dt.weight}}function oe(_){return y(Oe.controllers[_],B)}function $(_){const g={init_from:i(_,"init_from")[0].textContent};Oe.images[_.getAttribute("id")]=g}function F(_){return _.build!==void 0?_.build:_.init_from}function ye(_){const g=Oe.images[_];return g!==void 0?y(g,F):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Ce(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"profile_COMMON":g.profile=me(T);break}}Oe.effects[_.getAttribute("id")]=g}function me(_){const g={surfaces:{},samplers:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"newparam":De(T,g);break;case"technique":g.technique=We(T);break;case"extra":g.extra=at(T);break}}return g}function De(_,g){const w=_.getAttribute("sid");for(let x=0,T=_.childNodes.length;x<T;x++){const J=_.childNodes[x];if(J.nodeType===1)switch(J.nodeName){case"surface":g.surfaces[w]=tt(J);break;case"sampler2D":g.samplers[w]=Ne(J);break}}}function tt(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"init_from":g.init_from=T.textContent;break}}return g}function Ne(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"source":g.source=T.textContent;break}}return g}function We(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=T.nodeName,g.parameters=yt(T);break;case"extra":g.extra=at(T);break}}return g}function yt(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[T.nodeName]=ft(T);break;case"transparent":g[T.nodeName]={opaque:T.hasAttribute("opaque")?T.getAttribute("opaque"):"A_ONE",data:ft(T)};break}}return g}function ft(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":g[T.nodeName]=n(T.textContent);break;case"float":g[T.nodeName]=parseFloat(T.textContent);break;case"texture":g[T.nodeName]={id:T.getAttribute("texture"),extra:Mt(T)};break}}return g}function Mt(_){const g={technique:{}};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"extra":wt(T,g);break}}return g}function wt(_,g){for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":Qe(T,g);break}}}function Qe(_,g){for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[T.nodeName]=parseFloat(T.textContent);break;case"wrapU":case"wrapV":T.textContent.toUpperCase()==="TRUE"?g.technique[T.nodeName]=1:T.textContent.toUpperCase()==="FALSE"?g.technique[T.nodeName]=0:g.technique[T.nodeName]=parseInt(T.textContent);break;case"bump":g[T.nodeName]=I(T);break}}}function at(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":g.technique=It(T);break}}return g}function It(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"double_sided":g[T.nodeName]=parseInt(T.textContent);break;case"bump":g[T.nodeName]=I(T);break}}return g}function I(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"texture":g[T.nodeName]={id:T.getAttribute("texture"),texcoord:T.getAttribute("texcoord"),extra:Mt(T)};break}}return g}function C(_){return _}function ee(_){return y(Oe.effects[_],C)}function de(_){const g={name:_.getAttribute("name")};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_effect":g.url=a(T.getAttribute("url"));break}}Oe.materials[_.getAttribute("id")]=g}function pe(_){let g,w=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":g=Ds;break;default:g=Ja}return g}function _e(_){const g=ee(_.url),w=g.profile.technique;let x;switch(w.type){case"phong":case"blinn":x=new Tn;break;case"lambert":x=new dg;break;default:x=new ki;break}x.name=_.name||"";function T(ge,Te=null){const Pe=g.profile.samplers[ge.id];let he=null;if(Pe!==void 0){const Ae=g.profile.surfaces[Pe.source];he=ye(Ae.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),he=ye(ge.id);if(he!==null){const Ae=pe(he);if(Ae!==void 0){const Ie=Ae.load(he),Fe=ge.extra;if(Fe!==void 0&&Fe.technique!==void 0&&l(Fe.technique)===!1){const ke=Fe.technique;Ie.wrapS=ke.wrapU?xi:jt,Ie.wrapT=ke.wrapV?xi:jt,Ie.offset.set(ke.offsetU||0,ke.offsetV||0),Ie.repeat.set(ke.repeatU||1,ke.repeatV||1)}else Ie.wrapS=xi,Ie.wrapT=xi;return Te!==null&&(Ie.encoding=Te),Ie}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",he),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}const J=w.parameters;for(const ge in J){const Te=J[ge];switch(ge){case"diffuse":Te.color&&x.color.fromArray(Te.color),Te.texture&&(x.map=T(Te.texture,rt));break;case"specular":Te.color&&x.specular&&x.specular.fromArray(Te.color),Te.texture&&(x.specularMap=T(Te.texture));break;case"bump":Te.texture&&(x.normalMap=T(Te.texture));break;case"ambient":Te.texture&&(x.lightMap=T(Te.texture,rt));break;case"shininess":Te.float&&x.shininess&&(x.shininess=Te.float);break;case"emission":Te.color&&x.emissive&&x.emissive.fromArray(Te.color),Te.texture&&(x.emissiveMap=T(Te.texture,rt));break}}x.color.convertSRGBToLinear(),x.specular&&x.specular.convertSRGBToLinear(),x.emissive&&x.emissive.convertSRGBToLinear();let se=J.transparent,be=J.transparency;if(be===void 0&&se&&(be={float:1}),se===void 0&&be&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&be)if(se.data.texture)x.transparent=!0;else{const ge=se.data.color;switch(se.opaque){case"A_ONE":x.opacity=ge[3]*be.float;break;case"RGB_ZERO":x.opacity=1-ge[0]*be.float;break;case"A_ZERO":x.opacity=1-ge[3]*be.float;break;case"RGB_ONE":x.opacity=ge[0]*be.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}x.opacity<1&&(x.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){const ge=w.extra.technique;for(const Te in ge){const Pe=ge[Te];switch(Te){case"double_sided":x.side=Pe===1?mi:bi;break;case"bump":x.normalMap=T(Pe.texture),x.normalScale=new Ve(1,1);break}}}return x}function k(_){return y(Oe.materials[_],_e)}function ae(_){const g={name:_.getAttribute("name")};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"optics":g.optics=K(T);break}}Oe.cameras[_.getAttribute("id")]=g}function K(_){for(let g=0;g<_.childNodes.length;g++){const w=_.childNodes[g];switch(w.nodeName){case"technique_common":return xe(w)}}return{}}function xe(_){const g={};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];switch(x.nodeName){case"perspective":case"orthographic":g.technique=x.nodeName,g.parameters=Ee(x);break}}return g}function Ee(_){const g={};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];switch(x.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[x.nodeName]=parseFloat(x.textContent);break}}return g}function Le(_){let g;switch(_.optics.technique){case"perspective":g=new Ft(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let w=_.optics.parameters.ymag,x=_.optics.parameters.xmag;const T=_.optics.parameters.aspect_ratio;x=x===void 0?w*T:x,w=w===void 0?x/T:w,x*=.5,w*=.5,g=new Ts(-x,x,w,-w,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:g=new Ft;break}return g.name=_.name||"",g}function we(_){const g=Oe.cameras[_];return g!==void 0?y(g,Le):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Se(_){let g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique_common":g=He(T);break}}Oe.lights[_.getAttribute("id")]=g}function He(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=T.nodeName,g.parameters=nt(T)}}return g}function nt(_){const g={};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":const J=n(T.textContent);g.color=new Be().fromArray(J).convertSRGBToLinear();break;case"falloff_angle":g.falloffAngle=parseFloat(T.textContent);break;case"quadratic_attenuation":const se=parseFloat(T.textContent);g.distance=se?Math.sqrt(1/se):0;break}}return g}function xt(_){let g;switch(_.technique){case"directional":g=new Pc;break;case"point":g=new ja;break;case"spot":g=new Nc;break;case"ambient":g=new Eg;break}return _.parameters.color&&g.color.copy(_.parameters.color),_.parameters.distance&&(g.distance=_.parameters.distance),g}function z(_){const g=Oe.lights[_];return g!==void 0?y(g,xt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function re(_){const g={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(_,"mesh")[0];if(w!==void 0){for(let x=0;x<w.childNodes.length;x++){const T=w.childNodes[x];if(T.nodeType!==1)continue;const J=T.getAttribute("id");switch(T.nodeName){case"source":g.sources[J]=ce(T);break;case"vertices":g.vertices=Me(T);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",T.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(Ue(T));break;default:console.log(T)}}Oe.geometries[_.getAttribute("id")]=g}}function ce(_){const g={array:[],stride:3};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"float_array":g.array=n(x.textContent);break;case"Name_array":g.array=r(x.textContent);break;case"technique_common":const T=i(x,"accessor")[0];T!==void 0&&(g.stride=parseInt(T.getAttribute("stride")));break}}return g}function Me(_){const g={};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];x.nodeType===1&&(g[x.getAttribute("semantic")]=a(x.getAttribute("source")))}return g}function Ue(_){const g={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,x=_.childNodes.length;w<x;w++){const T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":const J=a(T.getAttribute("source")),se=T.getAttribute("semantic"),be=parseInt(T.getAttribute("offset")),ge=parseInt(T.getAttribute("set")),Te=ge>0?se+ge:se;g.inputs[Te]={id:J,offset:be},g.stride=Math.max(g.stride,be+1),se==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=s(T.textContent);break;case"p":g.p=s(T.textContent);break}}return g}function ut(_){const g={};for(let w=0;w<_.length;w++){const x=_[w];g[x.type]===void 0&&(g[x.type]=[]),g[x.type].push(x)}return g}function vt(_){let g=0;for(let w=0,x=_.length;w<x;w++)_[w].hasUV===!0&&g++;g>0&&g<_.length&&(_.uvsNeedsFix=!0)}function Et(_){const g={},w=_.sources,x=_.vertices,T=_.primitives;if(T.length===0)return{};const J=ut(T);for(const se in J){const be=J[se];vt(be),g[se]=gi(be,w,x)}return g}function gi(_,g,w){const x={},T={array:[],stride:0},J={array:[],stride:0},se={array:[],stride:0},be={array:[],stride:0},ge={array:[],stride:0},Te={array:[],stride:4},Pe={array:[],stride:4},he=new Zt,Ae=[];let Ie=0;for(let Fe=0;Fe<_.length;Fe++){const ke=_[Fe],dt=ke.inputs;let lt=0;switch(ke.type){case"lines":case"linestrips":lt=ke.count*2;break;case"triangles":lt=ke.count*3;break;case"polylist":for(let st=0;st<ke.count;st++){const ht=ke.vcount[st];switch(ht){case 3:lt+=3;break;case 4:lt+=6;break;default:lt+=(ht-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ke.type)}he.addGroup(Ie,lt,Fe),Ie+=lt,ke.material&&Ae.push(ke.material);for(const st in dt){const ht=dt[st];switch(st){case"VERTEX":for(const Ai in w){const ri=w[Ai];switch(Ai){case"POSITION":const br=T.array.length;if(it(ke,g[ri],ht.offset,T.array),T.stride=g[ri].stride,g.skinWeights&&g.skinIndices&&(it(ke,g.skinIndices,ht.offset,Te.array),it(ke,g.skinWeights,ht.offset,Pe.array)),ke.hasUV===!1&&_.uvsNeedsFix===!0){const jc=(T.array.length-br)/T.stride;for(let $a=0;$a<jc;$a++)se.array.push(0,0)}break;case"NORMAL":it(ke,g[ri],ht.offset,J.array),J.stride=g[ri].stride;break;case"COLOR":it(ke,g[ri],ht.offset,ge.array),ge.stride=g[ri].stride;break;case"TEXCOORD":it(ke,g[ri],ht.offset,se.array),se.stride=g[ri].stride;break;case"TEXCOORD1":it(ke,g[ri],ht.offset,be.array),se.stride=g[ri].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ai)}}break;case"NORMAL":it(ke,g[ht.id],ht.offset,J.array),J.stride=g[ht.id].stride;break;case"COLOR":it(ke,g[ht.id],ht.offset,ge.array,!0),ge.stride=g[ht.id].stride;break;case"TEXCOORD":it(ke,g[ht.id],ht.offset,se.array),se.stride=g[ht.id].stride;break;case"TEXCOORD1":it(ke,g[ht.id],ht.offset,be.array),be.stride=g[ht.id].stride;break}}}return T.array.length>0&&he.setAttribute("position",new bt(T.array,T.stride)),J.array.length>0&&he.setAttribute("normal",new bt(J.array,J.stride)),ge.array.length>0&&he.setAttribute("color",new bt(ge.array,ge.stride)),se.array.length>0&&he.setAttribute("uv",new bt(se.array,se.stride)),be.array.length>0&&he.setAttribute("uv2",new bt(be.array,be.stride)),Te.array.length>0&&he.setAttribute("skinIndex",new bt(Te.array,Te.stride)),Pe.array.length>0&&he.setAttribute("skinWeight",new bt(Pe.array,Pe.stride)),x.data=he,x.type=_[0].type,x.materialKeys=Ae,x}function it(_,g,w,x,T=!1){const J=_.p,se=_.stride,be=_.vcount;function ge(he){let Ae=J[he+w]*Pe;const Ie=Ae+Pe;for(;Ae<Ie;Ae++)x.push(Te[Ae]);if(T){const Fe=x.length-Pe-1;Bn.setRGB(x[Fe+0],x[Fe+1],x[Fe+2]).convertSRGBToLinear(),x[Fe+0]=Bn.r,x[Fe+1]=Bn.g,x[Fe+2]=Bn.b}}const Te=g.array,Pe=g.stride;if(_.vcount!==void 0){let he=0;for(let Ae=0,Ie=be.length;Ae<Ie;Ae++){const Fe=be[Ae];if(Fe===4){const ke=he+se*0,dt=he+se*1,lt=he+se*2,st=he+se*3;ge(ke),ge(dt),ge(st),ge(dt),ge(lt),ge(st)}else if(Fe===3){const ke=he+se*0,dt=he+se*1,lt=he+se*2;ge(ke),ge(dt),ge(lt)}else if(Fe>4)for(let ke=1,dt=Fe-2;ke<=dt;ke++){const lt=he+se*0,st=he+se*ke,ht=he+se*(ke+1);ge(lt),ge(st),ge(ht)}he+=se*Fe}}else for(let he=0,Ae=J.length;he<Ae;he+=se)ge(he)}function qt(_){return y(Oe.geometries[_],Et)}function ii(_){const g={name:_.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"technique_common":Ls(x,g);break}}Oe.kinematicsModels[_.getAttribute("id")]=g}function gr(_){return _.build!==void 0?_.build:_}function On(_){return y(Oe.kinematicsModels[_],gr)}function Ls(_,g){for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"joint":g.joints[x.getAttribute("sid")]=Rs(x);break;case"link":g.links.push(R(x));break}}}function Rs(_){let g;for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"prismatic":case"revolute":g=Is(x);break}}return g}function Is(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"axis":const T=n(x.textContent);g.axis.fromArray(T);break;case"limits":const J=x.getElementsByTagName("max")[0],se=x.getElementsByTagName("min")[0];g.limits.max=parseFloat(J.textContent),g.limits.min=parseFloat(se.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function R(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"attachment_full":g.attachments.push(X(x));break;case"matrix":case"translate":case"rotate":g.transforms.push(ie(x));break}}return g}function X(_){const g={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"link":g.links.push(R(x));break;case"matrix":case"translate":case"rotate":g.transforms.push(ie(x));break}}return g}function ie(_){const g={type:_.nodeName},w=n(_.textContent);switch(g.type){case"matrix":g.obj=new je,g.obj.fromArray(w).transpose();break;case"translate":g.obj=new U,g.obj.fromArray(w);break;case"rotate":g.obj=new U,g.obj.fromArray(w),g.angle=jr.degToRad(w[3]);break}return g}function j(_){const g={name:_.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"rigid_body":g.rigidBodies[x.getAttribute("name")]={},ne(x,g.rigidBodies[x.getAttribute("name")]);break}}Oe.physicsModels[_.getAttribute("id")]=g}function ne(_,g){for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"technique_common":Re(x,g);break}}}function Re(_,g){for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"inertia":g.inertia=n(x.textContent);break;case"mass":g.mass=n(x.textContent)[0];break}}}function ze(_){const g={bindJointAxis:[]};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"bind_joint_axis":g.bindJointAxis.push(Ge(x));break}}Oe.kinematicsScenes[a(_.getAttribute("url"))]=g}function Ge(_){const g={target:_.getAttribute("target").split("/").pop()};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType===1)switch(x.nodeName){case"axis":const T=x.getElementsByTagName("param")[0];g.axis=T.textContent;const J=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=J.substring(0,J.length-1);break}}return g}function qe(_){return _.build!==void 0?_.build:_}function $e(_){return y(Oe.kinematicsScenes[_],qe)}function Ke(){const _=Object.keys(Oe.kinematicsModels)[0],g=Object.keys(Oe.kinematicsScenes)[0],w=Object.keys(Oe.visualScenes)[0];if(_===void 0||g===void 0)return;const x=On(_),T=$e(g),J=xr(w),se=T.bindJointAxis,be={};for(let Pe=0,he=se.length;Pe<he;Pe++){const Ae=se[Pe],Ie=Ct.querySelector('[sid="'+Ae.target+'"]');if(Ie){const Fe=Ie.parentElement;ge(Ae.jointIndex,Fe)}}function ge(Pe,he){const Ae=he.getAttribute("name"),Ie=x.joints[Pe];J.traverse(function(Fe){Fe.name===Ae&&(be[Pe]={object:Fe,transforms:Xe(he),joint:Ie,position:Ie.zeroPosition})})}const Te=new je;Qa={joints:x&&x.joints,getJointValue:function(Pe){const he=be[Pe];if(he)return he.position;console.warn("THREE.ColladaLoader: Joint "+Pe+" doesn't exist.")},setJointValue:function(Pe,he){const Ae=be[Pe];if(Ae){const Ie=Ae.joint;if(he>Ie.limits.max||he<Ie.limits.min)console.warn("THREE.ColladaLoader: Joint "+Pe+" value "+he+" outside of limits (min: "+Ie.limits.min+", max: "+Ie.limits.max+").");else if(Ie.static)console.warn("THREE.ColladaLoader: Joint "+Pe+" is static.");else{const Fe=Ae.object,ke=Ie.axis,dt=Ae.transforms;ot.identity();for(let lt=0;lt<dt.length;lt++){const st=dt[lt];if(st.sid&&st.sid.indexOf(Pe)!==-1)switch(Ie.type){case"revolute":ot.multiply(Te.makeRotationAxis(ke,jr.degToRad(he)));break;case"prismatic":ot.multiply(Te.makeTranslation(ke.x*he,ke.y*he,ke.z*he));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ie.type);break}else switch(st.type){case"matrix":ot.multiply(st.obj);break;case"translate":ot.multiply(Te.makeTranslation(st.obj.x,st.obj.y,st.obj.z));break;case"scale":ot.scale(st.obj);break;case"rotate":ot.multiply(Te.makeRotationAxis(st.obj,st.angle));break}}Fe.matrix.copy(ot),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),be[Pe].position=he}}else console.log("THREE.ColladaLoader: "+Pe+" does not exist.")}}}function Xe(_){const g=[],w=Ct.querySelector('[id="'+_.id+'"]');for(let x=0;x<w.childNodes.length;x++){const T=w.childNodes[x];if(T.nodeType!==1)continue;let J,se;switch(T.nodeName){case"matrix":J=n(T.textContent);const be=new je().fromArray(J).transpose();g.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:be});break;case"translate":case"scale":J=n(T.textContent),se=new U().fromArray(J),g.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:se});break;case"rotate":J=n(T.textContent),se=new U().fromArray(J);const ge=jr.degToRad(J[3]);g.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:se,angle:ge});break}}return g}function gt(_){const g=_.getElementsByTagName("node");for(let w=0;w<g.length;w++){const x=g[w];x.hasAttribute("id")===!1&&x.setAttribute("id",c())}}const ot=new je,Nt=new U;function ci(_){const g={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new je,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];if(x.nodeType!==1)continue;let T;switch(x.nodeName){case"node":g.nodes.push(x.getAttribute("id")),ci(x);break;case"instance_camera":g.instanceCameras.push(a(x.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(St(x));break;case"instance_light":g.instanceLights.push(a(x.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(St(x));break;case"instance_node":g.instanceNodes.push(a(x.getAttribute("url")));break;case"matrix":T=n(x.textContent),g.matrix.multiply(ot.fromArray(T).transpose()),g.transforms[x.getAttribute("sid")]=x.nodeName;break;case"translate":T=n(x.textContent),Nt.fromArray(T),g.matrix.multiply(ot.makeTranslation(Nt.x,Nt.y,Nt.z)),g.transforms[x.getAttribute("sid")]=x.nodeName;break;case"rotate":T=n(x.textContent);const J=jr.degToRad(T[3]);g.matrix.multiply(ot.makeRotationAxis(Nt.fromArray(T),J)),g.transforms[x.getAttribute("sid")]=x.nodeName;break;case"scale":T=n(x.textContent),g.matrix.scale(Nt.fromArray(T)),g.transforms[x.getAttribute("sid")]=x.nodeName;break;case"extra":break;default:console.log(x)}}return vr(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):Oe.nodes[g.id]=g,g}function St(_){const g={id:a(_.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<_.childNodes.length;w++){const x=_.childNodes[w];switch(x.nodeName){case"bind_material":const T=x.getElementsByTagName("instance_material");for(let J=0;J<T.length;J++){const se=T[J],be=se.getAttribute("symbol"),ge=se.getAttribute("target");g.materials[be]=a(ge)}break;case"skeleton":g.skeletons.push(a(x.textContent));break}}return g}function Ze(_,g){const w=[],x=[];let T,J,se;for(T=0;T<_.length;T++){const Te=_[T];let Pe;if(vr(Te))Pe=Tt(Te),_r(Pe,g,w);else if(Yt(Te)){const he=Oe.visualScenes[Te].children;for(let Ae=0;Ae<he.length;Ae++){const Ie=he[Ae];if(Ie.type==="JOINT"){const Fe=Tt(Ie.id);_r(Fe,g,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(T=0;T<g.length;T++)for(J=0;J<w.length;J++)if(se=w[J],se.bone.name===g[T].name){x[T]=se,se.processed=!0;break}for(T=0;T<w.length;T++)se=w[T],se.processed===!1&&(x.push(se),se.processed=!0);const be=[],ge=[];for(T=0;T<x.length;T++)se=x[T],be.push(se.bone),ge.push(se.boneInverse);return new Es(be,ge)}function _r(_,g,w){_.traverse(function(x){if(x.isBone===!0){let T;for(let J=0;J<g.length;J++){const se=g[J];if(se.name===x.name){T=se.boneInverse;break}}T===void 0&&(T=new je),w.push({bone:x,boneInverse:T,processed:!1})}})}function un(_){const g=[],w=_.matrix,x=_.nodes,T=_.type,J=_.instanceCameras,se=_.instanceControllers,be=_.instanceLights,ge=_.instanceGeometries,Te=_.instanceNodes;for(let he=0,Ae=x.length;he<Ae;he++)g.push(Tt(x[he]));for(let he=0,Ae=J.length;he<Ae;he++){const Ie=we(J[he]);Ie!==null&&g.push(Ie.clone())}for(let he=0,Ae=se.length;he<Ae;he++){const Ie=se[he],Fe=oe(Ie.id),ke=qt(Fe.id),dt=Bi(ke,Ie.materials),lt=Ie.skeletons,st=Fe.skin.joints,ht=Ze(lt,st);for(let Ai=0,ri=dt.length;Ai<ri;Ai++){const br=dt[Ai];br.isSkinnedMesh&&(br.bind(ht,Fe.skin.bindMatrix),br.normalizeSkinWeights()),g.push(br)}}for(let he=0,Ae=be.length;he<Ae;he++){const Ie=z(be[he]);Ie!==null&&g.push(Ie.clone())}for(let he=0,Ae=ge.length;he<Ae;he++){const Ie=ge[he],Fe=qt(Ie.id),ke=Bi(Fe,Ie.materials);for(let dt=0,lt=ke.length;dt<lt;dt++)g.push(ke[dt])}for(let he=0,Ae=Te.length;he<Ae;he++)g.push(Tt(Te[he]).clone());let Pe;if(x.length===0&&g.length===1)Pe=g[0];else{Pe=T==="JOINT"?new Fa:new Bt;for(let he=0;he<g.length;he++)Pe.add(g[he])}return Pe.name=T==="JOINT"?_.sid:_.name,Pe.matrix.copy(w),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe}const Si=new ki({color:16711935});function zn(_,g){const w=[];for(let x=0,T=_.length;x<T;x++){const J=g[_[x]];J===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[x]),w.push(Si)):w.push(k(J))}return w}function Bi(_,g){const w=[];for(const x in _){const T=_[x],J=zn(T.materialKeys,g);if(J.length===0&&(x==="lines"||x==="linestrips"?J.push(new ys):J.push(new Tn)),x==="lines"||x==="linestrips")for(let Te=0,Pe=J.length;Te<Pe;Te++){const he=J[Te];if(he.isMeshPhongMaterial===!0||he.isMeshLambertMaterial===!0){const Ae=new ys;Ae.color.copy(he.color),Ae.opacity=he.opacity,Ae.transparent=he.transparent,J[Te]=Ae}}const se=T.data.attributes.skinIndex!==void 0,be=J.length===1?J[0]:J;let ge;switch(x){case"lines":ge=new Tc(T.data,be);break;case"linestrips":ge=new Cs(T.data,be);break;case"triangles":case"polylist":se?ge=new wc(T.data,be):ge=new kt(T.data,be);break}w.push(ge)}return w}function vr(_){return Oe.nodes[_]!==void 0}function Tt(_){return y(Oe.nodes[_],un)}function Ti(_){const g={name:_.getAttribute("name"),children:[]};gt(_);const w=i(_,"node");for(let x=0;x<w.length;x++)g.children.push(ci(w[x]));Oe.visualScenes[_.getAttribute("id")]=g}function yr(_){const g=new Bt;g.name=_.name;const w=_.children;for(let x=0;x<w.length;x++){const T=w[x];g.add(Tt(T.id))}return g}function Yt(_){return Oe.visualScenes[_]!==void 0}function xr(_){return y(Oe.visualScenes[_],yr)}function Ns(_){const g=i(_,"instance_visual_scene")[0];return xr(a(g.getAttribute("url")))}function Fn(){const _=Oe.clips;if(l(_)===!0){if(l(Oe.animations)===!1){const g=[];for(const w in Oe.animations){const x=A(w);for(let T=0,J=x.length;T<J;T++)g.push(x[T])}Hn.push(new Ea("default",-1,g))}}else for(const g in _)Hn.push(Z(g))}function Hc(_){let g="";const w=[_];for(;w.length;){const x=w.shift();x.nodeType===Node.TEXT_NODE?g+=x.textContent:(g+=`
`,w.push.apply(w,x.childNodes))}return g.trim()}if(e.length===0)return{scene:new Mc};const Ka=new DOMParser().parseFromString(e,"application/xml"),Ct=i(Ka,"COLLADA")[0],Ps=Ka.getElementsByTagName("parsererror")[0];if(Ps!==void 0){const _=i(Ps,"div")[0];let g;return _?g=_.textContent:g=Hc(Ps),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}const Gc=Ct.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Gc);const Za=h(i(Ct,"asset")[0]),Ja=new Ga(this.manager);Ja.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Ds;ql&&(Ds=new ql(this.manager),Ds.setPath(this.resourcePath||t));const Bn=new Be,Hn=[];let Qa={},Vc=0;const Oe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ct,"library_animations","animation",f),m(Ct,"library_animation_clips","animation_clip",H),m(Ct,"library_controllers","controller",Q),m(Ct,"library_images","image",$),m(Ct,"library_effects","effect",Ce),m(Ct,"library_materials","material",de),m(Ct,"library_cameras","camera",ae),m(Ct,"library_lights","light",Se),m(Ct,"library_geometries","geometry",re),m(Ct,"library_nodes","node",ci),m(Ct,"library_visual_scenes","visual_scene",Ti),m(Ct,"library_kinematics_models","kinematics_model",ii),m(Ct,"library_physics_models","physics_model",j),m(Ct,"scene","instance_kinematics_scene",ze),v(Oe.animations,M),v(Oe.clips,te),v(Oe.controllers,B),v(Oe.images,F),v(Oe.effects,C),v(Oe.materials,_e),v(Oe.cameras,Le),v(Oe.lights,xt),v(Oe.geometries,Et),v(Oe.visualScenes,yr),Fn(),Ke();const Gn=Ns(i(Ct,"scene")[0]);return Gn.animations=Hn,Za.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Gn.rotation.set(-Math.PI/2,0,0)),Gn.scale.multiplyScalar(Za.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Hn},kinematics:Qa,library:Oe,scene:Gn}}}function A0(...o){const e=Object.getPrototypeOf(this).clone.call(this,...o);return e.isURDFCollider=!0,e}function ms(o){o.isURDFCollider=!0,o.clone=A0}class Fc extends _t{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink",this.urdfNode=null}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this}}class E0 extends _t{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,e){case"fixed":case"continuous":case"revolute":case"prismatic":this.jointValue=0;break;case"planar":this.jointValue=new Array(2).fill(0);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.urdfNode=null,this.jointValue=null,this.jointType="fixed",this.axis=null,this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.jointType=e.jointType,this.axis=e.axis?e.axis.clone():null,this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=Array.isArray(e.jointValue)?[...e.jointValue]:e.jointValue,this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this}setAngle(...e){return this.setOffset(...e)}setOffset(...e){switch(e=e.map(t=>parseFloat(t)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone()),this.jointType){case"fixed":break;case"continuous":case"revolute":{let t=e[0];if(t==null||t===this.jointValue)break;!this.ignoreLimits&&this.jointType==="revolute"&&(t=Math.min(this.limit.upper,t),t=Math.max(this.limit.lower,t));const i=new Wt().setFromAxisAngle(this.axis,t);this.quaternion.multiplyQuaternions(this.origQuaternion,i),this.jointValue=t,this.matrixWorldNeedsUpdate=!0;break}case"prismatic":{let t=e[0];if(t==null||t===this.jointValue)break;this.ignoreLimits||(t=Math.min(this.limit.upper,t),t=Math.max(this.limit.lower,t)),this.position.copy(this.origPosition),this.position.addScaledVector(this.axis,t),this.jointValue=t,this.worldMatrixNeedsUpdate=!0;break}case"floating":case"planar":console.warn(`'${this.jointType}' joint not yet supported`)}return this.jointValue}}class C0 extends Fc{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null}copy(e,t){return super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.traverse(i=>{i.isURDFJoint&&i.name in e.joints&&(this.joints[i.name]=i),i.isURDFLink&&i.name in e.links&&(this.links[i.name]=i)}),this}setAngle(e,...t){const i=this.joints[e];return i?i.setAngle(...t):null}setAngles(e){for(const t in e)this.setAngle(t,e[t])}}const fa=new Wt,Yl=new Nn;function Gr(o){return o?o.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function ga(o,e,t=!1){t||o.rotation.set(0,0,0),Yl.set(e[0],e[1],e[2],"ZYX"),fa.setFromEuler(Yl),fa.multiply(o.quaternion),o.quaternion.copy(fa)}class L0{constructor(e){this.manager=e||Ic,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions=null}load(e,t,i,r){const n=this.manager,s=Rn.extractUrlBase(e),a=this.manager.resolveURL(e);n.itemStart(a),fetch(a,this.fetchOptions).then(c=>(i&&i(null),c.text())).then(c=>{this.workingPath===""&&(this.workingPath=s);const l=this.parse(c);t(l),n.itemEnd(a)}).catch(c=>{r?r(c):console.error("URDFLoader: Error loading file.",c),n.itemError(a),n.itemEnd(a)})}parse(e){const t=this.packages,i=this.loadMeshCb,r=this.parseVisual,n=this.parseCollision,s=this.workingPath,a=this.manager,c={},l={},h={};function u(E){if(!/^package:\/\//.test(E))return s?s+E:E;const[M,A]=E.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof t=="string")return t.endsWith(M)?t+"/"+A:t+"/"+M+"/"+A;if(typeof t=="object")return M in t?t[M]+"/"+A:(console.error(`URDFLoader : ${M} not found in provided package list.`),null)}function d(E){let M;E instanceof Document?M=[...E.children]:E instanceof Element?M=[E]:M=[...new DOMParser().parseFromString(E,"text/xml").children];const A=M.filter(S=>S.nodeName==="robot").pop();return m(A)}function m(E){const M=[...E.children],A=M.filter(N=>N.nodeName.toLowerCase()==="link"),S=M.filter(N=>N.nodeName.toLowerCase()==="joint"),P=M.filter(N=>N.nodeName.toLowerCase()==="material"),D=new C0;return D.robotName=E.getAttribute("name"),D.urdfRobotNode=E,P.forEach(N=>{const b=N.getAttribute("name");h[b]=f(N)}),A.forEach(N=>{const b=N.getAttribute("name"),L=E.querySelector(`child[link="${b}"]`)===null;c[b]=y(N,L?D:null)}),S.forEach(N=>{const b=N.getAttribute("name");l[b]=v(N)}),D.joints=l,D.links=c,D}function v(E){const M=[...E.children],A=E.getAttribute("type"),S=new E0;S.urdfNode=E,S.name=E.getAttribute("name"),S.jointType=A;let P=null,D=null,N=[0,0,0],b=[0,0,0];M.forEach(G=>{const W=G.nodeName.toLowerCase();W==="origin"?(N=Gr(G.getAttribute("xyz")),b=Gr(G.getAttribute("rpy"))):W==="child"?D=c[G.getAttribute("link")]:W==="parent"?P=c[G.getAttribute("link")]:W==="limit"&&(S.limit.lower=parseFloat(G.getAttribute("lower")||S.limit.lower),S.limit.upper=parseFloat(G.getAttribute("upper")||S.limit.upper))}),P.add(S),S.add(D),ga(S,b),S.position.set(N[0],N[1],N[2]);const L=M.filter(G=>G.nodeName.toLowerCase()==="axis")[0];if(L){const G=L.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));S.axis=new U(G[0],G[1],G[2]),S.axis.normalize()}return S}function y(E,M=null){M===null&&(M=new Fc);const A=[...E.children];return M.name=E.getAttribute("name"),M.urdfNode=E,r&&A.filter(S=>S.nodeName.toLowerCase()==="visual").forEach(S=>p(S,M,h)),n&&A.filter(S=>S.nodeName.toLowerCase()==="collision").forEach(S=>p(S,M)),M}function f(E){const M=[...E.children],A=new Tn;return A.name=E.getAttribute("name")||"",M.forEach(S=>{const P=S.nodeName.toLowerCase();if(P==="color"){const D=S.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));A.color.setRGB(D[0],D[1],D[2]),A.opacity=D[3],A.transparent=D[3]<1}else if(P==="texture"){const D=S.getAttribute("filename");if(D){const N=new Ga(a),b=u(D);A.map=N.load(b)}}}),A}function p(E,M,A={}){const S=E.nodeName.toLowerCase()==="collision";let P=[0,0,0],D=[0,0,0],N=[1,1,1];const b=[...E.children];let L=null,G=null;const W=b.filter(O=>O.nodeName.toLowerCase()==="material")[0];if(W){const O=W.getAttribute("name");O&&O in A?L=A[O]:L=f(W)}else L=new Tn;b.forEach(O=>{const V=O.nodeName.toLowerCase();if(V==="geometry"){const q=O.children[0].nodeName.toLowerCase();if(q==="mesh"){const H=O.children[0].getAttribute("filename"),te=u(H);if(te!==null){const Z=O.children[0].getAttribute("scale");Z&&(N=Gr(Z)),i(te,a,(Q,le)=>{le?console.error("URDFLoader: Error loading mesh.",le):Q&&(Q instanceof kt&&(Q.material=L),M.add(Q),Q.position.set(P[0],P[1],P[2]),Q.rotation.set(0,0,0),Q.scale.x*=N[0],Q.scale.y*=N[1],Q.scale.z*=N[2],ga(Q,D),S&&ms(Q))})}}else if(q==="box"){G=new kt,G.geometry=new zg(1,1,1),G.material=L;const H=Gr(O.children[0].getAttribute("size"));M.add(G),G.scale.set(H[0],H[1],H[2]),S&&ms(G)}else if(q==="sphere"){G=new kt,G.geometry=new Bg(1,30,30),G.material=L;const H=parseFloat(O.children[0].getAttribute("radius"))||0;G.scale.set(H,H,H),M.add(G),S&&ms(G)}else if(q==="cylinder"){G=new kt,G.geometry=new Fg(1,1,1,30),G.material=L;const H=parseFloat(O.children[0].getAttribute("radius"))||0,te=parseFloat(O.children[0].getAttribute("length"))||0;G.scale.set(H,te,H),G.rotation.set(Math.PI/2,0,0),M.add(G),S&&ms(G)}}else V==="origin"&&(P=Gr(O.getAttribute("xyz")),D=Gr(O.getAttribute("rpy")))}),G&&(ga(G,D,!0),G.position.set(P[0],P[1],P[2]))}return d(e)}defaultMeshLoader(e,t,i){/\.stl$/i.test(e)?new S0(t).load(e,r=>{const n=new kt(r,new Tn);i(n)}):/\.dae$/i.test(e)?new T0(t).load(e,r=>i(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}var R0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,hn=(o,e,t,i)=>{for(var r=i>1?void 0:i?I0(e,t):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&R0(e,t,r),r};const fr=class Bc extends Ia{constructor(){super(...arguments),this.urdfConfigs=zc,this.name=this.urdfConfigs[0].name,this.angles={},this.pose=[0,0,0],this._translation=[0,0,0],this._rotation=[0,0,0,0],this.loader=new Ya,this.group=new Bt}getUrdfConfig(){return this.urdfConfigs.find(({name:e})=>e===this.name)??this.urdfConfigs[0]}getField(){const e=this.closest("frc-field3d");if(e)return e}static updatePose(e,t){const[i,r,n]=t.translation;e.position.set(i,r,n),e.rotation.setFromQuaternion(Xa(t.rotation))}loadRobotModel(){const e=this.getField(),t=this.getUrdfConfig();if(!e)return;const i=e.getFieldGroup();i.remove(this.group),this.object&&this.group.remove(this.object);const r=new Rc,n=new L0(r),s=x0(t.src??"");n.packages={"":xs(e.assetPathPrefix??"",s)};const a=new Promise(h=>{if(t.src)n.load(xs(e.assetPathPrefix??"",t.src),u=>{h(u)});else{const u=n.parse(t.content??"");h(u)}}),c=new Bt;this.group=c,i.add(this.group);const l=new Bt;this.object=l,c.add(l),l.rotation.setFromQuaternion(In(t.rotations)),l.position.set(...t.position),a.then(h=>{this.robot=h,this.updateAngles(),l.add(h)})}updateAngles(){var e;(e=this.robot)==null||e.setAngles(this.angles)}firstUpdated(){this.updateUrdfConfigs(),this.renderObject()}updated(e){if(e.has("name")&&this.loadRobotModel(),e.has("angles")&&this.updateAngles(),e.has("pose")){const[t=0,i=0,r=0]=this.pose;this._translation=[t,i],this._rotation=r}}updateUrdfConfigs(){const e=this.getField(),t=e==null?void 0:e.urdfConfigs;t!=null&&t.length&&t!==this.urdfConfigs&&(this.urdfConfigs=t,this.urdfConfigs.some(i=>i.name===this.name)||(this.name=this.urdfConfigs[0].name))}renderObject(){this.group&&Bc.updatePose(this.group,{translation:this._translation.length===2?[...this._translation,0]:this._translation,rotation:typeof this._rotation=="number"?Uc([{axis:"z",degrees:this._rotation}]):this._rotation}),requestAnimationFrame(()=>{this.renderObject()})}};hn([sn()],fr.prototype,"urdfConfigs",2);hn([Jt({type:String})],fr.prototype,"name",2);hn([Jt({type:Object})],fr.prototype,"angles",2);hn([Jt({type:Array})],fr.prototype,"pose",2);hn([sn()],fr.prototype,"_translation",2);hn([sn()],fr.prototype,"_rotation",2);let N0=fr;customElements.get("frc-field3d-urdf")||customElements.define("frc-field3d-urdf",N0);var P0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,wi=(o,e,t,i)=>{for(var r=i>1?void 0:i?D0(e,t):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&P0(e,t,r),r};const li=class _s extends Ia{constructor(){super(...arguments),this.fieldConfigs=y0,this.objectConfigs=Oc,this.urdfConfigs=zc,this.game=this.fieldConfigs[0].game,this.origin="red",this.backgroundColor="black",this.enableVR=!1,this.ORBIT_FIELD_DEFAULT_TARGET=new U(0,.5,0),this.ORBIT_FIELD_DEFAULT_POSITION=new U(0,6,-12),this.WPILIB_ROTATION=In([{axis:"x",degrees:-90},{axis:"y",degrees:180}]),this.scene=new Mc,this.loader=new Ya}getFieldConfig(){return this.fieldConfigs.find(({game:e})=>e===this.game)??this.fieldConfigs[0]}getCamera(){const e=this.getBoundingClientRect();return new Ft(50,e.width/e.height,.1,100)}static getOrbitControls(e,t){const i=new v0(e,t);return i.maxDistance=30,i.enabled=!0,i.update(),i}static addLights(e){const t=new ja(16777215,.2);t.position.set(0,10,0),e.add(t);const i=16777215,r=4473924,n=1,s=new wg(i,r,n);e.add(s)}initRenderer(){if(!this.canvas)return;this.renderer=new bc({antialias:!0,canvas:this.canvas});const e=this.getBoundingClientRect();this.renderer.setSize(e.width,e.height),this.vrButton=nn.createButton(this.renderer),this.renderer.xr.enabled=this.enableVR,this.renderer.setAnimationLoop(()=>this.renderField())}initScene(){this.wpilibCoordinateGroup=new Bt,this.scene.add(this.wpilibCoordinateGroup),this.wpilibCoordinateGroup.rotation.setFromQuaternion(this.WPILIB_ROTATION),this.wpilibFieldCoordinateGroup=new Bt,this.wpilibCoordinateGroup.add(this.wpilibFieldCoordinateGroup)}updateCanvasSize(){var e;const t=this.getBoundingClientRect();(e=this.renderer)==null||e.setSize(t.width,t.height),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix()}static adjustMaterials(e){e.traverse(t=>{const i=t;if(i.isMesh&&i.material instanceof Pn){const r=i.material;r.metalness=0,r.roughness=1}})}static updatePose(e,t){const[i,r,n]=t.translation;e.position.set(r,-i,n),e.rotation.setFromQuaternion(Xa(t.rotation))}loadFieldModel(e){this.fieldObject&&this.wpilibCoordinateGroup.remove(this.fieldObject);const t=xs(this.assetPathPrefix??"",e.src);this.loader.load(t,i=>{this.fieldObject=i.scene,this.wpilibCoordinateGroup.add(i.scene),_s.adjustMaterials(i.scene),i.scene.rotation.setFromQuaternion(In(e.rotations))})}getFieldGroup(){return this.wpilibFieldCoordinateGroup}firstUpdated(){this.initScene(),this.initRenderer(),this.camera=this.getCamera(),this.controls=_s.getOrbitControls(this.camera,this.canvas),this.camera.position.copy(this.ORBIT_FIELD_DEFAULT_POSITION),this.controls.target.copy(this.ORBIT_FIELD_DEFAULT_TARGET),_s.addLights(this.scene),new ResizeObserver(()=>{this.updateCanvasSize()}).observe(this)}updated(e){if(e.has("fieldConfig")&&(this.fieldConfigs.some(t=>t.game===this.game)||(this.game=this.fieldConfigs[0].game)),e.has("game")&&this.loadFieldModel(this.getFieldConfig()),e.has("backgroundColor")&&(this.scene.background=new Be(this.backgroundColor)),e.has("origin")){const t=this.getFieldConfig();if(t){const i=this.origin!=="red";this.wpilibFieldCoordinateGroup.setRotationFromAxisAngle(new U(0,0,1),i?0:Math.PI),this.wpilibFieldCoordinateGroup.position.set(eo(t.size[0]/2,t.unit,"m")*(i?-1:1),eo(t.size[1]/2,t.unit,"m")*(i?-1:1),0)}}e.has("enableVR")&&(this.enableVR?this.container.appendChild(this.vrButton):this.vrButton.remove(),this.renderer&&(this.renderer.xr.enabled=this.enableVR))}renderField(){var e;(e=this.renderer)==null||e.render(this.scene,this.camera),this.controls.update()}connectedCallback(){super.connectedCallback(),this.initRenderer()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.renderer)==null||e.dispose(),this.renderer=void 0}render(){return qc` <div class="container">
      <canvas></canvas>
    </div>`}};li.styles=Wc`
    :host {
      position: relative;
      display: block;
      width: 700px;
      height: 400px;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;wi([Jt({type:Array})],li.prototype,"fieldConfigs",2);wi([Jt({type:Array})],li.prototype,"objectConfigs",2);wi([Jt({type:Array})],li.prototype,"urdfConfigs",2);wi([Jt({type:String})],li.prototype,"game",2);wi([Jt({type:String})],li.prototype,"origin",2);wi([Jt({type:String,attribute:"background-color"})],li.prototype,"backgroundColor",2);wi([Jt({type:Boolean,attribute:"enable-vr"})],li.prototype,"enableVR",2);wi([Jt({type:String})],li.prototype,"assetPathPrefix",2);wi([Xl("canvas")],li.prototype,"canvas",2);wi([Xl(".container")],li.prototype,"container",2);let k0=li;customElements.get("frc-field3d")||customElements.define("frc-field3d",k0);export{Oc as F,y0 as O,zc as z};
