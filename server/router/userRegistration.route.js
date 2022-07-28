const express = require("express");

const { saveUserDetails } = require("../controller/user.controller");

const router = express.Router();

router.post("/api/register/user", saveUserDetails)

module.exports = {router}