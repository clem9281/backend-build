exports.seed = function(knex) {
  return knex("categories").insert([
    { category_name: "physical wellness" },
    { category_name: "education" },
    { category_name: "relationships" },
    { category_name: "spirituality" }
  ]);
};
