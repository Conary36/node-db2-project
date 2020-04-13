
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('car_name', 128)
         .notNullable();
      tbl.text('vin', 11).unique().notNullable();
      tbl.text('model', 128).notNullable();
      tbl.decimal('mileage', 8,null).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
