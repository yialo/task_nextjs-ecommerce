import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return (
    <main className="page-center-container p-4">
      <h1>Cart</h1>
    </main>
  );
};

export default CartPage;
