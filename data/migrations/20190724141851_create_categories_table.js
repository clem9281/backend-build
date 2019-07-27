exports.up = function(knex) {
  return knex.schema.createTable("categories", tbl => {
    tbl.increments();
    tbl
      .string("category_name")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("categories");
};
