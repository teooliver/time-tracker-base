// import '../src/styles/styles.scss';
// import '!style-loader!css-loader!../src/styles/styles.scss';
import { configure, addDecorator } from '@storybook/react';
import ProvidersDecorator from './providers';

import '!style-loader!css-loader!sass-loader!../src/styles/styles.scss';
import 'react-datepicker/dist/react-datepicker.css';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <ProvidersDecorator>
//       <Story />
//     </ProvidersDecorator>
//   ),
// ];
