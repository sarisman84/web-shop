import { ProductsResponse } from "@/app/types";

export interface CreateProductDesc {
  title: string;
  description: string;
  price: number;
  brand: string;
  categoryId: number;
  thumbnail: string;
}

export const emptyResponse: ProductsResponse = {
  products: [],
  page: -1,
  limit: -1,
  total: -1,
  pages: -1,
};
