const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require("../../config/config");
const checkToken = expressJwt({ secret: config.secret.jwt }); //Gives back middleware function
const User = require("../users/userModel");

//Check incoming request token
exports.decodeToken = () => {
  return function(req, res, next) {
    //Optional to add token to query string. We are checking that and adding to header
    if (req.query && req.query.hasOwnProperty("access_token")) {
      req.headers.authorization = "Bearer " + req.query.access_token;
    }

    //Checks if token is valid. Adds to req.user if valid
    checkToken(req, res, next);
  };
};

//get user from id
exports.getUser = () => {
  return function(req, res, next) {
    User.findById(req.user._id).exec((err, user) => {
      if (err) {
        next(err);
      }

      if (!user) {
        res.status(401).send("Unauthorized.");
      } else {
        req.user = user;
        next();
      }
    });
  };
};

exports.verifyUser = function() {
  return function(req, res, next) {
    let { username, password } = req.body;

    //if no username/password stop.
    if (!username || !password) {
      return res.status(400).send("Username and password requried.");
    }

    //look up user
    User.findOne({ username }).exec((err, user) => {
      if (err) {
        next(err);
      }

      console.log(user);

      if (!user) {
        res.status(401).send("No user exists with the given username");
      } else {
        if (!user.authenticate(password)) {
          res.status(401).send("Password is incorrect.");
        } else {
          req.user = user;
          next();
        }
      }
    });
  };
};

exports.signToken = id => {
  return jwt.sign({ _id: id }, config.secret.jwt, {
    expiresIn: config.expireTime
  });
};
