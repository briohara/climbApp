const express = require("express");
const router = express.Router();

const userController = require("./userController");

router
  .route("/")
  //.get(userController.getUser)
  .post(userController.createUser);

router.post("/googleUserSignin", userController.googleUserSignIn);

module.exports = router;
