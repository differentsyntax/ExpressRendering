const express = require("express");
const path = require("path");

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./static/index.html"));
  });

  router.use("/speakers", speakersRoute(params));
  router.use("/feedback", feedbackRoute(params));

  return router;
};

// router.get("/speakers", (request, response) => {
//  response.sendFile(path.join(__dirname, "./static/speakers.html"));
// });
