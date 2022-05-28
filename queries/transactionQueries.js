const pool = require("./dbPool");

const updateBalance = async (username, newVal) => {
  await pool.query("UPDATE users SET balance = $1 WHERE username=$2", [
    newVal,
    username,
  ]);
};

module.exports = { updateBalance };
