import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartItemList from '.';

export default {
  title: 'Cart Item List Component',
  component: CartItemList,
} as ComponentMeta<typeof CartItemList>;

const Template: ComponentStory<typeof CartItemList> = () => <CartItemList />;
export const Default = Template.bind({});
