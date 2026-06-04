import * as model from './order.model.js';

export function createOrder(userId, total) {
    return model.create(userId, total);
}

export function getOrders() {
    return model.findAll();
}

export function getOrderById(id) {
    return model.findById(id);
}