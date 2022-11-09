import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from 'requests/product';

import ProductItem from '..';

export default function ProductList() {
  const { data, isLoading, error } = useQuery('products', fetchProducts);

  return (
    <ul>
      {data?.map((product) => (
        <ProductItem key={product.item_no} {...product} />
      ))}
    </ul>
  );
}
