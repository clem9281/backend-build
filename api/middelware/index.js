module.exports = {
  loginUserInfoExists: require("./validation/requestBodyValidation/loginUserInfoExists"),
  registerUserInfoExists: require("./validation/requestBodyValidation/registerUserInfoExists"),
  usernameUnique: require("./validation/uniquenessValidation/usernameUnique"),
  restricted: require("./auth/restricted"),
  userHabitBody: require("./validation/requestBodyValidation/userHabitBody"),
  categoryBody: require("./validation/requestBodyValidation/categoryBody"),
  habitBody: require("./validation/requestBodyValidation/habitBody"),
  categoryUnique: require("./validation/uniquenessValidation/categoryUnique"),
  userHabitAndCategoryUnique: require("./validation/uniquenessValidation/userHabitAndCategoryUnique"),
  completedHabit: require("./validation/requestBodyValidation/completedHabit"),
  emailUnique: require("./validation/uniquenessValidation/emailUnique"),
  simpleUserInfoExists: require("./validation/requestBodyValidation/simpleUserInfoExists")
};
