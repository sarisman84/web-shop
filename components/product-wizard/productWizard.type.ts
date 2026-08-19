import { Category } from "@/app/types";

export interface FormArgs {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  categoryId: number;
  brand: string;
}

export interface CategoryPickerProps {
  categories: Category[];
  currentCategory: number;
  setCurrentCategory: (categoryId: number) => void;
}
