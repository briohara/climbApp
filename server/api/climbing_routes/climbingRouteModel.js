const mongoose = require("mongoose");

let climbingRouteSchema = new mongoose.Schema({
  name: { type: "string", required: true, unique: true, dropDups: true },
  rating: { type: "string", required: true },
  attempts: { type: "number", requried: true },
  points_earned: { type: "number", required: true },
  user_id: { type: "string", requried: true }
});
let ClimbingRoute = mongoose.model("climbing_routes", climbingRouteSchema);

module.exports = ClimbingRoute;
