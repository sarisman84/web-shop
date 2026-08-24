import ProductHeader from "@/components/product-header/ProductHeader";
import ProductWizard from "@/components/product-wizard/ProductWizard";
import serverAPI from "@/server/api/serverAPI";
import requestProductsAsync from "@/server/product-request";
import DeleteProductButton from "@/components/DeleteProductButton";
import type { ProductsResponse } from "./types";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later
  const { products } = await requestProductsAsync();
  const categories = await serverAPI.getProductCategories();
  
  return (
    <main>
      <ProductHeader />
      <ProductWizard categories={categories} />
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
