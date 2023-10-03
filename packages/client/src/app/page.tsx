import * as React from 'react';
import { readAllProducts } from '@/entities/product';
import { APP_TITLE } from '@/shared/config';

const HomePage: React.FC = async () => {
  return (
    <main className="page-center-container p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <p>Product list</p>
    </main>
  );
};

export default HomePage;
