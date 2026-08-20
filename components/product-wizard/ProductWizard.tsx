"use client";
import {
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
import { createProduct } from "./actions/createProduct";
import { Category } from "@/app/types";
import serverAPI from "@/server/api/serverAPI";

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

const initialState: { message: string; errors?: Record<string, string[]> } = {
  message: "",
};

export default function ProductWizard() {
  const dialog = useProductWizardDialog();
  const [state, formAction, _] = useActionState(createProduct, initialState);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await serverAPI.getProductCategories();
      setCategories(categories);
    }

    fetchCategories();
  }, [setCategories]);

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
          <form className={`grid gap-1 pt-2`} action={formAction}>
            <FieldEntry labelName="Product Name">
              <TextInput
                type="text"
                name="title"
                required={true}
                invalid={state.errors?.title !== undefined}
              />
            </FieldEntry>

            <MultilineFieldEntry labelName="Product Description">
              <MultilineTextInput name="description" />
            </MultilineFieldEntry>

            <FieldEntry labelName="Brand">
              <TextInput type="text" name="brand" />
            </FieldEntry>

            <FieldEntry labelName="Price">
              <TextInput
                type="number"
                name="price"
                required={true}
                invalid={state.errors?.price !== undefined}
              />
            </FieldEntry>

            <FieldEntry labelName="Thumbnail URL">
              <TextInput
                type="text"
                name="thumbnail"
                required={true}
                invalid={state.errors?.thumbnail !== undefined}
              />
            </FieldEntry>

            <FieldEntry labelName="Category">
              <Dropdown
                name="categoryId"
                options={categories.map((category) => {
                  return {
                    id: category.id,
                    name: category.name,
                  };
                })}
                invalid={state.errors?.categoryId !== undefined}
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
