const express = require("express");

const userRouter = require("./usersAuth/userRouter");
const dashRouter = require("./userDash/dashRouter");

const configuremiddleware = require("./configureMiddleware");

const server = express();
configuremiddleware(server);

// API DOCS
server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "index.html"))
);

// ROUTES
server.use("/api", userRouter);
server.use("/api/me", dashRouter);

module.exports = server;
