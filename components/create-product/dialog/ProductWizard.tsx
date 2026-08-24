"use client";
import {
  CloseButton,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Transition,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import Dropdown from "@/utils/components/dropdown/Dropdown";
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";
import {
  ChangeEvent,
  PropsWithChildren,
  useActionState,
  useEffect,
  useState,
} from "react";
import { createProduct } from "../actions/createProduct";
import { Category } from "@/app/types";
import serverAPI from "@/server/api/serverAPI";
import CreateProductForms from "../forms/CreateProductForms";

interface FieldEntryProps extends PropsWithChildren {
  labelName: string;
  htmlFor: string;
}
function FieldEntry(props: FieldEntryProps) {
  return (
    <Field className="flex gap-1 items-center justify-between">
      <Label className="flex-1" htmlFor={props.htmlFor}>
        {props.labelName}
      </Label>
      {props.children}
    </Field>
  );
}

const initialState: { message: string; errors?: Record<string, string[]> } = {
  message: "",
};

interface ProductWizardProps {
  categories: Category[];
}

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
