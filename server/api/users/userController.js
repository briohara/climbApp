const UserModel = require("./userModel");
const { signToken } = require("../auth/auth");
const {
  requestError,
  requestSuccessful
} = require("../httpResponses/responses");

// get user
// exports.getUser = function(req, res, next) {
//   UserModel.findById(req.body.user._id, (err, user) => {
//     if (err) return next(err);
//     console.log("Finding user by id...");

//     //Successful!
//     res.json(user);
//   });
// };

exports.createUser = function(req, res, next) {
  let newUser = new UserModel(req.body);

  newUser.save((err, user) => {
    if (err) {
      return requestError(res, 500, err, "An error has occured.");
    }

    let token = signToken(newUser._id);
    return requestSuccessful(res, 200, { token: token });
  });
};

exports.googleUserSignIn = function(req, res, next) {
  let user = UserModel.findOne(
    { googleId: req.body.googleUserId, isGoogleAccount: true },
    (err, user) => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }
      console.log("Finding user by id...");

      console.log(user);

      if (!user || user.length === 0) {
        return false;
      }

      return user;
    }
  );

  if (user) {
    return requestSuccessful(res, 200, user);
  } else {
    //Create new user
    let newUser = new UserModel({
      username: req.body.name,
      password: "",
      email: req.body.email,
      isGoogleAccount: true,
      googleId: req.body.googleUserId
    });

    newUser.save((err, savedUser) => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }

      let token = signToken(newUser._id);
      return requestSuccessful(res, 200, { token: token });
    });
  }
};
