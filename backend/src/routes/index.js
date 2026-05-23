import express from 'express';

import productRoutes from '../modules/product/product.routes.js';
import categoryRoutes from '../modules/category/category.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';
import cartRoutes from '../modules/cart/cart.routes.js';
import orderRoutes from '../modules/order/order.routes.js';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/auth', authRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);

export default router;