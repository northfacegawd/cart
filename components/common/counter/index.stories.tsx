import { useCounter } from '@hooks/useCounter';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Counter from '.';

const DemoCounter = () => {
  const counterData = useCounter();
  return <Counter {...counterData} />;
};

export default {
  title: 'Counter Component',
  component: DemoCounter,
} as ComponentMeta<typeof DemoCounter>;

const Template: ComponentStory<typeof DemoCounter> = () => <DemoCounter />;

export const Default = Template.bind({});
