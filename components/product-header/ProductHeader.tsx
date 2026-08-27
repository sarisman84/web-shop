"use client"
import { useProductWizardDialog } from "@/components/create-product/dialog/ProductWizardProvider";
import styles from "./ProductHeader.module.css";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";

export default function ProductHeader() {
  //const ctx = useProductWizardDialog();'
  const {openModal} = useModal();

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Inventory Management</h1>

        <p className={styles.subtitle}>
          Manage and track your product catalog, stock and categories.
        </p>
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => openModal("create-prod")}
      >
        + Add Product
      </button>
    </header>
  );
}
