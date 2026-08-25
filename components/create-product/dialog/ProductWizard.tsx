"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import CreateProductForms from "../forms/CreateProductForms";
import { ProductWizardProps } from "./ProductWizard.props";

export default function ProductWizard(props: ProductWizardProps) {
  const dialog = useProductWizardDialog();

  return (
    <Dialog
      open={dialog.isOpen}
      onClose={() => dialog.closeModal()}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur">
        <DialogPanel
          className={`${style.panel} bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl`}
        >
          <DialogTitle
            className={`justify-self-center font-bold pb-4 text-2xl`}
          >
            Add New Product
          </DialogTitle>
          <Description>
            Add a new product to your inventory by filling out the form below.
            Make sure to provide accurate information for each field.
          </Description>
          <CreateProductForms categories={props.categories} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
