// sample express app created with npx express-generator --no-view src

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

var indexRouter = require("./routes/index");
var personsRouter = require("./routes/persons");

app.use("/", indexRouter);
app.use("/persons", personsRouter);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/persons", personsRouter);

module.exports = app;
