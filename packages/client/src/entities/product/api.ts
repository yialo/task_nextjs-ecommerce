import { API_URL_BASE } from '@/shared/config';
import { Product } from './config';

interface ProductListResponse {
  data: Product[];
  count: number;
  total: number;
  pageCount: number;
  page: number;
}

export const readProductList = async (
  page = 1,
): Promise<ProductListResponse> => {
  const response = await fetch(`${API_URL_BASE}/product/?page=${page}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const readProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL_BASE}/product/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }

  return response.json();
};
