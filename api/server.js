const express = require("express");
const path = require("path");

const userRouter = require("./usersAuth/userRouter");
const userInfoRouter = require("./userInfo/userInfoRouter");

const categoryRouter = require("./categories/categoriesRouter");
const habitRouter = require("./habits/habitRouter");
const completedHabitsRouter = require("./completedHabits/completedHabitsRouter");

const configuremiddleware = require("./configureMiddleware");

const { restricted } = require("./middelware");

const server = express();
configuremiddleware(server);

// API DOCS
const apiDocsPath = path.join(__dirname, "../apidoc");
server.use("/", express.static(apiDocsPath));

// ROUTES
server.use("/api/auth", userRouter);
server.use("/api/user-info", restricted, userInfoRouter);
server.use("/api/habits", restricted, habitRouter);
server.use("/api/categories", restricted, categoryRouter);
server.use("/api/completed-today", restricted, completedHabitsRouter);

module.exports = server;
