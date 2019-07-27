exports.up = function(knex) {
  return knex.schema.createTable("userCompleted", tbl => {
    tbl.increments();
    tbl.date("completed_date").notNullable();
    tbl
      .integer("userHabit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("userHabits")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.unique(["completed_date", "userHabit_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("userCompleted");
};
