'use client';

import { useAtomValue } from 'jotai';
import { cn } from '@/shared/lib/cn';
import { cartAtom } from '../model';

interface Props {
  className?: string;
}

export const CartCounterBadge: React.FC<Props> = ({ className }) => {
  const cart = useAtomValue(cartAtom);

  if (cart.length === 0) return null;

  return (
    <div
      className={cn(
        'h-5 w-5 rounded-[50%] bg-red-500 text-center text-sm/5 text-white',
        className,
      )}
    >
      {cart.length}
    </div>
  );
};
