import { Product } from './config';

interface ProductListResponseResult {
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

  const result: ProductListResponseResult = await response.json();
  return result;
};

export const readProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`http://localhost:3001/product/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }

  return response.json();
};
