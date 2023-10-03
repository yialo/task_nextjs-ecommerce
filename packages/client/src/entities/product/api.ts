import { Product } from './config';

export const readAllProducts = async () => {
  const response = await fetch('localhost:3001/product/?page=1');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json() as Promise<Product[]>;
};
