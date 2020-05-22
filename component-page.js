import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import './frc-web-components.js';
import './code-sample.js';
import './sidebar.js';

class FwcComponentPage extends LitElement {
  
  static get styles() {
    return [css`

      :host {
        display: block;
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
        <main>
          <fwc-sidebar selected-component="${this.componentName}"></fwc-sidebar>

          <fwc-page-content>
            <h2>Examples for ${this.componentName}</h2>
            <slot></slot>
          </fwc-page-content>
        </main>

      </frc-dashboard>
    `;
  }
}

customElements.define('fwc-component-page', FwcComponentPage);