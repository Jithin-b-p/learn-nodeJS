import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      email: "jithinbp007@gmail.com",
      name: "Jithin B P",
    },
  });
};

main();
