import express from 'express';
import cors from 'cors';
import { notFound } from './middlewares/notFound.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import routes from './routes/index.js';
import logger from './middlewares/logger.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "RetroGarage API"
    });
});

app.use(logger)

app.use('/api', routes);

app.use(notFound);

app.use(errorHandler);

export default app;