
var { LitElement, html, css } = window.webbit;

class UrdfEditor extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: stretch;
      }

      frc-code-editor {
        width: 500px;
        height: 100%;
      }

      frc-urdf-viewer {
        flex: 1;
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <frc-code-editor
        mode="xml"
      ></frc-code-editor>
      <frc-urdf-viewer 
        urdf="./atlas/atlas_v4_with_multisense.urdf"
        max-distance="1.6"
        min-distance="1.6"
        camera-x="0.5763096744435203" 
        camera-y="0.5127713744784664" 
        camera-z="1.4555920814835674"
        controllable
      ></frc-urdf-viewer>
    `;
  }
}

window.customElements.define('urdf-editor', UrdfEditor);
