"use client";

import { useEffect, useState } from "react";
import type {Product, ProductsResponse} from "@/types/products";
import { useSearchParams } from "next/navigation";
import ProductRow from "@/components/ProductRow";
import Pagination from "@/components/Pagination";
import { API_URL, DEFAULT_LIMIT } from '@/lib/constants'
import {FilterBar} from "@/components/FilterBar";

interface Props {
  defaultResponse: ProductsResponse;
}

/*
export default function ProductTable({ defaultResponse }: Props) {

  // Define use states for the page and response
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<ProductsResponse>(defaultResponse);

  // Update the reponse state by fetching data from the server when the user interacts with things
  useEffect(() => {
    // Define a fetch function that is async
    async function fetchProducts() {
      const response: ProductsResponse = await fetch(
        `${API_URL}/products/?_page=${page}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
      ).then((res) => res.json());

      setResponse(response);
    }

    // Call it
    fetchProducts();
  }, [page, setResponse]);
*/
export default function ProductTable({ defaultResponse }: Props) {

  // Define use states for the page and response
  // const [page, setPage] = useState(1);
  const [response, setResponse] = useState<ProductsResponse>(defaultResponse);

  const searchParams = useSearchParams();

  // Extract search params with defaults
  const page = Number(searchParams.get("page")) || 1;
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const stock = searchParams.get("stock") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

    const fetchProducts = async () => {

      setLoading(true);

      try {
        // Build dynamic json-server API URL
        const query = new URLSearchParams({
          _page: page.toString(),
          _limit: DEFAULT_LIMIT,
          _sort: "id",
          _order: "desc",
          _expand: "category"
        });

        if (q) query.set("q", q);
        if (category) query.set("category", category);
        if (stock === "in-stock") query.set("stock", "in-stock");
        if (stock === "low-stock") query.set("stock", "low-stock");
        if (stock === "out-of-stock") query.set("stock", "out-of-stock");

        // Fetch new URL with Query String for Search, Filter
        const res = await fetch(
          `${API_URL}/products?${query.toString()}`
        );

        const response: ProductsResponse = await res.json();

        setProducts(response.products);
        setTotalPages(response.pages);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, q, category, stock]); // Re-fetch whenever any parameter in URL changes


  /*
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {

     const response: ProductsResponse = await fetch(
            `${API_URL}/products/?_page=${page}&_limit=${DEFAULT_LIMIT}&_sort=id&_order=desc&_expand=category`,
        ).then((res) => res.json());

      setProducts(response.products);
      setTotalPages(response.pages);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);
  */
  return (
    <div>

      <FilterBar />

      <div className="overflow-hidden bg-white ">
        <div className="overflow-x-auto">
          <table className="w-full  overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 text-sm">
            <thead className="bg-slate-50 dark:bg-slate-950 text-left text-slate-700 dark:text-slate-300 tracking-wide text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">

            {loading ? (
                <tr className="dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 border border-slate-200 dark:border-slate-800 transition">
                  <td className="px-6 py-4">
                    <p className="text-slate-500 py-8">Loading...</p>
                  </td>
                </tr>
            ) : (
                <>
                  {products.map((product) => (
                      <ProductRow
                          key={product.id}
                          product={product}
                          category={product.category!}
                      />
                  ))}
                </>
            )}

            </tbody>
          </table>
        </div>

        <div className=" flex justify-center items-center dark:bg-slate-950 bg-gray-50 p-4 border-b border-l border-r border-slate-200 dark:border-slate-800">

          <Pagination
              totalPages={totalPages}
          />

        </div>

      </div>

    </div>
  );
}
