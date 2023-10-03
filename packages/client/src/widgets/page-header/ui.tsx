import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { CartCounterBadge } from '@/features/add-to-cart';
import { APP_TITLE } from '@/shared/config';
import { cn } from '@/shared/lib/cn';

interface Props {
  className?: string;
}

export const PageHeader: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        'bg-[linear-gradient(90deg,_theme(colors.teal.100),_theme(colors.cyan.100))]',
        className,
      )}
    >
      <div className="page-center-container flex items-center gap-x-8 px-8 py-3">
        <Image
          src="/logo.svg"
          alt={APP_TITLE}
          width={37}
          height={32}
          priority
        />
        <nav className="justify-content flex grow items-center gap-x-8">
          <Link href="/" className="text-lg font-bold hover:text-slate-600">
            Products
          </Link>
          <Link
            href="/cart"
            className="group relative ml-auto transition-transform"
            aria-label="Go to cart"
          >
            <CartCounterBadge className="absolute -right-1 -top-1 z-[1]" />
            <ShoppingCartIcon
              className="group-hover:rotate-12"
              width={32}
              height={32}
              aria-hidden
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
