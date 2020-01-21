const ClimbingRouteModel = require("./climbingRouteModel");


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
    (req, res, next) => {
        //console.log(req);
        let climbingRoute = new ClimbingRouteModel(
            {
                name: req.body.route.name,
                rating: req.body.route.rating,
                attempts: req.body.route.attempts,
                points_earned: req.body.route.points_earned,
                total_points: req.body.route.total_points
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

exports.climbing_routes_remove = [

    (req, res, next) => {
        //delete route by id
        ClimbingRouteModel.findByIdAndDelete( req.body.route._id, (err) => {
            if(err) { console.log(`Error while deleting: ${err}`); };

            // Successful!!
            res.json({ success: true });
            
        } )
    }
];

exports.climbing_routes_update = [

    (req, res, next) => {

        let climbingRoute = new ClimbingRouteModel(
            {
                name: req.body.route.name,
                rating: req.body.route.rating,
                attempts: req.body.route.attempts,
                points_earned: req.body.route.points_earned,
                total_points: req.body.route.total_points
            }
        );

        //update route by id
        ClimbingRouteModel.findByIdAndUpdate( req.body.route._id, climbingRoute ,(err) => {
            if(err) { console.log(`Error while updating: ${err}`); };

            //Log how many rows were replaced and other verification stuff 

            // Successful!!
            res.json({ success: true });
            
        } )
    }
];