import * as React from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const cartProductIdsAtom = atomWithStorage<number[]>('cart-product-ids', []);

export const useCartModel = () => {
  const [productIds, setProductIds] = useAtom(cartProductIdsAtom);

  const addProductId = React.useCallback(
    (productId: number) => {
      setProductIds((ids) => [...ids, productId]);
    },
    [setProductIds],
  );

  const removeProductId = React.useCallback(
    (productId: number) => {
      setProductIds((ids) => ids.filter((id) => id !== productId));
    },
    [setProductIds],
  );

  const clearCart = React.useCallback(() => {
    setProductIds([]);
  }, [setProductIds]);

  return {
    productIds,
    addProductId,
    removeProductId,
    clearCart,
  };
};
