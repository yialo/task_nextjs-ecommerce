import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';
import { Cart } from './cart';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return (
    <main className="page-center-container flex grow flex-col px-8 py-4">
      <h1 className="mb-6 text-2xl font-semibold">Cart</h1>
      <Cart className="grow" />
    </main>
  );
};

export default CartPage;
