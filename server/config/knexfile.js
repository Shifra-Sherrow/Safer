const { knexSnakeCaseMappers } = require('objection');

const addonDB = 'postgres://postgres:1234@localhost/addon_localhost';

const knexConfig = {
  client: 'postgresql',
  connection: addonDB,
  pool: {
    min: 2,
    max: 10
  },
  ...knexSnakeCaseMappers(),
  migrations: {
    directory: '../db/migrations'
  }
};

module.exports = knexConfig;
