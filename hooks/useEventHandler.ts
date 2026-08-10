import { ProductWizardState } from "@/components/product-wizard/ProductWizard.type";
import { emptyResponse, ProductsResponseState } from "@/server/product-request.type";
import { useState } from "react";

export default function useEventHandler() {
  const productWizardState: ProductWizardState = useState(false);
  const productsResponseState: ProductsResponseState = useState(emptyResponse);

  return {
    productWizardState,
    productsResponseState,
  };
}
