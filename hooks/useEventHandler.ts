import { useState } from "react";

export default function useEventHandler() {
  const productWizardState = useState(false);

  return {
    productWizardState,
  };
}
