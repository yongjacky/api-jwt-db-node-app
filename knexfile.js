// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PWD
  },
  pool: {
    min: process.env.DB_CONN_POOL_MIN,
    max: process.env.DB_CONN_POOL_MAX
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
