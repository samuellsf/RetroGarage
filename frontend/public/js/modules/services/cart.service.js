import { apiFetch } from "../../config/api";

export function getCart() {
    return apiFetch('/cart');
}

export function addToCart(productId, quantity) {
    return apiFetch('/cart', {
        method: 'POST',
        body: JSON.stringify({
            product_id: productId,
            quantity
        })
    });

}

export function removeFromCart(id) {
    return apiFetch(
        `/cart/${id}`,
        {
            method: 'POST'
        }
    );
}