import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pagination from '.';

export default {
  title: 'Pagination Component',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => <Pagination />;

export const Default = Template.bind({});
