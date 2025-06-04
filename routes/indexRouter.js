const { Router } = require("express");
const indexRouter = Router();
const {
  getLeaderboard,
  addEntry,
  updateEntry,
} = require("../controllers/indexController");
indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.get("/leaderboard", getLeaderboard);
indexRouter.post("/leaderboard", addEntry);
indexRouter.put("/leaderboard", updateEntry);

module.exports = indexRouter;
