export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  inStock: number;
  image: string;
}

export type IProductShortInfo = Pick<IProduct, 'id' | 'name' | 'price'>