"use client";

import { useState } from "react";
import {Category, Product} from "@/types/types";
import ProductRow from "./ProductRow";
import Pagination from "@/components/Pagination";

interface Props {
    products: Product[];
    categories: Category[];
}

export default function ProductTable({ products, categories }: Props) {

    const [page, setPage] = useState(1);

    function getCategory(productId: number) {
        // categories.find(category => category.id === product.categoryId);
        return categories.find(category => category.id === productId);
    }
    // category={categories.find(category => category.id === product.categoryId)}
    /*
    const getCategory = (product: Product) => {

        const category=  categories.find(category => category.id === product.id);
        return category?.name;
        // const y = categories.find(category => category.id === productId);
    };
    */
    // const yy = categories.find(category => category.id === product.id)

    /*
    function getCategory(categoryId: number) {
        return categories.filter(category => category.id === categoryId);
    }

    categories.forEach((category) => {

    })
    */
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
                    {products.map(product => (

                        <ProductRow
                            key={product.id}
                            product={product}

                            category={getCategory(product.id)}


                        />
                    ))}
                    </tbody>
                </table>

            </div>
            <div className=" flex justify-center items-center bg-gray-50 p-4 border-b border-l border-r border-gray-200">
                <Pagination
                    currentPage={page}
                    totalPages={25}
                    onPageChange={setPage}
                />
            </div>
        </div>

    );
}