import { useRouter } from 'next/router';
import React from 'react';

import Pagination from '@components/common/pagination';
import ProductItem from '@components/product';
import { useProducts } from '@hooks/useProducts';

import ProductSkeleton from '../skeleton';
import {
  ErrorMesasge,
  PaginatinWrapper,
  ProducstWrapper,
  ProductUList,
} from './index.style';

export default function ProductList() {
  const { query } = useRouter();
  const { data, isLoading, isError } = useProducts(query.page);

  return (
    <ProducstWrapper>
      {isError && <ErrorMesasge>에러가 발생했습니다 😢</ErrorMesasge>}
      <ProductUList>
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <ProductSkeleton key={(i + 1).toString()} />
            ))
          : data?.data?.map((product) => (
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
