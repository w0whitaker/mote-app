import { LitElement, html, css } from 'lit';
// import { classMap } from 'lit-html/directives/class-map.js';

class MGridItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .m-grid-item {
      display: flex;
      border: 1px solid #ccc;
    }
  `;

  render() {
    return html`
      <div class="m-grid-item">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('m-grid-item', MGridItem);
