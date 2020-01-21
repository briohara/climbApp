const express = require("express");
const router = express.Router();

const userController = require("./userController");

router.route("/")
    .get()
    .post()


module.exports = router;