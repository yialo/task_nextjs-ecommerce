import Link from 'next/link';
import * as React from 'react';
import { ProductCard, readProductList } from '@/entities/product';
import { APP_TITLE } from '@/shared/config';

export const dynamic = 'force-dynamic';

const HomePage: React.FC = async () => {
  const response = await readProductList();
  const { data: products, pageCount } = response;

  return (
    <main className="page-center-container p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <p>All products</p>
      <ul className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-x-4">
        {Array.from({ length: pageCount }).map((_, i) => {
          return (
            <Link
              key={i}
              href={`/?page=${i + 1}`}
              className="text-md rounded bg-gray-200 px-4 py-2 font-semibold"
            >
              {i + 1}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
