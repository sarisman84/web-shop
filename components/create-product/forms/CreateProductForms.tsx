import Dropdown from "@/utils/components/dropdown/Dropdown";
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";
import { useActionState, useEffect } from "react";
import { createProduct } from "../actions/createProduct";
import FieldEntry from "./field-entry/FieldEntry";
import { CreateProductFormsProps } from "./CreateProductForms.props";
import { State } from "../actions/createProduct.type";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";

const initialState: { message: string; state: State } = {
  message: "",
  state: 0,
};

export default function CreateProductForms(props: CreateProductFormsProps) {
  const { closeModal } = useModal();

  const [state, formAction, _] = useActionState(createProduct, initialState);
  const { categories, onSuccess } = props;

  useEffect(() => {
    if (state.state === State.OK && onSuccess !== undefined) {
      onSuccess();
      console.log("Product created successfully");
    }
  }, [state, onSuccess]);

  return (
    <form className={`grid gap-1 pt-2`} action={formAction}>
      <FieldEntry labelName="Product Name" htmlFor="title">
        <TextInput
          type="text"
          name="title"
          required={true}
          invalid={state.state === State.INVALID_TITLE}
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
          invalid={state.state === State.INVALID_PRICE}
        />
      </FieldEntry>

      <FieldEntry labelName="Thumbnail URL" htmlFor="thumbnail">
        <TextInput
          type="text"
          name="thumbnail"
          required={true}
          invalid={state.state === State.INVALID_TN_URL}
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
          invalid={state.state == State.INVALID_CAT_ID}
        />
      </FieldEntry>
      <div className={`flex pt-5 gap-5 justify-self-center font-bold`}>
        <button
          type="submit"
          className="dark:bg-slate-600 dark:hover:bg-slate-500 bg-slate-400 hover:bg-slate-500 px-2 py-1 rounded-sm cursor-pointer"
        >
          Create
        </button>
        <button
          type="button"
          className="dark:bg-red-900 dark:hover:bg-red-800 bg-red-500 hover:bg-red-600 px-2 py-1 rounded-sm cursor-pointer"
          onClick={() => {
            closeModal("create-prod");
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
