var router = require("express").Router();

router.use("/routes", require("./climbing_routes/climbingRouteRouter"));

router.use("/users", require("./users/userRoutes"));

module.exports = router;