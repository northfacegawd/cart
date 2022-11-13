import { useRouter } from 'next/router';
import React from 'react';

import ProductItem from '@components/product';
import { useProducts } from '@hooks/useProducts';

import { ProducstWrapper, ProductUList } from './index.style';

export default function ProductList() {
  const { query } = useRouter();
  const { data, isLoading, error } = useProducts(query.page);

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
