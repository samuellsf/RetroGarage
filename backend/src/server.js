import pool from './config/db.js';
import app from './app.js';


app.listen(3000, () => {
  console.log('sv rodando na porta 3000')
})