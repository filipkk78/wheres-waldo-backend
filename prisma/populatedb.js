const { prisma } = require("./queries");

async function main() {
  await prisma.character.deleteMany();
  await prisma.character.createMany({
    data: [
      { name: "Wilson", posXMin: 83, posXMax: 85, posYMin: 97, posYMax: 99 },
      { name: "Neo", posXMin: 38, posXMax: 44, posYMin: 28, posYMax: 31 },
      { name: "Brian", posXMin: 13, posXMax: 15, posYMin: 49, posYMax: 51 },
    ],
  });
  const allChars = await prisma.character.findMany();
  console.log(allChars);
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
