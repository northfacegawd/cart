import { useRouter } from 'next/router';
import React from 'react';

import Pagination from '@components/common/pagination';
import ProductItem from '@components/product';
import { useProducts } from '@hooks/useProducts';

import { PaginatinWrapper, ProducstWrapper, ProductUList } from './index.style';

export default function ProductList() {
  const { query } = useRouter();
  const { data, isLoading, error } = useProducts(query.page);

  return (
    <ProducstWrapper>
      <ProductUList>
        {data?.data?.map((product) => (
          <ProductItem key={product.item_no} {...product} />
        ))}
      </ProductUList>
      {data && (
        <PaginatinWrapper>
          <Pagination
            currentPage={+(query.page ?? 1)}
            limit={data.limit}
            pageCount={5}
            totalCount={data.totalCount}
          />
        </PaginatinWrapper>
      )}
    </ProducstWrapper>
  );
}
