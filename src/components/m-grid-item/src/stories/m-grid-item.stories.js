import { html } from 'lit';
import '../m-grid-item.js';

import '@components/m-box/m-box.js';

export default {
  title: 'MGridItem',
  component: 'm-grid-item',
};

function Template() {
  return html`
    <m-grid-item>
      <m-box slot="content" padding="narrow" border="true">
        <h2 slot="content">Box content</h2>
      </m-box>
    </m-grid-item>
  `;
}

export const GridItem = Template.bind({});
GridItem.args = {};
