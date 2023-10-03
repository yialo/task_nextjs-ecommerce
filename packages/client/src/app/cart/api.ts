import * as React from 'react';
import { Product, readProductsByIds } from '@/entities/product';

interface QueryState {
  data: Product[];
  error: Error | null;
  isFetching: boolean;
  isInitail: boolean;
}

const INITIAL_QUERY_STATE: QueryState = {
  data: [],
  error: null,
  isFetching: false,
  isInitail: true,
};

export const useCartProductsQuery = (productIds: number[]) => {
  const [productsQuery, setProductsQuery] =
    React.useState<QueryState>(INITIAL_QUERY_STATE);

  React.useEffect(() => {
    const sendQuery = async () => {
      setProductsQuery((prev) => ({
        ...prev,
        isFetching: true,
        isInitail: false,
      }));

      try {
        const newProducts = await readProductsByIds(productIds);
        setProductsQuery((prev) => ({
          ...prev,
          data: newProducts,
          error: null,
          isFetching: false,
        }));
      } catch (error) {
        setProductsQuery((prev) => ({
          ...prev,
          data: [],
          error: error instanceof Error ? error : new Error('Unknown error'),
          isFetching: false,
        }));
      }
    };

    if (productsQuery.isInitail) {
      sendQuery();
    }
  }, [productIds, productsQuery.isInitail]);

  const retry = React.useCallback(() => {
    setProductsQuery(INITIAL_QUERY_STATE);
  }, []);

  return {
    ...productsQuery,
    retry,
  };
};
