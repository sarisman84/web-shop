"use server";

import { FormState } from "@/components/create-product/actions/createProduct.type";

export default async function editProduct(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
    throw new Error("Not implemented");
}
