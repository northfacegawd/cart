import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchCoupons } from 'requests/coupon';

import { numberIntoPrice } from '@lib/utils';
import useStore from '@store/index';

import {
  AmountBox,
  AmountWrapper,
  OrderCountBox,
  Price,
  Subject,
} from './index.style';

export default function Amount() {
  const selectedCartList = useStore((state) => state.getSelectedList());
  const { data } = useQuery('coupons', fetchCoupons);

  const totalAmount = useMemo(() => {
    return [...selectedCartList]
      .map(([, { count, price }]) => count * price)
      ?.reduce((a, b) => a + b, 0);
  }, [selectedCartList, data]);

  return (
    <AmountWrapper>
      <OrderCountBox>
        <Subject>주문 상품 수</Subject>
        <Price>총 {numberIntoPrice(selectedCartList.size)}개</Price>
      </OrderCountBox>
      <AmountBox width="35%">
        <Subject>총 주문금액</Subject>
        <Price>{numberIntoPrice(totalAmount)}원</Price>
      </AmountBox>
      <AmountBox width="30%">
        <Subject>총 배송비</Subject>
        <Price>0</Price>
      </AmountBox>
      <AmountBox width="35%">
        <Subject>총 결제금액</Subject>
        <Price total>{numberIntoPrice(totalAmount)}원</Price>
      </AmountBox>
    </AmountWrapper>
  );
}
