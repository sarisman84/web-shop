"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
    // currentPage: number;
    totalPages: number;
    // onPageChange: (page: number) => void;
}

export default function Pagination ({
  // currentPage,
  totalPages,
  // onPageChange,
}: PaginationProps)  {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get current page from search params, default to 1 if missing or invalid
    const currentPage = Number(searchParams.get("page")) || 1;

    // Helper to build the URL string for each page link while preserving existing search params
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    // Generate page number sequence
    const getPageNumbers = () => {
        const pages: number[] = [];
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

    /*
    const baseButtonStyles =
        "inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed";

    const defaultButtonStyles =
        "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700";

    const activeButtonStyles =
        "border-slate-600 bg-slate-600 text-white shadow-sm";
    */
    const baseStyles =
        "inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus-slate-600 focus:ring-offset-1";

    const defaultStyles =
        "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 hover:bg-slate-50 hover:text-slate-700";

    const activeStyles =
        "border-slate-600 dark:border-slate-400 bg-slate-600 dark:bg-slate-400 text-slate-50 dark:text-slate-950 shadow-sm pointer-events-none";

    const disabledStyles =
        "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 opacity-80 pointer-events-none cursor-not-allowed";

    return (
        <nav className="flex items-center justify-center gap-1.5 py-4">
            {/* First Page */}
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(1)}
                    className={`${baseStyles} ${defaultStyles}`}
                    aria-label="First page"
                >
                    <ChevronsLeft className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                </Link>
            ) : (
                <span className={`${baseStyles} ${disabledStyles}`}>
          <ChevronsLeft className="w-4 h-4 text-slate-300 dark:text-slate-700" />
        </span>
            )}

            {/* Previous Page */}
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className={`${baseStyles} ${defaultStyles}`}
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                </Link>
            ) : (
                <span className={`${baseStyles} ${disabledStyles}`}>
          <ChevronLeft className="w-4 h-4 text-slate-300 dark:text-slate-700" />
        </span>
            )}

            {/* Page Numbers */}
            {pages.map((page) => {
                const isActive = currentPage === page;
                return (
                    <Link
                        key={page}
                        href={createPageURL(page)}
                        className={`${baseStyles} ${
                            isActive ? activeStyles : defaultStyles
                        }`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {page}
                    </Link>
                );
            })}

            {/* Next Page */}
            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className={`${baseStyles} ${defaultStyles}`}
                    aria-label="Next page"
                >
                    <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </Link>
            ) : (
                <span className={`${baseStyles} ${disabledStyles}`}>
          <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700" />
        </span>
            )}

            {/* Last Page */}
            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(totalPages)}
                    className={`${baseStyles} ${defaultStyles}`}
                    aria-label="Last page"
                >
                    <ChevronsRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </Link>
            ) : (
                <span className={`${baseStyles} ${disabledStyles}`}>
          <ChevronsRight className="w-4 h-4 text-slate-300 dark:text-slate-700" />
        </span>
            )}
        </nav>
    );
};
