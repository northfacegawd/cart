import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { QueryClient, dehydrate } from 'react-query';
import { fetchProducts } from 'requests/product';

import ProductList from '@components/product/list';
import { ProdctsSection, ProductsPageTitle } from '@styles/pages/product.style';

const ProductsPage: NextPage = () => {
  return (
    <ProdctsSection>
      <ProductsPageTitle>상품 목록</ProductsPageTitle>
      <ProductList />
    </ProdctsSection>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ?? 1;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
