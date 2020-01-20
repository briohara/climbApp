var router = require("express").Router();

router.use("/routes", require("./climbing_routes/climbingRoutesRouter"));

module.exports = router;