import { prisma } from "~/utils/database.server";

export const create_user = async (username: string, password: string) => {
  return await prisma.user.create({
    data: {
      username,
      password,
    },
  });
};

export const get_user_by_id = async (id: string) => {
  return await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      contacts: true
    }
  })
};

export const get_user_by_auth = async (username: string, password: string) => {
  return await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });
};
