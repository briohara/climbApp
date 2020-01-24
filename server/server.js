const express = require("express");
var app = express();
const config = require("./config/config");
require("mongoose").connect(config.db.url, config.dbSettings);

//Set global express settings
require("./middleware/appMiddleware")(app);

//Seed the database
if (config.seed) {
  require("./util/seed.js");
}

//routers
const api = require("./api/api");

app.use("/api", api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

//Add error handling

//export app for testing (will add later)
module.exports = app;
