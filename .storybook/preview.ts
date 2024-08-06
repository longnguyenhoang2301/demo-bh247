import type { Preview } from "@storybook/react";
import '../src/App.less';
import '../src/resources/styles/custom.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
