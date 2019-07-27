module.exports = (req, res, next) => {
  const { username, password, email, name } = req.body;
  if (!username || !password || !email || !name) {
    res.status(400).json({
      errorMessage:
        "Bad request: please include a username, password, name and email"
    });
  } else {
    next();
  }
};
