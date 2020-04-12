
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {car_name: 'Ferrari', website: 'www.Ferrari.com'},
        {car_name: 'LexusIFA', website: 'www.Lexus'}
      ]);
    });
};
