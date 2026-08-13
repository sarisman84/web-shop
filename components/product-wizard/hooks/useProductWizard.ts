import { useEffect, useState } from "react";
import { FormArgs } from "../productWizard.type";
import { Category } from "@/app/types";
import requestProductCategories from "../productWizard";

export default function useProductWizardSetup() {
  const [formData, setFormData] = useState<FormArgs>({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: 0,
    brand: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await requestProductCategories();
      setCategories(categoryData);
    };
    fetchCategories();
  }, [setCategories]);

  return {
    forms: {
      formData,
      setFormData,
      currentCategory: formData.category,
      setCurrentCategory: (categoryId: number) => {
        setFormData((prev) => ({ ...prev, category: categoryId }));
      },
    },
    api: {
      categories,
      setCategories,
    },
  };
}
