const express = require("express");
const categoriesDb = require("./categoriesModel");
const { categoryBody } = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const categories = await categoriesDb.findCategories();
      res.status(200).json(categories);
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong getting the categories" });
    }
  })
  .post(categoryBody, async (req, res) => {
    const user_id = req.userId;
    const newCategoryInfo = req.body;
    try {
      const categories = await categoriesDb.addCategory(newCategoryInfo);
      res.status(201).json(categories);
    } catch (error) {
      res.status(500).json({
        errorMessage: "Something went wrong when adding the category"
      });
    }
  });

router.route("/user").get(async (req, res) => {
  const user_id = req.userId;
  try {
    const categories = await categoriesDb.findUserCategoriesBy({ user_id });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong getting the categories for that user"
    });
  }
});

module.exports = router;
