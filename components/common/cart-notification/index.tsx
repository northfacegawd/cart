import React from 'react';

import ShoppingCart from '@components/icons/shopping-cart';
import useStore from '@store/index';

import { CartNotifiCationWrapper, Notification } from './index.style';

export default function CartNotification() {
  const cartList = useStore((state) => state.cartList);

  return (
    <CartNotifiCationWrapper>
      <ShoppingCart />
      {cartList.length > 0 && <Notification>{cartList.length}</Notification>}
    </CartNotifiCationWrapper>
  );
}
