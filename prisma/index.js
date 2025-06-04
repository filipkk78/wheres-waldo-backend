const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const allCharacters = await prisma.character.findMany();
  console.log(allCharacters);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
