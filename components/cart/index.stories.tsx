import { useEffect } from 'react';

import { useMapState } from '@hooks/useMapState';
import useStore from '@store/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartItem, { CartItemProps } from '.';

interface DemoCartItemProps
  extends Omit<CartItemProps, 'checkIds' | 'onCheck'> {}

// 테스트에서 공통으로 사용할 아이템 ID
const ITEM_NUMBER = 122997;

const DemoCartItem = (props: DemoCartItemProps) => {
  const [checkedIds, { onAdd, onDelete }] = useMapState<number, true>();
  const addCart = useStore((state) => state.addCart);
  const reset = useStore((state) => state.reset);

  // 단순히 렌더링을 위해 스토어에서 리스트를 불러옴
  useStore((state) => state.cartList);

  useEffect(() => {
    addCart(
      {
        item_no: ITEM_NUMBER,
        item_name: '스탠리 클래식 런치박스',
        detail_image_url:
          'https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500',
        price: 75000,
        score: 200,
      },
      1,
    );
    return () => {
      reset();
    };
  }, [addCart]);

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
  item_no: ITEM_NUMBER,
};
