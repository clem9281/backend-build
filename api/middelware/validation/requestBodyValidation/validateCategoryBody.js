module.exports = (req, res, next) => {
  const { category_name } = req.body;
  if (!category_name) {
    res.status(400).json({
      errorMessage:
        "Please include the category_name of the category you want to add."
    });
  } else {
    next();
  }
};
