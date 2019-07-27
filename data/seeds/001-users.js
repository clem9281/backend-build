const bcrypt = require("bcryptjs");
const moment = require("moment");
exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "ring_bearer",
      name: "Frodo Baggins",
      email: "ring_bearer@the_fellowship.com",
      password: bcrypt.hashSync("pass", 14),
      created_at: moment("2019-06-26").format()
    },
    {
      username: "the_grey",
      name: "Gandalf",
      email: "that_wizard@the_fellowship.com",
      password: bcrypt.hashSync("pass", 14),
      created_at: moment("2019-06-26").format()
    }
  ]);
};
