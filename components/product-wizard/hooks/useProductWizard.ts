import { useEffect, useState } from "react";
import { FormArgs } from "../productWizard.type";
import { Category } from "@/app/types";
import requestProductCategories from "../server/requestProductCategories";

export default function useProductWizardSetup() {
  const [formData, setFormData] = useState<FormArgs>({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    categoryId: 0,
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
      currentCategory: formData.categoryId,
      setCurrentCategory: (categoryId: number | null) => {
        if (!categoryId) return;
        setFormData((prev) => ({ ...prev, categoryId: categoryId }));
      },
    },
    api: {
      categories,
      setCategories,
    },
  };
}
