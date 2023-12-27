import { FeaturedRecipiesPage } from "@/components/component/featured-recipies-page";
import NavComponent from "@/components/misc/navbar";

export default async function RecipiesPage() {
  return (
    <>
    <NavComponent />
    <FeaturedRecipiesPage />
    </>
  );
}
