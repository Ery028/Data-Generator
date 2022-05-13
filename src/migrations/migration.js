import Database from '../db/database.js'

async function up() {

  const sql1 = `
    CREATE TABLE pass (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Pass TEXT(20)
    )
  `;

  const sql2 = `
    CREATE TABLE email (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Email TEXT(30)
    )
  `;

  const sql3 = `
    CREATE TABLE cpf (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Cpf TEXT(20)
    )
  `;

  const db = await Database.connect();

  db.run(sql1);
  db.run(sql2);
  db.run(sql3);
};

export default { up };