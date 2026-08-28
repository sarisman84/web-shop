import { Category, ProductsResponse } from "@/types/products";
import { ProductDesc } from "./serverAPI.types";

const serverAPI = {
  fetch: async function <T>(
    endpoint: string,
    settings?: RequestInit,
  ): Promise<T> {
    try {
      const method = `${settings ? (settings.method ?? "GET") : "GET"}`;
      const actionMessage = method === "GET" ? "fetch data from" : "send data to";
      const path = `http://localhost:4000${endpoint}`;
      
      console.log(
        `[${method}][Log][${endpoint}]: Attempting to ${actionMessage} ${path}  `,
      );
      let response;
      if (settings) {
        response = await fetch(path, settings);
      } else {
        response = await fetch(path);
      }

      if (!response.ok) {
        //throw new Error(`Error - ${response.status}: ${response.statusText}`);

        console.log(
          `[${method}][Error/${response.status}][${endpoint}]: ${response.statusText}`,
        );
        return {} as T;
      }

      console.log(
        `[${method}][Status/${response.status}][${endpoint}]: Successfully ${actionMessage} ${path}`,
      );
      return response.json() as T;
    } catch (error) {
      if (error instanceof Error) {
        console.log("Fetch failed:", error.message);
      } else {
        console.log("Unknown error:", error);
      }
      throw error;
    }
  },
  createProduct: async function (desc: ProductDesc): Promise<void> {
    const method = "POST";
    const body = JSON.stringify(desc); // Ensure formArgs is properly serialized to JSON

    return serverAPI.fetch("/products", {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    });
  },
  getProducts: async function (
    defaultLimit: number = 6,
  ): Promise<ProductsResponse> {
    return serverAPI.fetch<ProductsResponse>(
      `/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
    );
  },
  getProductCategories: async function (): Promise<Category[]> {
    return serverAPI.fetch<Category[]>(`/categories`);
  },

  queryProducts: async function(query: URLSearchParams): Promise<ProductsResponse> {
    return serverAPI.fetch<ProductsResponse>(`/products?${query.toString()}`);
  },

  updateProduct: async function (id: number, desc: ProductDesc): Promise<void> {
    const method = "PATCH";
    const body = JSON.stringify(desc); // Ensure formArgs is properly serialized to JSON

    return serverAPI.fetch(`/products/${id}`, {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export default serverAPI;
