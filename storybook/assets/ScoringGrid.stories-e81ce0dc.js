import{i as R,s as T,x as i,b as h}from"./lit-element-336289fd.js";import{n}from"./property-a00a2a3e.js";import{r as A}from"./state-0f1c18cb.js";import{o as b}from"./style-map-1987af2b.js";import{n as g}from"./when-cf7256a5.js";var G=Object.defineProperty,M=Object.getOwnPropertyDescriptor,p=(t,e,r,o)=>{for(var s=o>1?void 0:o?M(e,r):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&G(e,r,s),s},W=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},z=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},j=(t,e,r)=>(W(t,e,"access private method"),r),v,I;class d extends T{constructor(){super(...arguments),z(this,v),this.nodeId=1,this.selected=!1,this.cones=0,this.cubes=0,this.background=""}updated(e){(e.has("selected")||e.has("nodeId"))&&j(this,v,I).call(this)}render(){return i`
      <div style="text-align: center; margin-block:auto;">${this.nodeId}</div>

      <!-- empty on:click binding above passes click events to be bound on the Node component -->
      ${h`
        <svg
          viewBox="-2 -2 28 28"
          style="margin-right: 8px; width:100%; height:100%; pointer-events:none"
        >
          ${g(this.cubes>1,()=>h`
              <polygon
                points="8,8 8,20 20,20, 20,8"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
              <polygon
                points="4,4 4,16 16,16, 16,4"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          ${g(this.cubes===1,()=>h`
              <polygon
                points="6,6 6,18 18,18, 18,6"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          ${g(this.cones>1,()=>h`
              <polygon
                points="13,8 11,8 8,22 5,22 19,22 16,22"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
              <polygon
                points="13,4 11,4 8,18 5,18 19,18 16,18"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          
          ${g(this.cones===1,()=>h`
              <polygon
                points="13,6 11,6 8,20 5,20 19,20 16,20"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}  
        </svg>
      `}
    `}}v=new WeakSet;I=function(){this.selected?this.background="green":this.nodeId>=1&&this.nodeId<=9?this.background="lightgray":(this.nodeId-1)%3===1?this.background="purple":this.background="yellow",this.style.setProperty("background-color",this.background)};d.styles=R`
    :host {
      display: block;
      color: black;
      font-size: 2em;
      height: 100%;
      flex-grow: 1;
      border: 1px solid black;
      box-sizing: border-box;
    }
  `;p([n({type:Number,attribute:"node-id"})],d.prototype,"nodeId",2);p([n({type:Boolean})],d.prototype,"selected",2);p([n({type:Number})],d.prototype,"cones",2);p([n({type:Number})],d.prototype,"cubes",2);p([A()],d.prototype,"background",2);customElements.get("frc-scoring-grid-node")||customElements.define("frc-scoring-grid-node",d);var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,u=(t,e,r,o)=>{for(var s=o>1?void 0:o?J(e,r):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&F(e,r,s),s},U=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},w=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},$=(t,e,r)=>(U(t,e,"access private method"),r),k,B,S,D;function y(t,e=!1){return e?9-(t-1)%9:1+(t-1)%9}function _(t,e=!1){return e?3-Math.floor((t-1)/9):Math.floor((t-1)/9)+1}function q(t,e){return Array.from(Array(e+1).keys()).slice(t)}class c extends T{constructor(){super(...arguments),w(this,k),w(this,S),this.selection=0,this.cubesScored=[],this.conesScored=[],this.hideLinks=!1,this.reverseRow=!1,this.reverseCol=!1,this.leftOfLinks=[]}updated(e){(e.has("cubesScored")||e.has("conesScored"))&&$(this,S,D).call(this)}renderLinks(){return this.hideLinks?i``:i`
      ${this.leftOfLinks.map(e=>i`
          <div
            class="link"
            style=${b({gridColumn:`${Math.min(y(e,this.reverseCol),y(e+2,this.reverseCol))} / span 3`,gridRow:_(e,this.reverseRow)})}
          ></div>
        `)}
    `}render(){return i`
      <div class="grid">
        ${q(1,27).map(e=>i`
            <div
              style=${b({gridColumn:y(e,this.reverseCol),gridRow:_(e,this.reverseRow)})}
            >
              <frc-scoring-grid-node
                node-id=${e}
                ?selected=${this.selection===e}
                @click=${()=>{$(this,k,B).call(this,e)}}
                cubes=${this.cubesScored.filter(r=>r===e).length}
                cones=${this.conesScored.filter(r=>r===e).length}
              >
              </frc-scoring-grid-node>
            </div>
          `)}
        ${this.renderLinks()}
      </div>
    `}}k=new WeakSet;B=function(t){this.selection===t?this.selection=0:this.selection=t;const e=new CustomEvent("select",{bubbles:!0,composed:!0,detail:{nodeId:this.selection}});this.dispatchEvent(e)};S=new WeakSet;D=function(){const t=[],e=this.cubesScored.concat(this.conesScored);for(let r=0;r<3;r+=1)for(let o=1;o<=7;o+=1)e.includes(r*9+o)&&e.includes(r*9+o+1)&&e.includes(r*9+o+2)&&(t.push(r*9+o),o+=2);this.leftOfLinks=t};c.styles=R`
    :host {
      display: inline-block;
      width: 550px;
      height: 380px;
    }

    .grid {
      display:grid;
      grid-template-columns: repeat(9, calc(100% / 9));
      grid-template-rows: repeat(3, calc(100% / 3));
      height:100%;
      width:100%;
      flex-direction:row-reverse;
      grid-auto-flow: dense;"
    }

    .link {
      border: 5px solid black;
      border-radius: 10px;
      margin: 5px;
      box-sizing: border-box;
      pointer-events: none;
    }
  `;u([n({type:Number})],c.prototype,"selection",2);u([n({type:Array,attribute:"cubes-scored"})],c.prototype,"cubesScored",2);u([n({type:Array,attribute:"cones-scored"})],c.prototype,"conesScored",2);u([n({type:Boolean,attribute:"hide-links"})],c.prototype,"hideLinks",2);u([n({type:Boolean,attribute:"reverse-row"})],c.prototype,"reverseRow",2);u([n({type:Boolean,attribute:"reverse-col"})],c.prototype,"reverseCol",2);u([A()],c.prototype,"leftOfLinks",2);customElements.get("frc-scoring-grid")||customElements.define("frc-scoring-grid",c);const N={selection:-1,cubesScored:[],conesScored:[],hideLinks:!1,reverseRow:!1,reverseCol:!1,theme:"light","background-color":"#fff"},ee={title:"Charged Up/Scoring Grid",tags:["autodocs"],component:"frc-scoring-grid",args:N,argTypes:{selection:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,step:27}},cubesScored:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},conesScored:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},hideLinks:{table:{category:"Properties",defaultValue:{summary:!1}}},reverseRow:{table:{category:"Properties",defaultValue:{summary:!1}}},reverseCol:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}}},decorators:[(t,e)=>{const o=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",s=e.args["background-color"];return i` <div
        style=${b({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?s:o})}
      >
        ${t()}
      </div>`}]};function H(t){return t.theme==="custom"?i`
      <style>
        .custom {
        }
      </style>
    `:t.theme==="dark"?i`
      <style>
        .dark {
        }
      </style>
    `:i`
    <style>
      .light {
      }
    </style>
  `}function V(t={}){return{args:{...N,...t},render:r=>i`
      ${H(r)}
      <frc-scoring-grid
        class=${r.theme}
        selection=${r.selection}
        cubes-scored=${JSON.stringify(r.cubesScored)}
        cones-scored=${JSON.stringify(r.conesScored)}
        ?hide-links=${r.hideLinks}
        ?reverse-row=${r.reverseRow}
        ?reverse-column=${r.reverseColumn}
      ></frc-scoring-grid>
    `}}const f=V({theme:"light",cubesScored:[1,1,2,3,5,13],conesScored:[11,14,14]}),m=V({theme:"dark",cubesScored:[1,1,2,3,5,13],conesScored:[11,14,14]});var x,C,L;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`createScoringGridStory({
  theme: 'light',
  cubesScored: [1, 1, 2, 3, 5, 13],
  conesScored: [11, 14, 14]
})`,...(L=(C=f.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,P,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`createScoringGridStory({
  theme: 'dark',
  cubesScored: [1, 1, 2, 3, 5, 13],
  conesScored: [11, 14, 14]
})`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const te=["LightTheme","DarkTheme"];export{m as DarkTheme,f as LightTheme,te as __namedExportsOrder,ee as default};
