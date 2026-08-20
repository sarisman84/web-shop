import { Category } from "@/app/types";
import { CreateProductDesc, emptyResponse } from "./serverAPI.types";

const serverAPI = {
  apiURL: "http://localhost:4000" as const, // Use 'as const' to make it a literal type
  createProduct: async function (desc: CreateProductDesc) {
    const method = "POST";
    const body = JSON.stringify(desc); // Ensure formArgs is properly serialized to JSON

    console.log(
      "Sending request to: %s - with contents: %s",
      `${serverAPI.apiURL}/products`,
      body,
    );
    return await fetch(`${serverAPI.apiURL}/products`, {
      method,
      body,
    });
  },
  getProducts: async function (defaultLimit: number = 6) {
    const response = await fetch(
      `${serverAPI.apiURL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
    );
    if (!response.ok) {
      return emptyResponse;
    }

    return await response.json();
  },
  getProductCategories: async function (): Promise<Category[]> {
    const response = await fetch(`${serverAPI.apiURL}/categories`);
    if (!response.ok) {
      return [];
    }

    return await response.json();
  },
};

export default serverAPI;
