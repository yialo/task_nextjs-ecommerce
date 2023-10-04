'use client';

import * as React from 'react';
import { TrashIcon } from 'lucide-react';
import { ProductCartCard } from '@/entities/product';
import { useCartModel } from '@/features/cart-in-out/model';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { placeOrder, useCartProductsQuery } from './api';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
  const { productIds, removeProductId } = useCartModel();
  const productsQuery = useCartProductsQuery(productIds);

  const fallbackClassName = cn(
    'flex text-slate-600 justify-center items-center text-xl font-semibold',
    className,
  );

  console.log({ productIds, productsQuery });

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
    <div className={cn('grid content-start gap-6', className)}>
      <ul className="grid gap-4">
        {productsQuery.data.map((product) => {
          return (
            <li
              key={product.id}
              className={productsQuery.isFetching ? 'opacity-80' : undefined}
            >
              <ProductCartCard
                className="max-w-[756px]"
                product={product}
                button={
                  <button
                    className="rounded-md bg-zinc-100 px-3 py-2 text-zinc-600 hover:bg-zinc-200 active:bg-zinc-300"
                    type="button"
                    onClick={() => {
                      removeProductId(product.id);
                    }}
                  >
                    Remove
                  </button>
                }
              />
            </li>
          );
        })}
      </ul>
      <div className="text-xl max-md:px-4">
        Total: <span className="font-semibold">{`$${orderTotal}`}</span>
      </div>
      <div className="w-full max-w-[400px] max-md:px-4 md:justify-self-start">
        <Button
          className="w-full"
          onClick={() => {
            console.log('Place order');
          }}
        >
          Place order
        </Button>
      </div>
    </div>
  );
};
