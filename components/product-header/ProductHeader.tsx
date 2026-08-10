import styles from "./ProductHeader.module.css";
import { ProductHeaderProps } from "./ProductHeader.type";

export default function ProductHeader({
  productWizardState,
}: ProductHeaderProps) {
  const [_, setIsOpen] = productWizardState;
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
        onClick={() => setIsOpen(true)}
      >
        + Add Product
      </button>
    </header>
  );
}
