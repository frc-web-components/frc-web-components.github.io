import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class CodeSample extends LitElement {

  static get styles() {
    return [css`

      :host {
        display: block;
        margin-bottom: 40px;
        box-sizing: border-box;
      }

      main {
        border: 1px solid #e0e0e0;
      }

      pre {
        margin: 30px 0 0;
        display: block;
      }

      header {
        margin: 20px 0;
      }

      h3 {
        font-weight: normal;
        font-size: 25px;
        margin-bottom: 0px;
      }

      h4 {
        font-weight: normal;
        font-size: 17px;
      }

      .preview {
        padding: 40px 20px 10px;
      }

      code.html {
        padding: 20px;
      }

      .hljs-tag {
        line-break: anywhere;
      }
    `];
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String }
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
      .map(line => {
        const escapedArrays = [...line.matchAll(/(\=\&quot;\[)(&amp;quot;.*?&amp;quot;)(\]&quot;)/g)];
        escapedArrays.forEach(match => {
          const [original, start, middle, end] = match;
          let newStart = _.unescape(start).replace('"', "'");
          let newMiddle = _.unescape(middle);
          let newEnd = _.unescape(end).replace('"', "'");
          const newString = newStart + newMiddle + newEnd;
          line = line.replace(original, newString);
        });
        return line;
      })
      .map(line => {
          return line.replace('=&quot;&quot;', '');
      })
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
      <header>
        <h3>${this.title}</h3>
        <h4>${this.description}</h4>
      </header>
      <main>
        <div class="preview">
          <slot></slot>
        </div>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/default.min.css">
        <pre><code class="html"></code></pre>
      </main>
    `;
  }  
}

customElements.define('code-sample', CodeSample);