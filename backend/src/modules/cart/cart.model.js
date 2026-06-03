import db from '../../config/db.js';

export async function findByUser(userId) {
    const [rows] = await db.query(
        'SELECT cart_items.id, product.name, product.price, cart_items.quantity FROM cart_items JOIN products ON products.id = cart_item.product_id WHERE cart_items.user_id = ?', [userId]
    );

    return rows;
}

export async function create(userId, productId, quantity) {
    const [result] = await db.query(
        'INSERT INTO cart_items (user_id, product_id, qunatity) VALUES (?, ?, ?)',
        [userId, productId, quantity]
    );
    return result;
}

export async function remove(id) {
    cosnt [result] = await db.query(
        'DELETE FROM cart_items WHERE id = ?',
        [id]
    );
    return result;
}
