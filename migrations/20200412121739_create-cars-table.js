
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('car_name', 128)
         .unique()
         .notNullable()
      tbl.text('website')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
