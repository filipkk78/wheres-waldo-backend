const { Router } = require("express");
const indexRouter = Router();
const {
  getLeaderboard,
  addEntry,
  updateEntry,
  checkCharCoords,
} = require("../controllers/indexController");
indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.get("/leaderboard", getLeaderboard);
indexRouter.post("/leaderboard", addEntry);
indexRouter.put("/leaderboard", updateEntry);
indexRouter.post("/character", checkCharCoords);

module.exports = indexRouter;
