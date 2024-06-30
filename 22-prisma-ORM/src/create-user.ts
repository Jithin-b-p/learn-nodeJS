import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      email: "jishnu123@gmail.com",
      name: "Jishnu B P",

      posts: {
        create: [
          {
            title: "KISHI KAISI",
          },
          {
            title: "Heavy rain!!",
          },
        ],
      },
    },
  });
};

main();
