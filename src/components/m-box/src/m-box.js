import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

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
    const classes = {
      'm-box': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .m-box {
        border: 1px solid black;
      }
    `;
  }
}

window.customElements.define('m-box', MBox);
