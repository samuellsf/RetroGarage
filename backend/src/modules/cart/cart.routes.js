import express from 'express';
import { auth } from '../../middlewares/auth.middleware.js';
import{
    getCart,
    addToCart,
    removeFromCart
} from './cart.controller.js';

const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addToCart);
router.delete('/:id', auth, removeFromCart);

export default router;