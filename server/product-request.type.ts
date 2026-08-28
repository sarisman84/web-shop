import { ProductsResponse } from "@/types/types";

export type ProductsResponseState = [
  ProductsResponse,
  (value: ProductsResponse) => void,
];

export const emptyResponse: ProductsResponse = {
  products: [],
  page: -1,
  limit: -1,
  total: -1,
  pages: -1,
};
