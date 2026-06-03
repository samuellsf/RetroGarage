import * as service from './cart.service';

export async function getCart(req, res) {
    const cart = await service.getCart(1);

    res.json(cart);
}

export async function addToCart(req, res) {
    const { product_id, quantity } = req.body;

    await service.addToCart(1, product_id, quantity);

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