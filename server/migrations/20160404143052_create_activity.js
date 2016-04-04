exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity', function(table){
    table.increments('id');
    table.string('name');
    table.integer('custom_category_id');
    table.integer('category_id');
    table.date('date');
    table.time('time');
    table.location_id('location_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activity');
};
