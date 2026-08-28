import { Category } from "@/types/types";
import { Product } from "@/types/types";

export interface EditProductWizardProps {
  id: number;
  categories: Category[];
  product: Product;
}
