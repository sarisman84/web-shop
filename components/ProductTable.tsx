"use client";

import { useState } from "react";
import type {Product, ProductsResponse} from "@/types/types";
import ProductRow from "@/components/ProductRow";
import Pagination from "@/components/Pagination";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";


interface Props {
   defaultResponse: ProductsResponse;
    /*
    products: Product[];
    // categories: Category[];
    total: number;
    page: number;
    pages?: number;
    limit?: number;

     */
}


// export default function ProductTable({ products, total, page, pages, limit }: Props) {
export default function ProductTable({ defaultResponse }: Props) {
    // const [page, setPage] = useState(1);

    const [products, setProducts] = useState<ProductsResponse>(
        defaultResponse
        /*
        async () =>  {
            "use server"
            return await fetch(
                `${API_URL}/products/?_page=${page}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
            ).then((res) => res.json());}

         */
    );

    function setNewPage() {


    }

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
                        <th className="px-6 py-4 text-right">
                            Actions
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y">
                    {products.products.map(product => (

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
                    currentPage={products.page}
                    totalPages={products.total}
                    onPageChange={updatePages}
                />
            </div>
        </div>

    );
}