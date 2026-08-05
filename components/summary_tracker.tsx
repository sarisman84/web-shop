import styles from "@/components/summary_tracker.module.css";

export default function Summary_tracker() {
  return (
    // === naked html ============================================================================================================

    <section className={styles.stats}>
      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Products</p>
          <p className={`${styles.counter} text-blue-300`}>193</p>
          
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>In stock</p>
          <p className={`${styles.counter} ${styles.green}`}>169</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Low stock</p>
          <p className={`${styles.counter} ${styles.green}`}>20</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Out of stock</p>
          <p className={`${styles.counter} ${styles.green}`}>4</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>
    </section>

    // === cursed tailwind ============================================================================================================

    // <section className="flex flex-row flex-nowrap justify-center gap-3
    // [&>*]:p-2 [&>*]:rounded [&>*]:border">
    //   <div className={styles.display}>
    //     <div className={styles.dataview}>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p>
    //   </div>
    //   <div className={styles.display}>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    //   <div className={styles.display}>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    //   <div className={styles.display}>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    // </section>

    // === naked html ============================================================================================================

    // <section>
    //   <div>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p>
    //   </div>
    //   <div>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    //   <div>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    //   <div>
    //     <div>
    //       <p>Products</p>
    //       <p>200</p>
    //     </div>
    //     <p>ICO</p></div>
    // </section>
  );
}