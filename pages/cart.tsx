import { NextPage } from 'next';
import React from 'react';

import Amount from '@components/amount';
import CartItemList from '@components/cart/list';
import {
  AmountSection,
  CartPageTitle,
  CartSection,
} from '@styles/pages/cart.style';

const CartPage: NextPage = () => {
  return (
    <>
      <CartSection>
        <CartPageTitle>장바구니</CartPageTitle>
        <CartItemList />
      </CartSection>
      <AmountSection>
        <Amount />
      </AmountSection>
    </>
  );
};

export default CartPage;
