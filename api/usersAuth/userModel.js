const db = require("../../data/dbConfig");

module.exports = { findBy, add, findInfoBy };

// RETURNS INFO WITH PASSWORD DON'T RETURN TO CLIENT

// return user object if exists, if not returns undefined
function findBy(filter) {
  console.log(filter);
  return db("users")
    .where(filter)
    .first();
}

// THESE HELPERS WON'T RETURN THE PASSWORD AND ARE SAFE TO RETURN TO CLIENT

// return user object if exists, if not returns undefined
function findInfoBy(filter) {
  console.log(filter);
  return db("users")
    .select("id", "username", "name")
    .where(filter)
    .first();
}

// add the new user and return the newly created record
function add(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => findInfoBy({ id }));
}
