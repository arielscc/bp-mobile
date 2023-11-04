import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../services/products.service';

export const useProductQuery = () => {
  const productQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  return productQuery;
};
