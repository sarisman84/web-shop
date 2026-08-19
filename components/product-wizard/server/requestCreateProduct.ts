"use server";

import { FormArgs } from "../productWizard.type";

export default async function requestCreateProduct(
  formArgs: FormArgs,
  apiUrl: string = "http://localhost:4000",
) {
  const body = JSON.stringify(formArgs); // Ensure formArgs is properly serialized to JSO
  console.log(
    "Sending request to: %s - with contents: %s",
    `${apiUrl}/products`,
    body,
  );
  const response = await fetch(`${apiUrl}/products`, {
    method: `POST`,
    body: JSON.stringify(formArgs),
  });

  if (!response.ok) {
    return 404;
  }

  return 200;
}
