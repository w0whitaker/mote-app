import { LitElement, html, css } from 'lit';
import './components/m-grid.js';
import './components/m-grid-item.js';

class MoteApp extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      padding: 2.5rem;
      font-family: sans-serif;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <m-grid>
          <m-grid-item>
            <h1>${this.header}</h1>
          </m-grid-item>
          <m-grid-item>
            <p>
              "Good-day, Lord St. Simon," said Holmes, rising and bowing. "Pray
              take the basket-chair. This is my friend and colleague, Dr.
              Watson. Draw up a little to the fire, and we will talk this matter
              over."
            </p>
          </m-grid-item>
        </m-grid>
      </main>
    `;
  }
}

customElements.define('mote-app', MoteApp);
