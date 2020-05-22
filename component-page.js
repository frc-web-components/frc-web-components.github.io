import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import './code-sample.js';
import './sidebar.js';
import './frc-web-components.js';

class FwcComponentPage extends LitElement {
  
  static get styles() {
    return [css`

      :host {
        display: block !important;
      }

      nav {
        width: 100vw;
        height: 60px;
        background: black;
        display: flex;
        align-items: center;
        padding-left: 15px;
        color: white;
        font-size: 25px;
      }

      nav span {
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 35px;
      }

      main {
        display: flex;
        align-items: stretch;
      }
      
      fwc-sidebar {
        width: 210px;
        min-width: 210px;
      }

      fwc-page-content {
        width: 800px;
        margin-left: 50px;
        display: block;
        padding-bottom: 50px;
      }

      h2 {
        margin-bottom: 40px;
        font-size: 45px;
        font-weight: normal;
      }
    `];
  }

  static get properties() {
    return {
      componentName: { type: String, attribute: 'component-name' }
    }
  }

  render() {
    return html`
      <frc-dashboard>
        <nav>
          <span style="color: red">F</span>
          <span style="color: white">R</span>
          <span style="color: blue">C</span> 
          &nbsp;&nbsp;Web Components
        </nav>
        <main>
          <fwc-sidebar selected-component="${this.componentName}"></fwc-sidebar>

          <fwc-page-content>
            <h2>${this.componentName}</h2>
            <slot></slot>
          </fwc-page-content>
        </main>

      </frc-dashboard>
    `;
  }
}

customElements.define('fwc-component-page', FwcComponentPage);