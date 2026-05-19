import express from 'express';
import productRoutes from './modules/product/product.routes.js';

const app = express();

// middleware para JSON
app.use(express.json());

// rotas
app.use('/api/products', productRoutes);

export default app;