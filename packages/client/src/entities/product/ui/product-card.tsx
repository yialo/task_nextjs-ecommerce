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
      <h2>{name}</h2>
    </article>
  );
};
