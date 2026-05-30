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
};

export async function getProductById(req, res) {
  const product = await service.getProductById(req.params.id);

  if(!product) {
    return res.status(404).json({
      error: 'Produto nao encontrado',
    });
  };

  res.json(product);
};

export async function getProductBycategory(req, res) {
  const product = await service.getProdutsByCategory(req.params.id);

  res.json(product);
};

export async function createProduct(req, res) {
  const result = await service.createProduct(req.body);

  res.status(201).json({
    message: 'Produto criado',
  });
};

export async function deleteProduct(req, res) {
  await service.deleteProduct(req.params.id);

  res.json({
    message: 'Produto removido'
  });
};