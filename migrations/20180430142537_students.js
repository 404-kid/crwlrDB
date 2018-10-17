
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', function(users) {
        users.increments('id')
        users.string('username')
        users.string('regularname')
        users.string('email')
        users.string('password')
        users.string('bio')
        users.string('image')
        users.string('band')
      })
    ])
  };

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('users')
    ])
};
