import { useMapState } from '@hooks/useMapState';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartItem, { CartItemProps } from '.';

interface DemoCartItemProps
  extends Omit<CartItemProps, 'checkIds' | 'onCheck'> {}

const DemoCartItem = (props: DemoCartItemProps) => {
  const [checkedIds, { onAdd, onDelete }] = useMapState<number, true>();
  const onCheck = (id: number) => {
    if (checkedIds.has(id)) return onDelete(id);
    onAdd(id, true);
  };
  return <CartItem {...props} checkedIds={checkedIds} onCheck={onCheck} />;
};

export default {
  title: 'Cart Item Component',
  component: DemoCartItem,
} as ComponentMeta<typeof DemoCartItem>;

const Template: ComponentStory<typeof DemoCartItem> = (args) => (
  <DemoCartItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item_name: '스탠리 클래식 런치박스',
  detail_image_url:
    'https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500',
  price: 75000,
  item_no: 122997,
};
