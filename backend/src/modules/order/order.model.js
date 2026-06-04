import db from '../../config/db.js';

export async function create(userId, total) {
    const [result] = await db.query(
        'INSERT INTO orders (user_id, total) VALUES (?, ?)', 
        [userId, total]
    );

    return result;
}

export async function findAll() {
    const [rows] = await db.query(
        'SELECT * FROM orders'
    );

    return rows;
}

export async function findById(id) {
    const [rows] = await db.query(
        'SELECT * FROM orders WHERE id = ?',
        [id]
    );

    return rows;
}

