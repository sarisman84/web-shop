"use server";

import { FormState } from "@/components/create-product/actions/createProduct.type";
import serverAPI from "@/server/api/serverAPI";
import { ProductDesc } from "@/server/api/serverAPI.types";
import { revalidatePath } from "next/cache";

export default async function editProduct(
  id: number,
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const submission: ProductDesc = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: Number(formData.get("price")),
    brand: formData.get("brand") as string,
    categoryId: Number(formData.get("categoryId[id]")),
    thumbnail: formData.get("thumbnail") as string,
  };

  formData.forEach((value, key, parent) => {
    console.log(`${key}: ${value}`);
  });

  if (submission.title.length < 3) {
    return {
      message: "Validation failed",
      state: 405,
    };
  }

  if (submission.price <= 0) {
    return {
      message: "Validation failed",
      state: 406,
    };
  }

  if (submission.categoryId <= 0) {
    return {
      message: `Validation failed: Category must be selected. CategoryId: ${submission.categoryId}`,
      state: 408,
    };
  }

  if (submission.thumbnail.length <= 0) {
    return {
      message: `Validation failed: Thumbnail URL must be provided -> ${submission.thumbnail}`,
      state: 407,
    };
  }

  //   await serverAPI.createProduct(submission);
  await serverAPI.updateProduct(id, submission);

  revalidatePath("/");

  return {
    message: "Product created!",
    state: 200,
  };
}
