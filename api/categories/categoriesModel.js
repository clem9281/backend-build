const db = require("../../data/dbConfig");

module.exports = {
  findCategoryBy,
  addCategory,
  findCategories,
  findUserCategoriesBy
};

function findCategories() {
  return db("categories");
}

function findCategoryBy(filter) {
  return db("categories")
    .where(filter)
    .first();
}

function addCategory(newCategory) {
  return db("categories")
    .insert(newCategory, "id")
    .then(() => findCategories());
}

function findUserCategoriesBy(filter) {
  return db("userHabits")
    .join("categories", "categories.id", "userHabits.category_id")
    .distinct("categories.id", "category_name")
    .where(filter);
}
