import React from 'react';

import { Product } from '@models/product.model';

import CartItem from '..';
import { CartItemListTitle, CartItemListWrapper } from './index.style';

/**
 * store 생성하기 전까지 임시로 사용
 * TODO - store 값으로 대체하기
 */
const CART_LIST: Product[] = [
  {
    item_no: 661347,
    item_name: '카드 포켓 에어쿠션 투명 폰 케이스(아이폰 갤럭시 핸드폰)',
    detail_image_url:
      'https://img.29cm.co.kr/next-product/2020/10/14/eaddd1ba3d374a789a5084da0ea485d4_20201014205258.jpg?width=500',
    price: 37600,
    score: 200,
  },
  {
    item_no: 870160,
    item_name:
      '위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전',
    detail_image_url:
      'https://img.29cm.co.kr/next-product/2021/01/21/af916f6191f24a84b076e74e613a4795_20210121114833.jpg?width=500',
    price: 39900,
    score: 190,
    availableCoupon: false,
  },
];

export default function CartItemList() {
  return (
    <CartItemListWrapper>
      <CartItemListTitle>장바구니 리스트</CartItemListTitle>
      <ul>
        {CART_LIST.map(({ item_name, item_no, detail_image_url, price }) => (
          <CartItem
            key={item_no}
            detail_image_url={detail_image_url}
            item_name={item_name}
            price={price}
          />
        ))}
      </ul>
    </CartItemListWrapper>
  );
}
