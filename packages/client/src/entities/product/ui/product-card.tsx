import Image from 'next/image';
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
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
        />
        <Link href={`/product/${product.id}`}>{name}</Link>
      </h2>
    </article>
  );
};
