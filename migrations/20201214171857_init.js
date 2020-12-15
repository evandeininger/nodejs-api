
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()

    table.string('name', 200).notNullable()
		table.integer('age').unsigned().notNullable()
	})
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
