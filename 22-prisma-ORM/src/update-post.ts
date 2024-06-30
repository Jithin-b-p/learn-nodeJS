import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      published: true,
    },
  });
};

main();
