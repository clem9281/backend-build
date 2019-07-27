module.exports = {
  validateSimpleUserInfoExists: require("./auth/validateSimpleUserInfoExists"),
  validateComplexUserInfoExists: require("./auth/validateComplexUserInfoExists"),
  validateUsernameUnique: require("./auth/validateUsernameUnique"),
  restricted: require("./auth/restricted"),
  validateUserHabitBody: require("./userHabits/validateUserHabitBody")
};
