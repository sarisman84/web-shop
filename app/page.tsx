import DeleteProductButton from "@/components/DeleteProductButton";
import type { ProductsResponse } from "./types";
import ProductHeader from "@/components/ProductHeader";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
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

      <div>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <h2>
                {product.title} - {product.category?.name}
              </h2>

              <DeleteProductButton productName={product.title} />
            </div>
          ))
        )}
      </div>
    </main>
  );
}