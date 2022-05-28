const express = require("express");
const validateCredentials = require("../middlewares/validateCredentials");
const { registerUser, loginUser } = require("../services/userServices");
const router = express.Router();

router.post("/register", validateCredentials, registerUser);

router.post("/login", validateCredentials, loginUser);

module.exports = router;
