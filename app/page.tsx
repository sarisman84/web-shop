
import type { ProductsResponse } from '@/types/types';
//import DeleteProductButton from "@/components/DeleteProductButton";
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

    const response : ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${1}_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());


  return (
      <main>
        <ProductHeader />


      <h1>Products</h1>


        <section className="w-full max-w-7xl mx-auto my-4">
            <ProductTable defaultResponse={response}  />

        </section>


      {/* <div>
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
      </div> */}

    </main>
  );
}

// {/*<ProductTable products={products} />*/}
// {/* <ProductTable products={getProducts(10)} categories={productsData.categories} /> '/}
