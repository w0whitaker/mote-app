import { html } from 'lit';
import '../m-box.js';

export default {
  title: 'MBox',
  component: 'm-box',
  argTypes: {
    padding: {
      options: ['none', 'scant', 'narrow', 'standard', 'wide', 'jumbo'],
      control: 'select',
    },
    border: {
      control: 'boolean',
    },
    thickness: {
      options: ['thin', 'medium', 'thick', 'heavy'],
      control: 'select',
    },
  },
};

function Template({ padding, border, thickness }) {
  return html`
    <m-box .padding=${padding} .border=${border} .thickness=${thickness}>
      <h2 slot="content">Box content</h2>
    </m-box>
  `;
}

export const Box = Template.bind({});
Box.args = {
  padding: 'none',
  border: true,
};
