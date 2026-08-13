import styles from "@/components/summary_tracker.module.css";
import { Category } from "@/app/types";
import { Product } from "@/app/types";
import { ProductsResponse } from "@/app/types";


const res = await fetch('http://localhost:4000/products');
const data:ProductsResponse = await res.json();
const inStockList = data.products.filter(product => product.availabilityStatus == "In stock")
const lowStockList = data.products.filter(product => product.availabilityStatus == "Low stock")
const emptyStockList = data.products.filter(product => product.availabilityStatus == "Out of Stock")





export default function Summary_tracker() {
  
  return (
    <section className={styles.stats}>

      <div className={styles["stat-card"]}>
          <p className={styles.label}>Products</p>
          <div className={styles["stat-info"]}>
          <p className={`${styles.counter} text-[#615fff]`}>{Number(data.total)}</p>
          <svg className="text-[#615fff]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512">
            <path fill="currentColor" d="M50.7 58.5L0 160h208V32H93.7c-18.2 0-34.8 10.3-43 26.5zM240 160h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5H240v128zm208 32H0v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192z"/>
          </svg>
        </div>
      </div>

      <div className={styles["stat-card"]}>
          <p className={styles.label}>In stock</p>
          <div className={styles["stat-info"]}>
          <p className={`${styles.counter} text-[#00a63e]`}>{inStockList.length}</p>
          <svg className="text-[#00a63e]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M9.305 18.11l9.402-9.403l-1.414-1.414l-7.883 7.883l-2.476-3.01l-1.511 1.31l3.882 4.633z"/>
          </svg>
        </div>
      </div>

      <div className={styles["stat-card"]}>
          <p className={styles.label}>Low stock</p>
          <div className={styles["stat-info"]}>
          <p className={`${styles.counter} text-[#e17100]`}>{lowStockList.length}</p>
          <svg className="text-[#e17100]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
            <path fill="currentColor" fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92ZM11 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-8a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className={styles["stat-card"]}>
          <p className={styles.label}>Out of stock</p>
          <div className={styles["stat-info"]}>
          <p className={`${styles.counter} text-[#fb2c36]`}>{emptyStockList.length}</p>
          <svg className="text-[#fb2c36]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}