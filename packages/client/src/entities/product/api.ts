import { API_URL_BASE } from '@/shared/config';
import { Product } from './config';

interface ProductPageResponse {
  data: Product[];
  count: number;
  total: number;
  pageCount: number;
  page: number;
}

const readProductPage = async (page: number): Promise<ProductPageResponse> => {
  const response = await fetch(`${API_URL_BASE}/product/?page=${page}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const readProductList = async (): Promise<Product[]> => {
  const { data: firstPageProducts, pageCount } = await readProductPage(1);
  const products: Product[] = [...firstPageProducts];

  if (pageCount > 1) {
    for (let i = 2; i <= pageCount; i++) {
      const productPage = await readProductPage(i);
      products.push(...productPage.data);
    }
  }

  return products;
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
