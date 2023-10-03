import { API_URL_BASE } from '@/shared/config';
import { Product } from './config';

interface ProductsPageResponse {
  data: Product[];
  count: number;
  total: number;
  pageCount: number;
  page: number;
}

const readProductsPage = async (
  page: number,
): Promise<ProductsPageResponse> => {
  const response = await fetch(`${API_URL_BASE}/product/?page=${page}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products page ${page}`);
  }

  return response.json();
};

export const readAllProducts = async (): Promise<Product[]> => {
  const { data: products, pageCount } = await readProductsPage(1);

  if (pageCount > 1) {
    for (let i = 2; i <= pageCount; i++) {
      const productsPage = await readProductsPage(i);
      products.push(...productsPage.data);
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

export const readProductsByIds = async (ids: number[]): Promise<Product[]> => {
  return Promise.all(ids.map(readProductById));
};
