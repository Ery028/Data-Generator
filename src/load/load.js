import Migration from '../migrations/migration.js';

async function load() {
  await Migration.up();
}

load();