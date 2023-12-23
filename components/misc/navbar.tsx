import { UserButton } from "@clerk/nextjs";
import { ChefHatIcon } from "lucide-react";
import Link from "next/link";

export default async function NavComponent() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <ChefHatIcon className="h-6 w-6" />
        <span className="sr-only">RecipeShare</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/#recipies"
        >
          Recipes
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/#testimonials"
          scroll
        >
          Testimonials
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
