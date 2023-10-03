import Image from 'next/image';
import { Product } from '../config';

interface Props {
  product: Product;
  className?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<Props> = ({
  product,
  className,
  priority,
}) => {
  return (
    <Image
      className={className}
      src={product.image}
      alt={`A girl dressed in ${product.name}`}
      width={384}
      height={629}
      priority={priority}
    />
  );
};
