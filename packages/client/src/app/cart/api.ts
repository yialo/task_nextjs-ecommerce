import * as React from 'react';
import { Product, readProductsByIds } from '@/entities/product';
import { API_URL_BASE } from '@/shared/config';

interface QueryState {
  data: Product[];
  error: Error | null;
  isFetching: boolean;
  isInitail: boolean;
}

export const useCartProductsQuery = (productIds: number[]) => {
  const [productsQuery, setProductsQuery] = React.useState<QueryState>({
    data: [],
    error: null,
    isFetching: false,
    isInitail: true,
  });
  const [retryTrigger, setRetryTrigger] = React.useState(false);

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

    sendQuery();
  }, [productIds, retryTrigger]);

  const retry = React.useCallback(() => {
    setRetryTrigger((prev) => !prev);
  }, []);

  return {
    ...productsQuery,
    retry,
  };
};

const placeOrder = async (products: Product[]) => {
  const payload = products.map(({ id, sizes }) => ({
    id,
    size: sizes[0],
  }));

  const response = await fetch(`${API_URL_BASE}/checkout/placeOrder`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ products: payload }),
  });

  if (!response.ok) {
    throw new Error('Failed to place order');
  }
};

interface OrderMutationState {
  error: Error | null;
  isLoading: boolean;
}

export const usePlaceOrderMutation = () => {
  const [state, setState] = React.useState<OrderMutationState>({
    error: null,
    isLoading: false,
  });

  const mutate = React.useCallback(
    async (products: Product[]) => {
      setState({ error: null, isLoading: true });

      try {
        await placeOrder(products);
        setState((prev) => ({ ...prev, error: null, isLoading: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error : new Error('Unknown error'),
          isLoading: false,
        }));
      }
    },
    [setState],
  );

  return {
    mutate,
    ...state,
  };
};
