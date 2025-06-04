const db = require("../prisma/queries");

async function getLeaderboard(req, res) {
  res.json({ leaderboard: await db.getLeaderboardEntries() });
}

async function addEntry(req, res) {
  const userId = await db.startSession(req.body.username);
  res.json({ message: `Added user with id`, id: userId });
}

async function updateEntry(req, res) {
  await db.finishSession(req.body.id);
  res.json({ message: `Updated user with id ${req.body.id}` });
}

async function checkCharCoords(req, res) {
  const result = await db.checkCoords(
    req.body.characterName,
    Number(req.body.coordsX),
    Number(req.body.coordsY)
  );
  res.json({ result });
}

module.exports = {
  getLeaderboard,
  addEntry,
  updateEntry,
  checkCharCoords,
};
