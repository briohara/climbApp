const ObjectId = require("mongoose").Types.ObjectId;

const ClimbingRouteModel = require("./climbingRouteModel");
const {
  requestError,
  requestSuccessful
} = require("../httpResponses/responses");

exports.getAllRoutes = function(req, res, next) {
  ClimbingRouteModel.find().exec((err, climbingRoutesList) => {
    if (err) {
      return requestError(res, 500, err, "An error has occured.");
    }

    if (!climbingRoutesList || climbingRoutesList.length === 0) {
      return requestError(
        res,
        204,
        "Climbing Routes not found.",
        "Climbing Routes not found."
      );
    }

    console.log("Finding Routes...");
    return requestSuccessful(res, 200, climbingRoutesList);
  });
};

exports.getUserRoutes = function(req, res, next) {
  ClimbingRouteModel.find(
    { userId: new ObjectId(req.user._id) },
    (err, climbingRoutesList) => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }

      if (!climbingRoutesList || climbingRoutesList.length === 0) {
        return requestError(
          res,
          204,
          "Climbing Routes not found.",
          "Climbing Routes not found."
        );
      }

      console.log("Finding Routes by user...");
      return requestSuccessful(res, 200, climbingRoutesList);
    }
  );
};

exports.createClimbingRoute = [
  (req, res, next) => {
    req.body.userId = new ObjectId(req.user._id);
    let climbingRoute = new ClimbingRouteModel(req.body);

    //save new route
    climbingRoute.save((err, result) => {
      if (err || !result || result.length === 0) {
        return requestError(res, 500, err, "An error has occured.");
      }
      console.log("Creating Route...");
      return requestSuccessful(res, 201, { success: true });
    });
  }
];

exports.deleteClimbingRoute = [
  (req, res, next) => {
    ClimbingRouteModel.findByIdAndDelete(req.body._id, err => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }

      console.log("Deleting Route...");

      // Successful!!
      return requestSuccessful(res, 200, { success: true });
    });
  }
];

exports.updateClimbingRoute = [
  (req, res, next) => {
    ClimbingRouteModel.findByIdAndUpdate(req.body._id, req.body, err => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }

      console.log("Updating Route...");

      return requestSuccessful(res, 200, { success: true });
    });
  }
];
