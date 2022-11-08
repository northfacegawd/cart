import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  title: 'Global Header Component',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
