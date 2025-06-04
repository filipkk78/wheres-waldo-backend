const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function startSession(username) {
  const entry = await prisma.leaderboard.create({
    data: {
      username,
    },
  });
  return entry.id;
}

async function finishSession(id) {
  const now = new Date();
  const desiredSession = await prisma.leaderboard.findUnique({
    where: {
      id,
    },
  });
  const completionMiliseconds = now - desiredSession.startedAt;
  const seconds = completionMiliseconds / 1000;
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const leftoverSeconds = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  const completionMinutes = `${mins}:${leftoverSeconds}`;
  await prisma.leaderboard.update({
    where: { id },
    data: {
      completionTimeMs: completionMiliseconds,
      completionInterval: completionMinutes,
    },
  });
}

async function getLeaderboardEntries() {
  const allSessions = await prisma.leaderboard.findMany();
  return allSessions;
}

async function checkCoords(characterName, coordsX, coordsY) {
  const character = await prisma.character.findUnique({
    where: {
      name: characterName,
    },
  });
  if (
    character.posXMax >= coordsX &&
    character.posXMin <= coordsX &&
    character.posYMax >= coordsY &&
    character.posYMin <= coordsY
  ) {
    return true;
  } else {
    return false;
  }
}

async function getCharacters() {
  const characters = await prisma.character.findMany();
  console.log(characters);
}

// async function nukeLeaderboard() {
//   await prisma.leaderboard.deleteMany();
// }
// nukeLeaderboard();

// getCharacters();

module.exports = {
  prisma,
  getLeaderboardEntries,
  startSession,
  finishSession,
  checkCoords,
};
