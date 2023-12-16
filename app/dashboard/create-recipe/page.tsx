import CreateRecipeForm from "@/components/create recipe/form";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Divider, Spinner } from "@nextui-org/react";

export default async function CreateRecipePage() {

    const user = await currentUser();


    if (!user) return <Spinner size="lg" />;

    return (
        <div className="bg-white text-black">
        <nav className="p-4 border-b border-gray-200 bg-transparent backdrop-blur">
            <UserButton />
        </nav>
        <main className="p-4">
            <h1 className="sm:text-6xl sm:text-left text-3xl text-center font-bold">Create Recipe</h1>
            <p className="text-gray-500">
            Good luck making the new recipe, {user.firstName}!
            </p>
            <Divider />
        </main>

        <CreateRecipeForm userID={user.id} />

        </div>
    );
}