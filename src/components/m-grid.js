import { LitElement, html, css } from 'lit';
// import { classMap } from 'lit/directives/class-map.js';

class MGrid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
      background-color: limegreen;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define('m-grid', MGrid);
