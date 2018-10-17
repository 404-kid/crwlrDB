
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 0,
          username: 'Job Smith',
          email: 'Jobsmith9@gmail.com',
          password: 'P7sm0njx',
          bio: 'this is a test 1',
          image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1525729406/vnomhdwofqlocn5g4foz.jpg',
          location: 'Denver,CO',
       },
       {
         id: 1,
         username: 'Sob Jmith',
         email: 'sobjmith@gmail.com',
         password: 'P7sm0njx',
         bio: 'this is a test 2',
         image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1526327266/32072661_2026679544326581_3949229592677449728_n.jpg',
         location: 'Denver,CO',
       },
      ]);
    });
};
