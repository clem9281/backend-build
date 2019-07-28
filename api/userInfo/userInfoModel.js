const db = require("../../data/dbConfig");

module.exports = {
  getUserInfo,
  updateUser,
  deleteUser
};

function getUserInfo(filter) {
  console.log(filter);
  return db("users")
    .where(filter)
    .select("id", "username", "name", "email")
    .first();
}

async function updateUser(info, id) {
  const count = await db("users")
    .where({ id })
    .update(info);
  if (count) {
    return getUserInfo({ id });
  } else {
    return null;
  }
}

async function deleteUser(id) {
  const count = await db("users")
    .where({ id })
    .del();
  if (count) {
    return count;
  } else {
    return null;
  }
}
