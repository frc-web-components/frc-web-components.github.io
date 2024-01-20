import{s as j,i as n,k as A,X as h,Y as p}from"./property-7226fcdb-ca5eacb2.js";import{n as I}from"./state-504849b6-2441cf81.js";import{m as w}from"./style-map-58a70d9c-d870a99a.js";import{o as g}from"./when-b4f6626a-8a775126.js";import{x as u}from"./lit-element-fe64f99e.js";import{o as W}from"./style-map-cd083d51.js";import"./directive-daf4e9b6-78860a76.js";var M=Object.defineProperty,z=Object.getOwnPropertyDescriptor,m=(r,e,t,o)=>{for(var s=o>1?void 0:o?z(e,t):e,c=r.length-1,d;c>=0;c--)(d=r[c])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&M(e,t,s),s},_=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},J=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},X=(r,e,t)=>(_(r,e,"access private method"),t),k,N;class a extends A{constructor(){super(...arguments),J(this,k),this.nodeId=1,this.selected=!1,this.cones=0,this.cubes=0,this.background=""}updated(e){(e.has("selected")||e.has("nodeId"))&&X(this,k,N).call(this)}render(){return h`
      <div style="text-align: center; margin-block:auto;">${this.nodeId}</div>

      <!-- empty on:click binding above passes click events to be bound on the Node component -->
      ${p`
        <svg
          viewBox="-2 -2 28 28"
          style="margin-right: 8px; width:100%; height:100%; pointer-events:none"
        >
          ${g(this.cubes>1,()=>p`
              <polygon
                points="8,8 8,20 20,20, 20,8"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
              <polygon
                points="4,4 4,16 16,16, 16,4"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          ${g(this.cubes===1,()=>p`
              <polygon
                points="6,6 6,18 18,18, 18,6"
                style="fill:rgb(150,0,255);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          ${g(this.cones>1,()=>p`
              <polygon
                points="13,8 11,8 8,22 5,22 19,22 16,22"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
              <polygon
                points="13,4 11,4 8,18 5,18 19,18 16,18"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}
          
          ${g(this.cones===1,()=>p`
              <polygon
                points="13,6 11,6 8,20 5,20 19,20 16,20"
                style="fill:rgb(255,200,0);stroke-width:1;stroke:rgb(0,0,0)"
              />
            `)}  
        </svg>
      `}
    `}}k=new WeakSet;N=function(){this.selected?this.background="green":this.nodeId>=1&&this.nodeId<=9?this.background="lightgray":(this.nodeId-1)%3===1?this.background="purple":this.background="yellow",this.style.setProperty("background-color",this.background)};a.styles=j`
    :host {
      display: block;
      color: black;
      font-size: 2em;
      height: 100%;
      flex-grow: 1;
      border: 1px solid black;
      box-sizing: border-box;
    }
  `;m([n({type:Number,attribute:"node-id"})],a.prototype,"nodeId",2);m([n({type:Boolean})],a.prototype,"selected",2);m([n({type:Number})],a.prototype,"cones",2);m([n({type:Number})],a.prototype,"cubes",2);m([I()],a.prototype,"background",2);customElements.get("frc-scoring-grid-node")||customElements.define("frc-scoring-grid-node",a);var Y=Object.defineProperty,U=Object.getOwnPropertyDescriptor,l=(r,e,t,o)=>{for(var s=o>1?void 0:o?U(e,t):e,c=r.length-1,d;c>=0;c--)(d=r[c])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&Y(e,t,s),s},q=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},$=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},x=(r,e,t)=>(q(r,e,"access private method"),t),v,V,S,B;function y(r,e=!1){return e?9-(r-1)%9:1+(r-1)%9}function C(r,e=!1){return e?3-Math.floor((r-1)/9):Math.floor((r-1)/9)+1}function F(r,e){return Array.from(Array(e+1).keys()).slice(r)}class i extends A{constructor(){super(...arguments),$(this,v),$(this,S),this.selection=0,this.cubesScored=[],this.conesScored=[],this.hideLinks=!1,this.reverseRow=!1,this.reverseCol=!1,this.leftOfLinks=[]}updated(e){(e.has("cubesScored")||e.has("conesScored"))&&x(this,S,B).call(this)}renderLinks(){return this.hideLinks?h``:h`
      ${this.leftOfLinks.map(e=>h`
          <div
            class="link"
            style=${w({gridColumn:`${Math.min(y(e,this.reverseCol),y(e+2,this.reverseCol))} / span 3`,gridRow:C(e,this.reverseRow)})}
          ></div>
        `)}
    `}render(){return h`
      <div class="grid">
        ${F(1,27).map(e=>h`
            <div
              style=${w({gridColumn:y(e,this.reverseCol),gridRow:C(e,this.reverseRow)})}
            >
              <frc-scoring-grid-node
                node-id=${e}
                ?selected=${this.selection===e}
                @click=${()=>{x(this,v,V).call(this,e)}}
                cubes=${this.cubesScored.filter(t=>t===e).length}
                cones=${this.conesScored.filter(t=>t===e).length}
              >
              </frc-scoring-grid-node>
            </div>
          `)}
        ${this.renderLinks()}
      </div>
    `}}v=new WeakSet;V=function(r){this.selection===r?this.selection=0:this.selection=r;const e=new CustomEvent("select",{bubbles:!0,composed:!0,detail:{nodeId:this.selection}});this.dispatchEvent(e)};S=new WeakSet;B=function(){const r=[],e=this.cubesScored.concat(this.conesScored);for(let t=0;t<3;t+=1)for(let o=1;o<=7;o+=1)e.includes(t*9+o)&&e.includes(t*9+o+1)&&e.includes(t*9+o+2)&&(r.push(t*9+o),o+=2);this.leftOfLinks=r};i.styles=j`
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
  `;l([n({type:Number})],i.prototype,"selection",2);l([n({type:Array,attribute:"cubes-scored"})],i.prototype,"cubesScored",2);l([n({type:Array,attribute:"cones-scored"})],i.prototype,"conesScored",2);l([n({type:Boolean,attribute:"hide-links"})],i.prototype,"hideLinks",2);l([n({type:Boolean,attribute:"reverse-row"})],i.prototype,"reverseRow",2);l([n({type:Boolean,attribute:"reverse-col"})],i.prototype,"reverseCol",2);l([I()],i.prototype,"leftOfLinks",2);customElements.get("frc-scoring-grid")||customElements.define("frc-scoring-grid",i);const D={selection:-1,cubesScored:[],conesScored:[],hideLinks:!1,reverseRow:!1,reverseCol:!1,theme:"light","background-color":"#fff"},se={title:"Charged Up/Scoring Grid",tags:["autodocs"],component:"frc-scoring-grid",args:D,argTypes:{selection:{table:{category:"Properties",defaultValue:{summary:0}},control:{type:"number",min:0,step:27}},cubesScored:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},conesScored:{control:"object",table:{category:"Properties",defaultValue:{summary:[]}}},hideLinks:{table:{category:"Properties",defaultValue:{summary:!1}}},reverseRow:{table:{category:"Properties",defaultValue:{summary:!1}}},reverseCol:{table:{category:"Properties",defaultValue:{summary:!1}}},theme:{control:"radio",options:["light","dark","custom"],table:{category:"Styles",defaultValue:"light"}},"background-color":{table:{category:"Styles",defaultValue:"#fff"}}},decorators:[(r,e)=>{const o=e.args.theme==="dark"?"hsl(214, 35%, 21%)":"#fff",s=e.args["background-color"];return u` <div
        style=${W({padding:"20px 10px",marginBottom:"5px",background:e.args.theme==="custom"?s:o})}
      >
        ${r()}
      </div>`}],parameters:{docs:{description:{component:`To use this component import the module:\r
\r
\`\`\`javascript\r
import "@frc-web-components/fwc/components/scoring-grid";\r
\r
// or to import all components:\r
import "@frc-web-components/fwc/components";\r
\`\`\`\r
\r
And then add the component to your html:\r
\r
\`\`\`html\r
<frc-scoring-grid selection="5" cubes-scored="[1,1,2,3,5,13]" cones-scored="[11,14,14]"></frc-scoring-grid>\r
\`\`\`\r
\r
Or use the component in React:\r

\`\`\`jsx\r
import { ScoringGrid } from "@frc-web-components/react";\r
\`\`\`\r

And then add the component in your jsx:\r

\`\`\`jsx\r
<ScoringGrid selection={5} cubesScored={[1,1,2,3,5,13]} conesScored={[11,14,14]} />\r
\`\`\``}}}};function H(r){return r.theme==="custom"?u`
      <style>
        .custom {
        }
      </style>
    `:r.theme==="dark"?u`
      <style>
        .dark {
        }
      </style>
    `:u`
    <style>
      .light {
      }
    </style>
  `}function G(r={}){return{args:{...D,...r},render:t=>u`
      ${H(t)}
      <frc-scoring-grid
        class=${t.theme}
        selection=${t.selection}
        cubes-scored=${JSON.stringify(t.cubesScored)}
        cones-scored=${JSON.stringify(t.conesScored)}
        ?hide-links=${t.hideLinks}
        ?reverse-row=${t.reverseRow}
        ?reverse-column=${t.reverseColumn}
      ></frc-scoring-grid>
    `}}const b=G({theme:"light",cubesScored:[1,1,2,3,5,13],conesScored:[11,14,14]}),f=G({theme:"dark",cubesScored:[1,1,2,3,5,13],conesScored:[11,14,14]});var L,O,E;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`createScoringGridStory({
  theme: 'light',
  cubesScored: [1, 1, 2, 3, 5, 13],
  conesScored: [11, 14, 14]
})`,...(E=(O=b.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var P,T,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`createScoringGridStory({
  theme: 'dark',
  cubesScored: [1, 1, 2, 3, 5, 13],
  conesScored: [11, 14, 14]
})`,...(R=(T=f.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const ne=["LightTheme","DarkTheme"];export{f as DarkTheme,b as LightTheme,ne as __namedExportsOrder,se as default};
