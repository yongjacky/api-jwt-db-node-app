// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'api_jwt_db_node_app',
    user:     'postgres',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
