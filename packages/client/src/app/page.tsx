import * as React from 'react';
import { ProductCard, readAllProducts } from '@/entities/product';
import { CartInOutButton } from '@/features/cart-in-out/ui';
import { APP_TITLE } from '@/shared/config';

export const dynamic = 'force-dynamic';

const HomePage: React.FC = async () => {
  const products = await readAllProducts();

  return (
    <main className="page-center-container p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <div className="mb-2 flex items-baseline justify-between px-4">
        <div className="text-xl font-bold">Product list</div>
        <div>{`Total products count: ${products.length}`}</div>
      </div>
      <ul className="mb-4 grid grid-cols-[minmax(auto,_416px)] justify-center gap-6 sm:grid-cols-[repeat(auto-fill,_minmax(280px,_auto))]">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard
                product={product}
                button={<CartInOutButton productId={product.id} />}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
