import { type Metadata } from 'next';
import { APP_TITLE } from '@/shared/config';
import { Button } from '@/shared/ui/button';

export const metadata: Metadata = {
  title: `Cart | ${APP_TITLE}`,
};

const CartPage: React.FC = () => {
  return (
    <main className="page-center-container px-8 py-4">
      <h1 className="text-xl font-semibold">Cart</h1>
      <button type="button"></button>
      {/* @ts-ignore */}
      <Button
        className="md:w-1/2 md:justify-self-start"
        // onClick={() => {
        //   console.log('Place order');
        // }}
      >
        Place order
      </Button>
    </main>
  );
};

export default CartPage;
