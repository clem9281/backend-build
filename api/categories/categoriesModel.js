const db = require("../../data/dbConfig");

module.exports = { findCategoryBy };

function findCategoryBy(filter) {
  return db("categories")
    .where(filter)
    .first();
}
