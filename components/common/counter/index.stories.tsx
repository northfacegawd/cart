import { UserCounterOptions, useCounter } from '@hooks/useCounter';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Counter from '.';

interface DemoCounterProps extends UserCounterOptions {
  defaultValue?: number;
}

const DemoCounter = ({ defaultValue, max, min }: DemoCounterProps) => {
  const counterData = useCounter(defaultValue, { max, min });
  return <Counter {...counterData} />;
};

export default {
  title: 'Counter Component',
  component: DemoCounter,
} as ComponentMeta<typeof DemoCounter>;

const Template: ComponentStory<typeof DemoCounter> = (args) => (
  <DemoCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 0,
  min: 0,
  max: 10,
};
