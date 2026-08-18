import productsData from "@/server/products.json";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

interface ProductResponse {
    products: Product[];
}

const data = productsData as ProductResponse;

const firstTenProducts: Product[] = data.products.slice(0, 10);

console.log(firstTenProducts);