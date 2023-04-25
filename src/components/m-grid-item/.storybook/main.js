/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import { vars, reset } from '../../../styles/styles';
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
    async viteFinal(config) {
      return mergeConfig(config);
    },
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: head => `
  ${head}
  <style>
    ${vars}
  </style>
  <style>
    ${reset}
  </style>
  `,
};
export default config;
