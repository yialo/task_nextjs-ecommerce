import Link from 'next/link';
import { cn } from '@/shared/lib/cn';
import { Product } from '../config';

interface Props {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ product, className }) => {
  const { name } = product;

  return (
    <article className={cn('flex', className)}>
      <h2 className="text-lg font-semibold">
        <Link href={`/product/${product.id}`}>{name}</Link>
      </h2>
    </article>
  );
};
