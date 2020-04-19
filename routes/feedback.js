const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (request, response) => {
    response.send("Feedback Page");
  });

  router.post("/", (request, response) => {
    response.send("Feedback form posted");
  });

  return router;
};

// router.get("/speakers", (request, response) => {
//  response.sendFile(path.join(__dirname, "./static/speakers.html"));
// });
