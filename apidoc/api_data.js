define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_clem9_Documents_Projects_backend_build_apidoc_main_js",
    "groupTitle": "C__Users_clem9_Documents_Projects_backend_build_apidoc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_clem9_Documents_Projects_backend_build_doc_main_js",
    "groupTitle": "C__Users_clem9_Documents_Projects_backend_build_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/habits",
    "title": "Get All Categories",
    "name": "GetCategories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CategoryArray",
            "description": "<p>Array of category objects, each object has category_name property and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    200 OK\n[\n   {\n      \"id\": 1,\n      \"category_name\": \"Education\",\n    },\n     {\n      \"id\": 2,\n      \"habit_name\": \"Don't put on the ring\",\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the list of categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong getting the list of habits\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/categories/categoriesRouter.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/user",
    "title": "Get User Categories",
    "name": "GetUserCategories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CategoryArray",
            "description": "<p>Array of category objects that belongs to the use, each object has category_name and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    200 OK\n[\n   {\n      \"id\": 1,\n      \"category_name\": \"Fitness\"\n    },\n     {\n      \"id\": 2,\n      \"category_name\": \"Spirituality\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the categories for that user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong getting the categories for that user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/categories/categoriesRouter.js",
    "groupTitle": "Categories"
  },
  {
    "type": "post",
    "url": "/api/categories",
    "title": "Post New Category",
    "name": "PostCategory",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>The name of the category you want to add</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body-Example:",
          "content": "{\n  \"category_name\": \"Fitness\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CategoryArray",
            "description": "<p>Array of category objects, including the new category, each object has category_name property and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK\n[\n   {\n     \"id\": 1,\n     \"category_name\": \"Fitness\"\n   },\n   {\n     \"id\": 2,\n     \"category_name\": \"Spirituality\"\n   },\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequest:",
            "description": "<p>Either the category name is not unique or you don't have the category_name property on the request</p>"
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad Request: Please include the category_name of the category you want to add.\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad request: that category already exists and cannot be added\"\n}",
          "type": "json"
        },
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong when adding the habit\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/categories/categoriesRouter.js",
    "groupTitle": "Categories"
  },
  {
    "type": "delete",
    "url": "/api/completed-today",
    "title": "Mark a User Habit as NOT Completed Today",
    "name": "DeleteCompletedHabits",
    "group": "CompletedHabits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "habit_id",
            "description": "<p>The id of the habit you would like to mark complete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body-Example:",
          "content": "{\n  \"habit_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CompletedArray",
            "description": "<p>Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK\n[\n    {\n      \"id\": 1,\n      \"habit_id\": 1,\n      \"habit_name\": \"get to mordor\",\n      \"category_name\": \"physical wellness\",\n      \"completed\": false\n    },\n    {\n      \"id\": 2,\n      \"habit_id\": 2,\n      \"habit_name\": \"destroy the ring\",\n      \"category_name\": \"spirituality\",\n      \"completed\": true\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequest:",
            "description": "<p>Either the request is missing the habit_id property or that habit/user relationship does not exist</p>"
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad Request: please include the habit_id with your request\"\n}",
          "type": "json"
        },
        {
          "title": "404 NotFound:",
          "content": "404 Not Found\n{\n  \"errorMessage\": \"We could not find that habit for that user\"\n}",
          "type": "json"
        },
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong marking that habit as NOT completed for today.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/completedHabits/completedHabitsRouter.js",
    "groupTitle": "CompletedHabits"
  },
  {
    "type": "get",
    "url": "/api/completed-today",
    "title": "List of Tasks Completed Today",
    "name": "GetListToday",
    "group": "CompletedHabits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CategoryArray",
            "description": "<p>Array of category objects, each object has category_name property and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " 200 OK\n[\n     {\n       \"id\": 1,\n       \"habit_id\": 1,\n       \"habit_name\": \"get to mordor\",\n       \"category_name\": \"physical wellness\",\n       \"completed\": true\n     },\n     {\n       \"id\": 2,\n       \"habit_id\": 2,\n       \"habit_name\": \"destroy the ring\",\n       \"category_name\": \"spirituality\",\n       \"completed\": false\n     }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the list of categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong getting the list of habits\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/completedHabits/completedHabitsRouter.js",
    "groupTitle": "CompletedHabits"
  },
  {
    "type": "post",
    "url": "/api/completed-today",
    "title": "Mark a User Habit as Completed Today",
    "name": "PostCompletedHabits",
    "group": "CompletedHabits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "habit_id",
            "description": "<p>The id of the habit you would like to mark complete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body-Example:",
          "content": "{\n  \"habit_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "CompletedArray",
            "description": "<p>Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK\n[\n    {\n      \"id\": 1,\n      \"habit_id\": 1,\n      \"habit_name\": \"get to mordor\",\n      \"category_name\": \"physical wellness\",\n      \"completed\": true\n    },\n    {\n      \"id\": 2,\n      \"habit_id\": 2,\n      \"habit_name\": \"destroy the ring\",\n      \"category_name\": \"spirituality\",\n      \"completed\": true\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequest:",
            "description": "<p>Either the request is missing the habit_id property or that habit/user relationship does not exist</p>"
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad Request: please include the habit_id with your request\"\n}",
          "type": "json"
        },
        {
          "title": "404 NotFound:",
          "content": "404 Not Found\n{\n  \"errorMessage\": \"We could not find that habit for that user\"\n}",
          "type": "json"
        },
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong marking that habit as completed for today.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/completedHabits/completedHabitsRouter.js",
    "groupTitle": "CompletedHabits"
  },
  {
    "type": "get",
    "url": "/api/habits",
    "title": "Get All Habits",
    "name": "GetHabits",
    "group": "Habits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "HabitArray",
            "description": "<p>Array of habit objects, each object has habit_name property and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    200 OK\n[\n   {\n      \"id\": 1,\n      \"habit_name\": \"Carry the ring to mordor\",\n    },\n     {\n      \"id\": 2,\n      \"habit_name\": \"Don't put on the ring\",\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong getting the list of habits\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/habits/habitRouter.js",
    "groupTitle": "Habits"
  },
  {
    "type": "get",
    "url": "/api/habits/user",
    "title": "Get User Habits",
    "name": "GetUserHabits",
    "group": "Habits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "HabitArray",
            "description": "<p>Array of habit objects, each object has habit_name property, category_name and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    200 OK\n[\n   {\n      \"id\": 1,\n      \"habit_name\": \"Carry the ring to mordor\",\n       \"category_name\": \"Fitness\"\n    },\n     {\n      \"id\": 2,\n      \"habit_name\": \"Don't put on the ring\",\n       \"category_name\": \"Spirituality\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong getting your habit info\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/habits/habitRouter.js",
    "groupTitle": "Habits"
  },
  {
    "type": "post",
    "url": "/api/habits/user",
    "title": "Post New Habit To User",
    "name": "PostUserHabits",
    "group": "Habits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "habit_name",
            "description": "<p>The name of the habit you want to add</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>The category of the habit you want to add</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body-Example:",
          "content": "{\n  \"habit_name\": \"Walk into mordor\",\n  \"category_name\": \"Fitness\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "HabitArray",
            "description": "<p>Array of habit objects, including the new habit, each object has habit_name property, category_name and id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK\n[\n   {\n     \"id\": 1,\n     \"habit_name\": \"Walk into mordor\",\n     \"category_name\": \"Fitness\"\n   },\n   {\n     \"id\": 2,\n     \"habit_name\": \"Don't put on the ring\",\n     \"category_name\": \"Spirituality\"\n   },\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequest:",
            "description": "<p>Either the request is missing the habit_name property or a habit already exists with that category</p>"
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Please include a habit_name for the habit you would like to add\"\n}",
          "type": "json"
        },
        {
          "title": "400 BadRequest:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"There is already a habit with that category\"\n}",
          "type": "json"
        },
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong when adding the habit\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/habits/habitRouter.js",
    "groupTitle": "Habits"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "UserAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "UserObject",
            "description": "<p>Object with token: the token in this example is not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n   \"message\": \"Welcome username, you are logged in\",\n  \"token\": \"cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5hbWUxIiwiaWF0IjoxNTY0MDc3Njc3LCJleHAiOjE1NjQxNjQwNz\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong when registering the user.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Required information was not supplied to request body</p>"
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>That username or password is not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad request: please include a username and password\"\n}",
          "type": "json"
        },
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"That username or password is not correct.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong when logging in the user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/usersAuth/userRouter.js",
    "groupTitle": "UserAuth"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Create New User",
    "name": "RegisterUser",
    "group": "UserAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "UserObject",
            "description": "<p>Object with user id, name and username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n  \"id\": 1,\n  \"name\": \"Frodo Baggins\",\n  \"username\": \"FrodoRingBearer\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Username already exists or required information was not supplied to request body</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong when registering the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Username already exists\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad request: please include a username, password, name and email\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong when registering the user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/usersAuth/userRouter.js",
    "groupTitle": "UserAuth"
  },
  {
    "type": "post",
    "url": "/api/unique-username",
    "title": "Check if Username is Available",
    "name": "uniqueusername",
    "group": "UserAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "MessageObject",
            "description": "<p>Object with message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n  \"message\": \"That username is available!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Username already exists or required information was not supplied to request body</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong when registering the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Username already exists\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request:",
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad request: please include a username, password, name and email\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"Something went wrong validating that username, please try again\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/usersAuth/userRouter.js",
    "groupTitle": "UserAuth"
  },
  {
    "type": "get",
    "url": "/api/user-info",
    "title": "Get User Info",
    "name": "GetBasicUserInfo",
    "group": "UserInfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth-Example:",
          "content": "{ \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "UserObject",
            "description": "<p>Object with user id, username, name and email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n   \"id\": 1\n  \"name\": \"Frodo Baggins\",\n  \"username\": \"FrodoRingBearer\",\n  \"email\": \"ringbearer@thefellowship.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized:",
            "description": "<p>You don't have authorization for this request</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something went wrong getting the user info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized:",
          "content": "401 Unauthorized\n{\n  \"errorMessage\": \"Unauthorized: You don't have authorization for this request\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error:",
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"SSomething went wrong getting the user info\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/userInfo/userInfoRouter.js",
    "groupTitle": "UserInfo"
  }
] });
