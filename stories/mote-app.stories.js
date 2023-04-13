import { html } from 'lit';
import '../src/mote-app.js';

export default {
  title: 'MoteApp',
  component: 'mote-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <mote-app
      style="--mote-app-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </mote-app>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
