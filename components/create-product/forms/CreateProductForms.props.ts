import { Category } from "@/app/types";

export interface CreateProductFormsProps {
  categories: Category[];
  onSuccess?: () => void; // Optional callback on success
}
