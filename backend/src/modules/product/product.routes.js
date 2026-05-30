import express from 'express';
import {
    getProducts,
    getProductById,
    getProductBycategory,
    createProduct,
    deleteProduct
} from './product.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/category/:id', getProductBycategory);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

export default router;