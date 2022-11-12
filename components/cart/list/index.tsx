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
  CartListEmpty,
} from './index.style';

export default function CartItemList() {
  const cartList = useStore((state) => state.cartList);
  const deleteCart = useStore((state) => state.deleteCart);

  const [checkedIds, { onAdd, onDelete, onClear }] = useMapState<
    number,
    boolean
  >();

  const onCheck = (id: number) => {
    if (checkedIds.has(id)) return onDelete(id);
    onAdd(id, true);
  };

  const onCheckAllItem = () => {
    if (isSame(checkedIds.size, cartList.size)) return onClear();
    cartList.forEach(({ item_no }) => onAdd(item_no, true));
  };

  const onDeleteCheckedItem = () => {
    [...checkedIds].forEach(([key]) => {
      onDelete(key);
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
          checked={isSame(checkedIds.size, cartList.size) && !disabled}
          disabled={disabled}
        />
        <CartActionButton onClick={onCheckAllItem} disabled={disabled}>
          전체선택 ({checkedIds.size}/{cartList.size})
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
              checkedIds={checkedIds}
              onCheck={onCheck}
              {...cart}
            />
          ))
        )}
      </ul>
    </CartItemListWrapper>
  );
}
