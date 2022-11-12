import { NextPage } from 'next';
import React from 'react';

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
