const express = require("express");
const router = express.Router();
const { decodeToken } = require("../auth/auth");

//Controllers
const routes_controller = require("./climbingRouteController");

router.get("/", decodeToken(), routes_controller.getUserRoutes);

router.post("/", decodeToken(), routes_controller.createClimbingRoute);

router.delete("/", decodeToken(), routes_controller.deleteClimbingRoute);

router.put("/", decodeToken(), routes_controller.updateClimbingRoute);

module.exports = router;
