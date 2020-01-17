const express = require("express");
const router = express.Router();

//Controllers
const routes_controller = require("../controllers/routesController");

router.get("/getRoutes", routes_controller.climbing_routes_list);

router.post("/createRoute", routes_controller.climbing_routes_create);

router.delete("/removeRoute", routes_controller.climbing_routes_remove);

router.put("/updateRoute", routes_controller.climbing_routes_update);

module.exports = router;