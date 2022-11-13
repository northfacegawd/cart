import React, { useMemo, useState } from 'react';

import CouponModal from '@components/coupon/modal';
import { useCoupons } from '@hooks/useCoupons';
import {
  convertMapIntoArray,
  getTotal,
  isSame,
  numberIntoPrice,
} from '@lib/utils';
import { Coupon } from '@models/coupon.model';
import useStore from '@store/index';

import {
  AmountBox,
  AmountWrapper,
  CouponStatusArea,
  DisableCouponMessge,
  OrderCountBox,
  Price,
  SelectCouponButton,
  Subject,
} from './index.style';

export default function Amount() {
  const selectedCartList = useStore((state) => state.getSelectedList());
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon>();
  const { data } = useCoupons();

  const { totalAmount, discountAmount, availableCartList } = useMemo(() => {
    if (!selectedCartList.size) return { totalAmount: 0, discountAmount: 0 };
    // 선택된 카트들이 담겨 있는 맵을 배열로 변환
    const convertedArray = convertMapIntoArray(selectedCartList);
    // 쿠폰 사용이 가능한 상품들
    const availableList = convertedArray.filter(
      (cart) => cart.availableCoupon !== false,
    );
    // 쿠폰 사용이 가능한 상품들의 총 합
    const availableTotal = getTotal(
      availableList.map(({ price, count }) => price * count),
    );
    // 할인금액 초기화
    let discount = 0;
    // 할인 쿠폰 종류에 따라 계산을 다르게
    if (selectedCoupon?.discountRate) {
      discount = availableTotal / selectedCoupon.discountRate;
    } else if (selectedCoupon?.discountAmount) {
      discount = selectedCoupon.discountAmount;
    }
    // 할인금액이 총 합 보다 큰 경우 할인금액을 총 합 만큼 설저
    if (availableTotal < discount) {
      discount = availableTotal;
    }
    // 선택된 상품과 쿠폰 사용이 가능한 상품의 갯수가 같으면 여기서 리턴
    if (isSame(convertedArray.length, availableList.length)) {
      return {
        totalAmount: availableTotal,
        discountAmount: discount,
        availableCartList: availableList,
      };
    }
    // 쿠폰을 사용하지 못 하는 상품들
    const unavailableList = convertedArray.filter(
      (cart) => cart.availableCoupon === false,
    );
    // 선택된 상품과 쿠폰 사용이 불가능한 상품의 갯수가 같으면 할인금액 초기화
    if (isSame(unavailableList.length, convertedArray.length)) {
      discount = 0;
    }
    // 쿠폰 사용이 불가능한 상품들의 총 합
    const unavailableTotal = getTotal(
      unavailableList.map(({ count, price }) => count * price),
    );
    return {
      totalAmount: unavailableTotal + availableTotal,
      discountAmount: discount,
      availableCartList: availableList,
    };
  }, [selectedCartList, selectedCoupon]);

  const onSelectCoupon = (coupon: Coupon) => setSelectedCoupon(coupon);

  return (
    <>
      <AmountWrapper>
        <CouponStatusArea>
          {(availableCartList?.length ?? 0) <= 0 && (
            <DisableCouponMessge>
              쿠폰 사용 가능한 상품이 없습니다.
            </DisableCouponMessge>
          )}
          <SelectCouponButton
            disabled={(availableCartList?.length ?? 0) <= 0}
            onClick={() => setOpen(true)}
          >
            쿠폰선택하기
          </SelectCouponButton>
        </CouponStatusArea>
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
          <Price>{numberIntoPrice(discountAmount)}원</Price>
        </AmountBox>
        <AmountBox width="35%">
          <Subject>총 결제금액</Subject>
          <Price total>
            {numberIntoPrice(totalAmount - discountAmount, true)}원
          </Price>
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
