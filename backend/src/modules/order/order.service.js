import * as model from './order.model.js';

export async function createOrder(userId, total) {

    const result = await model.create(userId, total);

    return result.insertId;
}

export function getOrders() {
    return model.findAll();
}

export function getOrderById(id) {
    return model.findById(id);
}