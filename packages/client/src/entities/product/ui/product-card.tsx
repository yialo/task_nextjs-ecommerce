import Link from 'next/link';
import { cn } from '@/shared/lib/cn';
import { Product } from '../config';
import { ProductImage } from './product-image';

interface Props {
  button: React.ReactNode;
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  button,
  product,
  className,
}) => {
  const { name, price } = product;

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
        <ProductImage product={product} />
      </Link>
      <Link
        href={`/product/${product.id}`}
        className="col-span-2 max-w-[384px]"
      >
        <h2 className="truncate text-lg font-semibold">{name}</h2>
      </Link>
      <div className="text-lg font-semibold">{price}</div>
      {button}
    </article>
  );
};
