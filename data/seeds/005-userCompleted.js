const moment = require("moment");

exports.seed = function(knex) {
  return knex("userCompleted").insert([
    { userHabit_id: 1, completed_date: moment().format("YYYY-M-D") },
    {
      userHabit_id: 1,
      completed_date: moment("2019-06-30").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-05").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-10").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-11").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-18").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-20").format("YYYY-M-D")
    },
    {
      userHabit_id: 1,
      completed_date: moment("2019-07-21").format("YYYY-M-D")
    },
    { userHabit_id: 1, completed_date: moment("2019-23-07").format("YYYY-M-D") }
  ]);
};
