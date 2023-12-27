import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import crypto from "crypto";

export async function PUT(req: Request) {
  const { id, likes }: { id: number; likes: number } = await req.json();

  const errCode = crypto.randomBytes(4).toString("base64");

  try {
    const recipe = await prisma.recipe.update({
      where: {
        id: id,
      },
      data: {
        likes: likes.valueOf() + 1,
      },
    });
    return JSON.stringify(recipe);
  } catch (err) {
    log.info("Error while updating recipies", {
      error: err,
      errCode: errCode,
    });
    return JSON.stringify(err);
  } finally {
    await log.flush();
    await prisma.$disconnect();
  }
}
