var e,t,i,s,r,n,o,a,l,d,h,c,u,p,m,g,b,f,y,v,w,x,S=Object.defineProperty,$=Object.defineProperties,_=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,T=(e,t,i)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,M=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&T(e,i,t[i]);if(C)for(var i of C(t))k.call(t,i)&&T(e,i,t[i]);return e},N=(e,t)=>$(e,_(t)),R=(e,t,i)=>(T(e,"symbol"!=typeof t?t+"":t,i),i),L=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},V=(e,t,i)=>(((e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)})(e,t,"access private method"),i);import{I,_ as z,a as P,s as F,r as A,$ as B,b as D,p as O,L as j,c as U,C as q,h as H,W,y as K,d as X,e as Y,i as G,f as J,g as Q,j as Z,S as ee,k as te,x as ie}from"./vendor.bd734246.js";I.addIcon("mdi:move-resize-variant",z),I.addIcon("mdi:heart",P);class se extends HTMLElement{get value(){return this.editor&&this.editor.getValue()||this.textContent}set value(e){this.editor?this.editor.setValue(e):this.textContent=e}static get observedAttributes(){return["theme","mode","fontsize","softtabs","tabsize","readonly","wrapmode"]}constructor(e){var t;return(t=(e=super(e)).attachShadow&&e.getRootNode?e.attachShadow({mode:"open"}):e.createShadowRoot()).innerHTML='\n  <style>\n      :host{\n          display: flex;\n          min-height: 1em;\n          flex-direction: column;\n      }\n      #juicy-ace-editor-container{\n          flex: 1;\n          height: 100%;\n      }\n  </style>\n  <div id="juicy-ace-editor-container"></div>\n',e.container=t.querySelector("#juicy-ace-editor-container"),e}connectedCallback(){var e,t=this.childNodes[0],i=this.container,s=this;this.editor?e=this.editor:(i.textContent=this.value,e=ace.edit(i),this.dispatchEvent(new CustomEvent("editor-ready",{bubbles:!0,composed:!0,detail:e})),this.editor=e,this.injectTheme("#ace_editor\\.css"),this.injectTheme("#ace-tm"),this.injectTheme("#ace_searchbox"),e.getSession().on("change",(function(e){s.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:e}))}))),e.renderer.addEventListener("themeLoaded",this.onThemeLoaded.bind(this)),e.setTheme(this.getAttribute("theme")),e.setFontSize(parseInt(this.getAttribute("fontsize"))||12),e.setReadOnly(this.hasAttribute("readonly"));var r=e.getSession();r.setMode(this.getAttribute("mode")),r.setUseSoftTabs(this.getAttribute("softtabs")),this.getAttribute("tabsize")&&r.setTabSize(this.getAttribute("tabsize")),r.setUseWrapMode(this.hasAttribute("wrapmode"));var n=new MutationObserver((function(e){e.forEach((function(e){"characterData"==e.type&&(s.value=t.data)}))}));t&&n.observe(t,{characterData:!0}),this._attached=!0}disconnectedCallback(){this._attached=!1}attributeChangedCallback(e,t,i){if(!this._attached)return!1;switch(e){case"theme":this.editor.setTheme(i);break;case"mode":this.editor.getSession().setMode(i);break;case"fontsize":this.editor.setFontSize(i);break;case"softtabs":this.editor.getSession().setUseSoftTabs(i);break;case"tabsize":this.editor.getSession().setTabSize(i);break;case"readonly":this.editor.setReadOnly(""===i||i);break;case"wrapmode":this.editor.getSession().setUseWrapMode(null!==i)}}onThemeLoaded(e){var t="#"+e.theme.cssClass;this.injectTheme(t),this.container.style.display="none",this.container.offsetHeight,this.container.style.display=""}injectTheme(e){var t,i,s=document.querySelector(e);this.shadowRoot.appendChild((t=s,(i=document.createElement("style")).id=t.id,i.textContent=t.textContent,i))}}window.customElements.define("juicy-ace-editor",se);const re={dashboard:{topLevel:!1},properties:{value:{type:Number},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},center:{type:Number}}};function ne(e,t,i){return Math.min(i,Math.max(e,t))}class oe extends F{constructor(){super(),this.value=0,this.min=-1,this.max=1,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(e){const t=this._min;this._min=e,this.requestUpdate("min",t)}get max(){return Math.max(this._min,this._max)}set max(e){const t=this._max;this._max=e,this.requestUpdate("max",t)}updateForeground(){const{min:e,max:t,center:i,value:s}=this,r=ne(s,e,t),n=this.shadowRoot.querySelector("[part=foreground]");t<i?(n.style.setProperty("--foreground-width",Math.abs(r-t)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right","0")):e>i?(n.style.setProperty("--foreground-width",Math.abs(r-e)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","0"),n.style.setProperty("--foreground-right","auto")):r>i?(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left",Math.abs(e-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-right","auto")):(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right",Math.abs(t-i)/(t-e)*100+"%"))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(e){const{left:t,width:i}=this.getBoundingClientRect(),s=ne((e.clientX-t)/i,0,1),r=this.min+(this.max-this.min)*s,n=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:r}});this.dispatchEvent(n)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",(e=>{this.dragging&&this.setDragPosition(e)})),window.addEventListener("mouseup",(e=>{this.dragging=!1}))}onMouseDown(e){this.dragging=!0,this.setDragPosition(e)}render(){return B`
        <div part="foreground" draggble="false"></div>
        <div class="content" draggable="false">
          <slot></slot>
        </div>
        <div 
          part="dragger" 
          @mousedown="${this.onMouseDown}"
        ></div>
    `}}R(oe,"properties",re.properties),R(oe,"styles",A`
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
  `),customElements.define("frc-bar",oe);var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-bar",elementConfig:re});const le={dashboard:{topLevel:!1},properties:{vertical:{type:Boolean},ticks:{type:Number},range:{type:Array},unit:{type:String}}};class de extends F{constructor(){super(),this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null,this.vertical=!1,this.ticks=0,this.range=[],this.unit=""}setAxis(e){let t=this.vertical?this.clientHeight:this.clientWidth,i=t/Math.max(1,this.ticks-1);const s=this.range?30:10,r=this.range&&2===this.range.length,n=r?this.range[0]:0,o=r?this.range[1]:0;let a=-1/0,l=-1/0;if(this.prevSize===t&&this.prevTicks===this.ticks&&this.prevMin===n&&this.prevMax===o&&!e.has("unit"))return;this.prevSize=t,this.prevTicks=this.ticks,this.prevMin=n,this.prevMax=o,this.shadowRoot.getElementById("svg").innerHTML="";let d=D(this.shadowRoot.getElementById("svg")).attr("width",this.vertical?s:t).attr("height",this.vertical?t:s);for(let h=0;h<this.ticks;h++){if(this.vertical?d.append("line").attr("x1",0).attr("y1",h*i).attr("x2",8).attr("y2",h*i):d.append("line").attr("x1",h*i).attr("y1",0).attr("x2",h*i).attr("y2",8),r)if(this.vertical){const e=n+h*(o-n)/Math.max(this.ticks-1,1);d.append("text").attr("x",-3).attr("y",h*i+4).attr("text-anchor","end").text(e.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{let e=a*i+.4*((h-a)*i);if(l<0||e>l){const e=n+h*(o-n)/Math.max(this.ticks-1,1);l=h*i+d.append("text").attr("x",h*i).attr("y",25).attr("text-anchor","middle").text(e.toFixed(2)+(this.unit?` ${this.unit}`:"")).node().getBBox().width/2,a=h}}if(h<this.ticks-1)for(let e=1;e<4;e++)this.vertical?d.append("line").attr("x1",4).attr("y1",h*i+e*i/4).attr("x2",8).attr("y2",h*i+e*i/4):d.append("line").attr("x1",h*i+e*i/4).attr("y1",0).attr("x2",h*i+e*i/4).attr("y2",4)}}firstUpdated(){new ResizeObserver((()=>{this.requestUpdate()})).observe(this)}updated(e){this.setAxis(e)}render(){return B`
      <svg id="svg"></svg>
    `}}R(de,"styles",A`

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
  `),R(de,"properties",le.properties),customElements.define("frc-table-axis",de);const he=[ae,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-table-axis",elementConfig:le})],ce={dashboard:{topLevel:!1},properties:{axisId:{type:String,attribute:"axis-id"},scaleType:{type:String,attribute:"scale-type",defaultValue:"linear",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["linear","logarithmic"]},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},label:{type:String,defaultValue:"Value"},tickValues:{type:Array,attribute:"tick-values",inputType:"NumberArray"},position:{type:String,defaultValue:"left",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["left","right"]},hideGridLines:{type:Boolean,attribute:"hide-grid-lines"}}};class ue extends F{constructor(){super(),this.axisId="",this.scaleType="linear",this.min=-1,this.max=1,this.label="Value",this.tickValues=[],this.position="left",this.hideGridLines=!1}}R(ue,"properties",ce.properties),R(ue,"styles",A`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-axis",ue);var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-axis",elementConfig:ce});const me={dashboard:{topLevel:!1},properties:{axisId:{type:String,attribute:"axis-id"},value:{type:Number,primary:!0},label:{type:String},color:{type:String,inputType:"ColorPicker"}}};class ge extends F{constructor(){super(),this.axisId="",this.value=0,this.label="",this.color=""}}R(ge,"properties",me.properties),R(ge,"styles",A`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-data",ge);var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-data",elementConfig:me});const fe={type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}},ye={responsive:!0,title:{display:!0,text:""},tooltips:{enabled:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{autoSkipPadding:10,padding:10}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}}]}};const ve=["#e6194b","#3cb44b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#fabebe","#008080","#9a6324","#800000","#808000","#000075","#808080","#000000"];class we{constructor(e,t){this.valueCount=e,this.data=[],this.dataIds=[],this.dataLabels=[],this.dataColors=[],this.chart=t;for(let i=0;i<e;i++)this.dataIds.push(""),this.dataLabels.push(""),this.dataColors.push("");this.currentTime=0,this.trackedTime=30,this.timeStep=.1,this.initData()}initData(){this.data=[];let e=this.trackedTime/this.timeStep,t=[];for(let i=0;i<this.valueCount;i++)t.push(NaN);for(let i=0;i<e;i++)this.data.push({time:this.currentTime+i*this.timeStep-this.trackedTime,values:t})}updateChart(e){e.chart.data.labels=this.data.map((e=>e.time.toFixed(1)));const t=e.chart.data.datasets.map((e=>{const t=e._meta[Object.keys(e._meta)[0]].hidden;return"boolean"==typeof t?t:e.hidden})),i=e.chart.options.scales.yAxes.map((e=>e.id));e.chart.data.datasets.splice(0,e.chart.data.datasets.length),this.dataLabels.forEach(((s,r)=>{i.includes(this.dataIds[r])&&e.chart.data.datasets.push({yAxisID:this.dataIds[r],label:s,data:this.data.map((e=>e.values[r])),fill:!1,pointRadius:0,borderColor:this.dataColors[r],borderWidth:2,hidden:t[r]})})),e.updateChart()}addData(e){this.currentTime+=this.timeStep,this.data.push({time:this.currentTime,values:e}),this.data.shift()}setTrackedTime(e){if(e===this.trackedTime)return;this.trackedTime;const t=this.data;this.trackedTime=e,this.initData(),t.length>=this.data.length?this.data=t.slice(t.length-this.data.length):this.data=this.data.slice(0,this.data.length-t.length).concat(t)}setTimeStep(e){if(e===this.timeStep)return;const t=this.data;this.timeStep=e<.01?.01:e;const i=[],s=this.trackedTime/this.timeStep;for(let r=0;r<s;r++){const e=Math.round((t.length-1)/s*r);i.push({time:r*this.timeStep,values:t[e].values})}this.data=i}setId(e,t){this.dataIds[e]=t}setColor(e,t){this.dataColors[e]=t}setLabel(e,t){this.dataLabels[e]=t}}const xe={properties:{title:{type:String},xAxisLabel:{type:String,attribute:"x-axis-label",defaultValue:"Time (seconds)"},trackedTime:{type:Number,attribute:"tracked-time",defaultValue:30},timeStep:{type:Number,defaultValue:.1,attribute:"time-step"}},slots:[{name:"data",allowedChildren:["frc-chart-data"]},{name:"axes",allowedChildren:["frc-chart-axis"]}],demos:[{html:'\n      <frc-line-chart title="Line Chart">\n        <frc-chart-axis slot="axes"></frc-chart-axis>\n        <frc-chart-data slot="data" label="Data" color="#00aa00"></frc-chart-data>\n      </frc-line-chart>\n    '}]};class Se extends F{constructor(){super(),this.dataElements=[],this.axisElements=[],this.timeStepIntervalId=null,this.title="",this.xAxisLabel="Time (seconds)",this.trackedTime=30,this.timeStep=.1,this.plugins=[{beforeUpdate:(e,t)=>{e.options.title.text=this.title,e.options.scales.xAxes[0].scaleLabel.labelString=this.xAxisLabel;const i=e.options.scales.yAxes;for(let s=i.length;s<this.axisElements.length;s++)i.push(fe);for(let s=0;s<this.axisElements.length;s++)i[s].display=!0,i[s].type=this.axisElements[s].scaleType,i[s].id=this.axisElements[s].axisId,i[s].position=this.axisElements[s].position,i[s].scaleLabel.labelString=this.axisElements[s].label,i[s].ticks.min=this.axisElements[s].min,i[s].ticks.max=this.axisElements[s].max,0===this.axisElements[s].tickValues.length?i[s].afterBuildTicks=null:i[s].afterBuildTicks=e=>{e.ticks.splice(0,e.ticks.length);for(let t of this.axisElements[s].tickValues)e.ticks.push(t)},i[s].gridLines.display=!this.axisElements[s].hideGridLines;for(let s=this.axisElements.length;s<i.length;s++)i[s].display=!1}}],this.randomizedColors=function(e){for(var t,i,s=e.length;0!==s;)i=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[i],e[i]=t;return e}([...ve]),this.chartData=null}firstUpdated(){this.chartElement=this.shadowRoot.querySelector("#chart");const e=this.shadowRoot.querySelectorAll("slot");e.forEach((t=>{t.addEventListener("slotchange",(t=>{let i=[...e].reduce(((e,t)=>e.concat([...t.assignedElements()])),[]);this.axisElements=i.filter((e=>"FRC-CHART-AXIS"===e.tagName));for(let e=0;e<this.axisElements.length;e++){if(this.axisElements[e].axisId)continue;const t=this.axisElements.map((e=>e.axisId));for(let i=0;i<this.axisElements.length;i++){const s=`Axis ${i+1}`;if(!t.includes(s)){this.axisElements[e].axisId=s;break}}}this.dataElements=i.filter((e=>"FRC-CHART-DATA"===e.tagName)),this.dataElements.forEach(((e,t)=>{if(e.color||(e.color=this.randomizedColors[t]),!e.axisId){const t=this.axisElements.length>0?this.axisElements[0].axisId:"Axis 1";e.axisId=t}})),this.chartData=new we(this.dataElements.length),this.chartData.setTrackedTime(this.trackedTime),this.updateTimeStep()}))}))}updateChart(){this.chartData&&this.chartElement.chart&&(this.dataElements.forEach(((e,t)=>{this.chartData.setId(t,e.axisId),this.chartData.setColor(t,e.color),this.chartData.setLabel(t,e.label)})),this.chartData.addData(this.dataElements.map((e=>e.value))),this.chartData.updateChart(this.chartElement))}updateTimeStep(){const e=Math.max(.01,this.timeStep);this.chartData.setTimeStep(e),clearInterval(this.timeStepIntervalId),this.timeStepIntervalId=setInterval(this.updateChart.bind(this),parseInt(1e3*e))}updated(e){this.chartData&&(e.has("trackedTime")&&this.chartData.setTrackedTime(this.trackedTime),e.has("timeStep")&&this.updateTimeStep())}render(){return B`
      <frc-base-chart id="chart" type="line" .data="${{labels:[],datasets:[]}}" .options="${ye}" .plugins="${this.plugins}">
      </frc-base-chart>
      <slot name="data"></slot>
      <slot name="axes"></slot>
    `}}R(Se,"properties",xe.properties),R(Se,"styles",A`
    :host { 
      display: inline-block;
      width: 450px;
      height: 400px;
    }

    slot {
      display: none;
    }
  `),customElements.define("frc-line-chart",Se);var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-line-chart",elementConfig:xe}),_e=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};class Ce extends j{static get styles(){return U`
      :host {
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    
      .chart-size {
        width: 100%;
        height: 100%;
      }
      canvas {
        width:100%;
        height:100%;
      }
    `}constructor(){super(...arguments),this.updateChart=()=>{this.chart&&this.chart.update()}}firstUpdated(){const e=this.data||{},t=M({responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0},this.options);if(this.chart)this.chart.type=this.type,this.chart.data=e,this.chart.options=t,this.chart.update();else{const i=this.shadowRoot.querySelector("canvas").getContext("2d");this.chart=new q.exports.Chart(i,{type:this.type,data:e,options:t,plugins:this.plugins})}this.chart.data=this.observe(this.chart.data);for(const i of Object.keys(this.chart.data))this.chart.data[i]=this.observe(this.chart.data[i]);this.chart.data.datasets=this.chart.data.datasets.map((e=>(e.data=this.observe(e.data),this.observe(e)))),window.addEventListener("resize",(()=>{this.chart&&this.chart.resize()}))}observe(e){const t=this.updateChart;return new Proxy(e,{set:(e,i,s)=>(e[i]=s,Promise.resolve().then(t),!0)})}render(){return H`
        <div class="chart-size">
          <canvas></canvas>
        </div>
      `}}_e([O()],Ce.prototype,"type",void 0),_e([O()],Ce.prototype,"data",void 0),_e([O()],Ce.prototype,"options",void 0),customElements.get("frc-base-chart")||customElements.define("frc-base-chart",Ce);const Ee=[pe,be,$e],ke=A`
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
`,Te={properties:{name:{type:String,defaultValue:"Command"},running:{type:Boolean},controllable:{type:Boolean},isParented:{type:Boolean,attribute:"is-parented"},label:{type:String}}};class Me extends W{onClick(){this.controllable&&(this.running=!this.running)}render(){return B`
      <vaadin-button theme="${1==this.running?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label||this.name}
      </vaadin-button>
    `}}R(Me,"properties",Te.properties),R(Me,"styles",[ke,A`
      :host {
        height: 50px;
      }

      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),customElements.define("frc-robot-command",Me);var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-command",elementConfig:Te});const Re={properties:{default:{type:String},command:{type:String},hasCommand:{type:Boolean,attribute:"has-command"},hasDefault:{type:Boolean,attribute:"has-default"},label:{type:String},name:{type:String},hideName:{type:Boolean,attribute:"hide-name"}}};class Le extends W{renderValue(e,t){return t?B`<span class="has-value">${e}</span>`:B`<span class="no-value">None</span>`}render(){return B`
      ${this.hideName?"":B`
      <header>${this.label||this.name}</header>
      `}
      <div class="subsystem">
        <p>Default command: ${this.renderValue(this.default,this.hasDefault)}</p>
        <p>Current command: ${this.renderValue(this.command,this.hasCommand)}</p>
      </div>
    `}}R(Le,"properties",Re.properties),R(Le,"styles",A`
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
  `),customElements.define("frc-robot-subsystem",Le);const Ve=[Ne,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-subsystem",elementConfig:Re})];class Ie{constructor(e,t){this.svg=e,this.angle=null,this.setAngle(t),this.animationStartAngle=t,this.animationEndAngle=t,this.animationStartTime=0,this.animationTime=0,this.duration=1;const i=()=>{this.duration>this.animationTime&&(this.animationTime=Math.min((Date.now()-this.animationStartTime)/1e3,this.duration));const e=(e=>e*(2-e))(this.animationTime/this.duration);this.setAngle(this.animationStartAngle+e*(this.animationEndAngle-this.animationStartAngle)),window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}animate(e){this.animationStartTime=Date.now(),this.animationTime=0,this.animationStartAngle=this.angle,this.animationEndAngle=e}setAngle(e){this.angle=e,this.svg.style.setProperty("--deg",`${e}deg`)}setDuration(e){this.duration=e}}const ze={properties:{currentColor:{type:String,attribute:"current-color",primary:!0,inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]},desiredColor:{type:String,attribute:"desired-color",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]},clockwise:{type:Boolean},duration:{type:Number,defaultValue:1}}};class Pe extends F{constructor(){super(),this.colors=["red","yellow","blue","green","red","yellow","blue","green"],this.positionIndex=3,this.animator=null,this.currentColor="",this.desiredColor="",this.clockwise=!1,this.duration=1}getRotation(){return 25-45*(this.positionIndex-3)}setPositionIndex(){const e=this.positionIndex%8;for(let t=1;t<4;t++){const i=(e+(this.clockwise?-t:t))%8;if(this.colors[i>=0?i:i+8]===this.currentColor){this.positionIndex=this.positionIndex+(this.clockwise?-t:t),this.animator.animate(this.getRotation());break}}}getCoordinatesForPercent(e){return[Math.cos(2*Math.PI*e),Math.sin(2*Math.PI*e)]}getPath(e){const[t,i]=this.getCoordinatesForPercent(.125*e),[s,r]=this.getCoordinatesForPercent(.125*(e+1));return[`M ${t} ${i}`,`A 1 1 0 0 1 ${s} ${r}`,"L 0 0"].join(" ")}updated(e){e.has("currentColor")&&this.colors.indexOf(this.currentColor)>=0&&this.setPositionIndex(),e.has("duration")&&this.animator.setDuration(Math.max(0,this.duration))}firstUpdated(){this.svg=this.shadowRoot.querySelector("svg"),this.animator=new Ie(this.shadowRoot.querySelector("svg"),this.getRotation())}setDesiredColor(e){this.desiredColor=e}resized(){const{height:e}=this.getBoundingClientRect();this.style.setProperty("--control-panel-height",`${e}px`),this.requestUpdate()}render(){return B`
      <div part="control-panel">
        ${K`
        <svg viewBox="-1 -1 2 2">
          ${this.colors.map(((e,t)=>K`
          <path class="color" fill="${e}" @click="${()=>this.setDesiredColor(e)}" d="${this.getPath(t)}">
          </path>
          `))}
        </svg>
        `}
      </div>
      <span part="indicator">
        <iron-icon icon="vaadin:caret-left"></iron-icon>
      </span>
    `}}R(Pe,"properties",ze.properties),R(Pe,"styles",A`
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
  `),customElements.define("frc-control-panel",Pe);var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-control-panel",elementConfig:ze});function Ae(e){return 180*e/Math.PI}function Be(e,t,i){return`<polygon \n            points="${e.x},${e.y} ${t.x},${t.y} ${i.x},${i.y}" />`}function De(e,t,i,s,r){return`<path d="${function(e,t,i,s,r){var n=Oe(e,t,i,r),o=Oe(e,t,i,s),a=r-s<=180?"0":"1",l=r>s?1:0;return["M",n.x,n.y,"A",i,i,0,a,l,o.x,o.y].join(" ")}(e,t,i,s,r)}"/>`}function Oe(e,t,i,s){var r=s*Math.PI/180;return{x:e+i*Math.cos(r),y:t-i*Math.sin(r)}}function je(e,t,i,s){return function(e,t,i,s){return`<line x1="${e}" y1="${t}" x2="${i}" y2="${s}" />`}(i,0,Math.cos(t)*e+i,Math.sin(t)*e)+function(e,t,i,s){const r=t/2,n=Math.cos(e),o=Math.sin(e);let a=Math.cos(e+Math.PI/2)*r,l=Math.sin(e+Math.PI/2)*r;return Be({x:n*s-a+i,y:o*s-l},{x:n*s+a+i,y:o*s+l},{x:n*(t+s)+i,y:o*(t+s)})}(t,s,i,e)}function Ue(e,t,i,s,r){if(t<0)throw new Error("Radius cannot be negative. Given: "+t);if(r<0)throw new Error("The size of the arrowhead cannot be negative. Given: "+r);return t===1/0?je(i,e,s,r):function(e,t,i,s){const r=Ae(i/t);return De(s,0,t,Ae(e),Ae(e)-r)}(e,t,i,s)+function(e,t,i,s,r){const n=t/2,o=r/i-e,a=Math.sqrt(t*t+i*i),l=(r+t*Math.sign(r))/i-e,d=Math.cos(o),h=Math.sin(o),c={x:(i+n)*d+s,y:(i+n)*h},u={x:(i-n)*d+s,y:(i-n)*h},p={x:a*Math.cos(l)+s,y:a*Math.sin(l)};return Be(c,p,u)}(e,r,t,s,i)}function qe(e,t,i,s,r){return Ue(e,t,t*i,s,r)}function He(e,t,i){return Math.min(i,Math.max(e,t))}const We={properties:{leftMotorSpeed:{type:Number,attribute:"left-motor-speed"},rightMotorSpeed:{type:Number,attribute:"right-motor-speed"}}};class Ke extends F{get clampedLeftMotorSpeed(){return He(this.leftMotorSpeed,-1,1)}get clampedRightMotorSpeed(){return He(this.rightMotorSpeed,-1,1)}constructor(){super(),this.leftMotorSpeed=0,this.rightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t){const i=this.shadowRoot.getElementById("svg").getBoundingClientRect(),s=.13*i.width,r=i.width-2*(s+20),n=i.height-40;if(Math.abs(e)<=.05&&Math.abs(t)<=.05)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*i.width);const o=Math.min(r,n)/2-8;if(Math.abs(e-t)<=.001){return`<g class="arrow">${je(Math.abs(e*o),-Math.sign(e)*Math.PI/2,0,8)}</g>`}const a=Math.PI,l=(t-e)/2,d=(e+t)/2,h=d/l;let c;if(Math.abs(h)>=1){const e=-Math.sign(h),t=(e+1)*a/2;let i=Math.abs(h*o);c=Ue(t,i,e*d*o,e*i,8)}else{const i=Math.sign(e-t);if(0==h){c=qe(l<0?a:0,Math.max(e,t)*o,i*a,0,8)}else{let s=h<0?e:t,r=h<0?t:e,n=Math.abs(s)*o;c=qe(h<0?a:0,n,i*((r/s-(u=0))*(a-(p=.5))/(-1-u)+p),-h*n,8)}}var u,p;return`<g class="arrow">${c}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getLeftForegroundStyle(){return this.getForegroundStyle(this.clampedLeftMotorSpeed)}getRightForegroundStyle(){return this.getForegroundStyle(this.clampedRightMotorSpeed)}getForegroundStyle(e){const t=He(e,-1,1);return t>0?`\n        height: ${Math.abs(t)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(t)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e;const t=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*t.width}px, ${.5*t.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e}render(){return B`
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
    `}}R(Ke,"properties",We.properties),R(Ke,"styles",A`
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
  `),customElements.define("frc-differential-drivebase",Ke);var Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-differential-drivebase",elementConfig:We});const Ye={properties:{frontLeftMotorSpeed:{type:Number,attribute:"front-left-motor-speed"},frontRightMotorSpeed:{type:Number,attribute:"front-right-motor-speed"},rearLeftMotorSpeed:{type:Number,attribute:"rear-left-motor-speed"},rearRightMotorSpeed:{type:Number,attribute:"rear-right-motor-speed"}}};class Ge extends F{constructor(){super(),L(this,e),this.frontLeftMotorSpeed=0,this.frontRightMotorSpeed=0,this.rearLeftMotorSpeed=0,this.rearRightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t,i,s){const r=this.shadowRoot.getElementById("svg").getBoundingClientRect(),n=.13*r.width,o=r.width-2*(n+20),a=r.height-40,l=Math.min(o,a)/2-16,d={x:(e-t-i+s)/4,y:(e+t+i+s)/4},h=(-e+t-i+s)/4,c=Math.hypot(d.x,d.y),u=Math.atan2(d.y,d.x);if(Math.abs(h)<=.01&&c<=.01)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*r.width);let p="",m="",g="";return Math.abs(h)>.01&&(p=qe(0,l,-h*Math.PI,0,8),m=qe(Math.PI,l,-h*Math.PI,0,8)),c>.01&&(g=je(c*l,-u,0,8)),`<g class="arrow">${p} ${m} ${g}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getFlForegroundStyle(){return this.getForegroundStyle(this.frontLeftMotorSpeed)}getFrForegroundStyle(){return this.getForegroundStyle(this.frontRightMotorSpeed)}getRlForegroundStyle(){return this.getForegroundStyle(this.rearLeftMotorSpeed)}getRrForegroundStyle(){return this.getForegroundStyle(this.rearRightMotorSpeed)}getForegroundStyle(i){const s=V(this,e,t).call(this,i,-1,1);return s>0?`\n        height: ${Math.abs(s)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(s)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0,0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let i=this.drawMotionVector(V(this,e,t).call(this,this.frontLeftMotorSpeed),V(this,e,t).call(this,this.frontRightMotorSpeed),V(this,e,t).call(this,this.rearLeftMotorSpeed),V(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=i;const s=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*s.width}px, ${.5*s.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(i){super.updated(i);let s=this.drawMotionVector(V(this,e,t).call(this,this.frontLeftMotorSpeed),V(this,e,t).call(this,this.frontRightMotorSpeed),V(this,e,t).call(this,this.rearLeftMotorSpeed),V(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=s}render(){return B`
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
    `}}e=new WeakSet,t=function(e){return Math.min(1,Math.max(e,-1))},R(Ge,"properties",Ye.properties),R(Ge,"styles",[ke,A`
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
    `]),customElements.define("frc-mecanum-drivebase",Ge);const Je=[Xe,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-mecanum-drivebase",elementConfig:Ye})],Qe={km:1e3,m:1,cm:.01,mm:.001,mi:1609.34,yd:.9144,ft:.3048,in:.0254},Ze={km:"km",m:"m",meters:"m",cm:"cm",centimeters:"cm",mm:"mm",mi:"mi",miles:"mi",yd:"yd",yards:"yards",ft:"ft",feet:"ft",foot:"ft",in:"in",inches:"in"},et=(e,t,i)=>(void 0===Qe[t=Ze[t]]&&(t="ft"),void 0===Qe[i=Ze[i]]&&(i="ft"),e*Qe[t]/Qe[i]),tt={dashboard:{topLevel:!1},properties:{x:{type:Number},y:{type:Number},rot:{type:Number},width:{type:Number,defaultValue:1},height:{type:Number,defaultValue:1},unit:{type:String,defaultValue:"inherit",inputType:"StringDropdown",getOptions:()=>Object.keys(Qe),allowCustomValues:!1},image:{type:String},draw:{type:String}},layout:{resizable:{horizontal:!1,vertical:!1},movable:!1},slots:[{name:"",allowedChildren:["frc-field-object","frc-field-camera"]}]};class it extends F{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.width=1,this.height=1,this.unit="inherit",this.image="",this.draw="",this.drawFunction=new Function}updated(e){if(e.has("image")){this.shadowRoot.querySelector("[part=field-object]").style.setProperty("--field-object-image",`url(${this.image}`)}e.has("draw")&&(this.drawFunction=new Function(this.draw))}resized(){this.requestUpdate()}render(){return B`   
      <div part="field-object">
        <slot></slot>
      </div>
    `}renderDrawing(e){try{this.drawFunction.bind(N(M({},e),{width:this.width,height:this.height,x:this.x,y:this.y,rot:this.rot,image:this.image,unit:this.unit}))()}catch(t){console.error("Error drawing element:",t)}}}R(it,"__IS_FIELD_OBJECT__",!0),R(it,"properties",tt.properties),R(it,"styles",A`
    :host {
      display: inline-block;
      position: absolute;
    }

    [part=field-object] {
      width: 100%;
      height: 100%;
      background-image: var(--field-object-image);
      background-size: cover;
    }
  `),customElements.define("frc-field-object",it);var st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-object",elementConfig:tt,default:it});const rt={dashboard:{topLevel:!1},properties:{x:{type:Number},y:{type:Number},rot:{type:Number},unit:{type:String,defaultValue:"inherit"},image:{type:String},fov:{type:Number,defaultValue:60},range:{type:Number,defaultValue:3},seesTarget:{type:Boolean,attribute:"sees-target"},targetDistance:{type:Number,attribute:"target-distance"}},layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}};class nt extends it{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.unit="inherit",this.image="",this.fov=60,this.range=3,this.seesTarget=!1,this.targetDistance=0}renderDrawing({ctx:e,scalingFactor:t}){const i=this.targetDistance<0?this.range:this.targetDistance,s=this.seesTarget?i:this.range;if(this.fov>0){e.save(),e.lineWidth=1/t,e.fillStyle=this.seesTarget?"rgba(0, 255, 0, .4)":"rgba(255, 0, 0, .4)",e.moveTo(0,0);const i=s*Math.tan(this.fov/2*Math.PI/180);e.lineTo(-i,s),e.lineTo(i,s),e.fill(),e.restore()}else e.beginPath(),e.lineWidth=1/t,e.strokeStyle=this.seesTarget?"rgb(0, 255, 0)":"rgb(255, 0, 0)",e.moveTo(0,0),e.lineTo(0,s),e.stroke()}}R(nt,"properties",rt.properties),customElements.define("frc-field-camera",nt);var ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-camera",elementConfig:rt});const at={dashboard:{topLevel:!1},properties:{width:{type:Number,defaultValue:1},height:{type:Number,defaultValue:1},unit:{type:String,defaultValue:"m",inputType:"StringDropdown",getOptions:()=>Object.keys(Qe),allowCustomValues:!1},image:{type:String},color:{type:String,inputType:"ColorPicker",defaultValue:"#0000ff"},pose:{type:Array,primary:!0},width:{type:Number,defaultValue:.6},height:{type:Number,defaultValue:.9}},layout:{resizable:{horizontal:!1,vertical:!1},movable:!1},slots:[{name:"",allowedChildren:["frc-field-camera","frc-field-object"]}]};class lt extends it{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.width=1,this.height=1,this.unit="inherit",this.image="",this.color="#0000ff",this.pose=[0,0,0],this.width=.6,this.height=.9,this.unit="m"}updated(e){if(super.updated(e),e.has("pose")&&this.pose instanceof Array){const[e=0,t=0,i=0]=this.pose;this.x=e,this.y=t,this.rot=i}}renderDrawing({bottomCtx:e,scalingFactor:t}){e.fillStyle=this.color,e.moveTo(0,0),e.fillRect(-this.width/2,-this.height/2,this.width,this.height),e.beginPath(),e.strokeStyle="black",e.lineWidth=2/t,e.moveTo(0,0),e.rect(-this.width/2,-this.height/2,this.width,this.height),e.stroke();const i=Math.min(.17*this.width,.19*this.height),s=i,r=.1*this.height;e.beginPath(),e.fillStyle="black",e.moveTo(0,0),e.fillRect(-this.width/2-s/2,this.height/2-2*i-r,s,2*i),e.fillRect(this.width/2-s/2,this.height/2-2*i-r,s,2*i),e.fillRect(-this.width/2-s/2,-this.height/2+r,s,2*i),e.fillRect(this.width/2-s/2,-this.height/2+r,s,2*i)}}R(lt,"properties",at.properties),customElements.define("frc-field-robot",lt);var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-robot",elementConfig:at});function ht(e,t){const i=[];for(let s=0;s<e.length/t;s++)i.push(e.slice(t*s,t*(s+1)));return i}function ct(e){var t=new ArrayBuffer(8),i=new DataView(t);return e.forEach((function(e,t){i.setUint8(t,e)})),i.getFloat64(0)}function ut(e){const t=e instanceof Uint8Array?function(e){return ht(e,8).map(ct)}(e):e;return ht(t,3)}const pt={dashboard:{topLevel:!1},properties:{data:{type:Object,primary:!0,attribute:!1},color:{type:String,inputType:"ColorPicker",defaultValue:"#FFA500"}},layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}};class mt extends it{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.unit="m",this.data=[],this.color="#FFA500",this._poses=[]}updated(e){super.updated(e),e.has("data")&&(this._poses=ut(this.data))}renderDrawing({bottomCtx:e,scalingFactor:t}){var i,s;if(e.lineWidth=4/t,e.strokeStyle=this.color,e.globalAlpha=.5,this._poses.length<2)return;const r=null!=(i=this._poses.at(0))?i:[0,0,0],n=null!=(s=this._poses.at(-1))?s:[0,0,0];for(let o=0;o<this._poses.length-1;o++){const[t,i]=this._poses[o],[s,r]=this._poses[o+1];e.moveTo(-i,t),e.lineTo(-r,s)}e.stroke(),this.drawArrow(e,r[0],-r[1],r[2],t),this.drawArrow(e,n[0],-n[1],n[2],t)}drawArrow(e,t,i,s,r){e.save(),e.translate(i,t),e.rotate(s*Math.PI/180),e.fillStyle=this.color,e.moveTo(0,0),e.lineTo(-7/r,0),e.lineTo(0,12/r),e.lineTo(7/r,0),e.fill(),e.restore()}}R(mt,"properties",N(M({},pt.properties),{_poses:{state:!0}})),customElements.define("frc-field-trajectory",mt);var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-trajectory",elementConfig:pt}),bt=[{game:"Rapid React","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/ea9469371f7126941c6a91c215a674a2f2a4b4d6/src/main/resources/edu/wpi/first/pathweaver/2022-field.png","field-corners":{"top-left":[74,50],"bottom-right":[1774,900]},"field-size":[54,27],"field-unit":"foot"},{game:"Infinite Recharge","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2020-Field.png","field-corners":{"top-left":[96,25],"bottom-right":[1040,514]},"field-size":[52.4375,26.9375],"field-unit":"foot"},{game:"Destination: Deep Space","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2019-field.jpg","field-corners":{"top-left":[217,40],"bottom-right":[1372,615]},"field-size":[54,27],"field-unit":"foot"},{game:"FIRST Power Up","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2018-field.jpg","field-corners":{"top-left":[125,20],"bottom-right":[827,370]},"field-size":[54,27],"field-unit":"feet"},{game:"Barrel Racing Path","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2021-barrel.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Bounce Path","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2021-bounce.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Galactic Search A","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2021-galacticsearcha.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Galactic Search B","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2021-galacticsearchb.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Slalom Path","field-image":"https://rawcdn.githack.com/wpilibsuite/PathWeaver/036ca81bfc58eeeba047ec469edc54f33831a4c4/src/main/resources/edu/wpi/first/pathweaver/2021-slalom.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"}];const ft={properties:{game:{type:String,defaultValue:"Rapid React",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>bt.map((e=>e.game)).concat("Custom")},width:{type:Number,defaultValue:54,isDisabled:({game:e})=>"Custom"!==e},height:{type:Number,defaultValue:27,isDisabled:({game:e})=>"Custom"!==e},unit:{type:String,defaultValue:"ft",inputType:"StringDropdown",getOptions:()=>Object.keys(Qe),allowCustomValues:!1,isDisabled:({game:e})=>"Custom"!==e},image:{type:String,inputType:"StringDropdown",getOptions:()=>bt.map((e=>e["field-image"])),isDisabled:({game:e})=>"Custom"!==e},topLeftFieldCornerX:{type:Number,attribute:"top-left-field-corner-x",isDisabled:({game:e})=>"Custom"!==e},topLeftFieldCornerY:{type:Number,attribute:"top-left-field-corner-y",isDisabled:({game:e})=>"Custom"!==e},bottomRightFieldCornerX:{type:Number,attribute:"bottom=right-field-corner-x",isDisabled:({game:e})=>"Custom"!==e},bottomRightFieldCornerY:{type:Number,attribute:"bottom=right-field-corner-y",isDisabled:({game:e})=>"Custom"!==e},gridSize:{type:Number,attribute:"grid-size",defaultValue:1},showGrid:{type:Boolean,attribute:"show-grid"},swapAxes:{type:Boolean,attribute:"swap-axes"}},slots:[{name:"",allowedChildren:["frc-field-camera","frc-field-robot","frc-field-trajectory","frc-field-object"]}],demos:[{html:'\n      <frc-field>\n        <frc-field-robot source-key="/SmartDashboard/Field/Robot"></frc-field-robot>\n        <frc-field-trajectory source-key="/SmartDashboard/Field/traj"></frc-field-trajectory>\n      </frc-field>\n    '}]};class yt extends F{constructor(){super(),this.objectElements=[],this.imageObjects={},this.fullFieldImageSize=null,this.game="Rapid React",this._width=54,this._height=27,this._unit="ft",this._image="",this._topLeftFieldCornerX=0,this._topLeftFieldCornerY=0,this._bottomRightFieldCornerX=0,this._bottomRightFieldCornerY=0,this.gridSize=1,this.showGrid=!1,this.swapAxes=!1}get width(){if("Custom"===this.game)return this._width;const e=bt.find((e=>e.game===this.game));return e?e["field-size"][0]:this._width}set width(e){const t=this._width;this._width=e,this.requestUpdate("width",t)}get height(){if("Custom"===this.game)return this._height;const e=bt.find((e=>e.game===this.game));return e?e["field-size"][1]:this._height}set height(e){const t=this._height;this._height=e,this.requestUpdate("height",t)}get unit(){if("Custom"===this.game)return Ze[this._unit];const e=bt.find((e=>e.game===this.game));return e?Ze[e["field-unit"]]:Ze[this._unit]}set unit(e){const t=this._unit;this._unit=e,this.requestUpdate("unit",t)}get image(){if("Custom"===this.game)return this._image;const e=bt.find((e=>e.game===this.game));return e?e["field-image"]:this._image}set image(e){const t=this._image;this._image=e,this.requestUpdate("image",t)}get topLeftFieldCornerX(){if("Custom"===this.game)return this._topLeftFieldCornerX;const e=bt.find((e=>e.game===this.game));return e?e["field-corners"]["top-left"][0]:this._topLeftFieldCornerX}set topLeftFieldCornerX(e){const t=this._topLeftFieldCornerX;this._topLeftFieldCornerX=e,this.requestUpdate("topLeftFieldCornerX",t)}get topLeftFieldCornerY(){if("Custom"===this.game)return this._topLeftFieldCornerY;const e=bt.find((e=>e.game===this.game));return e?e["field-corners"]["top-left"][1]:this._topLeftFieldCornerY}set topLeftFieldCornerY(e){const t=this._topLeftFieldCornerY;this._topLeftFieldCornerY=e,this.requestUpdate("topLeftFieldCornerY",t)}get bottomRightFieldCornerX(){if("Custom"===this.game)return this._bottomRightFieldCornerX;const e=bt.find((e=>e.game===this.game));return e?e["field-corners"]["bottom-right"][0]:this._bottomRightFieldCornerX}set bottomRightFieldCornerX(e){const t=this._bottomRightFieldCornerX;this._bottomRightFieldCornerX=e,this.requestUpdate("bottomRightFieldCornerX",t)}get bottomRightFieldCornerY(){if("Custom"===this.game)return this._bottomRightFieldCornerY;const e=bt.find((e=>e.game===this.game));return e?e["field-corners"]["bottom-right"][1]:this._bottomRightFieldCornerY}set bottomRightFieldCornerY(e){const t=this._bottomRightFieldCornerY;this._bottomRightFieldCornerY=e,this.requestUpdate("bottomRightFieldCornerY",t)}updated(e){if((e.has("width")||e.has("height"))&&(this.resizeField(),this.requestUpdate()),e.has("image")||e.has("game")){if(this.shadowRoot.querySelector("[part=field]").style.setProperty("--field-image",`url(${this.image}`),void 0===this.imageObjects[this.image]){const e=new Image,t={src:this.image,width:0,height:0,loaded:!1};e.onload=()=>{t.loaded=!0,t.width=e.width,t.height=e.height,this.resizeField(),this.requestUpdate()},this.imageObjects[this.image]=t,e.src=this.image}this.resizeField(),this.requestUpdate()}this.setPlayingFieldWidthStyles()}setPlayingFieldWidthStyles(){if(this.field){const e=this.getPlayingFieldImageRect();this.field.style.setProperty("--playing-field-width",`${e.width}px`),this.field.style.setProperty("--playing-field-height",`${e.height}px`),this.field.style.setProperty("--playing-field-left",e.left-1+"px"),this.field.style.setProperty("--playing-field-top",e.top-1+"px")}}setFieldPose(e){const t={transformations:[],x:0,y:0,width:this.width,height:this.height,rotation:0,isField:!0,unit:this.unit};[...this.children].forEach((i=>{i.constructor.__IS_FIELD_OBJECT__&&(this.setObjectPose(i,e,t),this.setDrawingPose(i,e,t))}))}setObjectPose(e,t,i){const{toPx:s}=t,r=e.rot,n=void 0!==Qe[e.unit]?e.unit:i.unit,o=et(e.width,n,this.unit),a=et(e.height,n,this.unit),l=et(e.x,n,this.unit),d=et(e.y,n,this.unit);e.style.width=`${s(o)}px`,e.style.height=`${s(a)}px`;const h=i.isField?i.height-d-a/2:-d+i.height/2-a/2,c=`${s(i.isField?l-o/2:l-o/2+i.width/2)+(i.isField?t.xOffset:0)}px`,u=`${s(h)+(i.isField?t.yOffset:0)}px`,p=`rotate(${-r+(i.isField?90:0)}deg)`;e.style.transform=`translate(${c}, ${u}) ${p}`;let m=i.transformations;m=i.isField?m.concat([{type:"translation",x:l,y:this.height-d},{type:"rotation",rotation:90-r}]):m.concat([{type:"translation",x:l,y:-d},{type:"rotation",rotation:-r}]);const g={transformations:m,x:l,y:d,width:o,height:a,rotation:r,unit:n};[...e.children].forEach((e=>{e.constructor.__IS_FIELD_OBJECT__&&(this.setObjectPose(e,t,g),this.setDrawingPose(e,t,g))}))}setDrawingPose(e,t,i){const{ctx:s,canvas:r,bottomCtx:n,bottomCanvas:o,rect:a}=t,l=e.rot,d=void 0!==Qe[e.unit]?e.unit:i.unit,h=et(e.x,d,this.unit),c=et(e.y,d,this.unit);s.save(),n.save(),s.translate(2*t.xOffset,2*t.yOffset),n.translate(2*t.xOffset,2*t.yOffset);const u=2*a.width/this.width;s.scale(u,u),n.scale(u,u);let p=[...i.transformations];p=0===p.length?p.concat([{type:"translation",x:h,y:i.height-c},{type:"rotation",rotation:90-l}]):p.concat([{type:"translation",x:h,y:-c},{type:"rotation",rotation:-l}]),p.forEach((({type:e,x:t,y:i,rotation:r})=>{"translation"===e?(s.translate(t,i),n.translate(t,i)):(s.rotate(r*Math.PI/180),n.rotate(r*Math.PI/180))})),s.scale(1,-1),n.scale(1,-1);const m=et(1,d,this.unit);s.scale(m,m),n.scale(m,m),s.beginPath(),n.beginPath(),e.renderDrawing({canvas:r,ctx:s,bottomCanvas:o,bottomCtx:n,scalingFactor:m*u/2}),s.restore(),n.restore()}firstUpdated(){this.field=this.shadowRoot.querySelector("[part=field]");const e=this.field,t=this.shadowRoot.querySelector("[part=top-canvas]"),i=t.getContext("2d"),s=this.shadowRoot.querySelector("[part=bottom-canvas]"),r=s.getContext("2d"),n=()=>{i.clearRect(0,0,t.width,t.height),i.beginPath(),r.clearRect(0,0,s.width,s.height),r.beginPath(),e.getBoundingClientRect();const o=this.getPlayingFieldImageRect(),a=o.left,l=o.top;this.setFieldPose({canvas:t,ctx:i,bottomCanvas:s,bottomCtx:r,rect:o,toPx:e=>e*o.width/this.width,toLength:e=>e*this.width/o.width,xOffset:a,yOffset:l}),window.requestAnimationFrame(n)};window.requestAnimationFrame(n);new ResizeObserver((()=>this.resized())).observe(this)}getImageObject(e){return this.imageObjects[e]||{src:e,width:0,height:0,loaded:!1}}getPlayingFieldDimensions(){const e=this.getImageObject(this.image),t={x1:0,y1:0,x2:0,y2:0};return e.loaded?(t.x1=this.topLeftFieldCornerX||0,t.y1=this.topLeftFieldCornerY||0,t.x2=Math.min(this.bottomRightFieldCornerX||e.width,e.width),t.y2=Math.min(this.bottomRightFieldCornerY||e.height,e.height)):(t.x1=this.topLeftFieldCornerX||0,t.y1=this.topLeftFieldCornerY||0,t.x2=this.bottomRightFieldCornerX||this.width,t.y2=t.y1+(t.x2-t.x1)*this.height/this.width),t}getPlayingFieldImageRect(){if(!this.fullFieldImageSize)return{left:0,right:0,top:0,bottom:0,width:0,height:0};const e=this.getImageObject(this.image),t=this.getPlayingFieldDimensions(),i=e.loaded?e.width:t.x2,s=(e.loaded?e.height:t.y2,this.fullFieldImageSize.width/i),r=t.x1*s,n=t.x2*s,o=t.y1*s,a=t.y2*s;return{left:r,right:n,top:o,bottom:a,width:n-r,height:a-o}}resizeField(){const e=this.shadowRoot.querySelector("[part=field]"),t=this.getImageObject(this.image),i=this.getBoundingClientRect(),s=this.getPlayingFieldDimensions();let r=t.loaded?t.width:s.x2,n=t.loaded?t.height:s.y2;const o=r?n/r*i.width:0;if(o<=i.height)this.fullFieldImageSize={width:i.width,height:o};else{const e=n?r/n*i.height:0;this.fullFieldImageSize={width:e,height:i.height}}e.style.setProperty("--field-width",`${this.fullFieldImageSize.width}px`),e.style.setProperty("--field-height",`${this.fullFieldImageSize.height}px`)}resized(){this.resizeField(),this.requestUpdate()}render(){this.setPlayingFieldWidthStyles();const e=this.field?parseFloat(this.field.style.getPropertyValue("--playing-field-width")||0):0,{width:t,height:i}=this.field?this.field.getBoundingClientRect():{width:0,height:0},s=this.gridSize/this.width*e;return B`   
      <div part="field">
        <div part="playing-field-area">
          ${this.showGrid&&this.gridSize>0?B`
          <div part="grid">
            ${K`
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="${s}" height="${s}" patternUnits="userSpaceOnUse">
                  <path d="M ${s} 0 L 0 0 0 ${s}" fill="none" />
                </pattern>
              </defs>
      
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            `}
          </div>
          `:""}
        </div>
        <canvas part="bottom-canvas" width="${2*t}" height="${2*i}"></canvas>
        <slot></slot>
        <canvas part="top-canvas" width="${2*t}" height="${2*i}"></canvas>
      </div>
    `}}R(yt,"properties",ft.properties),R(yt,"styles",A`
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      overflow: hidden;
    }

    [part=field] {
      position: relative;
      width: var(--field-width, 100%);
      height: var(--field-height, 400px);
      background-image: var(--field-image);
      background-size: cover;
    }

    [part=playing-field-area] {
      position: absolute;
      left: var(--playing-field-left, 0);
      top: var(--playing-field-top, 0);
      width: var(--playing-field-width, 100%);
      height: var(--playing-field-height, 100%);
      border: 2px solid yellow;
      box-sizing: border-box;
    }

    [part=grid] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    [part=grid] path {
      stroke: var(--frc-grid-line-color, gray);
      stroke-width: var(--frc-grid-line-width, 1);
    }

    [part=top-canvas], [part=bottom-canvas] {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    ::slotted(frc-field-object) {
      position: absolute;
    }

    /* [part=field] frc-field-object {
      position: absolute;
    } */
  `),customElements.define("frc-field",yt);const vt=[st,ot,dt,gt,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field",elementConfig:ft})];window.getPoses=ut;const wt={properties:{text:{type:String,primary:!0}},demos:[{html:'<frc-label text="label"></frc-label>'}]};class xt extends F{constructor(){super(),this.text=""}render(){return B`${this.text}`}}R(xt,"properties",wt.properties),R(xt,"styles",[ke,A`
      :host {
        display: inline;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        margin: 0;
        padding: 0;
      }
    `]),customElements.define("frc-label",xt);var St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-label",elementConfig:wt});const $t={properties:{value:{type:Number,primary:!0},precision:{type:Number,defaultValue:2}}};class _t extends F{constructor(){super(),this.value=0,this.precision=2}render(){const e=Math.max(0,this.precision),t=this.value.toFixed(e);return B`${t}`}}R(_t,"properties",$t.properties),R(_t,"styles",[ke,A`
      :host {
        display: inline;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        margin: 0;
        padding: 0;
      }
    `]),customElements.define("frc-number-label",_t);const Ct=[St,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-label",elementConfig:$t})],Et={color:"#fff",name:"INFO",level:1},kt={color:"#fff",name:"DEBUG",level:0},Tt={color:"#FF3E3E",name:"ERROR",level:4},Mt={color:"#FFC53E",name:"WARNING",level:3},Nt={color:"#3EFF45",name:"SUCCESS",level:2},Rt={name:"Html Logger",enabled:!0,maxLogCount:1e3,loggingFormat:"[MESSAGE]",argumentsSeparator:" ",utcTime:!1,level:0};class Lt{constructor(e,t=document.body){this.options=function(e){return[].slice.call(arguments,1).forEach((function(t){for(var i in t)e[i]=t[i]})),e}({},Rt,e||{}),this.parent=t,this.linesCount=0,this.$={},this.initialized=!1}init(){if(this.initialized)return;if(!(document&&document.createElement&&document.body&&document.body.appendChild))throw new Error("HtmlLogger not initialized");this.$.container=document.createElement("div");this.$.container.setAttribute("style","width:100%; height: 100%;\n\t\t\t\t\tmargin:0;\n\t\t\t\t\tleft:0;\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\t\t\toverflow:auto;\n\t\t\t\t\tpadding: 5px 7px;\n    \t\t\tbox-sizing: border-box;"),this.$.log=document.createElement("div");const e=document.createElement("span");e.style.color="#afa",e.style.fontWeight="bold";const t=`===== ${this.options.name} - Logger started at ${this.options.utcTime?(new Date).toUTCString():new Date} =====`;e.appendChild(document.createTextNode(t));const i=document.createElement("div");i.appendChild(e),i.appendChild(document.createElement("br")),i.appendChild(document.createElement("br")),this.$.container.appendChild(i),this.$.container.appendChild(this.$.log),this.parent.appendChild(this.$.container),this.initialized=!0}setLevel(e){this.options.level=e}setEnable(e=!0){this.initialized&&(this.options.enabled=e,this.$.log.style.color=e?"#fff":"#444")}clean(){if(this.initialized){for(;this.$.log.firstChild;)this.$.log.removeChild(this.$.log.firstChild);this.linesCount=0}}print(e,t=Et.color,i=Et.name){if(!this.initialized||!this.options.enabled)return;const s=this.$.container.scrollTop>this.$.container.scrollHeight-this.$.container.clientHeight-5;const r=(e.length?e:"[empty]").split(/\r\n|\r|\n/);for(let o=0;o<r.length;o++){let e=document.createElement("div");e.setAttribute("style","color:#999;float:left;");let a=this._getTime();e.appendChild(document.createTextNode(`${a} `));let l=this.options.loggingFormat.replace("[LEVEL]",i).replace("[MESSAGE]",r[o]),d=document.createElement("div");d.setAttribute("style",`word-wrap:break-word;margin-left:6.0em;color: ${t}`),d.appendChild(document.createTextNode(l));let h=document.createElement("div");h.setAttribute("style","clear:both;");var n=document.createElement("div");for(n.appendChild(e),n.appendChild(d),n.appendChild(h),this.$.log.appendChild(n),this.linesCount++;this.linesCount>this.options.maxLogCount;)this.$.log.childNodes[0].remove(),this.linesCount--;s&&(this.$.container.scrollTop=this.$.container.scrollHeight)}}info(){this.options.level<=Et.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator))}debug(){this.options.level<=kt.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),kt.color,kt.name)}warning(){this.options.level<=Mt.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),Mt.color,Mt.name)}success(){this.options.level<=Nt.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),Nt.color,Nt.name)}error(){this.options.level<=Tt.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),Tt.color,Tt.name)}_getTime(){return(this.options.utcTime?(new Date).toUTCString():(new Date).toString()).match(/([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/)[0]}_determineString(e){if(void 0===e)return"undefined";if(null===e)return"null";if(e instanceof Array)return JSON.stringify(e);switch(typeof e){default:case"object":return`${e.constructor?e.constructor.name:e.toString()} -> ${JSON.stringify(e)}`;case"function":return e.name||"[function]";case"number":case"string":case"boolean":return e}}}const Vt={properties:{title:{type:String,defaultValue:"Robot Logger"},maxLogCount:{type:Number,attribute:"max-log-count",defaultValue:1e3},debug:{type:String},info:{type:String,primary:!0},success:{type:String},warning:{type:String},error:{type:String},level:{type:String,defaultValue:"info",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["debug","info","success","warning","error"]},disabled:{type:Boolean}}};class It extends F{constructor(){super(),this.levels=["debug","info","success","warning","error"],this.logger=null,this.title="Robot Logger",this.maxLogCount=1e3,this.info="",this.debug="",this.warning="",this.success="",this.error="",this.level="info",this.disabled=!1}firstUpdated(){const e=this.shadowRoot.querySelector("[part=logger]");this.logger=new Lt({name:this.title,maxLogCount:Math.max(0,this.maxLogCount),level:this.levels.indexOf(this.level),enabled:!this.disabled},e),this.logger.init(!0)}updated(e){this.levels.forEach((t=>{e.has(t)&&this[t]&&(this.logger[t](this[t]),this[t]="")})),e.has("maxLogCount")&&(this.logger.options.maxLogCount=Math.max(0,this.maxLogCount)),e.has("level")&&this.logger.setLevel(this.levels.indexOf(this.level)),e.has("disabled")&&this.logger.setEnable(!this.disabled)}render(){return B`
      <div part="logger"></div>
    `}}R(It,"properties",Vt.properties),R(It,"styles",A`
    :host {
      display: inline-block;
      width: 500px;
      height: 400px;
      font-family: monospace;
      font-size: 14px;
    }

    [part=logger] {
      width: 100%;
      height: 100%;
    }
  `),customElements.define("frc-logger",It);var zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-logger",elementConfig:Vt});const Pt={properties:{x:{type:Number},y:{type:Number},z:{type:Number},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class Ft extends F{constructor(){super(),this.x=0,this.y=0,this.z=0,this.max=1,this.min=-1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}renderAccelerometer(e,t){return B`
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
    `}render(){return B`
      ${this.renderAccelerometer("x",0)}
      ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}R(Ft,"properties",Pt.properties),R(Ft,"styles",A`
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
  `),customElements.define("frc-3-axis-accelerometer",Ft);var At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-3-axis-accelerometer",elementConfig:Pt});const Bt={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String}}};class Dt extends F{constructor(){super(),this.value=0,this.max=1,this.min=-1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit=""}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max);return B`
      <frc-bar value="${this.value}" min="${e}" max="${t}" center="${this.center}" part="bar">
        ${this.hideText?"":B`
        ${this.value.toFixed(function(e,t,i){return Math.min(i,Math.max(e,t))}(this.precision,0,100))}
        ${this.unit}
        `}
      </frc-bar>
      ${this.numTickMarks>0?B`
      <frc-table-axis part="axis" ticks="${this.numTickMarks}" .range="${[e,t]}" unit="${this.unit}"></frc-table-axis>
      `:""}
    `}}R(Dt,"properties",Bt.properties),R(Dt,"styles",[ke,A`
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
    `]),customElements.define("frc-number-bar",Dt);var Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-bar",elementConfig:Bt,default:Dt});const jt={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class Ut extends Dt{constructor(){super(),this.unit="g"}}R(Ut,"properties",jt.properties),customElements.define("frc-accelerometer",Ut);var qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-accelerometer",elementConfig:jt});const Ht=["Unknown","Practice","Qualification","Elimination"],Wt={properties:{matchType:{type:Number,attribute:"match-type"},matchNumber:{type:Number,attribute:"match-number"},eventName:{type:String,attribute:"event-name"},fmsControlData:{type:Number,attribute:"fms-control-data"}}};class Kt extends F{constructor(){super(),this.matchType=0,this.matchNumber=0,this.eventName="",this.fmsControlData=0}getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(1&this.fmsControlData)}isAuto(){return!!(2&this.fmsControlData)}isTest(){return!!(4&this.fmsControlData)}isEmergencyStopped(){return!!(8&this.fmsControlData)}isFmsAttached(){return!!(16&this.fmsControlData)}isDsAttached(){return!!(32&this.fmsControlData)}render(){return B`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${Ht[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>
      
      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?B`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            FMS connected
          </span>
          `:B`
          <span>
            <iron-icon icon="vaadin:close-small"></iron-icon>
            FMS disconnected
          </span>
          `}
        </span>
        <span>
          ${this.isDsAttached()?B`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            DriverStation connected
          </span>
          `:B`
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
    `}}R(Kt,"properties",Wt.properties),R(Kt,"styles",A`
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
  `),customElements.define("frc-basic-fms-info",Kt);var Xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-basic-fms-info",elementConfig:Wt});const Yt={properties:{value:{type:Boolean,primary:!0},trueColor:{type:String,inputType:"ColorPicker",defaultValue:"#00ff00",attribute:"true-color"},falseColor:{type:String,inputType:"ColorPicker",defaultValue:"#ff0000",attribute:"false-color"},label:{type:String}}};class Gt extends F{constructor(){super(),this.value=!1,this.trueColor="#00ff00",this.falseColor="#ff0000",this.label=""}updated(){const e=this.shadowRoot.querySelector("[part=box]"),t=this.value?this.trueColor:this.falseColor;e.style.setProperty("--box-color",t)}render(){return B`
      <div part="box">
        ${this.label}
      </div>
    `}}R(Gt,"properties",Yt.properties),R(Gt,"styles",A`
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
  `),customElements.define("frc-boolean-box",Gt);var Jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-boolean-box",elementConfig:Yt});let Qt=0;const Zt={properties:{fps:{type:Number,defaultValue:-1},width:{type:Number,defaultValue:-1},height:{type:Number,defaultValue:-1},compression:{type:Number,defaultValue:-1},hideCrosshair:{type:Boolean,attribute:"hide-crosshair"},crosshairColor:{type:String,inputType:"ColorPicker",attribute:"crosshair-color",defaultValue:"#ffffff"},crosshairWidth:{type:Number,attribute:"crosshair-width",defaultValue:2},streams:{type:Array},waitImage:{type:String,attribute:"wait-image",defaultValue:"https://i.ytimg.com/vi/w6geNk3QnBQ/maxresdefault.jpg"}}};class ei extends F{constructor(){super(),this.url="",this.loaded=!1,this.streamsLoadingIds=[],this.fps=-1,this.width=-1,this.height=-1,this.compression=-1,this.hideCrosshair=!1,this.crosshairColor="#ffffff",this.crosshairWidth=2,this.streams=[],this.waitImage="https://i.ytimg.com/vi/w6geNk3QnBQ/maxresdefault.jpg"}getStreams(){let e=[...new Set(this.streams)].map((e=>e.replace("mjpg:","")));return[...e].forEach((t=>{const i=new URL(t);e.push(`${i.protocol}//127.0.0.1:${i.port}${i.pathname}${i.search}`)})),[...new Set(e)]}isStreaming(){return this.url}firstUpdated(){super.firstUpdated(),this.cameraFeedNode=this.shadowRoot.querySelector("[part=camera-feed]"),setInterval((()=>{this.isConnected&&(this.isStreaming()||this.getStreams().forEach((e=>{this.loadStream(e)})))}),1e3),setInterval((()=>{this.isConnected&&this.setImageSize()}),1e3);new ResizeObserver((()=>{this.resized()})).observe(this)}loadStream(e){const t=Qt;Qt++,this.streamsLoadingIds.push(t);let i=new Image;i.src=e,console.log("load stream:",e);const s=setTimeout((()=>{i.onload=()=>{},this.url===e&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url="");const s=this.streamsLoadingIds.indexOf(t);s>=0&&this.streamsLoadingIds.splice(s,1)}),1e4);i.onload=()=>{console.log("load:",e),clearTimeout(s),i.onload=()=>{},!this.isStreaming()&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url=i.src,this.streamsLoadingIds=[],setTimeout((()=>{this.loadStream(e)}),2e3)),this.loaded=!0}}updated(e){e.has("streams")&&(this.url="",this.streamsLoadingIds=[]),this.setImageSize();const t=Math.max(0,parseInt(this.crosshairWidth));this.style.setProperty("--crosshair-width",`${t}px`),this.style.setProperty("--crosshair-color",this.crosshairColor),this.style.setProperty("--image-display",this.url||this.waitImage?"block":"none")}resized(){this.setImageSize()}setImageSize(){const{naturalWidth:e,naturalHeight:t}=this.cameraFeedNode,{width:i,height:s}=this.getBoundingClientRect();s<t/e*i?(this.style.setProperty("--image-width",e/t*s+"px"),this.style.setProperty("--image-height",`${s}px`)):(this.style.setProperty("--image-width",`${i}px`),this.style.setProperty("--image-height",t/e*i+"px"))}getUrl(){if(!this.isStreaming())return this.waitImage;try{const e=new URL(this.url);return this.fps>0&&e.searchParams.set("fps",this.fps),this.width>=0&&this.height>=0&&e.searchParams.set("resolution",`${this.width}x${this.height}`),this.compression>=0&&e.searchParams.set("compression",this.compression),e.toString()}catch(e){return""}}render(){return B`
      <img part="camera-feed" .src="${this.getUrl()}" />
      ${this.url&&!this.hideCrosshair?B`
      <div part="x-crosshair"></div>
      <div part="y-crosshair"></div>
      `:""}
    `}}R(ei,"properties",N(M({},Zt.properties),{url:{type:String,reflect:!1,attribute:!1}})),R(ei,"styles",A`
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
  `),customElements.define("frc-camera",ei);var ti=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-camera",elementConfig:Zt});const ii={properties:{distance:{type:Number},speed:{type:Number}}};class si extends F{constructor(){super(),this.distance=0,this.speed=0}render(){return B`   
      <label part="distance-label">Distance</label>
      <vaadin-number-field part="distance-input" value="${this.distance}" readonly></vaadin-number-field>
      <label part="speed-label">Speed</label>
      <vaadin-number-field part="speed-input" value="${this.speed}" readonly></vaadin-number-field>
    `}}R(si,"properties",ii.properties),R(si,"styles",A`
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
  `),customElements.define("frc-encoder",si);var ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-encoder",elementConfig:ii});const ni={properties:{min:{type:Number},max:{type:Number,defaultValue:100},value:{type:Number,primary:!0}}};class oi extends F{constructor(){super(),this.gauge=null,this.min=0,this.max=100,this.value=0}setSize(){const e=this.getBoundingClientRect(),t=e.width,i=e.height,s=Math.min(t,i);this.shadowRoot.getElementById("gauge").style.width=s+"px"}gaugeInit(){const e=this.shadowRoot.getElementById("gauge");e.innerHTML="",this.gauge=X(e,{min:Math.min(this.min,this.max),max:Math.max(this.min,this.max),value:0}),this.setSize()}firstUpdated(){this.gaugeInit();new ResizeObserver((()=>this.setSize())).observe(this)}updated(e){(e.has("min")||e.has("max"))&&this.gaugeInit(),this.gauge.setValue(this.value)}render(){return B`
      <div class="gauge-container-container">
        <div id="gauge" class="gauge-container"></div>
      </div>
    `}}R(oi,"properties",ni.properties),R(oi,"styles",[ke,A`
      :host {
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
        fill: rgba(0,0,0,0);
      }
      .gauge-container > .gauge > .value {
        stroke: rgb(47, 180, 200);
        stroke-width: 3;
        fill: rgba(0,0,0,0);
      }
      .gauge-container > .gauge > .value-text {
        fill: black;
        font-family: sans-serif;
        font-size: 1em;
      }
    `]),customElements.define("frc-gauge",oi);var ai=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-gauge",elementConfig:ni});const li={properties:{value:{type:Number,primary:!0},hideLabel:{type:Boolean,attribute:"hide-label"},precision:{type:Number,defaultValue:2}}};class di extends F{constructor(){super(),this.value=0,this.hideLabel=!1,this.precision=2,this.tickAngles=[];for(let e=0;e<=360;e+=5)this.tickAngles.push(e);this.degreeLabelAngles=[];for(let e=0;e<360;e+=45)this.degreeLabelAngles.push(e)}firstUpdated(){this.containerNode=this.shadowRoot.querySelector(".container");new ResizeObserver((()=>{this.resized()})).observe(this)}resized(){const{width:e,height:t}=this.getBoundingClientRect();this.containerNode.style.setProperty("--gyro-container-size",`${Math.min(e,t)}px`),this.requestUpdate()}getWidth(){const e=this.shadowRoot.querySelector("svg");if(!e)return 0;const{width:t}=e.getBoundingClientRect();return t}renderTicks(){const e=this.getWidth(),t=e/2-e/20,i=e/2-e/10;return K`
      ${this.tickAngles.map((s=>{const r=s*Math.PI/180,n=e/2+t*Math.cos(r),o=e/2+t*Math.sin(r),a=e/2+i*Math.cos(r),l=e/2+i*Math.sin(r);return K`
          <line
            class="tick ${s%45==0?"big":""}"
            x1="${n}" y1="${o}" x2="${a}" y2="${l}"
          />
        `}))}
    `}renderEdge(){const e=this.getWidth();return K`
      <circle class="edge" cx="${.5*e}" cy="${.5*e}" r="${.4*e}" />
    `}renderDialHand(){const e=this.getWidth(),t=e/2-e/20-e/40,i=(this.value-90)*Math.PI/180,s=e/2,r=e/2,n=e/2+t*Math.cos(i),o=e/2+t*Math.sin(i);return K`
      <line
        class="dial-hand"
        x1="${s}" y1="${r}" x2="${n}" y2="${o}"
      />
    `}renderDialCircle(){const e=this.getWidth();return K`
      <circle class="dial-circle" cx="${.5*e}" cy="${.5*e}" r="${.04*e}" />
    `}renderDegreeLabels(){const e=this.getWidth(),t=e/2+e/100,i=this.shadowRoot.querySelector("svg");return i&&i.style.setProperty("--degree-label-font-size",.055*e+"px"),K`
      ${this.degreeLabelAngles.map((i=>{const s=(i-90)*Math.PI/180,r=e/2+t*Math.cos(s),n=e/2+t*Math.sin(s);return K`
          <text class="degree-label" x="${r}" y="${n}">${i}</text>
        `}))}
    `}renderAngleLabel(){if(this.hideLabel)return null;const e=this.getWidth(),t=this.shadowRoot.querySelector("svg");t&&t.style.setProperty("--angle-label-font-size",.08*e+"px");return K`
      <text class="angle-label" x="${e/2}" y="${e+.15*e}">
        ${this.value.toFixed((i=this.precision,s=0,r=100,Math.min(r,Math.max(i,s))))}&deg;
      </text>
    `;var i,s,r}render(){return K`
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
    `}}R(di,"properties",li.properties),R(di,"styles",[ke,A`
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
    `]),customElements.define("frc-gyro",di);var hi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-gyro",elementConfig:li});const ci={properties:{value:{type:Boolean}},slots:[{name:"true"},{name:"false"}],layout:{type:"absolute"},demos:[{html:'\n      <frc-if>\n        <span slot="true">Visible if true</span>\n        <span slot="false">Visible if false</span>\n      </frc-if>\n    '}]};class ui extends F{render(){return this.value?B`
        <slot name="true"></slot>
      `:B`
      <slot name="false"></slot>
    `}}R(ui,"properties",ci.properties),R(ui,"styles",A`
    :host {
      display: inline-block;
      position: absolute;
    }
  `),customElements.define("frc-if",ui);var pi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-if",elementConfig:ci});const mi={properties:{value:{type:Number,primary:!0},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},blockIncrement:{type:Number,attribute:"block-increment",defaultValue:.05}}};class gi extends F{constructor(){super(),this.value=0,this.min=-1,this.max=1,this.blockIncrement=.05}onChange(e){this.value=parseFloat(e.target.value)}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max),i=Math.max(e,Math.min(this.value,t));return B`
      <div class="slider-container">
        <input 
          id="slider"
          type="range" 
          min="${e}"
          max="${t}"
          .value="${i.toString()}"
          step="${this.blockIncrement}"
          @change="${this.onChange}"
        />

        <frc-table-axis 
          ticks="5" 
          .range="${[this.min,this.max]}"
        ></frc-table-axis>
      </div>
    `}}R(gi,"properties",mi.properties),R(gi,"styles",A`
    :host {
      display: inline-block;
      height: 50px;
      width: 300px;
    }

    .slider-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
    }

    input {
        width: 100%;
    }

    table-axis {
        width: calc(85% - 14px);
        max-width: calc(100% - 74px);
        display: block;
    }
  `),customElements.define("frc-number-slider",gi);var bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-slider",elementConfig:mi});function fi(e,t){const i=[];for(let s=e;s<t;s++)i.push(s);return i}const yi={properties:(()=>{const e={};for(let t=0;t<16;t++)e[`chan${t}`]={type:Number};return N(M({},e),{voltage:{type:Number},totalCurrent:{type:Number,attribute:"total-current"}})})()};class vi extends F{constructor(){super();for(let e=0;e<16;e++)this[`chan${e}`]=0;this.voltage=0,this.totalCurrent=0}renderChannel(e){return B`
      <frc-number-bar
        class="channel"
        part="channel"
        value="${this[`chan${e}`]}"
        min="0"
        max="40"
        center="0"
        precision="2"
        ?hide-text="${!1}"
        num-tick-marks="0"
        unit="A"
      ></frc-number-bar>
    `}render(){return B`
      <div part="channels">
        ${fi(0,8).map((e=>B`
          <label part="channel-label">
            <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
          </label>
        `))}
        ${fi(0,8).map((e=>B`
          ${this.renderChannel(e)}
        `))}
        ${fi(8,16).map((e=>B`
          <label part="channel-label">
            <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
          </label>
        `))}
        ${fi(8,16).map((e=>B`
          ${this.renderChannel(e)}
        `))}
      </div>
      <div part="voltage-and-total-current">
        <label part="voltage-label">
          <slot name="voltage-label">Voltage</slot>
        </label>
        <label part="total-current-label">
          <slot name="total-current">Total Current</slot>
        </label>
        <frc-voltage-view
          class="voltage"
          part="voltage"
          value="${this.voltage}"
          min="0"
          max="15"
          center="0"
          precision="2"
          ?hide-text="${!1}"
          num-tick-marks="0"
        ></frc-voltage-view>
        <frc-number-bar
          class="total-current"
          part="total-current"
          value="${this.totalCurrent}"
          min="0"
          max="500"
          center="0"
          precision="2"
          ?hide-text="${!1}"
          num-tick-marks="0"
          unit="A"
        ></frc-number-bar>
      </div>
    `}}R(vi,"properties",yi.properties),R(vi,"styles",[ke,A`
      :host {
        width: 350px;
        margin: 5px;
      }

      [part=channels] {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: min-content 1fr min-content 1fr;
        grid-template-rows: auto auto auto auto auto auto auto auto;
        width: 100%;
        height: auto;
        align-items: center;
      }

      .channel, .voltage, .total-current {
        width: auto;
      }

      [part=channel-label] {
        padding-left: 5px;
        text-align: right;
        white-space: nowrap;
      }

      [part=voltage-and-total-current] {
        margin-top: 5px;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: min-content auto;
        grid-template-rows: auto auto;
        column-gap: 10px;
        width: 100%;
        height: auto;
        align-items: center;
      }

      [part=voltage-and-total-current] {
        white-space: nowrap;
      }
    `]),customElements.define("frc-pdp",vi);var wi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-pdp",elementConfig:yi});const xi={properties:{value:{type:String,defaultValue:"Off",reflect:!0,primary:!0,inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["Off","On","Forward","Reverse"]}}};class Si extends F{constructor(){super(),this.buttons=["Off","On","Forward","Reverse"],this.value="Off"}setValue(e){this.value=e}render(){return B`   
      ${this.buttons.map((e=>B`
      <vaadin-button part="button" theme="contrast ${this.value==e?"primary":""}"
        @click="${()=>this.setValue(e)}">
        ${e}
      </vaadin-button>
      `))}
    `}}R(Si,"styles",A`
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
  `),R(Si,"properties",xi.properties),customElements.define("frc-relay",Si);var $i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-relay",elementConfig:xi});const _i={properties:{toggled:{type:Boolean,defaultValue:!1,primary:!0,changeEvent:"toggle"},label:{type:String,defaultValue:"Button"}}};class Ci extends F{constructor(){super(),this.toggled=!1,this.label="Button"}onClick(){this.toggled=!this.toggled,this.dispatchEvent(new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0}))}render(){return B`   
      <vaadin-button theme="${1==this.toggled?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label}
      </vaadin-button>
    `}}R(Ci,"styles",[ke,A`
      :host {
        width: 100px;
        height: 50px;
      }
      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),R(Ci,"properties",_i.properties),customElements.define("frc-toggle-button",Ci);var Ei=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-button",elementConfig:_i});const ki={properties:{options:{type:Array,changeEvent:"optionsUpdate",defaultValue:["On","Off"],inputType:"StringArray"},value:{primary:!0,type:String,changeEvent:"change",inputType:"StringDropdown",allowCustomValues:!1,getOptions(){return this.options}}}};class Ti extends F{constructor(){super(),L(this,i),L(this,r),this.options=["On","Off"]}async setValue(e){this.value=e}updated(e){var t;e.has("options")&&!this.options.includes(this.value)&&(this.value=null!=(t=this.options[0])?t:""),e.has("value")&&V(this,i,s).call(this),e.has("options")&&V(this,r,n).call(this)}render(){return B`   
      ${this.options.map((e=>B`
        <vaadin-button
          part="button" 
          theme="contrast ${this.value==e?"primary":""}" 
          @click="${()=>this.setValue(e)}"
        >
          ${e}
        </vaadin-button>
      `))}
    `}}i=new WeakSet,s=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},r=new WeakSet,n=function(){this.dispatchEvent(new CustomEvent("optionsUpdate",{detail:{options:this.options},bubbles:!0,composed:!0}))},R(Ti,"properties",ki.properties),R(Ti,"styles",A`
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
  `),customElements.define("frc-toggle-group",Ti);var Mi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-group",elementConfig:ki});const Ni={properties:{toggled:{type:Boolean,primary:!0,changeEvent:"toggle"}}};class Ri extends F{constructor(){super(),this.toggled=!1}firstUpdated(){new ResizeObserver((()=>this.resized())).observe(this)}resized(){this.rect=this.getBoundingClientRect();const{width:e,height:t}=this.rect,i=this.shadowRoot.querySelector("[part=switch]");i.style.borderRadius=`${e}px`,i.style.setProperty("--circle-width",.8*t+"px"),i.style.setProperty("--circle-height",.8*t+"px"),i.style.setProperty("--circle-left",e/2-.8*t+"px"),i.style.setProperty("--circle-top",.1*t+"px"),i.style.setProperty("--circle-translate-x",e-t+"px")}onClick(){this.toggled=!this.toggled;const e=new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return B`   
        <label class="switch" @click="${this.onClick}">
          <input type="checkbox" .checked="${this.toggled}" disabled />
          <span part="switch">
            <span part="knob"></span>
          </span>
        </label>
      `}}R(Ri,"styles",A`
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
  `),R(Ri,"properties",Ni.properties),customElements.define("frc-toggle-switch",Ri);var Li=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-switch",elementConfig:Ni});const Vi={properties:{value:{type:Number},max:{type:Number,defaultValue:5},min:{type:Number},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"V"}}};class Ii extends Dt{static get styles(){return[super.styles,A`
          [part=bar]::part(foreground) {
            background: #ffbd2f;
          }
        `]}constructor(){super(),this.value=0,this.min=0,this.max=5,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="V"}}R(Ii,"properties",Vi.properties),customElements.define("frc-voltage-view",Ii);const zi=[...he,...Ee,...Ve,Fe,...Je,...vt,...Ct,zt,At,qt,Xt,Jt,ti,ri,ai,hi,pi,Ot,bi,wi,$i,Ei,Mi,Li,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-voltage-view",elementConfig:Vi})];var Pi=Object.fromEntries(zi.map((({elementName:e,elementConfig:t})=>[e,t]))),Fi={"wired-button":{properties:{elevation:{type:"Number",defaultValue:1},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-button>Hello there</wired-button>"}]},"wired-card":{properties:{elevation:{type:"Number",defaultValue:1},fill:{type:"String",inputType:"ColorPicker"}},slots:[{name:""}],demos:[{html:"\n          <wired-card>\n            <h4>Card Header</h4>\n            <p>Some text</p>\n          </wired-card>\n        "}]},"wired-checkbox":{properties:{checked:{type:"Boolean",changeEvent:"change",primary:!0},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-checkbox>Checkbox</wired-checkbox>"}]},"wired-combo":{properties:{disabled:{type:"Boolean",reflect:!0},selected:{type:"String",changeEvent:"selected",primary:!0}},slots:[{name:"",allowedChildren:["wired-item"]}],demos:[{html:'\n          <wired-combo selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-combo>\n        '}]},"wired-item":{properties:{value:{type:"String",primary:!0}},dashboard:{topLevel:!1},demos:[{html:'<wired-item value="item">Some Item</wired-item>'}]},"wired-dialog":{properties:{elevation:{type:"Number",defaultValue:5},open:{type:"Boolean",reflect:!0,primary:!0}},demos:[{html:'\n          <wired-dialog>\n            <p>\n              Dialog content here\n            </p>\n            <div style="text-align: right; padding: 30px 16px 16px;">\n              <wired-button id="closeDialog">Close dialog</wired-button>\n            </div>\n          </wired-dialog>\n        '}]},"wired-divider":{properties:{elevation:{type:"Number",defaultValue:1}}},"wired-fab":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-fab>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-fab>\n        '}]},"wired-icon-button":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-icon-button>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-icon-button>\n        '}]},"wired-image":{properties:{src:{type:"String",primary:!0},elevation:{type:"Number",defaultValue:1}},demos:[{html:'<wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>'}]},"wired-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},type:{type:"String"},value:{type:"String",changeEvent:"change",primary:!0}},demos:[{html:'<wired-input type="text"></wired-input>'}]},"wired-link":{properties:{elevation:{type:"Number",defaultValue:1},href:{type:"String",primary:!0},target:{type:"String",inputType:"StringDropdown",allowCustomValues:!1,getOptions:()=>["_blank","_self","_parent","_top","framename"]}},demos:[{html:'<wired-link href="https://docs.wpilib.org/en/stable/" target="_blank">WPILib Docs</wired-link>'}]},"wired-listbox":{properties:{horizontal:{type:"Boolean"},selected:{type:"String",primary:!0,changeEvent:"selected"}},demos:[{html:'\n          <wired-listbox id="combo" selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-listbox>\n        '}]},"wired-progress":{properties:{value:{type:"Number",primary:!0},min:{type:"Number"},max:{type:"Number",defaultValue:100},percentage:{type:"Boolean"}}},"wired-radio-group":{properties:{selected:{type:"String",primary:!0,changeEvent:"selected"}},slots:[{name:"",allowedChildren:["wired-radio"]}],demos:[{html:'\n          <wired-radio-group selected="two">\n            <wired-radio name="one">One</wired-radio>\n            <wired-radio name="two">Two</wired-radio>\n            <wired-radio name="three">Three</wired-radio>\n            <wired-radio name="four">Four</wired-radio>\n          </wired-radio-group>\n        '}]},"wired-radio":{properties:{name:{type:"String"},disabled:{type:"Boolean",reflect:!0},checked:{type:"Boolean",primary:!0,changeEvent:"change"},text:{type:"String"}},dashboard:{topLevel:!1},demos:[{html:'<wired-radio name="radio">Radio Button</wired-radio>'}]},"wired-search-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},value:{type:"String",primary:!0,changeEvent:"change"}}},"wired-slider":{properties:{value:{type:"Number",defaultValue:50,primary:!0,changeEvent:"change"},min:{type:"Number"},max:{type:"Number",defaultValue:100}}},"wired-spinner":{properties:{spinning:{type:"Boolean",primary:!0},duration:{type:"Number",defaultValue:1500}}},"wired-tabs":{properties:{selected:{type:"String",primary:!0}},demos:[{html:'\n          <wired-tabs selected="Two">\n            <wired-tab name="One">\n              <h4>Card 1</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Two">\n              <h4>Card 2</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Three">\n              <h4>Card 3</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n          </wired-tabs>\n        '}]},"wired-tab":{properties:{name:{type:"String"},label:{type:"String"}},demos:[{html:'<wired-tab name="Tab">'}]},"wired-textarea":{properties:{rows:{type:"Number"},maxrows:{type:"Number"},value:{type:"String",inputType:"Textarea",primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0},placeholder:{type:"String"}}},"wired-toggle":{properties:{checked:{type:"Boolean",primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0}}},"wired-video":{properties:{src:{type:"String",primary:!0},autoplay:{type:"Boolean"},loop:{type:"Boolean"},muted:{type:"Boolean"},playsinline:{type:"Boolean"}},demos:[{html:'<wired-video src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"></wired-video>'}]}},Ai=M(M({},Pi),Fi);class Bi extends F{constructor(){super(),L(this,o),this.element=null,this.propertyHandler=null,this.propertyName=null}get inputElement(){return this.renderRoot.querySelector('[part="input"]')}get property(){return this.propertyHandler.getProperty()}getValue(){return this.propertyHandler.value}setValue(e){this.propertyHandler.value=e}isDisabled(){return!1}renderInputField(){return B``}propertyChanged(e){}updated(e){e.has("propertyHandler")&&this.propertyHandler&&this.propertyHandler.subscribe((e=>{this.propertyChanged(e),V(this,o,a).call(this)}),!0)}render(){return B`
      <vaadin-form-item>
        <label slot="label" title=${this.propertyName}>
          <span>${this.propertyName}</span>
        </label>
        ${this.renderInputField()}
      </vaadin-form-item>
    `}}o=new WeakSet,a=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.getValue(),name:this.propertyName},bubbles:!0,composed:!0}))},R(Bi,"styles",A`
    :host {
      display: block;
      font-family: sans-serif;
    }
    vaadin-form-item {
      width: 100%;
      --vaadin-form-item-label-width: 10em;
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

    label > span {
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      width: 100%;
    }
  `),R(Bi,"properties",{element:{type:HTMLElement,attribute:!1},propertyHandler:{type:Object,attribute:!1},propertyName:{type:String}});customElements.define("dashboard-string-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return B`
      <vaadin-text-field 
        part="input" 
        .value=${null!=(e=this.getValue())?e:""} 
        @change="${this.onInputChange}" 
        theme="small" 
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-field>
    `}});customElements.define("dashboard-boolean-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.checked)}renderInputField(){return B`
      <vaadin-checkbox
        part="input"
        ?checked="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      ></vaadin-checkbox>
    `}});customElements.define("dashboard-number-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return B`
      <vaadin-number-field
        part="input"
        value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
        has-controls
      ></vaadin-number-field>
    `}});customElements.define("dashboard-color-picker-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return B`
      <input
        part="input"
        type="color"
        .value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      />
    `}});customElements.define("dashboard-string-dropdown-property-view",class extends Bi{allowCustomValues(){return!("allowCustomValues"in this.property)||this.property.allowCustomValues}onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return B`
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
    `}});customElements.define("dashboard-number-array-property-view",class extends Bi{update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>parseFloat(e.display))))}onCustomValueSet(e){const t=parseFloat(e.detail);isNaN(t)||(this.setValue(this.getValue().concat(t)),this.requestUpdate())}renderInputField(){return B`
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
    `}});const Di=[{value:"true",autocomplete:"true",display:"true"},{value:"false",autocomplete:"false",display:"false"}];customElements.define("dashboard-boolean-array-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.value.startsWith("true"))))}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>e?{value:`true${t.toString()}`,autocomplete:"true",display:"true"}:{value:`false${t.toString()}`,autocomplete:"false",display:"false"}))}renderInputField(){return B`
      <multiselect-combo-box
        part="input"
        theme="small"
        @change="${this.onInputChange}"
        .items="${Di}"
        item-label-path="autocomplete" 
        item-value-path="value"
        item-id-path="value"
        ?disabled="${this.isDisabled()}"
      >
        <template>
          [[item.display]]
        </template>
      </multiselect-combo-box>
    `}});customElements.define("dashboard-string-array-property-view",class extends Bi{getValue(){var e;return null!=(e=super.getValue())?e:[]}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.display)))}onCustomValueSet(e){const t=e.detail;this.setValue(this.getValue().concat(t)),this.requestUpdate()}renderInputField(){return B`
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
    `}});customElements.define("dashboard-text-area-property-view",class extends Bi{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return B`
      <vaadin-text-area
        part="input"
        .value="${null!=(e=this.getValue())?e:""}"
        @change="${this.onInputChange}"
        theme="small"
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-area>
    `}});customElements.define("dashboard-function-property-view",class extends Bi{static get styles(){return[super.styles,A`
        vaadin-form-item {
          align-items: self-start;
        }
      `]}static get properties(){return N(M({},super.properties),{inputValue:{type:String,attribute:!1}})}constructor(){super(),this.onEditTimeoutId=null,this.inputValue=""}updated(e){var t;if(super.updated(e),(e.has("element")||e.has("connector"))&&(this.inputValue=null!=(t=this.getValue())?t:""),e.has("inputValue")){this.inputElement.value!==this.inputValue&&(this.inputElement.value=this.inputValue),this.setValue(this.inputValue)}}propertyChanged(e){this.inputElement.value=e}onInputChange(){this.onEditTimeoutId&&(clearTimeout(this.onEditTimeoutId),this.onEditTimeoutId=null),this.onEditTimeoutId=setTimeout((()=>{this.inputValue=this.inputElement.value}),500)}renderInputField(){return B`
      <juicy-ace-editor
        part="input"
        @change="${this.onInputChange}"
        mode="ace/mode/javascript"
        theme="ace/theme/monokai"
        ?disabled="${this.isDisabled()}"
      ></juicy-ace-editor>
    `}});const Oi=A`
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
    padding-bottom: 10px;
  }
`;class ji extends F{constructor(){super(),this.element=null,this.connector=null}get inputElement(){return this.renderRoot.querySelector("[part=input]")}onValueChange(e){this.renderRoot.querySelectorAll(".property-view").forEach((e=>{null==e||e.requestUpdate()}))}render(){var e;if(!this.element)return B``;const t=null==(e=this.connector)?void 0:e.getElementWebbit(this.element);if(!t)return B``;const{properties:i}=t.getConfig();return B`
      <div class="properties-view">
        <vaadin-form-layout @change=${this.onValueChange}>
          ${Object.entries(i).map((([e])=>this.renderPropertyView(e,t.getPropertyHandler(e))))}
        </vaadin-form-layout>
      </div>
    `}renderPropertyView(e,t){var i;const s=t.getProperty();switch(null!=(i=s.inputType)?i:s.type){case"String":return B`
          <dashboard-string-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-property-view>
        `;case"Number":return B`
          <dashboard-number-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-number-property-view>
        `;case"Boolean":return B`
          <dashboard-boolean-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-boolean-property-view>
        `;case"Array":case"StringArray":return B`
          <dashboard-string-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-array-property-view>
        `;case"BooleanArray":return B`
          <dashboard-boolean-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-boolean-array-property-view>
        `;case"NumberArray":return B`
          <dashboard-number-array-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-number-array-property-view>
        `;case"Textarea":return B`
          <dashboard-text-area-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-text-area-property-view>
        `;case"StringDropdown":return B`
          <dashboard-string-dropdown-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-string-dropdown-property-view>
        `;case"ColorPicker":return B`
          <dashboard-color-picker-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-color-picker-property-view>
        `;case"Function":return B`
          <dashboard-function-property-view
            class="property-view"
            .element="${this.element}"
            .propertyName="${e}"
            .propertyHandler="${t}"
          ></dashboard-function-property-view>
        `}return B``}}R(ji,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:Y,attribute:!1}}),R(ji,"styles",Oi),customElements.define("dashboard-properties-tool",ji);const Ui=A`
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
`;class qi extends F{constructor(){super(),this.label="",this.providerName="",this.source=null,this.level=0,this.selectedSourceKey="",this.selectedSourceProvider="",this.selectedSource=null,this.store=null,this.disabled=!1}get detailsElement(){return this.renderRoot.querySelector("details")}hasSources(){return this.source.hasChildren()}hasValue(){return this.source.hasValue()}isSelected(){return this.source===this.selectedSource}isSelectedKeyDescendent(){return!!this.selectedSource&&this.selectedSource.getKey().startsWith(this.source.getKey()+"/")}updated(e){e.has("selectedSource")&&this.isSelectedKeyDescendent()&&(this.detailsElement.open=!0)}firstUpdated(){this.store.subscribe(this.providerName,this.source.getKey(),(()=>{this.requestUpdate()}),!0)}onSelect(){const e=new CustomEvent("sourceSelect",{bubbles:!0,composed:!0,detail:{sourceKey:this.source.getKey(),sourceProvider:this.providerName}});this.dispatchEvent(e)}renderValue(){const e=this.source.getValue();return"boolean"==typeof e?B`
        <input disabled type="checkbox" ?checked="${e}" />
        <label>${e.toString()}</label>
      `:"string"==typeof e?B`
        "${e}"
      `:"number"==typeof e?B`
        ${e}
      `:e instanceof Array?B`
        [${e.join(", ")}]
      `:B``}renderChildSources(){if(!this.hasSources())return null;const e=this.source.getChildren(),t=Object.entries(e);return B`
      <div class="sources">
        ${t.map((([e,i])=>B`
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
    `}render(){return B`
      <details 
        style=${`--level: ${this.level}`}
        class=${e={childless:!this.hasSources(),selected:this.isSelected()},Object.entries(e).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div class="header">
            <span class="key">
              ${this.hasSources()?B`
                <span class="caret">
                  <iron-icon icon="vaadin:angle-right" class="closed-cursor"></iron-icon>
                  <iron-icon icon="vaadin:angle-down" class="opened-cursor"></iron-icon>
                </span>
              `:""}
              <label>${""!==this.label?this.label:B`&nbsp;`}</label>
              ${this.disabled?"":B`
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
    `;var e}}R(qi,"styles",Ui),R(qi,"properties",{onlyChild:{type:Boolean,attribute:"only-child"},label:{type:String},providerName:{type:String},source:{type:Object},level:{type:Number},selectedSourceKey:{type:String},selectedSourceProvider:{type:String},selectedSource:{type:Object},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-source-view",qi);class Hi extends F{constructor(){super(),this.sourceKey="",this.sourceProvider="",this.store=null,this.disabled=!1}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}firstUpdated(){this.store.sourceProviderAdded((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)})),this.sourceProviderNames.forEach((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)}))}updated(e){}renderSources(e){var t;const i=this.store.getSource(e,""),s=null!=(t=null==i?void 0:i.getChildren())?t:{},r=Object.entries(s),n=this.sourceKey&&this.store?this.store.getSource(this.sourceProvider,this.sourceKey):null;return B`
      ${r.map((([t,i])=>B`
        <dashboard-source-view
          ?only-child="${1===r.length}"
          .label="${t}" 
          .providerName="${e}"
          .source="${i}"
          .selectedSourceKey="${this.sourceKey}"
          .selectedSourceProvider="${this.sourceProvider}"
          .selectedSource="${n}"
          .store="${this.store}"
          ?disabled=${this.disabled}
        >
        </dashboard-source-view>
      `))}
    `}render(){return 0===this.sourceProviderNames.length?B`
        <p>There are no sources currently available.</p>
      `:B`
      <vaadin-accordion opened="${null}">
        ${this.sourceProviderNames.map((e=>B`
          <vaadin-accordion-panel theme="small">
            <div slot="summary">${e}</div>
            <div>${this.renderSources(e)}</div>
          </vaadin-accordion-panel>
        `))}
      </vaadin-accordion>
    `}}R(Hi,"styles",A`
    :host {
      display: block;
      font-family: sans-serif;
    }
    p {
      margin: 8px 0 5px;
      font-weight: bold;
    }
  `),R(Hi,"properties",{sourceKey:{type:String},sourceProvider:{type:String},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-sources-view",Hi);const Wi=A`
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
`;class Ki extends F{constructor(){super(),this.element=null,this.connector=null,this.sourceKeys={}}get webbit(){var e;return this.element&&(null==(e=this.connector)?void 0:e.getElementWebbit(this.element))}get sourceProvider(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceProvider)?t:""}set sourceProvider(e){this.webbit&&(this.webbit.sourceProvider=e)}get sourceKey(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceKey)?t:""}set sourceKey(e){this.webbit&&(this.webbit.sourceKey=e)}get store(){var e;return null==(e=this.connector)?void 0:e.getStore()}get defaultSourceProvider(){var e;return null==(e=this.store)?void 0:e.getDefaultSourceProvider()}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}onSourceKeyInputChange(e){const t=e.target||e.path[0];this.sourceKey=t.value,this.requestUpdate()}onSourceProviderInputChange(e){const t=e.target||e.path[0];this.sourceProvider=t.value,this.requestUpdate()}onSourceSelect(e){const{sourceKey:t,sourceProvider:i}=e.detail;this.sourceKey=t,this.sourceProvider=i,this.requestUpdate()}getSourceKeyItems(){var e;return[...null!=(e=this.sourceKeys[this.sourceProvider])?e:[]]}updateSourceKeySet(e,t){this.store.getSource(e,t)?this.sourceKeys[e].has(t)||(this.sourceKeys[e].add(t),this.requestUpdate()):this.sourceKeys[e].has(t)&&(this.sourceKeys[e].delete(t),this.requestUpdate())}firstUpdated(){this.store.sourceProviderAdded((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)})),this.sourceProviderNames.forEach((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)}))}render(){var e,t,i;const s=this.element?null==(e=this.connector)?void 0:e.getElementWebbit(this.element):null,r=!this.element||!s;return B`
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
    `}}function Xi(e,t){const i=e.getMatchingElementConfig(t),s=t.tagName.toLowerCase();return(null==i?void 0:i.dashboard)?"string"==typeof i.dashboard.displayName?i.dashboard.displayName:"function"==typeof i.dashboard.displayName?i.dashboard.displayName(t):s:s}R(Ki,"styles",Wi),R(Ki,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:Y,attribute:!1}}),customElements.define("dashboard-sources-tool",Ki);class Yi extends F{constructor(){super(),this.slot="",this.level=0}render(){return B`
      <p style=${`--level: ${this.level}`}>
        ${this.slot} SLOT
      </p>
    `}}R(Yi,"styles",A`
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
  `),R(Yi,"properties",{slot:{type:String},level:{type:Number}}),customElements.define("dashboard-element-tree-slot-node",Yi);const Gi=A`
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
`;class Ji extends F{constructor(){super(),L(this,l),L(this,h),L(this,u),L(this,m),L(this,b),L(this,y),L(this,w),this.connector=null,this.element=null,this.selectedElement=null,this.level=0}static get properties(){return{connector:{type:Y,attribute:!1},element:{type:HTMLElement,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1},level:{type:Number}}}get headerElement(){return this.renderRoot.querySelector(".header")}get detailsElement(){return this.renderRoot.querySelector("details")}get elementConfig(){var e,t;return null!=(t=null==(e=this.connector)?void 0:e.getMatchingElementConfig(this.element))?t:null}updated(e){e.has("selectedElement")&&this.selectedElement&&this.element.contains(this.selectedElement)&&(this.detailsElement.open=!0)}firstUpdated(){const e=this.connector.getElementWebbit(this.element);null==e||e.subscribe((e=>{this.requestUpdate()})),this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()));new MutationObserver((()=>{this.requestUpdate()})).observe(this.element,{childList:!0,subtree:!0,attributeFilter:["id","slot"]})}renderAttributes(){return["id","slot"].filter((e=>this.element.hasAttribute(e))).map((e=>B`
        <span class="attribute">
          <span class="attribute-name">${e}</span>="<span class="attribute-value">${this.element.getAttribute(e)}</span>"
        </span>
      `))}_onOpenToggle(){setTimeout((()=>{this.detailsElement.open=!this.detailsElement.open}))}render(){const e=Xi(this.connector,this.element);return B`
      <details 
        @click=${e=>e.preventDefault()}
        style=${`--level: ${this.level}`}
        class=${t={childless:!V(this,l,d).call(this),selected:V(this,h,c).call(this)},Object.entries(t).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div 
            class="header" 
            @mouseenter="${V(this,b,f)}" 
            @mouseleave="${V(this,y,v)}"
            @click="${V(this,m,g)}"
          >
            <span class="element-name">
              ${V(this,l,d).call(this)?B`
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
        ${V(this,l,d).call(this)?B`
          <div class="nodes">
            ${V(this,w,x).call(this).map((({name:e,elements:t})=>B`
              ${t.map((e=>B`
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
    `;var t}}l=new WeakSet,d=function(){return this.element.children.length>0},h=new WeakSet,c=function(){return this.element===this.selectedElement},u=new WeakSet,p=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0,detail:{element:this.element,name:this.connector.getMatchingElementSelector(this.element)}});this.dispatchEvent(t)},m=new WeakSet,g=function(e){const t=e.target||e.path[0],i=this.renderRoot.querySelector(".caret");i&&i.contains(t)||V(this,u,p).call(this,"elementSelect")},b=new WeakSet,f=function(){V(this,u,p).call(this,"elementPreviewStart")},y=new WeakSet,v=function(){V(this,u,p).call(this,"elementPreviewEnd")},w=new WeakSet,x=function(){const e={"":[]};return[...this.element.children].forEach((t=>{var i;const s=null!=(i=t.getAttribute("slot"))?i:"";void 0===e[s]&&(e[s]=[]),e[s].push(t)})),Object.entries(e).map((([e,t])=>({name:e,elements:t})))},R(Ji,"styles",Gi),customElements.define("dashboard-element-tree-node",Ji);const Qi=A`
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
`;class Zi extends F{static get properties(){return{connector:{type:Y,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1}}}constructor(){super(),this.connector=null,this.selectedElement=null}firstUpdated(){this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()))}render(){return B`
      <p>Dashboard Elements</p>
      <div class="tree">
        ${[...this.connector.getRootElement().children].map((e=>B`
          <dashboard-element-tree-node
              .element=${e} 
              .connector=${this.connector}
              .selectedElement=${this.selectedElement}
            ></dashboard-element-tree-node>
        `))}
      </div>
    `}}R(Zi,"styles",Qi),customElements.define("dashboard-element-tree",Zi);class es{constructor(e,t=!1){this._connector=e,this._isPreviewBox=t,this._element=null,this._container=null,this._layoutConfig=null,this._parentLayoutConfig=null,this._selectionBoxElement=this._createSelectionBox(),this._hidden=!0,this._background=t?"rgba(3, 132, 210, .5)":"none",this._border=t?"none":"2px dashed green",window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}_createSelectionBox(){const e=document.createElement("div");return e.style.background=this._background,e.style.border=this._border,e.style.display="none",e.style.position="absolute",document.body.appendChild(e),e}get element(){return this._element}get parentElement(){return this.element.parentElement}get selectionBoxElement(){return this._selectionBoxElement}get translation(){return this.element?function(e){const t=window.getComputedStyle(e),i=t.transform||t.webkitTransform||t.mozTransform;if("none"===i||!i)return{x:0,y:0,z:0};const s=i.includes("3d")?"3d":"2d",r=i.match(/matrix.*\((.+)\)/)[1].split(", ");return"2d"===s?{x:parseFloat(r[4]),y:parseFloat(r[5]),z:0}:"3d"===s?{x:r[12],y:r[13],z:r[14]}:void 0}(this.element):{x:0,y:0,z:0}}get resizable(){return{vertical:this._layoutConfig.resizableVertical,horizontal:this._layoutConfig.resizableHorizontal}}get minHeight(){return this._layoutConfig.minHeight}get minWidth(){return this._layoutConfig.minWidth}get parentLayout(){return this._parentLayoutConfig.type}get movable(){return"absolute"===this.parentLayout&&this._layoutConfig.movable}setElement(e,t){this._element=e,this._container=t,this._layoutConfig=this._getLayoutConfig(e),this._parentLayoutConfig=this._getLayoutConfig(null==e?void 0:e.parentElement)}show(){this._hidden=!1,this._selectionBoxElement.style.display="block"}hide(){this._hidden=!0,this._selectionBoxElement.style.display="none"}_getLayoutConfig(e){var t,i,s,r,n,o,a,l,d,h;const{layout:c}=null!=(t=this._connector.getMatchingElementConfig(e))?t:{};return{type:null==c?void 0:c.type,resizableVertical:!1!==(null==c?void 0:c.resizable)&&(null==(s=null==(i=null==c?void 0:c.resizable)?void 0:i.vertical)||s),resizableHorizontal:!1!==(null==c?void 0:c.resizable)&&(null==(n=null==(r=null==c?void 0:c.resizable)?void 0:r.horizontal)||n),movable:null==(o=null==c?void 0:c.movable)||o,minWidth:null!=(l=null==(a=null==c?void 0:c.size)?void 0:a.minWidth)?l:20,minHeight:null!=(h=null==(d=null==c?void 0:c.size)?void 0:d.minHeight)?h:20}}_getBoundingRect(){const{x:e,y:t,top:i,bottom:s,left:r,right:n,width:o,height:a}=this._connector.getRootElement().getBoundingClientRect();return{x:this._isPreviewBox?this._container.offsetLeft:e,y:t,bottom:s,top:i,left:r,right:n,width:o,height:a}}_setPreviewBounds(){const e=function(e){if(!e)return!1;const{width:t,height:i}=e.getBoundingClientRect(),s=window.getComputedStyle(e);return 0!==t&&0!==i&&"0"!==s.width&&"0"!==s.height&&"0"!==s.opacity&&"none"!==s.display&&"hidden"!==s.visibility}(this._element);if(this._element&&!this._hidden&&e){const e=this._getBoundingRect(),{x:t,y:i,bottom:s,right:r,width:n,height:o}=this._element.getBoundingClientRect(),a=Math.max(t,e.x),l=Math.max(i,e.y),d=Math.min(r,e.right),h=Math.min(s,e.bottom),c=Math.min(d-a,n),u=Math.min(h-l,o);this._selectionBoxElement.style.display=t<e.right?"block":"none",this._selectionBoxElement.style.left=a+"px",this._selectionBoxElement.style.top=l+"px",this._selectionBoxElement.style.width=c+"px",this._selectionBoxElement.style.height=u+"px",this._selectionBoxElement.style.boxSizing="border-box",this._selectionBoxElement.style.borderRight=r>e.right?"none":this._border,this._selectionBoxElement.style.borderLeft=t<e.x?"none":this._border,this._selectionBoxElement.style.borderTop=i<e.y?"none":this._border,this._selectionBoxElement.style.borderBottom=s>e.bottom?"none":this._border,this._selectionBoxElement.style.background=this._background}else this._selectionBoxElement.style.display="none";window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}}class ts{constructor(e){this._connector=e,this._container=null,this._selectionBox=new es(e),this._previewedElementBox=new es(e,!0),this._interactive=G(this._selectionBox.selectionBoxElement),this._interactive.on("resizeend",(()=>{this._addResizeInteraction()}))}addInteraction(e,t){this._selectionBox.setElement(e,t),this._container=t,e&&(this._addResizeInteraction(),this._addDragInteraction()),e===this._previewedElementBox.element&&this._previewedElementBox.hide()}setPreviewedElement(e,t){var i;this._container=t,this._previewedElementBox.setElement(e,t);const s="dashboard-tab"===(null==(i=null==e?void 0:e.nodeName)?void 0:i.toLowerCase());e&&e!==this._selectionBox.element&&!s?this._previewedElementBox.show():this._previewedElementBox.hide()}show(){this._selectionBox.show()}hide(){this._selectionBox.hide()}_addResizeInteraction(){const{resizable:{horizontal:e,vertical:t},element:i,minWidth:s,minHeight:r}=this._selectionBox,{width:n,height:o}=i.getBoundingClientRect();this._interactive.resizable({edges:{left:e&&n>60,right:e,top:t&&o>60,bottom:t},listeners:{move:s=>{let{x:r,y:n}=this._selectionBox.translation;e&&(i.style.width=s.rect.width+"px"),t&&(i.style.height=s.rect.height+"px"),r+=s.deltaRect.left,n+=s.deltaRect.top,i.style.webkitTransform=i.style.transform="translate("+r+"px,"+n+"px)"}},modifiers:[G.modifiers.restrictEdges({outer:"parent"}),G.modifiers.restrictSize({min:{width:s,height:r}})],inertia:!0})}_addDragInteraction(){this._interactive.draggable({listeners:{move:e=>{const{element:t,movable:i,translation:s}=this._selectionBox;if(!i||!t)return;let{x:r,y:n}=s;r+=e.dx,n+=e.dy,t.style.webkitTransform=t.style.transform="translate("+r+"px, "+n+"px)"}},modifiers:[G.modifiers.restrict({restriction:()=>this._container.getBoundingClientRect(),elementRect:{left:0,right:1,top:0,bottom:1}})],inertia:!0})}}class is{constructor(e,t){this._connector=e,this._eventListeners=new Map,this._listen=!0,e.subscribeElementConnected((({element:e})=>{const i=i=>{this._listen&&(i.stopPropagation(),t(e))};e.addEventListener("mouseup",i),e.addEventListener("click",i),this._eventListeners.set(e,i)})),e.subscribeElementDisconnected((({element:e})=>{e.removeEventListener("mouseup",this._eventListeners.get(e)),e.removeEventListener("click",this._eventListeners.get(e)),this._eventListeners.delete(e)}))}setListening(e){this._listen=e}}class ss extends F{constructor(){super(),this.connector=null,this.element=null,this._selectedTab=null}updated(e){const t=this._getTabs();(e.has("element")||e.has("allowedChildren"))&&(t.includes(this._selectedTab)||(this._selectedTab=t[0])),e.has("_selectedTab")&&this._dispatchTabChangeEvent()}_dispatchTabChangeEvent(){const e=new CustomEvent("tabChange",{bubbles:!0,composed:!0,detail:{tab:this._selectedTab}});this.dispatchEvent(e)}_selectedTabChanged(e){const t=this._getTabs();this._selectedTab=t[e.detail.value]}_getTabs(){return["Properties","Sources","HTML"]}render(){const e=this._getTabs();return B`
      <vaadin-tabs theme="small" @selected-changed=${this._selectedTabChanged} selected=${e.indexOf(this._selectedTab)}>
        ${e.map((e=>B`
          <vaadin-tab>${e}</vaadin-tab>
        `))}
      </vaadin-tabs>
    `}}R(ss,"styles",A`
    vaadin-tabs {
      // background: rgba(200, 200, 200, 0.3);
    }
  `),R(ss,"properties",{connector:{type:Y,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},_selectedTab:{state:!0}}),customElements.define("dashboard-element-demo-tabs",ss);class rs extends F{render(){return B`<slot></slot>`}}R(rs,"styles",A`
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
  `),R(rs,"properties",{tabName:{type:String,attribute:"tab-name",reflect:!0}}),customElements.define("dashboard-tab",rs);const ns=[{text:"File",children:[{text:"Upload Dashboard HTML",id:"upload"},{text:"Download Dashboard HTML",id:"download"}]}];class os extends F{constructor(){super()}firstUpdated(){J.scan(this.renderRoot)}_onRemoveElement(){var e,t,i;const s=this.element.parentElement,r=[...s.children],n=r.indexOf(this.element),o=null!=(t=null!=(e=r[n+1])?e:r[n-1])?t:s;null==(i=this.element)||i.remove();const a=this.connector.getRootElement().contains(o)&&o!==this.connector.getRootElement();this.dispatchEvent(new CustomEvent("elementRemove",{detail:{nextElement:a?o:null},bubbles:!0,composed:!0}))}_moveElementUp(){this.element.previousElementSibling&&this.element.parentElement.insertBefore(this.element,this.element.previousElementSibling)}_moveElementDown(){this.element.nextElementSibling&&this.element.parentElement.insertBefore(this.element.nextElementSibling,this.element)}async _menuItemSelected(e){const{id:t}=e.detail.value;if("download"===t)!function(e,t="dashboard.html"){const i=new Blob([e],{type:"text/html"}),s=document.createElement("a");s.download=t,s.href=window.URL.createObjectURL(i),s.dataset.downloadurl=["text/html",s.download,s.href].join(":");const r=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});s.dispatchEvent(r)}(this.connector.getRootElement().innerHTML);else{const{cancelled:e,error:t,result:i}=await new Promise((e=>{const t=document.createElement("input");t.type="file",t.accept=".html",t.onchange=()=>{const{files:i}=t;i.length<1&&e({result:{},cancelled:!0,error:!1});const s=new FileReader;s.onload=t=>{try{const s=t.target.result;e({result:{html:s,name:i.item(0).name.replace(/\.(html)$/,"")},cancelled:!1,error:!1})}catch(s){e({result:"",cancelled:!1,error:!0})}},s.readAsText(i.item(0))};const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(i)}));if(!e&&!t){this.connector.getRootElement().querySelectorAll("dashboard-tab").forEach((e=>{e.remove()}));const e=document.createElement("div");e.innerHTML=i.html,e.querySelectorAll("dashboard-tab").forEach((e=>{this.connector.getRootElement().append(e)})),this.dispatchEvent(new CustomEvent("dashboardUpload",{bubbles:!0,composed:!0}))}}}render(){return B`
      <vaadin-menu-bar
        theme="icon contrast tertiary"
        .items="${ns}"
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
    `}}R(os,"styles",A`
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
  `),R(os,"properties",{connector:{type:Y,attribute:!1},element:{type:HTMLElement,attribute:!1}}),customElements.define("dashboard-menu",os);const as=A`
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

 
`;class ls extends F{constructor(){super(),this.element=null,this.connector=null,this._flask=null}get _editor(){return this.renderRoot.querySelector("#editor")}firstUpdated(){this._flask=new Q(this._editor,{language:"js",styleParent:this.renderRoot})}updated(e){if(e.has("element")&&this.element){const e=Z.exports.html(this.element.outerHTML,{"wrap-attributes":"force-expand-multiline"});this._flask.updateCode(e)}}_onSave(){const e=this._flask.getCode(),t=document.createElement("div");t.innerHTML=e;const i=t.firstElementChild;if(i&&i.nodeName===this.element.nodeName){for(this.element.getAttributeNames().forEach((e=>{i.hasAttribute(e)||this.element.removeAttribute(e)})),i.getAttributeNames().forEach((e=>{this.element.setAttribute(e,i.getAttribute(e))}));this.element.lastChild;)this.element.removeChild(this.element.lastChild);[...i.childNodes].forEach((e=>{this.element.append(e)}))}}render(){return this.element?B`
      <div class="container">
        <div class="editor">
          <div id="editor"></div>
        </div>
        <div class="buttons">
          <vaadin-button theme="small primary success" @click=${this._onSave}>Save</vaadin-button>
          <!-- <vaadin-button theme="small primary error">Cancel</vaadin-button> -->
        </div>
      </div>
    `:B``}}R(ls,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:Y,attribute:!1}}),R(ls,"styles",as),customElements.define("dashboard-edit-html",ls);const ds=A`
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
`;class hs extends F{constructor(){super(),this.store=null,this.elementConfigs={},this.elementNames=[],this.connector=null,this._selectedElement=null,this._previewedElement=null,this._selectedTab=null,this._allowedChildren=[],this.interact=null,this._dashboardSelections=null}get _containerElement(){return this.renderRoot.querySelector("#container")}firstUpdated(){this.connector=new Y(this,this.store,N(M({},this.elementConfigs),{"dashboard-tab":{dashboard:{topLevel:!1,displayName:e=>e.getAttribute("tab-name")||"Tab"},properties:{tabName:{type:"String",attribute:"tab-name",reflect:!0}},slots:[{name:""}],layout:{type:"absolute",movable:!1,resizable:!1}}})),this._dashboardSelections=new is(this.connector,(e=>{this._selectedElement=e})),Object.entries(Ai).forEach((([e,t])=>{var i;(null==(i=t.topLevel)||i)&&this.elementNames.push(e)})),this.interact=new ts(this.connector),this.innerHTML='\n      <dashboard-tab tab-name="TeleOperated" selected></dashboard-tab>\n      <dashboard-tab tab-name="Autonomous"></dashboard-tab>\n    ',this._selectedElement=this.querySelector("dashboard-tab"),this.requestUpdate();new MutationObserver((e=>{this.requestUpdate()})).observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["tab-name"]})}get _appLayout(){return this.renderRoot.querySelector("vaadin-app-layout")}updated(e){e.has("_selectedElement")&&(this._allowedChildren=function(e,t){if(!e)return[];const i=t.getMatchingElementConfig(e);return i?i.slots.map((({name:e,allowedChildren:i})=>({slot:e,allowedChildren:t.getElementConfigSelectors().filter((e=>{var s,r;return i instanceof Array?i.includes(e):null==(r=null==(s=t.getElementConfig(e))?void 0:s.dashboard)?void 0:r.topLevel}))}))):[]}(this._selectedElement,this.connector),this.interact.addInteraction(this._selectedElement,this._containerElement),this._showSelectedTab()),(e.has("_selectedTab")||e.has("_selectedElement"))&&this._setInteractVisibility(),e.has("_previewedElement")&&this.interact.setPreviewedElement(this._previewedElement,this._containerElement)}_setInteractVisibility(){var e,t,i;const s="dashboard-tab"===(null==(t=null==(e=this._selectedElement)?void 0:e.tagName)?void 0:t.toLowerCase());(null==(i=this._appLayout)?void 0:i.drawerOpened)&&!s?this.interact.show():this.interact.hide()}_onElementSelect(e){this._selectedElement=e.detail.element}_onElementPreviewStart(e){this._previewedElement=e.detail.element}_onElementPreviewEnd(){this._previewedElement=null}_getSelectedTabIndex(){return[...this.querySelectorAll("dashboard-tab")].findIndex((e=>e===this._selectedElement||e.contains(this._selectedElement)))}_showSelectedTab(){const e=this._getSelectedTabIndex();[...this.querySelectorAll("dashboard-tab")].forEach(((t,i)=>{i===e?t.setAttribute("selected",""):t.removeAttribute("selected")}))}_getTabs(){return[...this.querySelectorAll("dashboard-tab")].map((e=>({label:e.getAttribute("tab-name")})))}_onDashboardTabChange(e){const t=[...this.children][e.detail.value];t&&!t.contains(this._selectedElement)&&(this._selectedElement=t)}_onDrawerOpenChange(){var e;this._setInteractVisibility();const t=!!(null==(e=this._appLayout)?void 0:e.drawerOpened);this._dashboardSelections.setListening(t),this._previewedElement=null,this.requestUpdate()}_onRemoveElement(e){this._selectedElement=e.detail.nextElement}_addTab(){const e=this.querySelectorAll("dashboard-tab").length,t=document.createElement("dashboard-tab");t.setAttribute("tab-name",`Tab ${e+1}`),this.append(t),0===e&&(this._selectedElement=t)}_onDashboardUpload(){const e=this.querySelector("dashboard-tab");e&&(this._selectedElement=e)}render(){var e;if(!this.connector)return B``;const t=this._getSelectedTabIndex();return B`
      <vaadin-app-layout primary-section="drawer" @drawer-opened-changed=${this._onDrawerOpenChange}>
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <div slot="navbar" style="display: flex">
          <vaadin-tabs .selected=${t} @selected-changed=${this._onDashboardTabChange}>
            ${this._getTabs().map((({label:e},t)=>B`
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
              ${"Properties"===this._selectedTab?B`
                <dashboard-properties-tool .element=${this._selectedElement} .connector=${this.connector}></dashboard-properties-tool>
              `:""}
              ${"Sources"===this._selectedTab?B`
                <dashboard-sources-tool .element=${this._selectedElement} .connector=${this.connector}></dashboard-sources-tool>
              `:""}
              ${"HTML"===this._selectedTab?B`
                <dashboard-edit-html .element=${this._selectedElement} .connector=${this.connector}></dashboard-edit-html>
              `:""}
            </div>
          </div>
        </div>
        <div id="container">
          <slot></slot>
        </div>
      </vaadin-app-layout>
    `}}function cs(e,t){const i=e.getElementConfig(t);if(null==i?void 0:i.demos){const[{html:e}]=i.demos;return e}return`<${t}></${t}>`}R(hs,"styles",ds),R(hs,"properties",{store:{type:ee,attribute:!1},elementConfigs:{type:Object,attribute:!1},_selectedElement:{state:!0},_previewedElement:{state:!0},_selectedTab:{state:!0},_allowedChildren:{state:!0}}),customElements.define("dashboard-element-demo",hs);const us=A`
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

  .component-selector {
    --vaadin-combo-box-overlay-width: 350px;
  }
`;class ps extends F{constructor(){super(),this.connector=null,this.element=null,this.allowedChildren=[],this._slot="",this._selectedConfigSelector=null}firstUpdated(){this.renderRoot.querySelectorAll("vaadin-combo-box").forEach((e=>{var t;const i=document.createElement("div");i.innerHTML="\n        <style>\n          vaadin-text-field::part(input-field)::after {\n            transition: none;\n          }\n        </style>\n      ",null==(t=null==e?void 0:e.shadowRoot)||t.prepend(i)}))}updated(e){var t,i,s,r;if(e.has("allowedChildren")){const e=null==(t=this.allowedChildren)?void 0:t[0];this._slot=null==e?void 0:e.slot,this._selectedConfigSelector=null==(i=null==e?void 0:e.allowedChildren)?void 0:i[0]}if(e.has("_slot")){const e=null==(s=this.allowedChildren)?void 0:s.find((({slot:e})=>this._slot===e));this._selectedConfigSelector=null==(r=null==e?void 0:e.allowedChildren)?void 0:r[0]}}_onSelect(e){const t=e.target||e.path[0];this._selectedConfigSelector=t.value}_onSlotSelect(e){const t=e.target||e.path[0];this._slot=t.value}_prependElement(){const e=document.createElement("div");e.innerHTML=cs(this.connector,this._selectedConfigSelector),[...e.children].forEach((e=>{this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.prepend(e)}))}_appendElement(){const e=document.createElement("div");e.innerHTML=cs(this.connector,this._selectedConfigSelector),[...e.children].forEach((e=>{this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.append(e)}))}render(){var e,t,i,s,r,n;if(!this.element)return B`<p>Select an element to view its properties.</p>`;const o=Xi(this.connector,this.element);if(!(null==(e=this.connector)?void 0:e.getElementWebbit(this.element)))return B`<p>There is no configuration for the <span>${o}</span> element.</p>`;const a=null!=(s=null==(i=null==(t=this.allowedChildren)?void 0:t.find((({slot:e})=>this._slot===e)))?void 0:i.allowedChildren)?s:[],l=null!=(n=null==(r=this.allowedChildren)?void 0:r.map((({slot:e})=>({value:e,label:e||"unnamed"}))))?n:[];return B`
      <p>Edit element <span>${o}</span></p>
      <div class="dropdowns">
        <vaadin-combo-box
          class="component-selector"
          theme="small"
          label="Component"
          .items=${a}
          ?readonly=${0===a.length}
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
    `}}R(ps,"styles",us),R(ps,"properties",{connector:{type:Y,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},_slot:{state:!0},_selectedConfigSelector:{state:!0}}),customElements.define("dashboard-add-elements",ps),function(e){const t=4294967296,i=9007199254740992;e.CBOR={encode:function(e){let s,r=new ArrayBuffer(256),n=new DataView(r),o=0;function a(e){let t=r.byteLength;const i=o+e;for(;t<i;)t<<=1;if(t!==r.byteLength){const e=n;r=new ArrayBuffer(t),n=new DataView(r);const i=o+3>>2;for(let t=0;t<i;++t)n.setUint32(t<<2,e.getUint32(t<<2))}return s=e,n}function l(){o+=s}function d(e){l(a(1).setUint8(o,e))}function h(e){const t=a(e.length);for(let i=0;i<e.length;++i)t.setUint8(o+i,e[i]);l()}function c(e,i){var s;i<24?d(e<<5|i):i<256?(d(e<<5|24),d(i)):i<65536?(d(e<<5|25),s=i,l(a(2).setUint16(o,s))):i<4294967296?(d(e<<5|26),function(e){l(a(4).setUint32(o,e))}(i)):(d(e<<5|27),function(e){const i=e%t,s=(e-i)/t,r=a(8);r.setUint32(o,s),r.setUint32(o+4,i),l()}(i))}if(function e(t){let s;if(!1===t)return d(244);if(!0===t)return d(245);if(null===t)return d(246);if(void 0===t)return d(247);switch(typeof t){case"number":if(Math.floor(t)===t){if(0<=t&&t<=i)return c(0,t);if(-i<=t&&t<0)return c(1,-(t+1))}return d(251),function(e){l(a(8).setFloat64(o,e))}(t);case"string":const r=[];for(s=0;s<t.length;++s){let e=t.charCodeAt(s);e<128?r.push(e):e<2048?(r.push(192|e>>6),r.push(128|63&e)):e<55296?(r.push(224|e>>12),r.push(128|e>>6&63),r.push(128|63&e)):(e=(1023&e)<<10,e|=1023&t.charCodeAt(++s),e+=65536,r.push(240|e>>18),r.push(128|e>>12&63),r.push(128|e>>6&63),r.push(128|63&e))}return c(3,r.length),h(r);default:let n;if(Array.isArray(t))for(n=t.length,c(4,n),s=0;s<n;++s)e(t[s]);else if(t instanceof Uint8Array)c(2,t.length),h(t);else{const i=Object.keys(t);for(n=i.length,c(5,n),s=0;s<n;++s){const r=i[s];e(r),e(t[r])}}}}(e),"slice"in r)return r.slice(0,o);const u=new ArrayBuffer(o),p=new DataView(u);for(let t=0;t<o;++t)p.setUint8(t,n.getUint8(t));return u},decode:function(e,i,s){const r=new DataView(e);let n=0;function o(e,t){return n+=e,t}function a(t){return o(t,new Uint8Array(e,n,t))}function l(){return o(1,r.getUint8(n))}function d(){return o(2,r.getUint16(n))}function h(){return o(4,r.getUint32(n))}function c(){return 255===r.getUint8(n)&&(n+=1,!0)}function u(e){if(e<24)return e;if(24===e)return l();if(25===e)return d();if(26===e)return h();if(27===e)return h()*t+h();if(31===e)return-1;throw"Invalid length encoding"}function p(e){const t=l();if(255===t)return-1;const i=u(31&t);if(i<0||t>>5!==e)throw"Invalid indefinite length element";return i}function m(e,t){for(let i=0;i<t;++i){let i=l();128&i&&(i<224?(i=(31&i)<<6|63&l(),t-=1):i<240?(i=(15&i)<<12|(63&l())<<6|63&l(),t-=2):(i=(15&i)<<18|(63&l())<<12|(63&l())<<6|63&l(),t-=3)),i<65536?e.push(i):(i-=65536,e.push(55296|i>>10),e.push(56320|1023&i))}}"function"!=typeof i&&(i=function(e){return e}),"function"!=typeof s&&(s=function(){});const g=function e(){const t=l(),h=t>>5,g=31&t;let b,f;if(7===h)switch(g){case 25:return function(){const e=new ArrayBuffer(4),t=new DataView(e),i=d(),s=32768&i;let r=31744&i;const n=1023&i;if(31744===r)r=261120;else if(0!==r)r+=114688;else if(0!==n)return(s?-1:1)*n*5.960464477539063e-8;return t.setUint32(0,s<<16|r<<13|n<<13),t.getFloat32(0)}();case 26:return o(4,r.getFloat32(n));case 27:return o(8,r.getFloat64(n))}if(f=u(g),f<0&&(h<2||6<h))throw"Invalid length";switch(h){case 0:return f;case 1:return-1-f;case 2:if(f<0){const e=[];let t=0;for(;(f=p(h))>=0;)t+=f,e.push(a(f));const i=new Uint8Array(t);let s=0;for(b=0;b<e.length;++b)i.set(e[b],s),s+=e[b].length;return i}return a(f);case 3:const t=[];if(f<0)for(;(f=p(h))>=0;)m(t,f);else m(t,f);return String.fromCharCode.apply(null,t);case 4:let r;if(f<0)for(r=[];!c();)r.push(e());else for(r=new Array(f),b=0;b<f;++b)r[b]=e();return r;case 5:const n={};for(b=0;b<f||f<0&&!c();++b){n[e()]=e()}return n;case 6:return i(e(),f);case 7:switch(f){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return s(f)}}}();if(n!==e.byteLength)throw"Remaining bytes";return g}}}(window);const ms=new function(){let e,t,i,s,r;if(!("WebSocket"in window))return void alert("Your browser does not support websockets, this will fail!");this.create_map=function(){return new Map},this.keyToId=encodeURIComponent,this.keySelector=function(e){return encodeURIComponent(e).replace(/([;&,.+*~':"!^#$%@\[\]()=>|])/g,"\\$1")};const n=new Set,o=new Set,a=new Set,l=new Map;let d=new Map;function h(){s=new WebSocket(`ws://${r}/networktables/ws`),s&&(s.binaryType="arraybuffer",s.onopen=function(){console.info("Socket opened"),i=!0,n.forEach((e=>e(!0)))},s.onmessage=function(i){const s=CBOR.decode(i.data);if(void 0!==s.r)t=s.r,e=s.a,o.forEach((e=>e(t)));else{const e=s.k,t=s.v,i=s.n;d.set(e,t),a.forEach((s=>s(e,t,i)));const r=l.get(e);void 0!==r&&r.forEach((s=>s(e,t,i)))}},s.onclose=function(){i&&(n.forEach((e=>e(!1))),o.forEach((e=>e(!1))),d=new Map,i=!1,t=!1,e=null,console.info("Socket closed")),setTimeout(h,300)})}this.addWsConnectionListener=function(e,t){return n.add(e),!0===t&&e(i),()=>n.delete(e)},this.addRobotConnectionListener=function(e,i){return o.add(e),!0===i&&e(t),()=>o.delete(e)},this.addGlobalListener=function(e,t){return a.add(e),!0===t&&d.forEach((function(t,i){e(i,t,!0)})),()=>a.delete(e)},this.addKeyListener=function(e,t,i){const s=l.get(e);if(void 0===s?l.set(e,new Set([t])):s.add(t),!0===i){const i=d.get(e);void 0!==i&&t(e,i,!0)}return()=>l.get(e).delete(t)},this.containsKey=function(e){return d.has(e)},this.getKeys=function(){return d.keys()},this.getValue=function(e,t){const i=d.get(e);return void 0===i?t:i},this.getRobotAddress=function(){return e},this.isRobotConnected=function(){return t},this.isWsConnected=function(){return i},this.closeSocket=function(){s&&s.close()},this.putValue=function(e,t){if(!i)return!1;if(void 0===t)throw new Error(e+": 'undefined' passed to putValue");return s.send(CBOR.encode({k:e,v:t})),!0},this.connect=function(e){if(!i)return!1;if("string"!=typeof e)throw new Error("address should be type 'string'");return d=new Map,s.send(CBOR.encode({a:e})),!0},this.setValue=this.putValue,i=!1,t=!1,e=null,this.connectToWs=function(e){r=e||window.location.host,h()}};window.NetworkTables=ms;const gs=e=>{if(["number","boolean","string"].includes(typeof e))return typeof e;if(e instanceof Array){const[t]=e;return["number","boolean","string"].includes(typeof t)?typeof t+"Array":"Array"}return""};const bs=new class extends te{constructor(){super(),this.setAddress("localhost"),this.updatedEntriesBeforeReady=[],this.isNtReady=!1,this.ntReady=new Promise((e=>{const t=setInterval((()=>{NetworkTables.isWsConnected()&&(this.isNtReady=!0,e(),clearInterval(t))}),500)})),this.ntReady.then((()=>{this.updatedEntriesBeforeReady.forEach((e=>{void 0===NetworkTables.getValue(e)&&NetworkTables.putValue(e,this.getSource(e))})),NetworkTables.addRobotConnectionListener((e=>{e?this.clearSources(this.updateAll.bind(this)):this.clearSourcesWithTimeout(2e3,this.updateAll.bind(this))}),!0),NetworkTables.addWsConnectionListener((e=>{e?(this.clearSources(this.updateAll.bind(this)),this.connect()):this.clearSourcesWithTimeout(2e3,this.updateAll.bind(this))}),!0),NetworkTables.addGlobalListener(((e,t)=>{this.updateSource(e,t)}),!0)}))}updateAll(){for(let e of NetworkTables.getKeys())this.updateSource(e,NetworkTables.getValue(e))}setAddress(e){NetworkTables.connectToWs(`${e}:8888`)}connect(e){e&&(localStorage.networkTablesAddress="localhost"===e?"127.0.0.1":e),localStorage.networkTablesAddress&&NetworkTables.connect(localStorage.networkTablesAddress)}userUpdate(e,t){if(this.isNtReady)NetworkTables.putValue(e,t);else{const i=this.getSource(e),s=gs(i),r=gs(t);if(!s&&r&&(this.updateSource(e,t),this.updatedEntriesBeforeReady.includes(e)||this.updatedEntriesBeforeReady.push(e)),!r)return;(s===r||s.includes("Array")&&"Array"===r||"Array"===s&&r.includes("Array"))&&(this.updateSource(e,t),this.updatedEntriesBeforeReady.includes(e)||this.updatedEntriesBeforeReady.push(e))}}isRobotConnected(){return!!this.isNtReady&&NetworkTables.isRobotConnected()}isWsConnected(){return NetworkTables.isWsConnected()}async addWsConnectionListener(e,t){this.isNtReady?NetworkTables.addWsConnectionListener(e,t):(t&&e(!1),await this.ntReady,NetworkTables.addWsConnectionListener(e,!1),t&&NetworkTables.isWsConnected()&&e(!0))}async addRobotConnectionListener(e,t){this.isNtReady?NetworkTables.addRobotConnectionListener(e,t):(t&&e(!1),await this.ntReady,NetworkTables.addRobotConnectionListener(e,!1),t&&NetworkTables.isRobotConnected()&&e(!0))}},fs=new class extends te{constructor(){super();const e=()=>{[...window.navigator.getGamepads()].forEach(((e,t)=>{if(!e)return this.removeSource(`/${t}/axes`),this.removeSource(`/${t}/connected`),this.removeSource(`/${t}/id`),this.removeSource(`/${t}/index`),this.removeSource(`/${t}/mapping`),this.removeSource(`/${t}/timestamp`),this.removeSource(`/${t}/buttonPresses`),this.removeSource(`/${t}/buttonTouches`),void this.removeSource(`/${t}/buttonValues`);const{axes:i,buttons:s,connected:r,id:n,mapping:o,timestamp:a}=e;this.updateSource(`/${t}/axes`,i),this.updateSource(`/${t}/connected`,r),this.updateSource(`/${t}/id`,n),this.updateSource(`/${t}/index`,t),this.updateSource(`/${t}/mapping`,o),this.updateSource(`/${t}/timestamp`,a);const l=[],d=[],h=[];s.forEach(((e,t)=>{const{pressed:i,touched:s,value:r}=e;l.push(i),d.push(s),h.push(r)})),this.updateSource(`/${t}/buttonPresses`,l),this.updateSource(`/${t}/buttonTouches`,d),this.updateSource(`/${t}/buttonValues`,h)})),window.requestAnimationFrame(e)};window.requestAnimationFrame(e)}},ys=new ee;ys.addSourceProvider("NetworkTables",bs),ys.addSourceProvider("Gamepad",fs),ys.setDefaultSourceProvider("NetworkTables"),document.addEventListener("DOMContentLoaded",(()=>{ie(B`
    <dashboard-element-demo
      .store=${ys}
      .elementConfigs=${Ai}
    ></dashboard-element-demo>
  `,document.querySelector("#dash"))}),!1);
