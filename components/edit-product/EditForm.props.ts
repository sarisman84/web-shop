import { Category } from "@/app/types";

export interface EditFormsProps {
  categories: Category[];
  onSuccess?: () => void; // Optional callback on success
}