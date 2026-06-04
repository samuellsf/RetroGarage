import express from 'express';
import {
    createOrder,
    getOrders,
    getOrderById
} from './order.controller.js';
import { auth } from '../../middlewares/auth.middleware.js';


const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getOrders);
router.get('/:id', auth, getOrderById);

export default router;