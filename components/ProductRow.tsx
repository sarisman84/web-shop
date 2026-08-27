import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Product, Category } from "@/types/types";
import StockBadge from "@/components/StockBadge";

// "availabilityStatus": "In Stock",

interface Props {
    product: Product;
    category: Category;
}



export default function ProductRow({ product, category }: Props) {
    return (
        <tr className="dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 border border-slate-200 dark:border-slate-800 transition">
            <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={48}
                        height={48}
                        className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900  object-cover"
                    />

                    <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                            {product.title}
                        </div>

                        <div className="text-sm text-slate-600 dark:text-slate-300">
                            SKU: {product.sku}
                        </div>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">
                {product.brand}
            </td>

            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">



                {category.name}
            </td>

            <td className="px-6 py-4">

                {product.availabilityStatus} ({product.stock})

                {/*<StockBadge
                 stock={product.stock}
                /> */}
            </td>

            <td className="px-6 py-4 font-bold text-slate-600 dark:text-slate-200">
                €
                {product.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                })}
            </td>

            <td className="px-6 py-4">
                <div className="flex gap-4 justify-end">
                    <button className="text-gray-500 hover:text-red-600">
                        <Trash2 size={18} strokeWidth={3} />
                    </button>

                    <button className="text-gray-500 hover:text-gray-900">
                        <Pencil size={18} strokeWidth={3} />
                    </button>
                </div>
            </td>
        </tr>
    );
}