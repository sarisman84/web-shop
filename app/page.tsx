import ProductHeader from "@/components/product-header/ProductHeader";
import useEventHandler from "@/hooks/useEventHandler";
import requestProductsAsync from "@/server/product-request";
import { emptyResponse } from "@/server/product-request.type";
import { useEffect } from "react";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default function Home() {
  // We use the fetch() method to get the products from the API
  // In this fetch we sort using _sort and _order and we limit the number of products
  // We also use _expand to get the relational category data
  // We can use the other destructured variables like page, total and so on to create pagination later

  const { productWizardState, productsResponseState } = useEventHandler();
  const [currentResponse, setCurrentResponse] = productsResponseState;

  useEffect(() => {
    requestProductsAsync((result) => {
      if (result !== emptyResponse) {
        setCurrentResponse(result);
      }
    });
  }, [setCurrentResponse]);

  return (
    <main>
      <ProductHeader productWizardState={productWizardState} />

      <h1>Products</h1>

      <div>
        {currentResponse.products?.length === 0 ? (
          <p>No products available.</p>
        ) : (
          currentResponse.products?.map((product) => (
            <h2 key={product.id}>
              {product.title} - {product.category?.name}
            </h2>
          ))
        )}
      </div>
    </main>
  );
}
