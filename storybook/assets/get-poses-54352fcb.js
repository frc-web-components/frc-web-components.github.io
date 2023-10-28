function o(n,t){const r=[];for(let e=0;e<n.length/t;e+=1)r.push(n.slice(t*e,t*(e+1)));return r}function c(n){const t=new ArrayBuffer(8),r=new DataView(t);return n.forEach((e,s)=>{r.setUint8(s,e)}),r.getFloat64(0)}function u(n){return o(n,8).map(c)}function f(n,t=3){const r=n instanceof Uint8Array?u(n):n;return o(r,t)}export{f as g};
//# sourceMappingURL=get-poses-54352fcb.js.map
