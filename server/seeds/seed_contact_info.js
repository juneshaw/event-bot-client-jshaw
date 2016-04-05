
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('contact_info').del(),

    // Inserts seed entries
    knex('contact_info').insert({id: 1,
      location_id: 1,
      email: 'june.shaw@me.com',
      phone: '3037264083'}),
    knex('contact_info').insert({id: 2,
      location_id: 2,
      email: 'june.shaw@me.com',
      phone: '3037264083'}),
    knex('contact_info').insert({id: 3,
      location_id: 3,
      email: 'june.shaw@me.com',
      phone: '3037264083'})
  );
};
