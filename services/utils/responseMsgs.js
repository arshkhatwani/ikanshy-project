const userNotFoundMessage = {
  status: "Error",
  message: "User not found",
};
const usernameConflictMessage = {
  status: "Error",
  message: "User with the same username already exists",
};
const wrongPasswordMessage = {
  status: "Error",
  message: "Wrong password",
};
const insufficientFunds = {
  status: "Error",
  message: "Insufficient Funds",
};

module.exports = {
  userNotFoundMessage,
  usernameConflictMessage,
  wrongPasswordMessage,
  insufficientFunds,
};
