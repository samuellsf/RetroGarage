import * as model from './cart.model.js';

export function getCart(userId) {
    return model.findByUser(userId);
}

export function addToCart(userId, productId, quantity) {
    return model.create(userId, productId, quantity);
}

export function removeFromCart(id) {
    return model.remove(id);
}