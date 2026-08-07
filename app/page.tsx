import {Product, ProductsResponse } from "@/types/types";
import ProductTable from "@/components/ProductTable";
import productsData from "@/server/products.json";

/*
const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
).then((res) => res.json());

const API_URL = "http://localhost:4000";
const defaultLimit = "6";
*/



export function getProducts(limit = 10): Product[] {
    return productsData.products.slice(0, limit);
}


export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show inf
    /*
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());
    */


    /*

    const firstTenProducts: Product[] = data.products.slice(0, 10);

    firstTenProducts.map((product) => {
        console.log(product.title);
    });
    */

  return (
    <main className="w-full max-w-7xl mx-auto">
      <h1>Products</h1>

        <section className="my-4">
            {/*<ProductTable products={products} />*/}
            <ProductTable products={getProducts(10)} categories={productsData.categories} />
        </section>
    </main>
  );
}


// <div>{products.map((product) => <h2 key={product.id}>{product.title} - {product.category?.name}</h2>)}</div>