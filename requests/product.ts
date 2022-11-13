import axios from 'axios';

import { ProductsRsponse } from '@models/product.model';

export const fetchProducts = async (page: any) => {
  const { data } = await axios.get<ProductsRsponse>('/api/products', {
    params: { page: page ?? 1 },
  });

  return data;
};
