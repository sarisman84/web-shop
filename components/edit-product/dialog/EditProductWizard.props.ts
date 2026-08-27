import { Category } from "@/types/products";
import { Product } from "@/types/types";

export interface EditProductWizardProps {
  id: number;
  categories: Category[];
  product: Product;
}
