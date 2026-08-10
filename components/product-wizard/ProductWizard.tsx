"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import { ChangeEvent, JSX, ReactNode, useState } from "react";

interface _FormArgs {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  category: number;
  brand: string;
}

interface _FormFieldProps {
  fieldName: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function _FormField({
  fieldName,
  value,
  onChange,
}: _FormFieldProps): JSX.Element {
  const inputName = fieldName.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className={`${style.label}`}>
      {fieldName}
      <input
        className={`${style.input} border rounded px-2 py-1`}
        name={`${inputName}`}
        type={`${value === "number" ? "number" : "text"}`}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default function ProductWizard() {
  const ctx = useProductWizardDialog();

  const [formData, setFormData] = useState<_FormArgs>({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: -1,
    brand: "",
  });

  return (
    <Dialog
      open={ctx.isOpen}
      onClose={() => ctx.closeModal()}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur">
        <DialogPanel
          className={`${style.panel} bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl`}
        >
          <DialogTitle
            className={`justify-self-center font-bold pb-4 text-2xl`}
          >
            Add New Product
          </DialogTitle>
          <Description>
            Add a new product to your inventory by filling out the form below.
            Make sure to provide accurate information for each field.
          </Description>
          <form className={`${style.form} gap-1 pt-2`}>
            <_FormField
              fieldName={"Product Name"}
              value={formData.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <_FormField
              fieldName="Description"
              value={formData.description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <_FormField
              fieldName="Price"
              value={formData.price}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <_FormField
              fieldName="Thumbnail"
              value={formData.thumbnail}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, thumbnail: e.target.value })
              }
            />
            <_FormField
              fieldName="Category"
              value={formData.category}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  category: parseInt(e.target.value),
                })
              }
            />
            <_FormField
              fieldName="Brand"
              value={formData.brand}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, brand: e.target.value })
              }
            />
            <div className={`flex pt-5 gap-5 justify-self-center font-bold`}>
              <button type="submit" onClick={() => ctx.closeModal()}>
                Save
              </button>
              <button onClick={() => ctx.closeModal()}>Close</button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
