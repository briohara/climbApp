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
    return requestSuccessful(res, 200, { token: token, name: newUser.name });
  });
};

exports.googleUserSignIn = function(req, res, next) {
  let existingUser = UserModel.findOne(
    { googleId: req.body.googleUserId, isGoogleAccount: true },
    (err, user) => {
      if (err) {
        return requestError(res, 500, err, "An error has occured.");
      }
  
      if (!user || user.length === 0) {

        let newUser = new UserModel({
          email: req.body.email,
          password: "",
          name: req.body.name,
          isGoogleAccount: true,
          googleId: req.body.googleUserId
        });
        
        return requestSuccessful(res, 200, {newUser: newUser});
      }

      console.log
      let token = signToken(user._id);
      return requestSuccessful(res, 200, { token: token, name: user.name });
    }
  ); 
};
