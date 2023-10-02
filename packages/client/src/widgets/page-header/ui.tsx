import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { APP_TITLE } from '@/shared/config';
import { cn } from '@/shared/lib/cn';

interface Props {
  className?: string;
}

export const PageHeader: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('flex justify-between px-4 py-3', className)}>
      <p>{APP_TITLE}</p>
      <Link href="/cart" aria-label="Go to cart">
        <ShoppingCartIcon aria-hidden />
      </Link>
    </header>
  );
};
