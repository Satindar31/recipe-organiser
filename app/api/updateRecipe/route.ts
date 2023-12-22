import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import crypto from "crypto";

export async function PUT(req: Request) {
  const { id, description, title, steps, ingredients } = await req.json();

  const errCode = crypto.randomBytes(4).toString("base64");

  try {
    const recipe = await prisma.recipe.update({
      where: { id },
      data: {
        description,
        name: title,
        instructions: steps,
        ingredients,
      },
    });

    return new Response(JSON.stringify(recipe), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    log.error("Error updating recipe", {
      error: err,
      recipeID: id,
      errCode,
    });
    return new Response(JSON.stringify({ err, code: errCode }), {
      status: 500,
    });
  } finally {
    await log.flush();
    await prisma.$disconnect();
  }
}
