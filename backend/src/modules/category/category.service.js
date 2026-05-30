import * as model from './category.model.js';

export function getCategories() {
    return model.findAll();
}