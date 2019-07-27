const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({
        errorMessage:
          "Unauthorized: You don't have authorization for this request"
      });
    } else {
      req.userId = decoded.subject;
      next();
    }
  });
};
