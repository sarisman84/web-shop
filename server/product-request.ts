"use server";

import { ProductsResponse } from "@/app/types";
import { emptyResponse } from "./product-request.type";

export default async function requestProductsAsync(
  out: (value: ProductsResponse) => void,
  defaultLimit: number = 6,
  apiUrl: string = "http://localhost:4000",
) {
  //   result = await fetch(
  //     `${apiUrl}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  //   ).then((res) => res.json());

  const response = await fetch(
    `${apiUrl}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  );
  if (!response.ok) {
    out(emptyResponse);
    return false;
  }

  out(await response.json());
  return true;
}
