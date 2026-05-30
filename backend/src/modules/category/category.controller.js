import * as service from './category.service.js';

export function getCategories(req, res) {
    const categories= await service.getCategories();

    res.json(categories);
}