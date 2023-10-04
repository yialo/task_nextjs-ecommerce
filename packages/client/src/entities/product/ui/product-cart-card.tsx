import Link from 'next/link';
import { cn } from '@/shared/lib/cn';
import { Product } from '../config';
import { ProductImage } from './product-image';

interface Props {
  button: React.ReactNode;
  product: Product;
  className?: string;
}

export const ProductCartCard: React.FC<Props> = ({
  button,
  product,
  className,
}) => {
  const { id, name, price } = product;

  return (
    <article className={cn('flex', className)}>
      <Link
        href={`/product/${id}`}
        className="w-24 shrink-0 overflow-hidden rounded-md"
      >
        <ProductImage product={product} />
      </Link>
      <div className="grow">
        <Link href={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <div>{price}</div>
      </div>
      <div className="shrink-0">{button}</div>
    </article>
  );
};
