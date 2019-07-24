
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
      tbl.timestamps();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
