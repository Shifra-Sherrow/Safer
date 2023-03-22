exports.up = knex => {
  return knex.schema.createTable('add_on', t => {
    t.uuid('id').primary().default(knex.raw('gen_random_uuid()'));
    t.timestamps(true, true);
    t.datetime('deleted_at');
    t.string('name');
    t.text('description');
    t.float('price', 10, 2);;
    t.string('color');
    t.specificType('advantages', 'TEXT[]');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('add_on');
};
