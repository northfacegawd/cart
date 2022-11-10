import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartItem from '.';

export default {
  title: 'Cart Item Component',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item_name: '스탠리 클래식 런치박스',
  detail_image_url:
    'https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500',
  price: 75000,
};
