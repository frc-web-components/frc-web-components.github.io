import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class FwcSidebar extends LitElement {
  
  static get styles() {
    return [css`
      :host {
        font-family: sans-serif;
        background: rgb(245, 245, 250);
        width: 210px;
        min-height: 100vh;
        padding: 20px 15px;
      }

      nav {
        margin-top: 18px;
        display: flex;
        flex-direction: column;

      }

      nav header {
        text-transform: uppercase;
        margin-bottom: 8px;

      }

      nav a {
        color: #778;
        text-decoration: none;
        line-height: 22px;
      }

      nav a.selected {
        font-weight: bold;
        color: #665;
      }
    `];
  }

  static get properties() {
    return {
      selectedComponent: { type: String, attribute: 'selected-component' }
    }
  }

  constructor() {
    super();
    this.navs = [{
      title: 'Charts and Graphs',
      components: [
        'Gauge',
        'Line Chart'
      ]
    }, {
      title: 'General',
      components: [
        'Boolean Box',
        'Label',
        'Number Bar'
      ]
    }, {
      title: 'Forms & Inputs',
      components: [
        'Checkbox',
        'Checkbox Group',
        'Combo Box',
        'Number Field',
        'Number Slider',
        'Radio Button',
        'Radio Group',
        'Text Area',
        'Text Field',
        'Text View',
        'Toggle Button',
        'Toggle Switch'
      ]
    }, {
      title: 'Robot Info',
      components: [
        '3-Axis Accelerometer',
        'Accelerometer',
        'Basic FMS Info',
        'Basic Subsystem',
        'Differential Drivebase',
        'Encoder',
        'Gyro',
        'Mecanum Drivebase',
        'Model Viewer',
        'Networktable Tree',
        'Power Distribution Panel',
        'Relay',
        'Voltage View',
      ]
    }];
  }

  render() {
    
    return html`

        ${this.navs.map(nav => html`
          <nav>
            <header>${nav.title}</header>
            ${nav.components.map(component => html`
              <a 
                class="${component === this.selectedComponent ? 'selected': ''}"
                href="/components/${_.kebabCase(component)}/"
              >
                ${component}
              </a>
            `)}
          </nav>
        `)}
    `;
  }
}

customElements.define('fwc-sidebar', FwcSidebar);