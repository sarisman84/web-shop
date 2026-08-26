import type { ProductsResponse } from '@/types/types';
import ProductHeader from "@/components/ProductHeader";
import ProductTable from "@/components/ProductTable";
// import {Product} from "@/types/types";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

/*
function getProducts(limit = 10): Product[] {
    return productsData.products.slice(0, limit);
}
*/

export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show inf

  // const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    const response : ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());


  return (
      <main>
        <ProductHeader />


      <h1>Products</h1>

        <section className="w-full max-w-7xl mx-auto my-4">
            <ProductTable defaultResponse={response}  />

        </section>
    </main>
  );
}

// {/*<ProductTable products={products} />*/}
// {/* <ProductTable products={getProducts(10)} categories={productsData.categories} /> '/}
