const knexConfig = require('../config/knexfile');
const knex = require('knex')(knexConfig);
const { Model } = require('objection');
Model.knex(knex);

const Koa = require('koa');
const session = require('koa-session');
const cors = require('koa2-cors');
const { createServer } = require('http');
const app = new Koa();
app.proxy = true;
const httpServer = createServer(app.callback());

const apiRoutes = require('./routes');

app.use(cors({ credentials: true }));
app.use(session(app));
app.use(apiRoutes);

const port = process.env.PORT || 3030;
const server = httpServer.listen(port, _ => console.log(`Server running on port ${port}.....`));

module.exports = server;
