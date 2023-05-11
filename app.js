require("dotenv").config();

var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// router imports
var dataRouter = require("./routes/data");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

app.use("/data", dataRouter);

app.listen(PORT, () => {
	console.log(`API listening on PORT ${PORT} `);
});

module.exports = app;
