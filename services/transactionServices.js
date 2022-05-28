const { updateBalance } = require("../queries/transactionQueries");
const { getUser } = require("../queries/userQueries");
const {
  userNotFoundMessage,
  insufficientFunds,
} = require("./utils/responseMsgs");

const viewBalance = async (req, res) => {
  try {
    const { username } = req.headers.tokenData;

    const checkUser = await getUser(username);
    if (checkUser === undefined) {
      return res.status(404).json(userNotFoundMessage);
    }
    const resBody = { currentBalance: parseFloat(checkUser.balance) };

    return res.status(200).json(resBody);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

const changeBalance = async (req, res) => {
  try {
    const { username } = req.headers.tokenData;
    var { amount } = req.body;
    if (req.query.type == "debit") amount = -amount;

    const checkUser = await getUser(username);
    if (checkUser === undefined) {
      return res.status(404).json(userNotFoundMessage);
    }

    const newBal = amount + parseFloat(checkUser.balance);
    if (newBal < 0) {
      return res.status(400).json(insufficientFunds);
    }

    await updateBalance(username, newBal);

    return res.status(200).json({ currentBalance: newBal });
  } catch (error) {
    console.log(e);
    return res.sendStatus(500);
  }
};

module.exports = { viewBalance, changeBalance };
