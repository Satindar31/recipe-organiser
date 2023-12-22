import ButtonsBody from "@/components/dashboard/card/body-buttons";
import config from "@/config";
import { IRecipe } from "@/interfaces/recipe";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";

export default async function Dashboard() {
  const user = await currentUser();
  if (!user) return <Spinner size="lg" />;
  const res = await fetch(process.env.URL + "/api/recipies", {
    next: {
      revalidate: config.dashboardCacheDuration,
    },
    method: "POST",
    body: JSON.stringify({
      userId: user.id,
    }),
  });
  const resJSON = await res.json();
  const data: IRecipe[] = await resJSON.data;

  return (
    <div className="bg-white text-black">
      <nav className="p-4 border-b border-gray-200 bg-transparent backdrop-blur">
        <UserButton />
      </nav>
      <main className="p-4">
        <h1 className="text-6xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to your dashboard {user.firstName}!
        </p>
        <Divider />
      </main>

      <div className="flex flex-col justify-center items-center h-">
        {resJSON.totalRecipiesCount == 0 ? (
          <>
            <h2 className="font-semibold text-4xl">Create your first recipe</h2>

            <Button href="/dashboard/create-recipe" as={Link} variant="solid">
              Create recipe
            </Button>
          </>
        ) : (
          <>
            <h2 className="font-semibold text-4xl">Your recipes</h2>
            <Button href="/dashboard/create-recipe" as={Link} variant="solid">
              Create recipe
            </Button>
            <></>
            {data.map((recipe) => (
              <Card
                key={recipe.id.toString()}
                className="flex w-2/3 m-auto gap-3"
              >
                <CardHeader>
                  <Link href={"/recipe/" + recipe.id}>{recipe.name}</Link>
                </CardHeader>
                <Divider />
                <CardBody>
                  <ButtonsBody
                    description={recipe.description}
                    ingridients={recipe.ingredients}
                    name={recipe.name}
                    recipeID={recipe.id}
                    steps={recipe.instructions}
                    stepsJSON={recipe.stepsJSON}
                  />
                </CardBody>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
