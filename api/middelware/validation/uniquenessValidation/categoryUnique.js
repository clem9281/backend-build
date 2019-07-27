const categoryDb = require("../../../categories/categoriesModel");

module.exports = async (req, res, next) => {
  const { category_name } = req.body;
  try {
    const category = await categoryDb.findCategoryBy({ category_name });
    console.log(category);
    if (category) {
      res.status(400).json({
        errorMessage:
          "Bad request: that category already exists and cannot be added"
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong when validating that category."
    });
  }
};
