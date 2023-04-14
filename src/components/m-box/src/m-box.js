import { LitElement, css, html } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export class MBox extends LitElement {
  static get properties() {
    return {
      padding: { type: String },
    };
  }

  constructor() {
    super();
    this.padding = 'none';
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
}

window.customElements.define('m-box', MBox);
