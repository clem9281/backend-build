exports.up = function(knex) {
  return knex.schema.createTable("habits", tbl => {
    tbl.increments();
    tbl
      .string("habit_name")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("habits");
};
