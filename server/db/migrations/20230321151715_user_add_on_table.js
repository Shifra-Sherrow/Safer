exports.up = knex => {
  return knex.schema.createTable('user_add_on', t => {
    t.uuid('id').primary().default(knex.raw('gen_random_uuid()'));
    t.timestamps(true, true);
    t.datetime('deleted_at');
    t.string('user_id');
    t.uuid('add_on_id').references('add_on.id').onDelete('RESTRICT').onUpdate('RESTRICT');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user_add_on');
};
