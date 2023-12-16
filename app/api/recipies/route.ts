export const dynamic = "force-dynamic";

import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import crypto from "crypto";

export async function POST(req: Request) {
  const errCode = crypto.randomBytes(4).toString("base64");

  const { userId } = await req.json();

  if (!userId)
    return new Response(
      JSON.stringify({ error: "Unauthorized", code: errCode }),
      { status: 401 }
    );

  try {
    const totalRecipies = await prisma.recipe.findMany({
      where: {
        authorID: userId,
      },
    });
    return new Response(JSON.stringify({ totalRecipiesCount: totalRecipies.length, data: totalRecipies }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    log.error("Error getting total recipies.", {
      error: err,
      errCode,
    });
    return new Response(
      JSON.stringify({ error: "Internal Server Error.", code: errCode }),
      { status: 500 }
    );
  } finally {
    log.flush();
    prisma.$disconnect();
  }
}
