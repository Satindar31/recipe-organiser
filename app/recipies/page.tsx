import NavComponent from "@/components/misc/navbar";
import { IRecipe } from "@/interfaces/recipe";

export default async function RecipiesPage() {
  const res = await fetch(process.env.URL + "/api/featured/recipies", {
    method: "POST",
    body: JSON.stringify({
      order: "newest",
    }),
    cache: "force-cache",
    next: {
      revalidate: 43200,
    },
  });
  const data: IRecipe[] = await res.json();
  return (
    <div>
      <NavComponent />
      <h1 className="text-5xl">Recipies</h1>
      <h2>Newest recipies</h2>
      <div className="grid grid-cols-2 grid-rows-2">
        {data.map((recipe) => (
          <div key={recipe.id.toString()}>
            <p className="text-black">{recipe.name}</p>
            <p className="text-gray-800">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
