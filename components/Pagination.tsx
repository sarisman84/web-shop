"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { ReactNode } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // const pages = [1, 2, 3, "...", 25];
  //   const pages = [1, 2, 3, "...", totalPages];

  //TODO: Make the Pagination dynamic by ensuring that the first three pages relative to the selected page is shown at all times.
  // <<< < 1 2 [3] 4 5 > >>>
  const array = [...Array(5)];
  return (
    <nav className="flex items-center gap-2">
      {/* Previous */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600  dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <ChevronsLeft />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft />
      </button>

      {array.map((_, index) => {
        const middlePage = Math.ceil(currentPage / 2); // [4] -> 2
        const offsetPage = middlePage + index;
        // Intented effect:
        // [2] + 0 = 2
        // [2] + 1 = 3
        // [2] + 2 = 4 <-
        // [2] + 3 = 5
        // [2] + 4 = 6

        return (
          <button
            key={offsetPage}
            onClick={() => onPageChange(Number(offsetPage))}
            className={`flex h-10 min-w-10 items-center justify-center rounded-md border text-sm font-medium transition
              ${
                currentPage === offsetPage
                  ? "border-slate-700 dark:border-slate-500 bg-slate-500 text-slate-50 dark:text-slate-950"
                  : "border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
          >
            {offsetPage}
          </button>
        );
      })}

      {/* Next */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600  dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight />
      </button>

      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600  dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(totalPages - 1)}
      >
        <ChevronsRight />
      </button>
    </nav>
  );
}
