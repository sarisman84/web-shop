import { createContext, useContext, useMemo, useState } from "react";

type ModalContextType = {
  isOpen: (name: string) => boolean;
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openState, setOpenState] = useState<Record<string, boolean>>({});
  const value = useMemo(
    () => ({
      isOpen: (name: string) => {
        return openState[name] || false;
      },
      openModal: (name: string) => {
        setOpenState((prev) => ({ ...prev, [name]: true }));
      },
      closeModal: (name: string) => {
        setOpenState((prev) => ({ ...prev, [name]: false }));
      },
    }),
    [openState, setOpenState],
  );
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
}
