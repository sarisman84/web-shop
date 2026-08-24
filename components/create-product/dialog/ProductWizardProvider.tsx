"use client";
import { createContext, useContext, useState } from "react";

type _ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ProductWizardContext = createContext<_ModalContextType | undefined>(
  undefined,
);

export function ProductWizardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProductWizardContext.Provider
      value={{
        isOpen,
        openModal: () => {
          console.log("Opening modal");
          setIsOpen(true);
        },
        closeModal: () => {
          console.log("Closing modal");
          setIsOpen(false);
        },
      }}
    >
      {children}
    </ProductWizardContext.Provider>
  );
}

export function useProductWizardDialog() {
  const context = useContext(ProductWizardContext);
  if (!context) {
    throw new Error(
      "useProductWizardDialog must be used within a ProductWizardProvider",
    );
  }
  return context;
}
