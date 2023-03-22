const Router = require('koa-router');

const addOnRoutes = require('./add-on');
const userAddOnRoutes = require('./user-add-on');

const router = new Router({ prefix: '/api' });

router.use(addOnRoutes);
router.use(userAddOnRoutes);

module.exports = router.routes();
