'use client'

import Dropdown from "@/utils/components/dropdown/Dropdown";
import Modal from "@/utils/components/modal/Modal"
import MultilineFieldEntry from "@/utils/components/multiline-field-entry/MultilineFieldEntry";
import MultilineTextInput from "@/utils/components/multiline-text-input/MultilineTextInput";
import TextInput from "@/utils/components/text-input/TextInput";
import { State } from "../../create-product/actions/createProduct.type";
import FieldEntry from "../../create-product/forms/field-entry/FieldEntry";
import { useActionState, useEffect } from "react";
import { EditFormsProps } from "../EditForm.props";
import editProduct from "../actions/editProduct";

const initialState: { message: string; state: State } = {
  message: "",
  state: 0,
};

export default function EditForm(props : EditFormsProps) {
   const [state, formAction, _] = useActionState(editProduct, initialState);
   const { categories, onSuccess } = props;

    useEffect(() => {
      if (state.state === State.OK && onSuccess !== undefined) {
        onSuccess();
        console.log("Product created successfully");
      }
    }, [state, onSuccess]);

    return <><form>
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
          Save
        </button>
        <button
          type="button"
          className="dark:bg-red-900 dark:hover:bg-red-800 bg-red-500 hover:bg-red-600 px-2 py-1 rounded-sm cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form></>
}