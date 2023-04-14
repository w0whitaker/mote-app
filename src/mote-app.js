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
        <m-grid variant="side-by-side">
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
        <m-grid variant="2up">
          <m-grid-item>
            <p>
              "A most painful matter to me, as you can most readily imagine, Mr.
              Holmes. I have been cut to the quick. I understand that you have
              already managed several delicate cases of this sort, sir, though I
              presume that they were hardly from the same class of society."
            </p>
          </m-grid-item>
          <m-grid-item>
            <p>
              "Oh, yes; plenty. Then there is another note in the Morning Post
              to say that the marriage would be an absolutely quiet one, that it
              would be at St. George's, Hanover Square, that only half a dozen
              intimate friends would be invited, and that the party would return
              to the furnished house at Lancaster Gate which has been taken by
              Mr. Aloysius Doran. Two days later--that is, on Wednesday
              last--there is a curt announcement that the wedding had taken
              place, and that the honeymoon would be passed at Lord Backwater's
              place, near Petersfield. Those are all the notices which appeared
              before the disappearance of the bride."
            </p>
          </m-grid-item>
        </m-grid>
        <m-grid variant="1-3up">
          <m-grid-item>
            <m-grid variant="fit">
              <m-grid-item>
                <p>"Before the what?" asked Holmes with a start.</p>
              </m-grid-item>
              <m-grid-item>
                <p>"The vanishing of the lady."</p>
              </m-grid-item>
              <m-grid-item>
                <p>"When did she vanish, then?"</p>
              </m-grid-item>
              <m-grid-item>
                <p>"At the wedding breakfast."</p>
              </m-grid-item>
              <m-grid-item>
                <p>
                  "Indeed. This is more interesting than it promised to be;
                  quite dramatic, in fact."
                </p>
              </m-grid-item>
            </m-grid>
          </m-grid-item>
        </m-grid>
      </main>
    `;
  }
}

customElements.define('mote-app', MoteApp);
