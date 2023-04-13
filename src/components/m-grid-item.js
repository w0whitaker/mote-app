import { LitElement, html, css } from 'lit';
// import { classMap } from 'lit-html/directives/class-map.js';

class MGridItem extends LitElement {
  static styles = css`
    :host {
      background-color: lightblue;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define('m-grid-item', MGridItem);
