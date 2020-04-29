import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class CodeSample extends LitElement {

  static get styles() {
    return [css`
      pre {
        margin: 30px 0;
      }

      h3 {
        margin: 40px 0;
      }

      code.html {
        padding: 20px;
      }
    `];
  }

  static get properties() {
    return {
      title: { type: String }
    }
  }

  getCode() {
    const html = _.escape(this.innerHTML);
    const lines = html.split('\n');
    const firstCodeLine = lines.findIndex(value => value.length > 0);

    if (firstCodeLine < 0) {
      return html;
    }

    let whiteSpaceToRemove = '';
    const whiteSpaceCharacters = lines[firstCodeLine].search(/\S/);
    for (let i = 0; i < whiteSpaceCharacters; i++) {
      whiteSpaceToRemove += ' ';
    }
    
    const newHtml = lines
      .map(line => line.replace(whiteSpaceToRemove, ''))
      .join('\n');

    const titleComment = _.escape(`<!-- Code for "${this.title}" example -->`);
    return titleComment + newHtml;
  }

  firstUpdated() {
    const codeElement = this.shadowRoot.querySelector('pre code');
    codeElement.innerHTML = this.getCode();
    hljs.highlightBlock(codeElement);
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <slot></slot>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/default.min.css">
      <pre><code class="html"></code></pre>
    `;
  }  
}

customElements.define('code-sample', CodeSample);