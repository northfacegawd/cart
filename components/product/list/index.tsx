import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from 'requests/product';

import ProductItem from '@components/product';

import { ProducstWrapper, ProductUList } from './index.style';

export default function ProductList() {
  const { data, isLoading, error } = useQuery('products', fetchProducts, {
    refetchOnWindowFocus: false,
  });

  return (
    <ProducstWrapper>
      <ProductUList>
        {data?.map((product) => (
          <ProductItem key={product.item_no} {...product} />
        ))}
      </ProductUList>
    </ProducstWrapper>
  );
}
