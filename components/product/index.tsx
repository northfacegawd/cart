import React, { useState } from 'react';

import AddCartModal from '@components/cart/add-modal';
import { numberIntoPrice } from '@lib/utils';
import { Product } from '@models/product.model';

import {
  CartButton,
  ImageWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from './index.style';

/**
 *
 * @param props 장바구니 스토어에 프로덕트 객체를 넘기기 위하여 우선 모든 데이터를 다 받음
 * @returns
 */
export default function ProductItem(props: Product) {
  const [open, setOpen] = useState<boolean>(false);
  const { detail_image_url, item_name, price } = props;

  return (
    <>
      <ProductWrapper>
        <ImageWrapper>
          <ProductImage
            src={detail_image_url}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <ProductInfo>
          <ProductName title={item_name}>{item_name}</ProductName>
          <ProductPrice>{numberIntoPrice(price)}</ProductPrice>
        </ProductInfo>
        <CartButton onClick={() => setOpen(true)}>장바구니 담기</CartButton>
      </ProductWrapper>
      <AddCartModal
        open={open}
        onClose={() => setOpen(false)}
        product={props}
      />
    </>
  );
}
