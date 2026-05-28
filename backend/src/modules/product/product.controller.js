import * as service from './product.service.js';

/**
 * Lista todos os produtos cadastrados.
 * 
 * Fluxo:
 * Route-> Controller -> Service -> Model -> Database
 */
export async function getProducts(req, res) {
  const products = await service.getProducts();

  res.json(products);
}