const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

let userSchema = new mongoose.Schema({ 
    username: {type:"string", required:true, unique: true, dropDups: true}, 
    password: {type: "string", required: true},
    email: {type: "number", requried: true}
});

userSchema.pre("save", (next => {
    if(!this.isModified("password")) return next();
    this.password = this.encryptPassword(this.password);
}));

//Have mongo deal with password management. Seperation of Concern.
userSchema.methods = {
    //Check password on sign in
    authenticate: (plainTextPwd) => {
        return bcryptjs.compareSync(plainTextPwd, this.password);
    },
    encryptPassword: (plainTextPwd) => {
        if(!plainTextPwd) {
            return "";
        }
        else {
            let salt = bcryptjs.genSaltSync(10);
            return bcryptjs.hashSync(plainTextPwd, salt);
        }
    }
}

let User = mongoose.model('users', userSchema);

module.exports = User;