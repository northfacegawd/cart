import { ComponentMeta, ComponentStory } from '@storybook/react';

import CheckBox from '.';

export default {
  title: 'CheckBox Component',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
};
