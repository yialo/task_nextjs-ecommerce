import { Product } from './config';

interface ProductResponseResult {
  data: Product[];
  count: number;
  total: number;
  pageCount: number;
  page: number;
}

export const readAllProducts = async () => {
  const response = await fetch('http://localhost:3001/product/?page=1', {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const result: ProductResponseResult = await response.json();
  return result;
};
