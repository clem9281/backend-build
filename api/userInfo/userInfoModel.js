const db = require("../../data/dbConfig");

module.exports = {
  getUserInfo
};

function getUserInfo(filter) {
  console.log(filter);
  return db("users")
    .where(filter)
    .select("id", "username", "name", "email")
    .first();
}
