'use client';

import { Button } from '@/shared/ui/button';
import { useAddProductIdToCart } from '../model';

interface Props {
  productId: number;
  className?: string;
}

export const AddToCartButton: React.FC<Props> = ({ className, productId }) => {
  const addProductIdToCart = useAddProductIdToCart();

  return (
    <Button
      className={className}
      onClick={() => {
        addProductIdToCart(productId);
      }}
    >
      Add to cart
    </Button>
  );
};
