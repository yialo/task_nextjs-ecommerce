'use client';

import { Button } from '@/shared/ui/button';

interface Props {
  productId: number;
  className?: string;
}

export const AddToCartButton: React.FC<Props> = ({ className, productId }) => {
  return (
    <Button
      className={className}
      onClick={() => {
        console.log(`Add to cart product with id: ${productId}`);
      }}
    >
      Add to cart
    </Button>
  );
};
