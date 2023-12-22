import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import crypto from "crypto";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const errCode = crypto.randomBytes(4).toString("base64");

  const { id } = await req.json();
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: Number(id) },
    });

    return new Response(JSON.stringify(recipe));
  } catch (err) {
    console.log(err);
    log.error("Error while getting recipe", {
      error: err,
      errCode,
    });
    return new Response(JSON.stringify({ err, errCode }));
  } finally {
    await log.flush();
    await prisma.$disconnect();
  }
}
