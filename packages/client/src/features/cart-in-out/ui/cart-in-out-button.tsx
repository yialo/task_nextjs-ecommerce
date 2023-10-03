'use client';

import { Button } from '@/shared/ui/button';
import { useCartModel } from '../model';

interface Props {
  productId: number;
  className?: string;
}

export const CartInOutButton: React.FC<Props> = ({ className, productId }) => {
  const { productIds, addProductId, removeProductId } = useCartModel();

  const isProductInCart = productIds.includes(productId);

  return (
    <Button
      className={className}
      variant={isProductInCart ? 'neutral' : 'positive'}
      onClick={() => {
        isProductInCart ? removeProductId(productId) : addProductId(productId);
      }}
    >
      {isProductInCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  );
};
