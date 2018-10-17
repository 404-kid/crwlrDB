
exports.seed = function(knex, Promise) {
  return knex('media').del()
    .then(function () {
      return knex('media').insert([
        {
          id: 0,
          creatorid: '0',
          cost: '4',
          file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FAsian_Tea_Set.zip?alt=media&token=a8c5b191-d028-46ba-93c0-9903cfe1b36e',
          location: 'Denver,CO',
          purchases: 3,
       },
       {
         id: 1,
         creatorid: '0',
         cost: '4',
         file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FTest%201.rar?alt=media&token=bd0680fa-8935-474d-83e9-31acdf1d1f86',
         location: 'Denver,CO',
         purchases: 2,
      },
      {
        id: 2,
        creatorid: '1',
        cost: '2',
        file: 'https://firebasestorage.googleapis.com/v0/b/test-project-1d5da.appspot.com/o/creations%2FLazerDragon.odt?alt=media&token=3edd5009-3ba8-4a26-bba0-b85960655e02',
        location: 'San Diego,CA',
        purchases: 0,
     },
      ]);
    });
};
