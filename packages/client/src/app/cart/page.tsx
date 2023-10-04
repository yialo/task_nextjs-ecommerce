import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';
import { Cart } from './cart';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return (
    <main className="page-center-container flex grow flex-col py-4 md:px-8">
      <h1 className="sr-only">Cart</h1>
      <Cart className="grow" />
    </main>
  );
};

export default CartPage;
