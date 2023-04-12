/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=i=>e=>typeof e=="function"?((n,t)=>(window.customElements.define(n,t),t))(i,e):((n,t)=>{const{kind:o,elements:r}=t;return{kind:o,elements:r,finisher(d){window.customElements.define(n,d)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function a(i){return(e,n)=>n!==void 0?((t,o,r)=>{o.constructor.createProperty(r,t)})(i,e,n):l(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;((s=window.HTMLSlotElement)===null||s===void 0?void 0:s.prototype.assignedElements)!=null;export{a as e,c as n};
//# sourceMappingURL=query-assigned-elements-a1ee9091.js.map
