import * as service from './category.service.js';

export async function getCategories(req, res, next) {
    try {

        const categories = await service.getCategories();

        res.json(categories);
    
    } catch (error) {

        next(error);
    
    }
};