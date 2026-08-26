"use server";

import { ProductsResponse } from "@/app/types";
import { emptyResponse } from "./product-request.type";

export default async function requestProductsAsync(
  defaultLimit: number = 6,
  apiUrl: string = "http://localhost:4000",
): Promise<ProductsResponse> {
  //   result = await fetch(
  //     `${apiUrl}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  //   ).then((res) => res.json());

  const response = await fetch(
    `${apiUrl}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  );
  if (!response.ok) {
    return emptyResponse;
  }

  return await response.json();
}
