import { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import ProvidersDecorator from '../../../.storybook/providers';

import ClientsDropdown from './ClientsDropdown';

export default {
  title: 'TimeTracker/ClientsDropdown',
  component: ClientsDropdown,
};

const Template: Story<ComponentProps<typeof ClientsDropdown>> = (args) => {
  const [client, setClient] = useState('No Client');

  args.client = client;
  args.setClient = setClient;

  return (
    <ProvidersDecorator>
      <ClientsDropdown {...args} />
    </ProvidersDecorator>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   /*👇 The args you need here will depend on your component */
// };
