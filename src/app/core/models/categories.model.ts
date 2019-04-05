import { Products } from './products.model';

export interface Categories {
  id: number,
  name: string;
  products: Products;
}