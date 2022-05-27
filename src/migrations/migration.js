import Database from '../db/database.js'

async function up() {
  const db = await Database.connect();

  await db.run(`
    CREATE TABLE IF NOT EXISTS domain (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      domain TEXT(12)
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS pass (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pass TEXT(20),
      type_data TEXT(10)
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS email (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT(30),
      domain_domain TEXT(10),
      FOREIGN KEY (domain_domain) REFERENCES domain (domain)
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS cpf (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cpf TEXT(20),
      type_data TEXT(10)
    )
  `);
};

export default { up };