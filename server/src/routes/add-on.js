const Router = require('koa-router');
const router = new Router({ prefix: '/add-on' });

const AddOnCtrl = require('../controllers/add-on');

router.get('/', AddOnCtrl.list);

module.exports = router.routes();
