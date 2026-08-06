import styles from "@/components/summary_tracker.module.css";

export default function Summary_tracker() {
  return (
    <section className={styles.stats}>
      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Products</p>
          <p className={`${styles.counter} text-[#615fff]`}>193</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>In stock</p>
          <p className={`${styles.counter} text-[#00a63e]`}>169</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Low stock</p>
          <p className={`${styles.counter} text-[#e17100]`}>20</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>

      <div className={styles["stat-card"]}>
        <div className={styles["stat-info"]}>
          <p className={styles.label}>Out of stock</p>
          <p className={`${styles.counter} text-[#fb2c36]`}>4</p>
        </div>
        <div className="text-red-500">ICO</div>
      </div>
    </section>
  );
}