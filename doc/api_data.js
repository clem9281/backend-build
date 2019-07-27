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
    "filename": "./doc/main.js",
    "group": "C__Users_clem9_Documents_Projects_backend_build_doc_main_js",
    "groupTitle": "C__Users_clem9_Documents_Projects_backend_build_doc_main_js",
    "name": ""
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
          "content": "200 OK\n{\n   message: `Welcome ${username}, you are logged in`,\n  \"token\": \"cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5hbWUxIiwiaWF0IjoxNTY0MDc3Njc3LCJleHAiOjE1NjQxNjQwNz\"\n}",
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
            "description": "<p>Required information was not supplied to request body</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>That username or password is not correct.</p>"
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
          "content": "400 Bad Request\n{\n  \"errorMessage\": \"Bad request: please include a username and password\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request:",
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
          "content": "200 OK\n{\n   \"io\": 1,\n  \"name\": \"Frodo Baggins\",\n  \"username\": \"FrodoRingBearer\"\n}",
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
    "type": "get",
    "url": "/api/my-habits",
    "title": "Get User Habits",
    "name": "GetUserHabits",
    "group": "UserHabits",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of objects, each object has habit_name property, category_name and id</p>"
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
          "content": "500 Internal Server Error\n{\n  \"errorMessage\": \"SSomething went wrong getting your habit info\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/userHabits/userHabitsRouter.js",
    "groupTitle": "UserHabits"
  },
  {
    "type": "get",
    "url": "/api/me",
    "title": "Get User Info",
    "name": "GetBasicUserInfo",
    "group": "UserInfo",
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
