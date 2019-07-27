const db = require("../../data/dbConfig");

module.exports = { findHabitsBy, add };

function findHabitsBy(filter) {
  return db("habits")
    .where(filter)
    .first();
}

function add(habit) {
  return db("habits")
    .insert(habit)
    .then(([id]) => findHabitsBy({ id }));
}
