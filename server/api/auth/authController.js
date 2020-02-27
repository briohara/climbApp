const signToken = require("./auth").signToken;
const {
  requestSuccessful
} = require("../httpResponses/responses");

exports.signin = function(req, res, next) {
  let token = signToken(req.user._id);
  requestSuccessful(res, 200, { token: token, name: req.user.name });
};
