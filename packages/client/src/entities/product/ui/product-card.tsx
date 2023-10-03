import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/lib/cn';
import { Product } from '../config';

interface Props {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ product, className }) => {
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
        <Image
          src={product.image}
          alt={product.name}
          width={384}
          height={629}
        />
      </Link>
      <Link href={`/product/${product.id}`} className="col-span-2">
        <h2 className="line-clamp-1 text-lg font-semibold">{name}</h2>
      </Link>
      <div className="text-lg font-semibold">{price}</div>
      <button
        className="rounded bg-pink-200 px-4 py-3 text-lg font-medium transition-colors duration-100 hover:bg-pink-300 hover:text-slate-950"
        type="button"
      >
        Add to cart
      </button>
    </article>
  );
};
