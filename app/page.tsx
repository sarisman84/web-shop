import SummaryTracker from "@/components/SummaryTracker";
import type { ProductsResponse } from "./types";
import ProductHeader from "@/components/ProductHeader";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later

  const {
    products,
    total,
    page,
    pages,
    limit,
  }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`
  ).then((res) => res.json());

  console.log(products);

  return (
    <main>
      <ProductHeader />

      <h1>Products</h1>
      <SummaryTracker />

      <div>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <h2 key={product.id}>
              {product.title} - {product.category?.name}
            </h2>
          ))
        )}
      </div>
    </main>
  );
}