import * as service from './cart.service.js';

export async function getCart(req, res) {
    const cart = await service.getCart(req.user.id);

    res.json(cart);
}

export async function addToCart(req, res) {
    const { product_id, quantity } = req.body;

    await service.addToCart(req.user.ic, product_id, quantity);

    res.status(201).json({
        message: 'Produto Adicionado'
    });
}

export async function removeFromCart(req, res) {
    await service.removeFromCart(req.params.id);

    res.json({
        message: 'Produto Removido'
    });
}