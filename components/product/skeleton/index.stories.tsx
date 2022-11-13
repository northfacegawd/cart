import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductSkeleton from '.';

export default {
  title: 'Product Loading Skeleton Component',
  component: ProductSkeleton,
} as ComponentMeta<typeof ProductSkeleton>;

const Template: ComponentStory<typeof ProductSkeleton> = () => (
  <ProductSkeleton />
);

export const Default = Template.bind({});
