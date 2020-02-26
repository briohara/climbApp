const router = require("express").Router();
const verifyUser = require("./auth").verifyUser;
const verifyGoogleUser = require("./auth").verifyGoogleUser;
const controller = require("./authController");

router.post("/signin", verifyUser(), controller.signin);

router.post("/googleSignin", verifyGoogleUser());

module.exports = router;
