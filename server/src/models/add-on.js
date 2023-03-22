const { Model } = require('objection');

class AddOn extends Model {

  static get tableName() {
    return 'add_on';
  }

  toBody() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this.name,
      description: this.description,
      price: this.price,
      color: this.color,
      advantages: this.advantages
    };
  }

  static async list() {
    try {
      const addOns = await AddOn.query().where({ deletedAt: null });
      return addOns.map(addOn => addOn.toBody());
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get add-ons');
    }
  }

}

module.exports = AddOn;
