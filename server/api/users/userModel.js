const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

let userSchema = new mongoose.Schema({
  email: { type: "string", required: true, unique: true },
  password: { type: "string" },
  name: { type: "string", required: true },
  isGoogleAccount: { type: "boolean", required: true },
  googleId: { type: "string"},
  lastLoggedIn: { type: "date"}
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  this.password = this.encryptPassword(this.password);
  next();
});

//Have mongo deal with password management. Seperation of Concern.
userSchema.methods = {
  //Check password on sign in
  authenticate: function(plainTextPwd) {
    return bcryptjs.compareSync(plainTextPwd, this.password);
  },
  encryptPassword: plainTextPwd => {
    if (!plainTextPwd) {
      return "";
    } else {
      let salt = bcryptjs.genSaltSync(10);
      return bcryptjs.hashSync(plainTextPwd, salt);
    }
  }
};

let User = mongoose.model("users", userSchema);

module.exports = User;
