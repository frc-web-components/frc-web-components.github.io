
var { LitElement, html, css } = window.webbit;
var { getSource } = window.webbitStore;

class UrdfEditor extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: stretch;
      }

      [part=editor] {
        width: 500px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      frc-tabs-content {
        flex: 1;
        width: 100%;
        height: 100%;
      }

      frc-tab-content {
        width: 100%;
        height: 100%;
      }

      frc-code-editor {
        width: 100%;
        height: 100%;
      }

      frc-urdf-viewer {
        flex: 1;
        height: 100%;
      }

      [part=controls] {
        padding: 5px;
      }
    `;
  }

  static get properties() {
    return {
      urdfContent: { type: String },
    };
  }

  constructor() {
    super();
    this.urdfContent = '';
  }

  getTabNumber() {
    return getSource('NetworkTables', '/editor/tab');
  }

  getCurrentEditor() {
    const tabNumber = this.getTabNumber();
    const tabContents = this.shadowRoot.querySelector('frc-tabs-content');
    const currentTab = [...tabContents.children][tabNumber];
    return currentTab.querySelector('frc-code-editor');   
  }

  onPreview() {
    const currentEditor = this.getCurrentEditor();
    this.urdfContent = currentEditor.content;
  }

  render() {
    return html`
      <div part="editor">
        <frc-tabs source-key="/editor/tab" theme="small minimal">
          <frc-tab>URDF 1</frc-tab>
          <frc-tab>URDF 2</frc-tab>
          <frc-tab>URDF 3</frc-tab>
          <frc-tab>URDF 4</frc-tab>
        </frc-tabs>
        <frc-tabs-content source-key="/editor/tab">
          <frc-tab-content>
            <frc-code-editor mode="xml"></frc-code-editor>
          </frc-tab-content>
          <frc-tab-content>
            <frc-code-editor mode="xml"></frc-code-editor>
          </frc-tab-content>
          <frc-tab-content>
            <frc-code-editor mode="xml"></frc-code-editor>
          </frc-tab-content>
          <frc-tab-content>
            <frc-code-editor mode="xml"></frc-code-editor>
          </frc-tab-content>
        </frc-tabs-content>
        <div part="controls">
          <vaadin-button 
            theme="primary small"
            @click="${this.onPreview}"
          >
            Preview URDF
          </vaadin-button>
        </div>
      </div>
      <frc-urdf-viewer 
        urdf-content="${this.urdfContent}"
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
