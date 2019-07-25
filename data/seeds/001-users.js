const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "ring_bearer",
          name: "Frodo Baggins",
          email: "ring_bearer@the_fellowship.com",
          password: bcrypt.hashSync("pass", 14)
        },
        {
          username: "the_grey",
          name: "Gandalf",
          email: "that_wizard@the_fellowship.com",
          password: bcrypt.hashSync("pass", 14)
        }
      ]);
    });
};
