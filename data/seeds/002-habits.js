exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("habits")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("habits").insert([
        { habit_name: "get to mordor" },
        { habit_name: "destroy the ring" },
        { habit_name: "try not to kill pippin" },
        { habit_name: "call eagles" }
      ]);
    });
};
