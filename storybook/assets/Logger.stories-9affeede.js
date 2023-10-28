import{r as k,s as D,$ as g}from"./lit-element-ac510585.js";import{e as l}from"./query-assigned-elements-bd4ea1f7.js";import{i as O}from"./style-map-70149a85.js";const r={info:{color:"#fff",name:"INFO",level:1},debug:{color:"#fff",name:"DEBUG",level:0},fatal:{color:"#FF3E3E",name:"ERROR",level:4},warning:{color:"#FFC53E",name:"WARNING",level:3},success:{color:"#3EFF45",name:"SUCCESS",level:2}},V={name:"Html Logger",enabled:!0,maxLogCount:1e3,loggingFormat:"[MESSAGE]",argumentsSeparator:" ",utcTime:!1,level:0};var A=function(e){var t=[].slice.call(arguments,1);return t.forEach(function(i){for(var o in i)e[o]=i[o]}),e};class F{constructor(e,t=document.body){this.options=A({},V,e||{}),this.parent=t,this.linesCount=0,this.$={},this.initialized=!1}init(){if(this.initialized)return;if(!document||!document.createElement||!document.body||!document.body.appendChild)throw new Error("HtmlLogger not initialized");this.$.container=document.createElement("div");const e=`width:100%; height: 100%;
					margin:0;
					left:0;
					background: rgba(0, 0, 0, 0.8);
					overflow:auto;
					padding: 5px 7px;
    			box-sizing: border-box;`;this.$.container.setAttribute("style",e),this.$.log=document.createElement("div");const t=document.createElement("span");t.style.color="#afa",t.style.fontWeight="bold";const i=`===== ${this.options.name} - Logger started at ${this.options.utcTime?new Date().toUTCString():new Date} =====`;t.appendChild(document.createTextNode(i));const o=document.createElement("div");o.appendChild(t),o.appendChild(document.createElement("br")),o.appendChild(document.createElement("br")),this.$.container.appendChild(o),this.$.container.appendChild(this.$.log),this.parent.appendChild(this.$.container),this.initialized=!0}setLevel(e){this.options.level=e}setEnable(e=!0){this.initialized&&(this.options.enabled=e,this.$.log.style.color=e?"#fff":"#444")}clean(){if(this.initialized){for(;this.$.log.firstChild;)this.$.log.removeChild(this.$.log.firstChild);this.linesCount=0}}print(e,t=r.info.color,i=r.info.name){if(!this.initialized||!this.options.enabled)return;const o=this.$.container.scrollTop>this.$.container.scrollHeight-this.$.container.clientHeight-5,c=(e.length?e:"[empty]").split(/\r\n|\r|\n/);for(let p=0;p<c.length;p++){let f=document.createElement("div");f.setAttribute("style","color:#999;float:left;");let T=this._getTime();f.appendChild(document.createTextNode(`${T} `));let _=this.options.loggingFormat.replace("[LEVEL]",i).replace("[MESSAGE]",c[p]),y=document.createElement("div");y.setAttribute("style",`word-wrap:break-word;margin-left:6.0em;color: ${t}`),y.appendChild(document.createTextNode(_));let b=document.createElement("div");b.setAttribute("style","clear:both;");var d=document.createElement("div");for(d.appendChild(f),d.appendChild(y),d.appendChild(b),this.$.log.appendChild(d),this.linesCount++;this.linesCount>this.options.maxLogCount;)this.$.log.childNodes[0].remove(),this.linesCount--;o&&(this.$.container.scrollTop=this.$.container.scrollHeight)}}info(){this.options.level<=r.info.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator))}debug(){this.options.level<=r.debug.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),r.debug.color,r.debug.name)}warning(){this.options.level<=r.warning.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),r.warning.color,r.warning.name)}success(){this.options.level<=r.success.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),r.success.color,r.success.name)}error(){this.options.level<=r.fatal.level&&this.print([].map.call(arguments,this._determineString).join(this.options.argumentsSeparator),r.fatal.color,r.fatal.name)}_getTime(){return(this.options.utcTime?new Date().toUTCString():new Date().toString()).match(/([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/)[0]}_determineString(e){if(e===void 0)return"undefined";if(e===null)return"null";if(e instanceof Array)return JSON.stringify(e);switch(typeof e){default:case"object":return`${e.constructor?e.constructor.name:e.toString()} -> ${JSON.stringify(e)}`;case"function":return e.name||"[function]";case"number":case"string":case"boolean":return e}}}var N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,a=(n,e,t,i)=>{for(var o=i>1?void 0:i?P(e,t):e,u=n.length-1,c;u>=0;u--)(c=n[u])&&(o=(i?c(e,t,o):c(o))||o);return i&&o&&N(e,t,o),o};class s extends D{constructor(){super(...arguments),this.title="Robot Logger",this.maxLogCount=1e3,this.debug="",this.info="",this.success="",this.warning="",this.error="",this.level="info",this.disabled=!1,this.levels=["debug","info","success","warning","error"]}firstUpdated(){const e=this.renderRoot.querySelector("[part=logger]");this.logger=new F({name:this.title,maxLogCount:Math.max(0,this.maxLogCount),level:this.levels.indexOf(this.level),enabled:!this.disabled},e),this.logger.init()}updated(e){this.levels.forEach(t=>{e.has(t)&&this[t]&&this.logger[t](this[t])}),e.has("maxLogCount")&&(this.logger.options.maxLogCount=Math.max(0,this.maxLogCount)),e.has("level")&&this.logger.setLevel(this.levels.indexOf(this.level)),e.has("disabled")&&this.logger.setEnable(!this.disabled)}render(){return g` <div part="logger"></div> `}}s.styles=k`
    :host {
      display: inline-block;
      width: 500px;
      height: 400px;
      font-family: monospace;
      font-size: 14px;
    }

    [part='logger'] {
      width: 100%;
      height: 100%;
    }
  `;a([l({type:String})],s.prototype,"title",2);a([l({type:Number,attribute:"max-log-count"})],s.prototype,"maxLogCount",2);a([l({type:String})],s.prototype,"debug",2);a([l({type:String})],s.prototype,"info",2);a([l({type:String})],s.prototype,"success",2);a([l({type:String})],s.prototype,"warning",2);a([l({type:String})],s.prototype,"error",2);a([l({type:String})],s.prototype,"level",2);a([l({type:Boolean})],s.prototype,"disabled",2);customElements.get("frc-logger")||customElements.define("frc-logger",s);const w={title:"Robot Logger",maxLogCount:1e3,level:"info",debug:"",info:"",success:"",warning:"",error:"",disabled:!1,theme:"light","background-color":"#fff"},B={title:"FRC/Logger",tags:["autodocs"],component:"frc-logger",args:w,argTypes:{title:{table:{category:"Properties",defaultValue:{summary:"Robot Logger"}}},maxLogCount:{table:{category:"Properties",defaultValue:{summary:1e3}}},level:{table:{category:"Properties",defaultValue:{summary:"info"}},options:["debug","info","success","warning","error"],control:"select"},debug:{table:{category:"Properties",defaultValue:{summary:""}}},info:{table:{category:"Properties",defaultValue:{summary:""}}},success:{table:{category:"Properties",defaultValue:{summary:""}}},warning:{table:{category:"Properties",defaultValue:{summary:""}}},error:{table:{category:"Properties",defaultValue:{summary:""}}},disabled:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}}},decorators:[(n,e)=>{const i=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",o=e.args["background-color"];return g` <div
        style=${O({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?o:i})}
      >
        ${n()}
      </div>`}]};function z(n){return n.theme==="custom"?g`
      <style>
        .custom {
        }
      </style>
    `:n.theme==="dark"?g`
      <style>
        .dark {
        }
      </style>
    `:g`
    <style>
      .light {
      }
    </style>
  `}function L(n={}){return{args:{...w,...n},render:t=>g`
      ${z(t)}
      <frc-logger
        class=${t.theme}
        title=${t.title}
        max-log-count=${t.maxLogCount}
        debug=${t.debug}
        info=${t.info}
        success=${t.success}
        warning=${t.warning}
        error=${t.error}
        level=${t.level}
        ?disabled=${t.disabled}
      ></frc-logger>
    `}}const m=L({theme:"light"}),h=L({theme:"dark"});var v,S,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`createLoggerStory({
  theme: 'light'
})`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var $,x,E;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`createLoggerStory({
  theme: 'dark'
})`,...(E=(x=h.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const G=["LightTheme","DarkTheme"];export{h as DarkTheme,m as LightTheme,G as __namedExportsOrder,B as default};
//# sourceMappingURL=Logger.stories-9affeede.js.map
