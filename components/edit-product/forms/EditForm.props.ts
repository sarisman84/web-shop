import { Category, Product } from "@/types/types";

export interface EditFormsProps {
  categories: Category[];
  onSuccess?: () => void; // Optional callback on success
  product: Product;
}
