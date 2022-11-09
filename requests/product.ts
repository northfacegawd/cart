import axios from 'axios';

import { Product } from '@models/product.model';

export const fetchProducts = async () => {
  const {
    data: { data },
  } = await axios.get<{ data: Product[] }>('/api/products');

  return data;
};
