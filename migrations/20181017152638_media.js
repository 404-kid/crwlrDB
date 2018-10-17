exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('media', function(media) {
        media.increments('id')
        media.string('creatorid')
        media.string('cost')
        media.string('file')
        media.string('location')
        media.integer('purchases')
      })
    ])
  };

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('media')
    ])
};
