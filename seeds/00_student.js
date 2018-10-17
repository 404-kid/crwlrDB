
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 0,
          username: 'Borra',
          regularname: 'Job',
          email: 'Jobsmith9@gmail.com',
          password: 'P7sm0njx',
          bio: 'I love games and all their possible applications, I want to foster this new medium and its growth',
          image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1525729406/vnomhdwofqlocn5g4foz.jpg',
          band: 'the acid boys',
       },
       {
         id: 1,
         username: 'Vandalf',
         regularname: 'Job',
         email: 'Jobsmith9@gmail.com',
         password: 'P7sm0njx',
         bio: 'I am van that likes to make stories',
         image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1526327266/32072661_2026679544326581_3949229592677449728_n.jpg',
         band: 'the acid boys',
       },
      ]);
    });
};
