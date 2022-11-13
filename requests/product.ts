import axios from 'axios';

import { Product } from '@models/product.model';

export const fetchProducts = async (page: any) => {
  const {
    data: { data },
  } = await axios.get<{ data: Product[] }>('/api/products', {
    params: { page },
  });

  return data;
};
