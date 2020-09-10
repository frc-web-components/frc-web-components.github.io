
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
        width: 600px;
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
        display: flex;
        justify-content: space-between;
      }

      [part=example-selector] {
        width: 125px;
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
    this.examples = [
      { title: 'Atlas', urdf: window.atlasUrdf },
      { title: 'R2D2', urdf: window.r2d2Urdf },
    ];
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

  getSelectedExampleUrdf() {
    const exampleSelector = this.shadowRoot.querySelector('[part=example-selector]');
    const urdfTitle = exampleSelector.value;
    return this.examples
      .find(({ title }) => title === urdfTitle)
      .urdf;
  }

  onLoadExample() {
    const urdf = this.getSelectedExampleUrdf();
    const currentEditor = this.getCurrentEditor();
    currentEditor.content = urdf;
  }

  onUrdfError(ev) {
    const { detail } = ev;
    this.showErrorNotification('Unable to preview URDF');
    console.log('error:', detail);
  }

  showErrorNotification(textContent) {
    // const notification = document.querySelector('vaadin-notification');
    // notification.textContent = textContent;
    // notification.open();
    alert(textContent);
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
          <div>
            <vaadin-button 
              theme="primary small"
              @click="${this.onPreview}"
            >
              Preview URDF
            </vaadin-button>
          </div>
          <div>
            <vaadin-combo-box 
              part="example-selector"
              theme="small"
              .items="${this.examples.map(example => example.title)}" 
              .value="${this.examples[0].title}"
            ></vaadin-combo-box>
            <vaadin-button 
              theme="primary small"
              @click="${this.onLoadExample}"
            >
              Load Example
            </vaadin-button>
           </div>

        </div>
      </div>
      <frc-urdf-viewer
        urdf-content="${this.urdfContent.trim()}"
        controllable
        @urdf-error="${this.onUrdfError}"
      ></frc-urdf-viewer>
    `;
  }
}

window.customElements.define('urdf-editor', UrdfEditor);
