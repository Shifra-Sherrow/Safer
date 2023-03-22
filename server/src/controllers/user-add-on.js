const _ = require('lodash');

const UserAddOn = require('../models/user-add-on');

class UserAddOnCtrl {

  static async getByUser(ctx) {
    try {
      const { userId } = _.get(ctx, 'params');
      ctx.body = await UserAddOn.getByUser(userId);
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

  static async create(ctx) {
    try {
      const data = _.get(ctx, 'request.body', {});
      const existingUserAddOn = await UserAddOn.one({ ...data, deletedAt: null });

      ctx.body = existingUserAddOn || await UserAddOn.create(data);
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

  static async delete(ctx) {
    try {
      const { id } = _.get(ctx, 'params');
      ctx.body = await UserAddOn.delete(id);
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

}

module.exports = UserAddOnCtrl;
