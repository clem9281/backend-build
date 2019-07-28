const userDb = require("../../../usersAuth/userModel");

module.exports = async (req, res, next) => {
  const id = req.userId;
  const { email } = req.body;
  try {
    const user = await userDb.findBy({ email });
    // we want to use this same middleware for POST and PUT. So if the email exists, but it belongs to the current user, go ahead and let them pass. Otherwise stop them here
    if (user && user.id !== id) {
      res.status(400).json({
        errorMessage: "We already have an account with that email address"
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong when validating your email adress"
    });
  }
};
