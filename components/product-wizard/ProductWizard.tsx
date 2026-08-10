"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";

export default function ProductWizard() {
  const ctx = useProductWizardDialog();
  return (
    <Dialog
      open={ctx.isOpen}
      onClose={() => ctx.closeModal()}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className={`${style.panel} bg-amber-100 p-5 rounded-2xl`}>
          <DialogTitle className={`justify-self-center font-bold pb-4 text-2xl`}>
            Add New Product
          </DialogTitle>
          <Description>
            Add a new product to your inventory by filling out the form below. Make sure to provide accurate information for each field.
          </Description>
          <div className={`flex gap-5 justify-self-center font-bold`}>
            <button onClick={() => ctx.closeModal()}>Save</button>
            <button onClick={() => ctx.closeModal()}>Close</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
