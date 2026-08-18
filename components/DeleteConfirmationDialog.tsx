"use client";

import type { DeleteConfirmationDialogProps } from "./DeleteConfirmationDialog.props";

export default function DeleteConfirmationDialog({
  productName,
  onCancel,
  onDelete,
}: DeleteConfirmationDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl"
      >
        <h2
          id="delete-dialog-title"
          className="mb-3 text-xl font-semibold text-black"
        >
          Delete product?
        </h2>

        <p className="mb-6 text-gray-700">
          Are you sure you want to delete{" "}
          <strong>{productName}</strong>?
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-black"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="rounded-md bg-red-600 px-4 py-2 font-medium text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}