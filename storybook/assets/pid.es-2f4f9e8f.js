import{s as k,i as n,k as $,X as E}from"./property-293dc01c-d6840d48.js";var P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,f=(e,t,i,o)=>{for(var r=o>1?void 0:o?D(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(o?l(t,i,r):l(r))||r);return o&&r&&P(t,i,r),r},F=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},N=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},b=(e,t,i)=>(F(e,t,"access private method"),i),s,h;class p extends ${constructor(){super(...arguments),N(this,s),this.p=0,this.i=0,this.d=0,this.setpoint=0,this.running=!1}onPChange(t){this.p=parseFloat(t.target.value),b(this,s,h).call(this)}onIChange(t){this.i=parseFloat(t.target.value),b(this,s,h).call(this)}onDChange(t){this.d=parseFloat(t.target.value),b(this,s,h).call(this)}onSetpointChange(t){this.setpoint=parseFloat(t.target.value),b(this,s,h).call(this)}onRunningClick(){this.running=!this.running,b(this,s,h).call(this)}render(){return E`
      <input
        type="checkbox"
        id="running"
        .checked=${this.running}
        @click=${this.onRunningClick}
      />
      <label for="running">Running</label>
      <label>P</label>
      <input type="number" .value=${this.p} @change=${this.onPChange} />
      <label>I</label>
      <input type="number" .value=${this.i} @change=${this.onIChange} />
      <label>D</label>
      <input type="number" .value=${this.d} @change=${this.onDChange} />
      <label>Setpoint</label>
      <input
        type="number"
        .value=${this.setpoint}
        @change=${this.onSetpointChange}
      />
    `}}s=new WeakSet;h=function(){this.dispatchEvent(new CustomEvent("change",{detail:{p:this.p,i:this.i,d:this.d,setpoint:this.setpoint,running:this.running}}))};p.styles=k`
    :host {
      display: inline-grid;
      grid-template-columns: min-content auto;
      grid-template-rows: auto auto auto auto auto;
      column-gap: 10px;
      row-gap: 8px;
      align-items: center;
      width: 150px;
      height: auto;
      font-family: sans-serif;
      color: var(--frc-pid-controller-text-color, black);
    }

    label {
      font-weight: bold;
      text-align: right;
    }

    input[type='number'] {
      width: 100%;
      min-width: 50px;
      display: inline-block;
      box-sizing: border-box;
      padding-left: 5px;
      border-radius: 3px;
      line-height: 36px;
      height: 36px;
      border: 1px solid var(--frc-pid-controller-input-border-color, #e0e0e0);
      color: var(--frc-pid-controller-text-color, black);
      background: var(--frc-pid-controller-input-background-color, white);
    }

    input[type='checkbox'] {
      justify-self: right;
      margin: 0;
      width: 16px;
      height: 16px;
    }

    label[for='running'] {
      justify-self: left;
    }
  `;f([n({type:Number})],p.prototype,"p",2);f([n({type:Number})],p.prototype,"i",2);f([n({type:Number})],p.prototype,"d",2);f([n({type:Number})],p.prototype,"setpoint",2);f([n({type:Boolean,reflect:!0})],p.prototype,"running",2);customElements.get("frc-pid-command")||customElements.define("frc-pid-command",p);var S=Object.defineProperty,I=Object.getOwnPropertyDescriptor,w=(e,t,i,o)=>{for(var r=o>1?void 0:o?I(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(o?l(t,i,r):l(r))||r);return o&&r&&S(t,i,r),r},O=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},j=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},v=(e,t,i)=>(O(e,t,"access private method"),i),c,m;class d extends ${constructor(){super(...arguments),j(this,c),this.p=0,this.i=0,this.d=0,this.setpoint=0}onPChange(t){this.p=parseFloat(t.target.value),v(this,c,m).call(this)}onIChange(t){this.i=parseFloat(t.target.value),v(this,c,m).call(this)}onDChange(t){this.d=parseFloat(t.target.value),v(this,c,m).call(this)}onSetpointChange(t){this.setpoint=parseFloat(t.target.value),v(this,c,m).call(this)}render(){return E`
      <label>P</label>
      <input type="number" .value=${this.p} @change=${this.onPChange} />
      <label>I</label>
      <input type="number" .value=${this.i} @change=${this.onIChange} />
      <label>D</label>
      <input type="number" .value=${this.d} @change=${this.onDChange} />
      <label>Setpoint</label>
      <input
        type="number"
        .value=${this.setpoint}
        @change=${this.onSetpointChange}
      />
    `}}c=new WeakSet;m=function(){this.dispatchEvent(new CustomEvent("change",{detail:{p:this.p,i:this.i,d:this.d,setpoint:this.setpoint}}))};d.styles=k`
    :host {
      display: inline-grid;
      grid-template-columns: min-content auto;
      grid-template-rows: auto auto auto auto;
      column-gap: 10px;
      row-gap: 8px;
      align-items: center;
      height: auto;
      width: 150px;
      font-family: sans-serif;
      color: var(--frc-pid-controller-text-color, black);
    }

    label {
      font-weight: bold;
      text-align: right;
    }

    input {
      width: 100%;
      min-width: 50px;
      display: inline-block;
      box-sizing: border-box;
      padding-left: 5px;
      border-radius: 3px;
      line-height: 36px;
      height: 36px;
      border: 1px solid var(--frc-pid-controller-input-border-color, #e0e0e0);
      color: var(--frc-pid-controller-text-color, black);
      background: var(--frc-pid-controller-input-background-color, white);
    }
  `;w([n({type:Number})],d.prototype,"p",2);w([n({type:Number})],d.prototype,"i",2);w([n({type:Number})],d.prototype,"d",2);w([n({type:Number})],d.prototype,"setpoint",2);customElements.get("frc-pid-controller")||customElements.define("frc-pid-controller",d);var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,C=(e,t,i,o)=>{for(var r=o>1?void 0:o?W(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(o?l(t,i,r):l(r))||r);return o&&r&&T(t,i,r),r},z=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},G=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},x=(e,t,i)=>(z(e,t,"access private method"),i),u,y;class g extends ${constructor(){super(...arguments),G(this,u),this.p=0,this.i=0,this.d=0,this.goal=0}onPChange(t){this.p=parseFloat(t.target.value),x(this,u,y).call(this)}onIChange(t){this.i=parseFloat(t.target.value),x(this,u,y).call(this)}onDChange(t){this.d=parseFloat(t.target.value),x(this,u,y).call(this)}onGoalChange(t){this.goal=parseFloat(t.target.value),x(this,u,y).call(this)}render(){return E`
      <label>P</label>
      <input type="number" .value=${this.p} @change=${this.onPChange} />
      <label>I</label>
      <input type="number" .value=${this.i} @change=${this.onIChange} />
      <label>D</label>
      <input type="number" .value=${this.d} @change=${this.onDChange} />
      <label>Goal</label>
      <input type="number" .value=${this.goal} @change=${this.onGoalChange} />
    `}}u=new WeakSet;y=function(){this.dispatchEvent(new CustomEvent("change",{detail:{p:this.p,i:this.i,d:this.d,goal:this.goal}}))};g.styles=k`
    :host {
      display: inline-grid;
      grid-template-columns: min-content auto;
      grid-template-rows: auto auto auto auto;
      column-gap: 10px;
      row-gap: 8px;
      align-items: center;
      height: auto;
      width: 150px;
      font-family: sans-serif;
      color: var(--frc-pid-controller-text-color, black);
    }

    label {
      font-weight: bold;
      text-align: right;
    }

    input {
      width: 100%;
      min-width: 50px;
      display: inline-block;
      box-sizing: border-box;
      padding-left: 5px;
      border-radius: 3px;
      line-height: 36px;
      height: 36px;
      border: 1px solid var(--frc-pid-controller-input-border-color, #e0e0e0);
      color: var(--frc-pid-controller-text-color, black);
      background: var(--frc-pid-controller-input-background-color, white);
    }
  `;C([n({type:Number})],g.prototype,"p",2);C([n({type:Number})],g.prototype,"i",2);C([n({type:Number})],g.prototype,"d",2);C([n({type:Number})],g.prototype,"goal",2);customElements.get("frc-profiled-pid-controller")||customElements.define("frc-profiled-pid-controller",g);
