import { Category } from "@/types/types";


export interface CreateProductFormsProps {
  categories: Category[];
  onSuccess?: () => void; // Optional callback on success
}
