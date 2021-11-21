import { Story, Meta } from '@storybook/react';
import { Clock, ClockProps } from './Clock';

export default {
  title: 'TimeTracker/Clock',
  component: Clock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ClockProps> = (args) => <Clock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  timerArray: [13, 53, 20],
};
