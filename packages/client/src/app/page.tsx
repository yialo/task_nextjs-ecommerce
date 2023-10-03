import * as React from 'react';
import { ProductCard, readAllProducts } from '@/entities/product';
import { APP_TITLE } from '@/shared/config';

export const dynamic = 'force-dynamic';

const HomePage: React.FC = async () => {
  const { data: products } = await readAllProducts();

  return (
    <main className="page-center-container p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <p>Product list</p>
      <ul className="grid grid-cols-3 gap-4">
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
