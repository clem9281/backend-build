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
          "content": "200 OK\n{\n  \"token\": \"cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5hbWUxIiwiaWF0IjoxNTY0MDc3Njc3LCJleHAiOjE1NjQxNjQwNz\"\n}",
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
            "description": "<p>Object with user name and username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n  \"name\": \"John\",\n  \"username\": \"John1980\"\n}",
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
  }
] });
