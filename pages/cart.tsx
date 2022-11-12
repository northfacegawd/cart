import { NextPage } from 'next';
import React from 'react';

import CartItemList from '@components/cart/list';
import { CartPageTitle, CartSection } from '@styles/pages/cart.style';

const CartPage: NextPage = () => {
  return (
    <CartSection>
      <CartPageTitle>장바구니</CartPageTitle>
      <CartItemList />
    </CartSection>
  );
};

export default CartPage;
