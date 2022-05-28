const { validCredentials } = require("../services/utils/responseMsgs");

const validateCredentials = (req, res, next) => {
  const { username, password } = req.body;

  if (typeof username != "string" || typeof password != "string")
    return res.status(400).json(validCredentials);

  if (username.trim() == "" || password.trim() == "")
    return res.status(400).json(validCredentials);

  next();
};

module.exports = validateCredentials;
