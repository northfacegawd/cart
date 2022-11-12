import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCoupons } from 'requests/coupon';

import CouponModal from '@components/coupon/modal';
import { numberIntoPrice } from '@lib/utils';
import { Coupon } from '@models/coupon.model';
import useStore from '@store/index';

import {
  AmountBox,
  AmountWrapper,
  OrderCountBox,
  Price,
  SelectCouponButton,
  Subject,
} from './index.style';

export default function Amount() {
  const selectedCartList = useStore((state) => state.getSelectedList());
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon>();
  const { data } = useQuery('coupons', fetchCoupons);

  const totalAmount = useMemo(() => {
    return [...selectedCartList]
      .map(([, { count, price }]) => count * price)
      ?.reduce((a, b) => a + b, 0);
  }, [selectedCartList, data]);

  const onSelectCoupon = (coupon: Coupon) => setSelectedCoupon(coupon);

  return (
    <>
      <AmountWrapper>
        <SelectCouponButton onClick={() => setOpen(true)}>
          쿠폰선택하기
        </SelectCouponButton>
        <OrderCountBox>
          <Subject>주문 상품 수</Subject>
          <Price>총 {numberIntoPrice(selectedCartList.size)}개</Price>
        </OrderCountBox>
        <AmountBox width="35%">
          <Subject>총 주문금액</Subject>
          <Price>{numberIntoPrice(totalAmount)}원</Price>
        </AmountBox>
        <AmountBox width="30%">
          <Subject>쿠폰할인</Subject>
          <Price>0</Price>
        </AmountBox>
        <AmountBox width="35%">
          <Subject>총 결제금액</Subject>
          <Price total>{numberIntoPrice(totalAmount)}원</Price>
        </AmountBox>
      </AmountWrapper>
      <CouponModal
        selectedTitle={selectedCoupon?.title ?? ''}
        coupons={data ?? []}
        open={open}
        onSelectCoupon={onSelectCoupon}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
