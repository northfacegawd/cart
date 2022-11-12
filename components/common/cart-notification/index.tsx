import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import ShoppingCart from '@components/icons/shopping-cart';
import { Cart } from '@models/cart.model';
import useStore from '@store/index';

import FadeInImage from '../fadein-image';
import {
  CartNotifiCationWrapper,
  CartTooltip,
  Count,
  Notification,
} from './index.style';

export default function CartNotification() {
  const [cartItem, setCartItem] = useState<Cart>();
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const cartList = useStore((state) => state.cartList);
  useStore.subscribe((state) => {
    if (!state.lastUpdatedCart) return;
    if (timer) clearTimeout(timer);
    setCartItem(state.lastUpdatedCart);
  });

  useEffect(() => {
    setTimer(
      setTimeout(() => {
        setCartItem(undefined);
      }, 1500),
    );
    return () => {
      return clearTimeout(timer);
    };
  }, [cartItem]);

  return (
    <CartNotifiCationWrapper data-tip="hello world">
      <ShoppingCart />
      {cartList.size > 0 && <Count>{cartList.size}</Count>}
      {cartItem && (
        <Transition in={!!cartItem} timeout={0} mountOnEnter unmountOnExit>
          <CartTooltip>
            <FadeInImage
              src={cartItem.detail_image_url}
              width={40}
              height={60}
              alt={cartItem.item_name}
            />
            <Notification>
              <span>{cartItem.item_name}</span>
              <br />
              상품이 장바구니에 담겼습니다.
            </Notification>
          </CartTooltip>
        </Transition>
      )}
    </CartNotifiCationWrapper>
  );
}
