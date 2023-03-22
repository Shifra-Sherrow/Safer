const { Model } = require('objection');

class UserAddOn extends Model {

  static get tableName() {
    return 'user_add_on';
  }

  toBody() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
      addOnId: this.addOnId
    };
  }

  static async getByUser(userId) {
    try {
      const userAddOns = await UserAddOn.knex().raw(`
        SELECT user_add_on.id,
               add_on.id AS "addOnId", add_on.name, add_on.description, add_on.price, add_on.color, add_on.advantages
        FROM add_on JOIN user_add_on
          ON add_on.id = user_add_on.add_on_id
        WHERE add_on.deleted_at IS NULL
          AND user_add_on.deleted_at IS NULL
          AND user_add_on.user_id = :userId`, { userId });

      return userAddOns.rows;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get add-ons by user');
    }
  }

  static async one(conditionObj) {
    try {
      return await UserAddOn.query().findOne(conditionObj);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get user add-on');
    }
  }

  static async create(data) {
    try {
      const userAddOn = await UserAddOn.query().insertGraphAndFetch(data);
      return userAddOn.toBody();
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create user add-on');
    }
  }

  static async delete(id) {
    try {
      return await UserAddOn.query().patch({ deletedAt: new Date().toISOString() }).where({ id });
    } catch (err) {
      console.error(err);
      throw new Error('Failed to delete user add-on');
    }
  }

}

module.exports = UserAddOn;
