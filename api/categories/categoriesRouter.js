const express = require("express");
const categoriesDb = require("./categoriesModel");
const { categoryBody, categoryUnique } = require("../middelware");

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
  .post(categoryBody, categoryUnique, async (req, res) => {
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

/**
 * @api {get} /api/caetgories Get All Categories
 * @apiVersion 1.0.0
 * @apiName GetCategories
 * @apiGroup Categories
 * @apiExample Request
 *      axios.get('/api/categories');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess (Success 200) {Array} CategoryArray Array of category objects, each object has category_name property and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 * [
 *    {
 *       "id": 1,
 *       "category_name": "Education",
 *     },
 *      {
 *       "id": 2,
 *       "habit_name": "Don't put on the ring",
 *     },
 * ]
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong getting the list of categories.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting the list of categories"
 *     }
 */

/**
 * @api {get} /api/categories/user Get User Categories
 * @apiVersion 1.0.0
 * @apiName GetUserCategories
 * @apiGroup Categories
 * @apiExample Request
 *      axios.get('/api/categories/user');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess (Success 200) {Array} CategoryArray Array of category objects that belongs to the use, each object has category_name and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 * [
 *    {
 *       "id": 1,
 *       "category_name": "Fitness"
 *     },
 *      {
 *       "id": 2,
 *       "category_name": "Spirituality"
 *     },
 * ]
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong getting the categories for that user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting the categories for that user"
 *     }
 */

/**
 * @api {post} /api/categories Post New Category
 * @apiVersion 1.0.0
 * @apiName PostCategory
 * @apiGroup Categories
 * @apiExample Request
 *        axios.post('/api/categories', {category_name: "fitness"});
 * @apiHeader (token) {json} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} category_name The name of the category you want to add
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "category_name": "Fitness"
 *     }
 * @apiSuccess (Success 200) {Array} CategoryArray Array of category objects, including the new category, each object has category_name property and id
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
 *        {
 *          "id": 1,
 *          "category_name": "Fitness"
 *        },
 *        {
 *          "id": 2,
 *          "category_name": "Spirituality"
 *        },
 *      ]
 *
 * @apiError (4xx) BadRequest: Either the category name is not unique or you don't have the category_name property on the request
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad Request: Please include the category_name of the category you want to add."
 *     }
 
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: that category already exists and cannot be added"
 *     }
 * 
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong adding the category.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when adding the category"
 *     }
 */
