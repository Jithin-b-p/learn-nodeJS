import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // await prisma.post.delete({ where: { id: 1 } });

  // deleting post that are unpublished for a user.
  await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      posts: {
        deleteMany: {
          published: false,
        },
      },
    },
  });
};

main();
