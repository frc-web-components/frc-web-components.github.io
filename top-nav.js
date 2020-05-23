import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class FwcTopNav extends LitElement {
  
  static get styles() {
    return [css`

      :host {
        display: block;
      }

      nav {
        width: 100vw;
        height: 60px;
        background: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        color: white;
      }

      nav .title {
        font-size: 0;
        display: flex;
        align-items: center;
      }

      nav h1 {
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 35px;
        margin: 0;
        display: inline-block;
      }

      nav h2 {
        font-size: 25px;
        margin: 0;
        display: inline-block;
        font-weight: normal;
      }

      nav vaadin-button {
        cursor: pointer;
      }
    `];
  }

  static get properties() {
    return {
      selectedComponent: { type: String, attribute: 'selected-component' }
    }
  }

  

  render() {
    
    return html`
      <nav>
        <div class="title">
          <h1 style="color: red">F</h1>
          <h1 style="color: white">R</h1>
          <h1 style="color: blue">C</h1>
          <h2>&nbsp;&nbsp;Web Components</h2>
        </div>
        <a href="https://github.com/frc-web-components/frc-web-components">
          <vaadin-button theme="primary">View on Github</vaadin-button>
      </nav>
    `;
  }
}

customElements.define('fwc-top-nav', FwcTopNav);