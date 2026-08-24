"use server";

import serverAPI from "@/server/api/serverAPI";
import { CreateProductDesc } from "@/server/api/serverAPI.types";

type FormState = {
  message: string;
  errors?: Record<string, string[]>;
};

export async function createProduct(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {

  const submission: CreateProductDesc = {
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
      errors: { title: ["Title must be at least 3 characters long"] },
    };
  }

  if (submission.price <= 0) {
    return {
      message: "Validation failed",
      errors: { price: ["Price must have a value greater than 0."] },
    };
  }

  if (submission.categoryId <= 0) {
    return {
      message: `Validation failed: Category must be selected. CategoryId: ${submission.categoryId}`,
      errors: {
        categoryId: [
          `Category must be selected. CategoryId: ${submission.categoryId}`,
        ],
      },
    };
  }

  if (submission.thumbnail.length <= 0) {
    return {
      message: `Validation failed: Thumbnail URL must be provided -> ${submission.thumbnail}`,
      errors: { thumbnail: ["Thumbnail URL must be provided."] },
    };
  }

  const response = await serverAPI.createProduct(submission);
  if (!response.ok) {
    return {
      message: `Failed to create product! ${response.statusText}`,
      errors: { response: [response.statusText] },
    };
  }

  return {
    message: "Product created!",
  };
}
