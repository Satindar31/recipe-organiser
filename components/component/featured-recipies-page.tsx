import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { IRecipe } from "@/interfaces/recipe";
import Image from "next/image";
import Link from "next/link";

export async function FeaturedRecipiesPage() {
  // UPDATE IN app/api
  const res = await fetch(process.env.URL + "/api/recipies/featured");
  const data = await res.json();
  const recipies: IRecipe[] = await data.recipies;

  return (
    <main className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Featured Recipes
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover our curated selection of the best recipes from around the
              world.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipies.map((recipe) => (
            <Card key={recipe.id.toString()}>
              <CardHeader>
                <Image
                  alt="Recipe Image"
                  className="w-full aspect-[1/1] object-cover"
                  height="200"
                  src={recipe.image.toString() ?? "./hero-stock.jpg"}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2 className="text-lg font-bold">{recipe.name}</h2>
                <p className="text-sm text-gray-500 truncate">
                  {recipe.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-sm text-blue-500 hover:text-blue-600"
                  href={"/recipe/" + recipe.id}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
