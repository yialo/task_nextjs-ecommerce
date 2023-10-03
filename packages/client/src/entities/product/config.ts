export interface Product {
  id: number;
  model: string;
  name: string;
  image: string;
  description: string;
  sizes: string[];
  price: string;
  special: string;
  priceInCents: number;
  specialInCents: number;
}
