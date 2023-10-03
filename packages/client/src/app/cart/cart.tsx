'use client';

import * as React from 'react';
import { useCartModel } from '@/features/cart-in-out/model';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useCartProductsQuery } from './api';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
  const { productIds } = useCartModel();
  const productsQuery = useCartProductsQuery(productIds);

  const fallbackClassName = cn(
    'flex text-slate-600 justify-center items-center text-xl font-semibold',
    className,
  );

  if (productsQuery.isInitail || productsQuery.isFetching) {
    return <div className={fallbackClassName}>Loading...</div>;
  }
  if (productsQuery.error) {
    return (
      <div className={fallbackClassName}>
        <div className="grid gap-4">
          Something went wrong
          <Button variant="negative" onClick={productsQuery.retry}>
            Retry
          </Button>
        </div>
      </div>
    );
  }
  if (!productsQuery.data.length) {
    return <div className={fallbackClassName}>Cart is empty</div>;
  }

  const orderTotal = productsQuery.data
    .reduce((acc, product) => acc + product.priceInCents / 100, 0)
    .toFixed(2);

  return (
    <div className={cn('grid content-start', className)}>
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
    </div>
  );
};
