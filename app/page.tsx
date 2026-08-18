
const API_URL = "http://localhost:4000";
const defaultLimit = "6";
*/



export function getProducts(limit = 10): Product[] {
    return productsData.products.slice(0, limit);
}


export default async function Home() {

  const {
    products,
    total,
    page,
    pages,
    limit,
  }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`
  ).then((res) => res.json());


    </main>
  );
}


// <div>{products.map((product) => <h2 key={product.id}>{product.title} - {product.category?.name}</h2>)}</div>