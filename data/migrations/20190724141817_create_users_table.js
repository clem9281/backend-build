exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username")
      .notNullable()
      .unique();
    tbl
      .string("email")
      .notNullable()
      .unique();
    tbl.string("name").notNullable();
    tbl.string("password").notNullable();
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
