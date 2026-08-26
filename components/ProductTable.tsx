"use client";
import { useEffect, useState } from "react";
import type { ProductsResponse } from "@/types/types";
import ProductRow from "@/components/ProductRow";
import Pagination from "@/components/Pagination";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

interface Props {
  defaultResponse: ProductsResponse;
}

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

  return (
    <div className="overflow-hidden bg-white ">
      <div className="overflow-x-auto">
        <table className="w-full  overflow-x-auto rounded-lg border border-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-gray-700 tracking-wide text-xs font-bold">
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
            {response.products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                category={product.category!}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center items-center bg-gray-50 p-4 border-b border-l border-r border-gray-200">
        <Pagination
          currentPage={page}
          totalPages={response.total}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
