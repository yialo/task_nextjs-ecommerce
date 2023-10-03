'use client';

import * as React from 'react';
import { Product, readProductsByIds } from '@/entities/product';
import { useCartModel } from '@/features/cart-in-out/model';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
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

  const { productIds } = useCartModel();

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

  return (
    <div className={cn('grid', className)}>
      {(() => {
        const fallbackClassName =
          'text-slate-600 self-center justify-self-center text-xl font-semibold';

        if (productsQuery.isInitail) {
          return <div className={fallbackClassName}>Loading...</div>;
        }
        if (productsQuery.error) {
          return <div className={fallbackClassName}>Something went wrong</div>;
        }
        if (!productsQuery.data.length) {
          return <div className={fallbackClassName}>Cart is empty</div>;
        }

        const orderTotal = productsQuery.data
          .reduce((acc, product) => acc + product.priceInCents / 100, 0)
          .toFixed(2);

        return (
          <>
            <ul>
              {productsQuery.data.map((product) => {
                return (
                  <li key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                  </li>
                );
              })}
            </ul>
            <div>
              Total: <span className="font-semibold">{`$${orderTotal}`}</span>
            </div>
            <Button
              className="md:w-1/2 md:justify-self-start"
              onClick={() => {
                console.log('Place order');
              }}
            >
              Place order
            </Button>
          </>
        );
      })()}
    </div>
  );
};
