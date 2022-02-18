var e,t,i,s,r,n,a,o,l,d,h,c,p,u,m,b,g,y,v,f,x,w,S=Object.defineProperty,$=Object.defineProperties,E=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,M=(e,t,i)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,T=(e,t)=>{for(var i in t||(t={}))k.call(t,i)&&M(e,i,t[i]);if(_)for(var i of _(t))C.call(t,i)&&M(e,i,t[i]);return e},N=(e,t)=>$(e,E(t)),I=(e,t,i)=>(M(e,"symbol"!=typeof t?t+"":t,i),i),V=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},L=(e,t,i)=>(((e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)})(e,t,"access private method"),i);import{I as P,_ as B,a as R,s as z,r as A,$ as D,b as O,W as j,y as q,c as F,i as H,d as U,C as K,e as W,S as G,f as Q,x as X}from"./vendor.810c0b74.js";P.addIcon("mdi:move-resize-variant",B),P.addIcon("mdi:heart",R);class J extends HTMLElement{get value(){return this.editor&&this.editor.getValue()||this.textContent}set value(e){this.editor?this.editor.setValue(e):this.textContent=e}static get observedAttributes(){return["theme","mode","fontsize","softtabs","tabsize","readonly","wrapmode"]}constructor(e){var t;return(t=(e=super(e)).attachShadow&&e.getRootNode?e.attachShadow({mode:"open"}):e.createShadowRoot()).innerHTML='\n  <style>\n      :host{\n          display: flex;\n          min-height: 1em;\n          flex-direction: column;\n      }\n      #juicy-ace-editor-container{\n          flex: 1;\n          height: 100%;\n      }\n  </style>\n  <div id="juicy-ace-editor-container"></div>\n',e.container=t.querySelector("#juicy-ace-editor-container"),e}connectedCallback(){var e,t=this.childNodes[0],i=this.container,s=this;this.editor?e=this.editor:(i.textContent=this.value,e=ace.edit(i),this.dispatchEvent(new CustomEvent("editor-ready",{bubbles:!0,composed:!0,detail:e})),this.editor=e,this.injectTheme("#ace_editor\\.css"),this.injectTheme("#ace-tm"),this.injectTheme("#ace_searchbox"),e.getSession().on("change",(function(e){s.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:e}))}))),e.renderer.addEventListener("themeLoaded",this.onThemeLoaded.bind(this)),e.setTheme(this.getAttribute("theme")),e.setFontSize(parseInt(this.getAttribute("fontsize"))||12),e.setReadOnly(this.hasAttribute("readonly"));var r=e.getSession();r.setMode(this.getAttribute("mode")),r.setUseSoftTabs(this.getAttribute("softtabs")),this.getAttribute("tabsize")&&r.setTabSize(this.getAttribute("tabsize")),r.setUseWrapMode(this.hasAttribute("wrapmode"));var n=new MutationObserver((function(e){e.forEach((function(e){"characterData"==e.type&&(s.value=t.data)}))}));t&&n.observe(t,{characterData:!0}),this._attached=!0}disconnectedCallback(){this._attached=!1}attributeChangedCallback(e,t,i){if(!this._attached)return!1;switch(e){case"theme":this.editor.setTheme(i);break;case"mode":this.editor.getSession().setMode(i);break;case"fontsize":this.editor.setFontSize(i);break;case"softtabs":this.editor.getSession().setUseSoftTabs(i);break;case"tabsize":this.editor.getSession().setTabSize(i);break;case"readonly":this.editor.setReadOnly(""===i||i);break;case"wrapmode":this.editor.getSession().setUseWrapMode(null!==i)}}onThemeLoaded(e){var t="#"+e.theme.cssClass;this.injectTheme(t),this.container.style.display="none",this.container.offsetHeight,this.container.style.display=""}injectTheme(e){var t,i,s=document.querySelector(e);this.shadowRoot.appendChild((t=s,(i=document.createElement("style")).id=t.id,i.textContent=t.textContent,i))}}window.customElements.define("juicy-ace-editor",J);const Y={properties:{value:{type:Number},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},center:{type:Number}}};function Z(e,t,i){return Math.min(i,Math.max(e,t))}class ee extends z{constructor(){super(),this.value=0,this.min=-1,this.max=1,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(e){const t=this._min;this._min=e,this.requestUpdate("min",t)}get max(){return Math.max(this._min,this._max)}set max(e){const t=this._max;this._max=e,this.requestUpdate("max",t)}updateForeground(){const{min:e,max:t,center:i,value:s}=this,r=Z(s,e,t),n=this.shadowRoot.querySelector("[part=foreground]");t<i?(n.style.setProperty("--foreground-width",Math.abs(r-t)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right","0")):e>i?(n.style.setProperty("--foreground-width",Math.abs(r-e)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","0"),n.style.setProperty("--foreground-right","auto")):r>i?(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left",Math.abs(e-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-right","auto")):(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right",Math.abs(t-i)/(t-e)*100+"%"))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(e){const{left:t,width:i}=this.getBoundingClientRect(),s=Z((e.clientX-t)/i,0,1),r=this.min+(this.max-this.min)*s,n=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:r}});this.dispatchEvent(n)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",(e=>{this.dragging&&this.setDragPosition(e)})),window.addEventListener("mouseup",(e=>{this.dragging=!1}))}onMouseDown(e){this.dragging=!0,this.setDragPosition(e)}render(){return D`
        <div part="foreground" draggble="false"></div>
        <div class="content" draggable="false">
          <slot></slot>
        </div>
        <div 
          part="dragger" 
          @mousedown="${this.onMouseDown}"
        ></div>
    `}}I(ee,"properties",Y.properties),I(ee,"styles",A`
    :host {
      display: inline-block;
      position: relative;
      width: 300px;
      height: 20px;
      background: #DDD;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
    }

    [part=dragger] {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    }

    [part=foreground] {
      position: absolute;
      top: 0;
      height: 100%;
      background: lightblue;
      border-radius: 3px;
      width: var(--foreground-width);
      left: var(--foreground-left);
      right: var(--foreground-right);
      pointer-events: none;
    }

    .content {
      position: relative;
    }
  `),customElements.define("frc-bar",ee);var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-bar",elementConfig:Y});const ie={properties:{vertical:{type:Boolean},ticks:{type:Number},range:{type:Array},unit:{type:String}}};class se extends z{constructor(){super(),this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null,this.vertical=!1,this.ticks=0,this.range=[],this.unit=""}setAxis(e){let t=this.vertical?this.clientHeight:this.clientWidth,i=t/Math.max(1,this.ticks-1);const s=this.range?30:10,r=this.range&&2===this.range.length,n=r?this.range[0]:0,a=r?this.range[1]:0;let o=-1/0,l=-1/0;if(this.prevSize===t&&this.prevTicks===this.ticks&&this.prevMin===n&&this.prevMax===a&&!e.has("unit"))return;this.prevSize=t,this.prevTicks=this.ticks,this.prevMin=n,this.prevMax=a,this.shadowRoot.getElementById("svg").innerHTML="";let d=O(this.shadowRoot.getElementById("svg")).attr("width",this.vertical?s:t).attr("height",this.vertical?t:s);for(let h=0;h<this.ticks;h++){if(this.vertical?d.append("line").attr("x1",0).attr("y1",h*i).attr("x2",8).attr("y2",h*i):d.append("line").attr("x1",h*i).attr("y1",0).attr("x2",h*i).attr("y2",8),r)if(this.vertical){const e=n+h*(a-n)/Math.max(this.ticks-1,1);d.append("text").attr("x",-3).attr("y",h*i+4).attr("text-anchor","end").text(e.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{let e=o*i+.4*((h-o)*i);if(l<0||e>l){const e=n+h*(a-n)/Math.max(this.ticks-1,1);l=h*i+d.append("text").attr("x",h*i).attr("y",25).attr("text-anchor","middle").text(e.toFixed(2)+(this.unit?` ${this.unit}`:"")).node().getBBox().width/2,o=h}}if(h<this.ticks-1)for(let e=1;e<4;e++)this.vertical?d.append("line").attr("x1",4).attr("y1",h*i+e*i/4).attr("x2",8).attr("y2",h*i+e*i/4):d.append("line").attr("x1",h*i+e*i/4).attr("y1",0).attr("x2",h*i+e*i/4).attr("y2",4)}}firstUpdated(){new ResizeObserver((()=>{this.requestUpdate()})).observe(this)}updated(e){this.setAxis(e)}render(){return D`
      <svg id="svg"></svg>
    `}}I(se,"styles",A`

    :host {
      display: block;
    }

    :host([vertical]) {
      height: 100%;
    }

    :host(:not([vertical])) {
      width: 100%;
    }

    svg {
      overflow: visible;
    }

    line {
      stroke: rgb(150, 150, 150);
      stroke-width: 2;
    }

    text {
      font-weight: normal;
      font-size: 13px;
    }
  `),I(se,"properties",ie.properties),customElements.define("frc-table-axis",se);const re=[te,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-table-axis",elementConfig:ie})],ne={properties:{axisId:{type:String,attribute:"axis-id"},scaleType:{type:String,attribute:"scale-type",defaultValue:"linear",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["linear","logarithmic"]},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},label:{type:String,defaultValue:"Value"},tickValues:{type:Array,attribute:"tick-values",inputType:"NumberArray"},position:{type:String,defaultValue:"left",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["left","right"]},hideGridLines:{type:Boolean,attribute:"hide-grid-lines"}}};class ae extends z{constructor(){super(),this.axisId="",this.scaleType="linear",this.min=-1,this.max=1,this.label="Value",this.tickValues=[],this.position="left",this.hideGridLines=!1}}I(ae,"properties",ne.properties),I(ae,"styles",A`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-axis",ae);var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-axis",elementConfig:ne});const le={properties:{axisId:{type:String,attribute:"axis-id"},value:{type:Number,primary:!0},label:{type:String},color:{type:String}}};class de extends z{constructor(){super(),this.axisId="",this.value=0,this.label="",this.color=""}}I(de,"properties",le.properties),I(de,"styles",A`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-data",de);var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-data",elementConfig:le});const ce={type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}},pe={responsive:!0,title:{display:!0,text:""},tooltips:{enabled:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{autoSkipPadding:10,padding:10}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}}]}};const ue=["#e6194b","#3cb44b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#fabebe","#008080","#9a6324","#800000","#808000","#000075","#808080","#000000"];class me{constructor(e,t){this.valueCount=e,this.data=[],this.dataIds=[],this.dataLabels=[],this.dataColors=[],this.chart=t;for(let i=0;i<e;i++)this.dataIds.push(""),this.dataLabels.push(""),this.dataColors.push("");this.currentTime=0,this.trackedTime=30,this.timeStep=.1,this.initData()}initData(){this.data=[];let e=this.trackedTime/this.timeStep,t=[];for(let i=0;i<this.valueCount;i++)t.push(NaN);for(let i=0;i<e;i++)this.data.push({time:this.currentTime+i*this.timeStep-this.trackedTime,values:t})}updateChart(e){e.chart.data.labels=this.data.map((e=>e.time.toFixed(1)));const t=e.chart.data.datasets.map((e=>{const t=e._meta[Object.keys(e._meta)[0]].hidden;return"boolean"==typeof t?t:e.hidden})),i=e.chart.options.scales.yAxes.map((e=>e.id));e.chart.data.datasets.splice(0,e.chart.data.datasets.length),this.dataLabels.forEach(((s,r)=>{i.includes(this.dataIds[r])&&e.chart.data.datasets.push({yAxisID:this.dataIds[r],label:s,data:this.data.map((e=>e.values[r])),fill:!1,pointRadius:0,borderColor:this.dataColors[r],borderWidth:2,hidden:t[r]})})),e.updateChart()}addData(e){this.currentTime+=this.timeStep,this.data.push({time:this.currentTime,values:e}),this.data.shift()}setTrackedTime(e){if(e===this.trackedTime)return;this.trackedTime;const t=this.data;this.trackedTime=e,this.initData(),t.length>=this.data.length?this.data=t.slice(t.length-this.data.length):this.data=this.data.slice(0,this.data.length-t.length).concat(t)}setTimeStep(e){if(e===this.timeStep)return;const t=this.data;this.timeStep=e<.01?.01:e;const i=[],s=this.trackedTime/this.timeStep;for(let r=0;r<s;r++){const e=Math.round((t.length-1)/s*r);i.push({time:r*this.timeStep,values:t[e].values})}this.data=i}setId(e,t){this.dataIds[e]=t}setColor(e,t){this.dataColors[e]=t}setLabel(e,t){this.dataLabels[e]=t}}const be={properties:{title:{type:String},xAxisLabel:{type:String,attribute:"x-axis-label",defaultValue:"Time (seconds)"},trackedTime:{type:Number,attribute:"tracked-time",defaultValue:30},timeStep:{type:Number,defaultValue:.1,attribute:"time-step"}}};class ge extends z{constructor(){super(),this.dataElements=[],this.axisElements=[],this.timeStepIntervalId=null,this.title="",this.xAxisLabel="Time (seconds)",this.trackedTime=30,this.timeStep=.1,this.plugins=[{beforeUpdate:(e,t)=>{e.options.title.text=this.title,e.options.scales.xAxes[0].scaleLabel.labelString=this.xAxisLabel;const i=e.options.scales.yAxes;for(let s=i.length;s<this.axisElements.length;s++)i.push(ce);for(let s=0;s<this.axisElements.length;s++)i[s].display=!0,i[s].type=this.axisElements[s].scaleType,i[s].id=this.axisElements[s].axisId,i[s].position=this.axisElements[s].position,i[s].scaleLabel.labelString=this.axisElements[s].label,i[s].ticks.min=this.axisElements[s].min,i[s].ticks.max=this.axisElements[s].max,0===this.axisElements[s].tickValues.length?i[s].afterBuildTicks=null:i[s].afterBuildTicks=e=>{e.ticks.splice(0,e.ticks.length);for(let t of this.axisElements[s].tickValues)e.ticks.push(t)},i[s].gridLines.display=!this.axisElements[s].hideGridLines;for(let s=this.axisElements.length;s<i.length;s++)i[s].display=!1}}],this.randomizedColors=function(e){for(var t,i,s=e.length;0!==s;)i=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[i],e[i]=t;return e}([...ue]),this.chartData=null}firstUpdated(){this.chartElement=this.shadowRoot.querySelector("#chart");const e=this.shadowRoot.querySelectorAll("slot");e.forEach((t=>{t.addEventListener("slotchange",(t=>{let i=[...e].reduce(((e,t)=>e.concat([...t.assignedElements()])),[]);this.axisElements=i.filter((e=>"FRC-CHART-AXIS"===e.tagName));for(let e=0;e<this.axisElements.length;e++){if(this.axisElements[e].axisId)continue;const t=this.axisElements.map((e=>e.axisId));for(let i=0;i<this.axisElements.length;i++){const s=`Axis ${i+1}`;if(!t.includes(s)){this.axisElements[e].axisId=s;break}}}this.dataElements=i.filter((e=>"FRC-CHART-DATA"===e.tagName)),this.dataElements.forEach(((e,t)=>{if(e.color||(e.color=this.randomizedColors[t]),!e.axisId){const t=this.axisElements.length>0?this.axisElements[0].axisId:"Axis 1";e.axisId=t}})),this.chartData=new me(this.dataElements.length),this.chartData.setTrackedTime(this.trackedTime),this.updateTimeStep()}))}))}updateChart(){this.chartData&&this.chartElement.chart&&(this.dataElements.forEach(((e,t)=>{this.chartData.setId(t,e.axisId),this.chartData.setColor(t,e.color),this.chartData.setLabel(t,e.label)})),this.chartData.addData(this.dataElements.map((e=>e.value))),this.chartData.updateChart(this.chartElement))}updateTimeStep(){const e=Math.max(.01,this.timeStep);this.chartData.setTimeStep(e),clearInterval(this.timeStepIntervalId),this.timeStepIntervalId=setInterval(this.updateChart.bind(this),parseInt(1e3*e))}updated(e){this.chartData&&(e.has("trackedTime")&&this.chartData.setTrackedTime(this.trackedTime),e.has("timeStep")&&this.updateTimeStep())}render(){return D`
      <frc-base-chart id="chart" type="line" .data="${{labels:[],datasets:[]}}" .options="${pe}" .plugins="${this.plugins}">
      </frc-base-chart>
      <slot name="data"></slot>
      <slot name="axes"></slot>
    `}}I(ge,"properties",be.properties),I(ge,"styles",A`
    :host { 
      display: inline-block;
      width: 450px;
      height: 400px;
    }

    slot {
      display: none;
    }
  `),customElements.define("frc-line-chart",ge);const ye=[oe,he,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-line-chart",elementConfig:be})],ve=A`
  :host {
    display: inline-block;
    width: auto;
    height: auto;
    margin: 0px;
    padding: 5px;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    background: none;
    color: inherit;
    font-family: inherit;
    text-align: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
`,fe={properties:{name:{type:String,defaultValue:"Command"},running:{type:Boolean},controllable:{type:Boolean},isParented:{type:Boolean,attribute:"is-parented"},label:{type:String}}};class xe extends j{onClick(){this.controllable&&(this.running=!this.running)}render(){return D`
      <vaadin-button theme="${1==this.running?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label||this.name}
      </vaadin-button>
    `}}I(xe,"properties",fe.properties),I(xe,"styles",[ve,A`
      :host {
        height: 50px;
      }

      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),customElements.define("frc-robot-command",xe);var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-command",elementConfig:fe});const Se={properties:{default:{type:String},command:{type:String},hasCommand:{type:Boolean,attribute:"has-command"},hasDefault:{type:Boolean,attribute:"has-default"},label:{type:String},name:{type:String},hideName:{type:Boolean,attribute:"hide-name"}}};class $e extends j{renderValue(e,t){return t?D`<span class="has-value">${e}</span>`:D`<span class="no-value">None</span>`}render(){return D`
      ${this.hideName?"":D`
      <header>${this.label||this.name}</header>
      `}
      <div class="subsystem">
        <p>Default command: ${this.renderValue(this.default,this.hasDefault)}</p>
        <p>Current command: ${this.renderValue(this.command,this.hasCommand)}</p>
      </div>
    `}}I($e,"properties",Se.properties),I($e,"styles",A`
    :host {
      display: inline-block;
      font-family: sans-serif;
      font-size: 16px;
      padding: 5px;
    }

    .subsystem {
      display: flex;
      flex-wrap: wrap;
    }

    p {
      margin: 0;
      margin-right: 10px;
      margin-top: 5px; 
    }

    header {
      font-weight: bold;
      margin-bottom: 2px;
      color: purple;
    }

    .has-value {
      color: green;
    }

    .no-value {
      color: red;
    }
  `),customElements.define("frc-robot-subsystem",$e);const Ee=[we,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-subsystem",elementConfig:Se})];class _e{constructor(e,t){this.svg=e,this.angle=null,this.setAngle(t),this.animationStartAngle=t,this.animationEndAngle=t,this.animationStartTime=0,this.animationTime=0,this.duration=1;const i=()=>{this.duration>this.animationTime&&(this.animationTime=Math.min((Date.now()-this.animationStartTime)/1e3,this.duration));const e=(e=>e*(2-e))(this.animationTime/this.duration);this.setAngle(this.animationStartAngle+e*(this.animationEndAngle-this.animationStartAngle)),window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}animate(e){this.animationStartTime=Date.now(),this.animationTime=0,this.animationStartAngle=this.angle,this.animationEndAngle=e}setAngle(e){this.angle=e,this.svg.style.setProperty("--deg",`${e}deg`)}setDuration(e){this.duration=e}}const ke={properties:{currentColor:{type:String,attribute:"current-color",primary:!0,inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]},desiredColor:{type:String,attribute:"desired-color",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]},clockwise:{type:Boolean},duration:{type:Number,defaultValue:1}}};class Ce extends z{constructor(){super(),this.colors=["red","yellow","blue","green","red","yellow","blue","green"],this.positionIndex=3,this.animator=null,this.currentColor="",this.desiredColor="",this.clockwise=!1,this.duration=1}getRotation(){return 25-45*(this.positionIndex-3)}setPositionIndex(){const e=this.positionIndex%8;for(let t=1;t<4;t++){const i=(e+(this.clockwise?-t:t))%8;if(this.colors[i>=0?i:i+8]===this.currentColor){this.positionIndex=this.positionIndex+(this.clockwise?-t:t),this.animator.animate(this.getRotation());break}}}getCoordinatesForPercent(e){return[Math.cos(2*Math.PI*e),Math.sin(2*Math.PI*e)]}getPath(e){const[t,i]=this.getCoordinatesForPercent(.125*e),[s,r]=this.getCoordinatesForPercent(.125*(e+1));return[`M ${t} ${i}`,`A 1 1 0 0 1 ${s} ${r}`,"L 0 0"].join(" ")}updated(e){e.has("currentColor")&&this.colors.indexOf(this.currentColor)>=0&&this.setPositionIndex(),e.has("duration")&&this.animator.setDuration(Math.max(0,this.duration))}firstUpdated(){this.svg=this.shadowRoot.querySelector("svg"),this.animator=new _e(this.shadowRoot.querySelector("svg"),this.getRotation())}setDesiredColor(e){this.desiredColor=e}resized(){const{height:e}=this.getBoundingClientRect();this.style.setProperty("--control-panel-height",`${e}px`),this.requestUpdate()}render(){return D`
      <div part="control-panel">
        ${q`
        <svg viewBox="-1 -1 2 2">
          ${this.colors.map(((e,t)=>q`
          <path class="color" fill="${e}" @click="${()=>this.setDesiredColor(e)}" d="${this.getPath(t)}">
          </path>
          `))}
        </svg>
        `}
      </div>
      <span part="indicator">
        <iron-icon icon="vaadin:caret-left"></iron-icon>
      </span>
    `}}I(Ce,"properties",ke.properties),I(Ce,"styles",A`
    :host {
      display: inline-flex;
      width: 300px;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      position: relative;
      margin: 15px;
    }

    [part=control-panel] {
      width: 100%;
      max-width: var(--control-panel-height, 100%);
      display: inline-block;
      border: none;
      border-radius: 50%;
      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      position: relative;
      font-size: 0;
    }

    svg {
      --deg: 25;
      width: 100%;
      transform: rotate(var(--deg));
    }

    [part=indicator] {
      margin-left: 15px;
      width: 50px;
      height: 50px;
      display: block;
      color: darkgray;
    }

    [part=indicator] iron-icon {
      display: block;
      width: 100%;
      height: 100%;
    }
  `),customElements.define("frc-control-panel",Ce);var Me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-control-panel",elementConfig:ke});function Te(e){return 180*e/Math.PI}function Ne(e,t,i){return`<polygon \n            points="${e.x},${e.y} ${t.x},${t.y} ${i.x},${i.y}" />`}function Ie(e,t,i,s,r){return`<path d="${function(e,t,i,s,r){var n=Ve(e,t,i,r),a=Ve(e,t,i,s),o=r-s<=180?"0":"1",l=r>s?1:0;return["M",n.x,n.y,"A",i,i,0,o,l,a.x,a.y].join(" ")}(e,t,i,s,r)}"/>`}function Ve(e,t,i,s){var r=s*Math.PI/180;return{x:e+i*Math.cos(r),y:t-i*Math.sin(r)}}function Le(e,t,i,s){return function(e,t,i,s){return`<line x1="${e}" y1="${t}" x2="${i}" y2="${s}" />`}(i,0,Math.cos(t)*e+i,Math.sin(t)*e)+function(e,t,i,s){const r=t/2,n=Math.cos(e),a=Math.sin(e);let o=Math.cos(e+Math.PI/2)*r,l=Math.sin(e+Math.PI/2)*r;return Ne({x:n*s-o+i,y:a*s-l},{x:n*s+o+i,y:a*s+l},{x:n*(t+s)+i,y:a*(t+s)})}(t,s,i,e)}function Pe(e,t,i,s,r){if(t<0)throw new Error("Radius cannot be negative. Given: "+t);if(r<0)throw new Error("The size of the arrowhead cannot be negative. Given: "+r);return t===1/0?Le(i,e,s,r):function(e,t,i,s){const r=Te(i/t);return Ie(s,0,t,Te(e),Te(e)-r)}(e,t,i,s)+function(e,t,i,s,r){const n=t/2,a=r/i-e,o=Math.sqrt(t*t+i*i),l=(r+t*Math.sign(r))/i-e,d=Math.cos(a),h=Math.sin(a),c={x:(i+n)*d+s,y:(i+n)*h},p={x:(i-n)*d+s,y:(i-n)*h},u={x:o*Math.cos(l)+s,y:o*Math.sin(l)};return Ne(c,u,p)}(e,r,t,s,i)}function Be(e,t,i,s,r){return Pe(e,t,t*i,s,r)}function Re(e,t,i){return Math.min(i,Math.max(e,t))}const ze={properties:{leftMotorSpeed:{type:Number,attribute:"left-motor-speed"},rightMotorSpeed:{type:Number,attribute:"right-motor-speed"}}};class Ae extends z{get clampedLeftMotorSpeed(){return Re(this.leftMotorSpeed,-1,1)}get clampedRightMotorSpeed(){return Re(this.rightMotorSpeed,-1,1)}constructor(){super(),this.leftMotorSpeed=0,this.rightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t){const i=this.shadowRoot.getElementById("svg").getBoundingClientRect(),s=.13*i.width,r=i.width-2*(s+20),n=i.height-40;if(Math.abs(e)<=.05&&Math.abs(t)<=.05)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*i.width);const a=Math.min(r,n)/2-8;if(Math.abs(e-t)<=.001){return`<g class="arrow">${Le(Math.abs(e*a),-Math.sign(e)*Math.PI/2,0,8)}</g>`}const o=Math.PI,l=(t-e)/2,d=(e+t)/2,h=d/l;let c;if(Math.abs(h)>=1){const e=-Math.sign(h),t=(e+1)*o/2;let i=Math.abs(h*a);c=Pe(t,i,e*d*a,e*i,8)}else{const i=Math.sign(e-t);if(0==h){c=Be(l<0?o:0,Math.max(e,t)*a,i*o,0,8)}else{let s=h<0?e:t,r=h<0?t:e,n=Math.abs(s)*a;c=Be(h<0?o:0,n,i*((r/s-(p=0))*(o-(u=.5))/(-1-p)+u),-h*n,8)}}var p,u;return`<g class="arrow">${c}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getLeftForegroundStyle(){return this.getForegroundStyle(this.clampedLeftMotorSpeed)}getRightForegroundStyle(){return this.getForegroundStyle(this.clampedRightMotorSpeed)}getForegroundStyle(e){const t=Re(e,-1,1);return t>0?`\n        height: ${Math.abs(t)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(t)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e;const t=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*t.width}px, ${.5*t.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e}render(){return D`
      <div class="diff-drive-container">
        <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
                <div class="foreground" style="${this.getLeftForegroundStyle()}"></div>
            </div>
        </div>
        <svg id="svg">
            <g id="forceVector"></g>
            <g id="drivetrain" class="drivetrain"></g>
        </svg>
        <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
                <div class="foreground" style="${this.getRightForegroundStyle()}"></div>
            </div>
        </div>
      </div>
    `}}I(Ae,"properties",ze.properties),I(Ae,"styles",A`
    :host {
      display: inline-block;
      width: 400px;
      height: 300px;
      padding: 0 10px;
    }

    .diff-drive-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    svg {
      overflow: overlay;
      flex: 1;
      height: 100%;
    }

    svg .x {
        stroke: rgb(50,50,255);
        stroke-width: 2;
    }

    svg .arrow line, svg .arrow path {
        stroke: rgb(50,50,255);
        stroke-width: 2;
        fill: none;
    }

    svg .arrow polygon {
        stroke: rgb(50,50,255);
        fill: rgb(50,50,255);
    }

    svg .drivetrain {
        fill: none;
        stroke: black;
    }

    .bar {
        position: relative;
        height: calc(100% - 30px);
        width: 20px;
        border-radius: 3px;
        margin: 15px 0;
        background: #DDD;
    }

    .speed {
        display: flex;
        height: 100%;
        flex-direction: row;
        align-items: center;
        margin-left: 30px;
    }

    frc-table-axis {
        width: 10px;
        height: calc(100% - 35px);
    }

    .foreground {
        position: absolute;
        top: 0;
        width: 20px;
        background: lightblue;
        border-radius: 3px;
    }
  `),customElements.define("frc-differential-drivebase",Ae);var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-differential-drivebase",elementConfig:ze});const Oe={properties:{frontLeftMotorSpeed:{type:Number,attribute:"front-left-motor-speed"},frontRightMotorSpeed:{type:Number,attribute:"front-right-motor-speed"},rearLeftMotorSpeed:{type:Number,attribute:"rear-left-motor-speed"},rearRightMotorSpeed:{type:Number,attribute:"rear-right-motor-speed"}}};class je extends z{constructor(){super(),V(this,e),this.frontLeftMotorSpeed=0,this.frontRightMotorSpeed=0,this.rearLeftMotorSpeed=0,this.rearRightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t,i,s){const r=this.shadowRoot.getElementById("svg").getBoundingClientRect(),n=.13*r.width,a=r.width-2*(n+20),o=r.height-40,l=Math.min(a,o)/2-16,d={x:(e-t-i+s)/4,y:(e+t+i+s)/4},h=(-e+t-i+s)/4,c=Math.hypot(d.x,d.y),p=Math.atan2(d.y,d.x);if(Math.abs(h)<=.01&&c<=.01)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*r.width);let u="",m="",b="";return Math.abs(h)>.01&&(u=Be(0,l,-h*Math.PI,0,8),m=Be(Math.PI,l,-h*Math.PI,0,8)),c>.01&&(b=Le(c*l,-p,0,8)),`<g class="arrow">${u} ${m} ${b}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getFlForegroundStyle(){return this.getForegroundStyle(this.frontLeftMotorSpeed)}getFrForegroundStyle(){return this.getForegroundStyle(this.frontRightMotorSpeed)}getRlForegroundStyle(){return this.getForegroundStyle(this.rearLeftMotorSpeed)}getRrForegroundStyle(){return this.getForegroundStyle(this.rearRightMotorSpeed)}getForegroundStyle(i){const s=L(this,e,t).call(this,i,-1,1);return s>0?`\n        height: ${Math.abs(s)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(s)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0,0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let i=this.drawMotionVector(L(this,e,t).call(this,this.frontLeftMotorSpeed),L(this,e,t).call(this,this.frontRightMotorSpeed),L(this,e,t).call(this,this.rearLeftMotorSpeed),L(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=i;const s=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*s.width}px, ${.5*s.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(i){super.updated(i);let s=this.drawMotionVector(L(this,e,t).call(this,this.frontLeftMotorSpeed),L(this,e,t).call(this,this.frontRightMotorSpeed),L(this,e,t).call(this,this.rearLeftMotorSpeed),L(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=s}render(){return D`
      <div class="diff-drive-container">
        <div class="speed-pair">
          <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
              <div class="foreground" style="${this.getFlForegroundStyle()}"></div>
            </div>
          </div>
          <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
                <div class="foreground" style="${this.getRlForegroundStyle()}"></div>
            </div>
          </div>
        </div>
        <svg id="svg">
          <g id="forceVector"></g>
          <g id="drivetrain" class="drivetrain"></g>
        </svg>
        <div class="speed-pair">
          <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
              <div class="foreground" style="${this.getFrForegroundStyle()}"></div>
            </div>
          </div>
          <div class="speed">
            <frc-table-axis ticks="5" vertical .range="${[1,-1]}"></frc-table-axis>
            <div class="bar">
              <div class="foreground" style="${this.getRrForegroundStyle()}"></div>
            </div>
          </div>
        </div>
      </div>
    `}}e=new WeakSet,t=function(e){return Math.min(1,Math.max(e,-1))},I(je,"properties",Oe.properties),I(je,"styles",[ve,A`
      :host {
        width: 400px;
        height: 300px;
        padding: 0 10px;
      }

      .diff-drive-container {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
      }

      svg {
        overflow: overlay;
        flex: 1;
        height: 100%;
      }

      svg .x {
          stroke: rgb(50,50,255);
          stroke-width: 2;
      }

      svg .arrow line, svg .arrow path {
          stroke: rgb(50,50,255);
          stroke-width: 2;
          fill: none;
      }

      svg .arrow polygon {
          stroke: rgb(50,50,255);
          fill: rgb(50,50,255);
      }

      svg .drivetrain {
          fill: none;
          stroke: black;
      }

      .bar {
          position: relative;
          height: calc(100% - 30px);
          width: 20px;
          border-radius: 3px;
          margin: 15px 0;
          background: #DDD;
      }

      .speed-pair {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .speed {
          display: flex;
          height: 48%;
          flex-direction: row;
          align-items: center;
          margin-left: 30px;
      }

      frc-table-axis {
          width: 10px;
          height: calc(100% - 35px);
      }

      .foreground {
          position: absolute;
          top: 0;
          width: 20px;
          background: lightblue;
          border-radius: 3px;
      }
    `]),customElements.define("frc-mecanum-drivebase",je);const qe=[De,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-mecanum-drivebase",elementConfig:Oe})],Fe={properties:{x:{type:Number},y:{type:Number},z:{type:Number},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class He extends j{renderAccelerometer(e,t){return D`
      <div part="accelerometer">
        <label part="label">${e}</label>
        <frc-accelerometer
          part="${e}"
          value="${this[e]||0}"
          min="${this.min}"
          max="${this.max}"
          center="${this.center}"
          precision="${this.precision}"
          ?hide-text="${this.hideText}"
          num-tick-marks="${t}"
          unit="${this.unit}"
        ></frc-accelerometer>
      </div>
    `}render(){return D`
      ${this.renderAccelerometer("x",0)}
      ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}I(He,"properties",Fe.properties),I(He,"styles",A`
    :host {
      display: inline-flex;
      flex-direction: column;
      height: auto;
      font-family: sans-serif;
      width: 300px;
    }

    [part=accelerometer] {
      width: 100%;
      display: flex;
      margin-bottom: 10px;
    }

    [part=accelerometer]:last-child {
      margin-bottom: 0;
    }

    [part=accelerometer] label {
      width: 10px;
      padding-top: 2px;
      font-weight: bold;
      text-transform: uppercase;
    }

    frc-accelerometer {
      width: 100%;
      flex: 1;
    }

    :host(:not([num-tick-marks="0"])) frc-accelerometer::part(bar) {
      width: calc(100% - 40px);
      margin: 0 20px;
    }

    :host([num-tick-marks="0"]) frc-accelerometer::part(bar) {
      width: 100%;
      margin: 0;
    }
  `),customElements.define("frc-3-axis-accelerometer",He);var Ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-3-axis-accelerometer",elementConfig:Fe});const Ke={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String}}};class We extends j{render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max);return D`
      <frc-bar value="${this.value}" min="${e}" max="${t}" center="${this.center}" part="bar">
        ${this.hideText?"":D`
        ${this.value.toFixed(function(e,t,i){return Math.min(i,Math.max(e,t))}(this.precision,0,100))}
        ${this.unit}
        `}
      </frc-bar>
      ${this.numTickMarks>0?D`
      <frc-table-axis part="axis" ticks="${this.numTickMarks}" .range="${[e,t]}" unit="${this.unit}"></frc-table-axis>
      `:""}
    `}}I(We,"properties",Ke.properties),I(We,"styles",[ve,A`
      :host {
        display: inline-block;
        width: 300px;
        height: auto;
        font-family: sans-serif;
      }

      :host([num-tick-marks="0"]) [part=bar] {
        width: 100%;
        margin: 0;
      }

      [part=bar] {
        position: relative;
        width: calc(100% - 40px);
        height: 20px;
        margin: 0 20px;
        border-radius: 3px;
      }

      [part=axis] {
        width: calc(100% - 45px);
        margin: 2px auto 0;
        display: block;
      }
    `]),customElements.define("frc-number-bar",We);var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-bar",elementConfig:Ke,default:We});const Qe={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class Xe extends We{}I(Xe,"properties",Qe.properties),customElements.define("frc-accelerometer",Xe);var Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-accelerometer",elementConfig:Qe});const Ye=["Unknown","Practice","Qualification","Elimination"],Ze={properties:{matchType:{type:Number,attribute:"match-type"},matchNumber:{type:Number,attribute:"match-number"},eventName:{type:String,attribute:"event-name"},fmsControlData:{type:Number,attribute:"fms-control-data"}}};class et extends j{getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(1&this.fmsControlData)}isAuto(){return!!(2&this.fmsControlData)}isTest(){return!!(4&this.fmsControlData)}isEmergencyStopped(){return!!(8&this.fmsControlData)}isFmsAttached(){return!!(16&this.fmsControlData)}isDsAttached(){return!!(32&this.fmsControlData)}render(){return D`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${Ye[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>
      
      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?D`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            FMS connected
          </span>
          `:D`
          <span>
            <iron-icon icon="vaadin:close-small"></iron-icon>
            FMS disconnected
          </span>
          `}
        </span>
        <span>
          ${this.isDsAttached()?D`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            DriverStation connected
          </span>
          `:D`
          <span>
            <iron-icon icon="vaadin:close-small"></iron-icon>
            DriverStation disconnected
          </span>
          `}
        </span>
      </p>
      <p style="font-weight: normal">
        Robot state: ${this.getRobotState()}
      </p>
    `}}I(et,"properties",Ze.properties),I(et,"styles",A`
    p {
      margin: 5px 0;
    }
    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
    :host {
      text-align: center;
      font-size: 15px;
      display: inline-flex;
      width: auto;
      flex-direction: column;
      justify-content: center;
      font-family: sans-serif;
    }
    [icon="vaadin:check"] {
      color: green;
    }
    [icon="vaadin:close-small"] {
      color: red;
    }
  `),customElements.define("frc-basic-fms-info",et);var tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-basic-fms-info",elementConfig:Ze});const it={properties:{value:{type:Boolean,primary:!0},trueColor:{type:String,inputType:"ColorPicker",defaultValue:"#00ff00",attribute:"true-color"},falseColor:{type:String,inputType:"ColorPicker",defaultValue:"#ff0000",attribute:"false-color"},label:{type:String}}};class st extends z{constructor(){super(),this.value=!1,this.trueColor="#00ff00",this.falseColor="#ff0000",this.label=""}updated(){const e=this.shadowRoot.querySelector("[part=box]"),t=this.value?this.trueColor:this.falseColor;e.style.setProperty("--box-color",t)}render(){return D`
      <div part="box">
        ${this.label}
      </div>
    `}}I(st,"properties",it.properties),I(st,"styles",A`
    :host { 
      display: inline-block; 
      width: 100px;
      height: 100px;
      margin: 5px;
    }

    [part=box] {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      background-color: var(--box-color);
      text-align: center;
    }
  `),customElements.define("frc-boolean-box",st);var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-boolean-box",elementConfig:it});let nt=0;const at={properties:{fps:{type:Number,defaultValue:-1},width:{type:Number,defaultValue:-1},height:{type:Number,defaultValue:-1},compression:{type:Number,defaultValue:-1},hideCrosshair:{type:Boolean,attribute:"hide-crosshair"},crosshairColor:{type:String,attribute:"crosshair-color",defaultValue:"#ffffff"},crosshairWidth:{type:Number,attribute:"crosshair-width",defaultValue:2},streams:{type:Array},waitImage:{type:String,attribute:"wait-image",defaultValue:"https://i.ytimg.com/vi/w6geNk3QnBQ/maxresdefault.jpg"}}};class ot extends j{constructor(){super(),this.url="",this.loaded=!1,this.streamsLoadingIds=[]}getStreams(){let e=[...new Set(this.streams)].map((e=>e.replace("mjpg:","")));return[...e].forEach((t=>{const i=new URL(t);e.push(`${i.protocol}//127.0.0.1:${i.port}${i.pathname}${i.search}`)})),[...new Set(e)]}isStreaming(){return this.url}firstUpdated(){super.firstUpdated(),this.cameraFeedNode=this.shadowRoot.querySelector("[part=camera-feed]"),setInterval((()=>{this.isConnected&&(this.isStreaming()||this.getStreams().forEach((e=>{this.loadStream(e)})))}),1e3),setInterval((()=>{this.isConnected&&this.setImageSize()}),1e3)}loadStream(e){const t=nt;nt++,this.streamsLoadingIds.push(t);let i=new Image;i.src=e,console.log("load stream:",e);const s=setTimeout((()=>{i.onload=()=>{},this.url===e&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url="");const s=this.streamsLoadingIds.indexOf(t);s>=0&&this.streamsLoadingIds.splice(s,1)}),1e4);i.onload=()=>{console.log("load:",e),clearTimeout(s),i.onload=()=>{},!this.isStreaming()&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url=i.src,this.streamsLoadingIds=[],setTimeout((()=>{this.loadStream(e)}),2e3)),this.loaded=!0}}updated(e){e.has("streams")&&(this.url="",this.streamsLoadingIds=[]),this.setImageSize();const t=Math.max(0,parseInt(this.crosshairWidth));this.style.setProperty("--crosshair-width",`${t}px`),this.style.setProperty("--crosshair-color",this.crosshairColor),this.style.setProperty("--image-display",this.url||this.waitImage?"block":"none")}resized(){this.setImageSize()}setImageSize(){const{naturalWidth:e,naturalHeight:t}=this.cameraFeedNode,{width:i,height:s}=this.getBoundingClientRect();s<t/e*i?(this.style.setProperty("--image-width",e/t*s+"px"),this.style.setProperty("--image-height",`${s}px`)):(this.style.setProperty("--image-width",`${i}px`),this.style.setProperty("--image-height",t/e*i+"px"))}getUrl(){if(!this.isStreaming())return this.waitImage;try{const e=new URL(this.url);return this.fps>0&&e.searchParams.set("fps",this.fps),this.width>=0&&this.height>=0&&e.searchParams.set("resolution",`${this.width}x${this.height}`),this.compression>=0&&e.searchParams.set("compression",this.compression),e.toString()}catch(e){return""}}render(){return D`
      <img part="camera-feed" .src="${this.getUrl()}" />
      ${this.url&&!this.hideCrosshair?D`
      <div part="x-crosshair"></div>
      <div part="y-crosshair"></div>
      `:""}
    `}}I(ot,"properties",N(T({},at.properties),{url:{type:String,reflect:!1,attribute:!1}})),I(ot,"styles",A`
    :host { 
      display: inline-flex; 
      width: 350px;
      height: 350px;
      justify-content: center;
      align-items: center;
    }

    [part=camera-feed] {
      display: var(--image-display, block);
      width: var(--image-width, 100%);
      height: var(--image-height, 100%);
      max-width: 100%;
      max-height: 100%;
    }

    [part=x-crosshair], [part=y-crosshair] {
      position: absolute;
      box-sizing: border-box;
      border-style: dashed;
    }

    [part=x-crosshair] {
      border-top-width: var(--crosshair-width, 2px);
      border-bottom-width: 0px;
      border-color: var(--crosshair-color, white);
      width: var(--image-width, 100%);
      height: 0px;
    } 

    [part=y-crosshair] {
      border-left-width: var(--crosshair-width, 2px);
      border-right-width: 0px;
      border-color: var(--crosshair-color, white);
      width: 0px;
      height: var(--image-height, 100%);
    }
  `),customElements.define("frc-camera",ot);var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-camera",elementConfig:at});const dt={properties:{distance:{type:Number},speed:{type:Number}}};class ht extends j{render(){return D`   
      <label part="distance-label">Distance</label>
      <vaadin-number-field part="distance-input" value="${this.distance}" readonly></vaadin-number-field>
      <label part="speed-label">Speed</label>
      <vaadin-number-field part="speed-input" value="${this.speed}" readonly></vaadin-number-field>
    `}}I(ht,"properties",dt.properties),I(ht,"styles",A`
    :host {
      display: inline-grid;
      grid-template-columns: min-content auto;
      grid-template-rows: 50% 50%;
      column-gap: 15px;
      align-items: center;
      width: 250px;
      font-family: sans-serif;
      
    }

    label {
      font-weight: bold;
      text-align: right;
    }

    vaadin-number-field {
      width: 100%;
      min-width: 50px;
    }
  `),customElements.define("frc-encoder",ht);var ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-encoder",elementConfig:dt});const pt={properties:{value:{type:Number,primary:!0},hideLabel:{type:Boolean,attribute:"hide-label"},precision:{type:Number,defaultValue:2}}};class ut extends z{constructor(){super(),this.value=0,this.hideLabel=!1,this.precision=2,this.tickAngles=[];for(let e=0;e<=360;e+=5)this.tickAngles.push(e);this.degreeLabelAngles=[];for(let e=0;e<360;e+=45)this.degreeLabelAngles.push(e)}firstUpdated(){this.containerNode=this.shadowRoot.querySelector(".container");new ResizeObserver((()=>{this.resized()})).observe(this)}resized(){const{width:e,height:t}=this.getBoundingClientRect();this.containerNode.style.setProperty("--gyro-container-size",`${Math.min(e,t)}px`),this.requestUpdate()}getWidth(){const e=this.shadowRoot.querySelector("svg");if(!e)return 0;const{width:t}=e.getBoundingClientRect();return t}renderTicks(){const e=this.getWidth(),t=e/2-e/20,i=e/2-e/10;return q`
      ${this.tickAngles.map((s=>{const r=s*Math.PI/180,n=e/2+t*Math.cos(r),a=e/2+t*Math.sin(r),o=e/2+i*Math.cos(r),l=e/2+i*Math.sin(r);return q`
          <line
            class="tick ${s%45==0?"big":""}"
            x1="${n}" y1="${a}" x2="${o}" y2="${l}"
          />
        `}))}
    `}renderEdge(){const e=this.getWidth();return q`
      <circle class="edge" cx="${.5*e}" cy="${.5*e}" r="${.4*e}" />
    `}renderDialHand(){const e=this.getWidth(),t=e/2-e/20-e/40,i=(this.value-90)*Math.PI/180,s=e/2,r=e/2,n=e/2+t*Math.cos(i),a=e/2+t*Math.sin(i);return q`
      <line
        class="dial-hand"
        x1="${s}" y1="${r}" x2="${n}" y2="${a}"
      />
    `}renderDialCircle(){const e=this.getWidth();return q`
      <circle class="dial-circle" cx="${.5*e}" cy="${.5*e}" r="${.04*e}" />
    `}renderDegreeLabels(){const e=this.getWidth(),t=e/2+e/100,i=this.shadowRoot.querySelector("svg");return i&&i.style.setProperty("--degree-label-font-size",.055*e+"px"),q`
      ${this.degreeLabelAngles.map((i=>{const s=(i-90)*Math.PI/180,r=e/2+t*Math.cos(s),n=e/2+t*Math.sin(s);return q`
          <text class="degree-label" x="${r}" y="${n}">${i}</text>
        `}))}
    `}renderAngleLabel(){if(this.hideLabel)return null;const e=this.getWidth(),t=this.shadowRoot.querySelector("svg");t&&t.style.setProperty("--angle-label-font-size",.08*e+"px");return q`
      <text class="angle-label" x="${e/2}" y="${e+.15*e}">
        ${this.value.toFixed((i=this.precision,s=0,r=100,Math.min(r,Math.max(i,s))))}&deg;
      </text>
    `;var i,s,r}render(){return q`
      <div class="container">
        <svg>
          ${this.renderEdge()}
          ${this.renderTicks()}
          ${this.renderDialHand()}
          ${this.renderDialCircle()}
          ${this.renderDegreeLabels()}
          ${this.renderAngleLabel()}
        </svg>
      </div>
    `}}I(ut,"properties",pt.properties),I(ut,"styles",[ve,A`
      :host { 
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 300px;
        height: auto;
      }

      .container {
        position: relative;
        width: var(--gyro-container-size);
        height: var(--gyro-container-size);

      }

      svg {
        width: 80%;
        height: 80%;
        position: relative;
        top: 5%;
        left: 10%;
        overflow: visible;
      }

      :host([hide-label]) svg {
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
      }

      svg .edge {
        fill: none;
        stroke: black;
        stroke-width: 1px;
        color: black;
        overflow: overlay;
      }

      .tick {
        stroke: #bbb;
        stroke-width: 1px;
      }

      .tick.big {
        stroke-width: 2px;
        stroke: black;
      }

      .dial-circle {
        fill: #ddd;
        stroke: white;
        stroke-width: 1%;
      }

      .dial-hand {
        fill: blue;
        stroke: blue;
        stroke-width: 3px;
      }

      .degree-label {
        fill: black;
        text-anchor: middle;
        alignment-baseline: middle;
        font-size: var(--degree-label-font-size);
      }

      .angle-label {
        fill: black;
        text-anchor: middle;
        font-size: var(--angle-label-font-size);
      }
    `]),customElements.define("frc-gyro",ut);var mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-gyro",elementConfig:pt});const bt={properties:{value:{type:Boolean}},slots:[{name:"true"},{name:"false"}],layout:{type:"absolute"},demos:[{html:'\n      <frc-if>\n        <span slot="true">Visible if true</span>\n        <span slot="false">Visible if false</span>\n      </frc-if>\n    '}]};class gt extends z{render(){return this.value?D`
        <slot name="true"></slot>
      `:D`
      <slot name="false"></slot>
    `}}I(gt,"properties",bt.properties),I(gt,"styles",A`
    :host {
      display: inline-block;
      position: absolute;
    }
  `),customElements.define("frc-if",gt);var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-if",elementConfig:bt});const vt={properties:{value:{type:String,defaultValue:"Off",primary:!0}}};class ft extends j{constructor(){super(),this.buttons=["Off","On","Forward","Reverse"]}setValue(e){this.value=e}render(){return D`   
      ${this.buttons.map((e=>D`
      <vaadin-button part="button" theme="contrast ${this.value==e?"primary":""}"
        @click="${()=>this.setValue(e)}">
        ${e}
      </vaadin-button>
      `))}
    `}}I(ft,"styles",A`
    :host {
    font-size: 15px;
    display: inline-flex;
    flex-direction: column;
    width: 150px;
    height: 300px;
    }
    [part=button] {
    border-radius: 0;
    margin: 0;
    flex: 1;
    font-size: inherit;
    height: 100%;
    }
  `),I(ft,"properties",vt.properties),customElements.define("frc-relay",ft);var xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-relay",elementConfig:vt});const wt={properties:{toggled:{type:Boolean,defaultValue:!1,primary:!0},label:{type:String,defaultValue:"Button"}}};class St extends j{onClick(){this.toggled=!this.toggled}render(){return D`   
      <vaadin-button theme="${1==this.toggled?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label}
      </vaadin-button>
    `}}I(St,"styles",[ve,A`
      :host {
        width: 100px;
        height: 50px;
      }
      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),I(St,"properties",wt.properties),customElements.define("frc-toggle-button",St);var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-button",elementConfig:wt});const Et={properties:{options:{type:Array,changeEvent:"optionsUpdate",defaultValue:["On","Off"],inputType:"StringArray"},value:{primary:!0,type:String,changeEvent:"change",inputType:"StringDropdown",allowCustomValues:!1,getOptions(){return this.options}}}};class _t extends z{constructor(){super(),V(this,i),V(this,r),this.options=["On","Off"]}async setValue(e){this.value=e}updated(e){var t;e.has("options")&&!this.options.includes(this.value)&&(this.value=null!=(t=this.options[0])?t:""),e.has("value")&&L(this,i,s).call(this),e.has("options")&&L(this,r,n).call(this)}render(){return D`   
      ${this.options.map((e=>D`
        <vaadin-button
          part="button" 
          theme="contrast ${this.value==e?"primary":""}" 
          @click="${()=>this.setValue(e)}"
        >
          ${e}
        </vaadin-button>
      `))}
    `}}i=new WeakSet,s=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},r=new WeakSet,n=function(){this.dispatchEvent(new CustomEvent("optionsUpdate",{detail:{options:this.options},bubbles:!0,composed:!0}))},I(_t,"properties",Et.properties),I(_t,"styles",A`
    :host {
      font-size: 15px;
      display: inline-flex;
      flex-direction: column;
      width: 150px;
      height: 300px;
    }

    [part=button] {
      border-radius: 0;
      margin: 0;
      flex: 1;
      font-size: inherit;
      height: 100%;
    }
  `),customElements.define("frc-toggle-group",_t);var kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-group",elementConfig:Et});const Ct={properties:{toggled:{type:Boolean,primary:!0}}};class Mt extends j{resized(){this.rect=this.getBoundingClientRect();const{width:e,height:t}=this.rect,i=this.shadowRoot.querySelector("[part=switch]");i.style.borderRadius=`${e}px`,i.style.setProperty("--circle-width",.8*t+"px"),i.style.setProperty("--circle-height",.8*t+"px"),i.style.setProperty("--circle-left",e/2-.8*t+"px"),i.style.setProperty("--circle-top",.1*t+"px"),i.style.setProperty("--circle-translate-x",e-t+"px")}onClick(){this.toggled=!this.toggled;const e=new CustomEvent("change",{detail:{toggled:this.toggled}});this.dispatchEvent(e)}render(){return D`   
        <label class="switch" @click="${this.onClick}">
          <input type="checkbox" .checked="${this.toggled}" disabled />
          <span part="switch">
            <span part="knob"></span>
          </span>
        </label>
      `}}I(Mt,"styles",A`
    :host {
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      margin-bottom: 0;
    }
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    [part=switch] {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    [part=knob] {
      position: absolute;
      display: inline-block;
      content: "";
      height: var(--circle-height);
      width: var(--circle-width);
      left: var(--circle-top);
      top: var(--circle-top);
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
    input:checked + [part=switch] {
      background-color: #2196F3;
    }
    input:focus + [part=switch] {
      box-shadow: 0 0 1px #2196F3;
    }
    input:checked + [part=switch] [part=knob] {
      transform: translateX(var(--circle-translate-x));
    }
  `),I(Mt,"properties",Ct.properties),customElements.define("frc-toggle-switch",Mt);var Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-switch",elementConfig:Ct});const Nt={properties:{value:{type:Number},max:{type:Number,defaultValue:5},min:{type:Number},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"V"}}};class It extends We{constructor(){super(),this.value=0,this.min=0,this.max=5,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="V"}}I(It,"properties",Nt.properties),customElements.define("frc-voltage-view",It);var Vt={"wired-button":{properties:{elevation:{type:"Number",defaultValue:1},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-button>Hello there</wired-button>"}]},"wired-card":{properties:{elevation:{type:"Number",defaultValue:1},fill:{type:"String",inputType:"ColorPicker"}},slots:[{name:""}],demos:[{html:"\n          <wired-card>\n            <h4>Card Header</h4>\n            <p>Some text</p>\n          </wired-card>\n        "}]},"wired-checkbox":{properties:{checked:{type:"Boolean",changeEvent:"change",primary:!0},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-checkbox>Checkbox</wired-checkbox>"}]},"wired-combo":{properties:{disabled:{type:"Boolean",reflect:!0},selected:{type:"String",changeEvent:"selected",primary:!0}},slots:[{name:"",allowedChildren:["wired-item"]}],demos:[{html:'\n          <wired-combo selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-combo>\n        '}]},"wired-item":{properties:{value:{type:"String",primary:!0}},topLevel:!1,demos:[{html:'<wired-item value="item">Some Item</wired-item>'}]},"wired-dialog":{properties:{elevation:{type:"Number",defaultValue:5},open:{type:"Boolean",reflect:!0,primary:!0}},demos:[{html:'\n          <wired-dialog>\n            <p>\n              Dialog content here\n            </p>\n            <div style="text-align: right; padding: 30px 16px 16px;">\n              <wired-button id="closeDialog">Close dialog</wired-button>\n            </div>\n          </wired-dialog>\n        '}]},"wired-divider":{properties:{elevation:{type:"Number",defaultValue:1}}},"wired-fab":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-fab>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-fab>\n        '}]},"wired-icon-button":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-icon-button>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-icon-button>\n        '}]},"wired-image":{properties:{src:{type:"String",primary:!0},elevation:{type:"Number",defaultValue:1}},demos:[{html:'<wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>'}]},"wired-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},type:{type:"String"},value:{type:"String",changeEvent:"change",primary:!0}},demos:[{html:'<wired-input type="text"></wired-input>'}]},"wired-link":{properties:{elevation:{type:"Number",defaultValue:1},href:{type:"String",primary:!0},target:{type:"String",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["_blank","_self","_parent","_top","framename"]}},demos:[{html:'<wired-link href="https://docs.wpilib.org/en/stable/" target="_blank">WPILib Docs</wired-link>'}]},"wired-listbox":{properties:{horizontal:{type:"Boolean"},selected:{type:"String",primary:!0,changeEvent:"selected"}},demos:[{html:'\n          <wired-listbox id="combo" selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-listbox>\n        '}]},"wired-progress":{properties:{value:{type:"Number",primary:!0},min:{type:"Number"},max:{type:"Number",defaultValue:100},percentage:{type:"Boolean"}}},"wired-progress-ring":{properties:{value:{type:"Number",primary:!0},min:{type:"Number"},max:{type:"Number",defaultValue:100},hideLabel:{type:"Boolean"},showLabelAsPercent:{type:"Boolean"},precision:{type:"Number"}}},"wired-radio-group":{properties:{selected:{type:"String",primary:!0,changeEvent:"selected"}},slots:[{name:"",allowedChildren:["wired-radio"]}],demos:[{html:'\n          <wired-radio-group selected="two">\n            <wired-radio name="one">One</wired-radio>\n            <wired-radio name="two">Two</wired-radio>\n            <wired-radio name="three">Three</wired-radio>\n            <wired-radio name="four">Four</wired-radio>\n          </wired-radio-group>\n        '}]},"wired-radio":{properties:{name:{type:"String"},disabled:{type:"Boolean",reflect:!0},checked:{type:"Boolean",primary:!0,changeEvent:"change"},text:{type:"String"}},topLevel:!1,demos:[{html:'<wired-radio name="radio">Radio Button</wired-radio>'}]},"wired-search-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},value:{type:"String",primary:!0,changeEvent:"change"}}},"wired-slider":{properties:{value:{type:"Number",defaultValue:50,primary:!0,changeEvent:"change"},min:{type:"Number"},max:{type:"Number",defaultValue:100}}},"wired-spinner":{properties:{spinning:{type:"Boolean",primary:!0},duration:{type:"Number",defaultValue:1500}}},"wired-tabs":{properties:{selected:{type:"String",primary:!0}},demos:[{html:'\n          <wired-tabs selected="Two">\n            <wired-tab name="One">\n              <h4>Card 1</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Two">\n              <h4>Card 2</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Three">\n              <h4>Card 3</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n          </wired-tabs>\n        '}]},"wired-tab":{properties:{name:{type:"String"},label:{type:"String"}},demos:[{html:'<wired-tab name="Tab">'}]},"wired-textarea":{properties:{rows:{type:"Number"},maxrows:{type:"Number"},value:{type:"String",inputType:"Textarea",primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0},placeholder:{type:"String"}}},"wired-toggle":{properties:{checked:{type:"Boolean",primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0}}},"wired-video":{properties:{src:{type:"String",primary:!0},autoplay:{type:"Boolean"},loop:{type:"Boolean"},muted:{type:"Boolean"},playsinline:{type:"Boolean"}},demos:[{html:'<wired-video src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"></wired-video>'}]}};const Lt=[...re,...ye,...Ee,Me,...qe,Ue,Je,tt,rt,lt,ct,mt,yt,Ge,xt,$t,kt,Tt,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-voltage-view",elementConfig:Nt})],Pt=Object.fromEntries(Lt.map((({elementName:e,elementConfig:t})=>[e,t])));var Bt=T(T({},Pt),Vt);const Rt={string:"",number:0,boolean:!1,array:[],object:{}};customElements.define("frc-api-viewer",class extends z{static get properties(){return{tags:{type:Array,attribute:!1},selected:{type:String,attribute:"selected"},component:{type:String,attribute:"component"}}}constructor(){super(),this.tags=[],this.tagNames=[],this.selected="",this.component=""}hasTag(e){return this.tagNames.indexOf(e)>=0}transformConfig(e,t){var i;const s=Object.entries(t.properties).map((([e,t])=>{const{type:i,attribute:s}=t,r="function"==typeof i?i.name.toLowerCase():i.toString().toLowerCase(),n="defaultValue"in t?t.defaultValue:Rt[r];return{name:e,description:"",type:r,attribute:s,default:JSON.stringify(n)||""}}));return{name:e,description:null!=(i=t.description)?i:"",attributes:[],properties:s,events:[],slots:[],cssProperties:[],cssParts:[]}}addElement(e,t){this.component&&e!==this.component||!this.hasTag(e)&&customElements.get(e)&&t&&(this.tags.push(t),this.tagNames.push(e),this.tags=this.tags.sort(((e,t)=>e.name.localeCompare(t.name))),this.requestUpdate())}firstUpdated(){Object.entries(Bt).forEach((([e,t])=>{this.addElement(e,this.transformConfig(e,t))}))}updated(e){if(e.has("tags")){const e=this.shadowRoot.querySelector("api-viewer");null==e||e.setTemplates(this.tags)}}render(){return D`<api-viewer .elements="${this.tags}" selected="${this.selected}"></api-viewer>`}});class zt extends z{constructor(){super(),V(this,a),this.element=null,this.propertyHandler=null,this.propertyName=null}get inputElement(){return this.renderRoot.querySelector('[part="input"]')}get property(){return this.propertyHandler.getProperty()}getValue(){return this.propertyHandler.value}setValue(e){this.propertyHandler.value=e}isDisabled(){return!1}renderInputField(){return D``}propertyChanged(e){}updated(e){e.has("propertyHandler")&&this.propertyHandler&&this.propertyHandler.subscribe((e=>{this.propertyChanged(e),L(this,a,o).call(this)}),!0)}render(){return D`
      <vaadin-form-item>
        <label slot="label">${this.propertyName}</label>
        ${this.renderInputField()}
      </vaadin-form-item>
    `}}a=new WeakSet,o=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.getValue(),name:this.propertyName},bubbles:!0,composed:!0}))},I(zt,"styles",A`
    :host {
      display: block;
      font-family: sans-serif;
    }
    vaadin-form-item {
      width: 100%;
    }
    vaadin-text-field, vaadin-number-field, multiselect-combo-box, vaadin-text-area, vaadin-combo-box {
      width: 100%;
    }
    input[type=color] {
      width: calc(100% - 5px);
      min-width: 163px;
    }
    juicy-ace-editor {
      margin-top: 12px;
      height: 300px;
    }
  `),I(zt,"properties",{element:{type:HTMLElement,attribute:!1},propertyHandler:{type:Object,attribute:!1},propertyName:{type:String}});customElements.define("dashboard-string-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return D`
      <vaadin-text-field 
        part="input" 
        .value=${null!=(e=this.getValue())?e:""} 
        @change="${this.onInputChange}" 
        theme="small" 
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-field>
    `}});customElements.define("dashboard-boolean-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.checked)}renderInputField(){return D`
      <vaadin-checkbox
        part="input"
        ?checked="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      ></vaadin-checkbox>
    `}});customElements.define("dashboard-number-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return D`
      <vaadin-number-field
        part="input"
        value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
        has-controls
      ></vaadin-number-field>
    `}});customElements.define("dashboard-color-picker-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return D`
      <input
        part="input"
        type="color"
        .value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      />
    `}});customElements.define("dashboard-string-dropdown-property-view",class extends zt{allowCustomValues(){return!("allowCustomValues"in this.property)||this.property.allowCustomValues}onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return D`
      <vaadin-combo-box 
        part="input"
        .items="${this.property.getOptions.bind(this.element)()}" 
        value="${this.getValue()}"
        @change="${this.onInputChange}"
        theme="small"
        ?clear-button-visible="${this.allowCustomValues()}"
        ?disabled="${this.isDisabled()}"
        ?allow-custom-value="${this.allowCustomValues()}"
      >
      </vaadin-combo-box>
    `}});customElements.define("dashboard-number-array-property-view",class extends zt{update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>parseFloat(e.display))))}onCustomValueSet(e){const t=parseFloat(e.detail);isNaN(t)||(this.setValue(this.getValue().concat(t)),this.requestUpdate())}renderInputField(){return D`
      <multiselect-combo-box
        part="input"
        theme="small"
        allow-custom-values
        @custom-values-set="${this.onCustomValueSet}"
        @change="${this.onInputChange}"
        item-label-path="autocomplete" 
        item-value-path="value"
        item-id-path="value"
        ?disabled="${this.isDisabled()}"
      >
        <template>
          [[item.display]]
        </template>
      </multiselect-combo-box>
    `}});const At=[{value:"true",autocomplete:"true",display:"true"},{value:"false",autocomplete:"false",display:"false"}];customElements.define("dashboard-boolean-array-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.value.startsWith("true"))))}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>e?{value:`true${t.toString()}`,autocomplete:"true",display:"true"}:{value:`false${t.toString()}`,autocomplete:"false",display:"false"}))}renderInputField(){return D`
      <multiselect-combo-box
        part="input"
        theme="small"
        @change="${this.onInputChange}"
        .items="${At}"
        item-label-path="autocomplete" 
        item-value-path="value"
        item-id-path="value"
        ?disabled="${this.isDisabled()}"
      >
        <template>
          [[item.display]]
        </template>
      </multiselect-combo-box>
    `}});customElements.define("dashboard-string-array-property-view",class extends zt{getValue(){var e;return null!=(e=super.getValue())?e:[]}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.display)))}onCustomValueSet(e){const t=e.detail;this.setValue(this.getValue().concat(t)),this.requestUpdate()}renderInputField(){return D`
      <multiselect-combo-box
        part="input"
        theme="small"
        allow-custom-values
        @custom-values-set="${this.onCustomValueSet}"
        @change="${this.onInputChange}"
        item-label-path="autocomplete" 
        item-value-path="value"
        item-id-path="value"
        ?disabled="${this.isDisabled()}"
      >
        <template>
          [[item.display]]
        </template>
      </multiselect-combo-box>
    `}});customElements.define("dashboard-text-area-property-view",class extends zt{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return D`
      <vaadin-text-area
        part="input"
        .value="${null!=(e=this.getValue())?e:""}"
        @change="${this.onInputChange}"
        theme="small"
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-area>
    `}});customElements.define("dashboard-function-property-view",class extends zt{static get styles(){return[super.styles,A`
        vaadin-form-item {
          align-items: self-start;
        }
      `]}static get properties(){return N(T({},super.properties),{inputValue:{type:String,attribute:!1}})}constructor(){super(),this.onEditTimeoutId=null,this.inputValue=""}updated(e){var t;if(super.updated(e),(e.has("element")||e.has("connector"))&&(this.inputValue=null!=(t=this.getValue())?t:""),e.has("inputValue")){this.inputElement.value!==this.inputValue&&(this.inputElement.value=this.inputValue),this.setValue(this.inputValue)}}propertyChanged(e){this.inputElement.value=e}onInputChange(){this.onEditTimeoutId&&(clearTimeout(this.onEditTimeoutId),this.onEditTimeoutId=null),this.onEditTimeoutId=setTimeout((()=>{this.inputValue=this.inputElement.value}),500)}renderInputField(){return D`
      <juicy-ace-editor
        part="input"
        @change="${this.onInputChange}"
        mode="ace/mode/javascript"
        theme="ace/theme/monokai"
        ?disabled="${this.isDisabled()}"
      ></juicy-ace-editor>
    `}});const Dt=A`
  :host {
    display: block;
    padding: 15px 10px;
    font-family: sans-serif;
    height: 100%;
    box-sizing: border-box;
  }

  p {
    margin-top: 0;
    font-weight: bold;
  }

  p span {
    color: purple;
  }

  .properties-view {
    margin-bottom: 10px;
  }
`;class Ot extends z{constructor(){super(),this.element=null,this.connector=null}get inputElement(){return this.renderRoot.querySelector("[part=input]")}onValueChange(e){this.renderRoot.querySelectorAll(".property-view").forEach((e=>{null==e||e.requestUpdate()}))}render(){var e;if(!this.element)return D``;const t=null==(e=this.connector)?void 0:e.getElementWebbit(this.element);if(!t)return D``;const{properties:i}=t.getConfig();return D`
      <div class="properties-view">
        <vaadin-form-layout @change=${this.onValueChange}>
          ${Object.entries(i).map((([e])=>this.renderPropertyView(e,t.getPropertyHandler(e))))}
        </vaadin-form-layout>
      </div>
    `}renderPropertyView(e,t){var i;const s=t.getProperty();switch(null!=(i=s.inputType)?i:s.type){case"String":return D`
          <dashboard-string-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-property-view>
        `;case"Number":return D`
          <dashboard-number-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-number-property-view>
        `;case"Boolean":return D`
          <dashboard-boolean-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-boolean-property-view>
        `;case"Array":case"StringArray":return D`
          <dashboard-string-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-array-property-view>
        `;case"BooleanArray":return D`
          <dashboard-boolean-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-boolean-array-property-view>
        `;case"NumberArray":return D`
          <dashboard-number-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-number-array-property-view>
        `;case"Textarea":return D`
          <dashboard-text-area-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-text-area-property-view>
        `;case"StringDropdown":return D`
          <dashboard-string-dropdown-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-dropdown-property-view>
        `;case"ColorPicker":return D`
          <dashboard-color-picker-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-color-picker-property-view>
        `;case"Function":return D`
          <dashboard-function-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-function-property-view>
        `}return D``}}I(Ot,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:F,attribute:!1}}),I(Ot,"styles",Dt),customElements.define("dashboard-properties-tool",Ot);const jt=A`
  :host {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
  }

  summary {
    display: flex;
    border-bottom: 1px solid rgb(187, 187, 187);
  }

  summary div {
    height: 25px;
    display: inline-flex;
    align-items: center;
    cursor: default;
  }

  details .opened-cursor {
    display: none;
    width: 15px;
    margin-right: 3px;
  }

  details .closed-cursor {
    display: inline-block;
    width: 15px;
    margin-right: 3px;
  }

  details[open] > summary .opened-cursor {
    display: inline-block;
  }

  details[open] > summary .closed-cursor {
    display: none;
  }

  .childless > summary {
    list-style: none;
  }

  details.selected > summary {
    background-color: #ddd;
  }

  details:not(.selected) > summary:hover button {
    display: inline-block;
  }

  .header {
    width: 96%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .key {
    width: 60%;
    display: flex;
    white-space: nowrap;
    align-items: center;
    height: 100%;
    padding-left: calc(5px + 15px * var(--level));
    box-sizing: border-box;
  }
  
  .header .value {
    width: 35%;
    overflow: auto;
    white-space: nowrap;
    display: inline-block;
  }

  button {
    display: none;
    border-radius: 10px;
    background-color: lightblue;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    font-size: 14px;
    height: 20px;
  }
`;class qt extends z{constructor(){super(),this.label="",this.providerName="",this.source=null,this.level=0,this.selectedSourceKey="",this.selectedSourceProvider="",this.selectedSource=null,this.store=null,this.disabled=!1}get detailsElement(){return this.renderRoot.querySelector("details")}hasSources(){return this.source.hasChildren()}hasValue(){return this.source.hasValue()}isSelected(){return this.source===this.selectedSource}isSelectedKeyDescendent(){return!!this.selectedSource&&this.selectedSource.getKey().startsWith(this.source.getKey()+"/")}updated(e){e.has("selectedSource")&&this.isSelectedKeyDescendent()&&(this.detailsElement.open=!0)}firstUpdated(){this.store.subscribe(this.providerName,this.source.getKey(),(()=>{this.requestUpdate()}),!0)}onSelect(){const e=new CustomEvent("sourceSelect",{bubbles:!0,composed:!0,detail:{sourceKey:this.source.getKey(),sourceProvider:this.providerName}});this.dispatchEvent(e)}renderValue(){const e=this.source.getValue();return"boolean"==typeof e?D`
        <input disabled type="checkbox" ?checked="${e}" />
        <label>${e.toString()}</label>
      `:"string"==typeof e?D`
        "${e}"
      `:"number"==typeof e?D`
        ${e}
      `:e instanceof Array?D`
        [${e.join(", ")}]
      `:D``}renderChildSources(){if(!this.hasSources())return null;const e=this.source.getChildren(),t=Object.entries(e);return D`
      <div class="sources">
        ${t.map((([e,i])=>D`
          <dashboard-source-view 
            ?only-child="${1===t.length}"
            .label="${e}" 
            .providerName="${this.providerName}"
            .source="${i}"
            .level="${this.level+1}"
            .selectedSourceKey="${this.selectedSourceKey}"
            .selectedSourceProvider="${this.selectedSourceProvider}"
            .selectedSource="${this.selectedSource}"
            .store="${this.store}"
            ?disabled=${this.disabled}
          >
          </dashboard-source-view>
        `))}
      </div>
    `}render(){return D`
      <details 
        style=${`--level: ${this.level}`}
        class=${e={childless:!this.hasSources(),selected:this.isSelected()},Object.entries(e).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div class="header">
            <span class="key">
              ${this.hasSources()?D`
                <span class="caret">
                  <iron-icon icon="vaadin:angle-right" class="closed-cursor"></iron-icon>
                  <iron-icon icon="vaadin:angle-down" class="opened-cursor"></iron-icon>
                </span>
              `:""}
              <label>${""!==this.label?this.label:D`&nbsp;`}</label>
              ${this.disabled?"":D`
                <button @click="${this.onSelect}">Select</button>
              `}
            </span>
            <span class="value">
              ${this.hasValue()?this.renderValue():""}
            </span>
          </div>
        </summary>
        ${this.renderChildSources()}
      </details>
    `;var e}}I(qt,"styles",jt),I(qt,"properties",{onlyChild:{type:Boolean,attribute:"only-child"},label:{type:String},providerName:{type:String},source:{type:Object},level:{type:Number},selectedSourceKey:{type:String},selectedSourceProvider:{type:String},selectedSource:{type:Object},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-source-view",qt);class Ft extends z{constructor(){super(),this.sourceKey="",this.sourceProvider="",this.store=null,this.disabled=!1}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}firstUpdated(){this.store.sourceProviderAdded((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)})),this.sourceProviderNames.forEach((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)}))}updated(e){}renderSources(e){const t=this.store.getSource(e,"").getChildren(),i=Object.entries(t),s=this.sourceKey&&this.store?this.store.getSource(this.sourceProvider,this.sourceKey):null;return D`
      ${i.map((([t,r])=>D`
        <dashboard-source-view
          ?only-child="${1===i.length}"
          .label="${t}" 
          .providerName="${e}"
          .source="${r}"
          .selectedSourceKey="${this.sourceKey}"
          .selectedSourceProvider="${this.sourceProvider}"
          .selectedSource="${s}"
          .store="${this.store}"
          ?disabled=${this.disabled}
        >
        </dashboard-source-view>
      `))}
    `}render(){return 0===this.sourceProviderNames.length?D`
        <p>There are no sources currently available.</p>
      `:D`
      <vaadin-accordion opened="${null}">
        ${this.sourceProviderNames.map((e=>D`
          <vaadin-accordion-panel theme="small">
            <div slot="summary">${e}</div>
            <div>${this.renderSources(e)}</div>
          </vaadin-accordion-panel>
        `))}
      </vaadin-accordion>
    `}}I(Ft,"styles",A`
    :host {
      display: block;
      font-family: sans-serif;
    }
    p {
      margin: 8px 0 5px;
      font-weight: bold;
    }
  `),I(Ft,"properties",{sourceKey:{type:String},sourceProvider:{type:String},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-sources-view",Ft);const Ht=A`
  :host {
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  [part=source-fields] {
    display: flex;
  }

  [part=source-fields] vaadin-combo-box {
    flex: 1;
    margin-right: 7px;
    min-width: 120px;
  }

  [part=source-fields] vaadin-combo-box::part(text-field) {
    padding-top: 0;
  }

  [part=source-key-dropdown] {
    --vaadin-combo-box-overlay-width: 400px;
  }

  [part=buttons] {
    display: flex;
    justify-content: flex-end;
  }

  [part=buttons] vaadin-button {
    margin-right: 7px;
  }
  p {
    margin-top: 0;
    font-weight: bold;
  }
  p span {
    color: purple;
  }
  vaadin-form-layout vaadin-combo-box, vaadin-form-layout multiselect-combo-box {
    width: calc(100% - 5px);
  }
  vaadin-form-layout vaadin-form-item::part(label) {
    margin-top: 10px;
  }

  dashboard-sources-view {

  }
`;class Ut extends z{constructor(){super(),this.element=null,this.connector=null,this.sourceKeys={}}get webbit(){var e;return this.element&&(null==(e=this.connector)?void 0:e.getElementWebbit(this.element))}get sourceProvider(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceProvider)?t:""}set sourceProvider(e){this.webbit&&(this.webbit.sourceProvider=e)}get sourceKey(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceKey)?t:""}set sourceKey(e){this.webbit&&(this.webbit.sourceKey=e)}get store(){var e;return null==(e=this.connector)?void 0:e.getStore()}get defaultSourceProvider(){var e;return null==(e=this.store)?void 0:e.getDefaultSourceProvider()}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}onSourceKeyInputChange(e){const t=e.target||e.path[0];this.sourceKey=t.value,this.requestUpdate()}onSourceProviderInputChange(e){const t=e.target||e.path[0];this.sourceProvider=t.value,this.requestUpdate()}onSourceSelect(e){const{sourceKey:t,sourceProvider:i}=e.detail;this.sourceKey=t,this.sourceProvider=i,this.requestUpdate()}getSourceKeyItems(){var e;return[...null!=(e=this.sourceKeys[this.sourceProvider])?e:[]]}updateSourceKeySet(e,t){this.store.getSource(e,t)?this.sourceKeys[e].has(t)||(this.sourceKeys[e].add(t),this.requestUpdate()):this.sourceKeys[e].has(t)&&(this.sourceKeys[e].delete(t),this.requestUpdate())}firstUpdated(){this.store.sourceProviderAdded((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)})),this.sourceProviderNames.forEach((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)}))}render(){var e,t,i;const s=this.element?null==(e=this.connector)?void 0:e.getElementWebbit(this.element):null,r=!this.element||!s;return D`
      <vaadin-form-layout>
        <vaadin-form-item>
          <label slot="label">Source Key</label>
          <vaadin-combo-box
            part="source-key-dropdown"
            clear-button-visible 
            value="${this.sourceKey}"
            .items="${this.getSourceKeyItems()}"
            @change="${this.onSourceKeyInputChange}"
            theme="small"
            allow-custom-value
            ?disabled=${r}
          >
          </vaadin-combo-box>
        </vaadin-form-item>
        <vaadin-form-item>
          <label slot="label">Source Provider</label>
          <vaadin-combo-box 
            clear-button-visible
            value="${this.sourceProvider}"
            .items="${null!=(i=null==(t=this.store)?void 0:t.getSourceProviderNames())?i:[]}"
            @change="${this.onSourceProviderInputChange}"
            theme="small"
            ?disabled=${r}
          ></vaadin-combo-box>
        </vaadin-form-item>
      </vaadin-form-layout>
      <dashboard-sources-view
        @sourceSelect="${this.onSourceSelect}"
        .sourceKey="${this.sourceKey}"
        .sourceProvider="${this.sourceProvider}"
        .store="${this.store}"
        ?disabled=${r}
      ></dashboard-sources-view>
    `}}function Kt(e,t){const i=e.getMatchingElementConfig(t),s=t.tagName.toLowerCase();return i?"string"==typeof i.displayName?i.displayName:"function"==typeof i.displayName?i.displayName(t):s:s}I(Ut,"styles",Ht),I(Ut,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:F,attribute:!1}}),customElements.define("dashboard-sources-tool",Ut);class Wt extends z{constructor(){super(),this.slot="",this.level=0}render(){return D`
      <p style=${`--level: ${this.level}`}>
        ${this.slot} SLOT
      </p>
    `}}I(Wt,"styles",A`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 11px;
      font-weight: bold;
      color: black;
    }

    p {
      margin: 5px 0;
      padding-left: calc(5px + 20px * var(--level));
      text-transform: uppercase;
      white-space: nowrap;
    }
  `),I(Wt,"properties",{slot:{type:String},level:{type:Number}}),customElements.define("dashboard-element-tree-slot-node",Wt);const Gt=A`
  :host {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
  }

  summary {
    display: flex;
  }

  summary div {
    height: 25px;
    display: inline-flex;
    align-items: center;
    cursor: default;
  }

  details .opened-cursor {
    display: none;
    width: 15px;
    margin-right: 3px;
  }

  details .closed-cursor {
    display: inline-block;
    width: 15px;
    margin-right: 3px;
  }

  details[open] > summary .opened-cursor {
    display: inline-block;
  }

  details[open] > summary .closed-cursor {
    display: none;
  }

  .childless > summary {
    list-style: none;
  }

  details:not(.selected) > summary:hover {
    background-color: #E8F0F8;
  }

  details.selected > summary {
    background-color: #ddd;
  }

  .header {
    width: 100%;
    display: inline-flex;
    align-items: center;
  }

  .header .element-name {
    display: flex;
    white-space: nowrap;
    align-items: center;
    height: 100%;
    padding-left: calc(5px + 20px * var(--level));
    box-sizing: border-box;
    margin-right: 8px;
  }

  .header label {
    color: purple;
  }

  .attribute {
    color: gray;
  }

  .attribute-name {
    color: brown;
  }

  .attribute-value {
    color: blue;
  }

  .caret {
    width: 20px;
  }
`;class Qt extends z{constructor(){super(),V(this,l),V(this,h),V(this,p),V(this,m),V(this,g),V(this,v),V(this,x),this.connector=null,this.element=null,this.selectedElement=null,this.level=0}static get properties(){return{connector:{type:F,attribute:!1},element:{type:HTMLElement,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1},level:{type:Number}}}get headerElement(){return this.renderRoot.querySelector(".header")}get detailsElement(){return this.renderRoot.querySelector("details")}get elementConfig(){var e,t;return null!=(t=null==(e=this.connector)?void 0:e.getMatchingElementConfig(this.element))?t:null}updated(e){e.has("selectedElement")&&this.selectedElement&&this.element.contains(this.selectedElement)&&(this.detailsElement.open=!0)}firstUpdated(){const e=this.connector.getElementWebbit(this.element);null==e||e.subscribe((e=>{this.requestUpdate()})),this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()));new MutationObserver((()=>{this.requestUpdate()})).observe(this.element,{childList:!0,subtree:!0,attributeFilter:["id","slot"]})}renderAttributes(){return["id","slot"].filter((e=>this.element.hasAttribute(e))).map((e=>D`
        <span class="attribute">
          <span class="attribute-name">${e}</span>="<span class="attribute-value">${this.element.getAttribute(e)}</span>"
        </span>
      `))}_onOpenToggle(){setTimeout((()=>{this.detailsElement.open=!this.detailsElement.open}))}render(){const e=Kt(this.connector,this.element);return D`
      <details 
        @click=${e=>e.preventDefault()}
        style=${`--level: ${this.level}`}
        class=${t={childless:!L(this,l,d).call(this),selected:L(this,h,c).call(this)},Object.entries(t).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div 
            class="header" 
            @mouseenter="${L(this,g,y)}" 
            @mouseleave="${L(this,v,f)}"
            @click="${L(this,m,b)}"
          >
            <span class="element-name">
              ${L(this,l,d).call(this)?D`
                <span class="caret" @click=${this._onOpenToggle}>
                  <iron-icon icon="vaadin:angle-right" class="closed-cursor"></iron-icon>
                  <iron-icon icon="vaadin:angle-down" class="opened-cursor"></iron-icon>
                </span>
              `:""}
              <label>${e}</label>
            </span>
            <span class="attributes">
              ${this.renderAttributes()}
            </span>
          </div>
        </summary>
        ${L(this,l,d).call(this)?D`
          <div class="nodes">
            ${L(this,x,w).call(this).map((({name:e,elements:t})=>D`
              ${t.map((e=>D`
                <dashboard-element-tree-node
                  .connector="${this.connector}"
                  .element="${e}"
                  .selectedElement="${this.selectedElement}"
                  level="${this.level+1}"
                ></dashboard-element-tree-node>
              `))}
            `))}
          </div>
        `:""}
      </details>
    `;var t}}l=new WeakSet,d=function(){return this.element.children.length>0},h=new WeakSet,c=function(){return this.element===this.selectedElement},p=new WeakSet,u=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0,detail:{element:this.element,name:this.connector.getMatchingElementSelector(this.element)}});this.dispatchEvent(t)},m=new WeakSet,b=function(e){const t=e.target||e.path[0],i=this.renderRoot.querySelector(".caret");i&&i.contains(t)||L(this,p,u).call(this,"elementSelect")},g=new WeakSet,y=function(){L(this,p,u).call(this,"elementPreviewStart")},v=new WeakSet,f=function(){L(this,p,u).call(this,"elementPreviewEnd")},x=new WeakSet,w=function(){const e={"":[]};return[...this.element.children].forEach((t=>{var i;const s=null!=(i=t.getAttribute("slot"))?i:"";void 0===e[s]&&(e[s]=[]),e[s].push(t)})),Object.entries(e).map((([e,t])=>({name:e,elements:t})))},I(Qt,"styles",Gt),customElements.define("dashboard-element-tree-node",Qt);const Xt=A`
  :host {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
    padding: 5px 10px;
  }

  .tree {
    height: 200px;
    overflow: auto;
  }

  p {
    margin-top: 5px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;class Jt extends z{static get properties(){return{connector:{type:F,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1}}}constructor(){super(),this.connector=null,this.selectedElement=null}firstUpdated(){this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()))}render(){return D`
      <p>Dashboard Elements</p>
      <div class="tree">
        ${[...this.connector.getRootElement().children].map((e=>D`
          <dashboard-element-tree-node
              .element=${e} 
              .connector=${this.connector}
              .selectedElement=${this.selectedElement}
            ></dashboard-element-tree-node>
        `))}
      </div>
    `}}I(Jt,"styles",Xt),customElements.define("dashboard-element-tree",Jt);class Yt{constructor(e,t=!1){this._connector=e,this._isPreviewBox=t,this._element=null,this._container=null,this._layoutConfig=null,this._parentLayoutConfig=null,this._selectionBoxElement=this._createSelectionBox(),this._hidden=!0,this._background=t?"rgba(3, 132, 210, .5)":"none",this._border=t?"none":"2px dashed green",window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}_createSelectionBox(){const e=document.createElement("div");return e.style.background=this._background,e.style.border=this._border,e.style.display="none",e.style.position="absolute",document.body.appendChild(e),e}get element(){return this._element}get parentElement(){return this.element.parentElement}get selectionBoxElement(){return this._selectionBoxElement}get translation(){return this.element?function(e){const t=window.getComputedStyle(e),i=t.transform||t.webkitTransform||t.mozTransform;if("none"===i||!i)return{x:0,y:0,z:0};const s=i.includes("3d")?"3d":"2d",r=i.match(/matrix.*\((.+)\)/)[1].split(", ");return"2d"===s?{x:parseFloat(r[4]),y:parseFloat(r[5]),z:0}:"3d"===s?{x:r[12],y:r[13],z:r[14]}:void 0}(this.element):{x:0,y:0,z:0}}get resizable(){return{vertical:this._layoutConfig.resizableVertical,horizontal:this._layoutConfig.resizableHorizontal}}get minHeight(){return this._layoutConfig.minHeight}get minWidth(){return this._layoutConfig.minWidth}get parentLayout(){return this._parentLayoutConfig.type}get movable(){return"absolute"===this.parentLayout&&this._layoutConfig.movable}setElement(e,t){this._element=e,this._container=t,this._layoutConfig=this._getLayoutConfig(e),this._parentLayoutConfig=this._getLayoutConfig(null==e?void 0:e.parentElement)}show(){this._hidden=!1,this._selectionBoxElement.style.display="block"}hide(){this._hidden=!0,this._selectionBoxElement.style.display="none"}_getLayoutConfig(e){var t,i,s,r,n,a,o,l,d,h;const{layout:c}=null!=(t=this._connector.getMatchingElementConfig(e))?t:{};return{type:null==c?void 0:c.type,resizableVertical:!1!==(null==c?void 0:c.resizable)&&(null==(s=null==(i=null==c?void 0:c.resizable)?void 0:i.vertical)||s),resizableHorizontal:!1!==(null==c?void 0:c.resizable)&&(null==(n=null==(r=null==c?void 0:c.resizable)?void 0:r.horizontal)||n),movable:null==(a=null==c?void 0:c.movable)||a,minWidth:null!=(l=null==(o=null==c?void 0:c.size)?void 0:o.minWidth)?l:20,minHeight:null!=(h=null==(d=null==c?void 0:c.size)?void 0:d.minHeight)?h:20}}_getBoundingRect(){const{x:e,y:t,top:i,bottom:s,left:r,right:n,width:a,height:o}=this._connector.getRootElement().getBoundingClientRect();return{x:this._isPreviewBox?this._container.offsetLeft:e,y:t,bottom:s,top:i,left:r,right:n,width:a,height:o}}_setPreviewBounds(){const e=function(e){if(!e)return!1;const{width:t,height:i}=e.getBoundingClientRect(),s=window.getComputedStyle(e);return 0!==t&&0!==i&&"0"!==s.width&&"0"!==s.height&&"0"!==s.opacity&&"none"!==s.display&&"hidden"!==s.visibility}(this._element);if(this._element&&!this._hidden&&e){const e=this._getBoundingRect(),{x:t,y:i,bottom:s,right:r,width:n,height:a}=this._element.getBoundingClientRect(),o=Math.max(t,e.x),l=Math.max(i,e.y),d=Math.min(r,e.right),h=Math.min(s,e.bottom),c=Math.min(d-o,n),p=Math.min(h-l,a);this._selectionBoxElement.style.display=t<e.right?"block":"none",this._selectionBoxElement.style.left=o+"px",this._selectionBoxElement.style.top=l+"px",this._selectionBoxElement.style.width=c+"px",this._selectionBoxElement.style.height=p+"px",this._selectionBoxElement.style.boxSizing="border-box",this._selectionBoxElement.style.borderRight=r>e.right?"none":this._border,this._selectionBoxElement.style.borderLeft=t<e.x?"none":this._border,this._selectionBoxElement.style.borderTop=i<e.y?"none":this._border,this._selectionBoxElement.style.borderBottom=s>e.bottom?"none":this._border,this._selectionBoxElement.style.background=this._background}else this._selectionBoxElement.style.display="none";window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}}class Zt{constructor(e){this._connector=e,this._container=null,this._selectionBox=new Yt(e),this._previewedElementBox=new Yt(e,!0),this._interactive=H(this._selectionBox.selectionBoxElement),this._interactive.on("resizeend",(()=>{this._addResizeInteraction()}))}addInteraction(e,t){this._selectionBox.setElement(e,t),this._container=t,e&&(this._addResizeInteraction(),this._addDragInteraction()),e===this._previewedElementBox.element&&this._previewedElementBox.hide()}setPreviewedElement(e,t){var i;this._container=t,this._previewedElementBox.setElement(e,t);const s="dashboard-tab"===(null==(i=null==e?void 0:e.nodeName)?void 0:i.toLowerCase());e&&e!==this._selectionBox.element&&!s?this._previewedElementBox.show():this._previewedElementBox.hide()}show(){this._selectionBox.show()}hide(){this._selectionBox.hide()}_addResizeInteraction(){const{resizable:{horizontal:e,vertical:t},element:i,minWidth:s,minHeight:r}=this._selectionBox,{width:n,height:a}=i.getBoundingClientRect();this._interactive.resizable({edges:{left:e&&n>60,right:!0,top:t&&a>60,bottom:!0},listeners:{move:s=>{let{x:r,y:n}=this._selectionBox.translation;e&&(i.style.width=s.rect.width+"px"),t&&(i.style.height=s.rect.height+"px"),r+=s.deltaRect.left,n+=s.deltaRect.top,i.style.webkitTransform=i.style.transform="translate("+r+"px,"+n+"px)"}},modifiers:[H.modifiers.restrictEdges({outer:"parent"}),H.modifiers.restrictSize({min:{width:s,height:r}})],inertia:!0})}_addDragInteraction(){const{element:e,movable:t}=this._selectionBox;t&&this._interactive.draggable({listeners:{move:t=>{let{x:i,y:s}=this._selectionBox.translation;i+=t.dx,s+=t.dy,e.style.webkitTransform=e.style.transform="translate("+i+"px, "+s+"px)"}},modifiers:[H.modifiers.restrict({restriction:()=>this._container.getBoundingClientRect(),elementRect:{left:0,right:1,top:0,bottom:1}})],inertia:!0})}}class ei{constructor(e,t){this._connector=e,this._eventListeners=new Map,this._listen=!0,e.subscribeElementConnected((({element:e})=>{const i=i=>{this._listen&&(i.stopPropagation(),t(e))};e.addEventListener("mouseup",i),e.addEventListener("click",i),this._eventListeners.set(e,i)})),e.subscribeElementDisconnected((({element:e})=>{e.removeEventListener("mouseup",this._eventListeners.get(e)),e.removeEventListener("click",this._eventListeners.get(e)),this._eventListeners.delete(e)}))}setListening(e){this._listen=e}}class ti extends z{constructor(){super(),this.connector=null,this.element=null,this._selectedTab=null}updated(e){const t=this._getTabs();(e.has("element")||e.has("allowedChildren"))&&(t.includes(this._selectedTab)||(this._selectedTab=t[0])),e.has("_selectedTab")&&this._dispatchTabChangeEvent()}_dispatchTabChangeEvent(){const e=new CustomEvent("tabChange",{bubbles:!0,composed:!0,detail:{tab:this._selectedTab}});this.dispatchEvent(e)}_selectedTabChanged(e){const t=this._getTabs();this._selectedTab=t[e.detail.value]}_getTabs(){return["Properties","Sources","HTML"]}render(){const e=this._getTabs();return D`
      <vaadin-tabs theme="small" @selected-changed=${this._selectedTabChanged} selected=${e.indexOf(this._selectedTab)}>
        ${e.map((e=>D`
          <vaadin-tab>${e}</vaadin-tab>
        `))}
      </vaadin-tabs>
    `}}I(ti,"styles",A`
    vaadin-tabs {
      // background: rgba(200, 200, 200, 0.3);
    }
  `),I(ti,"properties",{connector:{type:F,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},_selectedTab:{state:!0}}),customElements.define("dashboard-element-demo-tabs",ti);class ii extends z{render(){return D`<slot></slot>`}}I(ii,"styles",A`
    :host {
      display: none;
      width: 100%;
      height: 100%;
    }

    ::slotted(*) {
      position: absolute;
    }

    :host([selected]) {
      display: block;
    }
  `),I(ii,"properties",{tabName:{type:String,attribute:"tab-name",reflect:!0}}),customElements.define("dashboard-tab",ii);const si=[{text:"File",children:[{text:"Upload Dashboard HTML",id:"upload"},{text:"Download Dashboard HTML",id:"download"}]}];class ri extends z{constructor(){super()}firstUpdated(){U.scan(this.renderRoot)}_onRemoveElement(){var e,t,i;const s=this.element.parentElement,r=[...s.children],n=r.indexOf(this.element),a=null!=(t=null!=(e=r[n+1])?e:r[n-1])?t:s;null==(i=this.element)||i.remove();const o=this.connector.getRootElement().contains(a)&&a!==this.connector.getRootElement();this.dispatchEvent(new CustomEvent("elementRemove",{detail:{nextElement:o?a:null},bubbles:!0,composed:!0}))}_moveElementUp(){this.element.previousElementSibling&&this.element.parentElement.insertBefore(this.element,this.element.previousElementSibling)}_moveElementDown(){this.element.nextElementSibling&&this.element.parentElement.insertBefore(this.element.nextElementSibling,this.element)}async _menuItemSelected(e){const{id:t}=e.detail.value;if("download"===t)!function(e,t="dashboard.html"){const i=new Blob([e],{type:"text/html"}),s=document.createElement("a");s.download=t,s.href=window.URL.createObjectURL(i),s.dataset.downloadurl=["text/html",s.download,s.href].join(":");const r=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});s.dispatchEvent(r)}(this.connector.getRootElement().innerHTML);else{const{cancelled:e,error:t,result:i}=await new Promise((e=>{const t=document.createElement("input");t.type="file",t.accept=".html",t.onchange=()=>{const{files:i}=t;i.length<1&&e({result:{},cancelled:!0,error:!1});const s=new FileReader;s.onload=t=>{try{const s=t.target.result;e({result:{html:s,name:i.item(0).name.replace(/\.(html)$/,"")},cancelled:!1,error:!1})}catch(s){e({result:"",cancelled:!1,error:!0})}},s.readAsText(i.item(0))};const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(i)}));if(!e&&!t){this.connector.getRootElement().querySelectorAll("dashboard-tab").forEach((e=>{e.remove()}));const e=document.createElement("div");e.innerHTML=i.html,e.querySelectorAll("dashboard-tab").forEach((e=>{this.connector.getRootElement().append(e)})),this.dispatchEvent(new CustomEvent("dashboardUpload",{bubbles:!0,composed:!0}))}}}render(){return D`
      <vaadin-menu-bar
        theme="icon contrast tertiary"
        .items="${si}"
        @item-selected="${this._menuItemSelected}"
      ></vaadin-menu-bar>
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Moves the selected element up relative to its siblings" 
        title="Moves the selected element up relative to its siblings"
        @click=${this._moveElementUp}
      >
        <iron-icon icon="vaadin:level-up"></iron-icon>
      </vaadin-button>
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Moves the selected element down relative to its siblings" 
        title="Moves the selected element down relative to its siblings"
        @click=${this._moveElementDown}
      >
        <iron-icon icon="vaadin:level-down"></iron-icon>
      </vaadin-button>
      <!-- <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Cuts the selected element to the clipboard" 
        title="Cuts the selected element to the clipboard"
      >
        <iron-icon icon="vaadin:scissors"></iron-icon>
      </vaadin-button>
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Copies the selected element to the clipboard" 
        title="Copies the selected element to the clipboard"
      >
        <iron-icon icon="vaadin:copy"></iron-icon>
      </vaadin-button>
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Pastes the element in the clipboard" 
        title="Pastes the element in the clipboard"
      >
        <iron-icon icon="vaadin:paste"></iron-icon>
      </vaadin-button> -->
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Removes the selected element" 
        title="Removes the selected element"
        @click=${this._onRemoveElement}
      >
        <iron-icon icon="vaadin:trash"></iron-icon>
      </vaadin-button>
    `}}I(ri,"styles",A`
    :host {
      display: flex;
      align-items: center;
      overflow: hidden;
      margin: 0px;
      height: 30px;
      padding: 3px;
    }

    vaadin-button, vaadin-menu-bar-button {
      margin: 0px 2px;
      padding: 0px;
      background: white;
      color: black;
      border: none;
      border-radius: 0;
      width: 30px;
      height: 30px;
    }

    vaadin-button[disabled] {
      color: #aaa;
    }
    
    .selected {
      background: lightgray;
      color: blue;
    }
  `),I(ri,"properties",{connector:{type:F,attribute:!1},element:{type:HTMLElement,attribute:!1}}),customElements.define("dashboard-menu",ri);const ni=A`
  :host {
    display: block;
    padding: 5px;
    font-family: sans-serif;
    height: 100%;
    box-sizing: border-box;
  }

  p {
    margin-top: 0;
    font-weight: bold;
  }

  p span {
    color: purple;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  wc-codemirror {
    height: 100%;
  }

  .editor {
    flex: 1;
    position: relative;
    overflow: auto;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }

 
`;class ai extends z{constructor(){super(),this.element=null,this.connector=null,this._flask=null}get _editor(){return this.renderRoot.querySelector("#editor")}firstUpdated(){this._flask=new K(this._editor,{language:"js",styleParent:this.renderRoot})}updated(e){if(e.has("element")&&this.element){const e=W.exports.html(this.element.outerHTML,{"wrap-attributes":"force-expand-multiline"});this._flask.updateCode(e)}}_onSave(){const e=this._flask.getCode(),t=document.createElement("div");t.innerHTML=e;const i=t.firstElementChild;if(i&&i.nodeName===this.element.nodeName){for(this.element.getAttributeNames().forEach((e=>{i.hasAttribute(e)||this.element.removeAttribute(e)})),i.getAttributeNames().forEach((e=>{this.element.setAttribute(e,i.getAttribute(e))}));this.element.lastChild;)this.element.removeChild(this.element.lastChild);[...i.childNodes].forEach((e=>{this.element.append(e)}))}}render(){return this.element?D`
      <div class="container">
        <div class="editor">
          <div id="editor"></div>
        </div>
        <div class="buttons">
          <vaadin-button theme="small primary success" @click=${this._onSave}>Save</vaadin-button>
          <vaadin-button theme="small primary error">Cancel</vaadin-button>
        </div>
      </div>
    `:D``}}I(ai,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:F,attribute:!1}}),I(ai,"styles",ni),customElements.define("dashboard-edit-html",ai);const oi=A`
  :host {
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
    font-size: 16px;
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 0;
    font-weight: bold;
  }

  p span {
    color: purple;
  }

  vaadin-combo-box {
    flex: 1;
    margin-left: 15px;
  }

  vaadin-app-layout {
    --vaadin-app-layout-drawer-offset-left: 400px;
    width: 100%;
   height: calc(100vh - 16px);
   box-sizing: border-box;
  }

  vaadin-app-layout::part(drawer) {
    width: 400px;
  }

  h1 {
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #container {
    position: relative;
    height: 100%;
    width: calc(100vw - 16px);
  }

  .drawer-areas {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    min-height: 700px;
    position: relative;
  }

  .bottom-area {
    flex: 1;
    overflow: auto;
  }

  vaadin-tabs {
    display: inline-flex;
  }

  .add-tab-button {
    cursor: pointer;
  }
`;class li extends z{constructor(){super(),this.store=null,this.elementConfigs={},this.elementNames=[],this.connector=null,this._selectedElement=null,this._previewedElement=null,this._selectedTab=null,this._allowedChildren=[],this.interact=null,this._dashboardSelections=null}get _containerElement(){return this.renderRoot.querySelector("#container")}firstUpdated(){this.connector=new F(this,this.store,N(T({},this.elementConfigs),{"dashboard-tab":{topLevel:!1,displayName:e=>e.getAttribute("tab-name")||"Tab",properties:{tabName:{type:"String",attribute:"tab-name",reflect:!0}},slots:[{name:""}],layout:{type:"absolute",movable:!1,resizable:!1}}})),this._dashboardSelections=new ei(this.connector,(e=>{this._selectedElement=e})),Object.entries(Bt).forEach((([e,t])=>{var i;(null==(i=t.topLevel)||i)&&this.elementNames.push(e)})),this.interact=new Zt(this.connector),this.innerHTML='\n      <dashboard-tab tab-name="TeleOperated" selected></dashboard-tab>\n      <dashboard-tab tab-name="Autonomous"></dashboard-tab>\n    ',this._selectedElement=this.querySelector("dashboard-tab"),this.requestUpdate();new MutationObserver((e=>{this.requestUpdate()})).observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["tab-name"]})}get _appLayout(){return this.renderRoot.querySelector("vaadin-app-layout")}updated(e){e.has("_selectedElement")&&(this._allowedChildren=function(e,t){if(!e)return[];const i=t.getMatchingElementConfig(e);return i?i.slots.map((({name:e,allowedChildren:i})=>({slot:e,allowedChildren:t.getElementConfigSelectors().filter((e=>i instanceof Array?i.includes(e):t.getElementConfig(e).topLevel))}))):[]}(this._selectedElement,this.connector),this.interact.addInteraction(this._selectedElement,this._containerElement),this._showSelectedTab()),(e.has("_selectedTab")||e.has("_selectedElement"))&&this._setInteractVisibility(),e.has("_previewedElement")&&this.interact.setPreviewedElement(this._previewedElement,this._containerElement)}_setInteractVisibility(){var e,t,i;const s="dashboard-tab"===(null==(t=null==(e=this._selectedElement)?void 0:e.tagName)?void 0:t.toLowerCase());(null==(i=this._appLayout)?void 0:i.drawerOpened)&&!s?this.interact.show():this.interact.hide()}_onElementSelect(e){this._selectedElement=e.detail.element}_onElementPreviewStart(e){this._previewedElement=e.detail.element}_onElementPreviewEnd(){this._previewedElement=null}_getSelectedTabIndex(){return[...this.querySelectorAll("dashboard-tab")].findIndex((e=>e===this._selectedElement||e.contains(this._selectedElement)))}_showSelectedTab(){const e=this._getSelectedTabIndex();[...this.querySelectorAll("dashboard-tab")].forEach(((t,i)=>{i===e?t.setAttribute("selected",""):t.removeAttribute("selected")}))}_getTabs(){return[...this.querySelectorAll("dashboard-tab")].map((e=>({label:e.getAttribute("tab-name")})))}_onDashboardTabChange(e){const t=[...this.children][e.detail.value];t&&!t.contains(this._selectedElement)&&(this._selectedElement=t)}_onDrawerOpenChange(){var e;this._setInteractVisibility();const t=!!(null==(e=this._appLayout)?void 0:e.drawerOpened);this._dashboardSelections.setListening(t),this._previewedElement=null,this.requestUpdate()}_onRemoveElement(e){this._selectedElement=e.detail.nextElement}_addTab(){const e=this.querySelectorAll("dashboard-tab").length,t=document.createElement("dashboard-tab");t.setAttribute("tab-name",`Tab ${e+1}`),this.append(t),0===e&&(this._selectedElement=t)}_onDashboardUpload(){const e=this.querySelector("dashboard-tab");e&&(this._selectedElement=e)}render(){var e;if(!this.connector)return D``;const t=this._getSelectedTabIndex();return D`
      <vaadin-app-layout primary-section="drawer" @drawer-opened-changed=${this._onDrawerOpenChange}>
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <div slot="navbar" style="display: flex">
          <vaadin-tabs .selected=${t} @selected-changed=${this._onDashboardTabChange}>
            ${this._getTabs().map((({label:e},t)=>D`
              <vaadin-tab
                value=${t}
              >${e}</vaadin-tab>
            `))}
          </vaadin-tabs>
          <vaadin-button 
            class="add-tab-button"
            theme="icon tertiary" 
            aria-label="Add Tab"
            @click=${this._addTab}
            ?disabled=${!(null==(e=this._appLayout)?void 0:e.drawerOpened)}
          >
            <iron-icon icon="vaadin:plus"></iron-icon>
          </vaadin-button>
        </div>
        <div slot="drawer">
          <div class="drawer-areas">
            <div class="drawer-area">
              <dashboard-menu
                .element=${this._selectedElement} 
                .connector=${this.connector}
                @elementRemove=${this._onRemoveElement}
                @dashboardUpload=${this._onDashboardUpload}
              ></dashboard-menu>
              <dashboard-element-tree
                @elementSelect=${this._onElementSelect}
                @elementPreviewStart=${this._onElementPreviewStart}
                @elementPreviewEnd=${this._onElementPreviewEnd}
                .selectedElement=${this._selectedElement}
                .connector=${this.connector}
              ></dashboard-element-tree>
            </div>
            <div class="drawer-area">
              <dashboard-add-elements 
                .element=${this._selectedElement} 
                .connector=${this.connector}
                .allowedChildren=${this._allowedChildren}
              ></dashboard-add-elements>
            </div>
            <div class="drawer-area">
              <dashboard-element-demo-tabs 
                .element=${this._selectedElement} 
                .connector=${this.connector}
                .allowedChildren=${this._allowedChildren}
                @tabChange=${e=>{this._selectedTab=e.detail.tab}}
              ></dashboard-element-demo-tabs>
            </div>
            <div class="drawer-area bottom-area">
              ${"Properties"===this._selectedTab?D`
                <dashboard-properties-tool .element=${this._selectedElement} .connector=${this.connector}></dashboard-properties-tool>
              `:""}
              ${"Sources"===this._selectedTab?D`
                <dashboard-sources-tool .element=${this._selectedElement} .connector=${this.connector}></dashboard-sources-tool>
              `:""}
              ${"HTML"===this._selectedTab?D`
                <dashboard-edit-html .element=${this._selectedElement} .connector=${this.connector}></dashboard-edit-html>
              `:""}
            </div>
          </div>
        </div>
        <div id="container">
          <slot></slot>
        </div>
      </vaadin-app-layout>
    `}}function di(e,t){const i=e.getElementConfig(t);if(null==i?void 0:i.demos){const[{html:e}]=i.demos;return e}return`<${t}></${t}>`}I(li,"styles",oi),I(li,"properties",{store:{type:G,attribute:!1},elementConfigs:{type:Object,attribute:!1},_selectedElement:{state:!0},_previewedElement:{state:!0},_selectedTab:{state:!0},_allowedChildren:{state:!0}}),customElements.define("dashboard-element-demo",li);const hi=A`
  :host {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
    padding: 15px 10px;
    --vaadin-app-layout-transition: 0;
  }

  p {
    margin-top: 0;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p span {
    color: purple;
  }

  .add-buttons {
    margin-top: 10px;
  }

  .dropdowns {
    margin-bottom: 10px;
    display: flex;
  }

  .dropdowns vaadin-combo-box {
    flex: 1;
  }

  .dropdowns vaadin-combo-box + vaadin-combo-box {
    margin-left: 7px;
  }

  vaadin-combo-box:part(input-field) {
    transition: none;
  }

`;class ci extends z{constructor(){super(),this.connector=null,this.element=null,this.allowedChildren=[],this._slot="",this._selectedConfigSelector=null}firstUpdated(){this.renderRoot.querySelectorAll("vaadin-combo-box").forEach((e=>{var t;const i=document.createElement("div");i.innerHTML="\n        <style>\n          vaadin-text-field::part(input-field)::after {\n            transition: none;\n          }\n        </style>\n      ",null==(t=null==e?void 0:e.shadowRoot)||t.prepend(i)}))}updated(e){var t,i,s,r;if(e.has("allowedChildren")){const e=null==(t=this.allowedChildren)?void 0:t[0];this._slot=null==e?void 0:e.slot,this._selectedConfigSelector=null==(i=null==e?void 0:e.allowedChildren)?void 0:i[0]}if(e.has("_slot")){const e=null==(s=this.allowedChildren)?void 0:s.find((({slot:e})=>this._slot===e));this._selectedConfigSelector=null==(r=null==e?void 0:e.allowedChildren)?void 0:r[0]}}_onSelect(e){const t=e.target||e.path[0];this._selectedConfigSelector=t.value}_onSlotSelect(e){const t=e.target||e.path[0];this._slot=t.value}_prependElement(){const e=document.createElement("div");e.innerHTML=di(this.connector,this._selectedConfigSelector),[...e.children].forEach((e=>{this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.prepend(e)}))}_appendElement(){const e=document.createElement("div");e.innerHTML=di(this.connector,this._selectedConfigSelector),[...e.children].forEach((e=>{this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.append(e)}))}render(){var e,t,i,s,r,n;if(!this.element)return D`<p>Select an element to view its properties.</p>`;const a=Kt(this.connector,this.element);if(!(null==(e=this.connector)?void 0:e.getElementWebbit(this.element)))return D`<p>There is no configuration for the <span>${a}</span> element.</p>`;const o=null!=(s=null==(i=null==(t=this.allowedChildren)?void 0:t.find((({slot:e})=>this._slot===e)))?void 0:i.allowedChildren)?s:[],l=null!=(n=null==(r=this.allowedChildren)?void 0:r.map((({slot:e})=>({value:e,label:e||"unnamed"}))))?n:[];return D`
      <p>Edit element <span>${a}</span></p>
      <div class="dropdowns">
        <vaadin-combo-box
          class="component-selector"
          theme="small"
          label="Component"
          .items=${o}
          ?readonly=${0===o.length}
          .value="${this._selectedConfigSelector}"
          @change="${this._onSelect}"
        ></vaadin-combo-box>
        <vaadin-combo-box
          class="slot-selector"
          theme="small"
          label="Slot"
          .items=${l}
          ?readonly=${1===l.length}
          ?disabled=${0===l.length}
          .value="${this._slot}"
          @change="${this._onSlotSelect}"
        ></vaadin-combo-box>
      </div>
      <div class="component">
        <div class="add-buttons">
          <vaadin-button 
            theme="success primary small" 
            @click=${this._prependElement}
            ?disabled=${!this._selectedConfigSelector}
          >
            Prepend Element
          </vaadin-button>
          <vaadin-button 
            theme="success primary small" 
            @click=${this._appendElement}
            ?disabled=${!this._selectedConfigSelector}
          >
            Append Element
          </vaadin-button>
        </div>
      </div>
    `}}I(ci,"styles",hi),I(ci,"properties",{connector:{type:F,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},_slot:{state:!0},_selectedConfigSelector:{state:!0}}),customElements.define("dashboard-add-elements",ci);const pi=new Q,ui=new G;ui.addSourceProvider("Sample",pi),ui.setDefaultSourceProvider("Sample"),pi.updateSource("/ .a /b/c",3),pi.updateSource("/ .a /b",!0),pi.updateSource("/ .a /d","bleh"),pi.updateSource("/a/b/c/d/e/f",[1,2,3]),pi.updateSource("/a/b/c/d/e/f2",[!0,!1,!1]),pi.updateSource("/a/b/c/d/e/f3",["a","b"]),pi.updateSource("/gyro/value",0),pi.updateSource("/gyro/hideLabel",!0),pi.updateSource("/box/value",!0),pi.updateSource("/box/falseColor","#888888"),window.store=ui;let mi=0;setInterval((()=>{mi++,pi.updateSource("/gyro/value",mi)}),1e3),document.addEventListener("DOMContentLoaded",(()=>{X(D`
    <dashboard-element-demo
      .store=${ui}
      .elementConfigs=${Bt}
    ></dashboard-element-demo>
  `,document.querySelector("#dash"))}),!1);
