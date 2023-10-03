import * as React from 'react';
import { atom, useSetAtom } from 'jotai';

export const cartAtom = atom<number[]>([]);

export const useAddProductIdToCart = () => {
  const setCart = useSetAtom(cartAtom);

  return React.useCallback(
    (productId: number) => {
      setCart((ids) => [...ids, productId]);
    },
    [setCart],
  );
};

export const useRemoveProductIdFromCart = () => {
  const setCart = useSetAtom(cartAtom);

  return React.useCallback(
    (productId: number) => {
      setCart((ids) => ids.filter((id) => id !== productId));
    },
    [setCart],
  );
};
