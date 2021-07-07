
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {car_name: 'Ferrari', vin: '123fh79gh9g', model: 'Enzo', mileage: 89456.88}
        
      ]);
    });
};
