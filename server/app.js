//organize this all a bit more nicely please

//export file
module.exports = app;

//express app setup used npm install --save express
const express = require("express");
const app = express();
//logging middleware - using morgan - npm install --save morgan
const morgan = require("morgan");
app.use(morgan("dev"));
//static middleware
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "public")));
//set up body parser middleware so you can use req.body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//use api routes
app.use("/api", require("./api"));

// sends index.html for any requests that don't match one of our API routes
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

//handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
