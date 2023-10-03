import * as React from 'react';
import { ProductCard, readProductList } from '@/entities/product';
import { APP_TITLE } from '@/shared/config';

export const dynamic = 'force-dynamic';

const HomePage: React.FC = async () => {
  const products = await readProductList();

  return (
    <main className="page-center-container p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <div className="mb-2 flex items-baseline justify-between px-4">
        <div className="text-xl font-bold">Product list</div>
        <div>{`Total products count: ${products.length}`}</div>
      </div>
      <ul className="mb-4 grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
