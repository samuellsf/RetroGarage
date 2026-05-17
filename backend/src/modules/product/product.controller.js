import * as service from './product.service.js';

export async function getProducts(req, res) {
  const products = await service.getProducts();

  res.json(products);
}