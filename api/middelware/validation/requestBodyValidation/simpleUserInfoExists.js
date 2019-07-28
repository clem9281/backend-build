module.exports = {
  all,
  username,
  email
};

function all(req, res, next) {
  const { username, email, name } = req.body;
  if (!username || !email || !name) {
    res.status(400).json({
      errorMessage: "Bad request: please include a username, name and email"
    });
  } else {
    next();
  }
}

function username(req, res, next) {
  const { username } = req.body;
  if (!username) {
    res.status(400).json({
      errorMessage: "Bad request: please include a username"
    });
  } else {
    next();
  }
}

function email(req, res, next) {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({
      errorMessage: "Bad request: please include an email"
    });
  } else {
    next();
  }
}
