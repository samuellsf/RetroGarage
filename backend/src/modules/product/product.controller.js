import * as service from './product.service.js';

/**
 * Lista todos os produtos cadastrados.
 * 
 * Fluxo:
 * Route-> Controller -> Service -> Model -> Database
 */
export async function getProducts(req, res, next) {
  
  try {

    const products = await service.getProducts();

    res.json(products);

  } catch (error) {

      next(error);

  }

};

export async function getProductById(req, res, next) {
  try {

    const product = await service.getProductById(req.params.id);

    if(!product) {
      return res.status(404).json({
        error: 'Produto nao encontrado',
      });
    };

    res.json(product);

  } catch (error) {

    next(error);

  }
};

export async function getProductBycategory(req, res, next) {
  try {

    const product = await service.getProdutsByCategory(req.params.id);

    res.json(product);

  } catch (error) {

    next(error);

  }
};

export async function createProduct(req, res, next) {
  try {

    const result = await service.createProduct(req.body);

    res.status(201).json({
      message: 'Produto criado',
    });

  } catch (error) {

    next(error);

  }
};

export async function deleteProduct(req, res, next) {
  try {

    await service.deleteProduct(req.params.id);

    res.json({
      message: 'Produto removido'
    });

  } catch (error) {

    next(error);
    
  }
};