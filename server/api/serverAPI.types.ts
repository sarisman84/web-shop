import { ProductsResponse } from "@/app/types";


export interface ProductDesc {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  categoryId: number;
  brand: string;
}

export const emptyResponse: ProductsResponse = {
  products: [],
  page: -1,
  limit: -1,
  total: -1,
  pages: -1,
};
