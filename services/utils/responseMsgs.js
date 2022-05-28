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
const transactionType = {
  status: "Error",
  message: "Please provide a transaction type",
};
const validCredentials = {
  status: "Error",
  message: "Please provide valid credentials",
};

module.exports = {
  userNotFoundMessage,
  usernameConflictMessage,
  wrongPasswordMessage,
  insufficientFunds,
  transactionType,
  validCredentials,
};
