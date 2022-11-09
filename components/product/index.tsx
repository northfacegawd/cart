import React, { useState } from 'react';

import ShoppingCart from '@components/icons/shopping-cart';
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
  const [opacity, setOpacity] = useState<number>(0);
  const { detail_image_url, item_name, price } = props;

  return (
    <ProductWrapper>
      <ImageWrapper>
        <ProductImage
          onLoadingComplete={() => setOpacity(1)}
          src={detail_image_url}
          layout="fill"
          objectFit="cover"
          style={{ opacity }}
        />
      </ImageWrapper>
      <ProductInfo>
        <ProductName>{item_name}</ProductName>
        <div className="flex-center">
          <ProductPrice>{price.toLocaleString()}</ProductPrice>
        </div>
      </ProductInfo>
      <CartButton>장바구니 담기</CartButton>
    </ProductWrapper>
  );
}
