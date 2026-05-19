import * as model from './product.model.js';

export function getProducts() {
  return model.findAll();
}