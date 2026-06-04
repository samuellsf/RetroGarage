import db  from '../../config/db.js';

export async function findAll() {
  const [rows] = await db.query('SELECT * FROM products');
};

export async function findById(id) {
  const [rows] = await db.query(
    'SELECT * FROM products WHERE id = ?',
    [id]);
    return rows[0];
  };

export async function findByCategory(categoryId) {
  const [rows] = await db.query(
    'SELECT * FROM products WHERE category_id = ?',
    [categoryId]
  );
  return rows;
};

export async function create(product) {
  const { name, description, price, stock, image, category_id } = product

  const [result] = await db.query(
    `INSERT INTO products
    (name, description, price, stock, image, category_id)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [name, description, price, stock, image, category_id]
  );
  return result;
};

export async function remove(id) {
  cons [result] = await db.query(
    'DELETE FROM products WHERE id = ?',
    [id]
  );

  return result;
}