"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import useProductWizardSetup from "./hooks/useProductWizard";
import Dropdown from "@/utils/components/dropdown/Dropdown";
import FieldEntry from "@/utils/components/field-entry/FieldEntry";
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";

export default function ProductWizard() {
  const dialog = useProductWizardDialog();
  const { forms, api } = useProductWizardSetup();

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
          <form
            className={`grid gap-1 pt-2`}
            action="/products"
            method="POST"
          >
            <FieldEntry labelName="Product Name">
              <TextInput
                className=""
                type="text"
                name="title"
                value={forms.formData.title}
                onChange={(value) =>
                  forms.setFormData((prev) => ({
                    ...prev,
                    title: value,
                  }))
                }
                required={true}
              />
            </FieldEntry>

            <MultilineFieldEntry labelName="Product Description">
              <MultilineTextInput
                className=""
                name="description"
                value={forms.formData.description}
                onChange={(value) =>
                  forms.setFormData((prev) => ({
                    ...prev,
                    description: value,
                  }))
                }
              />
            </MultilineFieldEntry>

            <FieldEntry labelName="Brand">
              <TextInput
                className=""
                type="text"
                name="brand"
                value={forms.formData.brand}
                onChange={(value) =>
                  forms.setFormData((prev) => ({
                    ...prev,
                    brand: value,
                  }))
                }
              />
            </FieldEntry>

            <FieldEntry labelName="Price">
              <TextInput
                className=""
                type="number"
                name="price"
                value={forms.formData.price}
                onChange={(value) =>
                  forms.setFormData((prev) => ({
                    ...prev,
                    price: value,
                  }))
                }
                required={true}
              />
            </FieldEntry>

            <FieldEntry labelName="Thumbnail URL">
              <TextInput
                className=""
                type="text"
                name="thumbnail"
                value={forms.formData.thumbnail}
                onChange={(value) =>
                  forms.setFormData((prev) => ({
                    ...prev,
                    thumbnail: value,
                  }))
                }
                required={true}
              />
            </FieldEntry>

            <FieldEntry labelName="Category">
              <Dropdown
                name="categoryId"
                options={api.categories.map((category) => {
                  return { value: category.id, name: category.name };
                })}
                currentValue={forms.currentCategory}
                setCurrentValue={forms.setCurrentCategory}
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
                onClick={() => dialog.closeModal()}
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
