const ClimbingRoutes = require("../models/climbingRoutes");


exports.climbing_routes_list = function(req, res, next) {

    ClimbingRoutes.find()
        .exec((err, list_climbingRoutes) => {
            if(err) { return next(err); }
            console.log("Finding Routes...");
            let formatedRoutes = list_climbingRoutes.map((x) => {
                return {
                    _id: x._id,
                    name: x.name,
                    rating: parseFloat(x.rating),
                    attempts: x.attempts,
                    points_earned: x.points_earned,
                    total_points: x.total_points
                }
            });
            res.json(formatedRoutes);
        })
};

exports.climbing_routes_create = [
    /* *********************** ADD VALIDATION/ SANITIZATION ****************************************** */

    (req, res, next) => {
        let climbingRoute = new ClimbingRoutes(
            {
                name: req.body.name,
                rating: req.body.rating,
                attempts: req.body.attempts,
                points_earned: req.body.points_earned,
                total_points: req.body.total_points
            }
        );

        //save new route
        climbingRoute.save((err, product) => {
            if(err) { return next(err); }
            console.log("Creating Route...");
            // Successful!!
            res.json({ success: true });
        })
    }
];