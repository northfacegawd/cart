import React from 'react';

import CartItem from '@components/cart';
import CheckBox from '@components/common/checkbox';
import { isSame } from '@lib/utils';
import useStore from '@store/index';

import {
  ButtonDivision,
  CartActionBox,
  CartActionButton,
  CartItemListWrapper,
  CartListEmpty,
} from './index.style';

export default function CartItemList() {
  const {
    cartList,
    deleteCart,
    selectCart,
    getSelectedList,
    allSelectCart,
    clearAllSelectedCart,
  } = useStore((state) => state);
  const onCheck = (id: number) => selectCart(id);
  const selectedCartList = getSelectedList();

  const onCheckAllItem = () => {
    if (isSame(selectedCartList.size, cartList.size)) {
      return clearAllSelectedCart();
    }
    allSelectCart();
  };

  const onDeleteCheckedItem = () => {
    [...selectedCartList].forEach(([key]) => {
      deleteCart(key);
    });
  };

  const disabled = !cartList.size;

  return (
    <CartItemListWrapper>
      <CartActionBox>
        <CheckBox
          name="all-check"
          onChange={onCheckAllItem}
          checked={isSame(selectedCartList.size, cartList.size) && !disabled}
          disabled={disabled}
        />
        <CartActionButton onClick={onCheckAllItem} disabled={disabled}>
          전체선택 ({selectedCartList.size}/{cartList.size})
        </CartActionButton>
        <ButtonDivision />
        <CartActionButton onClick={onDeleteCheckedItem} disabled={disabled}>
          선택항목 삭제
        </CartActionButton>
      </CartActionBox>
      <ul>
        {cartList.size <= 0 ? (
          <CartListEmpty>장바구니에 담긴 상품이 없습니다 😢</CartListEmpty>
        ) : (
          [...cartList].map(([, cart]) => (
            <CartItem
              key={cart.item_no}
              checkedIds={selectedCartList}
              onCheck={onCheck}
              {...cart}
            />
          ))
        )}
      </ul>
    </CartItemListWrapper>
  );
}
