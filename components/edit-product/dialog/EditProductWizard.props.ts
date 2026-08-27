import { Category } from "@/types/products";
import { Product } from "@/types/types";

export interface EditProductWizardProps {
  categories: Category[];
  product: Product;
}
