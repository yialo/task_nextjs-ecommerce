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
    <article
      className={cn(
        'bg-ghost grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] gap-4 rounded-xl bg-[#f8f8ff] p-4 md:grid-cols-[auto_1fr_auto] md:grid-rows-[1fr_auto]',
        className,
      )}
    >
      <Link
        href={`/product/${id}`}
        className="row-start-1 row-end-[-1] w-24 shrink-0 overflow-hidden rounded-md"
      >
        <ProductImage product={product} />
      </Link>
      <Link href={`/product/${id}`} className="col-start-2 col-end-[-1]">
        <h2 className="text-xl max-md:line-clamp-2">{name}</h2>
      </Link>
      <div className="row-start-2 text-lg font-medium">{price}</div>
      <div className="shrink-0 self-end">{button}</div>
    </article>
  );
};
