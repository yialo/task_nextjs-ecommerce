import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { APP_TITLE } from '@/shared/config';
import { cn } from '@/shared/lib/cn';

interface Props {
  className?: string;
}

export const PageHeader: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('flex items-center gap-x-8 px-4 py-3', className)}>
      <Image src="/logo.svg" alt={APP_TITLE} width="37" height="32" priority />
      <nav className="justify-content flex grow items-center gap-x-8">
        <Link href="/">Catalog</Link>
        <Link href="/cart" className="ml-auto" aria-label="Go to cart">
          <ShoppingCartIcon aria-hidden />
        </Link>
      </nav>
    </header>
  );
};
