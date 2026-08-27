import type { ProductsResponse } from "@/types/types";
//import DeleteProductButton from "@/components/DeleteProductButton";
import ProductTable from "@/components/ProductTable";
// import {Product} from "@/types/types";
import ProductHeader from "@/components/product-header/ProductHeader";
import ProductWizard from "@/components/create-product/dialog/ProductWizard";
import serverAPI from "@/server/api/serverAPI";
import requestProductsAsync from "@/server/product-request";
import SummaryTracker from "@/components/SummaryTracker";

import DeleteProductButton from "@/components/delete-product/button/DeleteProductButton";
import Search from "@/components/Search";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

/*
function getProducts(limit = 10): Product[] {
    return productsData.products.slice(0, limit);
}
*/

export default async function Home() {
  const response: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${1}_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

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
      <SummaryTracker />

      <Search />

      <section className="w-full max-w-7xl mx-auto my-4">
        <ProductTable defaultResponse={response} />
      </section>
    </main>
  );
}

// {/*<ProductTable products={products} />*/}
// {/* <ProductTable products={getProducts(10)} categories={productsData.categories} /> '/}
