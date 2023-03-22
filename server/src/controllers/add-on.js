const AddOn = require('../models/add-on');

class AddOnCtrl {

  static async list(ctx) {
    try {
      ctx.body = await AddOn.list();
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

}

module.exports = AddOnCtrl;
