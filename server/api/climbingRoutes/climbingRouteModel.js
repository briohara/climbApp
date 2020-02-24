const mongoose = require("mongoose");

let climbingRouteSchema = new mongoose.Schema({
  name: { type: "string", required: true, unique: true, dropDups: true },
  rating: { type: "string", required: true },
  attempts: { type: "number", requried: true },
  pointsEarned: { type: "number", required: true },
  userId: { type: "ObjectId", requried: true }
});
let ClimbingRoute = mongoose.model("climbingRoutes", climbingRouteSchema);

module.exports = ClimbingRoute;
