import { Category } from "./category";

export interface Product {
  image: string;
  thumb: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  category: Category;
  id: string;
  onSale?: boolean;
}
