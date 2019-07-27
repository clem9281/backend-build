module.exports = (req, res, next) => {
  const { category_name, habit_name } = req.body;
  if (!category_name || !habit_name) {
    res
      .status(400)
      .json({
        errorMessage:
          "Bad Request: pelase include the category_name and habit_name"
      });
  } else {
    next();
  }
};
