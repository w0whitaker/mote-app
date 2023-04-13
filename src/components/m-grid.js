import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

class MGrid extends LitElement {
  static styles = css`
    .m-grid {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .m-grid--side-by-side {
      grid-template-columns: 1fr 1fr;
    }
  `;

  static properties = {
    variant: { type: String },
  };

  constructor() {
    super();
    this.variant = {};
  }

  render() {
    const classes = {
      'm-grid': true,
      [`m-grid--${this.variant}`]: this.variant,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('m-grid', MGrid);
