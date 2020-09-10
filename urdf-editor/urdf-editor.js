
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
      { title: 'PI Robot', urdf: window.piRobotUrdf },
    ];
  }

  saveUrdfs() {
    const urdfs = [];

    for (let i = 0; i < 4; i++) {
      const editor = this.getEditor(i);
      urdfs.push(editor.content);
    }

    window.localStorage['urdfs'] = JSON.stringify(urdfs);
    alert('URDFs saved to local storage');
  }

  loadUrdfs() {
    const urdfs = JSON.parse(window.localStorage['urdfs']) || [];
    urdfs.forEach((urdf, index) => {
      const editor = this.getEditor(index);
      editor.content = urdf;
    });
  }

  getTabNumber() {
    return getSource('NetworkTables', '/editor/tab');
  }

  getEditor(index) {
    const tabContents = this.shadowRoot.querySelector('frc-tabs-content');
    const currentTab = [...tabContents.children][index];
    return currentTab.querySelector('frc-code-editor');   
  }

  getCurrentEditor() {
    return this.getEditor(this.getTabNumber());
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

  onSave() {
    this.saveUrdfs();
  }

  showErrorNotification(textContent) {
    // const notification = document.querySelector('vaadin-notification');
    // notification.textContent = textContent;
    // notification.open();
    alert(textContent);
  }

  firstUpdated() {
    this.loadUrdfs();
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
            <vaadin-button 
              theme="secondary small"
              @click="${this.onSave}"
            >
              Save URDFs
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
