import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { JSONContent } from "@tiptap/react"

export async function POST(req: Request) {
  const {
    name,
    steps,
    description,
    ingredients,
    userID,
    stepsJSON
  }: {
    name: string;
    steps: string;
    description: string;
    ingredients: string;
    userID: string;
    stepsJSON: JSONContent
  } = await req.json();

  stepsJSON.sd
  try {
    const recipe = await prisma.recipe.create({
      data: {
        name: name,
        instructions: steps,
        description: description,
        ingredients: ingredients,
        authorID: userID,
        stepsJSON: stepsJSON
      },
    });
    return new Response(JSON.stringify(recipe), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    log.error("Error creating recipe", {
      error: err,
      request: req,
    });
    return new Response(JSON.stringify(err), {
      status: 500,
    });
  } finally {
    log.flush();
    await prisma.$disconnect();
  }
}
