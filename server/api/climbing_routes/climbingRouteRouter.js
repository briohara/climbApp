const express = require("express");
const router = express.Router();

//Controllers
const routes_controller = require("./climbingRouteController");

router.route("/")
    .get(routes_controller.climbing_routes_list)
    .post(routes_controller.climbing_routes_create)
    .delete(routes_controller.climbing_routes_remove)
    .put(routes_controller.climbing_routes_update);

module.exports = router;