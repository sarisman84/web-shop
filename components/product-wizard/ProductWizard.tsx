"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Textarea,
} from "@headlessui/react";
import { useProductWizardDialog } from "./ProductWizardProvider";
import style from "./ProductWizard.module.css";
import useProductWizardSetup from "./hooks/useProductWizard";
import { CategoryPickerProps } from "./productWizard.type";

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
            className={`${style.form} gap-1 pt-2`}
            action="/products"
            method="POST"
          >
            <TextInputField
              displayLabel="Product Name"
              name="title"
              value={forms.formData.title}
              onValueChanged={(value) =>
                forms.setFormData((prev) => ({ ...prev, title: value }))
              }
            />

            <TextInputField
              displayLabel="Product Description"
              textArea={true}
              name="description"
              value={forms.formData.description}
              onValueChanged={(value) =>
                forms.setFormData((prev) => ({ ...prev, description: value }))
              }
            />

            <TextInputField
              displayLabel="Brand"
              name="brand"
              value={forms.formData.brand}
              onValueChanged={(value) =>
                forms.setFormData((prev) => ({ ...prev, brand: value }))
              }
            />

            <TextInputField
              displayLabel="Price"
              name="price"
              type="number"
              value={forms.formData.price}
              onValueChanged={(value) =>
                forms.setFormData((prev) => ({ ...prev, price: value }))
              }
            />

            <TextInputField
              displayLabel="Thumbnail URL"
              name="thumbnail"
              value={forms.formData.thumbnail}
              onValueChanged={(value) =>
                forms.setFormData((prev) => ({ ...prev, thumbnail: value }))
              }
            />
            <CategoryPicker
              categories={api.categories}
              currentCategory={forms.currentCategory}
              setCurrentCategory={forms.setCurrentCategory}
            />
            <div className={`flex pt-5 gap-5 justify-self-center font-bold`}>
              <button type="submit" onClick={() => dialog.closeModal()}>
                Create
              </button>
              <button onClick={() => dialog.closeModal()}>Cancel</button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

interface TextInputFieldProps {
  textArea?: boolean;
  displayLabel: string;
  name: string;
  type?: string;
  value: string;
  onValueChanged?: (value: string) => void;
}

function TextInputField(props: TextInputFieldProps) {
  const { displayLabel, name, type, value, textArea } = props;
  return (
    <Field className={`${style.field} ${textArea ? style["field--full"] : ""}`}>
      <Label
        className={`${style.label} ${textArea ? style["label--full"] : ""}`}
      >
        {displayLabel}
      </Label>
      {textArea ? (
        <Textarea
          className={`${style.input} ${style.textarea}`}
          name={name}
          value={value}
          onChange={(e) => props.onValueChanged?.(e.target.value)}
        />
      ) : (
        <Input
          className={`${style.input}`}
          type={type || "text"}
          name={name}
          value={value}
          onChange={(e) => props.onValueChanged?.(e.target.value)}
        />
      )}
    </Field>
  );
}

function CategoryPicker(props: CategoryPickerProps) {
  const { categories, currentCategory, setCurrentCategory } = props;
  const categoryPreview =
    categories.find((category) => category.id === currentCategory)?.name ||
    "Select a category";

  return (
    <Field className="flex w-full">
      <Label className="align-middle self-center w-32 text-sm font-medium">Category</Label>
      <Listbox
        name="categoryId"
        value={currentCategory}
        onChange={setCurrentCategory}
      >
        <ListboxButton className="bg-slate-200 dark:bg-slate-600  hover:bg-slate-300 dark:hover:bg-slate-700 px-2 py-1 rounded">
          {categoryPreview}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          className="bg-slate-100 dark:bg-slate-800 border-slate-800 dark:border-slate-100 border rounded h-40"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category.id}
              className="hover:bg-slate-400 dark:hover:bg-slate-600 px-5 py-1"
            >
              {category.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}
