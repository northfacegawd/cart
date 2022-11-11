import React from 'react';

import {
  AmountBox,
  AmountWrapper,
  OrderCountBox,
  Price,
  Subject,
} from './index.style';

export default function Amount() {
  return (
    <AmountWrapper>
      <OrderCountBox>
        <Subject>주문 상품 수</Subject>
        <Price>총 1개</Price>
      </OrderCountBox>
      <AmountBox width="35%">
        <Subject>총 주문금액</Subject>
        <Price>39,900</Price>
      </AmountBox>
      <AmountBox width="30%">
        <Subject>총 배송비</Subject>
        <Price>0</Price>
      </AmountBox>
      <AmountBox width="35%">
        <Subject>총 결제금액</Subject>
        <Price total>39,900</Price>
      </AmountBox>
    </AmountWrapper>
  );
}
