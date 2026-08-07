import { StockStatus } from "@/types/types";
/*
interface Props {
    status: StockStatus;
    stock: number;
}
*/

const getStatus = (stock: number): StockStatus => {

    if(stock === 0) return  "out-of-stock";

    if(stock < 10) return "low-stock";

    return "in-stock";

};


export default function StockBadge({ stock }:{stock:number}    ) {

    const status = getStatus(stock);

    const styles = {
        "in-stock":
            "bg-green-50 text-green-600 ring-green-600/20",
        "low-stock":
            "bg-orange-50 text-orange-600 ring-orange-600/20",
        "out-of-stock":
            "bg-red-50 text-red-600 ring-red-600/20",
    };

    const text = {
        "in-stock": `In Stock (${stock})`,
        "low-stock": `Low Stock (${stock})`,
        "out-of-stock": `Out of Stock (${stock})`,
    };

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
        >
      {text[status]}
    </span>
    );
}