import React from 'react';

import CartItem from '@components/cart';
import CheckBox from '@components/common/checkbox';
import { useMapState } from '@hooks/useMapState';
import { isSame } from '@lib/utils';
import useStore from '@store/index';

import {
  ButtonDivision,
  CartActionBox,
  CartActionButton,
  CartItemListWrapper,
} from './index.style';

export default function CartItemList() {
  const cartList = useStore((state) => state.cartList);
  const [checkedIds, { onAdd, onDelete, onClear }] = useMapState<
    number,
    boolean
  >();

  const onCheck = (id: number) => {
    if (checkedIds.has(id)) return onDelete(id);
    onAdd(id, true);
  };

  const onCheckAllItem = () => {
    if (isSame(checkedIds.size, cartList.length)) return onClear();
    cartList.forEach(({ item_no }) => onAdd(item_no, true));
  };

  const disabled = !cartList.length;

  return (
    <CartItemListWrapper>
      <CartActionBox>
        <CheckBox
          name="all-check"
          onChange={onCheckAllItem}
          checked={isSame(checkedIds.size, cartList.length) && !disabled}
          disabled={disabled}
        />
        <CartActionButton onClick={onCheckAllItem} disabled={disabled}>
          전체선택 ({checkedIds.size}/{cartList.length})
        </CartActionButton>
        <ButtonDivision />
        <CartActionButton disabled={disabled}>선택삭제</CartActionButton>
      </CartActionBox>
      <ul>
        {cartList.map((cart) => (
          <CartItem
            key={cart.item_no}
            checkedIds={checkedIds}
            onCheck={onCheck}
            {...cart}
          />
        ))}
      </ul>
    </CartItemListWrapper>
  );
}
