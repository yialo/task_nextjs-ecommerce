import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return (
    <main className="page-center-container px-8 py-4">
      <h1>Cart</h1>
      <button type="button">Place order</button>
    </main>
  );
};

export default CartPage;
