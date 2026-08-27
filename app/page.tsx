import type { ProductsResponse } from "@/types/products";
import ProductTable from "@/components/ProductTable";
import { API_URL, DEFAULT_LIMIT } from '@/lib/constants'
import ProductHeader from "@/components/product-header/ProductHeader";
import ProductWizard from "@/components/create-product/dialog/ProductWizard";
import serverAPI from "@/server/api/serverAPI";
import SummaryTracker from "@/components/SummaryTracker";
import EditProductWizard from "@/components/edit-product/dialog/EditProductWizard";


export default async function Home() {

  const response: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${1}_limit=${DEFAULT_LIMIT}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later
  // const { products } = await requestProductsAsync();
  const { products } = await serverAPI.getProducts();
  const categories = await serverAPI.getProductCategories();

  return (
    <main>
      <ProductHeader />
      <ProductWizard categories={categories} />
      <EditProductWizard categories={categories} />
      <section className="w-full max-w-7xl mx-auto my-4 flex flex-col gap-5">
        <SummaryTracker />
        <ProductTable defaultResponse={response} />
      </section>
    </main>
  );
}

// {/*<ProductTable products={products} />*/}
// {/* <ProductTable products={getProducts(10)} categories={productsData.categories} /> '/}
