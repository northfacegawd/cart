import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pagination from '.';

export default {
  title: 'Pagination Component',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currentPage: 20,
  totalCount: 100,
  pageCount: 5,
  limit: 5,
};
