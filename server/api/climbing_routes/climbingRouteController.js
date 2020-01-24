const ClimbingRouteModel = require("./climbingRouteModel");

exports.getAllRoutes = function(req, res, next) {
  ClimbingRouteModel.find().exec((err, list_climbingRoutes) => {
    if (err) {
      return next(err);
    }
    console.log("Finding Routes...");
    res.json(list_climbingRoutes);
  });
};

exports.createClimbingRoute = [
  (req, res, next) => {
    //console.log(req);
    let climbingRoute = new ClimbingRouteModel(req.body);

    //save new route
    climbingRoute.save((err, product) => {
      if (err) {
        return next(err);
      }
      console.log("Creating Route...");
      // Successful!!
      res.json({ success: true });
    });
  }
];

exports.deleteClimbingRoute = [
  (req, res, next) => {
    //delete route by id
    ClimbingRouteModel.findByIdAndDelete(req.body, err => {
      if (err) {
        console.log(`Error while deleting: ${err}`);
        res.status(500).send("Error occured during delete. CHECK LOGS.");
      }

      console.log("Deleting Route...");

      // Successful!!
      res.json({ success: true });
    });
  }
];

exports.updateClimbingRoute = [
  (req, res, next) => {
    //update route by id
    ClimbingRouteModel.findByIdAndUpdate(req.body._id, req.body, err => {
      if (err) {
        console.log(`Error while updating: ${err}`);
        res.status(500).send("Error occured during update. CHECK LOGS.");
      }

      //Log how many rows were replaced and other verification stuff
      console.log("Updating Route...");

      // Successful!!
      res.json({ success: true });
    });
  }
];
