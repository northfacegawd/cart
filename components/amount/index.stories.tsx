import { types } from '@babel/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Amount from '.';

export default {
  title: 'Amount Component',
  component: Amount,
} as ComponentMeta<typeof Amount>;

const Template: ComponentStory<typeof Amount> = () => <Amount />;
export const Default = Template.bind({});
