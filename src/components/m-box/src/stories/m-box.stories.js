import { html } from 'lit';
import '../m-box.js';

export default {
  title: 'MBox',
  component: 'm-box',
  argTypes: {
    padding: {
      options: ['none', 'scant', 'narrow', 'standard', 'wide', 'generous'],
      control: 'select',
    },
  },
};

function Template({ padding }) {
  return html`
    <m-box .padding=${padding}>
      <p>Box content</p>
    </m-box>
  `;
}

export const Box = Template.bind({});
Box.args = {
  padding: 'none',
};
