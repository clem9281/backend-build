const express = require("express");

const userRouter = require("./usersAuth/userRouter");

const configuremiddleware = require("./configureMiddleware");

const server = express();
configuremiddleware(server);

server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "index.html"))
);
server.use("/api", userRouter);

module.exports = server;
