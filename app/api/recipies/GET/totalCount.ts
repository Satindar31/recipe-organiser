import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {

    const user = await currentUser()
    if(!user || !user.id) return new Response(JSON.stringify({}))

    const count = await prisma.recipe.count({
        where: {
            authorId: user?.id
        }
    });
}