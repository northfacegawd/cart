import React from 'react';

import Counter from '@components/common/counter';
import Modal from '@components/common/modal';
import { useCounter } from '@hooks/useCounter';
import { numberIntoPrice } from '@lib/utils';
import { Product } from '@models/product.model';
import useStore from '@store/index';

import {
  ActionButton,
  ActionButtonBox,
  Message,
  ProductAmount,
  ProductAmountBox,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './index.style';

interface AddCartModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function AddCartModal({
  onClose,
  open,
  product,
}: AddCartModalProps) {
  const { item_name, price, item_no } = product;
  const counterData = useCounter();
  const addCart = useStore((state) => state.addCart);
  const cartList = useStore((state) => state.cartList);

  const onAddCart = () => {
    addCart(product, counterData.count);
    counterData.onReset();
    onClose();
  };

  const onCloseModal = () => {
    counterData.onReset();
    onClose();
  };

  const full =
    cartList.length >= 3 && !cartList.find((cart) => cart.item_no === item_no);

  return (
    <Modal
      open={open}
      onClose={onClose}
      config={{
        contentStyle: {
          padding: '1.5rem',
          width: '400px',
          borderRadius: '6px',
        },
      }}
    >
      <ProductName>{item_name}</ProductName>
      <ProductInfo>
        <ProductPrice>{numberIntoPrice(product.price)}원</ProductPrice>
        <Counter {...counterData} />
      </ProductInfo>
      <ProductAmountBox>
        <ProductAmount>합계</ProductAmount>
        <ProductAmount>
          {numberIntoPrice(counterData.count * price)}
        </ProductAmount>
      </ProductAmountBox>
      <ActionButtonBox>
        {full && (
          <Message>
            장바구니에는 최대 3개의 상품까지만 담을 수 있습니다.
          </Message>
        )}
        <ActionButton onClick={onCloseModal}>취소</ActionButton>
        <ActionButton
          primary
          disabled={!counterData.count || full}
          onClick={onAddCart}
        >
          장바구니 담기
        </ActionButton>
      </ActionButtonBox>
    </Modal>
  );
}
