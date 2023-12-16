import { log } from "@logtail/next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import crypto from "crypto";

export async function DELETE(req: Request) {
  const { id }: { id: number } = await req.json();

  const errCode = crypto.randomBytes(4).toString("base64");

  try {
    await prisma.recipe.delete({
      where: {
        id: id,
      },
    });
    return new Response("DELETED", {
      status: 200,
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "Recipe not found.", code: errCode }),
        {
          status: 404,
        }
      );
    }
    console.log(err);
    log.error("Error deleting recipe", {
      error: err,
      errCode,
    });
    return new Response(
      JSON.stringify({ error: "Internal Server Error.", code: errCode }),
      {
        status: 500,
      }
    );
  } finally {
    log.flush();
    prisma.$disconnect();
  }
}
