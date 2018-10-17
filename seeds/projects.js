
exports.seed = function(knex, Promise) {
  return knex('userprojects').del()
    .then(function () {
      return knex('userprojects').insert([
        {
          id: 0,
          creator: 'Borra',
          bio: 'The hello world of 3d models, there are many teapots in the world, but this one is mine, it is nothing without me and I am nothing without it',
          name: 'Teapot',
          image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1526536957/example3.png',
          file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FAsian_Tea_Set.zip?alt=media&token=a8c5b191-d028-46ba-93c0-9903cfe1b36e',
          downloads: 3,
       },
       {
         id: 1,
         creator: 'Borra',
         bio: 'You play as Machine Head going super fast down a highway. It ain\'t the prettiest game, but going at ludicrous speed and being inches away from death is always fun',
         name: 'Highway Star',
         image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1526537315/Screenshot03.jpg',
         file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FTest%201.rar?alt=media&token=bd0680fa-8935-474d-83e9-31acdf1d1f86',
         downloads: 2,
      },
      {
        id: 2,
        creator: 'Vandalf',
        bio: 'It\'s about a lazer dragon, and is ultimately a coming of age story inspired by Dune written from a second person point of view using Josh Sawyer\'s method of choice architecture',
        name: 'quick story I wrote',
        image: 'https://res.cloudinary.com/dypztrtsq/image/upload/v1526536951/example2.jpg',
        file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FLazerDragon.odt?alt=media&token=3edd5009-3ba8-4a26-bba0-b85960655e02',
        downloads: 0,
     },
      ]);
    });
};
