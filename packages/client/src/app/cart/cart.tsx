'use client';

import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ProductCartCard } from '@/entities/product';
import { useCartModel } from '@/features/cart-in-out/model';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useCartProductsQuery, usePlaceOrderMutation } from './api';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
  const cartModel = useCartModel();
  const productsQuery = useCartProductsQuery(cartModel.productIds);

  const placeOrderMutation = usePlaceOrderMutation();

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

  const isUiPending = productsQuery.isFetching || placeOrderMutation.isLoading;

  const handlePlaceOrderClick = async () => {
    const result = await placeOrderMutation.mutate(productsQuery.data);
    if (result instanceof Error) {
      toast('Failed to place order', {
        icon: '❌',
        duration: 3000,
        position: 'top-center',
      });
    } else {
      cartModel.clearCart();
    }
  };

  return (
    <div className={cn('grid content-start gap-6', className)}>
      <Toaster />
      <ul className="grid gap-4">
        {productsQuery.data.map((product) => {
          return (
            <li
              key={product.id}
              className={
                isUiPending ? 'pointer-events-none opacity-90' : undefined
              }
            >
              <ProductCartCard
                className="max-w-[756px]"
                product={product}
                button={
                  <button
                    className="rounded-md bg-zinc-100 px-3 py-2 text-zinc-600 hover:bg-zinc-200 active:bg-zinc-300"
                    type="button"
                    disabled={isUiPending}
                    onClick={() => {
                      cartModel.removeProductId(product.id);
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
          disabled={isUiPending}
          onClick={handlePlaceOrderClick}
        >
          Place order
        </Button>
      </div>
    </div>
  );
};
