const pool = require("./dbPool");
const bcrypt = require("bcrypt");

const getUser = async (username) => {
  const user = await pool.query("SELECT * FROM users WHERE username=$1", [
    username,
  ]);

  return user.rows[0];
};

const createUser = async (username, password) => {
  const hashedPass = await bcrypt.hash(password, 10);

  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    hashedPass,
  ]);

  const addedUser = getUser(username);

  return addedUser;
};

module.exports = { createUser, getUser };
