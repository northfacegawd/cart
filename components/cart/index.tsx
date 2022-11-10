import Image from 'next/image';
import React from 'react';

import CheckBox from '@components/common/checkbox';
import Counter from '@components/common/counter';
import { useCounter } from '@hooks/useCounter';
import { numberIntoPrice } from '@lib/utils';
import { Product } from '@models/product.model';

import {
  CartItemName,
  CartItemPrice,
  CartItemWrapper,
  CounterBox,
} from './index.style';

interface CartItemProps
  extends Pick<
    Product,
    'detail_image_url' | 'item_name' | 'price' | 'item_no'
  > {}

export default function CartItem(props: CartItemProps) {
  const countData = useCounter(1, { max: 10, min: 1 });
  const { count } = countData;
  const { detail_image_url, item_name, price, item_no } = props;

  return (
    <CartItemWrapper>
      <CheckBox name={`${item_no}_product`} />
      <Image src={detail_image_url} width={100} height={120} />
      <CartItemName>{item_name}</CartItemName>
      <CounterBox>
        <Counter {...countData} />
      </CounterBox>
      <CartItemPrice>{numberIntoPrice(price * count)}원</CartItemPrice>
    </CartItemWrapper>
  );
}
