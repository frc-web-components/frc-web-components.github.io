import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import './sidebar.js';

class FwcHomePage extends LitElement {
  
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
        max-width: 800px;
        padding-left: 50px;
        display: block;
      }
    `];
  }

  static get properties() {
    return {
      
    }
  }

  render() {
    return html`
      <frc-dashboard>
        <main>
          <fwc-sidebar></fwc-sidebar>

          <fwc-page-content>
            <slot></slot>
          </fwc-page-content>
        </main>

      </frc-dashboard>
    `;
  }
}

customElements.define('fwc-home-page', FwcHomePage);