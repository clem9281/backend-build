module.exports = {
  validateSimpleUserInfoExists: require("./validation/requestBodyValidation/validateSimpleUserInfoExists"),
  validateComplexUserInfoExists: require("./validation/requestBodyValidation/validateComplexUserInfoExists"),
  validateUsernameUnique: require("./validation/uniquenessValidation/validateUsernameUnique"),
  restricted: require("./auth/restricted"),
  validateUserHabitBody: require("./validation/requestBodyValidation/validateUserHabitBody"),
  validateCategoryBody: require("./validation/requestBodyValidation/validateCategoryBody"),
  validateHabitBody: require("./validation/requestBodyValidation/validateHabitBody")
};
