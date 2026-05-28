import * as model from './product.model.js';

export function getProducts() {
  return model.findAll();
};

export function getProductById(id) {
  return model.findById(id);
};

export function getProdutsByCategory(id) {
  return model.findByCategory(id);
};

export function createProduct(data) {
  return model.create(data);
};

export function deleteProduct(id) {
  return model.remove(id);
};