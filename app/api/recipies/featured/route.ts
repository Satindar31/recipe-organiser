import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import crypto from "crypto";

export async function GET() {
  const errCode = crypto.randomBytes(4).toString("base64");
  try {
    const recipies = await prisma.recipe.findMany({
      orderBy: {
        likes: "desc",
      },
      take: 4,
    });
    return new Response(JSON.stringify({ recipies: recipies }));
  } catch (err) {
    log.error("Error while getting featured recipies", {
      err: err,
      errCode: errCode,
    });
  } finally {
    await log.flush();
    await prisma.$disconnect();
  }
}
