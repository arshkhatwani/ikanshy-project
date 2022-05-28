const express = require("express");
const verifyAndDecodeToken = require("../middlewares/verifyAndDecodeToken");
const {
  viewBalance,
  changeBalance,
} = require("../services/transactionServices");
const router = express.Router();

router.get("/view/balance", verifyAndDecodeToken, viewBalance);

router.post("/", verifyAndDecodeToken, changeBalance);

module.exports = router;
