"use server";

export interface CreateProductDesc {
  title: string;
  description: string;
  price: number;
  brand: string;
  categoryId: number;
  thumbnail: string;
}

export async function createProduct(desc: CreateProductDesc) {
  const method = "POST";
  const body = JSON.stringify(desc); // Ensure formArgs is properly serialized to JSON
  const apiUrl = "http://localhost:4000";
  
  console.log(
    "Sending request to: %s - with contents: %s",
    `${apiUrl}/products`,
    body,
  );
  return await fetch(`${apiUrl}/products`, {
    method,
    body,
  });
}
