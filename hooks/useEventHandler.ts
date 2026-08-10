import { ProductWizardState } from "@/components/product-wizard/ProductWizard.type";
import { useState } from "react";

export default function useEventHandler() {
  const state: ProductWizardState = useState(false);

  return {
    productWizardState: state,
  };
}
