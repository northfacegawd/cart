import React from 'react';

import Modal from '@components/common/modal';
import { Coupon } from '@models/coupon.model';

import {
  CloseButton,
  CouponInfo,
  CouponInfoList,
  ModalTitle,
  SelectedCouponTitle,
} from './index.style';

interface CouponModalProps {
  selectedTitle: string;
  coupons: Coupon[];
  open: boolean;
  onSelectCoupon: (coupon: Coupon) => void;
  onClose: () => void;
}

export default function CouponModal({
  selectedTitle,
  coupons,
  onClose,
  open,
  onSelectCoupon,
}: CouponModalProps) {
  const onSelectCouponWrapper = (coupon: Coupon) => {
    onSelectCoupon(coupon);
    onClose();
  };

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
      <ModalTitle>
        사용하실 쿠폰을 선택해주세요{' '}
        {selectedTitle && (
          <SelectedCouponTitle>
            현재 선택된 쿠폰: {selectedTitle}
          </SelectedCouponTitle>
        )}
      </ModalTitle>
      <CouponInfoList>
        {coupons.map((coupon) => (
          <CouponInfo
            key={coupon.title}
            onClick={() => onSelectCouponWrapper(coupon)}
          >
            {coupon.title}
          </CouponInfo>
        ))}
      </CouponInfoList>
      <CloseButton onClick={onClose}>닫기</CloseButton>
    </Modal>
  );
}
