const express = require("express");

const path = require("path");

const cookieSession = require("cookie-session");

const routes = require("./routes");

const FeedbackService = require("./services/FeedbackService");
const SpeakersService = require("./services/SpeakerService");

const feedbackService = new FeedbackService("./data/feedback.json");
const speakersService = new SpeakersService("./data/speakers.json");

const app = express();

const port = 3000;

app.set("trust proxy", 1);

app.use(
  cookieSession({
    name: "session",
    keys: ["key", "key2"],
  })
);

app.use(express.static(path.join(__dirname, "./static")));

app.use(
  "/",
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
