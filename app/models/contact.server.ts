import { prisma } from "~/utils/database.server";

export const create_contact = async (name: string, user_id: string) => {
  return await prisma.contact.create({
    data: {
      name,
      user_id,
    },
  });
};
