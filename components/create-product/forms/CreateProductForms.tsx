import Dropdown from "@/utils/components/dropdown/Dropdown";
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";
import { CloseButton } from "@headlessui/react";
import { useActionState } from "react";
import { createProduct } from "../actions/createProduct";
import FieldEntry from "./field-entry/FieldEntry";
import { CreateProductFormsProps } from "./CreateProductForms.props";

const initialState: { message: string; errors?: Record<string, string[]> } = {
  message: "",
};

export default function CreateProductForms(props: CreateProductFormsProps) {
  const [state, formAction, _] = useActionState(createProduct, initialState);
  const { categories } = props;

  return (
    <form className={`grid gap-1 pt-2`} action={formAction}>
      <FieldEntry labelName="Product Name" htmlFor="title">
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

      <FieldEntry labelName="Brand" htmlFor="brand">
        <TextInput type="text" name="brand" />
      </FieldEntry>

      <FieldEntry labelName="Price" htmlFor="price">
        <TextInput
          type="number"
          name="price"
          required={true}
          invalid={state.errors?.price !== undefined}
        />
      </FieldEntry>

      <FieldEntry labelName="Thumbnail URL" htmlFor="thumbnail">
        <TextInput
          type="text"
          name="thumbnail"
          required={true}
          invalid={state.errors?.thumbnail !== undefined}
        />
      </FieldEntry>

      <FieldEntry labelName="Category" htmlFor="categoryId">
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
        <CloseButton
          type="submit"
          className="dark:bg-slate-600 dark:hover:bg-slate-500 px-2 py-1 rounded-sm cursor-pointer"
        >
          Create
        </CloseButton>
        <CloseButton
          type="button"
          className="dark:bg-red-900 dark:hover:bg-red-800 px-2 py-1 rounded-sm cursor-pointer"
        >
          Cancel
        </CloseButton>
      </div>
    </form>
  );
}
