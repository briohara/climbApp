const mongoose = require("mongoose");

let climbingRoutesSchema = new mongoose.Schema({ 
    name: {type:"string", required:true}, 
    rating: {type:"decimal", required:true},
    attempts: {type: "number", requried: true},
    points_earned: {type: "number", required: true},
    total_points: {type:"number", required: true}
});
let ClimbingRoute = mongoose.model('climbing_routes', climbingRoutesSchema);

module.exports = ClimbingRoute;