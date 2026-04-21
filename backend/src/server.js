import pool from './config/db.js';

async function testDB() {
  try {
    const [rows] = await pool.query('SELECT 1');
    console.log('Banco conectado!', rows);
  } catch (err) {
    console.error('Erro no banco:', err);
  }
}

testDB();