import * as service from './order.service.js';

export async function createOrder(req, res) {

    const orderId = await service.createOrder(req.user.id, req.body.total);

    res.status(201).json({
        success: true,
        message: "Pedido criado com sucesso",
        orderId
    });
}

export async function getOrders(req, res) {
    const orders = await service.getOrders();

    res.json(orders);
}

export async function getOrderById(req, res) {
    const order = await service.getOrderById(req.params.id);

    res.json(order);
}