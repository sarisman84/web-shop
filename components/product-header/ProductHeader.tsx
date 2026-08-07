import styles from "./ProductHeader.module.css";

export default function ProductHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Inventory Management</h1>

        <p className={styles.subtitle}>
          Manage and track your product catalog, stock and categories.
        </p>
      </div>

      <button className={styles.button} type="button">
        + Add Product
      </button>
    </header>
  );
}