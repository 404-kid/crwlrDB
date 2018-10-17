exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('userprojects', function(userprojects) {
        userprojects.increments('id')
        userprojects.string('creator')
        userprojects.string('bio')
        userprojects.string('name')
        userprojects.string('image')
        userprojects.string('file')
        userprojects.integer('downloads')
      })
    ])
  };

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('userprojects')
    ])
};
