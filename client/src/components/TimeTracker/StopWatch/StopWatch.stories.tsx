import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ProvidersDecorator from '../../../../.storybook/providers';
import Stopwatch from './Stopwatch';

export default {
  title: 'TimeTracker/StopWatch',
  component: Stopwatch,
};

const Template: Story<ComponentProps<typeof Stopwatch>> = (args) => {
  return (
    <ProvidersDecorator>
      <Stopwatch />
    </ProvidersDecorator>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
