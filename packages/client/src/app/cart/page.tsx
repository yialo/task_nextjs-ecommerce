import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return <div>Cart</div>;
};

export default CartPage;
