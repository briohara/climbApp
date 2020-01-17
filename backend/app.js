const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

let app = express();
let port = process.env.PORT;

//db connection
let db_url = process.env.MONGODB_URL;
mongoose.connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

//routers
const routesRouter = require("./routes/routesRoute");

app.use(express.json());
app.get("/getRoutes", routesRouter);
app.post("/createRoute", routesRouter);
app.delete("/removeRoute", routesRouter);
app.put("/updateRoute", routesRouter);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })