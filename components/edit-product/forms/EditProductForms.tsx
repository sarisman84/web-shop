"use client";

import { FormEvent, useState } from "react";
import { Product } from "@/types/types";
import TextInput from "@/utils/components/text-input/TextInput";
import serverAPI from "@/server/api/serverAPI";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";

interface Props {
  product: Product;
  modalName: string;
}

export default function EditProductForms({
  product,
  modalName,
}: Props) {
  const { closeModal } = useModal();
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);

    try {
      const formData = new FormData(event.currentTarget);

      const updatedProduct = {
        title: String(formData.get("title") ?? ""),
        brand: String(formData.get("brand") ?? ""),
        price: Number(formData.get("price")),
        thumbnail: String(formData.get("thumbnail") ?? ""),
      };

      console.log("Updating product:", product.id, updatedProduct);

      await serverAPI.updateProduct(product.id, updatedProduct);

      console.log("Product updated successfully");

      closeModal(modalName);

      window.location.reload();
    } catch (error) {
      console.error("Could not update product:", error);
      alert("Could not update product.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      className="grid gap-3 pt-2"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-1">
        Product Name
        <TextInput
          type="text"
          name="title"
          defaultValue={product.title}
          required
        />
      </label>

      <label className="grid gap-1">
        Brand
        <TextInput
          type="text"
          name="brand"
          defaultValue={product.brand}
        />
      </label>

      <label className="grid gap-1">
        Price
        <TextInput
          type="number"
          name="price"
          defaultValue={product.price}
          required
        />
      </label>

      <label className="grid gap-1">
        Thumbnail URL
        <TextInput
          type="text"
          name="thumbnail"
          defaultValue={product.thumbnail}
        />
      </label>

      <div className="flex gap-5 justify-center pt-5">
        <button
          type="submit"
          disabled={saving}
          className="bg-slate-400 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-500 px-3 py-1 rounded cursor-pointer disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>

        <button
          type="button"
          onClick={() => closeModal(modalName)}
          className="bg-red-500 hover:bg-red-600 dark:bg-red-900 dark:hover:bg-red-800 px-3 py-1 rounded cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}