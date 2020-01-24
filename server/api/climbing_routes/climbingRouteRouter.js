const express = require("express");
const router = express.Router();

//Controllers
const routes_controller = require("./climbingRouteController");

router
  .route("/")
  .get(routes_controller.getAllRoutes)
  .post(routes_controller.createClimbingRoute)
  .delete(routes_controller.deleteClimbingRoute)
  .put(routes_controller.updateClimbingRoute);

module.exports = router;
