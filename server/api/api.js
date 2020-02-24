var router = require("express").Router();

router.use("/routes", require("./climbingRoutes/climbingRouteRouter"));

router.use("/users", require("./users/userRouter"));

router.use("/auth", require("./auth/authRouter"));

module.exports = router;
