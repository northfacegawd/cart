import Image from 'next/image';
import React from 'react';

import CheckBox from '@components/common/checkbox';
import Counter from '@components/common/counter';
import { numberIntoPrice } from '@lib/utils';
import { Product } from '@models/product.model';
import useStore from '@store/index';

import {
  CartItemName,
  CartItemPrice,
  CartItemWrapper,
  CounterBox,
} from './index.style';

export interface CartItemProps extends Pick<Product, 'item_no'> {
  checkedIds: Map<unknown, unknown>;
  onCheck: (id: number) => void;
}

export default function CartItem(props: CartItemProps) {
  const getCartItem = useStore((state) => state.getCartItem);
  const updateCart = useStore((state) => state.updateCart);
  const { checkedIds, onCheck, item_no } = props;
  const cartItem = getCartItem(item_no);

  if (!cartItem) return null;

  const onIncrease = () => updateCart(cartItem.item_no, 'up');
  const onDecrease = () => updateCart(cartItem.item_no, 'down');

  return (
    <CartItemWrapper>
      <CheckBox
        name={`${item_no}_product`}
        checked={checkedIds.has(item_no)}
        onChange={() => onCheck(item_no)}
      />
      <Image src={cartItem.detail_image_url} width={100} height={120} />
      <CartItemName>{cartItem.item_name}</CartItemName>
      <CounterBox>
        <Counter
          min={0}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          count={cartItem.count}
        />
      </CounterBox>
      <CartItemPrice>
        {numberIntoPrice(cartItem.price * cartItem.count)}원
      </CartItemPrice>
    </CartItemWrapper>
  );
}
