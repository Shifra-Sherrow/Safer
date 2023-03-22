const Router = require('koa-router');
const router = new Router({ prefix: '/user-add-on' });
const koaBody = require('koa-body')();

const UserAddOnCtrl = require('../controllers/user-add-on');

router.get('/by-user/:userId', UserAddOnCtrl.getByUser);

router.post('/', koaBody, UserAddOnCtrl.create);

router.delete('/:id', UserAddOnCtrl.delete);

module.exports = router.routes();
