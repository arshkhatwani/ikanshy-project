require("dotenv").config();
const { createUser, getUser } = require("../queries/userQueries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const {
  userNotFoundMessage,
  usernameConflictMessage,
  wrongPasswordMessage,
} = require("./utils/responseMsgs");

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUser = await getUser(username);
    if (checkUser !== undefined) {
      return res.status(400).json(usernameConflictMessage);
    }

    const newUser = await createUser(username, password);
    delete newUser.password;

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUser = await getUser(username);
    if (checkUser === undefined) {
      return res.status(404).json(userNotFoundMessage);
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(401).json(wrongPasswordMessage);
    }

    const tokenBody = { username: checkUser.username };
    const token = jwt.sign(tokenBody, secret);

    return res.status(200).json({ token: token });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

module.exports = { registerUser, loginUser };
