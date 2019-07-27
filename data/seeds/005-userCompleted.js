const moment = require("moment");

exports.seed = function(knex) {
  return knex("userCompleted").insert([
    { userHabit_id: 1, completed_date: moment().format("YYYY-M-D") },
    { userHabit_id: 3, completed_date: moment().format("YYYY-M-D") }
  ]);
};
