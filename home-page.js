import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import './top-nav.js';
import './sidebar.js';
import './frc-web-components.js';

class FwcHomePage extends LitElement {
  
  static get styles() {
    return [css`

      :host {
        display: block !important;
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
        <fwc-top-nav></fwc-top-nav>
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