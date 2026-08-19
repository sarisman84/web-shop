"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import useProductWizardSetup from "./hooks/useProductWizard";
import Dropdown from "@/utils/components/dropdown/Dropdown";
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";
import { ChangeEvent, PropsWithChildren } from "react";
import { FormArgs } from "./productWizard.type";
import requestCreateProduct from "./server/requestCreateProduct";

interface FieldEntryProps extends PropsWithChildren {
  labelName: string;
}
function FieldEntry(props: FieldEntryProps) {
  return (
    <Field className="flex gap-1 items-center justify-between">
      <Label className="flex-1">{props.labelName}</Label>
      {props.children}
    </Field>
  );
}

async function submitFormAction(formData: FormData) {
  const data: FormArgs = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: formData.get("price") as string,
    thumbnail: formData.get("thumbnail") as string,
    categoryId: Number(formData.get("categoryId")),
    brand: formData.get("brand") as string,
  };
  await requestCreateProduct(data);
}

export default function ProductWizard() {
  const dialog = useProductWizardDialog();
  const { forms, api } = useProductWizardSetup();

  const valueChanged = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T, T>,
  ) =>
    forms.setFormData({ ...forms.formData, [e.target.name]: e.target.value });

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
          <form className={`grid gap-1 pt-2`} action={submitFormAction}>
            <FieldEntry labelName="Product Name">
              <TextInput type="text" name="title" required={true} />
            </FieldEntry>

            <MultilineFieldEntry labelName="Product Description">
              <MultilineTextInput name="description" />
            </MultilineFieldEntry>

            <FieldEntry labelName="Brand">
              <TextInput type="text" name="brand" />
            </FieldEntry>

            <FieldEntry labelName="Price">
              <TextInput type="number" name="price" required={true} />
            </FieldEntry>

            <FieldEntry labelName="Thumbnail URL">
              <TextInput type="text" name="thumbnail" required={true} />
            </FieldEntry>

            <FieldEntry labelName="Category">
              <Dropdown
                name="categoryId"
                options={api.categories.map((category) => {
                  return { id: category.id, name: category.name };
                })}
                index={forms.currentCategory}
                setIndex={forms.setCurrentCategory}
              />
            </FieldEntry>
            <div className={`flex pt-5 gap-5 justify-self-center font-bold`}>
              <button
                type="submit"
                className="dark:bg-slate-600 dark:hover:bg-slate-500 px-2 py-1 rounded-sm cursor-pointer"
              >
                Create
              </button>
              <button
                type="button"
                className="dark:bg-red-900 dark:hover:bg-red-800 px-2 py-1 rounded-sm cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
