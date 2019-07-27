const express = require("express");
const path = require("path");

const userRouter = require("./usersAuth/userRouter");
const userInfoRouter = require("./userInfo/userInfoRouter");
const userHabitRouter = require("./userHabits/userHabitsRouter");

const configuremiddleware = require("./configureMiddleware");

const { restricted } = require("./middelware");

const server = express();
configuremiddleware(server);

// API DOCS
const apiDocsPath = path.join(__dirname, "../apidoc");
server.use("/", express.static(apiDocsPath));

// ROUTES
server.use("/api", userRouter);
server.use("/api/me", restricted, userInfoRouter);
server.use("/api/myHabits", restricted, userHabitRouter);

module.exports = server;
