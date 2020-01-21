const _ = require("lodash");

let config = {
    dev: "development",
    test: "testing",
    prod: "production",
    port: process.env.PORT || 6900,
    expireTime: 24*60*10, //10 days in minutes
    secret: {
        jtw: process.env.JWT || "gumball"
    }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;

try{
    envConfig = require("./" + config.env);
} catch(e) {
    envConfig = {};
}

//merge two files together. envConfig will overwrite properties on config object
module.exports = _.merge(config, envConfig);