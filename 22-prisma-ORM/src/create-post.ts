import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.post.create({
    data: {
      title: "Nice weather",
      content: "sky, garden",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
};

main();
