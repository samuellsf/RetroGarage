import db from '../../config/db.js';

export async function createUser(name, email, password) {
    console.log(name,email, password)
    const [result] = await db.query(
        'INSERT INTO users(name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );

    return result;
}

export async function findUserByEmail(email) {
    const [rows] = await db.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    return rows[0];
}