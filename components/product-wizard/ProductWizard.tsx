"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ProductWizardProps } from "./ProductWizard.type";

export default function ProductWizard({
  productWizardState,
}: ProductWizardProps) {
  return (
    <Dialog
      open={productWizardState[0]}
      onClose={() => productWizardState[1](false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className="flex gap-4">
            <button onClick={() => productWizardState[1](false)}>Cancel</button>
            <button onClick={() => productWizardState[1](false)}>
              Deactivate
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
