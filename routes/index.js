const express = require("express");
const path = require("path");

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");

const router = express.Router();

module.exports = () => {
  router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./static/index.html"));
  });

  router.use("/speakers", speakersRoute());
  router.use("/feedback", feedbackRoute());

  return router;
};

// router.get("/speakers", (request, response) => {
//  response.sendFile(path.join(__dirname, "./static/speakers.html"));
// });
