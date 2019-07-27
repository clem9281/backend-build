exports.seed = function(knex) {
  return knex("habits").insert([
    { habit_name: "get to mordor" },
    { habit_name: "destroy the ring" },
    { habit_name: "try not to kill pippin" },
    { habit_name: "call eagles" }
  ]);
};
