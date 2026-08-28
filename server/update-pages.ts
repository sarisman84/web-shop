"use server";

import {ProductsResponse} from "@/types/products";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export async function updatePages(page: number) {


    const response : ProductsResponse = await fetch(
        `${API_URL}/products/?_page=${page}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
    ).then((res) => res.json());

    return response;
    // setProducts(response);
}