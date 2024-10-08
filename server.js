const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/mongoose.js");

// 1.bringing/using bootcamps.js file from the route folder
//Route files
const bootcamps = require("./routes/bootcamps.js");

//loading the dot-enviroment variables from the config/config.env
//Load env variables
dotenv.config({ path: "./config/config.env" });

//Connect to the Mongo database
connectDB();

// DEV logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 2.replacing the url(/api/v1/bootcamps) with the variable bootcamps,
// for each router.method(get, post, put, delete) in the bootcamps.js file
//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`
  );
});

//https://gist.github.com/bradtraversy/01adb248df70fb29e98c30cf659042cf
//https://github.com/bradtraversy/devcamper-api/tree/master
//https://github.com/develobing/devcamper
//https://documenter.getpostman.com/view/8923145/SVtVVTzd

// GET / POST / PUT / DELETE
// api/v1/bootcamps
// api/v1/courses
// api/v1/reviews
// api/v1/auth
// api/v1/users
