const mongoose = require("mongoose");

let climbingRouteSchema = new mongoose.Schema({ 
    name: {type:"string", required:true, unique: true, dropDups: true}, 
    rating: {type:"decimal", required:true},
    attempts: {type: "number", requried: true},
    points_earned: {type: "number", required: true},
    total_points: {type:"number", required: true}
});
let ClimbingRoute = mongoose.model('climbing_routes', climbingRouteSchema);

module.exports = ClimbingRoute;