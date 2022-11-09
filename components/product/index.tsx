import React from 'react';

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

export default function ProductItem(props: Product) {
  const { detail_image_url, item_name, price } = props;

  return (
    <ProductWrapper>
      <ImageWrapper>
        <ProductImage src={detail_image_url} layout="fill" objectFit="cover" />
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
