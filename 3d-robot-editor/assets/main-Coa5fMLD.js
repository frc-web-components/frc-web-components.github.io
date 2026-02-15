import{v as he,L as ye,F as oe,B as Ue,a as re,I as xe,b as Ae,c as $,d as L,W as Se,e as ee,S as De,V as J,f as Le,U as ie,g as Be,h as Me,M as Oe,i as O,j as Ke,k as Qe,l as Pe,r as m,u as Ee,C as Je,_ as ae,m as te,G as N,n as A,o as g,p as ve,q as we,O as Te,s as je,t as Ie,E as Xe,Q as Ye,w as Ne,x as ke,y as _e,R as Ze,z as We}from"./RobotConfigEditor-BEinWXFZ.js";const pe=he>=125?"uv1":"uv2",k=new WeakMap;class ze extends ye{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,s,o){const n=new oe(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,r=>{const B={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,B).then(t).catch(o)},s,o)}decodeDracoFile(e,t,s,o){const n={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!s};this.decodeGeometry(e,n).then(t)}decodeGeometry(e,t){for(const a in t.attributeTypes){const f=t.attributeTypes[a];f.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[a]=f.name)}const s=JSON.stringify(t);if(k.has(e)){const a=k.get(e);if(a.key===s)return a.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const n=this.workerNextTaskID++,r=e.byteLength,B=this._getWorker(n,r).then(a=>(o=a,new Promise((f,u)=>{o._callbacks[n]={resolve:f,reject:u},o.postMessage({type:"decode",id:n,taskConfig:t,buffer:e},[e])}))).then(a=>this._createGeometry(a.geometry));return B.catch(()=>!0).then(()=>{o&&n&&this._releaseTask(o,n)}),k.set(e,{key:s,promise:B}),B}_createGeometry(e){const t=new Ue;e.index&&t.setIndex(new re(e.index.array,1));for(let s=0;s<e.attributes.length;s++){const o=e.attributes[s],n=o.name,r=o.array,B=o.itemSize;t.setAttribute(n,new re(r,B))}return t}_loadLibrary(e,t){const s=new oe(this.manager);return s.setPath(this.decoderPath),s.setResponseType(t),s.setWithCredentials(this.withCredentials),new Promise((o,n)=>{s.load(e,o,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(s=>{const o=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const n=Ve.toString(),r=["/* draco decoder */",o,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const o=new Worker(this.workerSourceURL);o._callbacks={},o._taskCosts={},o._taskLoad=0,o.postMessage({type:"init",decoderConfig:this.decoderConfig}),o.onmessage=function(n){const r=n.data;switch(r.type){case"decode":o._callbacks[r.id].resolve(r);break;case"error":o._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(o)}else this.workerPool.sort(function(o,n){return o._taskLoad>n._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[e]=t,s._taskLoad+=t,s})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Ve(){let i,e;onmessage=function(r){const B=r.data;switch(B.type){case"init":i=B.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(i)});break;case"decode":const a=B.buffer,f=B.taskConfig;e.then(u=>{const d=u.draco,C=new d.Decoder,l=new d.DecoderBuffer;l.Init(new Int8Array(a),a.byteLength);try{const c=t(d,C,l,f),F=c.attributes.map(h=>h.array.buffer);c.index&&F.push(c.index.array.buffer),self.postMessage({type:"decode",id:B.id,geometry:c},F)}catch(c){console.error(c),self.postMessage({type:"error",id:B.id,error:c.message})}finally{d.destroy(l),d.destroy(C)}});break}};function t(r,B,a,f){const u=f.attributeIDs,d=f.attributeTypes;let C,l;const c=B.GetEncodedGeometryType(a);if(c===r.TRIANGULAR_MESH)C=new r.Mesh,l=B.DecodeBufferToMesh(a,C);else if(c===r.POINT_CLOUD)C=new r.PointCloud,l=B.DecodeBufferToPointCloud(a,C);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!l.ok()||C.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+l.error_msg());const F={index:null,attributes:[]};for(const h in u){const M=self[d[h]];let D,G;if(f.useUniqueIDs)G=u[h],D=B.GetAttributeByUniqueId(C,G);else{if(G=B.GetAttributeId(C,r[u[h]]),G===-1)continue;D=B.GetAttribute(C,G)}F.attributes.push(o(r,B,C,h,M,D))}return c===r.TRIANGULAR_MESH&&(F.index=s(r,B,C)),r.destroy(C),F}function s(r,B,a){const u=a.num_faces()*3,d=u*4,C=r._malloc(d);B.GetTrianglesUInt32Array(a,d,C);const l=new Uint32Array(r.HEAPF32.buffer,C,u).slice();return r._free(C),{array:l,itemSize:1}}function o(r,B,a,f,u,d){const C=d.num_components(),c=a.num_points()*C,F=c*u.BYTES_PER_ELEMENT,h=n(r,u),M=r._malloc(F);B.GetAttributeDataArrayForAllPoints(a,d,h,F,M);const D=new u(r.HEAPF32.buffer,M,c).slice();return r._free(M),{name:f,array:D,itemSize:C}}function n(r,B){switch(B){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}const Ce=new ee,Q=new J;class ne extends xe{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Ae(e,3)),this.setAttribute("uv",new Ae(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),s.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new $(t,6,1);return this.setAttribute("instanceStart",new L(s,3,0)),this.setAttribute("instanceEnd",new L(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let s;e instanceof Float32Array?s=e:Array.isArray(e)&&(s=new Float32Array(e));const o=new $(s,t*2,1);return this.setAttribute("instanceColorStart",new L(o,t,0)),this.setAttribute("instanceColorEnd",new L(o,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Se(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ee);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ce.setFromBufferAttribute(t),this.boundingBox.union(Ce))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new De),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let o=0;for(let n=0,r=e.count;n<r;n++)Q.fromBufferAttribute(e,n),o=Math.max(o,s.distanceToSquared(Q)),Q.fromBufferAttribute(t,n),o=Math.max(o,s.distanceToSquared(Q));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class He extends ne{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,s=new Float32Array(2*t);for(let o=0;o<t;o+=3)s[2*o]=e[o],s[2*o+1]=e[o+1],s[2*o+2]=e[o+2],s[2*o+3]=e[o+3],s[2*o+4]=e[o+4],s[2*o+5]=e[o+5];return super.setPositions(s),this}setColors(e,t=3){const s=e.length-t,o=new Float32Array(2*s);if(t===3)for(let n=0;n<s;n+=t)o[2*n]=e[n],o[2*n+1]=e[n+1],o[2*n+2]=e[n+2],o[2*n+3]=e[n+3],o[2*n+4]=e[n+4],o[2*n+5]=e[n+5];else for(let n=0;n<s;n+=t)o[2*n]=e[n],o[2*n+1]=e[n+1],o[2*n+2]=e[n+2],o[2*n+3]=e[n+3],o[2*n+4]=e[n+4],o[2*n+5]=e[n+5],o[2*n+6]=e[n+6],o[2*n+7]=e[n+7];return super.setColors(o,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class se extends Le{constructor(e){super({type:"LineMaterial",uniforms:ie.clone(ie.merge([Be.common,Be.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${he>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const _=new O,ce=new J,de=new J,I=new O,p=new O,b=new O,Z=new J,W=new Qe,H=new Ke,le=new J,P=new ee,v=new De,R=new O;let y,S;function ue(i,e,t){return R.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),R.multiplyScalar(1/R.w),R.x=S/t.width,R.y=S/t.height,R.applyMatrix4(i.projectionMatrixInverse),R.multiplyScalar(1/R.w),Math.abs(Math.max(R.x,R.y))}function qe(i,e){const t=i.matrixWorld,s=i.geometry,o=s.attributes.instanceStart,n=s.attributes.instanceEnd,r=Math.min(s.instanceCount,o.count);for(let B=0,a=r;B<a;B++){H.start.fromBufferAttribute(o,B),H.end.fromBufferAttribute(n,B),H.applyMatrix4(t);const f=new J,u=new J;y.distanceSqToSegment(H.start,H.end,u,f),u.distanceTo(f)<S*.5&&e.push({point:u,pointOnLine:f,distance:y.origin.distanceTo(u),object:i,face:null,faceIndex:B,uv:null,[pe]:null})}}function $e(i,e,t){const s=e.projectionMatrix,n=i.material.resolution,r=i.matrixWorld,B=i.geometry,a=B.attributes.instanceStart,f=B.attributes.instanceEnd,u=Math.min(B.instanceCount,a.count),d=-e.near;y.at(1,b),b.w=1,b.applyMatrix4(e.matrixWorldInverse),b.applyMatrix4(s),b.multiplyScalar(1/b.w),b.x*=n.x/2,b.y*=n.y/2,b.z=0,Z.copy(b),W.multiplyMatrices(e.matrixWorldInverse,r);for(let C=0,l=u;C<l;C++){if(I.fromBufferAttribute(a,C),p.fromBufferAttribute(f,C),I.w=1,p.w=1,I.applyMatrix4(W),p.applyMatrix4(W),I.z>d&&p.z>d)continue;if(I.z>d){const G=I.z-p.z,E=(I.z-d)/G;I.lerp(p,E)}else if(p.z>d){const G=p.z-I.z,E=(p.z-d)/G;p.lerp(I,E)}I.applyMatrix4(s),p.applyMatrix4(s),I.multiplyScalar(1/I.w),p.multiplyScalar(1/p.w),I.x*=n.x/2,I.y*=n.y/2,p.x*=n.x/2,p.y*=n.y/2,H.start.copy(I),H.start.z=0,H.end.copy(p),H.end.z=0;const F=H.closestPointToPointParameter(Z,!0);H.at(F,le);const h=Pe.lerp(I.z,p.z,F),M=h>=-1&&h<=1,D=Z.distanceTo(le)<S*.5;if(M&&D){H.start.fromBufferAttribute(a,C),H.end.fromBufferAttribute(f,C),H.start.applyMatrix4(r),H.end.applyMatrix4(r);const G=new J,E=new J;y.distanceSqToSegment(H.start,H.end,E,G),t.push({point:E,pointOnLine:G,distance:y.origin.distanceTo(E),object:i,face:null,faceIndex:C,uv:null,[pe]:null})}}}class ge extends Oe{constructor(e=new ne,t=new se({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,s=e.attributes.instanceEnd,o=new Float32Array(2*t.count);for(let r=0,B=0,a=t.count;r<a;r++,B+=2)ce.fromBufferAttribute(t,r),de.fromBufferAttribute(s,r),o[B]=B===0?0:o[B-1],o[B+1]=o[B]+ce.distanceTo(de);const n=new $(o,2,1);return e.setAttribute("instanceDistanceStart",new L(n,1,0)),e.setAttribute("instanceDistanceEnd",new L(n,1,1)),this}raycast(e,t){const s=this.material.worldUnits,o=e.camera;o===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const n=e.params.Line2!==void 0&&e.params.Line2.threshold||0;y=e.ray;const r=this.matrixWorld,B=this.geometry,a=this.material;S=a.linewidth+n,B.boundingSphere===null&&B.computeBoundingSphere(),v.copy(B.boundingSphere).applyMatrix4(r);let f;if(s)f=S*.5;else{const d=Math.max(o.near,v.distanceToPoint(y.origin));f=ue(o,d,a.resolution)}if(v.radius+=f,y.intersectsSphere(v)===!1)return;B.boundingBox===null&&B.computeBoundingBox(),P.copy(B.boundingBox).applyMatrix4(r);let u;if(s)u=S*.5;else{const d=Math.max(o.near,P.distanceToPoint(y.origin));u=ue(o,d,a.resolution)}P.expandByScalar(u),y.intersectsBox(P)!==!1&&(s?qe(this,t):$e(this,o,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(_),this.material.uniforms.resolution.value.set(_.z,_.w))}}class et extends ge{constructor(e=new He,t=new se({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}let w;const z=()=>{if(w)return w;const i="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let o=i;WebAssembly.validate(t)&&(o=e);let n;const r=WebAssembly.instantiate(B(o),{}).then(d=>{n=d.instance,n.exports.__wasm_call_ctors()});function B(d){const C=new Uint8Array(d.length);for(let c=0;c<d.length;++c){const F=d.charCodeAt(c);C[c]=F>96?F-71:F>64?F-65:F>47?F+4:F>46?63:62}let l=0;for(let c=0;c<d.length;++c)C[l++]=C[c]<60?s[C[c]]:(C[c]-60)*64+C[++c];return C.buffer.slice(0,l)}function a(d,C,l,c,F,h){const M=n.exports.sbrk,D=l+3&-4,G=M(D*c),E=M(F.length),U=new Uint8Array(n.exports.memory.buffer);U.set(F,E);const x=d(G,l,c,E,F.length);if(x===0&&h&&h(G,D,c),C.set(U.subarray(G,G+l*c)),M(G-M(0)),x!==0)throw new Error(`Malformed buffer data: ${x}`)}const f={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return w={ready:r,supported:!0,decodeVertexBuffer(d,C,l,c,F){a(n.exports.meshopt_decodeVertexBuffer,d,C,l,c,n.exports[f[F]])},decodeIndexBuffer(d,C,l,c){a(n.exports.meshopt_decodeIndexBuffer,d,C,l,c)},decodeIndexSequence(d,C,l,c){a(n.exports.meshopt_decodeIndexSequence,d,C,l,c)},decodeGltfBuffer(d,C,l,c,F,h){a(n.exports[u[F]],d,C,l,c,n.exports[f[h]])}},w},tt=m.forwardRef(function({points:e,color:t=16777215,vertexColors:s,linewidth:o,lineWidth:n,segments:r,dashed:B,...a},f){var u,d;const C=Ee(M=>M.size),l=m.useMemo(()=>r?new ge:new et,[r]),[c]=m.useState(()=>new se),F=(s==null||(u=s[0])==null?void 0:u.length)===4?4:3,h=m.useMemo(()=>{const M=r?new ne:new He,D=e.map(G=>{const E=Array.isArray(G);return G instanceof J||G instanceof O?[G.x,G.y,G.z]:G instanceof Me?[G.x,G.y,0]:E&&G.length===3?[G[0],G[1],G[2]]:E&&G.length===2?[G[0],G[1],0]:G});if(M.setPositions(D.flat()),s){t=16777215;const G=s.map(E=>E instanceof Je?E.toArray():E);M.setColors(G.flat(),F)}return M},[e,r,s,F]);return m.useLayoutEffect(()=>{l.computeLineDistances()},[e,l]),m.useLayoutEffect(()=>{B?c.defines.USE_DASH="":delete c.defines.USE_DASH,c.needsUpdate=!0},[B,c]),m.useEffect(()=>()=>{h.dispose(),c.dispose()},[h]),m.createElement("primitive",ae({object:l,ref:f},a),m.createElement("primitive",{object:h,attach:"geometry"}),m.createElement("primitive",ae({object:c,attach:"material",color:t,vertexColors:!!s,resolution:[C.width,C.height],linewidth:(d=o??n)!==null&&d!==void 0?d:1,dashed:B,transparent:F===4},a)))});let T=null,be="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function Re(i=!0,e=!0,t){return s=>{t&&t(s),i&&(T||(T=new ze),T.setDecoderPath(typeof i=="string"?i:be),s.setDRACOLoader(T)),e&&s.setMeshoptDecoder(typeof z=="function"?z():z)}}const K=(i,e,t,s)=>te(N,i,Re(e,t,s));K.preload=(i,e,t,s)=>te.preload(N,i,Re(e,t,s));K.clear=i=>te.clear(N,i);K.setDecoderPath=i=>{be=i};const X=[{game:"Reefscape",src:"/3d-models/Field3d_2025.glb",rotations:[{axis:"x",degrees:90}],size:[57.57291667,26.4167],unit:"foot"},{game:"Crescendo",src:"/3d-models/Field3d_2024.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:180}],size:[54.2708333,26.9375],unit:"foot"},{game:"Charged Up",src:"/3d-models/Field3d_2023.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:180}],size:[54.27083,26.2916],unit:"foot"},{game:"Rapid React",src:"/3d-models/Field3d_2022.glb",rotations:[{axis:"x",degrees:90}],size:[54,27],unit:"foot"},{game:"Infinite Recharge",src:"/3d-models/Field3d_2021.glb",rotations:[{axis:"x",degrees:90},{axis:"z",degrees:90}],size:[52.4375,26.9375],unit:"foot"},{game:"Evergreen",src:"/3d-models/Field3d_Evergreen.glb",rotations:[{axis:"x",degrees:90}],size:[54,27],unit:"foot"}],fe="m",j={km:1e3,m:1,cm:.01,mm:.001,mi:1609.34,yd:.9144,ft:.3048,in:.0254},Ge={km:"km",m:"m",meters:"m",cm:"cm",centimeters:"cm",mm:"mm",mi:"mi",miles:"mi",yd:"yd",yards:"yards",ft:"ft",feet:"ft",foot:"ft",in:"in",inches:"in"},Y=(i,e,t)=>(e=Ge[e],t=Ge[t],typeof j[e]>"u"&&(e=fe),typeof j[t]>"u"&&(t=fe),i*j[e]/j[t]);function V(i){const e=g(i),t=new Xe().setFromQuaternion(e,"ZYX");return`${t.x} ${t.y} ${t.z}`}function nt(i,e,t,s,o){const n=V(s),[r,B,a]=o;let f=`
  <link name="model">
    <visual>
      <origin xyz="${r} ${B} ${a}" rpy="${n}"/>
      <geometry>
        <mesh filename="${t}/model.glb"/>
      </geometry>
    </visual>
  </link>`;i.forEach((l,c)=>{const F=V(l.zeroedRotations),[h,M,D]=l.zeroedPosition;f+=`
  <link name="model_${c}">
    <visual>
      <origin xyz="${h} ${M} ${D}" rpy="${F}"/>
      <geometry>
        <mesh filename="${t}/model_${c}.glb"/>
      </geometry>
    </visual>
  </link>`});let u="";const d=je(e,i.length),C=new Set;return e.forEach((l,c)=>{if(!d.has(c))return;C.add(l.child);const F=`joint_${c}`,h=l.parent!==void 0?`model_${l.parent}`:"model",M=`model_${l.child}`,D=V(l.origin.rotations),[G,E,U]=l.origin.position;let x="";l.axis&&(x+=`
    <axis xyz="${l.axis[0]} ${l.axis[1]} ${l.axis[2]}"/>`),l.limit&&(x+=`
    <limit lower="${l.limit.lower}" upper="${l.limit.upper}" effort="0" velocity="0"/>`),u+=`
  <joint name="${F}" type="${l.type}">
    <origin xyz="${G} ${E} ${U}" rpy="${D}"/>
    <parent link="${h}"/>
    <child link="${M}"/>${x}
  </joint>`}),i.forEach((l,c)=>{C.has(c)||(u+=`
  <joint name="__auto_fixed_${c}" type="fixed">
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <parent link="model"/>
    <child link="model_${c}"/>
  </joint>`)}),`<?xml version="1.0"?>
<robot name="robot">${f}${u}
</robot>`}function Fe(i,e,t){i.traverse(s=>{const o=s;if(o.isMesh&&o.material instanceof Ie){const n=o.material;n.metalness=0,n.roughness=1,e&&n.color.set(e),t!==void 0&&t<1&&(n.transparent=!0,n.opacity=t)}})}function st(i,e,t,s,o,n,r){const[B,a]=m.useState(null),f=m.useMemo(()=>{const C=i.lastIndexOf("/");return C!==-1?i.substring(0,C):""},[i]),u=m.useMemo(()=>JSON.stringify(s),[s]),d=m.useMemo(()=>JSON.stringify(o),[o]);return m.useEffect(()=>{const C=nt(s,o,f,e,t),l=new ve,c=new we(l),F=new N(l);c.loadMeshCb=(M,D,G)=>{F.load(M,E=>{const U=E.scene;Fe(U,n,r),G(U)},void 0,E=>{console.error(`Failed to load mesh ${M}:`,E),G(new Te)})};const h=c.parse(C);return Fe(h,n,r),a(h),()=>{a(null)}},[u,d,f,e,t,n,r]),B}function ot({object:i}){const{poses:e,model:t,modelRotations:s,modelPosition:o,components:n=[],joints:r,jointValues:B}=i,a=i.type==="ghost"?i.color:void 0,f=i.type==="ghost"?.5:1,u=st(t,s,o,n,r??[],a,f);return m.useEffect(()=>{!u||!B||u.setJointValues(B)},[u,B]),u?A.jsx(A.Fragment,{children:e.map((d,C)=>{const[l,c,F]=d.translation,h=g(d.rotation);return A.jsx("group",{position:[l,c,F],quaternion:[h.x,h.y,h.z,h.w],children:A.jsx("primitive",{object:C===0?u:u.clone()})},`robot-${C}`)})}):null}function rt({variant:i}){switch(i.toLowerCase()){case"note":return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("cylinderGeometry",{args:[.18,.18,.05,32]}),A.jsx("meshStandardMaterial",{color:"#ff6600",metalness:0,roughness:.8})]});case"cone":return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("coneGeometry",{args:[.15,.33,16]}),A.jsx("meshStandardMaterial",{color:"#ffff00",metalness:0,roughness:.8})]});case"cube":return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("boxGeometry",{args:[.24,.24,.24]}),A.jsx("meshStandardMaterial",{color:"#9900ff",metalness:0,roughness:.8})]});case"cargo":return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("sphereGeometry",{args:[.12,32,32]}),A.jsx("meshStandardMaterial",{color:"#0033ff",metalness:0,roughness:.8})]});case"power cell":return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("sphereGeometry",{args:[.09,32,32]}),A.jsx("meshStandardMaterial",{color:"#ffff00",metalness:0,roughness:.8})]});default:return A.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[A.jsx("sphereGeometry",{args:[.1,32,32]}),A.jsx("meshStandardMaterial",{color:"#00ff00",metalness:0,roughness:.8})]})}}function At({object:i}){const{variant:e,poses:t}=i;return A.jsx(A.Fragment,{children:t.map((s,o)=>{const[n,r,B]=s.translation,a=g(s.rotation);return A.jsx("group",{position:[n,r,B],quaternion:[a.x,a.y,a.z,a.w],children:A.jsx(rt,{variant:e})},`gamepiece-${o}`)})})}function it({object:i}){const{poses:e,color:t,size:s}=i,o=m.useMemo(()=>e.map(r=>new J(...r.translation)),[e]),n=m.useMemo(()=>{switch(s){case"small":return 2;case"medium":return 4;case"large":return 6;default:return 3}},[s]);return o.length<2?null:A.jsxs(A.Fragment,{children:[A.jsx(tt,{points:o,color:new Je(t).getHex(),lineWidth:n,dashed:!1}),e.map((r,B)=>{const[a,f,u]=r.translation;return A.jsxs("mesh",{position:[a,f,u],children:[A.jsx("sphereGeometry",{args:[.03,8,8]}),A.jsx("meshStandardMaterial",{color:t,metalness:0,roughness:1})]},`trajectory-point-${B}`)})]})}function q({color:i,length:e,rotation:t}){const s=e*.02,o=e*.04,n=e*.15,r=e-n;return A.jsxs("group",{rotation:t,children:[A.jsxs("mesh",{position:[r/2,0,0],children:[A.jsx("cylinderGeometry",{args:[s,s,r,8]}),A.jsx("meshStandardMaterial",{color:i,metalness:0,roughness:1})]}),A.jsxs("mesh",{position:[r+n/2,0,0],rotation:[0,0,-Math.PI/2],children:[A.jsx("coneGeometry",{args:[o,n,8]}),A.jsx("meshStandardMaterial",{color:i,metalness:0,roughness:1})]})]})}function Bt({object:i,size:e=.5}){const{poses:t}=i;return A.jsx(A.Fragment,{children:t.map((s,o)=>{const[n,r,B]=s.translation,a=g(s.rotation);return A.jsxs("group",{position:[n,r,B],quaternion:[a.x,a.y,a.z,a.w],children:[A.jsx(q,{color:"#ff0000",length:e}),A.jsx(q,{color:"#00ff00",length:e,rotation:[0,0,Math.PI/2]}),A.jsx(q,{color:"#0000ff",length:e,rotation:[0,-Math.PI/2,0]})]},`axes-${o}`)})})}function at(i){switch(i){case"frc-36h11":return .1651;case"frc-16h5":return .1524;case"ftc-2in":return .0508;case"ftc-3in":return .0762;case"ftc-4in":return .1016;case"ftc-5in":return .127;default:return .1651}}function Ct({object:i}){const{poses:e,variant:t}=i,s=m.useMemo(()=>at(t),[t]),o=s*1.25;return A.jsx(A.Fragment,{children:e.map((n,r)=>{const[B,a,f]=n.translation,u=g(n.rotation);return A.jsxs("group",{position:[B,a,f],quaternion:[u.x,u.y,u.z,u.w],children:[A.jsxs("mesh",{position:[0,0,-.001],children:[A.jsx("planeGeometry",{args:[o,o]}),A.jsx("meshStandardMaterial",{color:"#ffffff",metalness:0,roughness:1,side:2})]}),A.jsxs("mesh",{children:[A.jsx("planeGeometry",{args:[s,s]}),A.jsx("meshStandardMaterial",{color:"#000000",metalness:0,roughness:1,side:2})]}),A.jsxs("mesh",{position:[-s*.25,s*.25,.001],children:[A.jsx("planeGeometry",{args:[s*.2,s*.2]}),A.jsx("meshStandardMaterial",{color:"#ffffff",metalness:0,roughness:1,side:2})]}),A.jsxs("mesh",{position:[s*.25,-s*.25,.001],children:[A.jsx("planeGeometry",{args:[s*.2,s*.2]}),A.jsx("meshStandardMaterial",{color:"#ffffff",metalness:0,roughness:1,side:2})]})]},`apriltag-${r}`)})})}function ct({object:i}){const{poses:e,color:t,position:s}=i,o=2,n=30,r=m.useMemo(()=>o*Math.tan(n*Math.PI/180),[o,n]);return A.jsx(A.Fragment,{children:e.map((B,a)=>{const[f,u,d]=B.translation,C=g(B.rotation);let l=0;return s==="back"?l=-o/2:s==="front"&&(l=o/2),A.jsxs("group",{position:[f,u,d],quaternion:[C.x,C.y,C.z,C.w],children:[A.jsxs("mesh",{position:[l+o/2,0,0],rotation:[0,0,-Math.PI/2],children:[A.jsx("coneGeometry",{args:[r,o,16,1,!0]}),A.jsx("meshStandardMaterial",{color:t,metalness:0,roughness:1,transparent:!0,opacity:.3,side:2})]}),A.jsxs("mesh",{position:[l+o/2,0,0],rotation:[0,0,-Math.PI/2],children:[A.jsx("coneGeometry",{args:[r,o,16,1,!0]}),A.jsx("meshBasicMaterial",{color:t,wireframe:!0,transparent:!0,opacity:.6})]})]},`cone-${a}`)})})}function dt({objects:i}){return A.jsx(A.Fragment,{children:i.map((e,t)=>{const s=`${e.type}-${t}`;switch(e.type){case"robot":case"ghost":return A.jsx(ot,{object:e},s);case"gamePiece":return A.jsx(At,{object:e},s);case"trajectory":return A.jsx(it,{object:e},s);case"axes":return A.jsx(Bt,{object:e},s);case"aprilTag":case"aprilTagBuiltIn":return A.jsx(Ct,{object:e},s);case"cone":return A.jsx(ct,{object:e},s);case"heatmap":return A.jsx("group",{children:e.poses.map((o,n)=>{const[r,B,a]=o.translation;return A.jsxs("mesh",{position:[r,B,a],children:[A.jsx("sphereGeometry",{args:[.05,8,8]}),A.jsx("meshStandardMaterial",{color:"#ff0000",metalness:0,roughness:1,transparent:!0,opacity:.5})]},`heatmap-point-${n}`)})},s);default:return null}})})}function lt({fieldConfig:i,origin:e,objects:t=[]}){const{scene:s}=K(i.src),o=m.useRef(null),n=m.useRef(null),r=m.useMemo(()=>g([{axis:"x",degrees:-90},{axis:"y",degrees:180}]),[]),B=m.useMemo(()=>g(i.rotations),[i]);return m.useEffect(()=>{s&&s.traverse(a=>{const f=a;if(f.isMesh&&f.material instanceof Ie){const u=f.material;u.metalness=0,u.roughness=1}})},[s]),m.useEffect(()=>{if(n.current){const a=e!=="red";n.current.setRotationFromAxisAngle(new J(0,0,1),a?0:Math.PI),n.current.position.set(Y(i.size[0]/2,i.unit,"m")*(a?-1:1),Y(i.size[1]/2,i.unit,"m")*(a?-1:1),0)}},[e,i]),console.log("OBJECTS:",t),A.jsx(A.Fragment,{children:A.jsxs("group",{ref:o,quaternion:r,children:[A.jsx("primitive",{object:s,quaternion:B}),A.jsx("group",{ref:n,children:A.jsx(dt,{objects:t})})]})})}function ut(i,e,t,s,o,n,r){const B=new J(...i),a=g(e),f=new J(...t),u=g(s),d=B.clone().applyQuaternion(u).add(f),C=u.clone().multiply(a);return d.applyQuaternion(n).add(o),C.premultiply(n),d.applyQuaternion(r),C.premultiply(r),{position:d,quaternion:C}}function ft({activeCamera:i,orbitControlsRef:e,defaultPosition:t,defaultTarget:s,defaultFov:o}){const{camera:n}=Ee(),r=m.useRef(!1);return m.useEffect(()=>{const B=e.current;i?(B&&(B.enabled=!1),n.position.copy(i.worldPosition),n.quaternion.copy(i.worldQuaternion),"fov"in n&&(n.fov=i.fov,n.updateProjectionMatrix()),r.current=!0):r.current&&(B&&(B.enabled=!0,n.position.copy(t),"fov"in n&&(n.fov=o,n.updateProjectionMatrix()),B.target.copy(s),B.update()),r.current=!1)},[i,n,e,t,s,o]),null}function Gt(){return A.jsxs(A.Fragment,{children:[A.jsx("pointLight",{position:[0,10,0],intensity:.2,color:16777215}),A.jsx("hemisphereLight",{args:[16777215,4473924,1],position:[0,1,0]})]})}function Ft(i){const e=[];for(const t of i)if((t.type==="robot"||t.type==="ghost")&&t.cameras&&t.cameras.length>0&&t.poses.length>0){const s=t.poses[0];for(const o of t.cameras)e.push({camera:o,robotTranslation:s.translation,robotRotation:s.rotation})}return e}function mt({game:i,origin:e="red",backgroundColor:t="black",style:s,objects:o=[]}){const n=m.useRef(null),[r,B]=m.useState(-1),a=m.useMemo(()=>(i?X.find(G=>G.game===i):X[0])??X[0],[i]),f=m.useMemo(()=>new J(0,6,-12),[]),u=m.useMemo(()=>new J(0,.5,0),[]),d=50,C=m.useMemo(()=>g([{axis:"x",degrees:-90},{axis:"y",degrees:180}]),[]),{fieldOffset:l,fieldOriginRotation:c}=m.useMemo(()=>{const D=e!=="red",G=new J(Y(a.size[0]/2,a.unit,"m")*(D?-1:1),Y(a.size[1]/2,a.unit,"m")*(D?-1:1),0),E=new Ye().setFromAxisAngle(new J(0,0,1),D?0:Math.PI);return{fieldOffset:G,fieldOriginRotation:E}},[e,a]),F=m.useMemo(()=>Ft(o),[o]),h=m.useMemo(()=>{if(r<0||r>=F.length)return null;const D=F[r],{position:G,quaternion:E}=ut(D.camera.position,D.camera.rotations,D.robotTranslation,D.robotRotation,l,c,C);return{name:D.camera.name,fov:D.camera.fov,worldPosition:G,worldQuaternion:E}},[r,F,l,c,C]),M=m.useRef(F.length);return F.length!==M.current&&(M.current=F.length,r>=F.length&&B(-1)),A.jsxs("div",{style:{width:"700px",height:"400px",...s,position:"relative"},children:[F.length>0&&A.jsx("div",{style:{position:"absolute",top:8,right:8,zIndex:10,background:"rgba(0, 0, 0, 0.6)",borderRadius:4,padding:"4px 8px"},children:A.jsxs("select",{value:r,onChange:D=>B(Number(D.target.value)),style:{background:"rgba(30, 30, 30, 0.9)",color:"#fff",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:3,padding:"4px 8px",fontSize:12,cursor:"pointer",outline:"none"},children:[A.jsx("option",{value:-1,children:"Orbit"}),F.map((D,G)=>A.jsx("option",{value:G,children:D.camera.name},G))]})}),A.jsxs(Ne,{camera:{position:f,fov:d,near:.1,far:100},gl:{antialias:!0},style:{background:t},children:[A.jsx(Gt,{}),A.jsx(lt,{fieldConfig:a,origin:e,objects:o}),A.jsx(ke,{ref:n,target:u,maxDistance:30,enableDamping:!0,dampingFactor:.05}),A.jsx(ft,{activeCamera:h,orbitControlsRef:n,defaultPosition:f,defaultTarget:u,defaultFov:d})]})]})}X.forEach(i=>{K.preload(i.src)});const me=[{type:"trajectory",color:"#00ff00",size:"medium",poses:[{translation:[0,0,0],rotation:[]},{translation:[1,.5,0],rotation:[]},{translation:[2,1,0],rotation:[]},{translation:[3,1,0],rotation:[]}]},{type:"axes",poses:[{translation:[0,0,0],rotation:[]}]}];function ht(){const[i,e]=m.useState(me);return m.useEffect(()=>{We("/3d-models/robot2/config.json",{translation:[2,2,2],rotation:[]}).then(t=>{t.jointValues={joint_0:.4,joint_1:.4},e([t,...me])})},[]),A.jsx("div",{id:"canvas-container",children:A.jsx(mt,{game:"Evergreen",origin:"red",backgroundColor:"#1a1a1a",style:{width:"100%",height:"100vh"},objects:i})})}function Dt(){const[i,e]=m.useState(()=>window.location.hash==="#editor"?"editor":"field");return m.useEffect(()=>{const t=()=>e(window.location.hash==="#editor"?"editor":"field");return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),i==="editor"?A.jsx(Ze,{}):A.jsx(ht,{})}_e.createRoot(document.getElementById("root")).render(A.jsx(Dt,{}));
