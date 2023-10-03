'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton } from '@/features/add-to-cart';
import { cn } from '@/shared/lib/cn';
import { Product } from '../config';

interface Props {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ product, className }) => {
  const { id, name, price } = product;

  return (
    <article
      className={cn(
        'grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl p-4 hover:shadow-[0_10px_30px_8px_rgb(0_0_0_/_0.1)]',
        className,
      )}
    >
      <Link
        href={`/product/${product.id}`}
        className="col-span-2 overflow-hidden rounded-xl"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={384}
          height={629}
        />
      </Link>
      <Link
        href={`/product/${product.id}`}
        className="col-span-2 max-w-[384px]"
      >
        <h2 className="truncate text-lg font-semibold">{name}</h2>
      </Link>
      <div className="text-lg font-semibold">{price}</div>
      <AddToCartButton productId={id} />
    </article>
  );
};
