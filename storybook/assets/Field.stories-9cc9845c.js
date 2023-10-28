var K=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var x=(r,t,e)=>(K(r,t,"read from private field"),e?e.call(r):t.get(r)),O=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)};import{e as a}from"./query-assigned-elements-bd4ea1f7.js";import{i as H}from"./query-839578ff.js";import{s as I,r as Q,$ as V}from"./lit-element-ac510585.js";import{b as U,c as f,t as Z}from"./units-530c171f.js";import{t as X}from"./state-54413a7c.js";import{g as B}from"./get-poses-54352fcb.js";import{l as T}from"./if-defined-a8bd05d9.js";const C=[{game:"Charged Up",image:"./field-images/2023-field.jpg",corners:{topLeft:[46,36],bottomRight:[1088,544]},size:[54.27083,26.2916],unit:"foot"},{game:"Rapid React",image:"./field-images/2022-field.jpg",corners:{topLeft:[74,50],bottomRight:[1774,900]},size:[54,27],unit:"foot"},{game:"Infinite Recharge",image:"./field-images/2020-field.jpg",corners:{topLeft:[96,25],bottomRight:[1040,514]},size:[52.4375,26.9375],unit:"foot"},{game:"Destination: Deep Space",image:"./field-images/2019-field.jpg",corners:{topLeft:[217,40],bottomRight:[1372,615]},size:[54,27],unit:"foot"},{game:"FIRST Power Up",image:"./field-images/2018-field.jpg",corners:{topLeft:[125,20],bottomRight:[827,370]},size:[54,27],unit:"feet"},{game:"Barrel Racing Path",image:"./field-images/2021-barrel.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Bounce Path",image:"./field-images/2021-bounce.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Galactic Search A",image:"./field-images/2021-galacticsearcha.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Galactic Search B",image:"./field-images/2021-galacticsearchb.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Slalom Path",image:"./field-images/2021-slalom.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"}];var R,v;class W{constructor(){O(this,R,{});O(this,v,new Map)}getImage(t){if(typeof x(this,R)[t]>"u"){const e=new Image,i={src:t,width:0,height:0,loaded:!1,image:e};e.onload=()=>{i.loaded=!0,i.width=e.width,i.height=e.height,[...x(this,v).values()].forEach(o=>{console.log("on load",o),o(t)})},x(this,R)[t]=i,e.src=t}return x(this,R)[t]}static getBoundingBoxDims(t,e){const i=Math.abs(t.width*Math.cos(e))+Math.abs(t.height*Math.sin(e)),o=Math.abs(t.width*Math.sin(e))+Math.abs(t.height*Math.cos(e));return{width:i,height:o}}static fitImageInsideBox(t,e){return e.width/t.width*t.height<=e.height?{width:e.width,height:e.width/t.width*t.height}:{width:e.height/t.height*t.width,height:e.height}}onImageLoad(t){const e=Symbol("image");return x(this,v).set(e,t),()=>{x(this,v).delete(e)}}}R=new WeakMap,v=new WeakMap;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,b=(r,t,e,i)=>{for(var o=i>1?void 0:i?et(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&tt(t,e,o),o};class m extends I{constructor(){super(...arguments),this.unit="inherit",this.rotationUnit="inherit",this.image="",this.color="#0000ff",this.opacity=1,this.pose=[0,0,0],this.width=.6,this.length=.9}draw({canvas:t,unit:e,rotationUnit:i,xToPx:o,yToPx:n,lengthToPx:s,origin:l}){const h=this.unit==="inherit"||this.unit===null?e:this.unit,p=this.rotationUnit==="inherit"||this.rotationUnit===null?i:this.rotationUnit,[c,g]=this.pose,S=p==="rad"?this.pose[2]:this.pose[2]/(180/Math.PI);t.globalAlpha=Math.max(0,Math.min(1,this.opacity)),t.fillStyle="#222",t.strokeStyle=this.color,t.lineWidth=s(3,"in"),t.translate(o(c,h),n(g,h)),t.rotate(-S+(l==="red"?Math.PI:0)),t.roundRect(-s(this.length/2,h),-s(this.width/2,h),s(this.length,h),s(this.width,h),1),t.fill(),t.stroke(),t.beginPath(),t.fillStyle="white",t.strokeStyle="white",t.lineWidth=s(2,"in"),t.moveTo(-s(this.length*.3,h),0),t.lineTo(s(this.length*.3,h),0),t.moveTo(s(this.length*.1,h),-s(this.width*.25,h)),t.lineTo(s(this.length*.3,h),0),t.lineTo(s(this.length*.1,h),s(this.width*.25,h)),t.stroke()}}b([a({type:String})],m.prototype,"unit",2);b([a({type:String,attribute:"rotation-unit"})],m.prototype,"rotationUnit",2);b([a({type:String})],m.prototype,"image",2);b([a({type:String})],m.prototype,"color",2);b([a({type:Number})],m.prototype,"opacity",2);b([a({type:Array})],m.prototype,"pose",2);b([a({type:Number})],m.prototype,"width",2);b([a({type:Number})],m.prototype,"length",2);customElements.get("frc-field-robot")||customElements.define("frc-field-robot",m);var it=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,w=(r,t,e,i)=>{for(var o=i>1?void 0:i?ot(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&it(t,e,o),o};let y=class extends I{constructor(){super(...arguments),this.poses=[],this.translations=[],this.color="#FFA500",this.unit="inherit",this.lineWidth=4,this.opacity=.7,this._poses=[],this._translations=[]}updated(t){t.has("poses")&&(this._poses=B(this.poses)),t.has("translations")&&(this._translations=B(this.translations,2))}draw({canvas:t,unit:e,xToPx:i,yToPx:o}){const n=this.unit==="inherit"||this.unit===null?e:this.unit;if(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.globalAlpha=this.opacity,this._poses.length>1){for(let s=0;s<this._poses.length-1;s+=1){const[l,h]=this._poses[s],[p,c]=this._poses[s+1];t.moveTo(i(l,n),o(h,n)),t.lineTo(i(p,n),o(c,n))}t.stroke()}if(this._translations.length>1){for(let s=0;s<this._translations.length-1;s+=1){const[l,h]=this._translations[s],[p,c]=this._translations[s+1];t.moveTo(i(l,n),o(h,n)),t.lineTo(i(p,n),o(c,n))}t.stroke()}}};w([a({type:Array})],y.prototype,"poses",2);w([a({type:Array})],y.prototype,"translations",2);w([a({type:String})],y.prototype,"color",2);w([a({type:String})],y.prototype,"unit",2);w([a({type:Number,attribute:"line-width"})],y.prototype,"lineWidth",2);w([a({type:Number})],y.prototype,"opacity",2);w([X()],y.prototype,"_poses",2);w([X()],y.prototype,"_translations",2);customElements.get("frc-field-path")||customElements.define("frc-field-path",y);var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,u=(r,t,e,i)=>{for(var o=i>1?void 0:i?nt(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&rt(t,e,o),o},st=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},_=(r,t,e)=>(st(r,t,"read from private field"),e?e.call(r):t.get(r)),at=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},P;function ht(r){return r*Math.PI/180}let d=class extends I{constructor(){super(...arguments),this.game=C[0].game,this.cropTop=null,this.cropBottom=null,this.cropLeft=null,this.cropRight=null,this.cropType="percent",this.unit=U,this.rotationUnit="rad",this.rotation=0,this.showGrid=!1,this.gridSize=1,this.origin="blue",at(this,P,new W)}getConfig(){return C.find(({game:e})=>e===this.game)??C[0]}getCanvasCtx(){return this.canvas.getContext("2d")}getCropPercent(){if(this.cropType==="percent"){const Y=this.cropLeft??0,q=this.cropTop??0,J=this.cropRight??1,k=this.cropBottom??1;return{x1:Y,y1:q,x2:J,y2:k}}const{corners:t,image:e,unit:i,size:o}=this.getConfig(),{loaded:n,width:s,height:l}=_(this,P).getImage(e);if(!n)return{x1:0,y1:0,x2:1,y2:1};const h=[this.cropLeft??0,this.cropTop??0],p=[this.cropRight??f(o[0],i,this.unit),this.cropBottom??f(o[1],i,this.unit)],c=t.topLeft[0]/s,g=t.topLeft[1]/l,S=t.bottomRight[0]/s,$=t.bottomRight[1]/l,F=S-c,A=$-g;return{x1:c+F*f(h[0],this.unit,i)/o[0],y1:g+A*f(h[1],this.unit,i)/o[1],x2:c+F*f(p[0],this.unit,i)/o[0],y2:g+A*f(p[1],this.unit,i)/o[1]}}getFieldRectPx(){const{corners:t,image:e}=this.getConfig(),{loaded:i,width:o,height:n}=_(this,P).getImage(e);if(!i)return{x:0,y:0,width:0,height:0};const s=t.topLeft[0]/o,l=t.topLeft[1]/n,h=t.bottomRight[0]/o,p=t.bottomRight[1]/n,c=this.getCropPercent(),g=c.x2-c.x1,S=c.y2-c.y1,$=this.canvas.width/g,F=this.canvas.height/S;return{x:(s-c.x1)*$,y:(l-c.y1)*F,width:(h-s)*$,height:(p-l)*F}}xToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.width===0)return 0;const s=i.width/o[0],l=f(t,e,n);return this.origin!=="red"?i.x+l*s:i.x+i.width-l*s}yToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.height===0)return 0;const s=i.height/o[1],l=f(t,e,n);return this.origin!=="red"?i.y+i.height-l*s:i.y+l*s}lengthToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.width===0)return 0;const s=i.width/o[0];return f(t,e,n)*s}setContainerSize(){const t={width:this.clientWidth,height:this.clientHeight},e=this.getConfig().image,i=_(this,P).getImage(e),{loaded:o}=i;if(!o)return;const n=this.getCropPercent(),s={width:(n.x2-n.x1)*i.width,height:(n.y2-n.y1)*i.height},l=W.getBoundingBoxDims(s,ht(this.rotation)),p=W.fitImageInsideBox(l,{width:t.width,height:t.height}).width/l.width;this.container.style.width=`${s.width*p}px`,this.container.style.height=`${s.height*p}px`}drawImage(){const t=this.getCanvasCtx(),e=this.getConfig().image,{loaded:i,image:o,width:n,height:s}=_(this,P).getImage(e);if(!i)return;const{clientWidth:l,clientHeight:h}=this.canvas,p=l*window.devicePixelRatio,c=h*window.devicePixelRatio;this.canvas.width=p,this.canvas.height=c;const g=this.getCropPercent();t.drawImage(o,g.x1*n,g.y1*s,(g.x2-g.x1)*n,(g.y2-g.y1)*s,0,0,p,c)}drawFieldRect(){const t=this.getCanvasCtx(),{x:e,y:i,width:o,height:n}=this.getFieldRectPx();t.rect(e,i,o,n),t.lineWidth=2,t.strokeStyle="yellow",t.stroke()}drawGrid(){const t=this.getCanvasCtx(),{image:e,size:i}=this.getConfig(),{loaded:o}=_(this,P).getImage(e);if(!(!o||!this.showGrid||this.gridSize<=0)){t.lineWidth=1,t.strokeStyle="gray";for(let n=0;n<=i[0];n+=this.gridSize)t.beginPath(),t.moveTo(this.xToPx(n),this.yToPx(0)),t.lineTo(this.xToPx(n),this.yToPx(i[1])),t.stroke();for(let n=0;n<=i[1];n+=this.gridSize)t.beginPath(),t.moveTo(this.xToPx(0),this.yToPx(n)),t.lineTo(this.xToPx(i[0]),this.yToPx(n)),t.stroke()}}drawChildren(){const t={canvas:this.getCanvasCtx(),getFieldRectPx:()=>this.getFieldRectPx(),unit:this.unit,rotationUnit:this.rotationUnit,xToPx:(e,i)=>this.xToPx(e,i),yToPx:(e,i)=>this.yToPx(e,i),lengthToPx:(e,i)=>this.lengthToPx(e,i),origin:this.origin};[...this.children].forEach(e=>{var n;const i=this.getCanvasCtx();i.save(),i.beginPath();const o=e;(n=o.draw)==null||n.call(o,t),i.restore()})}drawField(){this.setContainerSize(),this.drawImage(),this.drawFieldRect(),this.drawGrid(),this.drawChildren(),window.requestAnimationFrame(()=>{this.drawField()})}firstUpdated(){this.drawField()}render(){return V`
      <div class="outside-container">
        <div class="container" style="transform: rotate(${-this.rotation}deg)">
          <canvas></canvas>
        </div>
      </div>
    `}};P=new WeakMap;d.styles=Q`
    :host {
      display: inline-flex;
      position: relative;
      width: 500px;
      height: 300px;
      justify-content: center;
      align-items: center;
    }

    .container {
    }

    canvas {
      width: 100%;
      height: 100%;
    }
  `;u([a({type:String})],d.prototype,"game",2);u([a({type:Number,attribute:"crop-top"})],d.prototype,"cropTop",2);u([a({type:Number,attribute:"crop-bottom"})],d.prototype,"cropBottom",2);u([a({type:Number,attribute:"crop-left"})],d.prototype,"cropLeft",2);u([a({type:Number,attribute:"crop-right"})],d.prototype,"cropRight",2);u([a({type:String,attribute:"crop-type"})],d.prototype,"cropType",2);u([a({type:String})],d.prototype,"unit",2);u([a({type:String,attribute:"rotation-unit"})],d.prototype,"rotationUnit",2);u([a({type:Number})],d.prototype,"rotation",2);u([a({type:Boolean,attribute:"show-grid"})],d.prototype,"showGrid",2);u([a({type:Number,attribute:"grid-size"})],d.prototype,"gridSize",2);u([a({type:String})],d.prototype,"origin",2);u([H("canvas",!0)],d.prototype,"canvas",2);u([H(".container",!0)],d.prototype,"container",2);customElements.get("frc-field")||customElements.define("frc-field",d);const lt={game:C[0].game,cropType:"percent",unit:U,rotation:0,showGrid:!1,gridSize:1,origin:"blue",robotColor:"blue",robotOpacity:1,robotX:0,robotY:0,robotAngle:0,robotWidth:.6,robotLength:.9},ct={game:{table:{category:"Field",defaultValue:{summary:C[0].game}},options:C.map(({game:r})=>r),control:"select"},cropType:{control:"radio",options:["percent","distance"],table:{category:"Field",defaultValue:"percent"}},cropTop:{control:"number",table:{category:"Field"}},cropBottom:{control:"number",table:{category:"Field"}},cropLeft:{control:"number",table:{category:"Field"}},cropRight:{control:"number",table:{category:"Field"}},unit:{table:{category:"Field",defaultValue:U},options:Object.keys(Z),control:"select"},rotation:{table:{category:"Field",defaultValue:{summary:0}}},showGrid:{table:{category:"Field",defaultValue:{summary:!1}}},gridSize:{table:{category:"Field",defaultValue:{summary:1}}},origin:{control:"radio",options:["blue","red"],table:{category:"Field",defaultValue:"blue"}}},pt={robotColor:{control:"color",table:{category:"Robot",defaultValue:{summary:"blue"}}},robotOpacity:{table:{category:"Robot",defaultValue:{summary:1}}},robotX:{table:{category:"Robot",defaultValue:{summary:0}}},robotY:{table:{category:"Robot",defaultValue:{summary:0}}},robotAngle:{table:{category:"Robot",defaultValue:{summary:0}}},robotWidth:{table:{category:"Robot",defaultValue:{summary:.6}}},robotLength:{table:{category:"Robot",defaultValue:{summary:.9}}}},vt={title:"FRC/Field",tags:["autodocs"],component:"frc-field"};function dt(){return{args:lt,argTypes:{...ct,...pt},parameters:{canvas:{sourceState:"shown"}},render:r=>V`
      <frc-field
        game=${r.game}
        crop-type=${r.cropType}
        crop-top=${T(r.cropTop??void 0)}
        crop-bottom=${T(r.cropBottom??void 0)}
        crop-left=${T(r.cropLeft??void 0)}
        crop-right=${T(r.cropRight??void 0)}
        unit=${r.unit}
        rotation=${r.rotation}
        ?show-grid=${r.showGrid}
        grid-size=${r.gridSize}
        origin=${r.origin}
      >
        <frc-field-robot
          color=${r.robotColor}
          opacity=${r.robotOpacity}
          pose="[${[r.robotX,r.robotY,r.robotAngle]}]"
          width=${r.robotWidth}
          length=${r.robotLength}
        ></frc-field-robot>
      </frc-field>
    `}}const z=dt(),L={args:{pathColor:"green",pathOpacity:.7,lineWidth:10,translations:[7,5,9,5,9,3,7,3,7,5,8,7,9,5]},argTypes:{pathColor:{control:"color",table:{category:"Path",defaultValue:{summary:"green"}}},pathOpacity:{table:{category:"Path",defaultValue:{summary:1}}},lineWidth:{table:{category:"Path",defaultValue:{summary:4}}},translations:{table:{category:"Path",defaultValue:{summary:[]}}}},render:r=>V`
    <frc-field>
      <frc-field-path
        color="red"
        opacity="1"
        poses="[1,3,0.22887754381363834,1.2990000000000002,3.0290000000000004,10.658528835460004,1.5920000000000005,3.112,20.372666018396302,1.8730000000000007,3.2430000000000003,29.101450825807632,2.136000000000001,3.4160000000000004,37.14767936631827,2.375000000000001,3.625000000000001,44.84721053029682,2.584000000000001,3.864000000000001,52.539946195371016,2.7570000000000006,4.127000000000001,60.565787789521615,2.888000000000001,4.408000000000002,69.26105821010881,2.9710000000000005,4.701000000000001,78.93100644680327,3,5,90.22887754381367,3.0290000000000004,4.701,100.65852883546,3.112,4.4079999999999995,110.372666018396,3.2430000000000003,4.127,119.10145082580961,3.4160000000000004,3.863999999999999,127.14767936631823,3.625000000000001,3.624999999999999,134.84721053029682,3.864000000000001,3.415999999999999,142.53994619537104,4.127000000000001,3.2429999999999994,150.5657877895216,4.408000000000002,3.111999999999999,159.26105821010884,4.701000000000001,3.0289999999999995,168.93100644680328]"
      ></frc-field-path>
      <frc-field-path
        color=${r.pathColor}
        opacity=${r.pathOpacity}
        line-width=${r.lineWidth}
        translations=${JSON.stringify(r.translations)}
      ></frc-field-path>
    </frc-field>
  `};var M,N,D;z.parameters={...z.parameters,docs:{...(M=z.parameters)==null?void 0:M.docs,source:{originalSource:"createFieldStory()",...(D=(N=z.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,G,j;L.parameters={...L.parameters,docs:{...(E=L.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    pathColor: 'green',
    pathOpacity: 0.7,
    lineWidth: 10,
    translations: [7, 5, 9, 5, 9, 3, 7, 3, 7, 5, 8, 7, 9, 5]
  },
  argTypes: {
    pathColor: {
      control: 'color',
      table: {
        category: 'Path',
        defaultValue: {
          summary: 'green'
        }
      }
    },
    pathOpacity: {
      table: {
        category: 'Path',
        defaultValue: {
          summary: 1
        }
      }
    },
    lineWidth: {
      table: {
        category: 'Path',
        defaultValue: {
          summary: 4
        }
      }
    },
    translations: {
      table: {
        category: 'Path',
        defaultValue: {
          summary: []
        }
      }
    }
  },
  render: args => html\`
    <frc-field>
      <frc-field-path
        color="red"
        opacity="1"
        poses="[1,3,0.22887754381363834,1.2990000000000002,3.0290000000000004,10.658528835460004,1.5920000000000005,3.112,20.372666018396302,1.8730000000000007,3.2430000000000003,29.101450825807632,2.136000000000001,3.4160000000000004,37.14767936631827,2.375000000000001,3.625000000000001,44.84721053029682,2.584000000000001,3.864000000000001,52.539946195371016,2.7570000000000006,4.127000000000001,60.565787789521615,2.888000000000001,4.408000000000002,69.26105821010881,2.9710000000000005,4.701000000000001,78.93100644680327,3,5,90.22887754381367,3.0290000000000004,4.701,100.65852883546,3.112,4.4079999999999995,110.372666018396,3.2430000000000003,4.127,119.10145082580961,3.4160000000000004,3.863999999999999,127.14767936631823,3.625000000000001,3.624999999999999,134.84721053029682,3.864000000000001,3.415999999999999,142.53994619537104,4.127000000000001,3.2429999999999994,150.5657877895216,4.408000000000002,3.111999999999999,159.26105821010884,4.701000000000001,3.0289999999999995,168.93100644680328]"
      ></frc-field-path>
      <frc-field-path
        color=\${args.pathColor}
        opacity=\${args.pathOpacity}
        line-width=\${args.lineWidth}
        translations=\${JSON.stringify(args.translations)}
      ></frc-field-path>
    </frc-field>
  \`
}`,...(j=(G=L.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const St=["Field","FieldPath"];export{z as Field,L as FieldPath,St as __namedExportsOrder,vt as default};
//# sourceMappingURL=Field.stories-9cc9845c.js.map
