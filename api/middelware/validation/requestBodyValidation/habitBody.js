module.exports = (req, res, next) => {
  const { habit_name } = req.body;
  if (!habit_name) {
    res.status(400).json({
      errorMessage:
        "Please include a habit_name for the habit you would like to add"
    });
  } else {
    next();
  }
};
