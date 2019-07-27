module.exports = {
  simpleUserInfoExists: require("./validation/requestBodyValidation/simpleUserInfoExists"),
  complexUserInfoExists: require("./validation/requestBodyValidation/complexUserInfoExists"),
  usernameUnique: require("./validation/uniquenessValidation/usernameUnique"),
  restricted: require("./auth/restricted"),
  userHabitBody: require("./validation/requestBodyValidation/userHabitBody"),
  categoryBody: require("./validation/requestBodyValidation/categoryBody"),
  habitBody: require("./validation/requestBodyValidation/habitBody"),
  categoryUnique: require("./validation/uniquenessValidation/categoryUnique"),
  userHabitAndCategoryUnique: require("./validation/uniquenessValidation/userHabitAndCategoryUnique")
};
