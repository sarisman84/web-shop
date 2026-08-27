"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

// export const FilterBar: React.FC = () => {
export const FilterBar: React.FC = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Local state to manage controls before applying (or for instant search)
    const [search, setSearch] = useState(searchParams.get("q") || "");
    const [category, setCategory] = useState(searchParams.get("categoryId") || "");
    const [status, setStatus] = useState(searchParams.get("status") || "");

    const handleApplyFilters = () => {

      const params = new URLSearchParams(searchParams);

        // Reset page back to 1 when changing filters
        params.set("page", "1");

        if (search) params.set("q", search);
        else params.delete("q");

        if (category) params.set("categoryId", category);
        else params.delete("categoryId");

        if (status) params.set("status", status);
        else params.delete("status");

        router.push(`${pathname}?${params.toString()}`);
    };

    function getUniqueCategoryArray(cateorgies: string[]) {

      return [...new Set(cateorgies)]
    }

    // console.log(getUniqueCategoryArray(products.category));


    return (
        <div className="w-full p-3 bg-white border border-slate-200 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
            </div>

            {/* Category Dropdown */}
            <div className="w-full md:w-auto">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full md:w-44 px-3 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-slate-700 bg-white"
                >
                    <option value="">All Categories</option>
                    <option value="1">Electronics</option>
                    <option value="2">Clothing</option>
                    <option value="3">Home & Kitchen</option>
                </select>
            </div>

            {/* Stock Dropdown */}
            <div className="w-full md:w-auto">
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full md:w-36 px-3 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-slate-700 bg-white"
                >
                    <option value="">All Stock</option>
                    <option value="in-stock">In Stock</option>
                    <option value="low-stock">Low Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                </select>
            </div>

            {/* Filter Action Button */}
            <button
              onClick={handleApplyFilters}
              className="w-full md:w-auto px-4 py-1.5 inline-flex items-center justify-center gap-2 text-sm font-medium border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Filter className="w-3.5 h-3.5 fill-slate-700 stroke-slate-700" />
              Filter
            </button>
        </div>
    );
};
