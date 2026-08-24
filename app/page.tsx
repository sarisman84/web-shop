<<<<<<< HEAD
import ProductHeader from "@/components/product-header/ProductHeader";
import ProductWizard from "@/components/product-wizard/ProductWizard";
import serverAPI from "@/server/api/serverAPI";
import requestProductsAsync from "@/server/product-request";
=======
import DeleteProductButton from "@/components/DeleteProductButton";
import type { ProductsResponse } from "./types";
import ProductHeader from "@/components/ProductHeader";
>>>>>>> main

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
<<<<<<< HEAD
  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later
  const { products } = await requestProductsAsync();
  const categories = await serverAPI.getProductCategories();
  
=======
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

>>>>>>> main
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
