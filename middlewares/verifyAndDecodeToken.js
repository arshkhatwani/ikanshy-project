require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const verifyAndDecodeToken = (req, res, next) => {
  const bearerHeader = req.headers.auth;

  if (typeof bearerHeader != "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    req.token = bearerToken;
    const data = jwt.verify(bearerToken, secret, (err, token) => {
      if (err) {
        return "Forbidden";
      } else {
        return token;
      }
    });

    if (data == "Forbidden") {
      return res.sendStatus(403);
    }

    req.headers.tokenData = data;
    next();
  } else {
    return res.sendStatus(403);
  }
};

module.exports = verifyAndDecodeToken;
