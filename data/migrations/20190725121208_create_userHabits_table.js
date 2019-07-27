exports.up = function(knex) {
  return knex.schema.createTable("userHabits", tbl => {
    tbl.increments();
    tbl.timestamps(false, true);
    tbl
      .integer("habit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("habits")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.unique(["habit_id", "user_id", "category_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("userHabits");
};
