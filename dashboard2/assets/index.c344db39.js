var e,t,i,s,r,n,a,o,l,d,h,c,u,p,m,g,b,f,y,v,w,x,S,$,C,k,E,_,M,T,N,V,R,I,L,P,z,A,F,O,D,B,j,W,U,q,H,K,X,Y,G,J,Q,Z,ee,te,ie,se,re,ne,ae,oe,le,de,he,ce,ue,pe,me,ge,be,fe,ye,ve,we,xe,Se,$e,Ce,ke,Ee,_e,Me,Te,Ne,Ve,Re,Ie,Le,Pe,ze,Ae,Fe,Oe,De,Be,je,We,Ue,qe,He,Ke,Xe,Ye,Ge,Je,Qe,Ze,et,tt=Object.defineProperty,it=Object.defineProperties,st=Object.getOwnPropertyDescriptors,rt=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,ot=(e,t,i)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,lt=(e,t)=>{for(var i in t||(t={}))nt.call(t,i)&&ot(e,i,t[i]);if(rt)for(var i of rt(t))at.call(t,i)&&ot(e,i,t[i]);return e},dt=(e,t)=>it(e,st(t)),ht=(e,t,i)=>(ot(e,"symbol"!=typeof t?t+"":t,i),i),ct=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ut=(e,t,i)=>(ct(e,t,"read from private field"),i?i.call(e):t.get(e)),pt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mt=(e,t,i,s)=>(ct(e,t,"write to private field"),s?s.call(e,i):t.set(e,i),i),gt=(e,t,i)=>(ct(e,t,"access private method"),i);import{I as bt,_ as ft,a as yt,b as vt,c as wt,s as xt,r as St,$ as $t,d as Ct,p as kt,L as Et,e as _t,C as Mt,h as Tt,W as Nt,y as Vt,f as Rt,g as It,i as Lt,j as Pt,k as zt,l as At,m as Ft,x as Ot}from"./vendor.5e8c1cfb.js";bt.addIcon("mdi:move-resize-variant",ft),bt.addIcon("mdi:heart",yt),bt.addIcon("mdi:table-row-plus-before",vt),bt.addIcon("mdi:table-row-plus-after",wt);class Dt extends HTMLElement{get value(){return this.editor&&this.editor.getValue()||this.textContent}set value(e){this.editor?this.editor.setValue(e):this.textContent=e}static get observedAttributes(){return["theme","mode","fontsize","softtabs","tabsize","readonly","wrapmode"]}constructor(e){var t;return(t=(e=super(e)).attachShadow&&e.getRootNode?e.attachShadow({mode:"open"}):e.createShadowRoot()).innerHTML='\n  <style>\n      :host{\n          display: flex;\n          min-height: 1em;\n          flex-direction: column;\n      }\n      #juicy-ace-editor-container{\n          flex: 1;\n          height: 100%;\n      }\n  </style>\n  <div id="juicy-ace-editor-container"></div>\n',e.container=t.querySelector("#juicy-ace-editor-container"),e}connectedCallback(){var e,t=this.childNodes[0],i=this.container,s=this;this.editor?e=this.editor:(i.textContent=this.value,e=ace.edit(i),this.dispatchEvent(new CustomEvent("editor-ready",{bubbles:!0,composed:!0,detail:e})),this.editor=e,this.injectTheme("#ace_editor\\.css"),this.injectTheme("#ace-tm"),this.injectTheme("#ace_searchbox"),e.getSession().on("change",(function(e){s.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:e}))}))),e.renderer.addEventListener("themeLoaded",this.onThemeLoaded.bind(this)),e.setTheme(this.getAttribute("theme")),e.setFontSize(parseInt(this.getAttribute("fontsize"))||12),e.setReadOnly(this.hasAttribute("readonly"));var r=e.getSession();r.setMode(this.getAttribute("mode")),r.setUseSoftTabs(this.getAttribute("softtabs")),this.getAttribute("tabsize")&&r.setTabSize(this.getAttribute("tabsize")),r.setUseWrapMode(this.hasAttribute("wrapmode"));var n=new MutationObserver((function(e){e.forEach((function(e){"characterData"==e.type&&(s.value=t.data)}))}));t&&n.observe(t,{characterData:!0}),this._attached=!0}disconnectedCallback(){this._attached=!1}attributeChangedCallback(e,t,i){if(!this._attached)return!1;switch(e){case"theme":this.editor.setTheme(i);break;case"mode":this.editor.getSession().setMode(i);break;case"fontsize":this.editor.setFontSize(i);break;case"softtabs":this.editor.getSession().setUseSoftTabs(i);break;case"tabsize":this.editor.getSession().setTabSize(i);break;case"readonly":this.editor.setReadOnly(""===i||i);break;case"wrapmode":this.editor.getSession().setUseWrapMode(null!==i)}}onThemeLoaded(e){var t="#"+e.theme.cssClass;this.injectTheme(t),this.container.style.display="none",this.container.offsetHeight,this.container.style.display=""}injectTheme(e){var t,i,s=document.querySelector(e);this.shadowRoot.appendChild((t=s,(i=document.createElement("style")).id=t.id,i.textContent=t.textContent,i))}}window.customElements.define("juicy-ace-editor",Dt);const Bt={dashboard:{topLevel:!1},properties:{value:{type:Number},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},center:{type:Number}}};function jt(e,t,i){return Math.min(i,Math.max(e,t))}class Wt extends xt{constructor(){super(),this.value=0,this.min=-1,this.max=1,this.center=0,this.dragging=!1}get min(){return Math.min(this._min,this._max)}set min(e){const t=this._min;this._min=e,this.requestUpdate("min",t)}get max(){return Math.max(this._min,this._max)}set max(e){const t=this._max;this._max=e,this.requestUpdate("max",t)}updateForeground(){const{min:e,max:t,center:i,value:s}=this,r=jt(s,e,t),n=this.shadowRoot.querySelector("[part=foreground]");t<i?(n.style.setProperty("--foreground-width",Math.abs(r-t)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right","0")):e>i?(n.style.setProperty("--foreground-width",Math.abs(r-e)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","0"),n.style.setProperty("--foreground-right","auto")):r>i?(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left",Math.abs(e-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-right","auto")):(n.style.setProperty("--foreground-width",Math.abs(r-i)/(t-e)*100+"%"),n.style.setProperty("--foreground-left","auto"),n.style.setProperty("--foreground-right",Math.abs(t-i)/(t-e)*100+"%"))}resized(){this.updateForeground()}updated(){this.updateForeground()}setDragPosition(e){const{left:t,width:i}=this.getBoundingClientRect(),s=jt((e.clientX-t)/i,0,1),r=this.min+(this.max-this.min)*s,n=new CustomEvent("barDrag",{bubbles:!0,composed:!0,detail:{value:r}});this.dispatchEvent(n)}firstUpdated(){this.setAttribute("draggable","false"),window.addEventListener("mousemove",(e=>{this.dragging&&this.setDragPosition(e)})),window.addEventListener("mouseup",(e=>{this.dragging=!1}))}onMouseDown(e){this.dragging=!0,this.setDragPosition(e)}render(){return $t`
        <div part="foreground" draggble="false"></div>
        <div class="content" draggable="false">
          <slot></slot>
        </div>
        <div 
          part="dragger" 
          @mousedown="${this.onMouseDown}"
        ></div>
    `}}ht(Wt,"properties",Bt.properties),ht(Wt,"styles",St`
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
  `),customElements.define("frc-bar",Wt);var Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-bar",elementConfig:Bt});const qt={dashboard:{topLevel:!1},properties:{vertical:{type:Boolean},ticks:{type:Number},range:{type:Array},unit:{type:String}}};class Ht extends xt{constructor(){super(),this.prevSize=0,this.prevTicks=0,this.prevMin=null,this.prevMax=null,this.vertical=!1,this.ticks=0,this.range=[],this.unit=""}setAxis(e){let t=this.vertical?this.clientHeight:this.clientWidth,i=t/Math.max(1,this.ticks-1);const s=this.range?30:10,r=this.range&&2===this.range.length,n=r?this.range[0]:0,a=r?this.range[1]:0;let o=-1/0,l=-1/0;if(this.prevSize===t&&this.prevTicks===this.ticks&&this.prevMin===n&&this.prevMax===a&&!e.has("unit"))return;this.prevSize=t,this.prevTicks=this.ticks,this.prevMin=n,this.prevMax=a,this.shadowRoot.getElementById("svg").innerHTML="";let d=Ct(this.shadowRoot.getElementById("svg")).attr("width",this.vertical?s:t).attr("height",this.vertical?t:s);for(let h=0;h<this.ticks;h++){if(this.vertical?d.append("line").attr("x1",0).attr("y1",h*i).attr("x2",8).attr("y2",h*i):d.append("line").attr("x1",h*i).attr("y1",0).attr("x2",h*i).attr("y2",8),r)if(this.vertical){const e=n+h*(a-n)/Math.max(this.ticks-1,1);d.append("text").attr("x",-3).attr("y",h*i+4).attr("text-anchor","end").text(e.toFixed(2)+(this.unit?` ${this.unit}`:""))}else{let e=o*i+.4*((h-o)*i);if(l<0||e>l){const e=n+h*(a-n)/Math.max(this.ticks-1,1);l=h*i+d.append("text").attr("x",h*i).attr("y",25).attr("text-anchor","middle").text(e.toFixed(2)+(this.unit?` ${this.unit}`:"")).node().getBBox().width/2,o=h}}if(h<this.ticks-1)for(let e=1;e<4;e++)this.vertical?d.append("line").attr("x1",4).attr("y1",h*i+e*i/4).attr("x2",8).attr("y2",h*i+e*i/4):d.append("line").attr("x1",h*i+e*i/4).attr("y1",0).attr("x2",h*i+e*i/4).attr("y2",4)}}firstUpdated(){new ResizeObserver((()=>{this.requestUpdate()})).observe(this)}updated(e){this.setAxis(e)}render(){return $t`
      <svg id="svg"></svg>
    `}}ht(Ht,"styles",St`

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
  `),ht(Ht,"properties",qt.properties),customElements.define("frc-table-axis",Ht);const Kt=[Ut,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-table-axis",elementConfig:qt})],Xt={dashboard:{topLevel:!1},properties:{axisId:{type:String,attribute:"axis-id"},scaleType:{type:String,attribute:"scale-type",defaultValue:"linear",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["linear","logarithmic"]}},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},label:{type:String,defaultValue:"Value"},tickValues:{type:Array,attribute:"tick-values",input:{type:"NumberArray"}},position:{type:String,defaultValue:"left",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["left","right"]}},hideGridLines:{type:Boolean,attribute:"hide-grid-lines"}}};class Yt extends xt{constructor(){super(),this.axisId="",this.scaleType="linear",this.min=-1,this.max=1,this.label="Value",this.tickValues=[],this.position="left",this.hideGridLines=!1}}ht(Yt,"properties",Xt.properties),ht(Yt,"styles",St`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-axis",Yt);var Gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-axis",elementConfig:Xt});const Jt={dashboard:{topLevel:!1},properties:{axisId:{type:String,attribute:"axis-id"},value:{type:Number,primary:!0},label:{type:String},color:{type:String,input:{type:"ColorPicker"}}}};class Qt extends xt{constructor(){super(),this.axisId="",this.value=0,this.label="",this.color=""}}ht(Qt,"properties",Jt.properties),ht(Qt,"styles",St`
    :host { 
      display: none;
    }
  `),customElements.define("frc-chart-data",Qt);var Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-chart-data",elementConfig:Jt});const ei={type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}},ti={responsive:!0,title:{display:!0,text:""},tooltips:{enabled:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{autoSkipPadding:10,padding:10}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:""},ticks:{min:-1,max:1},gridLines:{display:!0}}]}};const ii=["#e6194b","#3cb44b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#fabebe","#008080","#9a6324","#800000","#808000","#000075","#808080","#000000"];class si{constructor(e,t){this.valueCount=e,this.data=[],this.dataIds=[],this.dataLabels=[],this.dataColors=[],this.chart=t;for(let i=0;i<e;i++)this.dataIds.push(""),this.dataLabels.push(""),this.dataColors.push("");this.currentTime=0,this.trackedTime=30,this.timeStep=.1,this.initData()}initData(){this.data=[];let e=this.trackedTime/this.timeStep,t=[];for(let i=0;i<this.valueCount;i++)t.push(NaN);for(let i=0;i<e;i++)this.data.push({time:this.currentTime+i*this.timeStep-this.trackedTime,values:t})}updateChart(e){e.chart.data.labels=this.data.map((e=>e.time.toFixed(1)));const t=e.chart.data.datasets.map((e=>{const t=e._meta[Object.keys(e._meta)[0]].hidden;return"boolean"==typeof t?t:e.hidden})),i=e.chart.options.scales.yAxes.map((e=>e.id));e.chart.data.datasets.splice(0,e.chart.data.datasets.length),this.dataLabels.forEach(((s,r)=>{i.includes(this.dataIds[r])&&e.chart.data.datasets.push({yAxisID:this.dataIds[r],label:s,data:this.data.map((e=>e.values[r])),fill:!1,pointRadius:0,borderColor:this.dataColors[r],borderWidth:2,hidden:t[r]})})),e.updateChart()}addData(e){this.currentTime+=this.timeStep,this.data.push({time:this.currentTime,values:e}),this.data.shift()}setTrackedTime(e){if(e===this.trackedTime)return;this.trackedTime;const t=this.data;this.trackedTime=e,this.initData(),t.length>=this.data.length?this.data=t.slice(t.length-this.data.length):this.data=this.data.slice(0,this.data.length-t.length).concat(t)}setTimeStep(e){if(e===this.timeStep)return;const t=this.data;this.timeStep=e<.01?.01:e;const i=[],s=this.trackedTime/this.timeStep;for(let r=0;r<s;r++){const e=Math.round((t.length-1)/s*r);i.push({time:r*this.timeStep,values:t[e].values})}this.data=i}setId(e,t){this.dataIds[e]=t}setColor(e,t){this.dataColors[e]=t}setLabel(e,t){this.dataLabels[e]=t}}const ri={description:"A component used to graph data over time.",properties:{title:{type:String},xAxisLabel:{type:String,attribute:"x-axis-label",defaultValue:"Time (seconds)"},trackedTime:{type:Number,attribute:"tracked-time",defaultValue:30},timeStep:{type:Number,defaultValue:.1,attribute:"time-step"}},slots:[{name:"",allowedChildren:["frc-chart-data","frc-chart-axis"]}],demos:[{html:'\n      <frc-line-chart title="Line Chart">\n        <frc-chart-axis></frc-chart-axis>\n        <frc-chart-data label="Data" color="#00aa00"></frc-chart-data>\n      </frc-line-chart>\n    '}]};class ni extends xt{constructor(){super(),this.dataElements=[],this.axisElements=[],this.timeStepIntervalId=null,this.title="",this.xAxisLabel="Time (seconds)",this.trackedTime=30,this.timeStep=.1,this.plugins=[{beforeUpdate:(e,t)=>{e.options.title.text=this.title,e.options.scales.xAxes[0].scaleLabel.labelString=this.xAxisLabel;const i=e.options.scales.yAxes;for(let s=i.length;s<this.axisElements.length;s++)i.push(ei);for(let s=0;s<this.axisElements.length;s++)i[s].display=!0,i[s].type=this.axisElements[s].scaleType,i[s].id=this.axisElements[s].axisId,i[s].position=this.axisElements[s].position,i[s].scaleLabel.labelString=this.axisElements[s].label,i[s].ticks.min=this.axisElements[s].min,i[s].ticks.max=this.axisElements[s].max,0===this.axisElements[s].tickValues.length?i[s].afterBuildTicks=null:i[s].afterBuildTicks=e=>{e.ticks.splice(0,e.ticks.length);for(let t of this.axisElements[s].tickValues)e.ticks.push(t)},i[s].gridLines.display=!this.axisElements[s].hideGridLines;for(let s=this.axisElements.length;s<i.length;s++)i[s].display=!1}}],this.randomizedColors=function(e){for(var t,i,s=e.length;0!==s;)i=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[i],e[i]=t;return e}([...ii]),this.chartData=null}firstUpdated(){this.chartElement=this.shadowRoot.querySelector("#chart");const e=this.shadowRoot.querySelectorAll("slot");e.forEach((t=>{t.addEventListener("slotchange",(t=>{let i=[...e].reduce(((e,t)=>e.concat([...t.assignedElements()])),[]);this.axisElements=i.filter((e=>"FRC-CHART-AXIS"===e.tagName));for(let e=0;e<this.axisElements.length;e++){if(this.axisElements[e].axisId)continue;const t=this.axisElements.map((e=>e.axisId));for(let i=0;i<this.axisElements.length;i++){const s=`Axis ${i+1}`;if(!t.includes(s)){this.axisElements[e].axisId=s;break}}}this.dataElements=i.filter((e=>"FRC-CHART-DATA"===e.tagName)),this.dataElements.forEach(((e,t)=>{if(e.color||(e.color=this.randomizedColors[t]),!e.axisId){const t=this.axisElements.length>0?this.axisElements[0].axisId:"Axis 1";e.axisId=t}})),this.chartData=new si(this.dataElements.length),this.chartData.setTrackedTime(this.trackedTime),this.updateTimeStep()}))}))}updateChart(){this.chartData&&this.chartElement.chart&&(this.dataElements.forEach(((e,t)=>{this.chartData.setId(t,e.axisId),this.chartData.setColor(t,e.color),this.chartData.setLabel(t,e.label)})),this.chartData.addData(this.dataElements.map((e=>e.value))),this.chartData.updateChart(this.chartElement))}updateTimeStep(){const e=Math.max(.01,this.timeStep);this.chartData.setTimeStep(e),clearInterval(this.timeStepIntervalId),this.timeStepIntervalId=setInterval(this.updateChart.bind(this),parseInt(1e3*e))}updated(e){this.chartData&&(e.has("trackedTime")&&this.chartData.setTrackedTime(this.trackedTime),e.has("timeStep")&&this.updateTimeStep())}render(){return $t`
      <frc-base-chart id="chart" type="line" .data="${{labels:[],datasets:[]}}" .options="${ti}" .plugins="${this.plugins}">
      </frc-base-chart>
      <slot></slot>
    `}}ht(ni,"properties",ri.properties),ht(ni,"styles",St`
    :host { 
      display: inline-block;
      width: 450px;
      height: 400px;
    }

    slot {
      display: none;
    }
  `),customElements.define("frc-line-chart",ni);var ai=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-line-chart",elementConfig:ri}),oi=function(e,t,i,s){var r,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class li extends Et{static get styles(){return _t`
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
    `}constructor(){super(...arguments),this.updateChart=()=>{this.chart&&this.chart.update()}}firstUpdated(){const e=this.data||{},t=lt({responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0},this.options);if(this.chart)this.chart.type=this.type,this.chart.data=e,this.chart.options=t,this.chart.update();else{const i=this.shadowRoot.querySelector("canvas").getContext("2d");this.chart=new Mt.exports.Chart(i,{type:this.type,data:e,options:t,plugins:this.plugins})}this.chart.data=this.observe(this.chart.data);for(const i of Object.keys(this.chart.data))this.chart.data[i]=this.observe(this.chart.data[i]);this.chart.data.datasets=this.chart.data.datasets.map((e=>(e.data=this.observe(e.data),this.observe(e)))),window.addEventListener("resize",(()=>{this.chart&&this.chart.resize()}))}observe(e){const t=this.updateChart;return new Proxy(e,{set:(e,i,s)=>(e[i]=s,Promise.resolve().then(t),!0)})}render(){return Tt`
        <div class="chart-size">
          <canvas></canvas>
        </div>
      `}}oi([kt()],li.prototype,"type",void 0),oi([kt()],li.prototype,"data",void 0),oi([kt()],li.prototype,"options",void 0),customElements.get("frc-base-chart")||customElements.define("frc-base-chart",li);const di=[Gt,Zt,ai],hi=St`
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
`,ci={properties:{name:{type:String,defaultValue:"Command"},running:{type:Boolean,changeEvent:"toggle"},controllable:{type:Boolean},isParented:{type:Boolean,attribute:"is-parented"},label:{type:String}}};class ui extends Nt{onClick(){this.controllable&&(this.running=!this.running,this.dispatchEvent(new CustomEvent("toggle",{detail:{running:this.running},bubbles:!0,composed:!0})))}render(){return $t`
      <vaadin-button theme="${1==this.running?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label||this.name}
      </vaadin-button>
    `}}ht(ui,"properties",ci.properties),ht(ui,"styles",[hi,St`
      :host {
        height: 50px;
      }

      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),customElements.define("frc-robot-command",ui);var pi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-command",elementConfig:ci});const mi={properties:{default:{type:String},command:{type:String},hasCommand:{type:Boolean,attribute:"has-command"},hasDefault:{type:Boolean,attribute:"has-default"},label:{type:String},name:{type:String},hideName:{type:Boolean,attribute:"hide-name"}}};class gi extends Nt{renderValue(e,t){return t?$t`<span class="has-value">${e}</span>`:$t`<span class="no-value">None</span>`}render(){return $t`
      ${this.hideName?"":$t`
      <header>${this.label||this.name}</header>
      `}
      <div class="subsystem">
        <p>Default command: ${this.renderValue(this.default,this.hasDefault)}</p>
        <p>Current command: ${this.renderValue(this.command,this.hasCommand)}</p>
      </div>
    `}}ht(gi,"properties",mi.properties),ht(gi,"styles",St`
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
  `),customElements.define("frc-robot-subsystem",gi);const bi=[pi,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-robot-subsystem",elementConfig:mi})];class fi{constructor(e,t){this.svg=e,this.angle=null,this.setAngle(t),this.animationStartAngle=t,this.animationEndAngle=t,this.animationStartTime=0,this.animationTime=0,this.duration=1;const i=()=>{this.duration>this.animationTime&&(this.animationTime=Math.min((Date.now()-this.animationStartTime)/1e3,this.duration));const e=(e=>e*(2-e))(this.animationTime/this.duration);this.setAngle(this.animationStartAngle+e*(this.animationEndAngle-this.animationStartAngle)),window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}animate(e){this.animationStartTime=Date.now(),this.animationTime=0,this.animationStartAngle=this.angle,this.animationEndAngle=e}setAngle(e){this.angle=e,this.svg.style.setProperty("--deg",`${e}deg`)}setDuration(e){this.duration=e}}const yi={properties:{currentColor:{type:String,attribute:"current-color",primary:!0,input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]}},desiredColor:{type:String,attribute:"desired-color",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["","red","yellow","blue","green"]}},clockwise:{type:Boolean},duration:{type:Number,defaultValue:1}}};class vi extends xt{constructor(){super(),this.colors=["red","yellow","blue","green","red","yellow","blue","green"],this.positionIndex=3,this.animator=null,this.currentColor="",this.desiredColor="",this.clockwise=!1,this.duration=1}getRotation(){return 25-45*(this.positionIndex-3)}setPositionIndex(){const e=this.positionIndex%8;for(let t=1;t<4;t++){const i=(e+(this.clockwise?-t:t))%8;if(this.colors[i>=0?i:i+8]===this.currentColor){this.positionIndex=this.positionIndex+(this.clockwise?-t:t),this.animator.animate(this.getRotation());break}}}getCoordinatesForPercent(e){return[Math.cos(2*Math.PI*e),Math.sin(2*Math.PI*e)]}getPath(e){const[t,i]=this.getCoordinatesForPercent(.125*e),[s,r]=this.getCoordinatesForPercent(.125*(e+1));return[`M ${t} ${i}`,`A 1 1 0 0 1 ${s} ${r}`,"L 0 0"].join(" ")}updated(e){e.has("currentColor")&&this.colors.indexOf(this.currentColor)>=0&&this.setPositionIndex(),e.has("duration")&&this.animator.setDuration(Math.max(0,this.duration))}firstUpdated(){this.svg=this.shadowRoot.querySelector("svg"),this.animator=new fi(this.shadowRoot.querySelector("svg"),this.getRotation())}setDesiredColor(e){this.desiredColor=e}resized(){const{height:e}=this.getBoundingClientRect();this.style.setProperty("--control-panel-height",`${e}px`),this.requestUpdate()}render(){return $t`
      <div part="control-panel">
        ${Vt`
        <svg viewBox="-1 -1 2 2">
          ${this.colors.map(((e,t)=>Vt`
          <path class="color" fill="${e}" @click="${()=>this.setDesiredColor(e)}" d="${this.getPath(t)}">
          </path>
          `))}
        </svg>
        `}
      </div>
      <span part="indicator">
        <iron-icon icon="vaadin:caret-left"></iron-icon>
      </span>
    `}}ht(vi,"properties",yi.properties),ht(vi,"styles",St`
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
  `),customElements.define("frc-control-panel",vi);var wi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-control-panel",elementConfig:yi});function xi(e){return 180*e/Math.PI}function Si(e,t,i){return`<polygon \n            points="${e.x},${e.y} ${t.x},${t.y} ${i.x},${i.y}" />`}function $i(e,t,i,s,r){return`<path d="${function(e,t,i,s,r){var n=Ci(e,t,i,r),a=Ci(e,t,i,s),o=r-s<=180?"0":"1",l=r>s?1:0;return["M",n.x,n.y,"A",i,i,0,o,l,a.x,a.y].join(" ")}(e,t,i,s,r)}"/>`}function Ci(e,t,i,s){var r=s*Math.PI/180;return{x:e+i*Math.cos(r),y:t-i*Math.sin(r)}}function ki(e,t,i,s){return function(e,t,i,s){return`<line x1="${e}" y1="${t}" x2="${i}" y2="${s}" />`}(i,0,Math.cos(t)*e+i,Math.sin(t)*e)+function(e,t,i,s){const r=t/2,n=Math.cos(e),a=Math.sin(e);let o=Math.cos(e+Math.PI/2)*r,l=Math.sin(e+Math.PI/2)*r;return Si({x:n*s-o+i,y:a*s-l},{x:n*s+o+i,y:a*s+l},{x:n*(t+s)+i,y:a*(t+s)})}(t,s,i,e)}function Ei(e,t,i,s,r){if(t<0)throw new Error("Radius cannot be negative. Given: "+t);if(r<0)throw new Error("The size of the arrowhead cannot be negative. Given: "+r);return t===1/0?ki(i,e,s,r):function(e,t,i,s){const r=xi(i/t);return $i(s,0,t,xi(e),xi(e)-r)}(e,t,i,s)+function(e,t,i,s,r){const n=t/2,a=r/i-e,o=Math.sqrt(t*t+i*i),l=(r+t*Math.sign(r))/i-e,d=Math.cos(a),h=Math.sin(a),c={x:(i+n)*d+s,y:(i+n)*h},u={x:(i-n)*d+s,y:(i-n)*h},p={x:o*Math.cos(l)+s,y:o*Math.sin(l)};return Si(c,p,u)}(e,r,t,s,i)}function _i(e,t,i,s,r){return Ei(e,t,t*i,s,r)}function Mi(e,t,i){return Math.min(i,Math.max(e,t))}const Ti={properties:{leftMotorSpeed:{type:Number,attribute:"left-motor-speed"},rightMotorSpeed:{type:Number,attribute:"right-motor-speed"}}};class Ni extends xt{get clampedLeftMotorSpeed(){return Mi(this.leftMotorSpeed,-1,1)}get clampedRightMotorSpeed(){return Mi(this.rightMotorSpeed,-1,1)}constructor(){super(),this.leftMotorSpeed=0,this.rightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t){const i=this.shadowRoot.getElementById("svg").getBoundingClientRect(),s=.13*i.width,r=i.width-2*(s+20),n=i.height-40;if(Math.abs(e)<=.05&&Math.abs(t)<=.05)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*i.width);const a=Math.min(r,n)/2-8;if(Math.abs(e-t)<=.001){return`<g class="arrow">${ki(Math.abs(e*a),-Math.sign(e)*Math.PI/2,0,8)}</g>`}const o=Math.PI,l=(t-e)/2,d=(e+t)/2,h=d/l;let c;if(Math.abs(h)>=1){const e=-Math.sign(h),t=(e+1)*o/2;let i=Math.abs(h*a);c=Ei(t,i,e*d*a,e*i,8)}else{const i=Math.sign(e-t);if(0==h){c=_i(l<0?o:0,Math.max(e,t)*a,i*o,0,8)}else{let s=h<0?e:t,r=h<0?t:e,n=Math.abs(s)*a;c=_i(h<0?o:0,n,i*((r/s-(u=0))*(o-(p=.5))/(-1-u)+p),-h*n,8)}}var u,p;return`<g class="arrow">${c}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getLeftForegroundStyle(){return this.getForegroundStyle(this.clampedLeftMotorSpeed)}getRightForegroundStyle(){return this.getForegroundStyle(this.clampedRightMotorSpeed)}getForegroundStyle(e){const t=Mi(e,-1,1);return t>0?`\n        height: ${Math.abs(t)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(t)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e;const t=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*t.width}px, ${.5*t.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(){let e=this.drawMotionVector(this.clampedLeftMotorSpeed,this.clampedRightMotorSpeed);this.shadowRoot.getElementById("forceVector").innerHTML=e}render(){return $t`
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
    `}}ht(Ni,"properties",Ti.properties),ht(Ni,"styles",St`
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
  `),customElements.define("frc-differential-drivebase",Ni);var Vi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-differential-drivebase",elementConfig:Ti});const Ri={properties:{frontLeftMotorSpeed:{type:Number,attribute:"front-left-motor-speed"},frontRightMotorSpeed:{type:Number,attribute:"front-right-motor-speed"},rearLeftMotorSpeed:{type:Number,attribute:"rear-left-motor-speed"},rearRightMotorSpeed:{type:Number,attribute:"rear-right-motor-speed"}}};class Ii extends xt{constructor(){super(),pt(this,e),this.frontLeftMotorSpeed=0,this.frontRightMotorSpeed=0,this.rearLeftMotorSpeed=0,this.rearRightMotorSpeed=0;new ResizeObserver((()=>{this.resized()})).observe(this)}drawMotionVector(e,t,i,s){const r=this.shadowRoot.getElementById("svg").getBoundingClientRect(),n=.13*r.width,a=r.width-2*(n+20),o=r.height-40,l=Math.min(a,o)/2-16,d={x:(e-t-i+s)/4,y:(e+t+i+s)/4},h=(-e+t-i+s)/4,c=Math.hypot(d.x,d.y),u=Math.atan2(d.y,d.x);if(Math.abs(h)<=.01&&c<=.01)return function(e){const t=e/2;return`<g class="x">\n    <line \n      x1="${-t}"\n      y1="${-t}"\n      x2="${t}"\n      y2="${t}"\n    />\n   \n    <line \n      x1="${-t}"\n      y1="${t}"\n      x2="${t}"\n      y2="${-t}"\n    />\n  </g>`}(.2*r.width);let p="",m="",g="";return Math.abs(h)>.01&&(p=_i(0,l,-h*Math.PI,0,8),m=_i(Math.PI,l,-h*Math.PI,0,8)),c>.01&&(g=ki(c*l,-u,0,8)),`<g class="arrow">${p} ${m} ${g}</g>`}drawDrivetrain(){const e=this.shadowRoot.getElementById("svg").getBoundingClientRect(),t=.13*e.width,i=Math.min(.13*e.width,.15*e.height),s=20;return`\n      <rect \n        width="calc(100% - ${2*(t+s)}px)" \n        height="calc(100% - 40px)"\n        x="${t+s}" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="20px" \n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="20px"\n        y="calc(100% - ${2*i+20}px)"\n      />\n    `+`\n      <rect \n        width="${t}px" \n        height="${2*i}" \n        x="calc(100% - ${t+s}px)" \n        y="calc(100% - ${2*i+20}px)"\n      />\n    `}getFlForegroundStyle(){return this.getForegroundStyle(this.frontLeftMotorSpeed)}getFrForegroundStyle(){return this.getForegroundStyle(this.frontRightMotorSpeed)}getRlForegroundStyle(){return this.getForegroundStyle(this.rearLeftMotorSpeed)}getRrForegroundStyle(){return this.getForegroundStyle(this.rearRightMotorSpeed)}getForegroundStyle(i){const s=gt(this,e,t).call(this,i,-1,1);return s>0?`\n        height: ${Math.abs(s)/2*100}%;\n        top: auto;\n        bottom: 50%;\n      `:`\n        height: ${Math.abs(s)/2*100}%;\n        top: 50%;\n        bottom: auto;\n      `}firstUpdated(){let e=this.drawMotionVector(0,0,0,0);this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain(),this.shadowRoot.getElementById("forceVector").innerHTML=e}resized(){let i=this.drawMotionVector(gt(this,e,t).call(this,this.frontLeftMotorSpeed),gt(this,e,t).call(this,this.frontRightMotorSpeed),gt(this,e,t).call(this,this.rearLeftMotorSpeed),gt(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=i;const s=this.shadowRoot.getElementById("svg").getBoundingClientRect();this.shadowRoot.getElementById("forceVector").style.transform=`translate(${.5*s.width}px, ${.5*s.height}px)`,this.shadowRoot.getElementById("drivetrain").innerHTML=this.drawDrivetrain()}updated(i){super.updated(i);let s=this.drawMotionVector(gt(this,e,t).call(this,this.frontLeftMotorSpeed),gt(this,e,t).call(this,this.frontRightMotorSpeed),gt(this,e,t).call(this,this.rearLeftMotorSpeed),gt(this,e,t).call(this,this.rearRightMotorSpeed));this.shadowRoot.getElementById("forceVector").innerHTML=s}render(){return $t`
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
    `}}e=new WeakSet,t=function(e){return Math.min(1,Math.max(e,-1))},ht(Ii,"properties",Ri.properties),ht(Ii,"styles",[hi,St`
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
    `]),customElements.define("frc-mecanum-drivebase",Ii);const Li=[Vi,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-mecanum-drivebase",elementConfig:Ri})],Pi={km:1e3,m:1,cm:.01,mm:.001,mi:1609.34,yd:.9144,ft:.3048,in:.0254},zi={km:"km",m:"m",meters:"m",cm:"cm",centimeters:"cm",mm:"mm",mi:"mi",miles:"mi",yd:"yd",yards:"yards",ft:"ft",feet:"ft",foot:"ft",in:"in",inches:"in"},Ai=(e,t,i)=>(void 0===Pi[t=zi[t]]&&(t="ft"),void 0===Pi[i=zi[i]]&&(i="ft"),e*Pi[t]/Pi[i]),Fi={dashboard:{topLevel:!1,layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}},properties:{x:{type:Number},y:{type:Number},rot:{type:Number},width:{type:Number,defaultValue:1},height:{type:Number,defaultValue:1},unit:{type:String,defaultValue:"inherit",input:{type:"StringDropdown",getOptions:()=>Object.keys(Pi),allowCustomValues:!1}},image:{type:String},draw:{type:String}},slots:[{name:"",allowedChildren:["frc-field-object","frc-field-camera"]}]};class Oi extends xt{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.width=1,this.height=1,this.unit="inherit",this.image="",this.draw="",this.drawFunction=new Function}updated(e){if(e.has("image")){this.shadowRoot.querySelector("[part=field-object]").style.setProperty("--field-object-image",`url(${this.image}`)}e.has("draw")&&(this.drawFunction=new Function(this.draw))}resized(){this.requestUpdate()}render(){return $t`   
      <div part="field-object">
        <slot></slot>
      </div>
    `}renderDrawing(e){try{this.drawFunction.bind(dt(lt({},e),{width:this.width,height:this.height,x:this.x,y:this.y,rot:this.rot,image:this.image,unit:this.unit}))()}catch(t){console.error("Error drawing element:",t)}}}ht(Oi,"__IS_FIELD_OBJECT__",!0),ht(Oi,"properties",Fi.properties),ht(Oi,"styles",St`
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
  `),customElements.define("frc-field-object",Oi);var Di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-object",elementConfig:Fi,default:Oi});const Bi={dashboard:{topLevel:!1,layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}},properties:{x:{type:Number},y:{type:Number},rot:{type:Number},unit:{type:String,defaultValue:"inherit"},image:{type:String},fov:{type:Number,defaultValue:60},range:{type:Number,defaultValue:3},seesTarget:{type:Boolean,attribute:"sees-target"},targetDistance:{type:Number,attribute:"target-distance"}}};class ji extends Oi{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.unit="inherit",this.image="",this.fov=60,this.range=3,this.seesTarget=!1,this.targetDistance=0}renderDrawing({ctx:e,scalingFactor:t}){const i=this.targetDistance<0?this.range:this.targetDistance,s=this.seesTarget?i:this.range;if(this.fov>0){e.save(),e.lineWidth=1/t,e.fillStyle=this.seesTarget?"rgba(0, 255, 0, .4)":"rgba(255, 0, 0, .4)",e.moveTo(0,0);const i=s*Math.tan(this.fov/2*Math.PI/180);e.lineTo(-i,s),e.lineTo(i,s),e.fill(),e.restore()}else e.beginPath(),e.lineWidth=1/t,e.strokeStyle=this.seesTarget?"rgb(0, 255, 0)":"rgb(255, 0, 0)",e.moveTo(0,0),e.lineTo(0,s),e.stroke()}}ht(ji,"properties",Bi.properties),customElements.define("frc-field-camera",ji);var Wi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-camera",elementConfig:Bi});const Ui={dashboard:{topLevel:!1,layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}},properties:{width:{type:Number,defaultValue:1},height:{type:Number,defaultValue:1},unit:{type:String,defaultValue:"m",input:{type:"StringDropdown",getOptions:()=>Object.keys(Pi),allowCustomValues:!1}},image:{type:String},color:{type:String,input:{type:"ColorPicker"},defaultValue:"#0000ff"},pose:{type:Array,primary:!0},width:{type:Number,defaultValue:.6},height:{type:Number,defaultValue:.9}},slots:[{name:"",allowedChildren:["frc-field-camera","frc-field-object"]}]};class qi extends Oi{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.width=1,this.height=1,this.unit="inherit",this.image="",this.color="#0000ff",this.pose=[0,0,0],this.width=.6,this.height=.9,this.unit="m"}updated(e){if(super.updated(e),e.has("pose")&&this.pose instanceof Array){const[e=0,t=0,i=0]=this.pose;this.x=e,this.y=t,this.rot=i}}renderDrawing({bottomCtx:e,scalingFactor:t}){e.fillStyle=this.color,e.moveTo(0,0),e.fillRect(-this.width/2,-this.height/2,this.width,this.height),e.beginPath(),e.strokeStyle="black",e.lineWidth=2/t,e.moveTo(0,0),e.rect(-this.width/2,-this.height/2,this.width,this.height),e.stroke();const i=Math.min(.17*this.width,.19*this.height),s=i,r=.1*this.height;e.beginPath(),e.fillStyle="black",e.moveTo(0,0),e.fillRect(-this.width/2-s/2,this.height/2-2*i-r,s,2*i),e.fillRect(this.width/2-s/2,this.height/2-2*i-r,s,2*i),e.fillRect(-this.width/2-s/2,-this.height/2+r,s,2*i),e.fillRect(this.width/2-s/2,-this.height/2+r,s,2*i)}}ht(qi,"properties",Ui.properties),customElements.define("frc-field-robot",qi);var Hi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-robot",elementConfig:Ui});function Ki(e,t){const i=[];for(let s=0;s<e.length/t;s++)i.push(e.slice(t*s,t*(s+1)));return i}function Xi(e){var t=new ArrayBuffer(8),i=new DataView(t);return e.forEach((function(e,t){i.setUint8(t,e)})),i.getFloat64(0)}function Yi(e){const t=e instanceof Uint8Array?function(e){return Ki(e,8).map(Xi)}(e):e;return Ki(t,3)}const Gi={dashboard:{topLevel:!1,layout:{resizable:{horizontal:!1,vertical:!1},movable:!1}},properties:{data:{type:Object,primary:!0,attribute:!1},color:{type:String,input:{type:"ColorPicker"},defaultValue:"#FFA500"}}};class Ji extends Oi{constructor(){super(),this.x=0,this.y=0,this.rot=0,this.unit="m",this.data=[],this.color="#FFA500",this._poses=[]}updated(e){super.updated(e),e.has("data")&&(this._poses=Yi(this.data))}renderDrawing({bottomCtx:e,scalingFactor:t}){var i,s;if(e.lineWidth=4/t,e.strokeStyle=this.color,e.globalAlpha=.5,this._poses.length<2)return;const r=null!=(i=this._poses.at(0))?i:[0,0,0],n=null!=(s=this._poses.at(-1))?s:[0,0,0];for(let a=0;a<this._poses.length-1;a++){const[t,i]=this._poses[a],[s,r]=this._poses[a+1];e.moveTo(-i,t),e.lineTo(-r,s)}e.stroke(),this.drawArrow(e,r[0],-r[1],r[2],t),this.drawArrow(e,n[0],-n[1],n[2],t)}drawArrow(e,t,i,s,r){e.save(),e.translate(i,t),e.rotate(s*Math.PI/180),e.fillStyle=this.color,e.moveTo(0,0),e.lineTo(-7/r,0),e.lineTo(0,12/r),e.lineTo(7/r,0),e.fill(),e.restore()}}ht(Ji,"properties",dt(lt({},Gi.properties),{_poses:{state:!0}})),customElements.define("frc-field-trajectory",Ji);var Qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field-trajectory",elementConfig:Gi}),Zi=[{game:"Rapid React","field-image":"../static/field-images/2022-field.png","field-corners":{"top-left":[74,50],"bottom-right":[1774,900]},"field-size":[54,27],"field-unit":"foot"},{game:"Infinite Recharge","field-image":"../static/field-images/2020-field.png","field-corners":{"top-left":[96,25],"bottom-right":[1040,514]},"field-size":[52.4375,26.9375],"field-unit":"foot"},{game:"Destination: Deep Space","field-image":"../static/field-images/2019-field.jpg","field-corners":{"top-left":[217,40],"bottom-right":[1372,615]},"field-size":[54,27],"field-unit":"foot"},{game:"FIRST Power Up","field-image":"../static/field-images/2018-field.jpg","field-corners":{"top-left":[125,20],"bottom-right":[827,370]},"field-size":[54,27],"field-unit":"feet"},{game:"Barrel Racing Path","field-image":"../static/field-images/2021-barrel.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Bounce Path","field-image":"../static/field-images/2021-bounce.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Galactic Search A","field-image":"../static/field-images/2021-galacticsearcha.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Galactic Search B","field-image":"../static/field-images/2021-galacticsearchb.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"},{game:"Slalom Path","field-image":"../static/field-images/2021-slalom.png","field-corners":{"top-left":[20,20],"bottom-right":[780,400]},"field-size":[30,15],"field-unit":"feet"}];const es={properties:{game:{type:String,defaultValue:"Rapid React",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>Zi.map((e=>e.game)).concat("Custom")}},width:{type:Number,defaultValue:54,input:{isDisabled:({game:e})=>"Custom"!==e}},height:{type:Number,defaultValue:27,input:{isDisabled:({game:e})=>"Custom"!==e}},unit:{type:String,defaultValue:"ft",input:{type:"StringDropdown",getOptions:()=>Object.keys(Pi),allowCustomValues:!1,isDisabled:({game:e})=>"Custom"!==e}},image:{type:String,input:{type:"StringDropdown",defaultValue:Zi[0]["field-image"],enableUpload:!0,getOptions:()=>Zi.map((e=>e["field-image"])),isDisabled:({game:e})=>"Custom"!==e}},topLeftFieldCornerX:{type:Number,attribute:"top-left-field-corner-x",input:{isDisabled:({game:e})=>"Custom"!==e}},topLeftFieldCornerY:{type:Number,attribute:"top-left-field-corner-y",input:{isDisabled:({game:e})=>"Custom"!==e}},bottomRightFieldCornerX:{type:Number,attribute:"bottom-right-field-corner-x",input:{isDisabled:({game:e})=>"Custom"!==e}},bottomRightFieldCornerY:{type:Number,attribute:"bottom-right-field-corner-y",input:{isDisabled:({game:e})=>"Custom"!==e}},gridSize:{type:Number,attribute:"grid-size",defaultValue:1},showGrid:{type:Boolean,attribute:"show-grid"},swapAxes:{type:Boolean,attribute:"swap-axes"}},slots:[{name:"",allowedChildren:["frc-field-camera","frc-field-robot","frc-field-trajectory","frc-field-object"]}],demos:[{html:'\n      <frc-field>\n        <frc-field-robot source-key="/SmartDashboard/Field/Robot"></frc-field-robot>\n        <frc-field-trajectory source-key="/SmartDashboard/Field/traj"></frc-field-trajectory>\n      </frc-field>\n    '}]};class ts extends xt{constructor(){super(),this.objectElements=[],this.imageObjects={},this.fullFieldImageSize=null,this.game="Rapid React",this._width=54,this._height=27,this._unit="ft",this._image=Zi[0]["field-image"],this._topLeftFieldCornerX=0,this._topLeftFieldCornerY=0,this._bottomRightFieldCornerX=0,this._bottomRightFieldCornerY=0,this.gridSize=1,this.showGrid=!1,this.swapAxes=!1}get width(){if("Custom"===this.game)return this._width;const e=Zi.find((e=>e.game===this.game));return e?e["field-size"][0]:this._width}set width(e){const t=this._width;this._width=e,this.requestUpdate("width",t)}get height(){if("Custom"===this.game)return this._height;const e=Zi.find((e=>e.game===this.game));return e?e["field-size"][1]:this._height}set height(e){const t=this._height;this._height=e,this.requestUpdate("height",t)}get unit(){if("Custom"===this.game)return zi[this._unit];const e=Zi.find((e=>e.game===this.game));return e?zi[e["field-unit"]]:zi[this._unit]}set unit(e){const t=this._unit;this._unit=e,this.requestUpdate("unit",t)}get image(){if("Custom"===this.game)return this._image;const e=Zi.find((e=>e.game===this.game));return e?e["field-image"]:this._image}set image(e){const t=this._image;this._image=e,this.requestUpdate("image",t)}get topLeftFieldCornerX(){if("Custom"===this.game)return this._topLeftFieldCornerX;const e=Zi.find((e=>e.game===this.game));return e?e["field-corners"]["top-left"][0]:this._topLeftFieldCornerX}set topLeftFieldCornerX(e){const t=this._topLeftFieldCornerX;this._topLeftFieldCornerX=e,this.requestUpdate("topLeftFieldCornerX",t)}get topLeftFieldCornerY(){if("Custom"===this.game)return this._topLeftFieldCornerY;const e=Zi.find((e=>e.game===this.game));return e?e["field-corners"]["top-left"][1]:this._topLeftFieldCornerY}set topLeftFieldCornerY(e){const t=this._topLeftFieldCornerY;this._topLeftFieldCornerY=e,this.requestUpdate("topLeftFieldCornerY",t)}get bottomRightFieldCornerX(){if("Custom"===this.game)return this._bottomRightFieldCornerX;const e=Zi.find((e=>e.game===this.game));return e?e["field-corners"]["bottom-right"][0]:this._bottomRightFieldCornerX}set bottomRightFieldCornerX(e){const t=this._bottomRightFieldCornerX;this._bottomRightFieldCornerX=e,this.requestUpdate("bottomRightFieldCornerX",t)}get bottomRightFieldCornerY(){if("Custom"===this.game)return this._bottomRightFieldCornerY;const e=Zi.find((e=>e.game===this.game));return e?e["field-corners"]["bottom-right"][1]:this._bottomRightFieldCornerY}set bottomRightFieldCornerY(e){const t=this._bottomRightFieldCornerY;this._bottomRightFieldCornerY=e,this.requestUpdate("bottomRightFieldCornerY",t)}updated(e){if((e.has("width")||e.has("height"))&&(this.resizeField(),this.requestUpdate()),e.has("image")||e.has("game")){if(this.shadowRoot.querySelector("[part=field-image]").src=this.image,void 0===this.imageObjects[this.image]){const e=new Image,t={src:this.image,width:0,height:0,loaded:!1};e.onload=()=>{t.loaded=!0,t.width=e.width,t.height=e.height,this.resizeField(),this.requestUpdate()},this.imageObjects[this.image]=t,e.src=this.image}this.resizeField(),this.requestUpdate()}this.setPlayingFieldWidthStyles()}setPlayingFieldWidthStyles(){if(this.field){const e=this.getPlayingFieldImageRect();this.field.style.setProperty("--playing-field-width",`${e.width}px`),this.field.style.setProperty("--playing-field-height",`${e.height}px`),this.field.style.setProperty("--playing-field-left",e.left-1+"px"),this.field.style.setProperty("--playing-field-top",e.top-1+"px")}}setFieldPose(e){const t={transformations:[],x:0,y:0,width:this.width,height:this.height,rotation:0,isField:!0,unit:this.unit};[...this.children].forEach((i=>{i.constructor.__IS_FIELD_OBJECT__&&(this.setObjectPose(i,e,t),this.setDrawingPose(i,e,t))}))}setObjectPose(e,t,i){const{toPx:s}=t,r=e.rot,n=void 0!==Pi[e.unit]?e.unit:i.unit,a=Ai(e.width,n,this.unit),o=Ai(e.height,n,this.unit),l=Ai(e.x,n,this.unit),d=Ai(e.y,n,this.unit);e.style.width=`${s(a)}px`,e.style.height=`${s(o)}px`;const h=i.isField?i.height-d-o/2:-d+i.height/2-o/2,c=`${s(i.isField?l-a/2:l-a/2+i.width/2)+(i.isField?t.xOffset:0)}px`,u=`${s(h)+(i.isField?t.yOffset:0)}px`,p=`rotate(${-r+(i.isField?90:0)}deg)`;e.style.transform=`translate(${c}, ${u}) ${p}`;let m=i.transformations;m=i.isField?m.concat([{type:"translation",x:l,y:this.height-d},{type:"rotation",rotation:90-r}]):m.concat([{type:"translation",x:l,y:-d},{type:"rotation",rotation:-r}]);const g={transformations:m,x:l,y:d,width:a,height:o,rotation:r,unit:n};[...e.children].forEach((e=>{e.constructor.__IS_FIELD_OBJECT__&&(this.setObjectPose(e,t,g),this.setDrawingPose(e,t,g))}))}setDrawingPose(e,t,i){const{ctx:s,canvas:r,bottomCtx:n,bottomCanvas:a,rect:o}=t,l=e.rot,d=void 0!==Pi[e.unit]?e.unit:i.unit,h=Ai(e.x,d,this.unit),c=Ai(e.y,d,this.unit);s.save(),n.save(),s.translate(2*t.xOffset,2*t.yOffset),n.translate(2*t.xOffset,2*t.yOffset);const u=2*o.width/this.width;s.scale(u,u),n.scale(u,u);let p=[...i.transformations];p=0===p.length?p.concat([{type:"translation",x:h,y:i.height-c},{type:"rotation",rotation:90-l}]):p.concat([{type:"translation",x:h,y:-c},{type:"rotation",rotation:-l}]),p.forEach((({type:e,x:t,y:i,rotation:r})=>{"translation"===e?(s.translate(t,i),n.translate(t,i)):(s.rotate(r*Math.PI/180),n.rotate(r*Math.PI/180))})),s.scale(1,-1),n.scale(1,-1);const m=Ai(1,d,this.unit);s.scale(m,m),n.scale(m,m),s.beginPath(),n.beginPath(),e.renderDrawing({canvas:r,ctx:s,bottomCanvas:a,bottomCtx:n,scalingFactor:m*u/2}),s.restore(),n.restore()}firstUpdated(){this.field=this.shadowRoot.querySelector("[part=field]");const e=this.field,t=this.shadowRoot.querySelector("[part=top-canvas]"),i=t.getContext("2d"),s=this.shadowRoot.querySelector("[part=bottom-canvas]"),r=s.getContext("2d"),n=()=>{i.clearRect(0,0,t.width,t.height),i.beginPath(),r.clearRect(0,0,s.width,s.height),r.beginPath(),e.getBoundingClientRect();const a=this.getPlayingFieldImageRect(),o=a.left,l=a.top;this.setFieldPose({canvas:t,ctx:i,bottomCanvas:s,bottomCtx:r,rect:a,toPx:e=>e*a.width/this.width,toLength:e=>e*this.width/a.width,xOffset:o,yOffset:l}),window.requestAnimationFrame(n)};window.requestAnimationFrame(n);new ResizeObserver((()=>this.resized())).observe(this)}getImageObject(e){return this.imageObjects[e]||{src:e,width:0,height:0,loaded:!1}}getPlayingFieldDimensions(){const e=this.getImageObject(this.image),t={x1:0,y1:0,x2:0,y2:0};return e.loaded?(t.x1=this.topLeftFieldCornerX||0,t.y1=this.topLeftFieldCornerY||0,t.x2=Math.min(this.bottomRightFieldCornerX||e.width,e.width),t.y2=Math.min(this.bottomRightFieldCornerY||e.height,e.height)):(t.x1=this.topLeftFieldCornerX||0,t.y1=this.topLeftFieldCornerY||0,t.x2=this.bottomRightFieldCornerX||this.width,t.y2=t.y1+(t.x2-t.x1)*this.height/this.width),t}getPlayingFieldImageRect(){if(!this.fullFieldImageSize)return{left:0,right:0,top:0,bottom:0,width:0,height:0};const e=this.getImageObject(this.image),t=this.getPlayingFieldDimensions(),i=e.loaded?e.width:t.x2,s=(e.loaded?e.height:t.y2,this.fullFieldImageSize.width/i),r=t.x1*s,n=t.x2*s,a=t.y1*s,o=t.y2*s;return{left:r,right:n,top:a,bottom:o,width:n-r,height:o-a}}resizeField(){const e=this.shadowRoot.querySelector("[part=field]"),t=this.getImageObject(this.image),i=this.getBoundingClientRect(),s=this.getPlayingFieldDimensions();let r=t.loaded?t.width:s.x2,n=t.loaded?t.height:s.y2;const a=r?n/r*i.width:0;if(a<=i.height)this.fullFieldImageSize={width:i.width,height:a};else{const e=n?r/n*i.height:0;this.fullFieldImageSize={width:e,height:i.height}}e.style.setProperty("--field-width",`${this.fullFieldImageSize.width}px`),e.style.setProperty("--field-height",`${this.fullFieldImageSize.height}px`)}resized(){this.resizeField(),this.requestUpdate()}render(){this.setPlayingFieldWidthStyles();const e=this.field?parseFloat(this.field.style.getPropertyValue("--playing-field-width")||0):0,{width:t,height:i}=this.field?this.field.getBoundingClientRect():{width:0,height:0},s=this.gridSize/this.width*e;return $t`   
      <div part="field">
        <img part="field-image" />
        <div part="playing-field-area">
          ${this.showGrid&&this.gridSize>0?$t`
          <div part="grid">
            ${Vt`
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
    `}}ht(ts,"properties",es.properties),ht(ts,"styles",St`
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

    [part=field-image] {
      position: absolute;
      width: 100%;
      height: 100%;
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
  `),customElements.define("frc-field",ts);const is=[Di,Wi,Hi,Qi,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-field",elementConfig:es})];window.getPoses=Yi;const ss={properties:{text:{type:String,primary:!0}},demos:[{html:'<frc-label text="label"></frc-label>'}]};class rs extends xt{constructor(){super(),this.text=""}render(){return $t`${this.text}`}}ht(rs,"properties",ss.properties),ht(rs,"styles",[hi,St`
      :host {
        display: inline;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        margin: 0;
        padding: 0;
      }
    `]),customElements.define("frc-label",rs);var ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-label",elementConfig:ss});const as={properties:{value:{type:Number,primary:!0},precision:{type:Number,defaultValue:2}}};class os extends xt{constructor(){super(),this.value=0,this.precision=2}render(){const e=Math.max(0,this.precision),t=this.value.toFixed(e);return $t`${t}`}}ht(os,"properties",as.properties),ht(os,"styles",[hi,St`
      :host {
        display: inline;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        margin: 0;
        padding: 0;
      }
    `]),customElements.define("frc-number-label",os);const ls=[ns,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-label",elementConfig:as})],ds={color:"#fff",name:"INFO",level:1},hs={color:"#fff",name:"DEBUG",level:0},cs={color:"#FF3E3E",name:"ERROR",level:4},us={color:"#FFC53E",name:"WARNING",level:3},ps={color:"#3EFF45",name:"SUCCESS",level:2},ms={name:"Html Logger",enabled:!0,maxLogCount:1e3,loggingFormat:"[MESSAGE]",argumentsSeparator:" ",utcTime:!1,level:0};class gs{constructor(e,t=document.body){this.options=function(e){return[].slice.call(arguments,1).forEach((function(t){for(var i in t)e[i]=t[i]})),e}({},ms,e||{}),this.parent=t,this.linesCount=0,this.$={},this.initialized=!1}init(){if(this.initialized)return;if(!(document&&document.createElement&&document.body&&document.body.appendChild))throw new Error("HtmlLogger not initialized");this.$.container=document.createElement("div");this.$.container.setAttribute("style","width:100%; height: 100%;\n\t\t\t\t\tmargin:0;\n\t\t\t\t\tleft:0;\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\t\t\toverflow:auto;\n\t\t\t\t\tpadding: 5px 7px;\n    \t\t\tbox-sizing: border-box;"),this.$.log=document.createElement("div");const e=document.createElement("span");e.style.color="#afa",e.style.fontWeight="bold";const t=`===== ${this.options.name} - Logger started at ${this.options.utcTime?(new Date).toUTCString():new Date} =====`;e.appendChild(document.createTextNode(t));const i=document.createElement("div");i.appendChild(e),i.appendChild(document.createElement("br")),i.appendChild(document.createElement("br")),this.$.container.appendChild(i),this.$.container.appendChild(this.$.log),this.parent.appendChild(this.$.container),this.initialized=!0}setLevel(e){this.options.level=e}setEnable(e=!0){this.initialized&&(this.options.enabled=e,this.$.log.style.color=e?"#fff":"#444")}clean(){if(this.initialized){for(;this.$.log.firstChild;)this.$.log.removeChild(this.$.log.firstChild);this.linesCount=0}}print(e,t=ds.color,i=ds.name){if(!this.initialized||!this.options.enabled)return;const s=this.$.container.scrollTop>this.$.container.scrollHeight-this.$.container.clientHeight-5;const r=(e.length?e:"[empty]").split(/\r\n|\r|\n/);for(let a=0;a<r.length;a++){let e=document.createElement("div");e.setAttribute("style","color:#999;float:left;");let o=this._getTime();e.appendChild(document.createTextNode(`${o} `));let l=this.options.loggingFormat.replace("[LEVEL]",i).replace("[MESSAGE]",r[a]),d=document.createElement("div");d.setAttribute("style",`word-wrap:break-word;margin-left:6.0em;color: ${t}`),d.appendChild(document.createTextNode(l));let h=document.createElement("div");h.setAttribute("style","clear:both;");var n=document.createElement("div");for(n.appendChild(e),n.appendChild(d),n.appendChild(h),this.$.log.appendChild(n),this.linesCount++;this.linesCount>this.options.maxLogCount;)this.$.log.childNodes[0].remove(),this.linesCount--;s&&(this.$.container.scrollTop=this.$.container.scrollHeight)}}info(){this.options.level<=ds.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator))}debug(){this.options.level<=hs.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),hs.color,hs.name)}warning(){this.options.level<=us.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),us.color,us.name)}success(){this.options.level<=ps.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),ps.color,ps.name)}error(){this.options.level<=cs.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),cs.color,cs.name)}_getTime(){return(this.options.utcTime?(new Date).toUTCString():(new Date).toString()).match(/([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/)[0]}_determineString(e){if(void 0===e)return"undefined";if(null===e)return"null";if(e instanceof Array)return JSON.stringify(e);switch(typeof e){default:case"object":return`${e.constructor?e.constructor.name:e.toString()} -> ${JSON.stringify(e)}`;case"function":return e.name||"[function]";case"number":case"string":case"boolean":return e}}}const bs={properties:{title:{type:String,defaultValue:"Robot Logger"},maxLogCount:{type:Number,attribute:"max-log-count",defaultValue:1e3},debug:{type:String},info:{type:String,primary:!0},success:{type:String},warning:{type:String},error:{type:String},level:{type:String,defaultValue:"info",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["debug","info","success","warning","error"]}},disabled:{type:Boolean}}};class fs extends xt{constructor(){super(),this.levels=["debug","info","success","warning","error"],this.logger=null,this.title="Robot Logger",this.maxLogCount=1e3,this.info="",this.debug="",this.warning="",this.success="",this.error="",this.level="info",this.disabled=!1}firstUpdated(){const e=this.shadowRoot.querySelector("[part=logger]");this.logger=new gs({name:this.title,maxLogCount:Math.max(0,this.maxLogCount),level:this.levels.indexOf(this.level),enabled:!this.disabled},e),this.logger.init(!0)}updated(e){this.levels.forEach((t=>{e.has(t)&&this[t]&&(this.logger[t](this[t]),this[t]="")})),e.has("maxLogCount")&&(this.logger.options.maxLogCount=Math.max(0,this.maxLogCount)),e.has("level")&&this.logger.setLevel(this.levels.indexOf(this.level)),e.has("disabled")&&this.logger.setEnable(!this.disabled)}render(){return $t`
      <div part="logger"></div>
    `}}ht(fs,"properties",bs.properties),ht(fs,"styles",St`
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
  `),customElements.define("frc-logger",fs);var ys=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-logger",elementConfig:bs});const vs={properties:{x:{type:Number},y:{type:Number},z:{type:Number},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class ws extends xt{constructor(){super(),this.x=0,this.y=0,this.z=0,this.max=1,this.min=-1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="g"}renderAccelerometer(e,t){return $t`
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
    `}render(){return $t`
      ${this.renderAccelerometer("x",0)}
      ${this.renderAccelerometer("y",0)}
      ${this.renderAccelerometer("z",this.numTickMarks)}
    `}}ht(ws,"properties",vs.properties),ht(ws,"styles",St`
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
  `),customElements.define("frc-3-axis-accelerometer",ws);var xs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-3-axis-accelerometer",elementConfig:vs});const Ss={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String}}};class $s extends xt{constructor(){super(),this.value=0,this.max=1,this.min=-1,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit=""}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max);return $t`
      <frc-bar value="${this.value}" min="${e}" max="${t}" center="${this.center}" part="bar">
        ${this.hideText?"":$t`
        ${this.value.toFixed(function(e,t,i){return Math.min(i,Math.max(e,t))}(this.precision,0,100))}
        ${this.unit}
        `}
      </frc-bar>
      ${this.numTickMarks>0?$t`
      <frc-table-axis part="axis" ticks="${this.numTickMarks}" .range="${[e,t]}" unit="${this.unit}"></frc-table-axis>
      `:""}
    `}}ht($s,"properties",Ss.properties),ht($s,"styles",[hi,St`
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
    `]),customElements.define("frc-number-bar",$s);var Cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-bar",elementConfig:Ss,default:$s});const ks={properties:{value:{type:Number,primary:!0},max:{type:Number,defaultValue:1},min:{type:Number,defaultValue:-1},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"g"}}};class Es extends $s{constructor(){super(),this.unit="g"}}ht(Es,"properties",ks.properties),customElements.define("frc-accelerometer",Es);var _s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-accelerometer",elementConfig:ks});const Ms=["Unknown","Practice","Qualification","Elimination"],Ts={properties:{matchType:{type:Number,attribute:"match-type"},matchNumber:{type:Number,attribute:"match-number"},eventName:{type:String,attribute:"event-name"},fmsControlData:{type:Number,attribute:"fms-control-data"}}};class Ns extends xt{constructor(){super(),this.matchType=0,this.matchNumber=0,this.eventName="",this.fmsControlData=0}getRobotState(){return this.isEnabled()?this.isTest()?"Test":this.isAuto()?"Autonomous":"Teleoperated":"Disabled"}isEnabled(){return!!(1&this.fmsControlData)}isAuto(){return!!(2&this.fmsControlData)}isTest(){return!!(4&this.fmsControlData)}isEmergencyStopped(){return!!(8&this.fmsControlData)}isFmsAttached(){return!!(16&this.fmsControlData)}isDsAttached(){return!!(32&this.fmsControlData)}render(){return $t`
      <p>
        <strong>
          <span>${this.eventName}</span>
          <span>${Ms[this.matchType]}</span>
          <span>match ${this.matchNumber}</span>
        </strong>
      </p>
      
      <p style="margin-bottom: 7px; font-weight: normal">
        <span style="margin-right: 5px;">
          ${this.isFmsAttached()?$t`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            FMS connected
          </span>
          `:$t`
          <span>
            <iron-icon icon="vaadin:close-small"></iron-icon>
            FMS disconnected
          </span>
          `}
        </span>
        <span>
          ${this.isDsAttached()?$t`
          <span>
            <iron-icon icon="vaadin:check"></iron-icon>
            DriverStation connected
          </span>
          `:$t`
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
    `}}ht(Ns,"properties",Ts.properties),ht(Ns,"styles",St`
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
  `),customElements.define("frc-basic-fms-info",Ns);var Vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-basic-fms-info",elementConfig:Ts});const Rs={properties:{value:{type:Boolean,primary:!0},trueColor:{type:String,input:{type:"ColorPicker"},defaultValue:"#00ff00",attribute:"true-color"},falseColor:{type:String,input:{type:"ColorPicker"},defaultValue:"#ff0000",attribute:"false-color"},label:{type:String}}};class Is extends xt{constructor(){super(),this.value=!1,this.trueColor="#00ff00",this.falseColor="#ff0000",this.label=""}updated(){const e=this.shadowRoot.querySelector("[part=box]"),t=this.value?this.trueColor:this.falseColor;e.style.setProperty("--box-color",t)}render(){return $t`
      <div part="box">
        ${this.label}
      </div>
    `}}ht(Is,"properties",Rs.properties),ht(Is,"styles",St`
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
  `),customElements.define("frc-boolean-box",Is);var Ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-boolean-box",elementConfig:Rs});let Ps=0;const zs={properties:{fps:{type:Number,defaultValue:-1},width:{type:Number,defaultValue:-1},height:{type:Number,defaultValue:-1},compression:{type:Number,defaultValue:-1},hideCrosshair:{type:Boolean,attribute:"hide-crosshair"},crosshairColor:{type:String,input:{type:"ColorPicker"},attribute:"crosshair-color",defaultValue:"#ffffff"},crosshairWidth:{type:Number,attribute:"crosshair-width",defaultValue:2},streams:{type:Array},waitImage:{type:String,input:{type:"Upload"},attribute:"wait-image"}}};class As extends xt{constructor(){super(),this.url="",this.loaded=!1,this.streamsLoadingIds=[],this.fps=-1,this.width=-1,this.height=-1,this.compression=-1,this.hideCrosshair=!1,this.crosshairColor="#ffffff",this.crosshairWidth=2,this.streams=[],this.waitImage=""}getStreams(){let e=[...new Set(this.streams)].map((e=>e.replace("mjpg:","")));return[...e].forEach((t=>{const i=new URL(t);e.push(`${i.protocol}//127.0.0.1:${i.port}${i.pathname}${i.search}`)})),[...new Set(e)]}isStreaming(){return this.url}firstUpdated(){super.firstUpdated(),this.cameraFeedNode=this.shadowRoot.querySelector("[part=camera-feed]"),setInterval((()=>{this.isConnected&&(this.isStreaming()||this.getStreams().forEach((e=>{this.loadStream(e)})))}),1e3),setInterval((()=>{this.isConnected&&this.setImageSize()}),1e3);new ResizeObserver((()=>{this.resized()})).observe(this)}loadStream(e){const t=Ps;Ps++,this.streamsLoadingIds.push(t);let i=new Image;i.src=e,console.log("load stream:",e);const s=setTimeout((()=>{i.onload=()=>{},this.url===e&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url="");const s=this.streamsLoadingIds.indexOf(t);s>=0&&this.streamsLoadingIds.splice(s,1)}),1e4);i.onload=()=>{console.log("load:",e),clearTimeout(s),i.onload=()=>{},!this.isStreaming()&&this.streamsLoadingIds.indexOf(t)>=0&&(this.url=i.src,this.streamsLoadingIds=[],setTimeout((()=>{this.loadStream(e)}),2e3)),this.loaded=!0}}updated(e){e.has("streams")&&(this.url="",this.streamsLoadingIds=[]),this.setImageSize();const t=Math.max(0,parseInt(this.crosshairWidth));this.style.setProperty("--crosshair-width",`${t}px`),this.style.setProperty("--crosshair-color",this.crosshairColor),this.style.setProperty("--image-display",(this.url||this.waitImage,"block"))}resized(){this.setImageSize()}setImageSize(){const{naturalWidth:e,naturalHeight:t}=this.cameraFeedNode,{width:i,height:s}=this.getBoundingClientRect();s<t/e*i?(this.style.setProperty("--image-width",e/t*s+"px"),this.style.setProperty("--image-height",`${s}px`)):(this.style.setProperty("--image-width",`${i}px`),this.style.setProperty("--image-height",t/e*i+"px"))}getUrl(){if(!this.isStreaming())return this.waitImage||"../static/no-camera-stream.jpg";try{const e=new URL(this.url);return this.fps>0&&e.searchParams.set("fps",this.fps),this.width>=0&&this.height>=0&&e.searchParams.set("resolution",`${this.width}x${this.height}`),this.compression>=0&&e.searchParams.set("compression",this.compression),e.toString()}catch(e){return""}}render(){return $t`
      <img part="camera-feed" .src="${this.getUrl()}" />
      ${this.url&&!this.hideCrosshair?$t`
      <div part="x-crosshair"></div>
      <div part="y-crosshair"></div>
      `:""}
    `}}ht(As,"properties",dt(lt({},zs.properties),{url:{type:String,reflect:!1,attribute:!1}})),ht(As,"styles",St`
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
  `),customElements.define("frc-camera",As);var Fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-camera",elementConfig:zs});const Os={properties:{distance:{type:Number},speed:{type:Number}}};class Ds extends xt{constructor(){super(),this.distance=0,this.speed=0}render(){return $t`   
      <label part="distance-label">Distance</label>
      <vaadin-number-field part="distance-input" value="${this.distance}" readonly></vaadin-number-field>
      <label part="speed-label">Speed</label>
      <vaadin-number-field part="speed-input" value="${this.speed}" readonly></vaadin-number-field>
    `}}ht(Ds,"properties",Os.properties),ht(Ds,"styles",St`
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
  `),customElements.define("frc-encoder",Ds);var Bs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-encoder",elementConfig:Os});const js={properties:{min:{type:Number},max:{type:Number,defaultValue:100},value:{type:Number,primary:!0}}};class Ws extends xt{constructor(){super(),this.gauge=null,this.min=0,this.max=100,this.value=0}setSize(){const e=this.getBoundingClientRect(),t=e.width,i=e.height,s=Math.min(t,i);this.shadowRoot.getElementById("gauge").style.width=s+"px"}gaugeInit(){const e=this.shadowRoot.getElementById("gauge");e.innerHTML="",this.gauge=Rt(e,{min:Math.min(this.min,this.max),max:Math.max(this.min,this.max),value:0}),this.setSize()}firstUpdated(){this.gaugeInit();new ResizeObserver((()=>this.setSize())).observe(this)}updated(e){(e.has("min")||e.has("max"))&&this.gaugeInit(),this.gauge.setValue(this.value)}render(){return $t`
      <div class="gauge-container-container">
        <div id="gauge" class="gauge-container"></div>
      </div>
    `}}ht(Ws,"properties",js.properties),ht(Ws,"styles",[hi,St`
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
    `]),customElements.define("frc-gauge",Ws);var Us=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-gauge",elementConfig:js});const qs={properties:{value:{type:Number,primary:!0},hideLabel:{type:Boolean,attribute:"hide-label"},precision:{type:Number,defaultValue:2}}};class Hs extends xt{constructor(){super(),this.value=0,this.hideLabel=!1,this.precision=2,this.tickAngles=[];for(let e=0;e<=360;e+=5)this.tickAngles.push(e);this.degreeLabelAngles=[];for(let e=0;e<360;e+=45)this.degreeLabelAngles.push(e)}firstUpdated(){this.containerNode=this.shadowRoot.querySelector(".container");new ResizeObserver((()=>{this.resized()})).observe(this)}resized(){const{width:e,height:t}=this.getBoundingClientRect();this.containerNode.style.setProperty("--gyro-container-size",`${Math.min(e,t)}px`),this.requestUpdate()}getWidth(){const e=this.shadowRoot.querySelector("svg");if(!e)return 0;const{width:t}=e.getBoundingClientRect();return t}renderTicks(){const e=this.getWidth(),t=e/2-e/20,i=e/2-e/10;return Vt`
      ${this.tickAngles.map((s=>{const r=s*Math.PI/180,n=e/2+t*Math.cos(r),a=e/2+t*Math.sin(r),o=e/2+i*Math.cos(r),l=e/2+i*Math.sin(r);return Vt`
          <line
            class="tick ${s%45==0?"big":""}"
            x1="${n}" y1="${a}" x2="${o}" y2="${l}"
          />
        `}))}
    `}renderEdge(){const e=this.getWidth();return Vt`
      <circle class="edge" cx="${.5*e}" cy="${.5*e}" r="${.4*e}" />
    `}renderDialHand(){const e=this.getWidth(),t=e/2-e/20-e/40,i=(this.value-90)*Math.PI/180,s=e/2,r=e/2,n=e/2+t*Math.cos(i),a=e/2+t*Math.sin(i);return Vt`
      <line
        class="dial-hand"
        x1="${s}" y1="${r}" x2="${n}" y2="${a}"
      />
    `}renderDialCircle(){const e=this.getWidth();return Vt`
      <circle class="dial-circle" cx="${.5*e}" cy="${.5*e}" r="${.04*e}" />
    `}renderDegreeLabels(){const e=this.getWidth(),t=e/2+e/100,i=this.shadowRoot.querySelector("svg");return i&&i.style.setProperty("--degree-label-font-size",.055*e+"px"),Vt`
      ${this.degreeLabelAngles.map((i=>{const s=(i-90)*Math.PI/180,r=e/2+t*Math.cos(s),n=e/2+t*Math.sin(s);return Vt`
          <text class="degree-label" x="${r}" y="${n}">${i}</text>
        `}))}
    `}renderAngleLabel(){if(this.hideLabel)return null;const e=this.getWidth(),t=this.shadowRoot.querySelector("svg");t&&t.style.setProperty("--angle-label-font-size",.08*e+"px");return Vt`
      <text class="angle-label" x="${e/2}" y="${e+.15*e}">
        ${this.value.toFixed((i=this.precision,s=0,r=100,Math.min(r,Math.max(i,s))))}&deg;
      </text>
    `;var i,s,r}render(){return Vt`
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
    `}}ht(Hs,"properties",qs.properties),ht(Hs,"styles",[hi,St`
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
    `]),customElements.define("frc-gyro",Hs);var Ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-gyro",elementConfig:qs});const Xs={properties:{value:{type:Boolean}},slots:[{name:"true"},{name:"false"}],dashboard:{layout:{type:"absolute"}},demos:[{html:'\n      <frc-if>\n        <span slot="true">Visible if true</span>\n        <span slot="false">Visible if false</span>\n      </frc-if>\n    '}]};class Ys extends xt{render(){return this.value?$t`
        <slot name="true"></slot>
      `:$t`
      <slot name="false"></slot>
    `}}ht(Ys,"properties",Xs.properties),ht(Ys,"styles",St`
    :host {
      display: inline-block;
      position: absolute;
    }
  `),customElements.define("frc-if",Ys);var Gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-if",elementConfig:Xs});const Js={properties:{value:{type:Number,primary:!0,changeEvent:"change"},min:{type:Number,defaultValue:-1},max:{type:Number,defaultValue:1},blockIncrement:{type:Number,attribute:"block-increment",defaultValue:.05}}};class Qs extends xt{constructor(){super(),pt(this,i),this.value=0,this.min=-1,this.max=1,this.blockIncrement=.05}onChange(e){this.value=parseFloat(e.target.value),gt(this,i,s).call(this)}render(){const e=Math.min(this.min,this.max),t=Math.max(this.min,this.max),i=Math.max(e,Math.min(this.value,t));return $t`
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
    `}}i=new WeakSet,s=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},ht(Qs,"properties",Js.properties),ht(Qs,"styles",St`
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
  `),customElements.define("frc-number-slider",Qs);var Zs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-number-slider",elementConfig:Js});function er(e,t){const i=[];for(let s=e;s<t;s++)i.push(s);return i}const tr={properties:(()=>{const e={};for(let t=0;t<16;t++)e[`chan${t}`]={type:Number};return dt(lt({},e),{voltage:{type:Number},totalCurrent:{type:Number,attribute:"total-current"}})})()};class ir extends xt{constructor(){super();for(let e=0;e<16;e++)this[`chan${e}`]=0;this.voltage=0,this.totalCurrent=0}renderChannel(e){return $t`
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
    `}render(){return $t`
      <div part="channels">
        ${er(0,8).map((e=>$t`
          <label part="channel-label">
            <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
          </label>
        `))}
        ${er(0,8).map((e=>$t`
          ${this.renderChannel(e)}
        `))}
        ${er(8,16).map((e=>$t`
          <label part="channel-label">
            <slot name="${`channel-label${e}`}">Ch. ${e}</slot>
          </label>
        `))}
        ${er(8,16).map((e=>$t`
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
    `}}ht(ir,"properties",tr.properties),ht(ir,"styles",[hi,St`
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
    `]),customElements.define("frc-pdp",ir);var sr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-pdp",elementConfig:tr});const rr={properties:{value:{type:String,defaultValue:"Off",reflect:!0,primary:!0,input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["Off","On","Forward","Reverse"]}}}};class nr extends xt{constructor(){super(),this.buttons=["Off","On","Forward","Reverse"],this.value="Off"}setValue(e){this.value=e}render(){return $t`   
      ${this.buttons.map((e=>$t`
      <vaadin-button part="button" theme="contrast ${this.value==e?"primary":""}"
        @click="${()=>this.setValue(e)}">
        ${e}
      </vaadin-button>
      `))}
    `}}ht(nr,"styles",St`
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
  `),ht(nr,"properties",rr.properties),customElements.define("frc-relay",nr);var ar=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-relay",elementConfig:rr});const or={properties:{toggled:{type:Boolean,defaultValue:!1,primary:!0,changeEvent:"toggle"},label:{type:String,defaultValue:"Button"}}};class lr extends xt{constructor(){super(),this.toggled=!1,this.label="Button"}onClick(){this.toggled=!this.toggled,this.dispatchEvent(new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0}))}render(){return $t`   
      <vaadin-button theme="${1==this.toggled?"primary":""} contrast" part="button" @click="${this.onClick}">
        ${this.label}
      </vaadin-button>
    `}}ht(lr,"styles",[hi,St`
      :host {
        width: 100px;
        height: 50px;
      }
      [part=button] {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `]),ht(lr,"properties",or.properties),customElements.define("frc-toggle-button",lr);var dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-button",elementConfig:or});const hr={properties:{options:{type:Array,changeEvent:"optionsUpdate",defaultValue:["On","Off"],input:{type:"StringArray"}},value:{primary:!0,type:String,changeEvent:"change",input:{type:"StringDropdown",allowCustomValues:!1,getOptions(){return this.options}}}}};class cr extends xt{constructor(){super(),pt(this,r),pt(this,a),this.options=["On","Off"]}async setValue(e){this.value=e}updated(e){var t;e.has("options")&&!this.options.includes(this.value)&&(this.value=null!=(t=this.options[0])?t:""),e.has("value")&&gt(this,r,n).call(this),e.has("options")&&gt(this,a,o).call(this)}render(){return $t`   
      ${this.options.map((e=>$t`
      <vaadin-button part="button" theme="contrast ${this.value==e?"primary":""}"
        @click="${()=>this.setValue(e)}">
        ${e}
      </vaadin-button>
      `))}
    `}}r=new WeakSet,n=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},a=new WeakSet,o=function(){this.dispatchEvent(new CustomEvent("optionsUpdate",{detail:{options:this.options},bubbles:!0,composed:!0}))},ht(cr,"properties",hr.properties),ht(cr,"styles",St`
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
  `),customElements.define("frc-toggle-group",cr);var ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-group",elementConfig:hr});const pr={properties:{toggled:{type:Boolean,primary:!0,changeEvent:"toggle"}}};class mr extends xt{constructor(){super(),this.toggled=!1}firstUpdated(){new ResizeObserver((()=>this.resized())).observe(this)}resized(){this.rect=this.getBoundingClientRect();const{width:e,height:t}=this.rect,i=this.shadowRoot.querySelector("[part=switch]");i.style.borderRadius=`${e}px`,i.style.setProperty("--circle-width",.8*t+"px"),i.style.setProperty("--circle-height",.8*t+"px"),i.style.setProperty("--circle-left",e/2-.8*t+"px"),i.style.setProperty("--circle-top",.1*t+"px"),i.style.setProperty("--circle-translate-x",e-t+"px")}onClick(){this.toggled=!this.toggled;const e=new CustomEvent("toggle",{detail:{toggled:this.toggled},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return $t`   
        <label class="switch" @click="${this.onClick}">
          <input type="checkbox" .checked="${this.toggled}" disabled />
          <span part="switch">
            <span part="knob"></span>
          </span>
        </label>
      `}}ht(mr,"styles",St`
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
  `),ht(mr,"properties",pr.properties),customElements.define("frc-toggle-switch",mr);var gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-toggle-switch",elementConfig:pr});const br={properties:{value:{type:Number},max:{type:Number,defaultValue:5},min:{type:Number},center:{type:Number},precision:{type:Number,defaultValue:2},hideText:{type:Boolean,attribute:"hide-text"},numTickMarks:{type:Number,defaultValue:3,attribute:"num-tick-marks"},unit:{type:String,defaultValue:"V"}}};class fr extends $s{static get styles(){return[super.styles,St`
          [part=bar]::part(foreground) {
            background: #ffbd2f;
          }
        `]}constructor(){super(),this.value=0,this.min=0,this.max=5,this.center=0,this.precision=2,this.hideText=!1,this.numTickMarks=3,this.unit="V"}}ht(fr,"properties",br.properties),customElements.define("frc-voltage-view",fr);const yr=[...Kt,...di,...bi,wi,...Li,...is,...ls,ys,xs,_s,Vs,Ls,Fs,Bs,Us,Ks,Gs,Cs,Zs,sr,ar,dr,ur,gr,Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",elementName:"frc-voltage-view",elementConfig:br})];var vr=Object.fromEntries(yr.map((({elementName:e,elementConfig:t})=>[e,t]))),wr={"wired-button":{properties:{elevation:{type:"Number",defaultValue:1},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-button>Hello there</wired-button>"}]},"wired-card":{properties:{elevation:{type:"Number",defaultValue:1},fill:{type:"String",input:{type:"ColorPicker"}}},slots:[{name:""}],demos:[{html:"\n          <wired-card>\n            <h4>Card Header</h4>\n            <p>Some text</p>\n          </wired-card>\n        "}]},"wired-checkbox":{properties:{checked:{type:"Boolean",changeEvent:"change",primary:!0},disabled:{type:"Boolean",reflect:!0}},demos:[{html:"<wired-checkbox>Checkbox</wired-checkbox>"}]},"wired-combo":{properties:{disabled:{type:"Boolean",reflect:!0},selected:{type:"String",changeEvent:"selected",primary:!0}},slots:[{name:"",allowedChildren:["wired-item"]}],demos:[{html:'\n          <wired-combo selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-combo>\n        '}]},"wired-item":{properties:{value:{type:"String",primary:!0}},dashboard:{topLevel:!1},demos:[{html:'<wired-item value="item">Some Item</wired-item>'}]},"wired-dialog":{properties:{elevation:{type:"Number",defaultValue:5},open:{type:"Boolean",reflect:!0,primary:!0}},demos:[{html:'\n          <wired-dialog>\n            <p>\n              Dialog content here\n            </p>\n            <div style="text-align: right; padding: 30px 16px 16px;">\n              <wired-button id="closeDialog">Close dialog</wired-button>\n            </div>\n          </wired-dialog>\n        '}]},"wired-divider":{properties:{elevation:{type:"Number",defaultValue:1}}},"wired-fab":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-fab>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-fab>\n        '}]},"wired-icon-button":{properties:{disabled:{type:"Boolean",reflect:!0}},demos:[{html:'\n          <wired-icon-button>\n            <span class="iconify" data-icon="mdi:heart"></span>\n          </wired-icon-button>\n        '}]},"wired-image":{properties:{src:{type:"String",primary:!0},elevation:{type:"Number",defaultValue:1}},demos:[{html:'<wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>'}]},"wired-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},type:{type:"String"},value:{type:"String",changeEvent:"change",primary:!0}},demos:[{html:'<wired-input type="text"></wired-input>'}]},"wired-link":{properties:{elevation:{type:"Number",defaultValue:1},href:{type:"String",primary:!0},target:{type:"String",input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["_blank","_self","_parent","_top","framename"]}}},demos:[{html:'<wired-link href="https://docs.wpilib.org/en/stable/" target="_blank">WPILib Docs</wired-link>'}]},"wired-listbox":{properties:{horizontal:{type:"Boolean"},selected:{type:"String",primary:!0,changeEvent:"selected"}},demos:[{html:'\n          <wired-listbox id="combo" selected="two">\n            <wired-item value="one">Number One</wired-item>\n            <wired-item value="two">Number Two</wired-item>\n            <wired-item value="three">Number Three</wired-item>\n          </wired-listbox>\n        '}]},"wired-progress":{properties:{value:{type:"Number",primary:!0},min:{type:"Number"},max:{type:"Number",defaultValue:100},percentage:{type:"Boolean"}}},"wired-radio-group":{properties:{selected:{type:"String",primary:!0,changeEvent:"selected"}},slots:[{name:"",allowedChildren:["wired-radio"]}],demos:[{html:'\n          <wired-radio-group selected="two">\n            <wired-radio name="one">One</wired-radio>\n            <wired-radio name="two">Two</wired-radio>\n            <wired-radio name="three">Three</wired-radio>\n            <wired-radio name="four">Four</wired-radio>\n          </wired-radio-group>\n        '}]},"wired-radio":{properties:{name:{type:"String"},disabled:{type:"Boolean",reflect:!0},checked:{type:"Boolean",primary:!0,changeEvent:"change"},text:{type:"String"}},dashboard:{topLevel:!1},demos:[{html:'<wired-radio name="radio">Radio Button</wired-radio>'}]},"wired-search-input":{properties:{placeholder:{type:"String"},disabled:{type:"Boolean",reflect:!0},value:{type:"String",primary:!0,changeEvent:"change"}}},"wired-slider":{properties:{value:{type:"Number",defaultValue:50,primary:!0,changeEvent:"change"},min:{type:"Number"},max:{type:"Number",defaultValue:100}}},"wired-spinner":{properties:{spinning:{type:"Boolean",primary:!0},duration:{type:"Number",defaultValue:1500}}},"wired-tabs":{properties:{selected:{type:"String",primary:!0}},demos:[{html:'\n          <wired-tabs selected="Two">\n            <wired-tab name="One">\n              <h4>Card 1</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Two">\n              <h4>Card 2</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n            <wired-tab name="Three">\n              <h4>Card 3</h4>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </wired-tab>\n          </wired-tabs>\n        '}]},"wired-tab":{properties:{name:{type:"String"},label:{type:"String"}},demos:[{html:'<wired-tab name="Tab">'}]},"wired-textarea":{properties:{rows:{type:"Number"},maxrows:{type:"Number"},value:{type:"String",input:{type:"Textarea"},primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0},placeholder:{type:"String"}}},"wired-toggle":{properties:{checked:{type:"Boolean",primary:!0,changeEvent:"change"},disabled:{type:"Boolean",reflect:!0}}},"wired-video":{properties:{src:{type:"String",primary:!0},autoplay:{type:"Boolean"},loop:{type:"Boolean"},muted:{type:"Boolean"},playsinline:{type:"Boolean"}},demos:[{html:'<wired-video src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"></wired-video>'}]}},xr={"vaadin-checkbox-group":{properties:{disabled:{type:"Boolean",reflect:!0},errorMessage:{type:"String",attribute:"error-message"},label:{type:"String"},required:{type:"Boolean"},value:{type:"Array",changeEvent:"value-changed",primary:!0},theme:{type:"String",property:!1,input:{type:"StringDropdown",allowCustomValues:!1,getOptions:()=>["horizontal","vertical"]}}},slots:[{name:"",allowedChildren:["vaadin-checkbox"]}],demos:[{html:'\n        <vaadin-checkbox-group>\n          <vaadin-checkbox value="1">Checkbox 1</vaadin-checkbox>\n          <vaadin-checkbox value="2">Checkbox 2</vaadin-checkbox>\n          <vaadin-checkbox value="3">Checkbox 3</vaadin-checkbox>\n        </vaadin-checkbox-group>\n      '}]},"vaadin-checkbox":{properties:{checked:{type:"Boolean",reflect:!0,primary:!0},disabled:{type:"Boolean",reflect:!0},label:{type:"String",attribute:!1,property:"innerText"}},demos:[{html:"<vaadin-checkbox>Checkbox</vaadin-checkbox>"}]},"vaadin-combo-box":{properties:{items:{type:"Array"},value:{type:"String",changeEvent:"value-changed",primary:!0},allowCustomValue:{type:"Boolean",attribute:"allow-custom-value"},label:{type:"String"},placeholder:{type:"String"},helperText:{type:"String"},errorMessage:{type:"String",attribute:"error-message"},required:{type:"Boolean"},disabled:{type:"Boolean",reflect:!0},readonly:{type:"Boolean",reflect:!0}},demos:[{html:'<vaadin-combo-box items=\'["Item 1", "Item 2"]\' value="Item 1"></vaadin-combo-box>'}]},"vaadin-details":{properties:{disabled:{type:"Boolean"},opened:{type:"Boolean"}},demos:[{html:'\n            <vaadin-details>\n              <div slot="summary">Robotics Team</div>\n              <vaadin-vertical-layout>\n                <span>Team Name</span>\n                <span>ABC High School</span>\n                <span>123 West Main St.</span>\n              </vaadin-vertical-layout>\n            </vaadin-details>\n          '}]},"vaadin-date-picker":{properties:{value:{type:"String",primary:!0,reflect:!0,changeEvent:"value-changed"},disabled:{type:"Boolean"},clearButtonVisible:{type:"Boolean",defaultValue:!1},label:{type:"String",defaultValue:""}},demos:[{html:'<vaadin-date-picker label="Sample Date Picker"></vaadin-date-picker>'}]},"vaadin-number-field":{properties:{clearButtonVisible:{type:"Boolean",defaultValue:!1},disabled:{type:"Boolean"},hasControls:{type:"Boolean",defaultValue:!1},label:{type:"String",defaultValue:""},max:{type:"Number"},min:{type:"Number"},step:{type:"Number",defaultValue:1},value:{type:"String",defaultValue:"",primary:!0,reflect:!0,changeEvent:"change"}},demos:[{html:'<vaadin-number-field\n                    has-controls\n                    label="Label"\n                    min=0\n                    max=10\n                    value=5\n                    ></vaadin-number-field>'}]},"vaadin-progress-bar":{properties:{max:{type:"Number",defaultValue:1},min:{type:"Number",defaultValue:0},value:{type:"Number",primary:!0,reflect:!0}},demos:[{html:"<vaadin-progress-bar\n                    min=0\n                    max=1\n                    value=0.5></vaadin-progress-bar>"}]},"vaadin-radio-button":{topLevel:!1,properties:{checked:{type:"Boolean",primary:!0,changeEvent:"checked-change",defaultValue:!1},disabled:{type:"Boolean"},value:{type:"String",defaultValue:"on"}},demos:[{html:'<vaadin-radio-button value="foo">Foo</vaadin-radio-button>'}]},"vaadin-radio-group":{properties:{label:{type:"String",defaultValue:""},value:{type:"String",primary:!0,reflect:!0}},slots:[{name:"",allowedChildren:["vaadin-radio-button"]}],demos:[{html:'<vaadin-radio-group label="Label" theme="vertical">\n                  <vaadin-radio-button>Option A</vaadin-radio-button>\n                  <vaadin-radio-button>Option B</vaadin-radio-button>\n                  <vaadin-radio-button>Option C</vaadin-radio-button>\n                 </vaadin-radio-group>'}]}},Sr=lt(lt(lt({},vr),wr),xr);class $r extends xt{constructor(){super(),pt(this,l),this.element=null,this.propertyHandler=null,this.propertyName=null}get inputElement(){return this.renderRoot.querySelector('[part="input"]')}get property(){return this.propertyHandler.getProperty()}getValue(){return this.propertyHandler.getStoredValue()}setValue(e){this.propertyHandler.setStoredValue(e),gt(this,l,d).call(this)}setToDefault(){const e=this.propertyHandler.getProperty().defaultValue;this.setValue(e)}isDisabled(){var e,t;const i=null==(t=null==(e=this.property)?void 0:e.input)?void 0:t.isDisabled;return"function"==typeof i&&i(this.element)}renderInputField(){return $t``}propertyChanged(e){}updated(e){e.has("propertyHandler")&&this.propertyHandler&&this.propertyHandler.subscribe((e=>{this.propertyChanged(e),gt(this,l,d).call(this)}),!0)}render(){return $t`
      <vaadin-form-item>
        <label slot="label" title=${this.propertyName}>
          <span>${this.propertyName}</span>
        </label>
        ${this.renderInputField()}
      </vaadin-form-item>
    `}}l=new WeakSet,d=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.getValue(),name:this.propertyName},bubbles:!0,composed:!0}))},ht($r,"styles",St`
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
  `),ht($r,"properties",{element:{type:HTMLElement,attribute:!1},propertyHandler:{type:Object,attribute:!1},propertyName:{type:String}});customElements.define("dashboard-string-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return $t`
      <vaadin-text-field 
        part="input" 
        .value=${null!=(e=this.getValue())?e:""} 
        @change="${this.onInputChange}" 
        theme="small" 
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-field>
    `}});customElements.define("dashboard-boolean-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.checked)}renderInputField(){return $t`
      <vaadin-checkbox
        part="input"
        ?checked="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      ></vaadin-checkbox>
    `}});customElements.define("dashboard-number-property-view",class extends $r{onInputChange(){const e=parseFloat(this.inputElement.value);isNaN(e)?this.setToDefault():this.setValue(e)}renderInputField(){return $t`
      <vaadin-number-field
        part="input"
        value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
        has-controls
      ></vaadin-number-field>
    `}});function Cr(){return new Promise((e=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=i=>{var s;const{files:r}=t;r.length<1?e({path:null,cancelled:!0}):e({path:null!=(s=r.item(0).path)?s:"",cancelled:!1})};const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(i)}))}customElements.define("dashboard-color-picker-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){return $t`
      <input
        part="input"
        type="color"
        .value="${this.getValue()}"
        @change="${this.onInputChange}"
        ?disabled="${this.isDisabled()}"
        theme="small"
      />
    `}});customElements.define("dashboard-string-dropdown-property-view",class extends $r{static get styles(){return[super.styles,St`
        .input-container {
          display: flex;
        }

        [part=input] {
          flex: 1;
        }
      `]}allowCustomValues(){var e,t;const i=null!=(t=null==(e=this.property)?void 0:e.input)?t:{};return!("allowCustomValues"in i)||i.allowCustomValues}onInputChange(){this.setValue(this.inputElement.value)}async upload(){const{cancelled:e,path:t}=await Cr();e||(this.inputElement.value=t,this.setValue(t))}getOptions(){var e,t;const i=null==(t=null==(e=this.property)?void 0:e.input)?void 0:t.getOptions;return"function"==typeof i?i.bind(this.element)():[]}renderInputField(){var e,t;return $t`
      <div class="input-container">
        <vaadin-combo-box 
          part="input"
          .items="${this.getOptions()}" 
          value="${this.getValue()}"
          @change="${this.onInputChange}"
          theme="small"
          ?disabled="${this.isDisabled()}"
          ?allow-custom-value="${this.allowCustomValues()}"
        >
        </vaadin-combo-box>
        ${this.allowCustomValues()&&(null==(t=null==(e=this.property)?void 0:e.input)?void 0:t.enableUpload)?$t`
          <vaadin-button 
            theme="icon small tertiary" 
            title="Upload Image" 
            @click=${this.upload}
            ?disabled=${this.isDisabled()}
          >
            <iron-icon 
              slot="suffix" 
              icon="vaadin:upload" 
              style="cursor: pointer"
            ></iron-icon>
          </vaadin-button>
        `:""}
      </div>
    `}});customElements.define("dashboard-number-array-property-view",class extends $r{update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>parseFloat(e.display))))}onCustomValueSet(e){const t=parseFloat(e.detail);isNaN(t)||(this.setValue(this.getValue().concat(t)),this.requestUpdate())}renderInputField(){return $t`
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
    `}});const kr=[{value:"true",autocomplete:"true",display:"true"},{value:"false",autocomplete:"false",display:"false"}];customElements.define("dashboard-boolean-array-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.value.startsWith("true"))))}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>e?{value:`true${t.toString()}`,autocomplete:"true",display:"true"}:{value:`false${t.toString()}`,autocomplete:"false",display:"false"}))}renderInputField(){return $t`
      <multiselect-combo-box
        part="input"
        theme="small"
        @change="${this.onInputChange}"
        .items="${kr}"
        item-label-path="autocomplete" 
        item-value-path="value"
        item-id-path="value"
        ?disabled="${this.isDisabled()}"
      >
        <template>
          [[item.display]]
        </template>
      </multiselect-combo-box>
    `}});customElements.define("dashboard-string-array-property-view",class extends $r{getValue(){var e;return null!=(e=super.getValue())?e:[]}update(e){super.update(e),this.inputElement.selectedItems=this.getValue().map(((e,t)=>({value:t.toString(),autocomplete:e,display:e})))}onInputChange(){this.setValue(this.inputElement.selectedItems.map((e=>e.display)))}onCustomValueSet(e){const t=e.detail;this.setValue(this.getValue().concat(t)),this.requestUpdate()}renderInputField(){return $t`
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
    `}});customElements.define("dashboard-text-area-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.value)}renderInputField(){var e;return $t`
      <vaadin-text-area
        part="input"
        .value="${null!=(e=this.getValue())?e:""}"
        @change="${this.onInputChange}"
        theme="small"
        ?disabled="${this.isDisabled()}"
      ></vaadin-text-area>
    `}});customElements.define("dashboard-function-property-view",class extends $r{static get styles(){return[super.styles,St`
        vaadin-form-item {
          align-items: self-start;
        }
      `]}static get properties(){return dt(lt({},super.properties),{inputValue:{type:String,attribute:!1}})}constructor(){super(),this.onEditTimeoutId=null,this.inputValue=""}updated(e){var t;if(super.updated(e),(e.has("element")||e.has("connector"))&&(this.inputValue=null!=(t=this.getValue())?t:""),e.has("inputValue")){this.inputElement.value!==this.inputValue&&(this.inputElement.value=this.inputValue),this.setValue(this.inputValue)}}propertyChanged(e){this.inputElement.value=e}onInputChange(){this.onEditTimeoutId&&(clearTimeout(this.onEditTimeoutId),this.onEditTimeoutId=null),this.onEditTimeoutId=setTimeout((()=>{this.inputValue=this.inputElement.value}),500)}renderInputField(){return $t`
      <juicy-ace-editor
        part="input"
        @change="${this.onInputChange}"
        mode="ace/mode/javascript"
        theme="ace/theme/monokai"
        ?disabled="${this.isDisabled()}"
      ></juicy-ace-editor>
    `}});customElements.define("dashboard-upload-property-view",class extends $r{onInputChange(){this.setValue(this.inputElement.value)}async upload(){const{cancelled:e,path:t}=await Cr();e||(this.inputElement.value=t,this.setValue(t))}renderInputField(){var e;return $t`
      <vaadin-text-field 
        part="input" 
        .value=${null!=(e=this.getValue())?e:""} 
        @change="${this.onInputChange}" 
        theme="small" 
        ?disabled="${this.isDisabled()}"
      >
        <iron-icon 
          title="Upload Image"
          slot="suffix" 
          icon="vaadin:upload" 
          style="cursor: pointer"
          @click=${this.upload}
        ></iron-icon>
      </vaadin-text-field>
    `}});class Er extends xt{constructor(){super(),this.element=null,this.propertyHandler=null,this.propertyName=null,this.propertyViewComponent=null}updated(){var e;if(!this.propertyViewComponent)return;const t=this.renderRoot.querySelector(".property-view");null==(e=t.firstChild)||e.remove();const i=document.createElement(this.propertyViewComponent);i.element=this.element,i.propertyHandler=this.propertyHandler,i.propertyName=this.propertyName,t.append(i)}render(){return $t`<div class="property-view"></div>`}}ht(Er,"properties",{element:{type:HTMLElement,attribute:!1},propertyHandler:{type:Object,attribute:!1},propertyName:{type:String},propertyViewComponent:{type:String}}),customElements.define("dashboard-properties-view-render",Er);const _r={String:"dashboard-string-property-view",Number:"dashboard-number-property-view",Boolean:"dashboard-boolean-property-view",Array:"dashboard-string-array-property-view",StringArray:"dashboard-string-array-property-view",BooleanArray:"dashboard-boolean-array-property-view",NumberArray:"dashboard-number-array-property-view",Textarea:"dashboard-text-area-property-view",StringDropdown:"dashboard-string-dropdown-property-view",ColorPicker:"dashboard-color-picker-property-view",Function:"dashboard-function-property-view",Upload:"dashboard-upload-property-view"},Mr=St`
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
`;class Tr extends xt{constructor(){super(),this.element=null,this.connector=null}get inputElement(){return this.renderRoot.querySelector("[part=input]")}onValueChange(e){this.renderRoot.querySelectorAll("dashboard-properties-view-render").forEach((e=>{null==e||e.requestUpdate()}))}render(){var e;if(!this.element)return $t``;const t=null==(e=this.connector)?void 0:e.getElementWebbit(this.element);if(!t)return $t``;const{properties:i}=t.getConfig();return $t`
      <div class="properties-view">
        <vaadin-form-layout @change=${this.onValueChange}>
          ${Object.entries(i).map((([e])=>this.renderPropertyView(e,t.getPropertyHandler(e))))}
        </vaadin-form-layout>
      </div>
    `}renderPropertyView(e,t){var i,s;const r=t.getProperty(),n=null!=(s=null==(i=r.input)?void 0:i.type)?s:r.type;return $t`
      <dashboard-properties-view-render
        .element="${this.element}"
        .propertyName="${e}"
        .propertyHandler="${t}"
        .propertyViewComponent="${_r[n]}"
      ></dashboard-properties-view-render>
    `}}ht(Tr,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:It,attribute:!1}}),ht(Tr,"styles",Mr),customElements.define("dashboard-properties-tool",Tr);const Nr=St`
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
    text-overflow: clip;
    display: inline-block;
  }

  .header .value::-webkit-scrollbar { 
    width: 0 !important;
    height: 0 !important;
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
`;class Vr extends xt{constructor(){super(),this.label="",this.providerName="",this.source=null,this.level=0,this.selectedSourceKey="",this.selectedSourceProvider="",this.selectedSource=null,this.store=null,this.disabled=!1}get detailsElement(){return this.renderRoot.querySelector("details")}hasSources(){return this.source.hasChildren()}hasValue(){return this.source.hasValue()}isSelected(){return this.source===this.selectedSource}isSelectedKeyDescendent(){return!!this.selectedSource&&this.selectedSource.getKey().startsWith(this.source.getKey()+"/")}updated(e){e.has("selectedSource")&&this.isSelectedKeyDescendent()&&(this.detailsElement.open=!0)}firstUpdated(){this.store.subscribe(this.providerName,this.source.getKey(),(()=>this.requestUpdate()),!0)}onSelect(){const e=new CustomEvent("sourceSelect",{bubbles:!0,composed:!0,detail:{sourceKey:this.source.getKey(),sourceProvider:this.providerName}});this.dispatchEvent(e)}renderValue(){const e=this.source.getValue();return"boolean"==typeof e?$t`
        <input disabled type="checkbox" ?checked="${e}" />
        <label>${e.toString()}</label>
      `:"string"==typeof e?$t`
        "${e}"
      `:"number"==typeof e?$t`
        ${e}
      `:e instanceof Array?$t`
        [${e.join(", ")}]
      `:$t``}renderChildSources(){if(!this.hasSources())return null;const e=this.source.getChildren(),t=Object.entries(e);return $t`
      <div class="sources">
        ${t.map((([e,i])=>$t`
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
    `}render(){return $t`
      <details 
        style=${`--level: ${this.level}`}
        class=${e={childless:!this.hasSources(),selected:this.isSelected()},Object.entries(e).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div class="header">
            <span class="key">
              ${this.hasSources()?$t`
                <span class="caret">
                  <iron-icon icon="vaadin:angle-right" class="closed-cursor"></iron-icon>
                  <iron-icon icon="vaadin:angle-down" class="opened-cursor"></iron-icon>
                </span>
              `:""}
              <label>${""!==this.label?this.label:$t`&nbsp;`}</label>
              ${this.disabled?"":$t`
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
    `;var e}}ht(Vr,"styles",Nr),ht(Vr,"properties",{onlyChild:{type:Boolean,attribute:"only-child"},label:{type:String},providerName:{type:String},source:{type:Object},level:{type:Number},selectedSourceKey:{type:String},selectedSourceProvider:{type:String},selectedSource:{type:Object},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-source-view",Vr);class Rr extends xt{constructor(){super(),this.sourceKey="",this.sourceProvider="",this.store=null,this.disabled=!1}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}firstUpdated(){this.store.sourceProviderAdded((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)})),this.sourceProviderNames.forEach((e=>{this.store.subscribeAll(e,(()=>{this.requestUpdate()}),!0)}))}renderSources(e){var t;const i=this.store.getSource(e,""),s=null!=(t=null==i?void 0:i.getChildren())?t:{},r=Object.entries(s),n=this.sourceKey&&this.store?this.store.getSource(this.sourceProvider,this.sourceKey):null;return $t`
      ${r.map((([t,i])=>$t`
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
    `}render(){return 0===this.sourceProviderNames.length?$t`
        <p>There are no sources currently available.</p>
      `:$t`
      <vaadin-accordion opened="${null}">
        ${this.sourceProviderNames.map((e=>$t`
          <vaadin-accordion-panel theme="small">
            <div slot="summary">${e}</div>
            <div>${this.renderSources(e)}</div>
          </vaadin-accordion-panel>
        `))}
      </vaadin-accordion>
    `}}ht(Rr,"styles",St`
    :host {
      display: block;
      font-family: sans-serif;
    }
    p {
      margin: 8px 0 5px;
      font-weight: bold;
    }
  `),ht(Rr,"properties",{sourceKey:{type:String},sourceProvider:{type:String},store:{type:Object},disabled:{type:Boolean}}),customElements.define("dashboard-sources-view",Rr);const Ir=St`
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
`;class Lr extends xt{constructor(){super(),this.element=null,this.connector=null,this.sourceKeys={}}get webbit(){var e;return this.element&&(null==(e=this.connector)?void 0:e.getElementWebbit(this.element))}get sourceProvider(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceProvider)?t:""}set sourceProvider(e){this.webbit&&(this.webbit.sourceProvider=e)}get sourceKey(){var e,t;return null!=(t=null==(e=this.webbit)?void 0:e.sourceKey)?t:""}set sourceKey(e){this.webbit&&(this.webbit.sourceKey=e)}get store(){var e;return null==(e=this.connector)?void 0:e.getStore()}get defaultSourceProvider(){var e;return null==(e=this.store)?void 0:e.getDefaultSourceProvider()}get sourceProviderNames(){var e,t;return null!=(t=null==(e=this.store)?void 0:e.getSourceProviderNames())?t:[]}onSourceKeyInputChange(e){const t=e.target||e.path[0];this.sourceKey=t.value,this.requestUpdate()}onSourceProviderInputChange(e){const t=e.target||e.path[0];this.sourceProvider=t.value,this.requestUpdate()}onSourceSelect(e){const{sourceKey:t,sourceProvider:i}=e.detail;this.sourceKey=t,this.sourceProvider=i,this.requestUpdate()}getSourceKeyItems(){var e;return[...null!=(e=this.sourceKeys[this.sourceProvider])?e:[]]}updateSourceKeySet(e,t){this.store.getSource(e,t)?this.sourceKeys[e].has(t)||(this.sourceKeys[e].add(t),this.requestUpdate()):this.sourceKeys[e].has(t)&&(this.sourceKeys[e].delete(t),this.requestUpdate())}firstUpdated(){this.store.sourceProviderAdded((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)})),this.sourceProviderNames.forEach((e=>{this.sourceKeys[e]=new Set,this.store.subscribeAll(e,((t,i)=>{this.updateSourceKeySet(e,i)}),!0)}))}render(){var e,t,i;const s=this.element?null==(e=this.connector)?void 0:e.getElementWebbit(this.element):null,r=!this.element||!s;return $t`
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
    `}}function Pr(e,t){const i=e.getMatchingElementConfig(t),s=t.tagName.toLowerCase();return(null==i?void 0:i.dashboard)?"string"==typeof i.dashboard.displayName?i.dashboard.displayName:"function"==typeof i.dashboard.displayName?i.dashboard.displayName(t):s:s}ht(Lr,"styles",Ir),ht(Lr,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:It,attribute:!1}}),customElements.define("dashboard-sources-tool",Lr);class zr extends xt{constructor(){super(),this.slot="",this.level=0}render(){return $t`
      <p style=${`--level: ${this.level}`}>
        ${this.slot} SLOT
      </p>
    `}}ht(zr,"styles",St`
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
  `),ht(zr,"properties",{slot:{type:String},level:{type:Number}}),customElements.define("dashboard-element-tree-slot-node",zr);const Ar=St`
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
`;class Fr extends xt{constructor(){super(),pt(this,u),pt(this,m),pt(this,b),pt(this,y),pt(this,w),pt(this,S),pt(this,C),pt(this,E),pt(this,h,void 0),pt(this,c,void 0),this.connector=null,this.element=null,this.selectedElement=null,this.level=0,mt(this,h,(()=>{})),mt(this,c,null)}static get properties(){return{connector:{type:It,attribute:!1},element:{type:HTMLElement,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1},level:{type:Number}}}get headerElement(){return this.renderRoot.querySelector(".header")}get detailsElement(){return this.renderRoot.querySelector("details")}get elementConfig(){var e,t;return null!=(t=null==(e=this.connector)?void 0:e.getMatchingElementConfig(this.element))?t:null}updated(e){var t;if(e.has("selectedElement")&&this.selectedElement&&this.element.contains(this.selectedElement)&&(this.detailsElement.open=!0),e.has("element")){gt(this,b,f).call(this);const e=this.connector.getElementWebbit(this.element);mt(this,h,null!=(t=null==e?void 0:e.subscribe((()=>{this.requestUpdate()})))?t:()=>{}),mt(this,c,new MutationObserver((()=>{this.requestUpdate()}))),ut(this,c).observe(this.element,{childList:!0,subtree:!0,attributeFilter:["id","slot"]})}}firstUpdated(){this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()))}disconnectedCallback(){super.disconnectedCallback(),gt(this,b,f).call(this)}renderAttributes(){return["id","slot"].filter((e=>this.element.hasAttribute(e))).map((e=>$t`
        <span class="attribute">
          <span class="attribute-name">${e}</span>="<span class="attribute-value">${this.element.getAttribute(e)}</span>"
        </span>
      `))}_onOpenToggle(){setTimeout((()=>{this.detailsElement.open=!this.detailsElement.open}))}render(){const e=Pr(this.connector,this.element);return $t`
      <details 
        @click=${e=>e.preventDefault()}
        style=${`--level: ${this.level}`}
        class=${t={childless:!gt(this,u,p).call(this),selected:gt(this,m,g).call(this)},Object.entries(t).filter((([,e])=>e)).map((([e])=>e)).join(" ")}
      >
        <summary>
          <div 
            class="header" 
            @mouseenter="${gt(this,S,$)}" 
            @mouseleave="${gt(this,C,k)}"
            @click="${gt(this,w,x)}"
          >
            <span class="element-name">
              ${gt(this,u,p).call(this)?$t`
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
        ${gt(this,u,p).call(this)?$t`
          <div class="nodes">
            ${gt(this,E,_).call(this).map((({name:e,elements:t})=>$t`
              ${t.map((e=>$t`
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
    `;var t}}h=new WeakMap,c=new WeakMap,u=new WeakSet,p=function(){return this.element.children.length>0},m=new WeakSet,g=function(){return this.element===this.selectedElement},b=new WeakSet,f=function(){var e;null==(e=ut(this,c))||e.disconnect(),ut(this,h).call(this)},y=new WeakSet,v=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0,detail:{element:this.element,name:this.connector.getMatchingElementSelector(this.element)}});this.dispatchEvent(t)},w=new WeakSet,x=function(e){const t=e.target||e.path[0],i=this.renderRoot.querySelector(".caret");i&&i.contains(t)||gt(this,y,v).call(this,"elementSelect")},S=new WeakSet,$=function(){gt(this,y,v).call(this,"elementPreviewStart")},C=new WeakSet,k=function(){gt(this,y,v).call(this,"elementPreviewEnd")},E=new WeakSet,_=function(){const e={"":[]};return[...this.element.children].forEach((t=>{var i;const s=null!=(i=t.getAttribute("slot"))?i:"";void 0===e[s]&&(e[s]=[]),e[s].push(t)})),Object.entries(e).map((([e,t])=>({name:e,elements:t})))},ht(Fr,"styles",Ar),customElements.define("dashboard-element-tree-node",Fr);const Or=St`
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
`;class Dr extends xt{static get properties(){return{connector:{type:It,attribute:!1},selectedElement:{type:HTMLElement,attribute:!1}}}constructor(){super(),this.connector=null,this.selectedElement=null}firstUpdated(){this.connector.subscribeElementConnected((()=>this.requestUpdate())),this.connector.subscribeElementDisconnected((()=>this.requestUpdate()))}render(){return $t`
      <p>Dashboard Elements</p>
      <div class="tree">
        ${[...this.connector.getRootElement().children].map((e=>$t`
          <dashboard-element-tree-node
              .element=${e} 
              .connector=${this.connector}
              .selectedElement=${this.selectedElement}
            ></dashboard-element-tree-node>
        `))}
      </div>
    `}}ht(Dr,"styles",Or),customElements.define("dashboard-element-tree",Dr);var Br,jr,Wr,Ur,qr,Hr,Kr,Xr,Yr,Gr,Jr,Qr,Zr,en,tn,sn,rn,nn,an,on,ln,dn,hn,cn,un,pn,mn,gn,bn,fn,yn,vn,wn,xn,Sn,$n,Cn,kn,En,_n,Mn=Object.defineProperty,Tn=Object.getOwnPropertySymbols,Nn=Object.prototype.hasOwnProperty,Vn=Object.prototype.propertyIsEnumerable,Rn=(e,t,i)=>t in e?Mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,In=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ln=(e,t,i)=>(In(e,t,"read from private field"),i?i.call(e):t.get(e)),Pn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},zn=(e,t,i,s)=>(In(e,t,"write to private field"),s?s.call(e,i):t.set(e,i),i),An=(e,t,i)=>(In(e,t,"access private method"),i);class Fn{constructor(e,t,i,s){Pn(this,Br,void 0),Pn(this,jr,{}),Pn(this,Wr,void 0),Pn(this,Ur,void 0),Pn(this,qr,!1),Pn(this,Hr,void 0),Pn(this,Kr,void 0),zn(this,Kr,e),zn(this,Hr,t),zn(this,Br,i),zn(this,Wr,s)}getKey(){return Ln(this,Br)}hasValue(){return Ln(this,qr)}getValue(){return Ln(this,Ur)}setValue(e){zn(this,Ur,e),zn(this,qr,!0)}removeValue(){zn(this,Ur,void 0),zn(this,qr,!1)}getSourceValue(){return this.hasChildren()?Ln(this,Hr):Ln(this,Ur)}setSourceValue(e){Ln(this,Kr).userUpdate(Ln(this,Br),e)}getChildren(){return Ln(this,jr)}hasChildren(){return Object.getOwnPropertyNames(Ln(this,jr)).length>0}addChild(e,t){const i=e.split("/").at(-1);void 0!==i&&(Ln(this,jr)[i]=t,void 0!==i&&Object.defineProperty(Ln(this,Hr),i,{configurable:!0,enumerable:!0,set(e){t.setSourceValue(e)},get:()=>t.getSourceValue()}))}removeChild(e){const t=e.split("/").at(-1);void 0!==t&&(delete Ln(this,jr)[t],delete Ln(this,Hr)[t])}getParent(){return Ln(this,Wr)}}Br=new WeakMap,jr=new WeakMap,Wr=new WeakMap,Ur=new WeakMap,qr=new WeakMap,Hr=new WeakMap,Kr=new WeakMap;class On{constructor(e){Pn(this,tn),Pn(this,rn),Pn(this,an),Pn(this,ln),Pn(this,hn),Pn(this,Xr,new Map),Pn(this,Yr,new Set),Pn(this,Gr,new Map),Pn(this,Jr,void 0),Pn(this,Qr,{}),Pn(this,Zr,new Map),Pn(this,en,void 0),zn(this,Jr,e),zn(this,en,{clearSources:e.addClearSourcesHandler((()=>{this.clearSources()})),sourcesChanged:e.addSourcesChangedHandler((e=>{Object.entries(e).forEach((([e,t])=>{this.updateSource(e,t)}))})),sourcesRemoved:e.addSourcesRemovedHandler((e=>{e.forEach((e=>this.removeSource(e)))}))})}getSourceProvider(){return Ln(this,Jr)}getSource(e){return Ln(this,Gr).get(e)}getSourceValue(e){var t;return null==(t=this.getSource(e))?void 0:t.getSourceValue()}updateSource(e,t){An(this,tn,sn).call(this,e),An(this,rn,nn).call(this,e);const i=Ln(this,Gr).get(e);null==i||i.setValue(t),An(this,hn,cn).call(this,e)}clearSources(){Ln(this,Gr).forEach(((e,t)=>this.removeSource(t)))}removeSource(e){const t=Ln(this,Gr).get(e);t&&(t.removeValue(),An(this,an,on).call(this,t),An(this,hn,cn).call(this,e),Ln(this,Yr).delete(e))}subscribe(e,t,i){void 0===Ln(this,Qr)[e]&&(Ln(this,Qr)[e]=new Map);const s=Symbol("SourceSubscriber");return Ln(this,Qr)[e].set(s,t),i&&t(this.getSourceValue(e),e,e),()=>{Ln(this,Qr)[e].delete(s)}}subscribeAll(e,t){const i=Symbol("SourceSubscriberAll");return Ln(this,Zr).set(i,e),t&&Ln(this,Yr).forEach((t=>{e(this.getSourceValue(t),t)})),()=>{Ln(this,Zr).delete(i)}}unsubscribeFromProvider(){const{clearSources:e,sourcesChanged:t,sourcesRemoved:i}=Ln(this,en);e(),t(),i()}}Xr=new WeakMap,Yr=new WeakMap,Gr=new WeakMap,Jr=new WeakMap,Qr=new WeakMap,Zr=new WeakMap,en=new WeakMap,tn=new WeakSet,sn=function(e){Ln(this,Yr).has(e)||Ln(this,Yr).add(e)},rn=new WeakSet,nn=function(e){const t=e.split("/");let i;t.forEach(((e,s)=>{const r=t.slice(0,s+1).join("/");if(!Ln(this,Gr).has(r)){const e=Ln(this,Gr).get(i),t=new Fn(Ln(this,Jr),An(this,ln,dn).call(this,r),r,e);Ln(this,Gr).set(r,t),null==e||e.addChild(r,t)}i=r}))},an=new WeakSet,on=function(e){const t=function(e){return!e.hasValue()&&0===Object.keys(e.getChildren()).length}(e),i=e.getParent();t&&i&&(i.removeChild(e.getKey()),Ln(this,Gr).delete(e.getKey()),An(this,an,on).call(this,i))},ln=new WeakSet,dn=function(e){return Ln(this,Xr).has(e)||Ln(this,Xr).set(e,{}),Ln(this,Xr).get(e)},hn=new WeakSet,cn=function(e){const t=e.split("/"),i=this.getSourceValue(e);t.forEach(((i,s)=>{const r=t.slice(0,s+1).join("/");r in Ln(this,Qr)&&Ln(this,Qr)[r].forEach((t=>{t(this.getSourceValue(r),r,e)}))})),Ln(this,Zr).forEach((t=>{t(i,e)}))};class Dn{constructor(){Pn(this,un,{}),Pn(this,pn,[]),Pn(this,mn,void 0),Pn(this,gn,[])}hasSourceProvider(e){return e in Ln(this,un)}addSourceProvider(e,t){if(this.hasSourceProvider(e))throw new Error("A source provider with that name has already been added.");const i=new On(t);Ln(this,un)[e]=i,Ln(this,pn).forEach((t=>{t(e)}))}sourceProviderAdded(e){Ln(this,pn).push(e)}removeSourceProvider(e){if(!this.hasSourceProvider(e))return;this.getSourceProvider(e).disconnect();Ln(this,un)[e].unsubscribeFromProvider(),delete Ln(this,un)[e]}getSourceProvider(e){return Ln(this,un)[e].getSourceProvider()}getSourceProviderNames(){return Object.keys(Ln(this,un))}setDefaultSourceProvider(e){zn(this,mn,e),Ln(this,gn).forEach((t=>{t(e)}))}defaultSourceProviderSet(e){if("function"!=typeof e)throw new Error("listener is not a function");Ln(this,gn).push(e)}getDefaultSourceProvider(){return Ln(this,mn)}getSource(e,t){var i;return null==(i=Ln(this,un)[e])?void 0:i.getSource(t)}getSourceValue(e,t){var i;return null==(i=Ln(this,un)[e])?void 0:i.getSourceValue(t)}subscribe(e,t,i,s){var r;return null==(r=Ln(this,un)[e])?void 0:r.subscribe(t,i,s)}subscribeAll(e,t,i){var s;return null==(s=Ln(this,un)[e])?void 0:s.subscribeAll(t,i)}}un=new WeakMap,pn=new WeakMap,mn=new WeakMap,gn=new WeakMap;var Bn="object"==typeof global&&global&&global.Object===Object&&global,jn="object"==typeof self&&self&&self.Object===Object&&self,Wn=(Bn||jn||Function("return this")()).Symbol,Un=Wn?Wn.prototype:void 0;Un&&Un.toString;const qn=()=>{};class Hn{constructor(){Pn(this,Sn),Pn(this,Cn),Pn(this,En),Pn(this,bn,setInterval(An(this,Sn,$n).bind(this),100)),Pn(this,fn,{}),Pn(this,yn,void 0),Pn(this,vn,new Map),Pn(this,wn,new Map),Pn(this,xn,new Map)}updateSource(e,t){clearTimeout(Ln(this,yn)),void 0===Ln(this,fn)[e]?Ln(this,fn)[e]={first:{type:"change",value:t}}:Ln(this,fn)[e].last={type:"change",value:t}}removeSource(e){void 0===Ln(this,fn)[e]?Ln(this,fn)[e]={first:{type:"removal"}}:Ln(this,fn)[e].last={type:"removal"}}clearSources(e=qn){An(this,Sn,$n).call(this,(()=>{Ln(this,vn).forEach((e=>e())),e()}))}clearSourcesWithTimeout(e,t){clearTimeout(Ln(this,yn)),zn(this,yn,setTimeout((()=>{this.clearSources(t)}),e))}userUpdate(e,t){this.updateSource(e,t)}static getType(e){return"string"==typeof e?"string":"number"==typeof e?"number":"boolean"==typeof e?"boolean":e instanceof Array?"Array":null===e?"null":null}addClearSourcesHandler(e){const t=Symbol("clearSources");return Ln(this,vn).set(t,e),()=>{Ln(this,vn).delete(t)}}addSourcesChangedHandler(e){const t=Symbol("sourcesChanged");return Ln(this,wn).set(t,e),()=>{Ln(this,wn).delete(t)}}addSourcesRemovedHandler(e){const t=Symbol("sourcesRemoved");return Ln(this,xn).set(t,e),()=>{Ln(this,xn).delete(t)}}disconnect(){clearTimeout(Ln(this,bn))}}bn=new WeakMap,fn=new WeakMap,yn=new WeakMap,vn=new WeakMap,wn=new WeakMap,xn=new WeakMap,Sn=new WeakSet,$n=function(e=qn){if(0===Object.keys(Ln(this,fn)).length)return void e();const t=((e,t)=>{for(var i in t||(t={}))Nn.call(t,i)&&Rn(e,i,t[i]);if(Tn)for(var i of Tn(t))Vn.call(t,i)&&Rn(e,i,t[i]);return e})({},Ln(this,fn));zn(this,fn,{});const i={},s={};Object.entries(t).forEach((([e,t])=>{i[e]=t.first,void 0!==t.last&&(s[e]=t.last)})),An(this,Cn,kn).call(this,i),An(this,En,_n).call(this,i),Object.keys(s).length>0?setTimeout((()=>{An(this,Cn,kn).call(this,s),An(this,En,_n).call(this,s),e()})):e()},Cn=new WeakSet,kn=function(e){const t={};Object.entries(e).forEach((([i,{type:s}])=>{"change"===s&&(t[i]=e[i].value)})),Object.keys(t).length>0&&Ln(this,wn).forEach((e=>e(t)))},En=new WeakSet,_n=function(e){const t=[];Object.entries(e).forEach((([e,{type:i}])=>{"removal"===i&&t.push(e)})),t.length>0&&Ln(this,xn).forEach((e=>e(t)))};class Kn{constructor(e,t="none",i="none"){this._connector=e,this._element=null,this._container=null,this._layoutConfig=null,this._parentLayoutConfig=null,this._selectionBoxElement=this._createSelectionBox(),this._hidden=!0,this._background=t,this._border=i,window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}_createSelectionBox(){const e=document.createElement("div");return e.style.background=this._background,e.style.border=this._border,e.style.display="none",e.style.position="absolute",document.body.appendChild(e),e}get element(){return this._element}get parentElement(){return this.element.parentElement}get selectionBoxElement(){return this._selectionBoxElement}get translation(){return this.element?function(e){const t=window.getComputedStyle(e),i=t.transform||t.webkitTransform||t.mozTransform;if("none"===i||!i)return{x:0,y:0,z:0};const s=i.includes("3d")?"3d":"2d",r=i.match(/matrix.*\((.+)\)/)[1].split(", ");return"2d"===s?{x:parseFloat(r[4]),y:parseFloat(r[5]),z:0}:"3d"===s?{x:r[12],y:r[13],z:r[14]}:void 0}(this.element):{x:0,y:0,z:0}}get resizable(){return{vertical:this._layoutConfig.resizableVertical,horizontal:this._layoutConfig.resizableHorizontal}}get minHeight(){return this._layoutConfig.minHeight}get minWidth(){return this._layoutConfig.minWidth}get parentLayout(){return this._parentLayoutConfig.type}get layout(){return this._layoutConfig.type}get movable(){return"absolute"===this.parentLayout&&this._layoutConfig.movable}setElement(e,t){this._element=e,this._container=t,this._layoutConfig=this._getLayoutConfig(e),this._parentLayoutConfig=this._getLayoutConfig(null==e?void 0:e.parentElement)}show(){this._hidden=!1,this._selectionBoxElement.style.display="block"}hide(){this._hidden=!0,this._selectionBoxElement.style.display="none"}_getLayoutConfig(e){var t,i,s,r,n,a,o,l,d,h,c;const u=null==(i=null==(t=this._connector.getMatchingElementConfig(e))?void 0:t.dashboard)?void 0:i.layout;return{type:null==u?void 0:u.type,resizableVertical:!1!==(null==u?void 0:u.resizable)&&(null==(r=null==(s=null==u?void 0:u.resizable)?void 0:s.vertical)||r),resizableHorizontal:!1!==(null==u?void 0:u.resizable)&&(null==(a=null==(n=null==u?void 0:u.resizable)?void 0:n.horizontal)||a),movable:null==(o=null==u?void 0:u.movable)||o,minWidth:null!=(d=null==(l=null==u?void 0:u.size)?void 0:l.minWidth)?d:20,minHeight:null!=(c=null==(h=null==u?void 0:u.size)?void 0:h.minHeight)?c:20}}_getBoundingRect(){const{x:e,y:t,top:i,bottom:s,left:r,right:n,width:a,height:o}=this._connector.getRootElement().getBoundingClientRect();return{x:this._container.offsetLeft,y:this._container.offsetTop,bottom:s,top:i,left:r,right:n,width:a,height:o}}_setPreviewBounds(){if(this._element&&!this._hidden&&function(e){if(!e)return!1;const{width:t,height:i}=e.getBoundingClientRect(),s=window.getComputedStyle(e);return 0!==t&&0!==i&&"0"!==s.width&&"0"!==s.height&&"0"!==s.opacity&&"none"!==s.display&&"hidden"!==s.visibility}(this._element)){const e=this._getBoundingRect(),{x:t,y:i,bottom:s,right:r,width:n,height:a}=this._element.getBoundingClientRect(),o=Math.max(t,e.x),l=Math.max(i,e.y),d=Math.min(r,e.right),h=Math.min(s,e.bottom),c=Math.min(d-o,n),u=Math.min(h-l,a);this._selectionBoxElement.style.display=t<e.right?"block":"none",this._selectionBoxElement.style.left=o+"px",this._selectionBoxElement.style.top=l+"px",this._selectionBoxElement.style.width=c+"px",this._selectionBoxElement.style.height=u+"px",this._selectionBoxElement.style.boxSizing="border-box",this._selectionBoxElement.style.borderRight=r>e.right?"none":this._border,this._selectionBoxElement.style.borderLeft=t<e.x?"none":this._border,this._selectionBoxElement.style.borderTop=i<e.y?"none":this._border,this._selectionBoxElement.style.borderBottom=s>e.bottom?"none":this._border,this._selectionBoxElement.style.background=this._background}else this._selectionBoxElement.style.display="none";window.requestAnimationFrame((()=>{this._setPreviewBounds()}))}}class Xn{constructor(e){pt(this,M,void 0),pt(this,T,void 0),pt(this,N,void 0),pt(this,V,void 0),pt(this,R,void 0),mt(this,M,null),mt(this,T,new Kn(e,"none","2px dashed green")),mt(this,N,new Kn(e,"rgba(3, 132, 210, .5)","none")),mt(this,R,new Kn(e)),mt(this,V,Lt(ut(this,T).selectionBoxElement)),ut(this,V).on("resizeend",(()=>{this._addResizeInteraction()}))}setDragging(e){e?ut(this,R).show():ut(this,R).hide()}getDragArea(){return ut(this,R)}addInteraction(e,t){ut(this,T).setElement(e,t),ut(this,R).setElement(e,t),mt(this,M,t),e&&(this._addResizeInteraction(),this._addDragInteraction()),e===ut(this,N).element&&ut(this,N).hide()}setPreviewedElement(e,t){var i;mt(this,M,t),ut(this,N).setElement(e,t);const s="dashboard-tab"===(null==(i=null==e?void 0:e.nodeName)?void 0:i.toLowerCase());e&&e!==ut(this,T).element&&!s?ut(this,N).show():ut(this,N).hide()}show(){ut(this,T).show()}hide(){ut(this,T).hide()}_addResizeInteraction(){const{resizable:{horizontal:e,vertical:t},element:i,minWidth:s,minHeight:r}=ut(this,T),{width:n,height:a}=i.getBoundingClientRect();let o=0,l=0;ut(this,V).resizable({edges:{left:e&&n>60,right:e,top:t&&a>60,bottom:t},listeners:{start:e=>{o=e.rect.width,l=e.rect.height},move:s=>{let{x:r,y:d}=ut(this,T).translation;const h=s.rect.width-o,c=s.rect.height-l,u=n+h,p=a+c;e&&(i.style.width=`${u}px`),t&&(i.style.height=`${p}px`),r+=s.deltaRect.left,d+=s.deltaRect.top,i.style.webkitTransform=i.style.transform=`translate(${r}px, ${d}px)`}},modifiers:[Lt.modifiers.restrictEdges({outer:"parent"}),Lt.modifiers.restrictSize({min:{width:s,height:r}})]})}_addDragInteraction(){ut(this,V).draggable({listeners:{move:e=>{const{element:t,movable:i,translation:s}=ut(this,T);if(!i||!t)return;let{x:r,y:n}=s;r+=e.dx,n+=e.dy,t.style.webkitTransform=t.style.transform="translate("+r+"px, "+n+"px)"}},modifiers:[Lt.modifiers.restrict({restriction:()=>ut(this,M).getBoundingClientRect(),elementRect:{left:0,right:1,top:0,bottom:1}})]})}}function Yn(e,t){if(!e)return[];const i=t.getMatchingElementConfig(e);return i?i.slots.map((({name:e,allowedChildren:i})=>({slot:e,allowedChildren:t.getElementConfigSelectors().filter((e=>{var s,r;return i instanceof Array?i.includes(e):null==(r=null==(s=t.getElementConfig(e))?void 0:s.dashboard)?void 0:r.topLevel}))}))):[]}M=new WeakMap,T=new WeakMap,N=new WeakMap,V=new WeakMap,R=new WeakMap;class Gn{constructor(e,t){this._connector=e,this._eventListeners=new Map,this._listen=!0,e.subscribeElementConnected((({element:e})=>{const i=i=>{this._listen&&(i.stopPropagation(),t(e))};e.addEventListener("mouseup",i),e.addEventListener("click",i),this._eventListeners.set(e,i)})),e.subscribeElementDisconnected((({element:e})=>{e.removeEventListener("mouseup",this._eventListeners.get(e)),e.removeEventListener("click",this._eventListeners.get(e)),this._eventListeners.delete(e)}))}setListening(e){this._listen=e}}class Jn extends xt{constructor(){super(),pt(this,I),pt(this,P),pt(this,A),this.connector=null,this.element=null,this._selectedTab=null}updated(e){const t=gt(this,A,F).call(this);(e.has("element")||e.has("allowedChildren"))&&(t.includes(this._selectedTab)||(this._selectedTab=t[0])),e.has("_selectedTab")&&gt(this,I,L).call(this)}render(){const e=gt(this,A,F).call(this);return $t`
      <vaadin-tabs theme="small" @selected-changed=${gt(this,P,z)} selected=${e.indexOf(this._selectedTab)}>
        ${e.map((e=>$t`
          <vaadin-tab>${e}</vaadin-tab>
        `))}
      </vaadin-tabs>
    `}}I=new WeakSet,L=function(){const e=new CustomEvent("tabChange",{bubbles:!0,composed:!0,detail:{tab:this._selectedTab}});this.dispatchEvent(e)},P=new WeakSet,z=function(e){const t=gt(this,A,F).call(this);this._selectedTab=t[e.detail.value]},A=new WeakSet,F=function(){return["Properties","Sources","HTML"]},ht(Jn,"styles",St`
    :host {
      display: block;
      margin-top: 5px;
    }
  `),ht(Jn,"properties",{connector:{type:It,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},_selectedTab:{state:!0}}),customElements.define("dashboard-tabs",Jn);class Qn extends xt{render(){return $t`<slot></slot>`}}function Zn(e){return ia(e,e.getRootElement(),!0)}function ea(e,t){e.getRootElement().querySelectorAll("dashboard-tab").forEach((e=>{e.remove()}));const i=document.createElement("div");i.innerHTML=t,i.querySelectorAll("dashboard-tab").forEach((t=>{t.setAttribute("slot","tab"),e.getRootElement().append(t)}))}function ta(e,t,i){const s=null==e?void 0:e.getElementWebbit(t);if(s){const{properties:e}=s.getConfig();Object.entries(e).forEach((([e,{attribute:t,defaultValue:r}])=>{const n=s.getPropertyHandler(e);if(n.isAttribute()){const e=n.getStoredAttribute();null===e||n.getStoredValue()===r?i.removeAttribute(t):i.setAttribute(t,e)}}))}for(let r=0;r<t.children.length;r++)ta(e,t.children[r],i.children[r])}function ia(e,t,i=!1){const s=t.cloneNode(!0);return ta(e,t,s),r=i?s.innerHTML:s.outerHTML,Pt.exports.html(r,{"wrap-attributes":"force-expand-multiline"});var r}ht(Qn,"styles",St`
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
  `),ht(Qn,"properties",{tabName:{type:String,attribute:"tab-name",reflect:!0}}),customElements.define("dashboard-tab",Qn);const sa=[{text:"File",children:[{text:"Upload Dashboard HTML",id:"upload"},{text:"Download Dashboard HTML",id:"download"}]}];class ra extends xt{constructor(){super(),pt(this,O),pt(this,B),pt(this,W),pt(this,q),this.hideMenu=!1}firstUpdated(){zt.scan(this.renderRoot)}render(){return $t`
      ${this.hideMenu?"":$t`
        <vaadin-menu-bar
          theme="icon contrast tertiary"
          .items="${sa}"
          @item-selected="${gt(this,q,H)}"
        ></vaadin-menu-bar>
      `}
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Moves the selected element up relative to its siblings" 
        title="Moves the selected element up relative to its siblings"
        @click=${gt(this,B,j)}
      >
        <iron-icon icon="vaadin:level-up"></iron-icon>
      </vaadin-button>
      <vaadin-button 
        ?disabled=${!this.element}
        theme="icon" 
        aria-label="Moves the selected element down relative to its siblings" 
        title="Moves the selected element down relative to its siblings"
        @click=${gt(this,W,U)}
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
        @click=${gt(this,O,D)}
      >
        <iron-icon icon="vaadin:trash"></iron-icon>
      </vaadin-button>
    `}}O=new WeakSet,D=function(){var e,t,i;const s=this.element.parentElement,r=[...s.children],n=r.indexOf(this.element),a=null!=(t=null!=(e=r[n+1])?e:r[n-1])?t:s;null==(i=this.element)||i.remove();const o=this.connector.getRootElement().contains(a)&&a!==this.connector.getRootElement();this.dispatchEvent(new CustomEvent("elementRemove",{detail:{nextElement:o?a:null},bubbles:!0,composed:!0}))},B=new WeakSet,j=function(){this.element.previousElementSibling&&this.element.parentElement.insertBefore(this.element,this.element.previousElementSibling)},W=new WeakSet,U=function(){this.element.nextElementSibling&&this.element.parentElement.insertBefore(this.element.nextElementSibling,this.element)},q=new WeakSet,H=async function(e){const{id:t}=e.detail.value;if("download"===t)!function(e,t="dashboard.html"){const i=new Blob([e],{type:"text/html"}),s=document.createElement("a");s.download=t,s.href=window.URL.createObjectURL(i),s.dataset.downloadurl=["text/html",s.download,s.href].join(":");const r=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});s.dispatchEvent(r)}(Zn(this.connector));else{const{cancelled:e,error:t,result:i}=await new Promise((e=>{const t=document.createElement("input");t.type="file",t.accept=".html",t.onchange=()=>{const{files:i}=t;i.length<1&&e({result:{},cancelled:!0,error:!1});const s=new FileReader;s.onload=t=>{try{const s=t.target.result;e({result:{html:s,name:i.item(0).name.replace(/\.(html)$/,"")},cancelled:!1,error:!1})}catch(s){e({result:"",cancelled:!1,error:!0})}},s.readAsText(i.item(0))};const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(i)}));e||t||(ea(this.connector,i.html),this.dispatchEvent(new CustomEvent("dashboardUpload",{bubbles:!0,composed:!0})))}},ht(ra,"styles",St`
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
  `),ht(ra,"properties",{connector:{type:It,attribute:!1},element:{type:HTMLElement,attribute:!1},hideMenu:{type:Boolean,attribute:"hide-menu"}}),customElements.define("dashboard-menu",ra);class na extends xt{constructor(){super(),pt(this,K),pt(this,Y),this.selectedTabIndex=0,this.tabs=[],this.addTabDisabled=!1,this._ntConnected=!1}firstUpdated(){NetworkTables.addRobotConnectionListener((e=>{this._ntConnected=e}),!0)}render(){return $t`
      <vaadin-drawer-toggle></vaadin-drawer-toggle>
      <div class="navbar">
        <div class="tabs">
          <vaadin-tabs .selected=${this.selectedTabIndex} @selected-changed=${gt(this,K,X)}>
            ${this.tabs.map((({label:e},t)=>$t`
            <vaadin-tab value=${t}>${e}</vaadin-tab>
            `))}
          </vaadin-tabs>
          <vaadin-button class="add-tab-button" theme="icon tertiary" aria-label="Add Tab" @click=${gt(this,Y,G)}
            ?disabled=${this.addTabDisabled}>
            <iron-icon icon="vaadin:plus"></iron-icon>
          </vaadin-button>
        </div>
        <div class="nt-connection">
          NetworkTables:
          <span class=${this._ntConnected?"connected":"disconnected"}>
            ${this._ntConnected?"Connected":"Disconnected"}
          </span>
        </div>
      </div>
    `}}K=new WeakSet,X=function(e){this.dispatchEvent(new CustomEvent("tabChange",{detail:{value:e.detail.value},bubbles:!0,composed:!0}))},Y=new WeakSet,G=function(){this.dispatchEvent(new CustomEvent("addTab",{bubbles:!0,composed:!0}))},ht(na,"styles",St`

    :host {
      display: flex;
      width: 100%;
    }

    .navbar {
      display: flex; 
      justify-content: space-between; 
      width: 100%;
      flex: 1;
    }

    .tabs {
      display: flex;
    }

    .add-tab-button {
      cursor: pointer;
    }
  
    .nt-connection {
      align-self: center; 
      padding-right: 15px;
    }
  
    .nt-connection span.connected {
      color: green;
    }
  
    .nt-connection span.disconnected {
      color: red;
    }
  `),ht(na,"properties",{selectedTabIndex:{type:Number},tabs:{type:Array},addTabDisabled:{type:Boolean},_ntConnected:{state:!0}}),customElements.define("dashboard-navbar",na);class aa extends xt{constructor(){super(),pt(this,Q),pt(this,J,void 0),this.selectedElement=null,this.connector=null,this.hideMenu=!1,this.allowedChildren=[],this.selectedTab=null,this.interact=null,mt(this,J,!1)}render(){return $t`
      <div class="drawer-areas">
        <div class="drawer-area">
          <dashboard-menu
            .element=${this.selectedElement} 
            .connector=${this.connector}
            ?hide-menu=${this.hideMenu}
          ></dashboard-menu>
          <dashboard-element-tree
            .selectedElement=${this.selectedElement}
            .connector=${this.connector}
          ></dashboard-element-tree>
        </div>
        <vaadin-tabs 
          theme="small minimal" 
          class="tabs"
          @selected-changed="${gt(this,Q,Z)}" selected="${ut(this,J)?1:0}"
        >
          <vaadin-tab>Add Elements</vaadin-tab>
          <vaadin-tab>Edit Element</vaadin-tab>
        </vaadin-tabs>
        ${ut(this,J)?"":$t` 
          <dashboard-add-elements 
            .element=${this.selectedElement} 
            .connector=${this.connector}
            .allowedChildren=${this.allowedChildren}
            .interact="${this.interact}"
          ></dashboard-add-elements>
        `}

        ${ut(this,J)?$t` 
          <div class="edit-html-header"> 
            ${this.selectedElement?$t`
              <p>Edit element <span>${Pr(this.connector,this.selectedElement)}</span></p>
            `:$t`
              <p>No element is currently selected.</p>
            `}
          </div>
          <div class="drawer-area">
            <dashboard-tabs 
              .element=${this.selectedElement} 
              .connector=${this.connector}
              .allowedChildren=${this.allowedChildren}
            ></dashboard-tabs>
          </div>
          <div class="drawer-area bottom-area">
            ${"Properties"===this.selectedTab?$t`
              <dashboard-properties-tool .element=${this.selectedElement} .connector=${this.connector}></dashboard-properties-tool>
            `:""}
            ${"Sources"===this.selectedTab?$t`
              <dashboard-sources-tool .element=${this.selectedElement} .connector=${this.connector}></dashboard-sources-tool>
            `:""}
            ${"HTML"===this.selectedTab?$t`
              <dashboard-edit-html 
                .element=${this.selectedElement} 
                .connector=${this.connector}
              ></dashboard-edit-html>
            `:""}
          </div>
        `:""}
      </div>
    `}}J=new WeakMap,Q=new WeakSet,Z=function(e){mt(this,J,1===e.detail.value),this.requestUpdate()},ht(aa,"styles",St`

    :host {
      display: block;
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

    dashboard-add-elements {
      flex: 1;
      overflow: auto;
    }

    .tabs {
      background: rgba(200, 200, 200, 0.2);
      box-shadow: none;
    }

    p {
      margin-top: 0;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    p span {
      color: purple;
    }

    .edit-html-header {
      padding: 15px 10px;
    }
  `),ht(aa,"properties",{selectedElement:{type:HTMLElement},connector:{type:Object},hideMenu:{type:Boolean,attribute:"hide-menu"},allowedChildren:{type:Array},selectedTab:{type:String},interact:{type:Object}}),customElements.define("dashboard-drawer",aa);const oa=St`
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

 
`;class la extends xt{constructor(){super(),pt(this,te),pt(this,se),pt(this,ee,void 0),this.element=null,this.connector=null,mt(this,ee,null)}firstUpdated(){mt(this,ee,new At(ut(this,te,ie),{language:"js",styleParent:this.renderRoot}))}updated(e){if(e.has("element")&&this.element){const e=ia(this.connector,this.element);ut(this,ee).updateCode(e)}}render(){return this.element?$t`
      <div class="container">
        <div class="editor">
          <div id="editor"></div>
        </div>
        <div class="buttons">
          <vaadin-button theme="small primary success" @click=${gt(this,se,re)}>Confirm</vaadin-button>
        </div>
      </div>
    `:$t``}}ee=new WeakMap,te=new WeakSet,ie=function(){return this.renderRoot.querySelector("#editor")},se=new WeakSet,re=function(){const e=ut(this,ee).getCode(),t=document.createElement("div");t.innerHTML=e;const i=t.firstElementChild;if(!(i&&i.nodeName===this.element.nodeName))return;const s=this.element.cloneNode(!0);for(s.getAttributeNames().forEach((e=>{i.hasAttribute(e)||s.removeAttribute(e)})),i.getAttributeNames().forEach((e=>{s.setAttribute(e,i.getAttribute(e))})),"dashboard-tab"===s.tagName.toLowerCase()&&s.setAttribute("slot","tab");s.lastChild;)s.removeChild(s.lastChild);[...i.childNodes].forEach((e=>{s.append(e)})),this.element.parentNode.replaceChild(s,this.element),this.dispatchEvent(new CustomEvent("elementSave",{detail:{element:s},bubbles:!0,composed:!0}))},ht(la,"properties",{element:{type:HTMLElement,attribute:!1},connector:{type:It,attribute:!1}}),ht(la,"styles",oa),customElements.define("dashboard-edit-html",la);const da=St`
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

  vaadin-tabs {
    display: inline-flex;
  }
`;class ha extends xt{constructor(){super(),pt(this,oe),pt(this,de),pt(this,ce),pt(this,pe),pt(this,ge),pt(this,fe),pt(this,ve),pt(this,xe),pt(this,$e),pt(this,ke),pt(this,_e),pt(this,Te),pt(this,Ve),pt(this,ne,void 0),pt(this,ae,void 0),this.store=null,this.elementConfigs={},this.hideMenu=!1,this.elementNames=[],this.connector=null,this._selectedElement=null,this._previewedElement=null,this._selectedTab=null,this._allowedChildren=[],mt(this,ae,null),mt(this,ne,null)}get _containerElement(){return this.renderRoot.querySelector("#container")}get _addElements(){return this.renderRoot.querySelector("dashboard-add-elements")}firstUpdated(){this.connector=new It(this,this.store,dt(lt({},this.elementConfigs),{"dashboard-tab":{dashboard:{topLevel:!1,displayName:e=>e.getAttribute("tab-name")||"Tab",layout:{type:"absolute",movable:!1,resizable:!1}},properties:{tabName:{type:"String",attribute:"tab-name",reflect:!0}},slots:[{name:""}]}})),mt(this,ne,new Gn(this.connector,(e=>{this._selectedElement=e}))),Object.entries(Sr).forEach((([e,t])=>{var i;(null==(i=t.topLevel)||i)&&this.elementNames.push(e)})),mt(this,ae,new Xn(this.connector)),this.resetHtml(),this._selectedElement=this.querySelector("dashboard-tab"),this.requestUpdate();new MutationObserver((e=>{this.requestUpdate()})).observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["tab-name"]})}get _appLayout(){return this.renderRoot.querySelector("vaadin-app-layout")}updated(e){e.has("_selectedElement")&&(this._allowedChildren=Yn(this._selectedElement,this.connector),ut(this,ae).addInteraction(this._selectedElement,this._containerElement),gt(this,fe,ye).call(this)),(e.has("_selectedTab")||e.has("_selectedElement"))&&gt(this,oe,le).call(this),e.has("_previewedElement")&&ut(this,ae).setPreviewedElement(this._previewedElement,this._containerElement)}getConnector(){return this.connector}setHtml(e){ea(this.connector,e);const t=this.querySelector("dashboard-tab");t&&(this._selectedElement=t)}resetHtml(){ea(this.connector,'\n      <dashboard-tab tab-name="TeleOperated" slot="tab" selected></dashboard-tab>\n      <dashboard-tab slot="tab" tab-name="Autonomous"></dashboard-tab>\n    ')}reloadHtml(){this.setHtml(this.getHtml())}getHtml(){return Zn(this.connector)}addElements(e){this.connector.addElementConfigs(e),this._allowedChildren=Yn(this._selectedElement,this.connector)}render(){var e;if(!this.connector)return $t``;const t=gt(this,ge,be).call(this);return $t`
      <vaadin-app-layout primary-section="drawer" @drawer-opened-changed=${gt(this,$e,Ce)}>
        <dashboard-navbar 
          slot="navbar" 
          .selectedTabIndex="${t}"
          .tabs="${gt(this,ve,we).call(this)}"
          .addTabDisabled="${!(null==(e=this._appLayout)?void 0:e.drawerOpened)}"
          @tabChange="${gt(this,xe,Se)}"
          @addTab=${gt(this,_e,Me)}
        ></dashboard-navbar>
        <dashboard-drawer
          slot="drawer"
          .selectedElement="${this._selectedElement}"
          .connector="${this.connector}"
          ?hide-menu=${this.hideMenu}
          .allowedChildren="${this._allowedChildren}"
          .selectedTab="${this._selectedTab}"
          .interact="${ut(this,ae)}"
          @elementRemove=${gt(this,ke,Ee)}
          @dashboardUpload=${gt(this,Te,Ne)}
          @elementSelect=${gt(this,de,he)}
          @elementPreviewStart=${gt(this,ce,ue)}
          @elementPreviewEnd=${gt(this,pe,me)}
          @tabChange=${e=>{this._selectedTab=e.detail.tab}}
          @elementSave=${gt(this,Ve,Re)}
        ></dashboard-drawer>
        <div id="container">
          <slot name="tab"></slot>
        </div>
      </vaadin-app-layout>
    `}}function ca(e,t){const i=e.getElementConfig(t);if(null==i?void 0:i.demos){const[{html:e}]=i.demos;return e}return`<${t}></${t}>`}ne=new WeakMap,ae=new WeakMap,oe=new WeakSet,le=function(){var e,t,i;const s="dashboard-tab"===(null==(t=null==(e=this._selectedElement)?void 0:e.tagName)?void 0:t.toLowerCase());(null==(i=this._appLayout)?void 0:i.drawerOpened)&&!s?ut(this,ae).show():ut(this,ae).hide()},de=new WeakSet,he=function(e){this._selectedElement=e.detail.element},ce=new WeakSet,ue=function(e){this._previewedElement=e.detail.element},pe=new WeakSet,me=function(){this._previewedElement=null},ge=new WeakSet,be=function(){return[...this.querySelectorAll("dashboard-tab")].findIndex((e=>e===this._selectedElement||e.contains(this._selectedElement)))},fe=new WeakSet,ye=function(){const e=gt(this,ge,be).call(this);[...this.querySelectorAll("dashboard-tab")].forEach(((t,i)=>{i===e?t.setAttribute("selected",""):t.removeAttribute("selected")}))},ve=new WeakSet,we=function(){return[...this.querySelectorAll("dashboard-tab")].map((e=>({label:e.getAttribute("tab-name")})))},xe=new WeakSet,Se=function(e){const t=[...this.children][e.detail.value];t&&!t.contains(this._selectedElement)&&(this._selectedElement=t)},$e=new WeakSet,Ce=function(){var e;gt(this,oe,le).call(this);const t=!!(null==(e=this._appLayout)?void 0:e.drawerOpened);ut(this,ne).setListening(t),this._previewedElement=null,this.requestUpdate()},ke=new WeakSet,Ee=function(e){this._selectedElement=e.detail.nextElement},_e=new WeakSet,Me=function(){const e=this.querySelectorAll("dashboard-tab").length,t=document.createElement("dashboard-tab");t.setAttribute("tab-name",`Tab ${e+1}`),t.setAttribute("slot","tab"),this.append(t),0===e&&(this._selectedElement=t)},Te=new WeakSet,Ne=function(){const e=this.querySelector("dashboard-tab");e&&(this._selectedElement=e)},Ve=new WeakSet,Re=function(e){this._selectedElement=e.detail.element},ht(ha,"styles",da),ht(ha,"properties",{store:{type:Dn,attribute:!1},elementConfigs:{type:Object,attribute:!1},hideMenu:{type:Boolean,attribute:"hide-menu"},_selectedElement:{state:!0},_previewedElement:{state:!0},_selectedTab:{state:!0},_allowedChildren:{state:!0}}),customElements.define("dashboard-root",ha);const ua=St`
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

  .input-fields {
    margin-bottom: 10px;
    display: flex;
  }

  .input-fields > * {
    flex: 1;
  }

  .input-fields .input-field + .input-field {
    margin-left: 7px;
  }

  vaadin-combo-box:part(input-field) {
    transition: none;
  }

  .component-selector {
    --vaadin-combo-box-overlay-width: 380px;
  }

  .component-item {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 70px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    padding: 5px;
  }

  .info {
    cursor: grab;
    flex: 1;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }

  button {  
    background: white;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
  }

  .iconify {
    color: black;
    width: 20px;
    height: 20px;
  }

  .description {
    font-size: 15px;
    padding-right: 5px;
  }
`;class pa extends xt{constructor(){super(),pt(this,Pe),pt(this,Ae),pt(this,Oe),pt(this,Be),pt(this,We),pt(this,qe),pt(this,Ke),pt(this,Ye),pt(this,Je),pt(this,Ze),pt(this,Ie,void 0),pt(this,Le,void 0),this.connector=null,this.element=null,this.allowedChildren=[],this.interact=null,this._slot="",this._searchInput="",mt(this,Ie,null),mt(this,Le,null)}firstUpdated(){gt(this,Pe,ze).call(this)}updated(e){var t;if(e.has("allowedChildren")){const e=null==(t=this.allowedChildren)?void 0:t[0];this._slot=null==e?void 0:e.slot,this._searchInput=""}zt.scan(this.renderRoot)}render(){var e,t,i,s,r,n;if(!this.element)return $t`<p>No element is currently selected.</p>`;const a=Pr(this.connector,this.element);if(!(null==(e=this.connector)?void 0:e.getElementWebbit(this.element)))return $t`<p>There is no configuration for the <span>${a}</span> element.</p>`;const o=null!=(s=null==(i=null==(t=this.allowedChildren)?void 0:t.find((({slot:e})=>this._slot===e)))?void 0:i.allowedChildren)?s:[],l=null!=(n=null==(r=this.allowedChildren)?void 0:r.map((({slot:e})=>({value:e,label:e||"unnamed"}))))?n:[];return $t`
      <p>Add elements to <span>${a}</span></p>
      <div class="input-fields">
        <vaadin-text-field
          class="input-field"
          label="Search Component"
          theme="small"
          @input="${gt(this,qe,He)}"
          .value="${this._searchInput}"
          ?disabled=${0===o.length}
        >
          <iron-icon slot="suffix" icon="vaadin:search" style="cursor: pointer"></iron-icon>
        </vaadin-text-field>
        <vaadin-combo-box
          class="slot-selector input-field"
          theme="small"
          label="Slot"
          .items=${l}
          ?readonly=${1===l.length}
          ?disabled=${0===l.length}
          .value="${this._slot}"
          @change="${gt(this,Ae,Fe)}"
        ></vaadin-combo-box>
      </div>
      <div class="component-list">
        ${o.filter((e=>e.indexOf(this._searchInput)>-1)).map((e=>$t`
              <div class="component-item">
                <div 
                  class="info" '
                  draggable="true" 
                  @dragstart="${gt(this,Je,Qe)}" 
                  @dragend="${t=>gt(this,Ze,et).call(this,e,t)}"
                >
                  <p><span>${e}</span></p>
                  <span class="description">${gt(this,Be,je).call(this,e)}</span>
                </div>
                <div class="buttons">
                  <button @click=${()=>gt(this,Oe,De).call(this,e)} title="Prepend element">
                    <span class="iconify" data-icon="mdi:table-row-plus-before"></span>
                  </button>
                  <button @click=${()=>gt(this,We,Ue).call(this,e)} title="Append element">
                    <span class="iconify" data-icon="mdi:table-row-plus-after"></span>
                  </button>
                </div>
              </div>
            `))}
      </div>
    `}}Ie=new WeakMap,Le=new WeakMap,Pe=new WeakSet,ze=function(){this.renderRoot.querySelectorAll("vaadin-combo-box").forEach((e=>{var t;const i=document.createElement("div");i.innerHTML="\n        <style>\n          vaadin-text-field::part(input-field)::after {\n            transition: none;\n          }\n        </style>\n      ",null==(t=null==e?void 0:e.shadowRoot)||t.prepend(i)}))},Ae=new WeakSet,Fe=function(e){const t=e.target||e.path[0];this._slot=t.value},Oe=new WeakSet,De=function(e){const t=document.createElement("div");return t.innerHTML=ca(this.connector,e),[...t.children].map((e=>(this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.prepend(e),e)))},Be=new WeakSet,je=function(e){var t,i;return null!=(i=null==(t=this.connector.getElementConfig(e))?void 0:t.description)?i:""},We=new WeakSet,Ue=function(e){const t=document.createElement("div");return t.innerHTML=ca(this.connector,e),[...t.children].map((e=>(this._slot?e.setAttribute("slot",this._slot):e.removeAttribute("slot"),this.element.append(e),e)))},qe=new WeakSet,He=function(e){const t=e.target||e.path[0];this._searchInput=t.value},Ke=new WeakSet,Xe=function(){return this.interact.getDragArea().selectionBoxElement},Ye=new WeakSet,Ge=function(){return this.interact.getDragArea().layout},Je=new WeakSet,Qe=function(e){mt(this,Le,this.element.getBoundingClientRect()),this.interact.setDragging(!0);const t=document.createElement("div");e.dataTransfer.setDragImage(t,0,0),mt(this,Ie,(e=>{e.preventDefault();const{clientX:t,clientY:i}=e;mt(this,Le,{x:t,y:i})})),ut(this,Ke,Xe).addEventListener("dragover",ut(this,Ie))},Ze=new WeakSet,et=function(e,t){this.interact.setDragging(!1);const i=this.element.getBoundingClientRect(),s=ut(this,Le).x-i.x,r=ut(this,Le).y-i.y,n=gt(this,Oe,De).call(this,e);console.log("parent layout:",ut(this,Ye,Ge)),"absolute"===ut(this,Ye,Ge)&&n.forEach((e=>{e.style.transform=`translate(${s}px, ${r}px)`})),ut(this,Ke,Xe).removeEventListener("dragover",ut(this,Ie))},ht(pa,"styles",ua),ht(pa,"properties",{connector:{type:It,attribute:!1},element:{type:HTMLElement,attribute:!1},allowedChildren:{type:Array,attribute:!1},interact:{type:Object},_slot:{state:!0},_searchInput:{state:!0}}),customElements.define("dashboard-add-elements",pa),function(e){const t=4294967296,i=9007199254740992;e.CBOR={encode:function(e){let s,r=new ArrayBuffer(256),n=new DataView(r),a=0;function o(e){let t=r.byteLength;const i=a+e;for(;t<i;)t<<=1;if(t!==r.byteLength){const e=n;r=new ArrayBuffer(t),n=new DataView(r);const i=a+3>>2;for(let t=0;t<i;++t)n.setUint32(t<<2,e.getUint32(t<<2))}return s=e,n}function l(){a+=s}function d(e){l(o(1).setUint8(a,e))}function h(e){const t=o(e.length);for(let i=0;i<e.length;++i)t.setUint8(a+i,e[i]);l()}function c(e,i){var s;i<24?d(e<<5|i):i<256?(d(e<<5|24),d(i)):i<65536?(d(e<<5|25),s=i,l(o(2).setUint16(a,s))):i<4294967296?(d(e<<5|26),function(e){l(o(4).setUint32(a,e))}(i)):(d(e<<5|27),function(e){const i=e%t,s=(e-i)/t,r=o(8);r.setUint32(a,s),r.setUint32(a+4,i),l()}(i))}if(function e(t){let s;if(!1===t)return d(244);if(!0===t)return d(245);if(null===t)return d(246);if(void 0===t)return d(247);switch(typeof t){case"number":if(Math.floor(t)===t){if(0<=t&&t<=i)return c(0,t);if(-i<=t&&t<0)return c(1,-(t+1))}return d(251),function(e){l(o(8).setFloat64(a,e))}(t);case"string":const r=[];for(s=0;s<t.length;++s){let e=t.charCodeAt(s);e<128?r.push(e):e<2048?(r.push(192|e>>6),r.push(128|63&e)):e<55296?(r.push(224|e>>12),r.push(128|e>>6&63),r.push(128|63&e)):(e=(1023&e)<<10,e|=1023&t.charCodeAt(++s),e+=65536,r.push(240|e>>18),r.push(128|e>>12&63),r.push(128|e>>6&63),r.push(128|63&e))}return c(3,r.length),h(r);default:let n;if(Array.isArray(t))for(n=t.length,c(4,n),s=0;s<n;++s)e(t[s]);else if(t instanceof Uint8Array)c(2,t.length),h(t);else{const i=Object.keys(t);for(n=i.length,c(5,n),s=0;s<n;++s){const r=i[s];e(r),e(t[r])}}}}(e),"slice"in r)return r.slice(0,a);const u=new ArrayBuffer(a),p=new DataView(u);for(let t=0;t<a;++t)p.setUint8(t,n.getUint8(t));return u},decode:function(e,i,s){const r=new DataView(e);let n=0;function a(e,t){return n+=e,t}function o(t){return a(t,new Uint8Array(e,n,t))}function l(){return a(1,r.getUint8(n))}function d(){return a(2,r.getUint16(n))}function h(){return a(4,r.getUint32(n))}function c(){return 255===r.getUint8(n)&&(n+=1,!0)}function u(e){if(e<24)return e;if(24===e)return l();if(25===e)return d();if(26===e)return h();if(27===e)return h()*t+h();if(31===e)return-1;throw"Invalid length encoding"}function p(e){const t=l();if(255===t)return-1;const i=u(31&t);if(i<0||t>>5!==e)throw"Invalid indefinite length element";return i}function m(e,t){for(let i=0;i<t;++i){let i=l();128&i&&(i<224?(i=(31&i)<<6|63&l(),t-=1):i<240?(i=(15&i)<<12|(63&l())<<6|63&l(),t-=2):(i=(15&i)<<18|(63&l())<<12|(63&l())<<6|63&l(),t-=3)),i<65536?e.push(i):(i-=65536,e.push(55296|i>>10),e.push(56320|1023&i))}}"function"!=typeof i&&(i=function(e){return e}),"function"!=typeof s&&(s=function(){});const g=function e(){const t=l(),h=t>>5,g=31&t;let b,f;if(7===h)switch(g){case 25:return function(){const e=new ArrayBuffer(4),t=new DataView(e),i=d(),s=32768&i;let r=31744&i;const n=1023&i;if(31744===r)r=261120;else if(0!==r)r+=114688;else if(0!==n)return(s?-1:1)*n*5.960464477539063e-8;return t.setUint32(0,s<<16|r<<13|n<<13),t.getFloat32(0)}();case 26:return a(4,r.getFloat32(n));case 27:return a(8,r.getFloat64(n))}if(f=u(g),f<0&&(h<2||6<h))throw"Invalid length";switch(h){case 0:return f;case 1:return-1-f;case 2:if(f<0){const e=[];let t=0;for(;(f=p(h))>=0;)t+=f,e.push(o(f));const i=new Uint8Array(t);let s=0;for(b=0;b<e.length;++b)i.set(e[b],s),s+=e[b].length;return i}return o(f);case 3:const t=[];if(f<0)for(;(f=p(h))>=0;)m(t,f);else m(t,f);return String.fromCharCode.apply(null,t);case 4:let r;if(f<0)for(r=[];!c();)r.push(e());else for(r=new Array(f),b=0;b<f;++b)r[b]=e();return r;case 5:const n={};for(b=0;b<f||f<0&&!c();++b){n[e()]=e()}return n;case 6:return i(e(),f);case 7:switch(f){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return s(f)}}}();if(n!==e.byteLength)throw"Remaining bytes";return g}}}(window);const ma=new function(){let e,t,i,s,r;if(!("WebSocket"in window))return void alert("Your browser does not support websockets, this will fail!");this.create_map=function(){return new Map},this.keyToId=encodeURIComponent,this.keySelector=function(e){return encodeURIComponent(e).replace(/([;&,.+*~':"!^#$%@\[\]()=>|])/g,"\\$1")};const n=new Set,a=new Set,o=new Set,l=new Map;let d=new Map;function h(){s=new WebSocket(`ws://${r}/networktables/ws`),s&&(s.binaryType="arraybuffer",s.onopen=function(){console.info("Socket opened"),i=!0,n.forEach((e=>e(!0)))},s.onmessage=function(i){const s=CBOR.decode(i.data);if(void 0!==s.r)t=s.r,e=s.a,a.forEach((e=>e(t)));else{const e=s.k,t=s.v,i=s.n;d.set(e,t),o.forEach((s=>s(e,t,i)));const r=l.get(e);void 0!==r&&r.forEach((s=>s(e,t,i)))}},s.onclose=function(){i&&(n.forEach((e=>e(!1))),a.forEach((e=>e(!1))),d=new Map,i=!1,t=!1,e=null,console.info("Socket closed")),setTimeout(h,300)})}this.addWsConnectionListener=function(e,t){return n.add(e),!0===t&&e(i),()=>n.delete(e)},this.addRobotConnectionListener=function(e,i){return a.add(e),!0===i&&e(t),()=>a.delete(e)},this.addGlobalListener=function(e,t){return o.add(e),!0===t&&d.forEach((function(t,i){e(i,t,!0)})),()=>o.delete(e)},this.addKeyListener=function(e,t,i){const s=l.get(e);if(void 0===s?l.set(e,new Set([t])):s.add(t),!0===i){const i=d.get(e);void 0!==i&&t(e,i,!0)}return()=>l.get(e).delete(t)},this.containsKey=function(e){return d.has(e)},this.getKeys=function(){return d.keys()},this.getValue=function(e,t){const i=d.get(e);return void 0===i?t:i},this.getRobotAddress=function(){return e},this.isRobotConnected=function(){return t},this.isWsConnected=function(){return i},this.closeSocket=function(){s&&s.close()},this.putValue=function(e,t){if(!i)return!1;if(void 0===t)throw new Error(e+": 'undefined' passed to putValue");return s.send(CBOR.encode({k:e,v:t})),!0},this.connect=function(e){if(!i)return!1;if("string"!=typeof e)throw new Error("address should be type 'string'");return d=new Map,s.send(CBOR.encode({a:e})),!0},this.setValue=this.putValue,i=!1,t=!1,e=null,this.connectToWs=function(e){r=e||window.location.host,h()}};window.NetworkTables=ma;const ga=e=>{if(["number","boolean","string"].includes(typeof e))return typeof e;if(e instanceof Array){const[t]=e;return["number","boolean","string"].includes(typeof t)?typeof t+"Array":"Array"}return""};class ba extends Hn{constructor(){super(),this.setAddress("localhost"),this.updatedEntriesBeforeReady=[],this.isNtReady=!1,this.ntReady=new Promise((e=>{const t=setInterval((()=>{NetworkTables.isWsConnected()&&(this.isNtReady=!0,e(),clearInterval(t))}),500)})),this.ntReady.then((()=>{this.updatedEntriesBeforeReady.forEach((e=>{void 0===NetworkTables.getValue(e)&&NetworkTables.putValue(e,this.getSource(e))})),NetworkTables.addRobotConnectionListener((e=>{e?this.clearSources(this.updateAll.bind(this)):this.clearSourcesWithTimeout(2e3,this.updateAll.bind(this))}),!0),NetworkTables.addWsConnectionListener((e=>{e?(this.clearSources(this.updateAll.bind(this)),this.connect()):this.clearSourcesWithTimeout(2e3,this.updateAll.bind(this))}),!0),NetworkTables.addGlobalListener(((e,t)=>{this.updateSource(e,t)}),!0)}))}updateAll(){for(let e of NetworkTables.getKeys())this.updateSource(e,NetworkTables.getValue(e))}setAddress(e){NetworkTables.connectToWs(`${e}:8888`)}connect(e){e&&(localStorage.networkTablesAddress="localhost"===e?"127.0.0.1":e),localStorage.networkTablesAddress&&NetworkTables.connect(localStorage.networkTablesAddress)}userUpdate(e,t){if(this.isNtReady)NetworkTables.putValue(e,t);else{const i=this.getSource(e),s=ga(i),r=ga(t);if(!s&&r&&(this.updateSource(e,t),this.updatedEntriesBeforeReady.includes(e)||this.updatedEntriesBeforeReady.push(e)),!r)return;(s===r||s.includes("Array")&&"Array"===r||"Array"===s&&r.includes("Array"))&&(this.updateSource(e,t),this.updatedEntriesBeforeReady.includes(e)||this.updatedEntriesBeforeReady.push(e))}}isRobotConnected(){return!!this.isNtReady&&NetworkTables.isRobotConnected()}isWsConnected(){return NetworkTables.isWsConnected()}async addWsConnectionListener(e,t){this.isNtReady?NetworkTables.addWsConnectionListener(e,t):(t&&e(!1),await this.ntReady,NetworkTables.addWsConnectionListener(e,!1),t&&NetworkTables.isWsConnected()&&e(!0))}async addRobotConnectionListener(e,t){this.isNtReady?NetworkTables.addRobotConnectionListener(e,t):(t&&e(!1),await this.ntReady,NetworkTables.addRobotConnectionListener(e,!1),t&&NetworkTables.isRobotConnected()&&e(!0))}}class fa extends Hn{constructor(){super();const e=()=>{[...window.navigator.getGamepads()].forEach(((e,t)=>{if(!e)return this.removeSource(`/${t}/axes`),this.removeSource(`/${t}/connected`),this.removeSource(`/${t}/id`),this.removeSource(`/${t}/index`),this.removeSource(`/${t}/mapping`),this.removeSource(`/${t}/timestamp`),this.removeSource(`/${t}/buttonPresses`),this.removeSource(`/${t}/buttonTouches`),void this.removeSource(`/${t}/buttonValues`);const{axes:i,buttons:s,connected:r,id:n,mapping:a,timestamp:o}=e;this.updateSource(`/${t}/axes`,i),this.updateSource(`/${t}/connected`,r),this.updateSource(`/${t}/id`,n),this.updateSource(`/${t}/index`,t),this.updateSource(`/${t}/mapping`,a),this.updateSource(`/${t}/timestamp`,o);const l=[],d=[],h=[];s.forEach(((e,t)=>{const{pressed:i,touched:s,value:r}=e;l.push(i),d.push(s),h.push(r)})),this.updateSource(`/${t}/buttonPresses`,l),this.updateSource(`/${t}/buttonTouches`,d),this.updateSource(`/${t}/buttonValues`,h)})),window.requestAnimationFrame(e)};window.requestAnimationFrame(e)}}document.addEventListener("DOMContentLoaded",(()=>{window.API=function(e,t,i=!1){const s=new fa,r=null!=t?t:new ba,n=new Dn;n.addSourceProvider("NetworkTables",r),n.addSourceProvider("Gamepad",s),n.setDefaultSourceProvider("NetworkTables"),Ot($t`
      <dashboard-root
        .store=${n}
        .elementConfigs=${Sr}
        ?hide-menu=${i}
      ></dashboard-root>
    `,e);const a=document.querySelector("dashboard-root");return{getConnector:()=>a.getConnector(),setHtml(e){a.setHtml(e)},getHtml:()=>a.getHtml(),resetHtml(){a.resetHtml()},reloadHtml(){a.reloadHtml()},addElements(e){a.addElements(e)},getStore:()=>n,lit:Ft}}(document.querySelector("#dash"))}));