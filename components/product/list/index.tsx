import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from 'requests/product';

import ProductItem from '@components/product';

import { ProducstWrapper, ProductUList } from './index.style';

export default function ProductList() {
  const { query } = useRouter();
  const page = query.page ?? 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
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
