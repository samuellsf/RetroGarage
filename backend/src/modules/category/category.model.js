import db from '../../config/db.js';

export async function findAll() {
    const [rows] = await db.query(
        'SELECT * FROM categorias'
    );

    return rows;
}