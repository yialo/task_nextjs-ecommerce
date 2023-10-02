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
    <header
      className={cn(
        'flex items-center gap-x-8 bg-[linear-gradient(90deg,_theme(colors.teal.100),_theme(colors.cyan.100))] px-4 py-3',
        className,
      )}
    >
      <Image src="/logo.svg" alt={APP_TITLE} width="37" height="32" priority />
      <nav className="justify-content flex grow items-center gap-x-8">
        <Link href="/" className="text-lg font-bold hover:underline">
          Products
        </Link>
        <Link
          href="/cart"
          className="ml-auto hover:rotate-12"
          aria-label="Go to cart"
        >
          <ShoppingCartIcon aria-hidden />
        </Link>
      </nav>
    </header>
  );
};
