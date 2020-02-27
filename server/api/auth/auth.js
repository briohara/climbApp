const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require("../../config/config");
const checkToken = expressJwt({ secret: config.secret.jwt }); //Gives back middleware function
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.googleClientId);

const User = require("../users/userModel");
const {
  requestError,
  requestSuccessful
} = require("../httpResponses/responses");

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
        return requestError(res, 500, err, "An error has occured.");
      }

      if (!user) {
        requestError(res, 401, "Unauthorized", "Unauthorized");
      } else {
        req.user = user;
        next();
      }
    });
  };
};

exports.verifyUser = () => {
  return function(req, res, next) {
    let { email, password } = req.body;

    //if no username/password stop.
    if (!email || !password) {
      requestError(
        res,
        400,
        "Email and password requried.",
        "Email and password requried."
      );
    }

    //look up user
    User.findOne({ email: email, isGoogleAccount: false }).exec(
      (err, user) => {
        if (err) {
          return requestError(res, 500, err, "An error has occured.");
        }

        if (!user || user.length === 0) {
          requestError(
            res,
            401,
            "No user exists with the given email",
            "No user exists with the given email"
          );
        } else {
          if (!user.authenticate(password)) {
            requestError(
              res,
              401,
              "Password is incorrect.",
              "Password is incorrect."
            );
          } else {
            req.user = user;
            next();
          }
        }
      }
    );
  };
};

exports.verifyGoogleUser = () => {
  return async function(req, res, next) {
    const ticket = await client.verifyIdToken({
      idToken: req.body.uc.id_token,
      audience: process.env.googleClientId
    });
    const payload = ticket.getPayload();

    requestSuccessful(res, 200, {
      googleUserId: payload["sub"],
      name: payload["name"],
      email: payload["email"]
    });
  };
};

exports.signToken = id => {
  return jwt.sign({ _id: id }, config.secret.jwt, {
    expiresIn: config.expireTime
  });
};
