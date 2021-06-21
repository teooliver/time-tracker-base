import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Calendar3 } from './Calendar3';

export default {
  title: 'TimeTracker/Icons/Calendar3',
  component: Calendar3,
};

const Template: Story<ComponentProps<typeof Calendar3>> = (args) => {
  return <Calendar3 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  /*👇 The args you need here will depend on your component */
  className: 'icon',
  size: '20',
  color: 'white',
};
