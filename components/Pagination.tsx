"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const pages = [1, 2, 3, "...", totalPages];

  //TODO: Make the Pagination dynamic by ensuring that the first three pages relative to the selected page is shown at all times.
  // <<< < 1 2 [3] 4 5 > >>>

  return (
    <nav className="flex items-center gap-2">
      {/* Previous */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <ChevronsLeft />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft />
      </button>

      {/* Fix error solution: key + 'string' = combination makes it unique so Next do not complain */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={index + "unique"}
            className="px-2 text-sm text-gray-500 font-bold"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(Number(page))}
            className={`flex h-10 min-w-10 items-center justify-center rounded-md border text-sm font-medium transition
              ${
                page === page
                  ? "border-gray-700 bg-gray-500 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight />
      </button>

      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages - 1)}
      >
        <ChevronsRight />
      </button>
    </nav>
  );
}
