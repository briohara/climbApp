const UserModel = require("./userModel");
const _ = require("lodash");
const { signToken } = require("../auth/auth");

//get user
exports.getUser = function(req, res, next) {
  console.log(JSON.stringify(req));
  UserModel.findById(req.body.user._id, (err, user) => {
    if (err) return next(err);
    console.log("Finding user by id...");

    //Successful!
    res.json(user);
  });
};

exports.createUser = function(req, res, next) {
  let newUser = new UserModel(req.body);
  console.log("New user: " + newUser);

  newUser.save((err, user) => {
    if (err) {
      next(err);
    }

    let token = signToken(newUser._id);
    res.json({ token: token });
  });
};
