import{s as Y,i as a,k,X as W}from"./property-293dc01c-d6840d48.js";import{h as J}from"./query-b33b5ea2-b51c1579.js";import{s as U,c as y,n as et}from"./units-a299d414-de746bd8.js";import{n as N}from"./state-6b86eede-5fd1e84e.js";import{n as I,e as it}from"./index-a785ab48-dd43b269.js";import{x as H}from"./lit-element-37c36932.js";import{o as z}from"./if-defined-04ae3851.js";import"./_commonjsHelpers-10dfc225-be18f180.js";var ot=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},S=(r,t,e)=>(ot(r,t,"read from private field"),e?e.call(r):t.get(r)),A=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)};const T=[{game:"Crescendo",image:"./field-images/2024-field.jpg",corners:{topLeft:[513,78],bottomRight:[3327,1475]},size:[54.265092,26.31234],unit:"foot"},{game:"Charged Up",image:"./field-images/2023-field.jpg",corners:{topLeft:[46,36],bottomRight:[1088,544]},size:[54.27083,26.2916],unit:"foot"},{game:"Rapid React",image:"./field-images/2022-field.jpg",corners:{topLeft:[74,50],bottomRight:[1774,900]},size:[54,27],unit:"foot"},{game:"Infinite Recharge",image:"./field-images/2020-field.jpg",corners:{topLeft:[96,25],bottomRight:[1040,514]},size:[52.4375,26.9375],unit:"foot"},{game:"Destination: Deep Space",image:"./field-images/2019-field.jpg",corners:{topLeft:[217,40],bottomRight:[1372,615]},size:[54,27],unit:"foot"},{game:"FIRST Power Up",image:"./field-images/2018-field.jpg",corners:{topLeft:[125,20],bottomRight:[827,370]},size:[54,27],unit:"feet"},{game:"Barrel Racing Path",image:"./field-images/2021-barrel.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Bounce Path",image:"./field-images/2021-bounce.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Galactic Search A",image:"./field-images/2021-galacticsearcha.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Galactic Search B",image:"./field-images/2021-galacticsearchb.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"},{game:"Slalom Path",image:"./field-images/2021-slalom.png",corners:{topLeft:[20,20],bottomRight:[780,400]},size:[30,15],unit:"feet"}];var $,O;class B{constructor(){A(this,$,{}),A(this,O,new Map)}getImage(t){if(typeof S(this,$)[t]>"u"){const e=new Image,i={src:t,width:0,height:0,loaded:!1,image:e};e.onload=()=>{i.loaded=!0,i.width=e.width,i.height=e.height,[...S(this,O).values()].forEach(o=>{console.log("on load",o),o(t)})},S(this,$)[t]=i,e.src=t}return S(this,$)[t]}static getBoundingBoxDims(t,e){const i=Math.abs(t.width*Math.cos(e))+Math.abs(t.height*Math.sin(e)),o=Math.abs(t.width*Math.sin(e))+Math.abs(t.height*Math.cos(e));return{width:i,height:o}}static fitImageInsideBox(t,e){return e.width/t.width*t.height<=e.height?{width:e.width,height:e.width/t.width*t.height}:{width:e.height/t.height*t.width,height:e.height}}onImageLoad(t){const e=Symbol("image");return S(this,O).set(e,t),()=>{S(this,O).delete(e)}}}$=new WeakMap,O=new WeakMap;var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,x=(r,t,e,i)=>{for(var o=i>1?void 0:i?nt(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&rt(t,e,o),o};class b extends k{constructor(){super(...arguments),this.unit="inherit",this.rotationUnit="inherit",this.image="",this.color="#0000ff",this.opacity=1,this.pose=[0,0,0],this.width=.6,this.length=.9}draw({canvas:t,unit:e,rotationUnit:i,xToPx:o,yToPx:n,lengthToPx:s,origin:p}){const h=this.unit==="inherit"||this.unit===null?e:this.unit,f=this.rotationUnit==="inherit"||this.rotationUnit===null?i:this.rotationUnit,[c,u]=this.pose,R=f==="rad"?this.pose[2]:this.pose[2]/(180/Math.PI);t.globalAlpha=Math.max(0,Math.min(1,this.opacity)),t.fillStyle="#222",t.strokeStyle=this.color,t.lineWidth=s(3,"in"),t.translate(o(c,h),n(u,h)),t.rotate(-R+(p==="red"?Math.PI:0)),t.roundRect(-s(this.length/2,h),-s(this.width/2,h),s(this.length,h),s(this.width,h),1),t.fill(),t.stroke(),t.beginPath(),t.fillStyle="white",t.strokeStyle="white",t.lineWidth=s(2,"in"),t.moveTo(-s(this.length*.3,h),0),t.lineTo(s(this.length*.3,h),0),t.moveTo(s(this.length*.1,h),-s(this.width*.25,h)),t.lineTo(s(this.length*.3,h),0),t.lineTo(s(this.length*.1,h),s(this.width*.25,h)),t.stroke()}}x([a({type:String})],b.prototype,"unit",2);x([a({type:String,attribute:"rotation-unit"})],b.prototype,"rotationUnit",2);x([a({type:String})],b.prototype,"image",2);x([a({type:String})],b.prototype,"color",2);x([a({type:Number})],b.prototype,"opacity",2);x([a({type:Array})],b.prototype,"pose",2);x([a({type:Number})],b.prototype,"width",2);x([a({type:Number})],b.prototype,"length",2);customElements.get("frc-field-robot")||customElements.define("frc-field-robot",b);var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,v=(r,t,e,i)=>{for(var o=i>1?void 0:i?at(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&st(t,e,o),o};class w extends k{constructor(){super(...arguments),this.poses=[],this.translations=[],this.color="#FFA500",this.unit="inherit",this.lineWidth=4,this.opacity=.7,this._poses=[],this._translations=[]}updated(t){t.has("poses")&&(this._poses=I(this.poses)),t.has("translations")&&(this._translations=I(this.translations,2))}draw({canvas:t,unit:e,xToPx:i,yToPx:o}){const n=this.unit==="inherit"||this.unit===null?e:this.unit;if(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.globalAlpha=this.opacity,this._poses.length>1){for(let s=0;s<this._poses.length-1;s+=1){const[p,h]=this._poses[s],[f,c]=this._poses[s+1];t.moveTo(i(p,n),o(h,n)),t.lineTo(i(f,n),o(c,n))}t.stroke()}if(this._translations.length>1){for(let s=0;s<this._translations.length-1;s+=1){const[p,h]=this._translations[s],[f,c]=this._translations[s+1];t.moveTo(i(p,n),o(h,n)),t.lineTo(i(f,n),o(c,n))}t.stroke()}}}v([a({type:Array})],w.prototype,"poses",2);v([a({type:Array})],w.prototype,"translations",2);v([a({type:String})],w.prototype,"color",2);v([a({type:String})],w.prototype,"unit",2);v([a({type:Number,attribute:"line-width"})],w.prototype,"lineWidth",2);v([a({type:Number})],w.prototype,"opacity",2);v([N()],w.prototype,"_poses",2);v([N()],w.prototype,"_translations",2);customElements.get("frc-field-path")||customElements.define("frc-field-path",w);var ht=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,m=(r,t,e,i)=>{for(var o=i>1?void 0:i?pt(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&ht(t,e,o),o},ct=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},F=(r,t,e)=>(ct(r,t,"read from private field"),e?e.call(r):t.get(r)),lt=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},P;function dt(r){return r*Math.PI/180}class g extends k{constructor(){super(...arguments),this.game=T[0].game,this.cropTop=null,this.cropBottom=null,this.cropLeft=null,this.cropRight=null,this.cropType="percent",this.unit=U,this.rotationUnit="rad",this.rotation=0,this.showGrid=!1,this.gridSize=1,this.origin="blue",lt(this,P,new B)}getConfig(){return T.find(({game:t})=>t===this.game)??T[0]}getCanvasCtx(){return this.canvas.getContext("2d")}getCropPercent(){if(this.cropType==="percent"){const q=this.cropLeft??0,Q=this.cropTop??0,Z=this.cropRight??1,tt=this.cropBottom??1;return{x1:q,y1:Q,x2:Z,y2:tt}}const{corners:t,image:e,unit:i,size:o}=this.getConfig(),{loaded:n,width:s,height:p}=F(this,P).getImage(e);if(!n)return{x1:0,y1:0,x2:1,y2:1};const h=[this.cropLeft??0,this.cropTop??0],f=[this.cropRight??y(o[0],i,this.unit),this.cropBottom??y(o[1],i,this.unit)],c=t.topLeft[0]/s,u=t.topLeft[1]/p,R=t.bottomRight[0]/s,j=t.bottomRight[1]/p,C=R-c,M=j-u;return{x1:c+C*y(h[0],this.unit,i)/o[0],y1:u+M*y(h[1],this.unit,i)/o[1],x2:c+C*y(f[0],this.unit,i)/o[0],y2:u+M*y(f[1],this.unit,i)/o[1]}}getFieldRectPx(){const{corners:t,image:e}=this.getConfig(),{loaded:i,width:o,height:n}=F(this,P).getImage(e);if(!i)return{x:0,y:0,width:0,height:0};const s=t.topLeft[0]/o,p=t.topLeft[1]/n,h=t.bottomRight[0]/o,f=t.bottomRight[1]/n,c=this.getCropPercent(),u=c.x2-c.x1,R=c.y2-c.y1,j=this.canvas.width/u,C=this.canvas.height/R;return{x:(s-c.x1)*j,y:(p-c.y1)*C,width:(h-s)*j,height:(f-p)*C}}xToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.width===0)return 0;const s=i.width/o[0],p=y(t,e,n);return this.origin!=="red"?i.x+p*s:i.x+i.width-p*s}yToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.height===0)return 0;const s=i.height/o[1],p=y(t,e,n);return this.origin!=="red"?i.y+i.height-p*s:i.y+p*s}lengthToPx(t,e=this.unit){const i=this.getFieldRectPx(),{size:o,unit:n}=this.getConfig();if(i.width===0)return 0;const s=i.width/o[0];return y(t,e,n)*s}setContainerSize(){const t={width:this.clientWidth,height:this.clientHeight},e=this.getConfig().image,i=F(this,P).getImage(e),{loaded:o}=i;if(!o)return;const n=this.getCropPercent(),s={width:(n.x2-n.x1)*i.width,height:(n.y2-n.y1)*i.height},p=B.getBoundingBoxDims(s,dt(this.rotation)),h=B.fitImageInsideBox(p,{width:t.width,height:t.height}).width/p.width;this.container.style.width=`${s.width*h}px`,this.container.style.height=`${s.height*h}px`}drawImage(){const t=this.getCanvasCtx(),e=this.getConfig().image,{loaded:i,image:o,width:n,height:s}=F(this,P).getImage(e);if(!i)return;const{clientWidth:p,clientHeight:h}=this.canvas,f=p*window.devicePixelRatio,c=h*window.devicePixelRatio;this.canvas.width=f,this.canvas.height=c;const u=this.getCropPercent();t.drawImage(o,u.x1*n,u.y1*s,(u.x2-u.x1)*n,(u.y2-u.y1)*s,0,0,f,c)}drawFieldRect(){const t=this.getCanvasCtx(),{x:e,y:i,width:o,height:n}=this.getFieldRectPx();t.rect(e,i,o,n),t.lineWidth=2,t.strokeStyle="yellow",t.stroke()}drawGrid(){const t=this.getCanvasCtx(),{image:e,size:i}=this.getConfig(),{loaded:o}=F(this,P).getImage(e);if(!(!o||!this.showGrid||this.gridSize<=0)){t.lineWidth=1,t.strokeStyle="gray";for(let n=0;n<=i[0];n+=this.gridSize)t.beginPath(),t.moveTo(this.xToPx(n),this.yToPx(0)),t.lineTo(this.xToPx(n),this.yToPx(i[1])),t.stroke();for(let n=0;n<=i[1];n+=this.gridSize)t.beginPath(),t.moveTo(this.xToPx(0),this.yToPx(n)),t.lineTo(this.xToPx(i[0]),this.yToPx(n)),t.stroke()}}drawChildren(){const t={canvas:this.getCanvasCtx(),getFieldRectPx:()=>this.getFieldRectPx(),unit:this.unit,rotationUnit:this.rotationUnit,xToPx:(e,i)=>this.xToPx(e,i),yToPx:(e,i)=>this.yToPx(e,i),lengthToPx:(e,i)=>this.lengthToPx(e,i),origin:this.origin};[...this.children].forEach(e=>{var i;const o=this.getCanvasCtx();o.save(),o.beginPath();const n=e;(i=n.draw)==null||i.call(n,t),o.restore()})}drawField(){this.setContainerSize(),this.drawImage(),this.drawFieldRect(),this.drawGrid(),this.drawChildren(),window.requestAnimationFrame(()=>{this.drawField()})}firstUpdated(){this.drawField()}render(){return W`
      <div class="outside-container">
        <div class="container" style="transform: rotate(${-this.rotation}deg)">
          <canvas></canvas>
        </div>
      </div>
    `}}P=new WeakMap;g.styles=Y`
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
  `;m([a({type:String})],g.prototype,"game",2);m([a({type:Number,attribute:"crop-top"})],g.prototype,"cropTop",2);m([a({type:Number,attribute:"crop-bottom"})],g.prototype,"cropBottom",2);m([a({type:Number,attribute:"crop-left"})],g.prototype,"cropLeft",2);m([a({type:Number,attribute:"crop-right"})],g.prototype,"cropRight",2);m([a({type:String,attribute:"crop-type"})],g.prototype,"cropType",2);m([a({type:String})],g.prototype,"unit",2);m([a({type:String,attribute:"rotation-unit"})],g.prototype,"rotationUnit",2);m([a({type:Number})],g.prototype,"rotation",2);m([a({type:Boolean,attribute:"show-grid"})],g.prototype,"showGrid",2);m([a({type:Number,attribute:"grid-size"})],g.prototype,"gridSize",2);m([a({type:String})],g.prototype,"origin",2);m([J("canvas",!0)],g.prototype,"canvas",2);m([J(".container",!0)],g.prototype,"container",2);customElements.get("frc-field")||customElements.define("frc-field",g);class gt{constructor(t,e){this.sourceKey="",this.sourceProvider="",this.store=t,this.onUpdate=e}setSource(t,e){var i;this.sourceKey=t,this.sourceProvider=e,this.addFieldObjectsFromSources(),(i=this.unsubscriber)==null||i.call(this);const o=it(()=>{this.addFieldObjectsFromSources()},1e3/60);this.unsubscriber=this.store.subscribe(e,t,o,!0)}addFieldObjectsFromSources(){var t;const e=this.store.getSource(this.sourceProvider,this.sourceKey);if(!e||((t=e.getChildren()[".type"])==null?void 0:t.getValue())!=="Field2d")return;const i=[];Object.entries(e.getChildren()).forEach(([o,n])=>{if(o.startsWith("."))return;const s=n.hasChildren()?n.getChildren().pose.getValue():n.getValue(),p=I(s);i.push({type:p.length===1?"robot":"trajectory",poses:p}),this.onUpdate(i)})}}var ut=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,d=(r,t,e,i)=>{for(var o=i>1?void 0:i?mt(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=(i?s(t,e,o):s(o))||o);return i&&o&&ut(t,e,o),o};class l extends k{constructor(){super(...arguments),this.sourceProvider="",this.sourceKey="",this.game=T[0].game,this.cropTop=0,this.cropBottom=100,this.cropLeft=0,this.cropRight=100,this.cropType="percent",this.unit=U,this.rotationUnit="deg",this.rotation=0,this.showGrid=!1,this.gridSize=1,this.origin="blue",this.fieldObjects=[]}firstUpdated(){this.store&&(this.fieldObjectManager=new gt(this.store,t=>{this.fieldObjects=t}))}updated(t){(t.has("sourceKey")||t.has("sourceProvider"))&&this.fieldObjectManager.setSource(this.sourceKey,this.sourceProvider)}render(){return W`
      <frc-field
        game=${this.game}
        unit=${this.unit}
        rotation-unit=${this.rotationUnit}
        rotation=${this.rotation}
        ?show-grid=${this.showGrid}
        grid-size=${this.gridSize}
        origin=${this.origin}
        crop-top=${this.cropTop/100}
        crop-bottom=${this.cropBottom/100}
        crop-left=${this.cropLeft/100}
        crop-right=${this.cropRight/100}
        crop-type=${this.cropType}
      >
        ${this.fieldObjects.map(t=>t.type==="robot"?W`<frc-field-robot
              .pose=${t.poses[0]}
            ></frc-field-robot>`:W`<frc-field-path .poses=${t.poses}></frc-field-path>`)}
      </frc-field>
    `}}l.styles=Y`
    :host {
      display: inline-block;
      position: relative;
      width: 500px;
      height: 300px;
    }

    frc-field {
      width: 100%;
      height: 100%;
    }
  `;d([a({type:Object,attribute:!1})],l.prototype,"provider",2);d([a({type:Object,attribute:!1})],l.prototype,"store",2);d([a({type:String,attribute:"source-provider"})],l.prototype,"sourceProvider",2);d([a({type:String,attribute:"source-key"})],l.prototype,"sourceKey",2);d([a({type:String})],l.prototype,"game",2);d([a({type:Number,attribute:"crop-top"})],l.prototype,"cropTop",2);d([a({type:Number,attribute:"crop-bottom"})],l.prototype,"cropBottom",2);d([a({type:Number,attribute:"crop-left"})],l.prototype,"cropLeft",2);d([a({type:Number,attribute:"crop-right"})],l.prototype,"cropRight",2);d([a({type:String,attribute:"crop-type"})],l.prototype,"cropType",2);d([a({type:String})],l.prototype,"unit",2);d([a({type:String,attribute:"rotation-unit"})],l.prototype,"rotationUnit",2);d([a({type:Number})],l.prototype,"rotation",2);d([a({type:Boolean,attribute:"show-grid"})],l.prototype,"showGrid",2);d([a({type:Number,attribute:"grid-size"})],l.prototype,"gridSize",2);d([a({type:String})],l.prototype,"origin",2);d([N()],l.prototype,"fieldObjects",2);customElements.get("frc-field-wrapper")||customElements.define("frc-field-wrapper",l);const ft={game:T[0].game,cropType:"percent",unit:U,rotation:0,showGrid:!1,gridSize:1,origin:"blue",robotColor:"blue",robotOpacity:1,robotX:0,robotY:0,robotAngle:0,robotWidth:.6,robotLength:.9},yt={game:{table:{category:"Field",defaultValue:{summary:T[0].game}},options:T.map(({game:r})=>r),control:"select"},cropType:{control:"radio",options:["percent","distance"],table:{category:"Field",defaultValue:"percent"}},cropTop:{control:"number",table:{category:"Field"}},cropBottom:{control:"number",table:{category:"Field"}},cropLeft:{control:"number",table:{category:"Field"}},cropRight:{control:"number",table:{category:"Field"}},unit:{table:{category:"Field",defaultValue:U},options:Object.keys(et),control:"select"},rotation:{table:{category:"Field",defaultValue:{summary:0}}},showGrid:{table:{category:"Field",defaultValue:{summary:!1}}},gridSize:{table:{category:"Field",defaultValue:{summary:1}}},origin:{control:"radio",options:["blue","red"],table:{category:"Field",defaultValue:"blue"}}},bt={robotColor:{control:"color",table:{category:"Robot",defaultValue:{summary:"blue"}}},robotOpacity:{table:{category:"Robot",defaultValue:{summary:1}}},robotX:{table:{category:"Robot",defaultValue:{summary:0}}},robotY:{table:{category:"Robot",defaultValue:{summary:0}}},robotAngle:{table:{category:"Robot",defaultValue:{summary:0}}},robotWidth:{table:{category:"Robot",defaultValue:{summary:.6}}},robotLength:{table:{category:"Robot",defaultValue:{summary:.9}}}},$t={title:"FRC/Field",tags:["autodocs"],component:"frc-field",parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/field";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-field game="Charged Up">\r
  <frc-field-robot pose="[0,0,0]"></frc-field-robot>\r
  <frc-field-path line-width="10" translations="[7,5,9,5,9,3,7,3,7,5,8,7,9,5]"></<frc-field-path>\r
</frc-field>\r
\`\`\`\r
\r
Or use the component in React:\r
\r
\`\`\`jsx\r
import { Field, FieldPath, FieldRobot } from "@frc-web-components/react";\r
\`\`\`\r
\r
And then add the component in your jsx:\r
\r
\`\`\`jsx\r
<Field game="Charged Up">\r
  <FieldRobot pose={[0,0,0]} />\r
  <FieldPath lineWidth={10} translations={[7,5,9,5,9,3,7,3,7,5,8,7,9,5]} />\r
</Field>\r
\`\`\``}}}};function wt(){return{args:ft,argTypes:{...yt,...bt},parameters:{canvas:{sourceState:"shown"}},render:r=>H`
      <frc-field
        game=${r.game}
        crop-type=${r.cropType}
        crop-top=${z(r.cropTop??void 0)}
        crop-bottom=${z(r.cropBottom??void 0)}
        crop-left=${z(r.cropLeft??void 0)}
        crop-right=${z(r.cropRight??void 0)}
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
    `}}const L=wt(),V={args:{pathColor:"green",pathOpacity:.7,lineWidth:10,translations:[7,5,9,5,9,3,7,3,7,5,8,7,9,5]},argTypes:{pathColor:{control:"color",table:{category:"Path",defaultValue:{summary:"green"}}},pathOpacity:{table:{category:"Path",defaultValue:{summary:1}}},lineWidth:{table:{category:"Path",defaultValue:{summary:4}}},translations:{table:{category:"Path",defaultValue:{summary:[]}}}},render:r=>H`
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
  `};var E,_,G;L.parameters={...L.parameters,docs:{...(E=L.parameters)==null?void 0:E.docs,source:{originalSource:"createFieldStory()",...(G=(_=L.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var D,K,X;V.parameters={...V.parameters,docs:{...(D=V.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    pathColor: "green",
    pathOpacity: 0.7,
    lineWidth: 10,
    translations: [7, 5, 9, 5, 9, 3, 7, 3, 7, 5, 8, 7, 9, 5]
  },
  argTypes: {
    pathColor: {
      control: "color",
      table: {
        category: "Path",
        defaultValue: {
          summary: "green"
        }
      }
    },
    pathOpacity: {
      table: {
        category: "Path",
        defaultValue: {
          summary: 1
        }
      }
    },
    lineWidth: {
      table: {
        category: "Path",
        defaultValue: {
          summary: 4
        }
      }
    },
    translations: {
      table: {
        category: "Path",
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
}`,...(X=(K=V.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Ot=["Field","FieldPath"];export{L as Field,V as FieldPath,Ot as __namedExportsOrder,$t as default};
