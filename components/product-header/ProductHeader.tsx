"use client";
import styles from "./ProductHeader.module.css";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";

export default function ProductHeader() {
  //const ctx = useProductWizardDialog();'
  const { openModal } = useModal();

  return (
    <div className="border-b border-solid border-slate-100 dark:border-slate-900">
      <header className=" w-full max-w-7xl mx-auto flex justify-between items-center gap-4 p-6">
        <div>
          <h1 className="m-0 text-slate-900 dark:text-slate-100 text-[20px]">
            Inventory Management
          </h1>

          <p className="m-[4px 0 0] text-slate-500">
            Manage and track your product catalog, stock and categories.
          </p>
        </div>

        <button
          className="border-none rounded-md py-2.5 px-4 bg-[#2563eb] hover:bg-[#1a49ae] text-slate-50 font-semibold cursor-pointer"
          type="button"
          onClick={() => openModal("create-prod")}
        >
          + Add Product
        </button>
      </header>
    </div>
  );
}
