import { useQuery } from 'react-query';
import { fetchProducts } from 'requests/product';

export const useProducts = (page: any) => {
  const queryFn = () => fetchProducts(page);
  return useQuery(['products', page], queryFn, {
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
