import React, { ComponentProps, useContext, useState } from 'react';
import { Story } from '@storybook/react';
import ProvidersDecorator from '../../../../.storybook/providers';
import EditableInput from './EditableInput';

export default {
  title: 'TimeTracker/EditableInput',
  component: EditableInput,
};

const Template: Story<ComponentProps<typeof EditableInput>> = (args) => {
  // args.client = client;
  // args.setClient = setClient;

  return (
    <ProvidersDecorator>
      <EditableInput {...args} />
    </ProvidersDecorator>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
