const express = require("express");
//we are mounting our routes within this file by applying object destructing
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

//using the router object in express.js
const router = express.Router();

//we are using the router object to connect all the routes that have an HTTP Request assign to localhost("/").
router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);

//we are using the router object to connect all the routes that have an HTTP Request assign with an :id.
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
