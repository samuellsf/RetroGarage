import * as service from './order.service.js';

export async function createOrder(req, res, next) {
    try {
        const orderId = await service.createOrder(req.user.id, req.body.total);

        res.status(201).json({
            success: true,
            message: "Pedido criado com sucesso",
            orderId
        });

    } catch (error) {

        next(error);

    }
};

export async function getOrders(req, res, next) {
    try {

        const orders = await service.getOrders();

        res.json(orders);

    } catch (error) {

        next(error);
    
    }
};

export async function getOrderById(req, res, next) {
    try {

        const order = await service.getOrderById(req.params.id);

        res.json(order);
    } catch (error) {

        next(error);

    }
};