const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function startSession(username) {
  await prisma.leaderboard.create({
    data: {
      username,
    },
  });
}

async function finishSession(id) {
  const desiredSession = await prisma.leaderboard.findUnique({
    where: {
      id,
    },
  });
  await prisma.leaderboard.update({
    where: { id },
    data: {
      completionTime: (new Date() - desiredSession.startedAt) / 100,
    },
  });
}

async function logSessions() {
  const allSessions = await prisma.leaderboard.findMany();
  console.log(allSessions);
}

// startSession("Skibidi");
// finishSession("5de4e268-0856-47fb-a132-b739396c2261");
// logSessions();

// async function nukeLeaderboard() {
//   await prisma.leaderboard.deleteMany();
// }
// nukeLeaderboard();

module.exports = {
  prisma,
};
