const express = require("express");
const router = express.Router();

//Controllers
const routes_controller = require("../controllers/routesController");

router.get("/getRoutes", routes_controller.climbing_routes_list);

router.post("/createRoute", routes_controller.climbing_routes_create);

module.exports = router;