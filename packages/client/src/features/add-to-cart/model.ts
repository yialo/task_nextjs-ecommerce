import { createStore } from 'effector';
import { Product } from '@/entities/product';

export const $cart = createStore<Product[]>([]);
