import * as service from './order.service.js';

export async function createOrder(req, res) {
    const { total } = req.body;

    const order = await service.createOrder(req.user.id, total);

    res.status(201).json(order);
}

export async function getOrders(req, res) {
    const orders = await service.getOrders();

    res.json(orders);
}

export async function getOrderById(req, res) {
    const order = await service.getOrderById(req.params.id);

    res.json(order);
}