import { Category } from "@/app/types";

export default async function requestProductCategories(
  apiUrl: string = "http://localhost:4000",
): Promise<Category[]> {
  const response = await fetch(`${apiUrl}/categories`);
  if (!response.ok) {
    return [];
  }

  return await response.json();
}
