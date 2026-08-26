"use client";

import { useState } from "react";
import DeleteConfirmationDialog from "../dialog/DeleteConfirmationDialog";
import { DeleteProductButtonProps } from "./DeleteProductButton.props";

export default function DeleteProductButton({
  productName,
}: DeleteProductButtonProps) {
  const [showDialog, setShowDialog] = useState(false);

  const handleDelete = () => {
    console.log(`Delete confirmed: ${productName}`);
    setShowDialog(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowDialog(true)}
        className="rounded-md px-3 py-1 text-red-600 hover:bg-red-50"
      >
        Delete
      </button>

      {showDialog && (
        <DeleteConfirmationDialog
          productName={productName}
          onCancel={() => setShowDialog(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}