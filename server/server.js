const express = require("express");
var app = express();
var config = require("./config/config");
require("mongoose").connect(config.db.url, { useUnifiedTopology: true, useNewUrlParser: true });

//Set global express settings
require("./middleware/appMiddleware")(app);

//routers
const api = require("./api/api");

app.use("/api", api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

//Add error handling 

//export app for testing (will add later)
module.exports = app;