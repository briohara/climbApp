const express = require("express");
const router = express.Router();

const userController = require("./userController");

router.route("/")
    .get(userController.getUser)
    .post(userController.createUser)


module.exports = router;