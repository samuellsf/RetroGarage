import { apiFetch } from "../../config/api";

export function getProducts() {
    return apiFetch(
        '/products'
    );
}

export function getProductById(id) {

    return apiFetch(
        `/products${id}`
    );
}

export function getProductByCategory(id) {
    return apiFetch(`/products/category/${id}`);
}

