import db  from '../../config/db.js';

export async function findaAll() {
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