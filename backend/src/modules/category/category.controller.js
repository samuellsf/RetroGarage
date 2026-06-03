import * as service from './category.service.js';

export async function getCategories(req, res) {
    const categories = await service.getCategories();

    res.json(categories);
}