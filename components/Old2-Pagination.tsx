"use client";

import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination ({
                                        currentPage,
                                        totalPages,
                                        onPageChange,
                                    }: PaginationProps)  {

    // Generate pages array to render
    const getPageNumbers = () => {

        const pages: number[] = [];

        // Adjust window size as needed (e.g., showing 5 pages at a time)
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + 4);

        if (end - start < 4) {
            start = Math.max(1, end - 4);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageNumbers();

    const baseButtonStyles =
        "inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed";

    const defaultButtonStyles =
        "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700";

    const activeButtonStyles =
        "border-slate-600 bg-slate-600 text-white shadow-sm";

    return (
        <nav className="flex items-center justify-center gap-1.5 py-4">

            {/* First Page */}
            <button
    onClick={() => onPageChange(1)}
    disabled={currentPage === 1}
    className={`${baseButtonStyles} ${defaultButtonStyles}`}
    aria-label="First page"
    >
    <ChevronsLeft className="w-4 h-4 text-slate-400" />
        </button>

    {/* Previous Page */}
    <button
        onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className={`${baseButtonStyles} ${defaultButtonStyles}`}
    aria-label="Previous page"
    >
    <ChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

    {/* Page Numbers */}
    {pages.map((page) => (
        <button
            key={page}
        onClick={() => onPageChange(page)}
        className={`${baseButtonStyles} ${
            currentPage === page ? activeButtonStyles : defaultButtonStyles
        }`}
    >
        {page}
        </button>
    ))}

    {/* Next Page */}
    <button
        onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`${baseButtonStyles} ${defaultButtonStyles}`}
    aria-label="Next page"
    >
    <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>

    {/* Last Page */}
    <button
        onClick={() => onPageChange(totalPages)}
    disabled={currentPage === totalPages}
    className={`${baseButtonStyles} ${defaultButtonStyles}`}
    aria-label="Last page"
    >
    <ChevronsRight className="w-4 h-4 text-slate-600" />
        </button>
        <span>currentPage: {currentPage} | totalPages: {totalPages}</span>
    </nav>
);
};
