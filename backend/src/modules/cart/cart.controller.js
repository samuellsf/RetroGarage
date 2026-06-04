import * as service from './cart.service.js';

export async function getCart(req, res, next) {
    try {    
    
        const cart = await service.getCart(req.user.id);

        res.json(cart);
    
    } catch (error) {

        next(error);

    }
};

export async function addToCart(req, res, next) {
    try {
        
        const { product_id, quantity } = req.body;

        await service.addToCart(req.user.id, product_id, quantity);

        res.status(201).json({
            message: 'Produto Adicionado'
        });

    } catch (error) {

        next(error);

    }
};

export async function removeFromCart(req, res, next) {
    try {

        await service.removeFromCart(req.params.id);

        res.json({
            message: 'Produto Removido'
        });
    
    } catch (error) {

        next(error);
        
    } 
};