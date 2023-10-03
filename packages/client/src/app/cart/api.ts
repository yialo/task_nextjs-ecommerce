import * as React from 'react';
import { Product, readProductsByIds } from '@/entities/product';

export const useCartProductsQuery = (productIds: number[]) => {
  const [productsQuery, setProductsQuery] = React.useState<{
    data: Product[];
    error: Error | null;
    isFetching: boolean;
    isInitail: boolean;
  }>({
    data: [],
    error: null,
    isFetching: false,
    isInitail: true,
  });

  React.useEffect(() => {
    (async () => {
      setProductsQuery((prev) => ({
        ...prev,
        isFetching: true,
        isInitail: false,
      }));
      const newProducts = await readProductsByIds(productIds);
      setProductsQuery((prev) => ({
        ...prev,
        data: newProducts,
        error: null,
        isFetching: false,
      }));
      try {
      } catch (error) {
        setProductsQuery((prev) => ({
          ...prev,
          data: [],
          error: error instanceof Error ? error : new Error('Unknown error'),
          isFetching: false,
        }));
      }
    })();
  }, [productIds]);

  return productsQuery;
};
