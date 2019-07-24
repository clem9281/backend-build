exports.up = function(knex) {
  return knex.schema.createTable("userHabits", tbl => {
    tbl.increments();
    tbl.timestamps();
    tbl
      .integer("habit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("habits")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("userHabits");
};
