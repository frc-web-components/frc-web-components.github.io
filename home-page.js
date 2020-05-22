import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import './sidebar.js';

class FwcHomePage extends LitElement {
  
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
        <nav>
          <span style="color: red">F</span>
          <span style="color: white">R</span>
          <span style="color: blue">C</span> 
          &nbsp;&nbsp;Web Components
        </nav>
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