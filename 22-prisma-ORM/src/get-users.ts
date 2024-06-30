import { PrismaClient } from "@prisma/client";

// debugg logs
const prisma = new PrismaClient({ log: ["info", "query"] });

const main = async () => {
  const users = await prisma.user.findMany({});

  console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: true,
    },
  });

  console.log(user);
};

main();
