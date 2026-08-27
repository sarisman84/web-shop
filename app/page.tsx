import type { ProductsResponse } from "@/types/products";
import ProductTable from "@/components/ProductTable";
import { API_URL, DEFAULT_LIMIT } from '@/lib/constants'
import ProductHeader from "@/components/product-header/ProductHeader";
import ProductWizard from "@/components/create-product/dialog/ProductWizard";
import serverAPI from "@/server/api/serverAPI";
import requestProductsAsync from "@/server/product-request";
import {FilterBar} from "@/components/FilterBar";


export default async function Home() {

  const response: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${1}_limit=${DEFAULT_LIMIT}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later
  // const { products } = await requestProductsAsync();
  const { products } = await serverAPI.getProducts(parseInt(DEFAULT_LIMIT));
  const categories = await serverAPI.getProductCategories();

  return (
    <main>
      <ProductHeader />
      <ProductWizard categories={categories} />

      <section className="w-full max-w-7xl mx-auto my-4">
        <ProductTable defaultResponse={response} />
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
