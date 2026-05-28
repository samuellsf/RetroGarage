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


/**
 * params: name, description, price, stock, image(caminho da imagem), category_id 
 * Seguir essa ordem!!
 */
export function createProduct(data) {
  return model.create(data);
};

export function deleteProduct(id) {
  return model.remove(id);
};